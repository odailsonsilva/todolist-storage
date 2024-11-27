import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Box, TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';
import { Text, TextProps } from '../Text';

export interface RadioButtonProps extends TouchableOpacityBoxProps {
    value: string | number;
    selectedValue?: string | number;
    label?: string
    orderRadio?: 'left' | 'right'
    onSelect?: (value: string | number) => void;
    textStyles?: Omit<TextProps, 'children'>
}

export const Radio: React.FC<RadioButtonProps> = ({
    value,
    selectedValue,
    orderRadio = 'left',
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
            {...touchableOpacityProps}
        >
            {(!!label && orderRadio === 'right') && <Text color={value === selectedValue ? 'primary' : 'neutral700'} mr="s12" mb="s4"  {...textStyles}>{label}</Text>}
            <Box
                borderColor="primary"
                style={[
                    styles.radioButton,
                ]}
            >
                {value === selectedValue && (
                    <Box
                        backgroundColor="primary"
                        style={styles.selected}
                    />
                )}
            </Box>
            {(!!label && orderRadio === 'left') && <Text color={value === selectedValue ? 'primary' : 'neutral700'} ml="s12" mb="s4" {...textStyles}>{label}</Text>}
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
