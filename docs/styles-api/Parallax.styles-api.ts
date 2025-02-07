import type { ParallaxFactory } from '@gfazioli/mantine-parallax';
import type { StylesApiData } from '../components/styles-api.types';

export const ParallaxStylesApi: StylesApiData<ParallaxFactory> = {
  selectors: {
    root: 'Root element',
    content: 'Content element',
    light: 'Light effect',
  },

  vars: {},

  //modifiers: [{ selector: 'root' }],
};
