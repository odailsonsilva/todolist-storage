import { useEffect, useState } from 'react';

import { useToast } from '../Toast/ToastContext';

import { AuthContext } from './AuthContext';

import { useConfirmation } from '@/hooks/useConfirmation';
import { IUserDTO } from '@/models';
import { useTodoDB } from '@/services/Todo/dbTodo';
import { apiUser } from '@/services/User/apiUser';
import { useUserDB } from '@/services/User/dbUser';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<IUserDTO | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const { updateModalStateAndOpenModal, renderModal } = useConfirmation({
        title: 'Sync Data',
        description: 'You have unsynced data, do you want make logout?',
        confirm: 'Logout',
        cancel: 'Cancel',
    });
    const { showToast } = useToast();

    const dbUser = useUserDB();
    const { getTasks } = useTodoDB();

    const signIn = async (email: string, password: string) => {
        try {
            const userSaved = await apiUser.signUp(email, password);
            setUser(userSaved);
            setIsAuthenticated(true);
        } catch (error) {
            showToast({
                type: 'error',
                title: 'Error on sign in',
                message: 'Please check your email and password',
            });
        }
    };

    const signOut = () => {
        if (getTasks().length > 0) {
            updateModalStateAndOpenModal({
                onConfirm: () => {
                    setUser(null);
                    setIsAuthenticated(false);
                },
            });
        }
    };

    const getUser = async () => {
        const userDb = dbUser.getUser();

        if (userDb) {
            setUser(userDb);
            setIsAuthenticated(true);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, signIn, signOut, isAuthenticated }}>
            {children}
            {renderModal()}
        </AuthContext.Provider>
    );
};
