import { useState } from 'react';
import { Parallax } from '@gfazioli/mantine-parallax';
import { Badge, Card, Center, Code, Group, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Demo() {
  const [info, setInfo] = useState({ rotateX: 0, rotateY: 0, isHovering: false });

  return (
    <Stack align="center" gap="md">
      <Center w="100%" h={300}>
        <Parallax w={300} lightEffect lightOverlay onRotationChange={setInfo}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text fw={500}>Hover this card</Text>
            <Text size="sm" c="dimmed">
              The rotation values are displayed below in real time.
            </Text>
          </Card>
        </Parallax>
      </Center>
      <Group>
        <Badge color={info.isHovering ? 'green' : 'gray'} variant="filled">
          {info.isHovering ? 'Hovering' : 'Idle'}
        </Badge>
        <Code>
          X: {info.rotateX.toFixed(1)}° Y: {info.rotateY.toFixed(1)}°
        </Code>
      </Group>
    </Stack>
  );
}

const code = `
import { useState } from 'react';
import { Parallax } from '@gfazioli/mantine-parallax';

function Demo() {
  const [info, setInfo] = useState({ rotateX: 0, rotateY: 0, isHovering: false });

  return (
    <Stack align="center" gap="md">
      <Center w="100%" h={300}>
        <Parallax w={300} lightEffect lightOverlay onRotationChange={setInfo}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text fw={500}>Hover this card</Text>
            <Text size="sm" c="dimmed">
              The rotation values are displayed below in real time.
            </Text>
          </Card>
        </Parallax>
      </Center>
      <Group>
        <Badge color={info.isHovering ? 'green' : 'gray'} variant="filled">
          {info.isHovering ? 'Hovering' : 'Idle'}
        </Badge>
        <Code>
          X: {info.rotateX.toFixed(1)}° Y: {info.rotateY.toFixed(1)}°
        </Code>
      </Group>
    </Stack>
  );
}
`;

export const onRotationChange: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  defaultExpanded: false,
};
