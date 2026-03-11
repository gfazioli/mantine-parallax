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
  const { depth = 1, style, children, ...others } = props;
  const ctx = useParallaxContext();

  const isActive = ctx.isHovering || ctx.rotation.x !== 0 || ctx.rotation.y !== 0;
  const duration = ctx.isHovering ? ctx.hoverDuration : ctx.restDuration;

  const layerStyle: React.CSSProperties = {
    transform: isActive
      ? `translateX(${ctx.rotation.y * depth}px) translateY(${ctx.rotation.x * -depth}px)`
      : 'translateX(0px) translateY(0px)',
    transformStyle: 'preserve-3d',
    transition:
      ctx.prefersReducedMotion || ctx.springEffect
        ? 'none'
        : `transform ${duration}ms ${ctx.transitionEasing}`,
  };

  return (
    <Box style={[layerStyle, style]} {...others}>
      {children}
    </Box>
  );
}

ParallaxLayer.displayName = 'ParallaxLayer';
