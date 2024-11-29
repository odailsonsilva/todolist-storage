import React, { useState, useEffect } from 'react';

import { useNetInfo } from '@react-native-community/netinfo';

import { useAuthContext } from '../Auth/AuthContext';
import { useToast } from '../Toast/ToastContext';

import { OfflineContext } from './OfflineContext';

import { Text } from '@/components';
import { Box } from '@/components/atoms/Box/Box';
import { Button } from '@/components/atoms/Button/Button';
import { Modal } from '@/components/molecules/Modal/Modal';
import { ITodoDTO } from '@/models';
import { apiTodo } from '@/services/Todo/apiTodo';
import { useTodoDB, IDBTask } from '@/services/Todo/dbTodo';


export const OfflineProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<IDBTask[]>([]);

    const { showToast } = useToast();
    const [isOffline, setIsOffline] = useState(false);
    const [open, setOpen] = useState(false);

    const dbTodo = useTodoDB();
    const { user } = useAuthContext();
    const { isConnected } = useNetInfo();

    const addTask = async (task: ITodoDTO) => {
        try {
            const newTask: IDBTask = { ...task, synced: false, action: 'create', _id: Date.now().toString() || '', userId: Number(user?.id!) };
            if (isConnected) {
                await apiTodo.createTodo(task);
                newTask.synced = true;
            }
            dbTodo.addTask(newTask);
            setTasks([...dbTodo.getTasks()]);
            showToast({ message: 'Task added successfully', type: 'success', title: 'Success' });
        } catch (error) {
            showToast({ message: 'Error to add task', type: 'error', title: 'Error' });
        }
    };

    const editTask = async (updatedFields: IDBTask) => {
        try {
            const newTask: IDBTask = { ...updatedFields, synced: false, action: updatedFields.id ? 'update' : 'create', userId: Number(user?.id!) };
            if (isConnected) {
                await apiTodo.updateTodo({ ...updatedFields, id: updatedFields.id });
                newTask.synced = true;
            }
            dbTodo.updateTask(newTask);
            setTasks([...dbTodo.getTasks()]);
            showToast({ message: 'Task updated successfully', type: 'success', title: 'Success' });
        } catch (error) {
            showToast({ message: 'Error to update task', type: 'error', title: 'Error' });
        }
    };

    const deleteTask = async (updatedFields: IDBTask) => {
        if (updatedFields?.id) {
            if (isConnected) {
                await apiTodo.deleteTodo(updatedFields.id!);
                dbTodo.deleteLocalTask(updatedFields);
                setTasks([...dbTodo.getTasks()]);
                showToast({ message: 'Task deleted successfully', type: 'success', title: 'Success' });
                return;
            }
            const newTask: IDBTask = { ...updatedFields, synced: false, action: 'delete', userId: Number(user?.id!) };
            dbTodo.updateTask(newTask);
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
            const serverTasks: ITodoDTO[] = await apiTodo.getTodos(user?.id!);
            const formattedTasks = serverTasks.map(serverTask => ({
                synced: true,
                _id: serverTask.id!.toString(),
                action: 'create' as any,
                userId: serverTask.userId,
                title: serverTask.title,
                completed: serverTask.completed,
                id: serverTask.id,
                description: serverTask.description,
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
                userId: Number(user?.id!),
                title: task.title,
                completed: task.completed,
                description: task.description,
            };
            if (task.action === 'create') {
                await apiTodo.createTodo(todo);
            } else if (task.action === 'update') {
                await apiTodo.updateTodo({ ...todo, id: task.id });
            } else if (task.action === 'delete') {
                await apiTodo.deleteTodo(task.id!);
            }

            dbTodo.updateTask({ ...task, synced: true });
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
                    userId: Number(user?.id!),
                    title: task.title,
                    completed: task.completed,
                    description: task.description,
                };
                console.log({ todo });
                if (task.action === 'create') {
                    await apiTodo.createTodo(todo);
                } else if (task.action === 'update') {
                    await apiTodo.updateTodo({ ...todo, id: task.id });
                } else if (task.action === 'delete') {
                    await apiTodo.deleteTodo(task.id!);
                }
                dbTodo.updateTask({ ...task, synced: true });
            }

            setOpen(false);
            dbTodo.deleteAllTasks();
            await fetchAndStoreTasks();
            setTasks([...dbTodo.getTasks()]);
            showToast({ message: 'Tasks synced successfully', type: 'success', title: 'Success' });
        } catch (error) {
            showToast({ message: !isOffline ? 'Error to sync task' : 'Error to sync task, please check your internet connection', type: 'error', title: 'Error' });
        }
    };


    useEffect(() => {
        setTasks([]);
        fetchAndStoreTasks();
    }, [user]);

    useEffect(() => {
        setIsOffline(!isConnected);
        if (isConnected) {
            const unsyncedTasks = dbTodo.getTasks().filter((task: IDBTask) => !task.synced);
            const hasUnsyncedTasks = unsyncedTasks.length > 0;
            if (hasUnsyncedTasks) {
                setOpen(true);
            }
        }
    }, [isConnected]);


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
            <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
            >
                <Box>
                    <Text preset="titleLg" pt="s20">Sync Data</Text>
                    <Text preset="bodyMd" color="neutral700" mt="s16">You reconect to internet and have unsynced data, do you want to sync now?</Text>

                    <Box flexDirection="row" alignItems="center" mt="s24" mr="s20">
                        <Button
                            title="Cancel"
                            preset="primaryOutline"
                            width="50%"
                            fullWidth={false}
                            onPress={() => {
                                setOpen(false);
                            }}
                        />
                        <Button
                            title="Sync"
                            fullWidth={false}
                            width="50%"
                            ml="s8"
                            onPress={() => {
                                syncWithServer();
                            }}
                        />
                    </Box>
                </Box>
            </Modal>
        </OfflineContext.Provider>
    );
};


