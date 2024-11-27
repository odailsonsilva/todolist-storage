import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { IconBase } from '../../components';

export function ImagesMode({ size = 24, color }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <Path d="M4.94233 39.1249C3.80578 39.1249 2.84375 38.7311 2.05625 37.9436C1.26875 37.1561 0.875 36.1941 0.875 35.0576V4.94233C0.875 3.80578 1.26875 2.84375 2.05625 2.05625C2.84375 1.26875 3.80578 0.875 4.94233 0.875H35.0576C36.1941 0.875 37.1561 1.26875 37.9436 2.05625C38.7311 2.84375 39.1249 3.80578 39.1249 4.94233V35.0576C39.1249 36.1941 38.7311 37.1561 37.9436 37.9436C37.1561 38.7311 36.1941 39.1249 35.0576 39.1249H4.94233ZM4.94233 35.7499H35.0576C35.2307 35.7499 35.3893 35.6778 35.5336 35.5336C35.6778 35.3893 35.7499 35.2307 35.7499 35.0576V4.94233C35.7499 4.76923 35.6778 4.61055 35.5336 4.46628C35.3893 4.32206 35.2307 4.24995 35.0576 4.24995H4.94233C4.76923 4.24995 4.61054 4.32206 4.46628 4.46628C4.32206 4.61055 4.24994 4.76923 4.24994 4.94233V35.0576C4.24994 35.2307 4.32206 35.3893 4.46628 35.5336C4.61054 35.6778 4.76923 35.7499 4.94233 35.7499ZM8.18756 30.6874H31.9854L24.5865 20.8221L18.2692 29.0432L13.7692 23.2885L8.18756 30.6874ZM12.1249 14.9374C12.9038 14.9374 13.5672 14.6634 14.1153 14.1153C14.6634 13.5672 14.9374 12.9038 14.9374 12.1249C14.9374 11.3461 14.6634 10.6827 14.1153 10.1346C13.5672 9.58653 12.9038 9.3125 12.1249 9.3125C11.3461 9.3125 10.6827 9.58653 10.1346 10.1346C9.58653 10.6827 9.3125 11.3461 9.3125 12.1249C9.3125 12.9038 9.58653 13.5672 10.1346 14.1153C10.6827 14.6634 11.3461 14.9374 12.1249 14.9374Z" fill={color} />
    </Svg>
  );
}