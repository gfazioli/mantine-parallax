import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Box,
  getThemeColor,
  polymorphicFactory,
  useMantineTheme,
  useProps,
  useStyles,
  type BoxProps,
  type MantineColor,
  type MantineStyleProp,
  type PolymorphicFactory,
  type StylesApiProps,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './Parallax.module.css';

export type ParallaxStylesNames = 'root' | 'content' | 'light';

/**
 * Props for the Parallax component.
 */
export interface ParallaxBaseProps {
  /**
   * The threshold value for triggering the parallax effect.
   * @default 40
   */
  threshold?: number;

  /**
   * The perspective value for the parallax effect.
   * With value >= 10000, the perspective is set to 'none'.
   * @default 1000
   */
  perspective?: number;

  /**
   * If true, enables parallax effect on the background.
   * @default false
   */
  backgroundParallax?: boolean;

  /**
   * The threshold value for triggering the background parallax effect.
   * @default 1
   */
  backgroundParallaxThreshold?: number;

  /**
   * If true, enables the parallax effect.
   * @default false
   */
  contentParallax?: boolean;

  /**
   * The distance value for the parallax effect.
   * @default 0
   */
  contentParallaxDistance?: number;

  /**
   * The URL of the background image.
   */
  backgroundImage?: string;

  /**
   * If true, applies a light effect to the parallax content.
   * @default false
   */
  lightEffect?: boolean;

  /**
   * If true, applies a light effect to the parallax content.
   * @default false
   */
  lightOverlay?: boolean;

  /**
   * The intensity of the light effect.
   * @default 0.2
   */
  lightIntensity?: number;

  /**
   * The size of the light effect.
   * @default 50
   */
  lightSize?: number;

  /**
   * The color of the light effect.
   * @default 'rgba(255, 255, 255, .1)'
   */
  lightColor?: MantineColor;

  /**
   * The type of gradient for the light effect.
   * @default 'radial'
   */
  lightGradientType?: 'radial' | 'linear';

  /**
   * The angle of the light gradient.
   * @default 0
   */
  lightGradientAngle?: number;

  /**
   * The initial rotation X of the parallax component.
   */
  initialRotationX?: number;

  /**
   * The initial rotation Y of the parallax component.
   */
  initialRotationY?: number;

  /**
   * The initial rotation Z of the parallax component.
   */
  initialRotationZ?: number;

  /**
   * The initial perspective of the parallax component.
   * With value >= 10000, the perspective is set to 'none'.
   * @default 1000
   */
  initialPerspective?: number;

  /**
   * The initial skew X of the parallax component.
   */
  initialSkewX?: number;

  /**
   * The initial skew Y of the parallax component.
   */
  initialSkewY?: number;

  /**
   * If true, disables the parallax component.
   * @default false
   */
  disabled?: boolean;

  /**
   * If true, enables touch interactions on mobile devices.
   * @default true
   */
  touchEnabled?: boolean;

  /**
   * The scale factor applied when hovering.
   * Set to 1 for no scaling.
   * @default 1
   */
  hoverScale?: number;

  /**
   * The duration of the transition in milliseconds.
   * @default 300
   */
  transitionDuration?: number;

  /**
   * The easing function for the transition.
   * @default 'ease-out'
   */
  transitionEasing?: string;

  /**
   * The content to be rendered inside the parallax component.
   */
  children?: React.ReactNode;
}
export interface ParallaxProps
  extends BoxProps, ParallaxBaseProps, StylesApiProps<ParallaxFactory> {}

export type ParallaxFactory = PolymorphicFactory<{
  props: ParallaxProps;
  defaultComponent: 'div';
  defaultRef: HTMLDivElement;
  stylesNames: ParallaxStylesNames;
}>;

export const defaultProps = {
  threshold: 40,
  perspective: 1000,
  backgroundParallax: false,
  backgroundParallaxThreshold: 1,
  contentParallax: false,
  contentParallaxDistance: 0,
  lightEffect: false,
  lightOverlay: false,
  lightIntensity: 0.2,
  lightSize: 50,
  lightColor: 'rgba(255, 255, 255, .1)',
  lightGradientType: 'radial',
  lightGradientAngle: 0,
  initialRotationX: 0,
  initialRotationY: 0,
  initialRotationZ: 0,
  initialPerspective: 1000,
  initialSkewX: 0,
  initialSkewY: 0,
  touchEnabled: true,
  hoverScale: 1,
  transitionDuration: 300,
  transitionEasing: 'ease-out',
} satisfies Partial<ParallaxProps>;

