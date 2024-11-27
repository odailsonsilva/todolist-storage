import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { IconBase } from '../../components';

export function ArrowBack({ size = 24, color }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path d="M8 16L0 8L8 0L9.12321 1.10705L3.01811 7.21214H16V8.78786H3.01811L9.12321 14.8929L8 16Z" fill={color} />
    </Svg>
  );
}
