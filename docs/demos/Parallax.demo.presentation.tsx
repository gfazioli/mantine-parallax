import { Parallax } from '@gfazioli/mantine-parallax';
import { Badge, Button, Card, Group, Image, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function PresentationCard({ imgIndex = 1 }: { imgIndex?: number }) {
  const img = `https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-${imgIndex}.png`;

  return (
    <Card
      shadow="xl"
      padding="lg"
      radius="md"
      withBorder
      style={{
        boxShadow: '12px 6px 6px 6px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Card.Section>
        <Image src={img} height={160} alt="Norway" />
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
  );
}

function Demo() {
  const presentationProps = {
    initialRotationX: 60,
    initialSkewX: -30,
    initialSkewY: 30,
    initialPerspective: 10000,
    disabled: true,
  };

  return (
    <Stack w="100%" h={500} align="center">
      <Parallax w={400} {...presentationProps} style={{ position: 'absolute', top: 160 }}>
        <PresentationCard imgIndex={1} />
      </Parallax>
      <Parallax w={400} {...presentationProps} style={{ position: 'absolute', top: 80 }}>
        <PresentationCard imgIndex={2} />
      </Parallax>
      <Parallax w={400} {...presentationProps} style={{ position: 'absolute', top: 0 }}>
        <PresentationCard imgIndex={3} />
      </Parallax>
    </Stack>
  );
}

const code = `
import { Stack } from '@mantine/core';
import { Parallax } from '@gfazioli/mantine-parallax';
import { PresentationCard } from './PresentationCard';

function Demo() {
  const presentationProps = {
    initialRotationX: 60,
    initialSkewX: -30,
    initialSkewY: 30,
    initialPerspective: 10000,
    disabled: true,
  };

  return (
    <Stack w="100%" h={500} align="center">
      <Parallax w={400} {...presentationProps} style={{ position: 'absolute', top: 160 }}>
        <PresentationCard imgIndex={1} />
      </Parallax>
      <Parallax w={400} {...presentationProps} style={{ position: 'absolute', top: 80 }}>
        <PresentationCard imgIndex={2} />
      </Parallax>
      <Parallax w={400} {...presentationProps} style={{ position: 'absolute', top: 0 }}>
        <PresentationCard imgIndex={3} />
      </Parallax>
    </Stack>
  );
}
`;

const cardCode = `
export function PresentationCard({ imgIndex = 1 }: { imgIndex?: number }) {

  const img = \`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-\${imgIndex}.png\`;


  return (
    <Card
      shadow="xl"
      padding="lg"
      radius="md"
      withBorder
      style={{
        boxShadow: '12px 6px 6px 6px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Card.Section>
        <Image
          src={img}
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
  );
}
`;

export const presentation: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    {
      fileName: 'Demo.tsx',
      code,
      language: 'tsx',
    },
    {
      fileName: 'PresentationCard.tsx',
      code: cardCode,
      language: 'tsx',
    },
  ],
  defaultExpanded: false,
};
