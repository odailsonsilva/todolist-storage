import { Dimensions } from 'react-native';

import { Box, TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';
import { Text } from '../Text';

import { ThemeColors } from '@/theme';


type ChipPresets = 'default' | 'create' | 'update' | 'delete'

const { width } = Dimensions.get('window');

export interface ChipParams extends Omit<TouchableOpacityBoxProps, 'preset'> {
    preset?: ChipPresets
}

export function Chip({ preset = 'default', ...touchableOpacityBoxProps }: ChipParams) {
    const chipPreset = chipPresets[preset];

    return (
        <TouchableOpacityBox
            backgroundColor={chipPreset.backgroundColor}
            borderRadius="s16"
            height={24}
            paddingHorizontal="s16"
            alignItems="center"
            flexDirection="row"
            maxWidth={width * 0.5}
            {...touchableOpacityBoxProps}
        >
            <Box
                height={8}
                width={8}
                borderRadius="s12"
                mr="s16"
                backgroundColor={chipPreset.badgeColor}
            />
            <Text
                preset="chip"
                color="white100"
                mr="s12"
                mt="s2"
            >
                {touchableOpacityBoxProps.children}
            </Text>
        </TouchableOpacityBox>
    );
}

const chipPresets: Record<ChipPresets, { backgroundColor: ThemeColors, badgeColor: ThemeColors }> = {
    default: {
        backgroundColor: 'white100',
        badgeColor: 'neutral700',
    },
    create: {
        backgroundColor: 'blue500',
        badgeColor: 'blue700',
    },
    update: {
        backgroundColor: 'yellow500',
        badgeColor: 'yellow700',
    },
    delete: {
        backgroundColor: 'error500',
        badgeColor: 'error700',
    },
};
