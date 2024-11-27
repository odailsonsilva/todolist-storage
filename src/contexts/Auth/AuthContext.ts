import { createContext, useContext } from 'react';

import { IAuthContext } from './Interfaces';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuthContext = () => {
    return useContext(AuthContext);
};
