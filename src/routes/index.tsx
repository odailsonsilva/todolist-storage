import { NavigationContainer } from '@react-navigation/native';

import PrivateRoutes from './private/PrivateRoutes';
import PublicRoutes from './public/PublicRoutes';

import { useAuthContext } from '@/contexts/Auth/AuthContext';


export const AppRoutes = () => {
    const { isAuthenticated } = useAuthContext();

    return (
        <NavigationContainer>
            {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
        </NavigationContainer>
    );
};
