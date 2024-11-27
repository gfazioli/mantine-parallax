import { Parallax } from '@gfazioli/mantine-parallax';
import { Box } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { ReactNode } from 'react';

function Wrapper(props: any) {
  function BoxComponent({ children, ...props }: { children: ReactNode; [key: string]: any }) {
    return (
      <Box {...props} p="md" w="200px" c="white" style={{ borderRadius: '8px' }}>
        {children}
      </Box>
    );
  }

  return (
    <>
      <Parallax w={800} mb={16} fadeEdges>
        <BoxComponent bg="red">Hello World #1</BoxComponent>
        <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>
        <BoxComponent bg="blue">Have a nice day #3</BoxComponent>
        <BoxComponent bg="lime">Goodbye #4</BoxComponent>
      </Parallax>
      <Parallax reverse w={800} fadeEdges>
        <BoxComponent bg="red">Hello World #1</BoxComponent>
        <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>
        <BoxComponent bg="blue">Have a nice day #3</BoxComponent>
        <BoxComponent bg="lime">Goodbye #4</BoxComponent>
      </Parallax>
    </>
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
    <>
      <Parallax w={800} mb={16} fadeEdges>
        <BoxComponent bg="red">Hello World #1</BoxComponent>
        <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>
        <BoxComponent bg="blue">Have a nice day #3</BoxComponent>
        <BoxComponent bg="lime">Goodbye #4</BoxComponent>
      </Parallax>
      <Parallax reverse w={800} fadeEdges>
        <BoxComponent bg="red">Hello World #1</BoxComponent>
        <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>
        <BoxComponent bg="blue">Have a nice day #3</BoxComponent>
        <BoxComponent bg="lime">Goodbye #4</BoxComponent>
      </Parallax>
    </>
  );
}
`;

export const multiple: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
};
