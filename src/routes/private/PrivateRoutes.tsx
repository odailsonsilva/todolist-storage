import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppTabBarApp } from '@/components/molecules/TabBarCustom';
import { TodoScreen } from '@/screens/TodoScreen';

const Tab = createBottomTabNavigator();

function TabCustom(props: BottomTabBarProps) {
    return <AppTabBarApp {...props} />;
}

export default function PrivateRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={TabCustom}>
            <Tab.Screen name="Sync" component={TodoScreen} />
            <Tab.Screen name="Home" component={TodoScreen} />
            <Tab.Screen name="Settings" component={TodoScreen} />
        </Tab.Navigator>
    );
}
