import { api } from '@/libs/axios';
import { ITodoDTO } from '@/models';
import { ENDPOINTS } from '@/utils/endpoints';

const getTodos = async () => {
    const response = await api.get(ENDPOINTS.TODOS);
    return response.data;
};

const createTodo = async (todo: ITodoDTO) => {
    const response = await api.post(ENDPOINTS.TODOS, todo);
    return response.data;
};

const updateTodo = async (todo: ITodoDTO) => {
    const response = await api.put(`${ENDPOINTS.TODOS}/${todo.id}`, todo);
    return response.data;
};

const deleteTodo = async (id: string) => {
    const response = await api.delete(`${ENDPOINTS.TODOS}/${id}`);
    return response.data;
};

export const apiTodo = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
};
