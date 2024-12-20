import { createTheme } from '@shopify/restyle';

export const palette = {
    primary100: '#1A1A1A',
    primary300: '#333333',
    primary400: '#4D4D4D',
    primary500: '#666666',
    primary700: '#000000',

    'primary500-10%': 'rgba(102, 102, 102, 0.1)',

    neutral100: '#E5EBF1',
    neutral200: '#E0E4EA',
    neutral300: '#BEC9D7',
    neutral400: '#ACB7C5',
    neutral500: '#999EA6',
    neutral600: '#6B7075',
    neutral700: '#454950',
    neutralBaseMenu: '#F5F7FB',

    overlay: 'rgba(0, 0, 0, 0.5)',

    gray200: '#E0E4EA',

    error500: '#DC362E',
    error700: '#B32D25',

    white100: '#FFFFFF',
    white200: '#F5F7FB',

    blue500: '#007AFF',
    blue700: '#0056B3',

    yellow500: '#E4BA21',
    yellow700: '#C59A1A',

    background: '#F5F7FB',
    background100: '#C5E1E9',

    green500: '#00C797',
    green700: '#007F60',
};

export const fontFamily = {
    'Roboto-Regular': 'Roboto-Regular',
    'Roboto-Bold': 'Roboto-Bold',
    'Roboto-Medium': 'Roboto-Medium',
    'OpenSans-Regular': 'OpenSans-Regular',
    'OpenSans-SemiBold': 'OpenSans-SemiBold',
};

export const theme = createTheme({
    colors: {
        ...palette,
        primary: palette.primary700,
        primaryContrast: palette.white100,

        secondary: palette.primary500,
        secondaryContrast: palette.white100,

        background: palette.background,
        backgroundContrast: palette.neutral600,

        error: palette.error500,
        errorContrast: palette.white100,

        success: palette.green500,
        successContrast: palette.white100,

        warning: palette.yellow500,
        warningContrast: palette.white100,

        info: palette.neutral400,
        infoContrast: palette.white100,

        text: '#212121',
    },
    spacing: {
        s0: 0,
        s2: 2,
        s4: 4,
        s8: 8,
        s10: 10,
        s12: 12,
        s14: 14,
        s16: 16,
        s20: 20,
        s24: 24,
        s32: 32,
        s40: 40,
        s48: 48,
        s56: 56,
        s64: 64,
        s128: 128,
    },
    borderRadii: {
        s4: 4,
        s8: 8,
        s12: 12,
        s16: 16,
        s24: 24,
        s40: 40,
    },
    textVariants: {
        defaults: {},
    },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors']
