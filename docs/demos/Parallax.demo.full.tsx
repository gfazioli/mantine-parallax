import { Parallax, ParallaxProps } from '@gfazioli/mantine-parallax';
import { Center, Text, Title } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Demo(props: ParallaxProps) {
  return (
    <Center w="100%" h={300} bg="dark.7">
      <Parallax
        {...props}
        w={400}
        h={200}
        p={16}
        backgroundImage="https://picsum.photos/id/702/500/400"
        style={{
          borderRadius: '16px',
          border: '1px solid #666',
        }}
      >
        <Title c="gray.2">Parallax</Title>
        <Text c="gray.2" fw="bold">
          Amazing contentParallax effect component. Hover to see the effect.
        </Text>
      </Parallax>
    </Center>
  );
}

const code = `
import { Parallax } from '@gfazioli/mantine-parallax';

function Demo() {
  return (
    <Center w="100%" h={300} bg="dark.7">
      <Parallax
        {{props}}
        w={400}
        h={200}
        p={16}
        backgroundImage="https://picsum.photos/id/352/500/400"
        style={{
          borderRadius: "16px",
          border: "1px solid #666",
        }}
      >
        <Title c="gray.2">Parallax</Title>
        <Text c="gray.2" fw="bold">
          Amazing contentParallax effect component. Hover to see the effect.
        </Text>
      </Parallax>
    </Center>
  );
}
`;

export const full: MantineDemo = {
  type: 'configurator',
  component: Demo,
  code,
  controls: [
    {
      prop: 'perspective',
      type: 'number',
      initialValue: 1000,
      libraryValue: 1000,
      step: 1,
      min: 1,
      max: 3000,
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
      initialValue: false,
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
    {
      prop: 'backgroundParallax',
      type: 'boolean',
      initialValue: true,
      libraryValue: false,
    },
    {
      prop: 'backgroundParallaxThreshold',
      type: 'number',
      initialValue: 1,
      libraryValue: 0,
      min: -10,
      max: 10,
      step: 0.01,
    },
    {
      prop: 'contentParallax',
      type: 'boolean',
      initialValue: true,
      libraryValue: false,
    },

    {
      prop: 'contentParallaxDistance',
      type: 'number',
      initialValue: 1,
      libraryValue: 0,
      min: 0,
      max: 10,
      step: 0.01,
    },
  ],
};
