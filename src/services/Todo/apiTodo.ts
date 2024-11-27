import { api } from '@/libs/axios';
import { ITodoDTO } from '@/models';
import { ENDPOINTS } from '@/utils/endpoints';

const getTodos = async (): Promise<ITodoDTO[]> => {
    const response = await api.get(ENDPOINTS.TODOS);
    return response.data?.filter((todo: ITodoDTO) => todo.userId === 1);
};

const createTodo = async (todo: ITodoDTO) => {
    const response = await api.post(ENDPOINTS.TODOS, todo);
    return response;
};

const updateTodo = async (todo: ITodoDTO) => {
    const response = await api.put(`${ENDPOINTS.TODOS}/${todo.id}`, todo);
    return response;
};

const deleteTodo = async (id: number) => {
    const response = await api.delete(`${ENDPOINTS.TODOS}/${id}`);
    return response;
};

export const apiTodo = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
};
