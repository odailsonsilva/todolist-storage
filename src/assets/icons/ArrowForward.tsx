import React from 'react';
import { Svg, Path, G, Mask, Rect } from 'react-native-svg';
import { IconBase } from '../../components';

export function ArrowForword({ size = 24, color }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <Path d="M5.99975 11.0776L5.28695 10.3751L9.16132 6.50071H0.922852V5.50075H9.16132L5.28695 1.62638L5.99975 0.923828L11.0767 6.00073L5.99975 11.0776Z" fill={color} />
    </Svg>
  );
}
