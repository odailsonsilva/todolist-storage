import React from 'react';

import { Box, BoxProps } from '../Box/Box';

export type LogoPresets = 'default' | 'white'


interface LogoParams extends BoxProps {
    preset?: LogoPresets
    width?: number
    height?: number
}
export function Logo({
    ...boxProps
}: LogoParams) {
    return (
        <Box {...boxProps} />
    );
}
