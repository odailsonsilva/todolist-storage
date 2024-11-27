import { TextStyle } from 'react-native';
import { createText } from '@shopify/restyle';
import { Theme, fontFamily } from '@/theme';

const SRText = createText<Theme>();
export type SRTextProps = React.ComponentProps<typeof SRText>

export interface TextProps extends SRTextProps {
    children: React.ReactNode
    preset?: TextVariants;
}
export const Text = ({
    children,
    preset = 'bodyMd',
    style,
    ...rest
}: TextProps) => {
    return (
        <SRText
            style={[$modifiers[preset], style]}
            color="text"
            {...rest}
        >
            {children}
        </SRText>
    );
};

export type TextVariants =
    | 'displayLg'
    | 'displayMd'
    | 'displaySm'
    | 'headlineLg'
    | 'headlineMd'
    | 'headlineSm'
    | 'titleLg'
    | 'titleMd'
    | 'titleSm'
    | 'labelLg'
    | 'labelMd'
    | 'labelSm'
    | 'bodyLg'
    | 'bodyMd'
    | 'bodySm'
    | 'mediumLg'
    | 'mediumMd'
    | 'chip'

const $modifiers: Record<TextVariants, TextStyle> = {
    displayLg: {
        fontSize: 57,
        lineHeight: 64,
        fontWeight: '400',
        fontFamily: fontFamily['Roboto-Regular'],
    },
    displayMd: {
        fontSize: 45,
        lineHeight: 52,
        fontWeight: '400',
        fontFamily: fontFamily['Roboto-Regular'],
    },
    displaySm: {
        fontSize: 36,
        lineHeight: 44,
        fontWeight: '400',
        fontFamily: fontFamily['Roboto-Regular'],
    },
    headlineLg: {
        fontSize: 32,
        lineHeight: 40,
        fontWeight: '400',
        fontFamily: fontFamily['Roboto-Regular'],
    },
    headlineMd: {
        fontSize: 28,
        lineHeight: 36,
        fontWeight: '600',
        fontFamily: fontFamily['OpenSans-SemiBold'],
    },
    headlineSm: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: '400',
        fontFamily: fontFamily['Roboto-Regular'],
    },
    titleLg: {
        fontSize: 22,
        lineHeight: 28,
        fontWeight: '700',
        fontFamily: fontFamily['Roboto-Bold'],
    },
    titleMd: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '500',
        fontFamily: fontFamily['Roboto-Medium'],
    },
    titleSm: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '500',
        fontFamily: fontFamily['Roboto-Medium'],
    },
    labelLg: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '600',
        fontFamily: fontFamily['OpenSans-SemiBold'],
    },
    labelMd: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '400',
        fontFamily: fontFamily['OpenSans-Regular'],
    },
    labelSm: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '600',
        fontFamily: fontFamily['OpenSans-SemiBold'],
    },
    bodyLg: {
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: 0.15000000596046448,
        fontWeight: '400',
        fontFamily: fontFamily['OpenSans-Regular'],
    },
    bodyMd: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.24,
        fontWeight: '400',
        fontFamily: fontFamily['OpenSans-Regular'],
    },
    bodySm: {
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: 0.4,
        fontWeight: '400',
        fontFamily: fontFamily['OpenSans-Regular'],
    },
    mediumLg: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: '500',
        fontFamily: fontFamily['Roboto-Medium'],
    },
    mediumMd: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '400',
        fontFamily: fontFamily['Roboto-Regular'],
    },
    chip: {
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 18,
        letterSpacing: 2,
        fontFamily: fontFamily['OpenSans-SemiBold'],
    },
};
