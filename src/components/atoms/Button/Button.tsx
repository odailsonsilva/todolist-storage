import React from 'react';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';
import { TouchableOpacityBox, TouchableOpacityBoxProps, Box } from '../Box/Box';
import { buttonPresets } from './buttonPresets';
import { Icon, IconNames } from '../Icon/Icon';
import { Text, TextVariants } from '../Text';

export type ButtonPreset =
  'primary'
  | 'primaryOutline'
  | 'secondary'
  | 'secondaryOutline'
  | 'primarySquare'
  | 'primaryOutlineSquare'
  | 'secondarySquare'
  | 'secondaryOutlineSquare'
  | 'primaryWithoutBorder'
  | 'outline'
  | 'isIconButton'
  | 'link'
  | 'tertiary'

interface ButtonProps extends TouchableOpacityBoxProps {
  title?: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
  icon?: IconNames
  iconSize?: number
  fullWidth?: boolean
  labelPreset?: TextVariants
  marginRightIcon?: any,
  secondaryOnPress?: any
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  icon,
  fullWidth = true,
  iconSize = 30,
  labelPreset = 'labelLg',
  marginRightIcon = 's20',
  secondaryOnPress,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  const isIconButton = preset === 'isIconButton';

  if (preset == 'tertiary') {
    return (
      <Box flexDirection="row" backgroundColor="primary" height={50} alignItems="center" justifyContent="space-between" borderRadius="s4">
        <TouchableOpacityBox
          disabled={disabled || loading}
          height={50}
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          {...!isIconButton && { paddingHorizontal: 's20' }}
          {...fullWidth && { width: '78%' }}
          {...buttonPreset.container}
          {...touchableOpacityBoxProps}
        >
          {loading ? (
            <ActivityIndicator color={buttonPreset.content} />
          ) : (
            <Box flexDirection="row" alignItems="center">
              {icon && (
                <Box {...!isIconButton && { mr: marginRightIcon }}>
                  <Icon name={'changeCircle'} size={iconSize} color={buttonPreset.content} />
                </Box>
              )}
              <Text preset={labelPreset} color={buttonPreset.content}>
                {title}
              </Text>
            </Box>
          )}

        </TouchableOpacityBox>

        <TouchableOpacityBox
          disabled={disabled || loading}
          height={50}
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          onPress={secondaryOnPress}
          {...!isIconButton && { paddingHorizontal: 's20' }}
          {...fullWidth && { width: '22%' }}
          {...buttonPreset.container}
        >
          {loading ? (
            <ActivityIndicator color={buttonPreset.content} />
          ) : (
            <Box flexDirection="row" alignItems="center" justifyContent="center">
              {icon && (
                <Box {...!isIconButton && { mr: marginRightIcon }}>
                  <Icon name={'delete'} size={iconSize} color={buttonPreset.content} />
                </Box>
              )}
            </Box>
          )}

        </TouchableOpacityBox>
      </Box>

    );
  } else {
    return (
      <TouchableOpacityBox
        disabled={disabled || loading}
        height={50}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        {...!isIconButton && { paddingHorizontal: 's20' }}
        {...fullWidth && { width: '100%' }}
        {...buttonPreset.container}
        {...touchableOpacityBoxProps}
      >
        {icon && (
          <Box {...!isIconButton && { mr: marginRightIcon }}>
            <Icon name={icon} size={iconSize} color={buttonPreset.content} />
          </Box>
        )}
        {loading ? (
          <ActivityIndicator color={buttonPreset.content} />
        ) : (
          <Text preset={labelPreset} color={buttonPreset.content}>
            {title}
          </Text>
        )}
      </TouchableOpacityBox>
    );
  }
}
