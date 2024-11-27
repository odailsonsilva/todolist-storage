import { IUserDTO } from '@/models';

export interface IAuthContext {
    user: IUserDTO | null;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void;
    isAuthenticated: boolean;
    isLoading: boolean;
}
