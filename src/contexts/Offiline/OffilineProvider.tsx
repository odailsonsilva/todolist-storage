import React, { useState, useEffect } from 'react';

import NetInfo from '@react-native-community/netinfo';

import { OfflineContext } from './OfflineContext';

import { ITodoDTO } from '@/models';
import { apiTodo } from '@/services/Todo/apiTodo';
import { dbTodo, IDBTask } from '@/services/Todo/dbTodo';


export const OfflineProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<ITodoDTO[]>([]);
    const [isOffline, setIsOffline] = useState(false);

    const addTask = (task: ITodoDTO) => {
        const newTask: IDBTask = { ...task, id: Date.now().toString(), synced: false, action: 'create' };
        dbTodo.addTask(newTask);
        setTasks((prev: ITodoDTO[]) => [...prev, newTask]);
    };

    const editTask = (updatedFields: IDBTask) => {
        dbTodo.updateTask({ ...updatedFields, action: 'update' });
        setTasks([...dbTodo.getTasks()]);
    };

    const deleteTask = (id: string) => {
        dbTodo.deleteTask(id);
        setTasks([...dbTodo.getTasks()]);
    };

    const fetchTasks = () => {
        setTasks([...dbTodo.getTasks()]);
    };

    const syncWithServer = async () => {
        console.log('syncWithServer');

        const unsyncedTasks = dbTodo.getTasks().filter((task: IDBTask) => !task.synced);
        for (let task of unsyncedTasks) {
            try {
                const todo: ITodoDTO = {
                    id: task?.id,
                    name: task.name,
                    description: task.description,
                    done: task.done,
                };

                if (task.action === 'create') {
                    await apiTodo.createTodo(todo);
                } else if (task.action === 'update') {
                    await apiTodo.updateTodo(todo);
                } else if (task.action === 'delete') {
                    await apiTodo.deleteTodo(todo.id);
                }

                dbTodo.updateTask({ ...task, synced: true });
            } catch (error) {
                console.error('Failed to sync task:', error);
            }
        }
        setTasks([...dbTodo.getTasks()]);
    };

    useEffect(() => {
        fetchTasks();

        const unsubscribe = NetInfo.addEventListener((state) => {
            setIsOffline(!state.isConnected);
            if (state.isConnected) {
                syncWithServer();
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
            }}
        >
            {children}
        </OfflineContext.Provider>
    );
};

