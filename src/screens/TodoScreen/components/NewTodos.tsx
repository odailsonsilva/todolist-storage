import { useState } from 'react';
import { FlatList } from 'react-native';

import { Box, Card, Text, TouchableOpacityBox } from '@/components';
import { Checkbox } from '@/components/atoms/Checkbox/Checkbox';

const Item = ({ item }: { item: any, index: number }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <Card mr="s4" >
            <TouchableOpacityBox onPress={() => setIsChecked(!isChecked)} flexDirection="row" justifyContent="space-between">
                <Box justifyContent="space-between">
                    <Text preset="titleLg">{item.name}</Text>
                    <Text preset="labelSm">{item.name}</Text>
                </Box>

                <Checkbox value={String(item.id)} selectedValue={String(isChecked ? item.id : undefined)} onPress={() => setIsChecked(!isChecked)} />
            </TouchableOpacityBox>
        </Card>
    );
};

export const NewTodos = () => {
    const mockData = [
        { id: '1', name: 'Item 1' },
        { id: '2', name: 'Item 2' },
        { id: '3', name: 'Item 3' },
    ];

    return (
        <FlatList
            data={mockData}
            renderItem={({ item, index }) => <Item item={item} index={index} />}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            contentContainerStyle={{ paddingBottom: 20 }}
        />
    );
};
