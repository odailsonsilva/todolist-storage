import { FlatList } from 'react-native';

import { Box, Card, Chip, Screen, Text, TouchableOpacityBox } from '@/components';
import { useConfirmation } from '@/hooks/useConfirmation';

const Item = ({ item }: { item: any, index: number, }) => {
    const { openConfirmModal, renderModal } = useConfirmation({
        title: 'Sync Data',
        description: 'Are you sure you want to sync this data?',
        confirm: 'Sync',
        cancel: 'Cancel',
    });

    const label = item.action === 'create' ? 'Created' : item.action === 'update' ? 'Updated' : 'Deleted';

    const handlePressItem = () => {
        openConfirmModal();
    };

    return (
        <Card mr="s4">
            <TouchableOpacityBox flexDirection="row" justifyContent="space-between" alignItems="center" onPress={handlePressItem}>
                <Box flex={1}>
                    <Text preset="titleLg">{item.name}</Text>
                    <Text preset="labelSm">{item.name}</Text>
                </Box>
                <Chip preset={item.action}>{label}</Chip>
            </TouchableOpacityBox>

            {renderModal()}
        </Card>
    );
};



export const SyncDataScreen = () => {
    const mockData = [
        { id: '1', name: 'Item 1', action: 'create' },
        { id: '2', name: 'Item 2', action: 'update' },
        { id: '3', name: 'Item 3', action: 'delete' },
    ];

    return (
        <Screen>
            <Text preset="titleLg" marginBottom="s8">Sync Data</Text>
            <Text marginBottom="s32">Here you can sync your data with the server. Click on the item to make the update to the server.</Text>

            <FlatList
                data={mockData}
                renderItem={({ item, index }) => <Item item={item} index={index} />}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </Screen>
    );
};
