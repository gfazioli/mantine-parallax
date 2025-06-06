import React from 'react';
import {
  Badge,
  Box,
  Button,
  Card,
  Center,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useIntersection } from '@mantine/hooks';
import { Parallax, ParallaxProps } from './Parallax';

export default {
  title: 'Parallax',
  args: {
    disabled: false,
    threshold: 40,
    perspective: 1000,
    initialPerspective: 1000,
    initialRotationX: 0,
    initialRotationY: 0,
    initialRotationZ: 0,
    initialSkewX: 0,
    initialSkewY: 0,
    lightEffect: false,
    lightOverlay: false,
    lightIntensity: 0.2,
    lightSize: 50,
    lightColor: 'rgba(255, 255, 255, .1)',
    lightGradientType: 'radial',
    lightGradientAngle: 0,
    backgroundParallax: false,
    backgroundParallaxThreshold: 0,
    contentParallax: false,
    contentParallaxDistance: 0,
  },
  argTypes: {
    threshold: { control: { type: 'range', min: 2, max: 100, step: 1 } },
    perspective: { control: { type: 'range', min: 0, max: 15000, step: 1 } },
    contentParallaxDistance: {
      control: { type: 'range', min: 0, max: 10, step: 0.01 },
    },
    lightIntensity: {
      control: { type: 'range', min: 0, max: 1, step: 0.01 },
    },
    lightSize: {
      control: { type: 'range', min: 0, max: 100, step: 0.1 },
    },
    backgroundParallaxThreshold: {
      control: { type: 'range', min: -10, max: 10, step: 0.01 },
    },
    lightGradientAngle: {
      control: { type: 'range', min: -360, max: 360, step: 0.1 },
    },
    initialRotationX: {
      control: { type: 'range', min: -360, max: 360, step: 0.1 },
    },
    initialRotationY: {
      control: { type: 'range', min: -360, max: 360, step: 0.1 },
    },
    initialRotationZ: {
      control: { type: 'range', min: -360, max: 360, step: 0.1 },
    },
    initialPerspective: {
      control: { type: 'range', min: 0, max: 15000, step: 1 },
    },
    initialSkewX: {
      control: { type: 'range', min: -360, max: 360, step: 0.1 },
    },
    initialSkewY: {
      control: { type: 'range', min: -360, max: 360, step: 0.1 },
    },
    lightEffect: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    lightOverlay: { control: { type: 'boolean' } },
    backgroundParallax: { control: { type: 'boolean' } },
    contentParallax: { control: { type: 'boolean' } },
    lightColor: { control: { type: 'color' } },
    lightGradientType: {
      control: { type: 'inline-radio' },
      options: ['radial', 'linear'],
    },
  },
};

export function Simple(props: ParallaxProps) {
  return (
    <Center w="100%" h={300}>
      <Parallax
        {...props}
        p={82}
        bg="tomato"
        styles={{
          root: {
            border: '2px solid green',
          },
          content: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            boxShadow: '0 0 12px rgba(0, 0, 0, 1)',
          },
        }}
      >
        <Box
          w={300}
          h={200}
          style={{
            position: 'absolute',
            boxShadow: '0 0 12px rgba(0, 0, 0, 1)',
            backgroundColor: 'rgba(0, 0, 0, 0.5',
            borderRadius: '16px',
          }}
        />

        <Paper withBorder w={300} h={200} bg="gray" radius={16} p={16}>
          <Title>Parallax</Title>
          <Text>Amazing parallax effect component. Hover to see the effect.</Text>
        </Paper>
      </Parallax>
    </Center>
  );
}

export function Usage(props: ParallaxProps) {
  return (
    <Center w="100%" h={400}>
      <Parallax {...props} w={300} h={200}>
        <Title c="blue">Parallax Card Parallax</Title>
        <Text c="white">Hover to see the effect</Text>
      </Parallax>
    </Center>
  );
}

export function Background(props: ParallaxProps) {
  return (
    <Center w="100%" h={400}>
      <Parallax {...props} w={300} h={200} backgroundImage="https://picsum.photos/500/400?random=2">
        <Title c="blue">Parallax Card Parallax</Title>
        <Text c="white">Hover to see the effect</Text>
      </Parallax>
    </Center>
  );
}

export function Shadow(props: ParallaxProps) {
  return (
    <Center w="100%" h={400}>
      <Parallax
        {...props}
        w={300}
        h={200}
        style={{
          backgroundColor: 'rgba(255,255,255, 1)',
        }}
      >
        <Title data-shadow c="blue">
          Parallax Card Parallax
        </Title>
        <Text c="tomato">Hover to see the effect</Text>
      </Parallax>
    </Center>
  );
}

export function Complex(props: ParallaxProps) {
  return (
    <Center w="100%" h={400}>
      <Parallax
        {...props}
        backgroundImage="url(https://picsum.photos/id/2/400/300)"
        w={300}
        h={200}
      >
        <Title c="blue">Parallax Card Parallax</Title>
        <Text c="white">Hover to see the effect</Text>
        <Button color="blue" radius="md" mt="md">
          Click me
        </Button>
      </Parallax>
    </Center>
  );
}

export function CardExample(props: ParallaxProps) {
  return (
    <Center w="100%" h={500}>
      <Parallax w={300} {...props}>
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

export function Nested(props: ParallaxProps) {
  return (
    <div style={{ padding: '2rem', display: 'block' }}>
      <Parallax
        {...props}
        w={300}
        h={200}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 1)',
        }}
      >
        <Title c="blue">Parallax Card Parallax</Title>
        <Text c="white">Hover to see the effect</Text>
        <Parallax
          {...props}
          w={300}
          h={200}
          style={{
            backgroundColor: 'rgba(255, 0, 0, 1)',
          }}
        >
          <Title c="blue">Parallax Card Parallax</Title>
          <Text c="white">Hover to see the effect</Text>
        </Parallax>
      </Parallax>
    </div>
  );
}

function PresentationCard() {
  const random = Math.floor(Math.random() * 8) + 1;

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
          src={`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-${random}.png`}
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

export function Presentation() {
  const { ref, entry } = useIntersection({
    // root: containerRef.current,
    // threshold: 1,
  });

  const presentationProps = {
    initialRotationX: 60,
    initialSkewX: -30,
    initialSkewY: 30,
    initialPerspective: 10000,
    disabled: true,
  };

  return (
    <Box h={3000}>
      <p>{entry ? 'In view' : 'Out of view'}</p>
      <Stack ref={ref} w="100%" h={500} align="center">
        <Parallax
          w={400}
          {...presentationProps}
          style={{ position: 'absolute', top: entry ? 160 : 0 }}
        >
          <PresentationCard />
        </Parallax>
        <Parallax
          w={400}
          {...presentationProps}
          style={{ position: 'absolute', top: entry ? 80 : 0 }}
        >
          <PresentationCard />
        </Parallax>
        <Parallax w={400} {...presentationProps} style={{ position: 'absolute', top: 0 }}>
          <PresentationCard />
        </Parallax>
      </Stack>
    </Box>
  );
}
