import { ThemeColors } from '@/theme';
import { BoxProps } from '../Box/Box';

interface TextFieldUI {
    container: BoxProps;
    content: ThemeColors;
    textContent: any
}

export type TextFieldPreset = 'default' | 'filled' | 'error' | 'disabled'

export const textFieldPresets: Record<
    TextFieldPreset,
    TextFieldUI
> = {
    default: {
        container: {
            borderWidth: 1,
            borderColor: 'neutral300',
        },
        content: 'neutral600',
        textContent: {
            color: '#212121',
            fontSize: 18,
        },
    },
    filled: {
        container: {
            borderWidth: 2,
            borderColor: 'primary',
        },
        content: 'primary',
        textContent: {
            color: '#212121',
            fontSize: 18,
        },
    },
    error: {
        container: {
            borderWidth: 2,
            borderColor: 'error',
        },
        content: 'error',
        textContent: {
            color: '#212121',
            fontSize: 18,
        },
    },
    disabled: {
        container: {
            borderWidth: 1,
            borderColor: 'neutral500',
        },
        content: 'neutral500',
        textContent: {
            color: '#999EA6',
            fontSize: 18,
        },
    },
};
