import { ITodoDTO } from '@/models';
import { IDBTask } from '@/services/Todo/dbTodo';

export interface IOfflineContext {
    tasks: IDBTask[];
    isOffline: boolean;
    addTask: (task: ITodoDTO) => void;
    editTask: (task: IDBTask) => void;
    deleteTask: (task: IDBTask) => void;
    syncWithServer: () => Promise<void>;
    fetchTasks: () => void;
    onSyncServerByTask: (task: IDBTask) => Promise<void>;
}
