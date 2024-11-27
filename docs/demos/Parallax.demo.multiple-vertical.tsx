import { Parallax } from '@gfazioli/mantine-parallax';
import { Box, Flex } from '@mantine/core';
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
    <Flex w={500}>
      <Parallax h={300} fadeEdges vertical>
        <BoxComponent bg="red">Hello World #1</BoxComponent>
        <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>
        <BoxComponent bg="blue">Have a nice day #3</BoxComponent>
        <BoxComponent bg="lime">Goodbye #4</BoxComponent>
      </Parallax>
      <Parallax h={300} reverse fadeEdges vertical>
        <BoxComponent bg="red">Hello World #1</BoxComponent>
        <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>
        <BoxComponent bg="blue">Have a nice day #3</BoxComponent>
        <BoxComponent bg="lime">Goodbye #4</BoxComponent>
      </Parallax>
    </Flex>
  );
}

const code = `
import { Parallax } from '@gfazioli/mantine-parallax';

  function BoxComponent({ children, ...props }: { children: ReactNode; [key: string]: any }) {
    return (
      <Box {...props} p="md" w="200px" c="white" style={{ borderRadius: '8px' }}>
        {children}
      </Box>
    );
  }

  return (
    <Flex w={500}>
      <Parallax h={300} fadeEdges vertical>
        <BoxComponent bg="red">Hello World #1</BoxComponent>
        <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>
        <BoxComponent bg="blue">Have a nice day #3</BoxComponent>
        <BoxComponent bg="lime">Goodbye #4</BoxComponent>
      </Parallax>
      <Parallax h={300} reverse fadeEdges vertical>
        <BoxComponent bg="red">Hello World #1</BoxComponent>
        <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>
        <BoxComponent bg="blue">Have a nice day #3</BoxComponent>
        <BoxComponent bg="lime">Goodbye #4</BoxComponent>
      </Parallax>
    </Flex>
  );
}
`;

export const multipleVertical: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
};
