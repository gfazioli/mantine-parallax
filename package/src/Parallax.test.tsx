import { render, tests } from '@mantine-tests/core';
import React from 'react';
import { Parallax, ParallaxProps, ParallaxStylesNames } from './Parallax';

const defaultProps: ParallaxProps = {};

describe('@mantine/core/Parallax', () => {
  tests.itSupportsSystemProps<ParallaxProps, ParallaxStylesNames>({
    component: Parallax,
    props: defaultProps,
    styleProps: true,
    children: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Parallax',
    stylesApiSelectors: ['root'],
  });

  it('supports perspective prop', () => {
    const { container } = render(<Parallax gap="500px" />);
    expect(container.querySelector('.mantine-Parallax-root')).toHaveStyle({ perspective: '500px' });
  });
});
