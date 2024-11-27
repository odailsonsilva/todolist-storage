import React from 'react';
import { Svg, Path, G, Mask, Rect } from 'react-native-svg';
import { IconBase } from '../../components';

export function ArrowDown({ size = 24, color }: IconBase) {
  return (
    <Svg width={size} height="24" viewBox="0 0 24 24" fill="none">
      <Mask id="mask0_315_8288" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <Rect width="24" height="24" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_315_8288)">
        <Path d="M2.479 8.88264L3.8982 7.46344L12.1328 15.6981L20.3675 7.46344L21.7867 8.88264L12.1328 18.5365L2.479 8.88264Z" fill={color} />
      </G>
    </Svg>
  );
}
