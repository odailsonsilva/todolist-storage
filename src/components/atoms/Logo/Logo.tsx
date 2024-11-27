import React from 'react'

import { Box, BoxProps } from '../Box/Box'
import { LogoDefault } from './LogoDefault'
import { LogoDefaultWhite } from './LogoDefaultWhite'

export type LogoPresets = 'default' | 'white'


interface LogoParams extends BoxProps {
    preset?: LogoPresets
    width?: number
    height?: number
}
export function Logo({
    preset = 'default',
    width = 128,
    height = 56,
    ...boxProps
}: LogoParams) {
    return (
        <Box {...boxProps}>
            {preset ? <LogoDefault width={width} height={height} /> : <LogoDefaultWhite width={width} height={height} />}
        </Box>
    )
}