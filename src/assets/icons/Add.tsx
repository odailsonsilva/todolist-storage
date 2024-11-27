import React from 'react';
import { Svg, Path, G, Mask, Rect } from 'react-native-svg';
import { IconBase } from '../../components';

export function Add({ size = 24, color }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <Path d="M7.99967 10.0006H0.333008V8.00065H7.99967V0.333984H9.99961V8.00065H17.6663V10.0006H9.99961V17.6673H7.99967V10.0006Z" fill={color} />
    </Svg>
  );
}
