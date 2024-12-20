import React from 'react';
import { Svg, Path, G, Mask, Rect } from 'react-native-svg';
import { IconBase } from '../../components';

export function Warning({ size = 24, color }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Mask id="mask0_827_38595" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <Rect width="24" height="24" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_827_38595)">
        <Path d="M1.86523 20.4999L11.9998 3L22.1343 20.4999H1.86523ZM4.44978 18.9999H19.5498L11.9998 5.99993L4.44978 18.9999ZM11.9998 17.8076C12.2286 17.8076 12.4205 17.7302 12.5753 17.5754C12.7301 17.4206 12.8075 17.2288 12.8075 16.9999C12.8075 16.7711 12.7301 16.5793 12.5753 16.4245C12.4205 16.2697 12.2286 16.1923 11.9998 16.1923C11.7709 16.1923 11.5791 16.2697 11.4243 16.4245C11.2695 16.5793 11.1921 16.7711 11.1921 16.9999C11.1921 17.2288 11.2695 17.4206 11.4243 17.5754C11.5791 17.7302 11.7709 17.8076 11.9998 17.8076ZM11.2498 15.1923H12.7498V10.1923H11.2498V15.1923Z" fill={color} />
      </G>
    </Svg>
  );
}
