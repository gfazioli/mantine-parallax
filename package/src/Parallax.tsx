import {
  Box,
  BoxProps,
  Factory,
  MantineStyleProp,
  StylesApiProps,
  createVarsResolver,
  factory,
  getSize,
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
   * If true, applies a light effect to the parallax content.
   * @default false
   */
  lightEffect?: boolean;

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

const varsResolver = createVarsResolver<ParallaxFactory>((theme) => {
  return {
    root: { "--parallax-padding": getSize("xl", "parallax-padding") },
  };
});

export const Parallax = factory<ParallaxFactory>((_props, ref) => {
  const props = useProps("Parallax", defaultProps, _props);

  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const mousePosition = useMousePosition();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [lightPosition, setLightPosition] = useState({ x: 50, y: 50 });

  const {
    threshold = 15,
    lightEffect = true,
    perspective = 1000,
    backgroundParallax = true,
    parallax = true,
    parallaxDistance = 50,
    backgroundParallaxThreshold = 1,
    backgroundImage,

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
    console.log("handleMouseEnter");
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
    backgroundImage: backgroundImage,
    backgroundPosition:
      isHovering && backgroundParallax
        ? `${50 + rotation.y * backgroundParallaxThreshold}% ${50 - rotation.x * backgroundParallaxThreshold}%`
        : "center center",
    transformStyle: "preserve-3d",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    overflow: "visible",
  };

  const lightStyle: React.CSSProperties = lightEffect
    ? {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
        background: `radial-gradient(circle at ${lightPosition.x}% ${lightPosition.y}%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)`,
        transition: "background 0.3s ease-out",
      }
    : {};

  const childrenWithParallax = parallax
    ? React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, {
            style: {
              ...child.props.style,
              position: "relative",
              zIndex: index + 1,
              transform: isHovering
                ? `perspective(${perspective}px) translateX(${rotation.y * (index + 1) * parallaxDistance}px) translateY(${rotation.x * (index + 1) * -parallaxDistance}px)`
                : ``,
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
    zIndex: 1,
    transformStyle: "preserve-3d",
    overflow: "visible",
    padding: "20px",
  };

  return (
    <Box
      ref={cardRef}
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
