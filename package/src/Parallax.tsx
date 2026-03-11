import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
import { ParallaxProvider } from './ParallaxContext';
import { ParallaxLayer } from './ParallaxLayer';
import classes from './Parallax.module.css';

export type ParallaxStylesNames = 'root' | 'content' | 'light' | 'glare';

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
   * Only effective when `contentParallax` is true.
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
   * Only effective when `lightGradientType` is `'linear'`.
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
   * If true, resets rotation to initial values when mouse/touch leaves.
   * If false, keeps the last rotation position.
   * @default true
   */
  resetOnLeave?: boolean;

  /**
   * If true, inverts the rotation direction (card tilts away from the cursor).
   * @default false
   */
  invertRotation?: boolean;

  /**
   * Clamps the rotation to a maximum degree value.
   * When set, rotation will not exceed this value in any direction.
   */
  maxRotation?: number;

  /**
   * If true, enables touch interactions on mobile devices.
   * @default true
   */
  touchEnabled?: boolean;

  /**
   * If true, enables gyroscope-based rotation on mobile devices using the DeviceOrientation API.
   * On iOS 13+, permission will be requested on the first user interaction (tap/click).
   * When active, the card tilts based on physical device orientation.
   * @default false
   */
  gyroscopeEnabled?: boolean;

  /**
   * The sensitivity multiplier for gyroscope rotation.
   * Higher values produce more rotation for the same device tilt.
   * @default 1
   */
  gyroscopeSensitivity?: number;

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
   * If true, enables a dynamic shadow that moves opposite to the card rotation.
   * @default false
   */
  shadowEffect?: boolean;

  /**
   * The color of the dynamic shadow.
   * Supports any Mantine color value (e.g., 'dark.4', 'blue', 'rgba(0,0,0,0.4)').
   * @default 'rgba(0, 0, 0, 0.4)'
   */
  shadowColor?: MantineColor;

  /**
   * The blur radius of the dynamic shadow in pixels.
   * @default 30
   */
  shadowBlur?: number;

  /**
   * The multiplier for the shadow offset relative to rotation.
   * Higher values make the shadow move further.
   * @default 0.8
   */
  shadowOffset?: number;

  /**
   * If true, enables a glare reflection effect that follows the cursor.
   * @default false
   */
  glareEffect?: boolean;

  /**
   * The color of the glare highlight.
   * @default 'rgba(255, 255, 255, 0.4)'
   */
  glareColor?: MantineColor;

  /**
   * The maximum opacity of the glare effect (0 to 1).
   * @default 0.4
   */
  glareMaxOpacity?: number;

  /**
   * The size of the glare band as a percentage (0 to 100).
   * @default 30
   */
  glareSize?: number;

  /**
   * If true, renders the glare on top of the content. If false, renders behind.
   * @default true
   */
  glareOverlay?: boolean;

  /**
   * Callback fired whenever the rotation changes.
   * Receives the current rotation values and hover state.
   */
  onRotationChange?: (values: { rotateX: number; rotateY: number; isHovering: boolean }) => void;

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
  staticComponents: {
    Layer: typeof ParallaxLayer;
  };
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
  resetOnLeave: true,
  invertRotation: false,
  touchEnabled: true,
  gyroscopeEnabled: false,
  gyroscopeSensitivity: 1,
  hoverScale: 1,
  transitionDuration: 300,
  transitionEasing: 'ease-out',
  shadowEffect: false,
  shadowColor: 'rgba(0, 0, 0, 0.4)',
  shadowBlur: 30,
  shadowOffset: 0.8,
  glareEffect: false,
  glareColor: 'rgba(255, 255, 255, 0.4)',
  glareMaxOpacity: 0.4,
  glareSize: 30,
  glareOverlay: true,
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
    resetOnLeave,
    invertRotation,
    maxRotation,
    touchEnabled,
    gyroscopeEnabled,
    gyroscopeSensitivity,
    hoverScale,
    transitionDuration,
    transitionEasing,
    shadowEffect,
    shadowColor,
    shadowBlur,
    shadowOffset,
    glareEffect,
    glareColor,
    glareMaxOpacity,
    glareSize,
    glareOverlay,
    onRotationChange,
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

  const clampRotation = useCallback(
    (value: number) => {
      if (maxRotation === undefined) {
        return value;
      }
      return Math.max(-maxRotation, Math.min(maxRotation, value));
    },
    [maxRotation]
  );

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
        const sign = invertRotation ? -1 : 1;
        const rotateY = clampRotation(sign * ((mouseX - centerX) / rect.width) * threshold);
        const rotateX = clampRotation(sign * -((mouseY - centerY) / rect.height) * threshold);

        setRotation({ x: rotateX, y: rotateY });
        onRotationChange?.({ rotateX, rotateY, isHovering: true });

        if (lightEffect || glareEffect) {
          setLightPosition({
            x: (mouseX / rect.width) * 100,
            y: (mouseY / rect.height) * 100,
          });
        }
      });
    },
    [threshold, lightEffect, glareEffect, onRotationChange, invertRotation, clampRotation]
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
    const wasHovering = isHoveringRef.current;
    isHoveringRef.current = false;
    setIsHovering(false);
    setLightPosition({ x: 50, y: 50 });
    if (resetOnLeave) {
      setRotation({ x: 0, y: 0 });
    }
    if (wasHovering) {
      const resetValues = resetOnLeave
        ? { rotateX: 0, rotateY: 0 }
        : { rotateX: rotation.x, rotateY: rotation.y };
      onRotationChange?.({ ...resetValues, isHovering: false });
    }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }
  }, [onRotationChange, resetOnLeave, rotation]);

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

  // Gyroscope support
  const gyroBaselineRef = useRef<{ beta: number; gamma: number } | null>(null);
  const gyroPermissionRef = useRef<'pending' | 'granted' | 'denied'>('pending');
  const gyroActiveRef = useRef(false);

  const handleDeviceOrientation = useCallback(
    (e: DeviceOrientationEvent) => {
      if (isDisabled || !gyroscopeEnabled) {
        return;
      }

      const beta = e.beta ?? 0; // front-back tilt (-180 to 180)
      const gamma = e.gamma ?? 0; // left-right tilt (-90 to 90)

      // Set baseline on first reading
      if (!gyroBaselineRef.current) {
        gyroBaselineRef.current = { beta, gamma };
      }

      const sign = invertRotation ? -1 : 1;
      const deltaBeta = beta - gyroBaselineRef.current.beta;
      const deltaGamma = gamma - gyroBaselineRef.current.gamma;

      const rotateX = clampRotation(sign * deltaBeta * gyroscopeSensitivity);
      const rotateY = clampRotation(sign * deltaGamma * gyroscopeSensitivity);

      if (!gyroActiveRef.current) {
        gyroActiveRef.current = true;
        setIsHovering(true);
      }

      setRotation({ x: rotateX, y: rotateY });
      onRotationChange?.({ rotateX, rotateY, isHovering: true });

      if (lightEffect || glareEffect) {
        // Map rotation to light position (0-100 range)
        const lightX = Math.max(0, Math.min(100, 50 + rotateY * 2));
        const lightY = Math.max(0, Math.min(100, 50 - rotateX * 2));
        setLightPosition({ x: lightX, y: lightY });
      }
    },
    [
      isDisabled,
      gyroscopeEnabled,
      gyroscopeSensitivity,
      invertRotation,
      clampRotation,
      onRotationChange,
      lightEffect,
      glareEffect,
    ]
  );

  const hasDeviceOrientation = typeof window !== 'undefined' && 'DeviceOrientationEvent' in window;

  const requestGyroscopePermission = useCallback(async () => {
    if (
      !hasDeviceOrientation ||
      !gyroscopeEnabled ||
      isDisabled ||
      gyroPermissionRef.current === 'granted'
    ) {
      return;
    }

    // iOS 13+ requires explicit permission request
    const DeviceOrientationEventTyped = DeviceOrientationEvent as unknown as {
      requestPermission?: () => Promise<'granted' | 'denied'>;
    };

    if (typeof DeviceOrientationEventTyped.requestPermission === 'function') {
      try {
        const permission = await DeviceOrientationEventTyped.requestPermission();
        gyroPermissionRef.current = permission;
      } catch {
        gyroPermissionRef.current = 'denied';
      }
    } else {
      // Non-iOS or older browsers — no permission needed
      gyroPermissionRef.current = 'granted';
    }

    if (gyroPermissionRef.current === 'granted') {
      gyroBaselineRef.current = null;
      window.addEventListener('deviceorientation', handleDeviceOrientation);
    }
  }, [hasDeviceOrientation, gyroscopeEnabled, isDisabled, handleDeviceOrientation]);

  useEffect(() => {
    if (!hasDeviceOrientation || !gyroscopeEnabled || isDisabled) {
      // Cleanup if disabled or unavailable
      if (hasDeviceOrientation) {
        window.removeEventListener('deviceorientation', handleDeviceOrientation);
      }
      if (gyroActiveRef.current) {
        gyroActiveRef.current = false;
        gyroBaselineRef.current = null;
        setIsHovering(false);
        if (resetOnLeave) {
          setRotation({ x: 0, y: 0 });
        }
      }
      return;
    }

    // On non-iOS browsers, start listening immediately
    const DeviceOrientationEventTyped = DeviceOrientationEvent as unknown as {
      requestPermission?: () => Promise<'granted' | 'denied'>;
    };

    if (typeof DeviceOrientationEventTyped.requestPermission !== 'function') {
      gyroPermissionRef.current = 'granted';
      window.addEventListener('deviceorientation', handleDeviceOrientation);
    }

    return () => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, [hasDeviceOrientation, gyroscopeEnabled, isDisabled, handleDeviceOrientation, resetOnLeave]);

  // Request gyroscope permission on first user interaction (needed for iOS 13+)
  const handleClick = useCallback(() => {
    if (gyroscopeEnabled && gyroPermissionRef.current === 'pending') {
      requestGyroscopePermission();
    }
  }, [gyroscopeEnabled, requestGyroscopePermission]);

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

  const hasShadowRotation = isHovering || (!resetOnLeave && (rotation.x !== 0 || rotation.y !== 0));
  const shadowX = hasShadowRotation ? -rotation.y * shadowOffset : 0;
  const shadowY = hasShadowRotation ? rotation.x * shadowOffset : 0;

  const shadowTransition = shadowEffect
    ? `, box-shadow ${hoverDuration}ms ${transitionEasing}`
    : '';
  const restShadowTransition = shadowEffect
    ? `, box-shadow ${restDuration}ms ${transitionEasing}`
    : '';

  const cardStyle: MantineStyleProp = {
    transition: prefersReducedMotion
      ? 'none'
      : isHovering
        ? `transform ${hoverDuration}ms ${transitionEasing}${shadowTransition}`
        : `transform ${restDuration}ms ${transitionEasing}, background-position ${restDuration}ms ${transitionEasing}${restShadowTransition}`,
    transform: isHovering
      ? `perspective(${perspectiveValue}) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${initialRotationZ}deg) skewX(${initialSkewX}deg) skewY(${initialSkewY}deg)${scaleValue}`
      : !resetOnLeave && (rotation.x !== 0 || rotation.y !== 0)
        ? `perspective(${perspectiveValue}) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${initialRotationZ}deg) skewX(${initialSkewX}deg) skewY(${initialSkewY}deg)`
        : `perspective(${initialPerspectiveValue}) rotateX(${initialRotationX}deg) rotateY(${initialRotationY}deg) rotateZ(${initialRotationZ}deg) skewX(${initialSkewX}deg) skewY(${initialSkewY}deg)`,
    boxShadow: shadowEffect
      ? `${shadowX}px ${shadowY}px ${shadowBlur}px ${getThemeColor(shadowColor, theme)}`
      : undefined,
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

  const glareGradientColor = getThemeColor(glareColor, theme);
  const glareAngle = isHovering
    ? Math.atan2(lightPosition.y - 50, lightPosition.x - 50) * (180 / Math.PI) + 90
    : 225;
  const glareOpacity = isHovering ? glareMaxOpacity : 0;

  const glareStyle: React.CSSProperties = glareEffect
    ? {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: glareOverlay ? 2 : -1,
        background: `linear-gradient(${glareAngle}deg, rgba(255,255,255,0) 0%, ${glareGradientColor} ${50 - glareSize / 2}%, ${glareGradientColor} ${50 + glareSize / 2}%, rgba(255,255,255,0) 100%)`,
        opacity: glareOpacity,
        transition: prefersReducedMotion
          ? 'none'
          : `opacity ${restDuration}ms ${transitionEasing}, background ${hoverDuration}ms ${transitionEasing}`,
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

  const contextValue = useMemo(
    () => ({
      rotation,
      isHovering,
      perspectiveValue,
      hoverDuration,
      restDuration,
      transitionEasing,
      prefersReducedMotion,
    }),
    [
      rotation,
      isHovering,
      perspectiveValue,
      hoverDuration,
      restDuration,
      transitionEasing,
      prefersReducedMotion,
    ]
  );

  return (
    <ParallaxProvider value={contextValue}>
      <Box
        w={w}
        h={h}
        onClick={handleClick}
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
          {glareEffect && <div {...getStyles('glare', { style: glareStyle })} />}
        </Box>
      </Box>
    </ParallaxProvider>
  );
});

Parallax.classes = classes;
Parallax.displayName = 'Parallax';
Parallax.Layer = ParallaxLayer;
