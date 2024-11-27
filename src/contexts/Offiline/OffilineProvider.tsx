import React, { useState, useEffect } from 'react';

import NetInfo from '@react-native-community/netinfo';

import { useToast } from '../Toast/ToastContext';

import { OfflineContext } from './OfflineContext';

import { useConfirmation } from '@/hooks/useConfirmation';
import { ITodoDTO } from '@/models';
import { apiTodo } from '@/services/Todo/apiTodo';
import { useTodoDB, IDBTask } from '@/services/Todo/dbTodo';


export const OfflineProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<IDBTask[]>([]);

    const { showToast } = useToast();
    const [isOffline, setIsOffline] = useState(false);
    const { updateModalStateAndOpenModal, renderModal } = useConfirmation({
        title: 'Sync Data',
        description: 'You reconect to internet and have unsynced data, do you want to sync now?',
        confirm: 'Sync',
        cancel: 'Cancel',
    });

    const dbTodo = useTodoDB();

    const addTask = (task: ITodoDTO) => {
        try {
            const newTask: IDBTask = { ...task, synced: false, action: 'create', _id: Date.now().toString() || '' };
            dbTodo.addTask(newTask);
            setTasks([...dbTodo.getTasks()]);
            showToast({ message: 'Task added successfully', type: 'success', title: 'Success' });
        } catch (error) {
            showToast({ message: 'Error to add task', type: 'error', title: 'Error' });
        }
    };

    const editTask = (updatedFields: IDBTask) => {
        try {
            dbTodo.updateTask({ ...updatedFields, action: 'update', synced: false });
            setTasks([...dbTodo.getTasks()]);
            showToast({ message: 'Task updated successfully', type: 'success', title: 'Success' });
        } catch (error) {
            showToast({ message: 'Error to update task', type: 'error', title: 'Error' });
        }
    };

    const deleteTask = (updatedFields: IDBTask) => {
        if (updatedFields?.id) {
            dbTodo.updateTask({ ...updatedFields, action: 'delete', synced: false });
            setTasks([...dbTodo.getTasks()]);
            showToast({ message: 'Task deleted successfully', type: 'success', title: 'Success' });
        } else {
            dbTodo.deleteLocalTask(updatedFields);
            setTasks([...dbTodo.getTasks()]);
            showToast({ message: 'Task deleted successfully', type: 'success', title: 'Success' });
        }
    };

    const fetchTasks = () => {
        setTasks([...dbTodo.getTasks()]);
    };

    const fetchAndStoreTasks = async () => {
        try {
            const serverTasks: ITodoDTO[] = await apiTodo.getTodos();
            const formattedTasks = serverTasks.map(serverTask => ({
                synced: true,
                _id: serverTask.id!.toString(),
                action: 'create' as any,
                userId: serverTask.userId,
                title: serverTask.title,
                completed: serverTask.completed,
                id: serverTask.id,
            }));
            const localTasks = dbTodo.getTasks();
            const mergedTasks: IDBTask[] = [...localTasks];

            const serverTasksNotInLocal = formattedTasks.filter((serverData) => !localTasks.some((localData) => localData._id === serverData._id));
            mergedTasks.push(...serverTasksNotInLocal);

            serverTasksNotInLocal.forEach((task) => dbTodo.addTask(task));
            setTasks(mergedTasks);

        } catch (error) {
            console.error('Error fetching and storing tasks', error);
        }
    };

    const onSyncServerByTask = async (task: IDBTask) => {
        try {
            const todo: ITodoDTO = {
                userId: 1,
                title: task.title,
                completed: task.completed,
            };

            if (task.action === 'create') {
                await apiTodo.createTodo(todo);
            } else if (task.action === 'update') {
                await apiTodo.updateTodo({ ...todo, id: task.id });
            } else if (task.action === 'delete') {
                await apiTodo.deleteTodo(task.id!);
            }

            await fetchAndStoreTasks();

            dbTodo.updateTask({ ...task, synced: true });
            dbTodo.deleteLocalTask(task);
            showToast({ message: 'Task synced successfully', type: 'success', title: 'Success' });
        } catch (error) {
            showToast({ message: !isOffline ? 'Error to sync task' : 'Error to sync task, please check your internet connection', type: 'error', title: 'Error' });
        } finally {
            setTasks([...dbTodo.getTasks()]);
        }
    };

    const syncWithServer = async () => {
        try {
            const unsyncedTasks = dbTodo.getTasks().filter((task: IDBTask) => !task.synced);
            for (let task of unsyncedTasks) {
                const todo: ITodoDTO = {
                    userId: 1,
                    title: task.title,
                    completed: task.completed,
                };

                if (task.action === 'create') {
                    await apiTodo.createTodo(todo);
                } else if (task.action === 'update') {
                    await apiTodo.updateTodo({ ...todo, id: task.id });
                } else if (task.action === 'delete') {
                    await apiTodo.deleteTodo(task.id!);
                }
                dbTodo.updateTask({ ...task, synced: true });
            }

            dbTodo.deleteAllTasks();
            await fetchAndStoreTasks();
            setTasks([...dbTodo.getTasks()]);
            showToast({ message: 'Tasks synced successfully', type: 'success', title: 'Success' });
        } catch (error) {
            showToast({ message: !isOffline ? 'Error to sync task' : 'Error to sync task, please check your internet connection', type: 'error', title: 'Error' });
        }
    };

    useEffect(() => {
        fetchAndStoreTasks();
        dbTodo.deleteAllTasks();

        const unsubscribe = NetInfo.addEventListener((state) => {
            setIsOffline(!state.isConnected);
            if (state.isConnected) {
                const unsyncedTasks = dbTodo.getTasks().filter((task: IDBTask) => !task.synced);
                const hasUnsyncedTasks = unsyncedTasks.length > 0;
                if (hasUnsyncedTasks) {
                    updateModalStateAndOpenModal({
                        onConfirm: () => syncWithServer(),
                    });
                }
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <OfflineContext.Provider
            value={{
                tasks,
                isOffline,
                addTask,
                editTask,
                deleteTask,
                syncWithServer,
                fetchTasks,
                onSyncServerByTask,
            }}
        >
            {children}
            {renderModal()}
        </OfflineContext.Provider>
    );
};

