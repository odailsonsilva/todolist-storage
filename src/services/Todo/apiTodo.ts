import { api } from '@/libs/axios';
import { ITodoDTO } from '@/models';
import { ENDPOINTS } from '@/utils/endpoints';

const getTodos = async (userId: number | string): Promise<ITodoDTO[]> => {
    const response = await api.get(ENDPOINTS.TODOS);
    console.log('response', response.data);
    return response.data?.filter((todo: ITodoDTO) => String(todo.userId) === String(userId));
};

const createTodo = async (todo: ITodoDTO) => {
    const response = await api.post(ENDPOINTS.TODOS, todo);
    return response;
};

const updateTodo = async (todo: ITodoDTO) => {
    const response = await api.put(`${ENDPOINTS.TODOS}/${todo.id}`, todo);
    return response;
};

const deleteTodo = async (id: number | string) => {
    const response = await api.delete(`${ENDPOINTS.TODOS}/${id}`);
    return response;
};

export const apiTodo = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
};
