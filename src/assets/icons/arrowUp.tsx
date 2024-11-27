import React from 'react';
import { Svg, Path, G, Mask, Rect } from 'react-native-svg';
import { IconBase } from '../../components';

export function ArrowUp({ size = 24, color }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Mask id="mask0_315_8309" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <Rect width="24" height="24" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_315_8309)">
        <Path d="M21.7867 16.1173L20.3675 17.5365L12.1328 9.3019L3.8982 17.5365L2.479 16.1173L12.1328 6.4635L21.7867 16.1173Z" fill={color} />
      </G>
    </Svg>
  );
}
