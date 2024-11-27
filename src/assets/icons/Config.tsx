import React from 'react';
import { Svg, Path, G, Mask, Rect } from 'react-native-svg';
import { IconBase } from '../../components';

export function Config({ size = 24, color }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Mask id="mask0_847_22483" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <Rect width="24" height="24" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_847_22483)">
        <Path d="M9.54403 22L9.13879 18.7935C8.85362 18.699 8.56128 18.5668 8.26177 18.3968C7.96227 18.2267 7.69449 18.0445 7.45844 17.8502L4.45597 19.1052L2 14.8947L4.59722 12.9535C4.57265 12.7969 4.55525 12.6397 4.54502 12.4818C4.53478 12.3239 4.52967 12.1667 4.52967 12.0101C4.52967 11.8603 4.53478 11.7082 4.54502 11.5536C4.55525 11.3991 4.57265 11.2301 4.59722 11.0465L2 9.10526L4.45597 4.91501L7.44819 6.15996C7.70472 5.95887 7.97863 5.77499 8.26994 5.60833C8.56127 5.44164 8.84747 5.30769 9.12854 5.20648L9.54403 2H14.456L14.8612 5.21661C15.1805 5.33132 15.4694 5.46525 15.728 5.61843C15.9866 5.77161 16.2475 5.95212 16.5109 6.15996L19.544 4.91501L22 9.10526L19.3619 11.0769C19.4001 11.2469 19.4209 11.4059 19.4243 11.5536C19.4277 11.7014 19.4294 11.8502 19.4294 12C19.4294 12.1431 19.426 12.2885 19.4192 12.4362C19.4123 12.584 19.3878 12.753 19.3455 12.9433L21.9632 14.8947L19.5072 19.1052L16.5109 17.84C16.2475 18.0479 15.9787 18.2318 15.7045 18.3917C15.4302 18.5516 15.1491 18.6822 14.8612 18.7834L14.456 22H9.54403ZM12.0123 15.1579C12.8978 15.1579 13.6513 14.8505 14.2728 14.2358C14.8943 13.6211 15.2051 12.8758 15.2051 12C15.2051 11.1242 14.8943 10.3789 14.2728 9.76418C13.6513 9.14947 12.8978 8.84212 12.0123 8.84212C11.1158 8.84212 10.3596 9.14947 9.74356 9.76418C9.12752 10.3789 8.81951 11.1242 8.81951 12C8.81951 12.8758 9.12752 13.6211 9.74356 14.2358C10.3596 14.8505 11.1158 15.1579 12.0123 15.1579ZM12.0123 13.579C11.5688 13.579 11.1919 13.4254 10.8815 13.1184C10.5711 12.8114 10.4159 12.4386 10.4159 12C10.4159 11.5614 10.5711 11.1886 10.8815 10.8816C11.1919 10.5746 11.5688 10.421 12.0123 10.421C12.4557 10.421 12.8326 10.5746 13.1431 10.8816C13.4535 11.1886 13.6087 11.5614 13.6087 12C13.6087 12.4386 13.4535 12.8114 13.1431 13.1184C12.8326 13.4254 12.4557 13.579 12.0123 13.579ZM10.9357 20.4211H13.0274L13.4102 17.6012C13.9532 17.4609 14.4495 17.2615 14.8991 17.003C15.3487 16.7446 15.7822 16.4123 16.1998 16.0061L18.8441 17.1053L19.892 15.3158L17.5833 13.5951C17.672 13.3225 17.7324 13.0553 17.7645 12.7935C17.7965 12.5317 17.8125 12.2672 17.8125 12C17.8125 11.7261 17.7965 11.4615 17.7645 11.2065C17.7324 10.9514 17.672 10.691 17.5833 10.4251L19.9125 8.6842L18.8645 6.89472L16.1895 8.01012C15.8334 7.63359 15.4067 7.30093 14.9093 7.01214C14.412 6.72334 13.9088 6.51888 13.3999 6.39877L13.0643 3.57893H10.9521L10.6001 6.38864C10.057 6.5155 9.55558 6.70984 9.09576 6.97164C8.63594 7.23345 8.19728 7.57084 7.77977 7.98381L5.13545 6.89472L4.08754 8.6842L6.38597 10.3785C6.29728 10.6282 6.2352 10.888 6.19972 11.1579C6.16425 11.4278 6.14651 11.7119 6.14651 12.0101C6.14651 12.2841 6.16425 12.5526 6.19972 12.8158C6.2352 13.0789 6.29386 13.3387 6.37572 13.5951L4.08754 15.3158L5.13545 17.1053L7.76952 16C8.17339 16.4103 8.60524 16.7463 9.06506 17.0081C9.52488 17.2699 10.0331 17.471 10.5898 17.6114L10.9357 20.4211Z" fill={color} />
      </G>
    </Svg>
  );
}
