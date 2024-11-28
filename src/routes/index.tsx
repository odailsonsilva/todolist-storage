import { NavigationContainer } from '@react-navigation/native';

import PrivateRoutes from './private/PrivateRoutes';
import PublicRoutes from './public/PublicRoutes';

import { ActivityIndicator } from '@/components';
import { Box } from '@/components/atoms/Box/Box';
import { useAuthContext } from '@/contexts/Auth/AuthContext';


export const AppRoutes = () => {
    const { isAuthenticated, isLoading } = useAuthContext();

    if (isLoading) {
        return (
            <Box flex={1} justifyContent="center" alignItems="center">
                <ActivityIndicator size="large" color="primary" />
            </Box>
        );
    }

    return (
        <NavigationContainer>
            {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
        </NavigationContainer>
    );
};
