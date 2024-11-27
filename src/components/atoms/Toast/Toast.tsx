import React, { useState, useEffect } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Box, BoxProps } from '../Box/Box';
import { Text } from '../Text';
import { Icon } from '../Icon/Icon';
import { toastPresets } from './toastPresets';
import { useAppSafeArea } from '@/hooks';

const { width } = Dimensions.get('window');

export type ToastPreset = 'success' | 'error' | 'warning' | 'info'

interface CustomToastParams {
    preset?: ToastPreset
    title?: string
    message?: string
    onClose?: () => void
}

export const CustomToast = ({
    message,
    title = 'Titulo',
    preset = 'success',
    onClose,
}: CustomToastParams) => {
    const [isVisible, setIsVisible] = useState(true);
    const presetSelected = toastPresets[preset];
    const { bottom } = useAppSafeArea();

    useEffect(() => {
        if (!isVisible && onClose) {
            onClose();
        }
    }, [isVisible, onClose]);

    const handleToastClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <Animatable.View
            animation="slideInUp"
            duration={300}
        >
            <Box {...$containerToast} {...presetSelected.container} style={[{ bottom: bottom + 60 }]}>
                <Box flexDirection="row" alignItems="center">
                    <Box marginRight="s16">
                        <Icon name={presetSelected.icon} color={presetSelected.content} />
                    </Box>

                    <Box maxWidth={'80%'} flexDirection="column">
                        <Text color={presetSelected.content} preset="titleSm">{title}</Text>
                        <Text color={presetSelected.content} preset="bodySm" style={{ flexWrap: 'wrap' }}>{message}</Text>
                    </Box>
                </Box>

                <TouchableOpacity onPress={handleToastClose}>
                    <Icon name="close" color={presetSelected.content} />
                </TouchableOpacity>
            </Box>
        </Animatable.View>
    );
};

const $containerToast: BoxProps = {
    position: 'absolute',
    left: 20,
    right: 20,
    backgroundColor: 'neutral300',
    borderRadius: 's4',
    marginBottom: 's20',
    padding: 's16',
    maxWidth: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 54,
};
