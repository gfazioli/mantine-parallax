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
            landscapes with tours and activities on and around the fjords
            of Norway
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

export const glare: MantineDemo = {
  type: 'configurator',
  component: Demo,
  code,
  controls: [
    {
      prop: 'glareEffect',
      type: 'boolean',
      initialValue: true,
      libraryValue: false,
    },
    {
      prop: 'glareOverlay',
      type: 'boolean',
      initialValue: true,
      libraryValue: true,
    },
    {
      type: 'color',
      prop: 'glareColor',
      initialValue: 'rgba(255, 255, 255, 0.4)',
      libraryValue: 'rgba(255, 255, 255, 0.4)',
    },
    {
      prop: 'glareMaxOpacity',
      type: 'number',
      initialValue: 0.4,
      libraryValue: 0.4,
      min: 0,
      max: 1,
      step: 0.05,
    },
    {
      prop: 'glareSize',
      type: 'number',
      initialValue: 30,
      libraryValue: 30,
      min: 5,
      max: 80,
      step: 1,
    },
    {
      prop: 'lightEffect',
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
