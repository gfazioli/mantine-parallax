import { createSafeContext } from '@mantine/core';

export interface ParallaxContextValue {
  rotation: { x: number; y: number };
  isHovering: boolean;
  perspectiveValue: string;
  hoverDuration: number;
  restDuration: number;
  transitionEasing: string;
  prefersReducedMotion: boolean | undefined;
  springEffect: boolean;
}

export const [ParallaxProvider, useParallaxContext] = createSafeContext<ParallaxContextValue>(
  'Parallax.Layer must be used within a Parallax component'
);
