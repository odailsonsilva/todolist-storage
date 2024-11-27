import { api } from '@/libs/axios';
import { IUserDTO } from '@/models';

const signUp = async (email: string, password: string) => {
    try {
        const response = await api.get('/users');
        const user = response.data.find((user: IUserDTO) => user.email === email && user.password === password);

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    } catch (error) {
        throw new Error('User not found');
    }
};

export const apiUser = {
    signUp,
};
