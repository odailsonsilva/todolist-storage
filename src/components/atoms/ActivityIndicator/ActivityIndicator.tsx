import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';

import { useAppTheme } from '../../../hooks/useAppTheme';

import { ThemeColors } from '@/theme';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}
export function ActivityIndicator({ color, ...rest }: Props) {
  const { colors } = useAppTheme();

  return <RNActivityIndicator color={colors[color]} size={rest.size} {...rest} />;
}
