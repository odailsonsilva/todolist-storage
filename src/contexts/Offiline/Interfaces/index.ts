import { ITodoDTO } from '@/models';
import { IDBTask } from '@/services/Todo/dbTodo';

export interface IOfflineContext {
    tasks: ITodoDTO[];
    isOffline: boolean;
    addTask: (task: ITodoDTO) => void;
    editTask: (task: IDBTask) => void;
    deleteTask: (id: string) => void;
    syncWithServer: () => Promise<void>;
    fetchTasks: () => void;
}
