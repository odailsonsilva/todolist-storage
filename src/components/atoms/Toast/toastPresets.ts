import { BoxProps } from '../Box/Box';
import { ToastPreset } from './Toast';
import { IconNames } from '../Icon/Icon';
import { ThemeColors } from '@/theme';

interface ToastUI {
    container: BoxProps;
    content: ThemeColors
    icon: IconNames;
}

export const toastPresets: Record<
    ToastPreset,
    ToastUI
> = {
    success: {
        container: {
            backgroundColor: 'success',
        },
        content: 'successContrast',
        icon: 'checkCircle',
    },
    warning: {
        container: {
            backgroundColor: 'warning',
        },
        content: 'warningContrast',
        icon: 'warning',
    },
    error: {
        container: {
            backgroundColor: 'error',
        },
        content: 'errorContrast',
        icon: 'info',
    },
    info: {
        container: {
            backgroundColor: 'info',
        },
        content: 'infoContrast',
        icon: 'info',
    },
};
