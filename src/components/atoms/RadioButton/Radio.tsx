import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';
import { Text, TextProps } from '../Text';

export interface RadioProps extends TouchableOpacityBoxProps {
    value: string | number;
    selectedValue?: string | number;
    label?: string
    orderRadio?: 'left' | 'right'
    onSelect?: (value: string | number) => void;
    textStyles?: Omit<TextProps, 'children'>
}

export const RadioButton: React.FC<RadioProps> = ({
    value,
    selectedValue,
    label,
    onSelect,
    textStyles,
    ...touchableOpacityProps
}) => {
    const handleSelect = () => {
        onSelect && onSelect(value);
    };

    return (
        <TouchableOpacityBox
            style={styles.container}
            onPress={handleSelect}
            alignItems="center"
            flexDirection="row"
            borderWidth={1}
            paddingHorizontal="s16"
            paddingLeft="s12"
            borderRadius={'s24'}
            height={34}
            borderColor="neutral700"
            backgroundColor={value === selectedValue ? 'primary' : 'white100'}
            {...touchableOpacityProps}
        >
            <Text color={value === selectedValue ? 'white100' : 'neutral700'} ml="s12" mb="s4" {...textStyles}>{label}</Text>
        </TouchableOpacityBox>
    );
};

const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selected: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
});
