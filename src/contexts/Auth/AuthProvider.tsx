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
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const { updateModalStateAndOpenModal, renderModal } = useConfirmation({});
    const { showToast } = useToast();

    const dbUser = useUserDB();
    const { getTasks, deleteAllTasks } = useTodoDB();

    const signIn = async (email: string, password: string) => {
        try {
            const userSaved = await apiUser.signUp(email, password);
            dbUser.createUser(userSaved);
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
        const hasUnsyncedTasks = getTasks().filter((task) => !task.synced).length > 0;
        updateModalStateAndOpenModal({
            onConfirm: () => {
                setUser(null);
                setIsAuthenticated(false);
                deleteAllTasks();
                dbUser.deleteUser();
            },
            title: hasUnsyncedTasks ? 'Sync Data' : 'Logout',
            description: hasUnsyncedTasks ? 'You have unsynced data, do you want make logout?' : 'Do you want make logout?',
            confirm: 'Logout',
            cancel: 'Cancel',
        });
    };

    const getUser = async () => {
        setIsLoading(true);
        const userDb = await dbUser.getUser();

        if (userDb) {
            setUser(userDb);
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, signIn, signOut, isAuthenticated, isLoading }}>
            {children}
            {renderModal()}
        </AuthContext.Provider>
    );
};
