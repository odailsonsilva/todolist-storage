import { Box, Button, Card, Screen, Text } from '@/components';

export const SettingsScreen = () => {
    return (
        <Screen>
            <Text preset="titleLg" marginBottom="s8">Settings</Text>
            <Text marginBottom="s32">Here you can see your details and logout.</Text>

            <Card>
                <Text preset="titleLg" marginBottom="s8">Details</Text>

                <Box flexDirection="row" gap="s4">
                    <Text style={{ fontWeight: 'bold' }}>Username:</Text>
                    <Text>John Doe</Text>
                </Box>
                <Box flexDirection="row" gap="s4">
                    <Text style={{ fontWeight: 'bold' }}>Total Todos:</Text>
                    <Text>10</Text>
                </Box>
                <Box flexDirection="row" gap="s4">
                    <Text style={{ fontWeight: 'bold' }}>Total Todos Not Synced:</Text>
                    <Text>10</Text>
                </Box>
            </Card>

            <Button
                title="Logout"
                marginTop="s32"
            />
        </Screen>
    );
};
