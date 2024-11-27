import { createStackNavigator } from '@react-navigation/stack';

import Login from '@/screens/Login';

const Stack = createStackNavigator();

export default function PrivateRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}
