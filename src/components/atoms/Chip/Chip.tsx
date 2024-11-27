import { ThemeColors } from '@/theme';
import { Box, TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';
import { Text } from '../Text';
import { Dimensions } from 'react-native';

type ChipPresets = 'default' | 'blue'

const { width } = Dimensions.get('window');

export interface ChipParams extends Omit<TouchableOpacityBoxProps, 'preset'> {
    preset?: ChipPresets
}

export function Chip({ preset = 'default', ...touchableOpacityBoxProps }: ChipParams) {
    const chipPreset = chipPresets[preset];

    return (
        <TouchableOpacityBox
            backgroundColor="primary500-10%"
            borderRadius="s16"
            minHeight={24}
            paddingHorizontal="s16"
            alignItems="center"
            flexDirection="row"
            maxWidth={width * 0.59}
            {...touchableOpacityBoxProps}
        >
            <Box
                height={8}
                width={8}
                borderRadius="s12"
                mr="s16"
                backgroundColor={chipPreset}
            />
            <Text
                preset="chip"
                color="white100"
                mr="s12"
            >
                {touchableOpacityBoxProps.children}
            </Text>
        </TouchableOpacityBox>
    );
}

const chipPresets: Record<ChipPresets, ThemeColors> = {
    default: 'white100',
    blue: 'primary400',
};
