import { Parallax, ParallaxProps } from '@gfazioli/mantine-parallax';
import { Card, Center, Group, Image, Text, Title } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Demo(props: ParallaxProps) {
  return (
    <Center w="100%" h={400}>
      <Parallax
        {...props}
        w={340}
        lightEffect
        lightOverlay
        lightIntensity={0.05}
        lightSize={60}
        radius="md"
      >
        <Card shadow="none" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png"
              height={160}
              alt="Card image"
            />
          </Card.Section>
          <Group justify="space-between" mt="md" mb="xs">
            <Title order={4}>Dynamic Shadow</Title>
          </Group>
          <Text size="sm" c="dimmed">
            Enable shadowEffect and tilt the card to see the shadow follow the rotation.
          </Text>
        </Card>
      </Parallax>
    </Center>
  );
}

const code = `
import { Parallax } from '@gfazioli/mantine-parallax';

function Demo() {
  return (
    <Center w="100%" h={400}>
      <Parallax
        {{props}}
        w={340}
        lightEffect
        lightOverlay
        lightIntensity={0.05}
        lightSize={60}
        radius="md"
      >
        <Card shadow="none" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png"
              height={160}
              alt="Card image"
            />
          </Card.Section>
          <Group justify="space-between" mt="md" mb="xs">
            <Title order={4}>Dynamic Shadow</Title>
          </Group>
          <Text size="sm" c="dimmed">
            Enable shadowEffect and tilt the card to see the shadow
            follow the rotation.
          </Text>
        </Card>
      </Parallax>
    </Center>
  );
}
`;

export const dynamicShadow: MantineDemo = {
  type: 'configurator',
  component: Demo,
  code,
  controls: [
    {
      prop: 'shadowEffect',
      type: 'boolean',
      initialValue: true,
      libraryValue: false,
    },
    {
      type: 'color',
      prop: 'shadowColor',
      initialValue: 'rgba(0, 0, 0, 0.4)',
      libraryValue: 'rgba(0, 0, 0, 0.4)',
    },
    {
      prop: 'shadowBlur',
      type: 'number',
      initialValue: 30,
      libraryValue: 30,
      min: 0,
      max: 100,
      step: 1,
    },
    {
      prop: 'shadowOffset',
      type: 'number',
      initialValue: 0.8,
      libraryValue: 0.8,
      min: 0,
      max: 5,
      step: 0.1,
    },
  ],
};
