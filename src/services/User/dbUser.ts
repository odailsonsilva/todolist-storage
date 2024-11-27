import { useRealm } from '@/libs/realmDB';
import { IUserDTO } from '@/models';

export const useUserDB = () => {
    const realm = useRealm();

    const getUser = (): IUserDTO => {
        return realm.objects('User').map((user: any) => ({
            id: user.id,
            email: user.email,
            name: user.name,
            password: user.password,
        }))?.[0];
    };


    return { getUser };
};

