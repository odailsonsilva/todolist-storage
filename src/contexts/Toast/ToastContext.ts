import { createContext, useContext } from 'react';

import { IToastContext } from './Interface/IToastContext';

export const ToastContext = createContext<IToastContext>({} as IToastContext);

export const useToast = () => {
    return useContext(ToastContext);
};
