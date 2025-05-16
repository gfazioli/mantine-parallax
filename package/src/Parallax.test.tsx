import React from 'react';
import { render } from '@mantine-tests/core';
import { Parallax } from './Parallax';

describe('Parallax', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Parallax>
        <div>Test</div>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });
});
