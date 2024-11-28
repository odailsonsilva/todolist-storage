import React, { useState, useMemo } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Box, Card, Chip, Text, TouchableOpacityBox } from '@/components';
import { Checkbox } from '@/components/atoms/Checkbox/Checkbox';
import { EmptyText } from '@/components/atoms/EmptyText';
import { TodoForm } from '@/components/molecules/TodoForm';
import { useOfflineContext } from '@/contexts/Offiline/OfflineContext';
import { IDBTask } from '@/services/Todo/dbTodo';
import { palette } from '@/theme';

const Item = ({ item }: { item: IDBTask, index: number }) => {
    const [isChecked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { editTask } = useOfflineContext();

    const onCompleteTask = () => {
        editTask({ ...item, completed: true });
        setIsModalOpen(false);
    };

    return (
        <Card mr="s4" >
            <TouchableOpacityBox onPress={() => setIsModalOpen(true)} flexDirection="row" justifyContent="space-between">
                <Box justifyContent="space-between">
                    <Text preset="titleLg" ml="s4">{item.title}</Text>
                    <Text preset="bodySm" color="neutral700" mt="s4">{item.description}</Text>
                    {!item.synced && (
                        <Chip
                            preset="update"
                            mt="s4"
                        >
                            This data is not synced
                        </Chip>
                    )}
                </Box>

                <Checkbox value={String(item.id)} selectedValue={String(isChecked ? item.id : undefined)} onPress={onCompleteTask} />
            </TouchableOpacityBox>

            <TodoForm
                todo={item}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </Card>
    );
};

export const NewTodos = () => {
    const { tasks } = useOfflineContext();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const newTasks = useMemo(() => tasks.filter((task) => task.action !== 'delete' && !task.completed), [tasks]);

    return (
        <>
            <FlatList
                data={newTasks}
                renderItem={({ item, index }) => <Item item={item} index={index} />}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                contentContainerStyle={{ paddingBottom: 20 }}
                ListEmptyComponent={
                    <EmptyText />
                }
            />

            <TouchableOpacityBox style={styles.floatingButton} onPress={() => setIsModalOpen(true)}>
                <Text style={styles.floatingButtonText}>+</Text>
            </TouchableOpacityBox>

            <TodoForm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
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
