import { useRealm } from '@/libs/realmDB';
import { ITodoDTO } from '@/models';

export interface IDBTask extends ITodoDTO {
    _id: string;
    synced: boolean;
    action: 'create' | 'update' | 'delete';
}


export const useTodoDB = () => {
    const realm = useRealm();

    const addTask = (task: IDBTask) => {
        realm.write(() => {
            realm.create('Task', task);
        });
    };

    const getTasks = (): IDBTask[] => {
        return realm.objects('Task').map((task: any) => ({
            _id: task._id,
            id: task.id,
            userId: task.userId,
            title: task.title,
            completed: task.completed,
            synced: task.synced,
            action: task.action,
            description: task.description,
        })).sort((a, b) => a.synced ? 1 : b.synced ? -1 : 0);
    };

    const updateTask = (task: IDBTask) => {
        realm.write(() => {
            realm.create('Task', task, true);
        });
    };

    const deleteTask = (id: string) => {
        realm.write(() => {
            realm.delete(realm.objectForPrimaryKey('Task', id));
        });
    };

    const deleteLocalTask = (task: IDBTask) => {
        realm.write(() => {
            realm.delete(realm.objectForPrimaryKey('Task', task._id));
        });
    };

    const deleteAllTasks = () => {
        realm.write(() => {
            realm.deleteAll();
        });
    };

    return { addTask, getTasks, updateTask, deleteTask, deleteLocalTask, deleteAllTasks };
};

