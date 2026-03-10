import { Parallax } from '@gfazioli/mantine-parallax';
import { Center, Text, Title } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Demo() {
  return (
    <Center w="100%" h={400}>
      <Parallax w={340} h={280} bg="dark.7" p="xl" style={{ borderRadius: 16 }}>
        <Parallax.Layer depth={1}>
          <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
            Depth 1
          </Text>
        </Parallax.Layer>
        <Parallax.Layer depth={3}>
          <Title order={2} c="white" mt="xs">
            Parallax Layers
          </Title>
        </Parallax.Layer>
        <Parallax.Layer depth={6}>
          <Text c="yellow.4" mt="sm" fw={500}>
            Each layer moves at a different speed based on its depth.
          </Text>
        </Parallax.Layer>
        <Parallax.Layer depth={10}>
          <Text
            c="blue.4"
            mt="lg"
            size="xl"
            fw={900}
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
          >
            Hover me!
          </Text>
        </Parallax.Layer>
      </Parallax>
    </Center>
  );
}

const code = `
import { Parallax } from '@gfazioli/mantine-parallax';

function Demo() {
  return (
    <Center w="100%" h={400}>
      <Parallax w={340} h={280} bg="dark.7" p="xl" style={{ borderRadius: 16 }}>
        <Parallax.Layer depth={1}>
          <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
            Depth 1
          </Text>
        </Parallax.Layer>
        <Parallax.Layer depth={3}>
          <Title order={2} c="white" mt="xs">
            Parallax Layers
          </Title>
        </Parallax.Layer>
        <Parallax.Layer depth={6}>
          <Text c="yellow.4" mt="sm" fw={500}>
            Each layer moves at a different speed based on its depth.
          </Text>
        </Parallax.Layer>
        <Parallax.Layer depth={10}>
          <Text c="blue.4" mt="lg" size="xl" fw={900}
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
          >
            Hover me!
          </Text>
        </Parallax.Layer>
      </Parallax>
    </Center>
  );
}
`;

export const layer: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  defaultExpanded: false,
};
