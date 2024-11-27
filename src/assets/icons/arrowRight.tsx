import React from 'react';
import { Svg, Path, G, Mask, Rect } from 'react-native-svg';
import { IconBase } from '../../components';

export function ArrowRight({ size = 24, color }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none" >
      <Mask id="mask0_1007_51867" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
        <Rect width="16" height="16" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_1007_51867)">
        <Path d="M5.34359 14.4362L4.39746 13.4901L9.88721 8.00034L4.39746 2.51059L5.34359 1.56445L11.7795 8.00034L5.34359 14.4362Z" fill={color} />
      </G>
    </Svg>
  );
}
