import {
  Badge,
  Button,
  Card,
  Center,
  Group,
  Image,
  Text,
  Title,
} from '@mantine/core';
import React from 'react';
import { Parallax, ParallaxProps } from './Parallax';

export default {
  title: 'Parallax',
  args: {
    threshold: 40,
    perspective: 1000,
    lightEffect: false,
    lightOverlay: false,
    lightIntensity: 0.2,
    lightSize: 50,
    lightColor: 'rgba(255, 255, 255, .1)',
    lightGradientType: 'radial',
    lightGradientAngle: 0,
    backgroundParallax: false,
    backgroundParallaxThreshold: 0,
    parallax: false,
    parallaxDistance: 0,
  },
  argTypes: {
    threshold: { control: { type: 'range', min: 2, max: 100, step: 1 } },
    perspective: { control: { type: 'range', min: 1, max: 2000, step: 1 } },
    parallaxDistance: {
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
    lightEffect: { control: { type: 'boolean' } },
    lightOverlay: { control: { type: 'boolean' } },
    backgroundParallax: { control: { type: 'boolean' } },
    parallax: { control: { type: 'boolean' } },
    lightColor: { control: { type: 'color' } },
    lightGradientType: {
      control: { type: 'inline-radio' },
      options: ['radial', 'linear'],
    },
  },
};

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
      <Parallax
        {...props}
        w={300}
        h={200}
        style={{
          borderRadius: '32px',
          backgroundColor: 'rgba(0, 0, 0, 1)',
        }}
      >
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
