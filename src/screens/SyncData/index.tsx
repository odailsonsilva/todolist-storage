import { useMemo } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Box, Card, Chip, Icon, Screen, Text, TouchableOpacityBox } from '@/components';
import { EmptyText } from '@/components/atoms/EmptyText';
import { useOfflineContext } from '@/contexts/Offiline/OfflineContext';
import { useConfirmation } from '@/hooks/useConfirmation';
import { IDBTask } from '@/services/Todo/dbTodo';
import { palette } from '@/theme';

const Item = ({ item }: { item: IDBTask, index: number, }) => {
    const { onSyncServerByTask } = useOfflineContext();
    const { renderModal, updateModalStateAndOpenModal } = useConfirmation({
        title: 'Sync Data',
        description: 'Are you sure you want to sync this data?',
        confirm: 'Sync',
        cancel: 'Cancel',
    });

    const label = item.action === 'create' ? 'Created' : item.action === 'update' ? 'Updated' : 'Deleted';

    const handlePressItem = () => {
        updateModalStateAndOpenModal({
            onConfirm: () => onSyncServerByTask(item),
        });
    };


    return (
        <Card mr="s4">
            <TouchableOpacityBox flexDirection="row" justifyContent="space-between" alignItems="center" onPress={handlePressItem}>
                <Box flex={1}>
                    <Text preset="titleLg">{item.title}</Text>
                    <Text>({item.completed ? 'Completed' : 'Not Completed'})</Text>
                </Box>
                <Chip preset={item.action}>{label}</Chip>
            </TouchableOpacityBox>

            {renderModal()}
        </Card>
    );
};



export const SyncDataScreen = () => {
    const { tasks, syncWithServer } = useOfflineContext();
    const { updateModalStateAndOpenModal, renderModal } = useConfirmation({
        title: 'Sync Data',
        description: 'Are you sure you want to sync all data?',
        confirm: 'Sync',
        cancel: 'Cancel',
    });

    const syncedTasks = useMemo(() => tasks.filter(task => !task.synced), [tasks]);

    return (
        <Screen>
            <Text preset="titleLg" marginBottom="s8">Sync Data</Text>
            <Text marginBottom="s32">Here you can sync your data with the server. Click on the item to make the update to the server.</Text>

            <FlatList
                data={syncedTasks}
                renderItem={({ item, index }) => <Item item={item} index={index} />}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                contentContainerStyle={{ paddingBottom: 20 }}
                ListEmptyComponent={
                    <EmptyText />
                }
            />


            {syncedTasks.length > 0 && (
                <TouchableOpacityBox style={styles.floatingButton} onPress={() => updateModalStateAndOpenModal({
                    onConfirm: () => syncWithServer(),
                })}
                >
                    <Text style={styles.floatingButtonText}>
                        <Icon name="backup" size={24} color="white100" />
                    </Text>
                </TouchableOpacityBox>
            )}

            {renderModal()}
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    floatingButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: palette.primary100,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
    },
    floatingButtonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    actionSheetContent: {
        padding: 16,
    },
    actionText: {
        fontSize: 18,
        marginVertical: 10,
    },

});
