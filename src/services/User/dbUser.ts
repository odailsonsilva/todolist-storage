import AsyncStorage from '@react-native-async-storage/async-storage';

import { IUserDTO } from '@/models';

export const useUserDB = () => {

    const getUser = async (): Promise<IUserDTO | null> => {
        try {
            const jsonValue = await AsyncStorage.getItem('user');
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.error('Error reading user from AsyncStorage', e);
            return null;
        }
    };

    const createUser = async (user: IUserDTO) => {
        try {
            const jsonValue = JSON.stringify(user);
            await AsyncStorage.setItem('user', jsonValue);
        } catch (e) {
            console.error('Error saving user to AsyncStorage', e);
        }
    };

    const deleteUser = async () => {
        try {
            await AsyncStorage.removeItem('user');
        } catch (e) {
            console.error('Error deleting user from AsyncStorage', e);
        }
    };

    return { getUser, createUser, deleteUser };
};

