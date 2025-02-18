import { Parallax, ParallaxProps } from '@gfazioli/mantine-parallax';
import { Badge, Button, Card, Center, Group, Image, Text } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

function Demo(props: ParallaxProps) {
  const [scroll] = useWindowScroll();

  return (
    <Center w="100%" h={500}>
      <Parallax {...props} initialRotationX={(scroll.y - 4400) / 10} w={400}>
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
import { useWindowScroll } from "@mantine/hooks";

function Demo() {
  const [scroll] = useWindowScroll();

  return (
    <Center w="100%" h={500}>
      <Parallax {...props} initialRotationX={(scroll.y - 4400) / 10} w={400}>
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

export const scroll: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  defaultExpanded: false,
};
