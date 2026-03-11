import React from 'react';
import { Box, useProps, type BoxProps } from '@mantine/core';
import { useParallaxContext } from './ParallaxContext';

export interface ParallaxLayerProps extends BoxProps {
  /**
   * The depth multiplier for this layer's parallax movement.
   * Higher values result in more movement.
   * @default 1
   */
  depth?: number;

  /** The content to be rendered inside the layer. */
  children?: React.ReactNode;
}

const defaultProps: Partial<ParallaxLayerProps> = {
  depth: 1,
};

export function ParallaxLayer(_props: ParallaxLayerProps) {
  const props = useProps('ParallaxLayer', defaultProps, _props);
  const { depth, style, children, ...others } = props;
  const ctx = useParallaxContext();

  const layerStyle: React.CSSProperties = {
    ...(typeof style === 'object' && !Array.isArray(style) ? style : {}),
    transform: ctx.isHovering
      ? `perspective(${ctx.perspectiveValue}) translateX(${ctx.rotation.y * depth}px) translateY(${ctx.rotation.x * -depth}px)`
      : '',
    transformStyle: 'preserve-3d',
    transition:
      ctx.prefersReducedMotion || ctx.springEffect
        ? 'none'
        : `transform ${ctx.hoverDuration}ms ${ctx.transitionEasing}`,
  };

  return (
    <Box style={layerStyle} {...others}>
      {children}
    </Box>
  );
}

ParallaxLayer.displayName = 'ParallaxLayer';
