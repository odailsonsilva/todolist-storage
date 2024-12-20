import React from 'react';
import { Svg, Path, G, Mask, Rect } from 'react-native-svg';
import { IconBase } from '../../components';

export function Delete({ size = 24, color }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 24" fill="none">
      <Mask id="mask0_847_21009" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
        <Rect x="0.5" width="24" height="24" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_847_21009)">
        <Path d="M7.8077 20.5C7.30898 20.5 6.88302 20.3234 6.52982 19.9702C6.17661 19.617 6 19.191 6 18.6923V6.00005H5V4.50008H9.49997V3.61548H15.5V4.50008H20V6.00005H19V18.6923C19 19.1975 18.825 19.625 18.475 19.975C18.125 20.325 17.6974 20.5 17.1922 20.5H7.8077ZM17.5 6.00005H7.49997V18.6923C7.49997 18.7821 7.52883 18.8558 7.58652 18.9135C7.64422 18.9712 7.71795 19.0001 7.8077 19.0001H17.1922C17.2692 19.0001 17.3397 18.968 17.4038 18.9039C17.4679 18.8398 17.5 18.7693 17.5 18.6923V6.00005ZM9.90385 17.0001H11.4038V8.00005H9.90385V17.0001ZM13.5961 17.0001H15.0961V8.00005H13.5961V17.0001Z" fill={color} />
      </G>
    </Svg>
  );
}
