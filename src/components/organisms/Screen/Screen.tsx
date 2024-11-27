import React from 'react';
import { Dimensions, KeyboardAvoidingView, Platform } from 'react-native';

import { useAppSafeArea, useAppTheme } from '../../../hooks';
import { Logo, LogoPresets } from '../../atoms/Logo/Logo';
import { ScrollViewContainer, ViewContainer } from './components/ScreenContainer';
import { Box, BoxProps } from '../../atoms/Box/Box';
import { ActivityIndicator } from '../../atoms/ActivityIndicator/ActivityIndicator';

const { width } = Dimensions.get('window');

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  logoPreset?: LogoPresets
  isLoading: boolean
  hasContentHeader?: boolean
  contentBottom?: React.ReactNode
  hasProgressBarBottom?: boolean
  hasPaddingHorizontal?: boolean
  height?: any
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  isLoading = false,
  logoPreset,
  hasContentHeader,
  style,
  contentBottom,
  hasProgressBarBottom,
  hasPaddingHorizontal = true,
  height,
  ...boxProps
}: ScreenProps) {
  const { bottom, top } = useAppSafeArea();
  const { colors } = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  const $containerHeaderStyles: BoxProps = {
    backgroundColor: 'primary700',
    height: height ? height : (width / 375) * 330,
    borderBottomRightRadius: 's16',
    borderBottomLeftRadius: 's16',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background} >
        {hasContentHeader && !isLoading && (
          <Box {...$containerHeaderStyles} />
        )}
        <Box
          {...hasPaddingHorizontal && { paddingHorizontal: 's24' }}
          style={[{ paddingTop: canGoBack ? 0 : top, flex: 1 }, style, !contentBottom && { paddingBottom: bottom }]}
          {...boxProps}
        >

          {!!logoPreset && (
            <Logo
              preset={logoPreset}
              alignItems="center"
            />
          )}
          {isLoading && (
            <Box alignItems="center" justifyContent="center" height="100%">
              <ActivityIndicator color="primary" size={50} />
            </Box>
          )}
          {!isLoading && children}
        </Box>

        {contentBottom && (
          <Box
            height={72}
            backgroundColor="neutralBaseMenu"
            borderTopWidth={1}
            borderTopColor="neutral100"
            justifyContent="center"
            style={{ marginBottom: bottom }}
            {...!hasProgressBarBottom && {
              paddingHorizontal: 's16',
              paddingVertical: 's12',
            }}
          >
            {contentBottom}
          </Box>
        )}
      </Container>
    </KeyboardAvoidingView >
  );
}
