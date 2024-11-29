import { Parallax, ParallaxProps } from "@gfazioli/mantine-parallax";
import { Center } from "@mantine/core";
import { MantineDemo } from "@mantinex/demo";

function Demo(props: ParallaxProps) {
  return (
    <Center w="100%" h={400}>
      <Parallax
        {...props}
        w={400}
        h={300}
        backgroundImage="url(https://picsum.photos/500/400?random=2)"
      />
    </Center>
  );
}

const code = `
import { Parallax } from '@gfazioli/mantine-parallax';

function Demo() {
  return (
    <Center w="100%" h={300}>
      <Parallax
        {{props}}
        w={300}
        h={200}
        backgroundImage="url(https://picsum.photos/id/2/400/300)"
      />
    </Center>
  );
  );
}
`;

export const background: MantineDemo = {
  type: "configurator",
  component: Demo,
  code,
  controls: [
    {
      prop: "perspective",
      type: "number",
      initialValue: 1000,
      libraryValue: 1000,
      step: 1,
      min: 1,
      max: 3000,
    },
    {
      prop: "threshold",
      type: "number",
      initialValue: 40,
      libraryValue: 40,
      min: 2,
      max: 100,
      step: 0.1,
    },
    {
      prop: "lightEffect",
      type: "boolean",
      initialValue: true,
      libraryValue: false,
    },
    {
      prop: "lightOverlay",
      type: "boolean",
      initialValue: false,
      libraryValue: false,
    },
    {
      prop: "lightIntensity",
      type: "number",
      initialValue: 0.1,
      libraryValue: 0.1,
      min: 0,
      max: 1,
      step: 0.1,
    },
    {
      prop: "lightSize",
      type: "number",
      initialValue: 50,
      libraryValue: 50,
      min: 0,
      max: 100,
      step: 1,
    },
    {
      type: "color",
      prop: "lightColor",
      initialValue: "rgba(255, 255, 255, .5)",
      libraryValue: "rgba(255, 255, 255, .5)",
    },
    {
      prop: "lightGradientType",
      type: "segmented",
      data: [
        { label: "Radial", value: "radial" },
        { label: "Linear", value: "linear" },
      ],
      initialValue: "linear",
      libraryValue: "radial",
    },
    {
      prop: "lightGradientAngle",
      type: "number",
      initialValue: -120,
      libraryValue: 0,
      min: -360,
      max: 360,
      step: 1,
    },
    {
      prop: "backgroundParallax",
      type: "boolean",
      initialValue: true,
      libraryValue: false,
    },
    {
      prop: "backgroundParallaxThreshold",
      type: "number",
      initialValue: 1,
      libraryValue: 0,
      min: -10,
      max: 10,
      step: 0.01,
    },
  ],
};
