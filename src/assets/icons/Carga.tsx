import React from 'react';
import { Svg, Path, G, Mask, Rect } from 'react-native-svg';
import { IconBase } from '../../components';

export function Carga({ size = 24, color }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 24" fill="none">
      <Mask id="mask0_847_22358" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
        <Rect x="0.5" width="24" height="24" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_847_22358)">
        <Path d="M12.5 15.4089L15.9389 11.9474L14.9471 10.949L13.2059 12.6543V8.48584H11.7941V12.6543L10.0529 10.949L9.0611 11.9474L12.5 15.4089ZM6.20137 20C5.73199 20 5.33108 19.8327 4.99866 19.4981C4.66622 19.1634 4.5 18.7599 4.5 18.2874V5.6073C4.5 5.13483 4.66622 4.73129 4.99866 4.39668C5.33108 4.06206 5.73199 3.89474 6.20137 3.89474H10.3896C10.4487 3.36884 10.6768 2.92158 11.0738 2.55296C11.4707 2.18432 11.9462 2 12.5 2C13.0599 2 13.5383 2.18432 13.9353 2.55296C14.3323 2.92158 14.5573 3.36884 14.6104 3.89474H18.7986C19.268 3.89474 19.6689 4.06206 20.0013 4.39668C20.3338 4.73129 20.5 5.13483 20.5 5.6073V18.2874C20.5 18.7599 20.3338 19.1634 20.0013 19.4981C19.6689 19.8327 19.268 20 18.7986 20H6.20137ZM6.20137 18.579H18.7986C18.871 18.579 18.9374 18.5486 18.9978 18.4879C19.0581 18.4271 19.0883 18.3603 19.0883 18.2874V5.6073C19.0883 5.53442 19.0581 5.46761 18.9978 5.40686C18.9374 5.34614 18.871 5.31577 18.7986 5.31577H6.20137C6.12896 5.31577 6.06258 5.34614 6.00224 5.40686C5.94191 5.46761 5.91175 5.53442 5.91175 5.6073V18.2874C5.91175 18.3603 5.94191 18.4271 6.00224 18.4879C6.06258 18.5486 6.12896 18.579 6.20137 18.579ZM12.5 4.69634C12.7039 4.69634 12.8725 4.62923 13.0059 4.49502C13.1392 4.36081 13.2059 4.19107 13.2059 3.98581C13.2059 3.78054 13.1392 3.61081 13.0059 3.4766C12.8725 3.34238 12.7039 3.27528 12.5 3.27528C12.2961 3.27528 12.1274 3.34238 11.9941 3.4766C11.8608 3.61081 11.7941 3.78054 11.7941 3.98581C11.7941 4.19107 11.8608 4.36081 11.9941 4.49502C12.1274 4.62923 12.2961 4.69634 12.5 4.69634Z" fill={color} />
      </G>
    </Svg>
  );
}