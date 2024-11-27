import { Badge, Button, Card, Group, Image, Text, Title } from "@mantine/core";
import React from "react";
import { Parallax, ParallaxProps } from "./Parallax";

export default {
  title: "Parallax",
  args: {
    threshold: 40,
    perspective: 1000,
    lightEffect: true,
    backgroundParallax: true,
    backgroundParallaxThreshold: 0,
    parallax: true,
    parallaxDistance: 0,
  },
  argTypes: {
    threshold: { control: { type: "range", min: 2, max: 100, step: 1 } },
    perspective: { control: { type: "range", min: 1, max: 2000, step: 1 } },
    parallaxDistance: {
      control: { type: "range", min: 0, max: 10, step: 0.01 },
    },
    backgroundParallaxThreshold: {
      control: { type: "range", min: -10, max: 10, step: 0.01 },
    },
    lightEffect: { control: { type: "boolean" } },
    backgroundParallax: { control: { type: "boolean" } },
    parallax: { control: { type: "boolean" } },
  },
};

export function Usage(props: ParallaxProps) {
  return (
    <div style={{ padding: "2rem", display: "block" }}>
      <Parallax
        {...props}
        w={300}
        h={200}
        style={{
          backgroundColor: "rgba(0, 0, 0, 1)",
        }}
      >
        <Title c="blue">Parallax Card Parallax</Title>
        <Text c="white">Hover to see the effect</Text>
      </Parallax>
    </div>
  );
}

export function Complex(props: ParallaxProps) {
  return (
    <div style={{ padding: "2rem", display: "block" }}>
      <Parallax
        {...props}
        backgroundImage="url(https://picsum.photos/450/450)"
        w={300}
        h={200}
      >
        <Title c="blue">Parallax Card Parallax</Title>
        <Text c="white">Hover to see the effect</Text>
        <Button color="blue" radius="md" mt="md">
          Click me
        </Button>
      </Parallax>
    </div>
  );
}

export function CardExample(props: ParallaxProps) {
  return (
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
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button color="blue" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Card>
    </Parallax>
  );
}

export function Nested(props: ParallaxProps) {
  return (
    <div style={{ padding: "2rem", display: "block" }}>
      <Parallax
        {...props}
        w={300}
        h={200}
        style={{
          backgroundColor: "rgba(0, 0, 0, 1)",
        }}
      >
        <Title c="blue">Parallax Card Parallax</Title>
        <Text c="white">Hover to see the effect</Text>
        <Parallax
          {...props}
          w={300}
          h={200}
          style={{
            backgroundColor: "rgba(255, 0, 0, 1)",
          }}
        >
          <Title c="blue">Parallax Card Parallax</Title>
          <Text c="white">Hover to see the effect</Text>
        </Parallax>
      </Parallax>
    </div>
  );
}
