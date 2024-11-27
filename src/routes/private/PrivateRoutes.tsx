import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppTabBarApp } from '@/components/molecules/TabBarCustom';
import { SettingsScreen } from '@/screens/Settings';
import { SyncDataScreen } from '@/screens/SyncData';
import { TodoScreen } from '@/screens/TodoScreen';

const Tab = createBottomTabNavigator();

function TabCustom(props: BottomTabBarProps) {
    return <AppTabBarApp {...props} />;
}

export default function PrivateRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={TabCustom} initialRouteName="Home">
            <Tab.Screen name="Sync" component={SyncDataScreen} />
            <Tab.Screen name="Home" component={TodoScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}
