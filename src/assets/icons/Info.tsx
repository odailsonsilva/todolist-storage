import React from 'react';
import { Svg, Path, G, Mask, Rect } from 'react-native-svg';
import { IconBase } from '../../components';

export function Info({ size = 24, color = '#DC362E' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Mask id="mask0_97_1288" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <Rect width="24" height="24" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_97_1288)">
        <Path d="M11.2106 17H12.7894V10.9474H11.2106V17ZM12 9.14576C12.2409 9.14576 12.4428 9.06428 12.6058 8.90133C12.7687 8.73839 12.8502 8.53646 12.8502 8.29557C12.8502 8.05469 12.7687 7.85277 12.6058 7.6898C12.4428 7.52686 12.2409 7.44538 12 7.44538C11.7591 7.44538 11.5572 7.52686 11.3942 7.6898C11.2313 7.85277 11.1498 8.05469 11.1498 8.29557C11.1498 8.53646 11.2313 8.73839 11.3942 8.90133C11.5572 9.06428 11.7591 9.14576 12 9.14576ZM12.0018 22C10.6187 22 9.31863 21.7375 8.10165 21.2126C6.88464 20.6877 5.82603 19.9753 4.9258 19.0755C4.02555 18.1757 3.31285 17.1175 2.78771 15.9011C2.26257 14.6846 2 13.3849 2 12.0018C2 10.6187 2.26246 9.31863 2.78737 8.10165C3.31228 6.88464 4.02465 5.82603 4.92448 4.9258C5.82433 4.02555 6.88248 3.31285 8.09894 2.78771C9.31538 2.26257 10.6151 2 11.9982 2C13.3813 2 14.6814 2.26246 15.8984 2.78737C17.1154 3.31228 18.174 4.02465 19.0742 4.92448C19.9745 5.82433 20.6871 6.88248 21.2123 8.09894C21.7374 9.31538 22 10.6151 22 11.9982C22 13.3813 21.7375 14.6814 21.2126 15.8984C20.6877 17.1154 19.9753 18.174 19.0755 19.0742C18.1757 19.9745 17.1175 20.6871 15.9011 21.2123C14.6846 21.7374 13.3849 22 12.0018 22ZM12 20.4211C14.3509 20.4211 16.3421 19.6053 17.9737 17.9737C19.6053 16.3421 20.4211 14.3509 20.4211 12C20.4211 9.64912 19.6053 7.65788 17.9737 6.0263C16.3421 4.39472 14.3509 3.57893 12 3.57893C9.64912 3.57893 7.65788 4.39472 6.0263 6.0263C4.39472 7.65788 3.57893 9.64912 3.57893 12C3.57893 14.3509 4.39472 16.3421 6.0263 17.9737C7.65788 19.6053 9.64912 20.4211 12 20.4211Z" fill={color} />
      </G>
    </Svg>

  );
}
