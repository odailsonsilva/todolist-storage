import { StyleSheet } from 'react-native';

import { Text } from '../Text';

export const EmptyText = () => {
    return <Text preset="labelSm" style={styles.emptyMessage}>No tasks available</Text>;
};

const styles = StyleSheet.create({
    emptyMessage: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#888',
    },
});
