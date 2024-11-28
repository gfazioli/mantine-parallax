import { Parallax } from "@gfazioli/mantine-parallax";
import { Paper, Text, Title } from "@mantine/core";
import { MantineDemo } from "@mantinex/demo";

function Demo(props: any) {
  return (
    <Parallax {...props}>
      <Paper withBorder w={300} h={200}>
        <Title>Parallax</Title>
        <Text>Amazing parallax effect component. Hover to see the effect.</Text>
      </Paper>
    </Parallax>
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
  component: Demo,
  code,
  controls: [
    {
      prop: "perspective",
      type: "number",
      initialValue: 1000,
      libraryValue: 1000,
      step: 1,
      min: 1,
      max: 3000,
    },
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
  ],
};
