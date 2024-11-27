import { createStackNavigator } from '@react-navigation/stack';

import Login from '@/screens/Login';

const Stack = createStackNavigator();

export default function PublicRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}
