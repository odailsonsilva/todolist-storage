import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    Pressable,
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
    TextStyle,
    Animated,
} from 'react-native';

import { useAppTheme } from '../../../hooks/useAppTheme';

import { Box, BoxProps } from '../Box/Box';
import { textFieldPresets } from './textInputPresets';
import { Icon, IconNames } from '../Icon/Icon';
import { Text } from '../Text';

export interface TextInputProps extends RNTextInputProps {
    label: string;
    errorMessage?: string;
    RightComponent?: React.ReactElement;
    boxProps?: BoxProps;
    isDisabled?: boolean
    icon?: IconNames
    onPress?: () => void
    onResetContext?: () => void
    iconRight?: IconNames
    isInputForSelect?: boolean
}

export function TextInput({
    label,
    errorMessage,
    boxProps,
    value,
    isDisabled = false,
    isInputForSelect = false,
    icon,
    onPress,
    iconRight,
    onResetContext,
    ...rnTextInputProps
}: TextInputProps) {
    const { colors } = useAppTheme();
    const inputRef = useRef<RNTextInput>(null);
    const animatedValue = useRef(new Animated.Value(0)).current;
    const [focused, setFocused] = useState(false);

    const getVariantColors = () => {
        if (isDisabled) {
            return textFieldPresets.disabled;
        }

        if (errorMessage) {
            return textFieldPresets.error;
        }

        if (focused || !!value) {
            return textFieldPresets.filled;
        }

        return textFieldPresets.default;
    };

    const handleFocus = () => {
        setFocused(true);
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const handleBlur = () => {
        setFocused(false);

        if (!value) {
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start();
        }
    };

    const $textInputContainer: BoxProps = {
        flexDirection: 'row',
        borderWidth: errorMessage ? 2 : 1,
        borderColor: errorMessage ? 'error' : focused || !!value ? 'primary' : 'neutral300',
        padding: 's16',
        borderRadius: 's4',
        width: '100%',
        height: 54,
        zIndex: 20,
        ...getVariantColors().container,
    };

    const onReset = useCallback(() => {
        if (onResetContext) {
            onResetContext();
        }

        if (rnTextInputProps.onChangeText) {
            rnTextInputProps.onChangeText('');
        }
    }, [rnTextInputProps, onResetContext]);

    const handleOnPress = () => {
        if (onPress) {
            return onPress();
        }

        if (!isDisabled) {
            inputRef.current?.focus();
        }
    };

    useEffect(() => {
        if (value) {
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 200,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start();
        }
    }, [value]);

    return (
        <Box backgroundColor="background" {...boxProps}>
            <Pressable onPress={handleOnPress} style={{ width: '100%' }}>
                <Animated.View
                    style={[{
                        position: 'absolute',
                        paddingHorizontal: 8,
                        backgroundColor: colors.background,
                        zIndex: 99,
                    },
                    {
                        transform: [
                            {
                                scale: animatedValue.interpolate({
                                    inputRange: [0, 2],
                                    outputRange: [1, 0.75],
                                }),
                            },
                            {
                                translateY: animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [14, -15],
                                }),
                            },
                            {
                                translateX: animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [icon ? 40 : 16, 10],
                                }),
                            },
                        ],
                    },
                    ]}
                >
                    <Text preset="labelLg" color={getVariantColors().content} >
                        {label}
                    </Text>
                </Animated.View>
                <Box {...$textInputContainer}>
                    {icon && (
                        <Box justifyContent="center" mr="s16">
                            <Icon name={icon} color={errorMessage ? 'error' : 'neutral600'} />
                        </Box>
                    )}
                    <RNTextInput
                        autoCapitalize="none"
                        {...onPress && { onPressIn: handleOnPress }}
                        ref={inputRef}
                        placeholderTextColor={colors.neutral400}
                        style={[$textInputStyle, getVariantColors().textContent]}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        editable={!isDisabled && !isInputForSelect}
                        value={value}
                        {...rnTextInputProps}
                    />
                    {errorMessage && !focused ? (
                        <Box justifyContent="center" ml="s16">
                            <Icon name="info" color="error" />
                        </Box>
                    ) : (!!value && !isDisabled || !!value && errorMessage) ? (
                        <Pressable onPress={onReset}>
                            <Box justifyContent="center" ml="s16">
                                <Icon name="cancel" color="neutral600" />
                            </Box>
                        </Pressable>
                    ) : null}

                    {iconRight && (
                        <Box justifyContent="center" ml="s16">
                            <Icon name={iconRight} />
                        </Box>
                    )}
                </Box>
                {errorMessage && (
                    <Text color="error" preset="bodySm" marginLeft="s12" marginTop="s4">
                        {errorMessage}
                    </Text>
                )}
            </Pressable>
        </Box >
    );
}

const $textInputStyle: TextStyle = {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    color: 'blue',
};
