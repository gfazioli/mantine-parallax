import { Parallax, ParallaxProps } from '@gfazioli/mantine-parallax';
import { Badge, Button, Card, Center, Group, Image, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Demo(props: ParallaxProps) {
  return (
    <Center w="100%" h={500}>
      <Parallax {...props} w={400} radius="md">
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
      <Parallax {{props}} w={400} radius="md">
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

export const spring: MantineDemo = {
  type: 'configurator',
  component: Demo,
  code,
  controls: [
    {
      prop: 'springEffect',
      type: 'boolean',
      initialValue: true,
      libraryValue: false,
    },
    {
      prop: 'springStiffness',
      type: 'number',
      initialValue: 360,
      libraryValue: 150,
      min: 10,
      max: 500,
      step: 10,
    },
    {
      prop: 'springDamping',
      type: 'number',
      initialValue: 3,
      libraryValue: 12,
      min: 1,
      max: 40,
      step: 1,
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
      prop: 'shadowEffect',
      type: 'boolean',
      initialValue: true,
      libraryValue: false,
    },
  ],
};
