import { realmDB } from '@/libs/realmDB';
import { ITodoDTO } from '@/models';

export interface IDBTask extends ITodoDTO {
    synced: boolean;
    action: 'create' | 'update' | 'delete';
}

const addTask = async (task: IDBTask) => {
    realmDB.write(() => {
        realmDB.create('Task', task);
    });
};

const getTasks = (): IDBTask[] => {
    return realmDB.objects('Task').map((task: any) => ({
        id: task.id,
        name: task.name,
        description: task.description,
        done: task.done,
        synced: task.synced,
        action: task.action,
    }));
};

const updateTask = async (task: IDBTask) => {
    realmDB.write(() => {
        const taskDB = realmDB.objectForPrimaryKey('Task', task.id);
        if (taskDB) {
            Object.keys(task).forEach((key: any) => {
                taskDB[key] = (task as any)[key];
            });
        }
    });
};

const deleteTask = (id: string) => {
    realmDB.write(() => {
        const task = realmDB.objectForPrimaryKey('Task', id);
        realmDB.delete(task);
    });
};

export const dbTodo = {
    addTask,
    getTasks,
    updateTask,
    deleteTask,
};
