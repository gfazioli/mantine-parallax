import {
  Box,
  BoxProps,
  MantineColor,
  MantineStyleProp,
  PolymorphicFactory,
  StylesApiProps,
  getThemeColor,
  polymorphicFactory,
  useMantineTheme,
  useProps,
  useStyles,
} from "@mantine/core";
import { useMouse } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import classes from "./Parallax.module.css";

export type ParallaxStylesNames = "root";

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
  contentParallax?: boolean;

  /**
   * The distance value for the parallax effect.
   * @default 100
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
export interface ParallaxProps
  extends BoxProps,
    ParallaxBaseProps,
    StylesApiProps<ParallaxFactory> {}

export type ParallaxFactory = PolymorphicFactory<{
  props: ParallaxProps;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: ParallaxStylesNames;
}>;

export const defaultProps: Partial<ParallaxProps> = {};

export const Parallax = polymorphicFactory<ParallaxFactory>((_props, ref) => {
  const props = useProps("Parallax", defaultProps, _props);

  const { ref: mouseRef, x, y } = useMouse();
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [lightPosition, setLightPosition] = useState({ x: 50, y: 50 });

  const theme = useMantineTheme();

  const {
    threshold = 40,
    perspective = 1000,
    backgroundParallax = false,
    backgroundParallaxThreshold = 1,
    contentParallax = false,
    contentParallaxDistance = 0,
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
  });

  useEffect(() => {
    if (isHovering && mouseRef.current) {
      const rect = mouseRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / rect.width) * threshold;
      const rotateX = -((y - centerY) / rect.height) * threshold;

      setRotation({ x: rotateX, y: rotateY });

      if (lightEffect) {
        const lightX = (x / rect.width) * 100;
        const lightY = (y / rect.height) * 100;
        setLightPosition({ x: lightX, y: lightY });
      }
    }
  }, [x, y, isHovering, threshold, lightEffect]);

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
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundPosition:
      isHovering && backgroundParallax
        ? `${50 + rotation.y * backgroundParallaxThreshold}% ${50 - rotation.x * backgroundParallaxThreshold}%`
        : "center center",
    transformStyle: "preserve-3d",
    overflow: "visible",
  };

  const lightGradientColor = getThemeColor(lightColor, theme);

  // define lightPercentageStart position start by using lightSize.
  // If lightSize is 100 lightPercentageStart will be 0, if lightSize is 0 lightPercentageStart will be 100
  // lightSize = 50, lightPercentageStart = 50
  const lightPercentageStart = lightPosition.x - lightSize;

  const gradients = {
    radial: `radial-gradient(circle at ${lightPosition.x}% ${lightPosition.y}%, ${lightGradientColor} ${lightIntensity * 100}%, rgba(255,255,255,0) ${lightSize}%)`,

    linear: `linear-gradient(${lightGradientAngle}deg, rgba(255,255,255,0) ${lightPercentageStart}%, ${lightGradientColor} ${lightPosition.x}%, rgba(255,255,255,0) ${lightPosition.x + lightSize}%)`,
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

  const childrenWithParallax = contentParallax
    ? React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, {
            className: classes.parallaxChildren,
            style: {
              ...child.props.style,
              transform: isHovering
                ? `perspective(${perspective}px) translateX(${rotation.y * (index + 1) * contentParallaxDistance}px) translateY(${rotation.x * (index + 1) * -contentParallaxDistance}px)`
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
      ref={mouseRef}
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
      <Box ref={ref} {...getStyles("root")} {...others} style={cardStyle}>
        <div style={childrenContainerStyle}>{childrenWithParallax}</div>
        {lightEffect && <div style={lightStyle} />}
      </Box>
    </Box>
  );
});

Parallax.classes = classes;
Parallax.displayName = "Parallax";
