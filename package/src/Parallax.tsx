import {
  Box,
  BoxProps,
  Factory,
  MantineColor,
  MantineStyleProp,
  StylesApiProps,
  createVarsResolver,
  factory,
  getSize,
  getThemeColor,
  useMantineTheme,
  useProps,
  useStyles,
} from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";

import classes from "./Parallax.module.css";

export type ParallaxStylesNames = "root";

export type ParallaxCssVariables = {
  root: "--parallax-padding";
};

/**
 * Props for the Parallax component.
 */
export interface ParallaxBaseProps {
  /**
   * The threshold value for triggering the parallax effect.
   * @default 0
   */
  threshold?: number;

  /**
   * The perspective value for the parallax effect.
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
   * @default 0
   */
  backgroundParallaxThreshold?: number;

  /**
   * If true, enables the parallax effect.
   * @default false
   */
  parallax?: boolean;

  /**
   * The distance value for the parallax effect.
   * @default 100
   */
  parallaxDistance?: number;

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
   * @default 'white'
   */
  lightColor?: MantineColor;

  /**
   * The type of gradient for the light effect.
   * @default 'radial'
   */
  lightGradientType?: "radial" | "linear";

  /**
   * The angle of the light gradient.
   * @default 0
   */
  lightGradientAngle?: number;

  /**
   * The content to be rendered inside the parallax component.
   */
  children?: React.ReactNode;
}

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
}

export interface ParallaxProps
  extends BoxProps,
    ParallaxBaseProps,
    StylesApiProps<ParallaxFactory> {}

export type ParallaxFactory = Factory<{
  props: ParallaxProps;
  ref: HTMLDivElement;
  stylesNames: ParallaxStylesNames;
  vars: ParallaxCssVariables;
}>;

export const defaultProps: Partial<ParallaxProps> = {};

const varsResolver = createVarsResolver<ParallaxFactory>((theme) => ({
  root: { "--parallax-padding": getSize("xl", "parallax-padding") },
}));

export const Parallax = factory<ParallaxFactory>((_props, ref) => {
  const props = useProps("Parallax", defaultProps, _props);

  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const mousePosition = useMousePosition();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [lightPosition, setLightPosition] = useState({ x: 50, y: 50 });

  const theme = useMantineTheme();

  const {
    threshold = 40,
    perspective = 1000,
    backgroundParallax = false,
    backgroundParallaxThreshold = 1,
    parallax = true,
    parallaxDistance = 1,
    backgroundImage,
    lightEffect = false,
    lightOverlay = false,
    lightIntensity = 0.2,
    lightSize = 50,
    lightColor = "rgba(255, 255, 255, .1)",
    lightGradientType = "radial",
    lightGradientAngle = 0,

    classNames,
    style,
    styles,
    unstyled,
    vars,
    children,
    className,

    ...others
  } = props;

  const getStyles = useStyles<ParallaxFactory>({
    name: "Parallax",
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  useEffect(() => {
    if (isHovering && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const rotateY = ((mousePosition.x - centerX) / rect.width) * threshold;
      const rotateX = -((mousePosition.y - centerY) / rect.height) * threshold;

      setRotation({ x: rotateX, y: rotateY });

      if (lightEffect) {
        const lightX = ((mousePosition.x - rect.left) / rect.width) * 100;
        const lightY = ((mousePosition.y - rect.top) / rect.height) * 100;
        setLightPosition({ x: lightX, y: lightY });
      }
    }
  }, [mousePosition, isHovering, threshold, lightEffect]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const cardStyle: MantineStyleProp = {
    ...props.style,
    transition: isHovering
      ? "transform 0.1s ease-out"
      : "transform 0.3s ease-out, background-position 0.3s ease-out",
    transform: isHovering
      ? `perspective(${perspective}px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
      : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
    backgroundImage: backgroundImage || undefined,
    backgroundPosition:
      isHovering && backgroundParallax
        ? `${50 + rotation.y * backgroundParallaxThreshold}% ${50 - rotation.x * backgroundParallaxThreshold}%`
        : "center center",
    transformStyle: "preserve-3d",
    overflow: "visible",
  };

  const lightGradientColor = getThemeColor(lightColor, theme);

  const gradients = {
    radial: `radial-gradient(circle at ${lightPosition.x}% ${lightPosition.y}%, ${lightGradientColor} ${lightIntensity * 100}%, rgba(255,255,255,0) ${lightSize}%)`,

    linear: `linear-gradient(${lightGradientAngle}deg, rgba(255,255,255,0) 0%, ${lightGradientColor} ${lightPosition.x}%, rgba(255,255,255,0) 100%)`,
  };

  const lightStyle: React.CSSProperties = lightEffect
    ? {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
        zIndex: lightOverlay ? 1 : -1,
        background: gradients[lightGradientType],
        transition: "background 0.3s ease-out",
        borderRadius: "inherit",
      }
    : {};

  const childrenWithParallax = parallax
    ? React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, {
            className: classes.parallaxChildren,
            style: {
              ...child.props.style,
              position: "relative",
              zIndex: index + 1,
              transform: isHovering
                ? `perspective(${perspective}px) translateX(${rotation.y * (index + 1) * parallaxDistance}px) translateY(${rotation.x * (index + 1) * -parallaxDistance}px)`
                : "",
              transformStyle: "preserve-3d",
              transition: "transform 0.1s ease-out",
            },
          });
        }
        return child;
      })
    : children;

  const childrenContainerStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "visible",
    zIndex: 1,
  };

  return (
    <Box
      ref={cardRef}
      w={props.w}
      h={props.h}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: `${perspective}px`,
        position: "relative",
        overflow: "visible",
      }}
    >
      <Box {...getStyles("root")} {...others} style={cardStyle}>
        <div style={childrenContainerStyle}>{childrenWithParallax}</div>
        {lightEffect && <div style={lightStyle} />}
      </Box>
    </Box>
  );
});

Parallax.classes = classes;
Parallax.displayName = "Parallax";
