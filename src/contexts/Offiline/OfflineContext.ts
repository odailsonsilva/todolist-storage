import { createContext, useContext } from 'react';

import { IOfflineContext } from './Interfaces';

export const OfflineContext = createContext<IOfflineContext>({} as IOfflineContext);

export const useOfflineContext = () => {
    return useContext(OfflineContext);
};
