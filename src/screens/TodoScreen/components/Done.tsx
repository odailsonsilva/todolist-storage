import { useMemo } from 'react';
import { FlatList } from 'react-native';

import { Box, Card, Chip, Text } from '@/components';
import { EmptyText } from '@/components/atoms/EmptyText';
import { useOfflineContext } from '@/contexts/Offiline/OfflineContext';
import { IDBTask } from '@/services/Todo/dbTodo';

const Item = ({ item }: { item: IDBTask, index: number }) => {

    return (
        <Card mr="s4" >
            <Box justifyContent="space-between">
                <Text preset="titleLg">{item.title}</Text>
                {!item.synced && (
                    <Chip
                        preset="update"
                        mt="s4"
                    >
                        This data is not synced
                    </Chip>
                )}
            </Box>
        </Card>
    );
};

export const DoneTodos = () => {
    const { tasks } = useOfflineContext();
    const doneTasks = useMemo(() => tasks.filter((task) => task.action !== 'delete' && task.completed), [tasks]);

    return (
        <FlatList
            data={doneTasks}
            renderItem={({ item, index }) => <Item item={item} index={index} />}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            contentContainerStyle={{ paddingBottom: 20 }}
            ListEmptyComponent={
                <EmptyText />
            }
        />
    );
};
