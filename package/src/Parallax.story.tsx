import { Text, Title } from "@mantine/core";
import React from "react";
import { Parallax, ParallaxProps } from "./Parallax";

export default {
  title: "Parallax",
  args: {
    threshold: 40,
    perspective: 1000,
    backgroundParallaxThreshold: 1,
    lightEffect: true,
    backgroundParallax: true,
    parallax: true,
    parallaxDistance: 1,
  },
  argTypes: {
    threshold: { control: { type: "range", min: 2, max: 100, step: 1 } },
    perspective: { control: { type: "range", min: 1, max: 2000, step: 1 } },
    parallaxDistance: {
      control: { type: "range", min: 0, max: 10, step: 0.01 },
    },
    backgroundParallaxThreshold: {
      control: { type: "range", min: 1, max: 10, step: 0.01 },
    },
    lightEffect: { control: { type: "boolean" } },
    backgroundParallax: { control: { type: "boolean" } },
    parallax: { control: { type: "boolean" } },
  },
};

export function Usage(props: ParallaxProps) {
  return (
    <div style={{ padding: "2rem", display: "block" }}>
      <Parallax
        {...props}
        backgroundImage="url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)"
        style={{
          backgroundSize: "500px 400px",
          width: "300px",
          height: "200px",
        }}
      >
        <Title c="blue">Parallax Card Parallax</Title>
        <Text c="white">Hover to see the effect</Text>
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "50%",
          }}
        ></div>
      </Parallax>
    </div>
  );
}
