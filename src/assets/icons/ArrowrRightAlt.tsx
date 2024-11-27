import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { IconBase } from '../../components';

export function ArrowRightAlt({ size = 24, color }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 12" fill="none">
      <Path d="M10.0478 11.6538L8.994 10.5692L12.8133 6.74998H0.297852V5.25003H12.8133L8.994 1.43078L10.0478 0.346176L15.7017 6L10.0478 11.6538Z" fill={color} />
    </Svg>
  );
}
