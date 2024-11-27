import type { ParallaxFactory } from '@gfazioli/mantine-parallax';
import type { StylesApiData } from '../components/styles-api.types';

export const ParallaxStylesApi: StylesApiData<ParallaxFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--parallax-animation-direction': 'Animation direction',
      '--parallax-direction': 'Horizontal or vertical direction',
      '--parallax-duration': 'Animation speed duration',
      '--parallax-gap': 'Space between elements',
      '--parallax-fade-edge-size': 'Fade edge size',
      '--parallax-fade-edge-color': 'Fade edge color',
    },
  },

  //modifiers: [{ selector: 'root' }],
};
