import { FlatList } from 'react-native';

import { Box, Card, Text } from '@/components';

const Item = ({ item }: { item: any, index: number }) => {

    return (
        <Card mr="s4" >
            <Box justifyContent="space-between">
                <Text preset="titleLg">{item.name}</Text>
                <Text preset="labelSm">{item.name}</Text>
            </Box>
        </Card>
    );
};

export const DoneTodos = () => {
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