export const Parallax = polymorphicFactory<ParallaxFactory>((_props, ref) => {
  const props = useProps('Parallax', defaultProps, _props);

  const rafRef = useRef<number>(0);
  const isHoveringRef = useRef(false);
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [lightPosition, setLightPosition] = useState({ x: 50, y: 50 });

  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const theme = useMantineTheme();

  const {
    threshold,
    perspective,
    backgroundParallax,
    backgroundParallaxThreshold,
    contentParallax,
    contentParallaxDistance,
    backgroundImage,
    lightEffect,
    lightOverlay,
    lightIntensity,
    lightSize,
    lightColor,
    lightGradientType,
    lightGradientAngle,
    initialRotationX,
    initialRotationY,
    initialRotationZ,
    initialPerspective,
    initialSkewX,
    initialSkewY,
    disabled,
    touchEnabled,
    hoverScale,
    transitionDuration,
    transitionEasing,
    w,
    h,

    classNames,
    style,
    styles,
    unstyled,
    vars,
    children,
    className,

    ...others
  } = props;

  const isDisabled = disabled || prefersReducedMotion;

  const getStyles = useStyles<ParallaxFactory>({
    name: 'Parallax',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
  });

  const scheduleUpdate = useCallback(
    (clientX: number, clientY: number, rect: DOMRect) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      const mouseX = clientX - rect.left;
      const mouseY = clientY - rect.top;

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateY = ((mouseX - centerX) / rect.width) * threshold;
        const rotateX = -((mouseY - centerY) / rect.height) * threshold;

        setRotation({ x: rotateX, y: rotateY });

        if (lightEffect) {
          setLightPosition({
            x: (mouseX / rect.width) * 100,
            y: (mouseY / rect.height) * 100,
          });
        }
      });
    },
    [threshold, lightEffect]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!isHoveringRef.current) {
        return;
      }
      scheduleUpdate(e.clientX, e.clientY, e.currentTarget.getBoundingClientRect());
    },
    [scheduleUpdate]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLElement>) => {
      if (!isHoveringRef.current || !touchEnabled) {
        return;
      }
      const touch = e.touches[0];
      if (touch) {
        scheduleUpdate(touch.clientX, touch.clientY, e.currentTarget.getBoundingClientRect());
      }
    },
    [scheduleUpdate, touchEnabled]
  );

  const activate = useCallback(() => {
    if (!isDisabled) {
      isHoveringRef.current = true;
      setIsHovering(true);
    }
  }, [isDisabled]);

  const deactivate = useCallback(() => {
    isHoveringRef.current = false;
    setIsHovering(false);
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }
  }, []);

  const handleTouchStart = useCallback(() => {
    if (touchEnabled) {
      activate();
    }
  }, [touchEnabled, activate]);

  const handleTouchEnd = useCallback(() => {
    if (touchEnabled) {
      deactivate();
    }
  }, [touchEnabled, deactivate]);

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const initialPerspectiveValue = initialPerspective < 10000 ? `${initialPerspective}px` : 'none';
  const perspectiveValue = perspective < 10000 ? `${perspective}px` : 'none';

  const hoverDuration = Math.round(transitionDuration / 3);
  const restDuration = transitionDuration;

  const scaleValue = isHovering && hoverScale !== 1 ? ` scale(${hoverScale})` : '';

  const cardStyle: MantineStyleProp = {
    transition: prefersReducedMotion
      ? 'none'
      : isHovering
        ? `transform ${hoverDuration}ms ${transitionEasing}`
        : `transform ${restDuration}ms ${transitionEasing}, background-position ${restDuration}ms ${transitionEasing}`,
    transform: isHovering
      ? `perspective(${perspectiveValue}) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${initialRotationZ}deg) skewX(${initialSkewX}deg) skewY(${initialSkewY}deg)${scaleValue}`
      : `perspective(${initialPerspectiveValue}) rotateX(${initialRotationX}deg) rotateY(${initialRotationY}deg) rotateZ(${initialRotationZ}deg) skewX(${initialSkewX}deg) skewY(${initialSkewY}deg)`,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundPosition: backgroundImage
      ? isHovering && backgroundParallax
        ? `${50 + rotation.y * backgroundParallaxThreshold}% ${50 - rotation.x * backgroundParallaxThreshold}%`
        : backgroundParallax
          ? `${50 + initialRotationY * backgroundParallaxThreshold}% ${50 - initialRotationX * backgroundParallaxThreshold}%`
          : 'center center'
      : undefined,
    transformStyle: 'preserve-3d',
    overflow: 'visible',
  };

  const lightGradientColor = getThemeColor(lightColor, theme);
  const lightPercentageStart = lightPosition.x - lightSize;

  const gradients = {
    radial: `radial-gradient(circle at ${lightPosition.x}% ${lightPosition.y}%, ${lightGradientColor} ${lightIntensity * 100}%, rgba(255,255,255,0) ${lightSize}%)`,

    linear: `linear-gradient(${lightGradientAngle}deg, rgba(255,255,255,0) ${lightPercentageStart}%, ${lightGradientColor} ${lightPosition.x}%, rgba(255,255,255,0) ${lightPosition.x + lightSize}%)`,
  };

  const lightStyle: React.CSSProperties = lightEffect
    ? {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: lightOverlay ? 1 : -1,
        background: gradients[lightGradientType],
        transition: prefersReducedMotion
          ? 'none'
          : `background ${restDuration}ms ${transitionEasing}`,
        borderRadius: 'inherit',
      }
    : {};

  const childrenWithParallax = contentParallax
    ? React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            style: {
              ...(child as React.ReactElement<any>).props.style,
              transform: isHovering
                ? `perspective(${perspectiveValue}) translateX(${rotation.y * (index + 1) * contentParallaxDistance}px) translateY(${rotation.x * (index + 1) * -contentParallaxDistance}px)`
                : '',
              transformStyle: 'preserve-3d',
              transition: prefersReducedMotion
                ? 'none'
                : `transform ${hoverDuration}ms ${transitionEasing}`,
            },
          });
        }
        return child;
      })
    : children;

  const childrenContainerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'visible',
    zIndex: 1,
  };

  return (
    <Box
      w={w}
      h={h}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      style={{
        position: 'relative',
        overflow: 'visible',
        touchAction: touchEnabled ? 'none' : undefined,
      }}
    >
      <Box
        ref={ref}
        h={h ? '100%' : undefined}
        {...others}
        {...getStyles('root', { style: cardStyle })}
      >
        <div {...getStyles('content', { style: childrenContainerStyle })}>
          {childrenWithParallax}
        </div>
        {lightEffect && <div {...getStyles('light', { style: lightStyle })} />}
      </Box>
    </Box>
  );
});

Parallax.classes = classes;
Parallax.displayName = 'Parallax';
