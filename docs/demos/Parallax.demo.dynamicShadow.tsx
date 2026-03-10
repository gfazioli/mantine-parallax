import { useState } from 'react';
import { Parallax } from '@gfazioli/mantine-parallax';
import { Center, Group, Image, Paper, Text, Title } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Demo() {
  const [shadow, setShadow] = useState({ x: 0, y: 0 });

  return (
    <Center w="100%" h={400}>
      <Parallax
        w={340}
        lightEffect
        lightOverlay
        lightIntensity={0.05}
        lightSize={60}
        onRotationChange={({ rotateX, rotateY, isHovering }) => {
          if (isHovering) {
            setShadow({ x: -rotateY * 0.8, y: rotateX * 0.8 });
          } else {
            setShadow({ x: 0, y: 0 });
          }
        }}
      >
        <Paper
          shadow="none"
          radius="md"
          p="lg"
          style={{
            overflow: 'hidden',
            boxShadow: `${shadow.x}px ${shadow.y}px 30px rgba(0, 0, 0, 0.4)`,
            transition: 'box-shadow 0.1s ease-out',
          }}
        >
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png"
            height={160}
            alt="Card image"
            style={{ marginLeft: -20, marginRight: -20, marginTop: -20 }}
          />
          <Group justify="space-between" mt="md" mb="xs">
            <Title order={4}>Dynamic Shadow</Title>
          </Group>
          <Text size="sm" c="dimmed">
            This card uses onRotationChange to sync an external box-shadow with the parallax
            rotation. Tilt the card and watch the shadow follow.
          </Text>
        </Paper>
      </Parallax>
    </Center>
  );
}

const code = `
import { useState } from 'react';
import { Parallax } from '@gfazioli/mantine-parallax';

function Demo() {
  const [shadow, setShadow] = useState({ x: 0, y: 0 });

  return (
    <Center w="100%" h={400}>
      <Parallax
        w={340}
        lightEffect
        lightOverlay
        lightIntensity={0.05}
        lightSize={60}
        onRotationChange={({ rotateX, rotateY, isHovering }) => {
          if (isHovering) {
            setShadow({ x: -rotateY * 0.8, y: rotateX * 0.8 });
          } else {
            setShadow({ x: 0, y: 0 });
          }
        }}
      >
        <Paper
          shadow="none"
          radius="md"
          p="lg"
          style={{
            overflow: 'hidden',
            boxShadow: \`\${shadow.x}px \${shadow.y}px 30px rgba(0, 0, 0, 0.4)\`,
            transition: 'box-shadow 0.1s ease-out',
          }}
        >
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png"
            height={160}
            alt="Card image"
            style={{ marginLeft: -20, marginRight: -20, marginTop: -20 }}
          />
          <Group justify="space-between" mt="md" mb="xs">
            <Title order={4}>Dynamic Shadow</Title>
          </Group>
          <Text size="sm" c="dimmed">
            This card uses onRotationChange to sync an external box-shadow
            with the parallax rotation. Tilt the card and watch the shadow follow.
          </Text>
        </Paper>
      </Parallax>
    </Center>
  );
}
`;

export const dynamicShadow: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  defaultExpanded: false,
};
