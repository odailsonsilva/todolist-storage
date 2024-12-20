import React from 'react';
import { Svg, Path, G, Mask, Rect } from 'react-native-svg';
import { IconBase } from '../../components';

export function Upload({ size = 24, color }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 24" fill="none">
      <Mask id="mask0_847_17539" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
        <Rect x="0.5" width="24" height="24" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_847_17539)">
        <Path d="M6.8077 19.4999C6.30257 19.4999 5.875 19.3249 5.525 18.9749C5.175 18.6249 5 18.1974 5 17.6922V15H6.49997V17.6922C6.49997 17.7692 6.53202 17.8397 6.59612 17.9038C6.66024 17.9679 6.73077 18 6.8077 18H18.1922C18.2692 18 18.3397 17.9679 18.4038 17.9038C18.4679 17.8397 18.5 17.7692 18.5 17.6922V15H20V17.6922C20 18.1974 19.825 18.6249 19.475 18.9749C19.125 19.3249 18.6974 19.4999 18.1922 19.4999H6.8077ZM11.75 15.6153V7.2153L9.28462 9.68068L8.2308 8.59608L12.5 4.3269L16.7692 8.59608L15.7153 9.68068L13.2499 7.2153V15.6153H11.75Z" fill={color} />
      </G>
    </Svg>
  );
}
