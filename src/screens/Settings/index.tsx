import { Box, Button, Card, Screen, Text } from '@/components';
import { useAuthContext } from '@/contexts/Auth/AuthContext';
import { useOfflineContext } from '@/contexts/Offiline/OfflineContext';

export const SettingsScreen = () => {
    const { user, signOut } = useAuthContext();
    const { tasks } = useOfflineContext();

    const tasksNotSynced = tasks.filter((task) => !task.synced);

    return (
        <Screen>
            <Text preset="titleLg" marginBottom="s8">Settings</Text>
            <Text marginBottom="s32">Here you can see your details and logout.</Text>

            <Card>
                <Text preset="titleLg" marginBottom="s8">Details</Text>

                <Box flexDirection="row" gap="s4">
                    <Text style={{ fontWeight: 'bold' }}>Username:</Text>
                    <Text>{user?.name}</Text>
                </Box>
                <Box flexDirection="row" gap="s4">
                    <Text style={{ fontWeight: 'bold' }}>Total Todos:</Text>
                    <Text>{tasks.length}</Text>
                </Box>
                <Box flexDirection="row" gap="s4">
                    <Text style={{ fontWeight: 'bold' }}>Total Todos Not Synced:</Text>
                    <Text>{tasksNotSynced.length}</Text>
                </Box>
            </Card>

            <Button
                title="Logout"
                marginTop="s32"
                onPress={signOut}
            />
        </Screen>
    );
};
