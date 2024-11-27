import React, { useState, memo } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Box, Card, Text, TouchableOpacityBox } from '@/components';
import { Checkbox } from '@/components/atoms/Checkbox/Checkbox';
import { TodoForm } from '@/components/molecules/TodoForm';
import { useOfflineContext } from '@/contexts/Offiline/OfflineContext';
import { palette } from '@/theme';

const Item = memo(({ item }: { item: any, index: number }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Card mr="s4" >
            <TouchableOpacityBox onPress={() => setIsModalOpen(true)} flexDirection="row" justifyContent="space-between">
                <Box justifyContent="space-between">
                    <Text preset="titleLg">{item.name}</Text>
                    <Text preset="labelSm">{item.name}</Text>
                </Box>

                <Checkbox value={String(item.id)} selectedValue={String(isChecked ? item.id : undefined)} onPress={() => setIsChecked(!isChecked)} />
            </TouchableOpacityBox>

            <TodoForm
                todo={item}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </Card>
    );
});

export const NewTodos = () => {
    const { tasks } = useOfflineContext();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <FlatList
                data={tasks}
                renderItem={({ item, index }) => <Item item={item} index={index} />}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                contentContainerStyle={{ paddingBottom: 20 }}
                ListEmptyComponent={
                    <Text style={styles.emptyMessage}>No tasks available</Text>
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
    emptyMessage: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#888',
    },
});
