import { Parallax } from '@gfazioli/mantine-parallax';
import { Center, Text, Title } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Demo() {
  return (
    <Center w="100%" h={300}>
      <Parallax w={300} h={200}>
        <Title>Parallax</Title>
        <Text>Amazing contentParallax effect component. Hover to see the effect.</Text>
      </Parallax>
    </Center>
  );
}

const code = `
import { Parallax } from '@gfazioli/mantine-parallax';

function Demo() {
  return (
    <Center w="100%" h={300}>
      <Parallax w={300} h={200}>
        <Title>Parallax</Title>
        <Text>
          Amazing contentParallax effect component. Hover to see the effect.
        </Text>
      </Parallax>
    </Center>
  );
}
`;

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
