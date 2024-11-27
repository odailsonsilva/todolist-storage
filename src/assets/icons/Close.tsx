import React from 'react';
import { Svg, Path, G, Mask, Rect } from 'react-native-svg';
import { IconBase } from '../../components';

export function Close({ size = 24, color }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <Mask id="mask0_827_38497" maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="12">
        <Rect width="12" height="12" transform="matrix(-1 0 0 1 12 0)" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_827_38497)">
        <Path d="M8.80024 9.32692L9.32715 8.80001L6.52715 6.00001L9.32715 3.20001L8.80024 2.6731L6.00024 5.4731L3.20023 2.6731L2.67332 3.20001L5.47332 6.00001L2.67332 8.80001L3.20023 9.32692L6.00024 6.52692L8.80024 9.32692Z" fill={color} />
      </G>
    </Svg>
  );
}
