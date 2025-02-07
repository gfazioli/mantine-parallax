import { Parallax, ParallaxProps } from '@gfazioli/mantine-parallax';
import { Badge, Button, Card, Center, Group, Image, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Demo(props: ParallaxProps) {
  return (
    <Center w="100%" h={500}>
      <Parallax {...props} w={400}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Norway Fjord Adventures</Text>
            <Badge color="pink">On Sale</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
            activities on and around the fjords of Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      </Parallax>
    </Center>
  );
}

const code = `
import { Parallax } from '@gfazioli/mantine-parallax';

function Demo() {
  return (
    <Center w="100%" h={500}>
      <Parallax {{props}} w={400}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Norway Fjord Adventures</Text>
            <Badge color="pink">On Sale</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      </Parallax>
    </Center>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Demo,
  code,
  controls: [
    {
      prop: 'disabled',
      type: 'boolean',
      initialValue: false,
      libraryValue: false,
    },
    {
      prop: 'perspective',
      type: 'number',
      initialValue: 1000,
      libraryValue: 1000,
      step: 1,
      min: 1,
      max: 10000,
    },
    {
      prop: 'initialPerspective',
      type: 'number',
      initialValue: 1000,
      libraryValue: 1000,
      step: 1,
      min: 1,
      max: 10000,
    },
    {
      prop: 'initialRotationX',
      type: 'number',
      initialValue: 0,
      libraryValue: 0,
      min: -360,
      max: 360,
      step: 0.1,
    },
    {
      prop: 'initialRotationY',
      type: 'number',
      initialValue: 0,
      libraryValue: 0,
      min: -360,
      max: 360,
      step: 0.1,
    },
    {
      prop: 'initialRotationZ',
      type: 'number',
      initialValue: 0,
      libraryValue: 0,
      min: -360,
      max: 360,
      step: 0.1,
    },
    {
      prop: 'initialSkewX',
      type: 'number',
      initialValue: 0,
      libraryValue: 0,
      min: -360,
      max: 360,
      step: 0.1,
    },
    {
      prop: 'initialSkewY',
      type: 'number',
      initialValue: 0,
      libraryValue: 0,
      min: -360,
      max: 360,
      step: 0.1,
    },
    {
      prop: 'threshold',
      type: 'number',
      initialValue: 40,
      libraryValue: 40,
      min: 2,
      max: 100,
      step: 0.1,
    },
    {
      prop: 'lightEffect',
      type: 'boolean',
      initialValue: true,
      libraryValue: false,
    },
    {
      prop: 'lightOverlay',
      type: 'boolean',
      initialValue: true,
      libraryValue: false,
    },
    {
      prop: 'lightIntensity',
      type: 'number',
      initialValue: 0.1,
      libraryValue: 0.1,
      min: 0,
      max: 1,
      step: 0.1,
    },
    {
      prop: 'lightSize',
      type: 'number',
      initialValue: 50,
      libraryValue: 50,
      min: 0,
      max: 100,
      step: 1,
    },
    {
      type: 'color',
      prop: 'lightColor',
      initialValue: 'rgba(255, 255, 255, .5)',
      libraryValue: 'rgba(255, 255, 255, .5)',
    },
    {
      prop: 'lightGradientType',
      type: 'segmented',
      data: [
        { label: 'Radial', value: 'radial' },
        { label: 'Linear', value: 'linear' },
      ],
      initialValue: 'radial',
      libraryValue: 'radial',
    },
    {
      prop: 'lightGradientAngle',
      type: 'number',
      initialValue: 0,
      libraryValue: 0,
      min: -360,
      max: 360,
      step: 1,
    },
  ],
};
