import { NavigationContainer } from '@react-navigation/native';

import PrivateRoutes from './private/PrivateRoutes';
import PublicRoutes from './public/PublicRoutes';


export const AppRoutes = () => {
    const isAuthenticated = true;

    return (
        <NavigationContainer>
            {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
        </NavigationContainer>
    );
};
