import { Parallax } from "@gfazioli/mantine-parallax";
import { Box } from "@mantine/core";
import { MantineDemo } from "@mantinex/demo";

import { ReactNode } from "react";

function Wrapper(props: any) {
  function BoxComponent({
    children,
    ...props
  }: {
    children: ReactNode;
    [key: string]: any;
  }) {
    return (
      <Box
        {...props}
        p="md"
        w="200px"
        c="white"
        style={{ borderRadius: "8px" }}
      >
        {children}
      </Box>
    );
  }

  return (
    <div>
      <Parallax
        threshold={40}
        lightEffect={true}
        perspective={1200}
        backgroundParallax={true}
        parallaxDistance={5}
        parallax={true}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
          backgroundSize: "600px 400px",
          width: "300px",
          height: "200px",
        }}
      >
        <BoxComponent bg="red">Hello World #1</BoxComponent>
        <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>
        <BoxComponent bg="blue">Have a nice day #3</BoxComponent>
        <BoxComponent bg="lime">Goodbye #4</BoxComponent>
        <BoxComponent bg="orange">Hello World #5</BoxComponent>
        <BoxComponent bg="dark">Hope you like it #6</BoxComponent>
        <BoxComponent bg="green">Have a nice day #7</BoxComponent>
      </Parallax>
    </div>
  );
}

const code = `
import { Parallax } from '@gfazioli/mantine-parallax';

function Demo() {
  function BoxComponent({ children, ...props }: { children: ReactNode; [key: string]: any }) {
    return (
      <Box {...props} p="md" w="200px" c="white" style={{ borderRadius: '8px' }}>
        {children}
      </Box>
    );
  }

  return (
    <Parallax {{props}} w={560} h={300}>
      <BoxComponent bg="red">Hello World #1</BoxComponent>
      <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>
      <BoxComponent bg="blue">Have a nice day #3</BoxComponent>
      <BoxComponent bg="lime">Goodbye #4</BoxComponent>
    </Parallax>
  );
}
`;

export const configurator: MantineDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    {
      prop: "lightEffect",
      type: "boolean",
      initialValue: true,
      libraryValue: true,
    },
    {
      prop: "backgroundParallax",
      type: "boolean",
      initialValue: true,
      libraryValue: true,
    },
    {
      prop: "parallax",
      type: "boolean",
      initialValue: true,
      libraryValue: true,
    },
    {
      prop: "threshold",
      type: "number",
      initialValue: 40,
      libraryValue: 40,
      min: 2,
      max: 2000,
    },
    {
      prop: "parallaxDistance",
      type: "number",
      initialValue: 50,
      libraryValue: 50,
      min: 2,
      max: 2000,
    },
    {
      prop: "perspective",
      type: "number",
      initialValue: 1000,
      libraryValue: 1000,
      step: 1,
      min: 1,
      max: 3000,
    },
  ],
};
