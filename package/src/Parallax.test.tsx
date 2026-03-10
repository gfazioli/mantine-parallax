import React, { act } from 'react';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@mantine-tests/core';
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

  it('renders children correctly', () => {
    render(
      <Parallax>
        <span data-testid="child">Hello</span>
      </Parallax>
    );
    expect(screen.getByTestId('child')).toHaveTextContent('Hello');
  });

  it('renders multiple children', () => {
    render(
      <Parallax>
        <span data-testid="first">First</span>
        <span data-testid="second">Second</span>
      </Parallax>
    );
    expect(screen.getByTestId('first')).toBeInTheDocument();
    expect(screen.getByTestId('second')).toBeInTheDocument();
  });

  it('applies default transform with initial values', () => {
    const { container } = render(
      <Parallax>
        <div>Test</div>
      </Parallax>
    );
    const root = container.querySelector('[class*="root"]') as HTMLElement;
    expect(root?.style.transform).toContain('perspective(1000px)');
    expect(root?.style.transform).toContain('rotateX(0deg)');
    expect(root?.style.transform).toContain('rotateY(0deg)');
    expect(root?.style.transform).toContain('rotateZ(0deg)');
    expect(root?.style.transform).toContain('skewX(0deg)');
    expect(root?.style.transform).toContain('skewY(0deg)');
  });

  it('applies custom initial rotation values', () => {
    const { container } = render(
      <Parallax initialRotationX={15} initialRotationY={30} initialRotationZ={45}>
        <div>Test</div>
      </Parallax>
    );
    const root = container.querySelector('[class*="root"]') as HTMLElement;
    expect(root?.style.transform).toContain('rotateX(15deg)');
    expect(root?.style.transform).toContain('rotateY(30deg)');
    expect(root?.style.transform).toContain('rotateZ(45deg)');
  });

  it('applies custom skew values', () => {
    const { container } = render(
      <Parallax initialSkewX={10} initialSkewY={20}>
        <div>Test</div>
      </Parallax>
    );
    const root = container.querySelector('[class*="root"]') as HTMLElement;
    expect(root?.style.transform).toContain('skewX(10deg)');
    expect(root?.style.transform).toContain('skewY(20deg)');
  });

  it('sets perspective to none when initialPerspective >= 10000', () => {
    const { container } = render(
      <Parallax initialPerspective={10000}>
        <div>Test</div>
      </Parallax>
    );
    const root = container.querySelector('[class*="root"]') as HTMLElement;
    expect(root?.style.transform).toContain('perspective(none)');
  });

  it('sets perspective value when initialPerspective < 10000', () => {
    const { container } = render(
      <Parallax initialPerspective={500}>
        <div>Test</div>
      </Parallax>
    );
    const root = container.querySelector('[class*="root"]') as HTMLElement;
    expect(root?.style.transform).toContain('perspective(500px)');
  });

  it('applies backgroundImage as url()', () => {
    const { container } = render(
      <Parallax backgroundImage="https://example.com/image.png">
        <div>Test</div>
      </Parallax>
    );
    const root = container.querySelector('[class*="root"]') as HTMLElement;
    expect(root?.style.backgroundImage).toBe('url(https://example.com/image.png)');
  });

  it('does not apply backgroundImage when not provided', () => {
    const { container } = render(
      <Parallax>
        <div>Test</div>
      </Parallax>
    );
    const root = container.querySelector('[class*="root"]') as HTMLElement;
    expect(root?.style.backgroundImage).toBe('');
  });

  it('renders light effect div when lightEffect is true', () => {
    const { container } = render(
      <Parallax lightEffect>
        <div>Test</div>
      </Parallax>
    );
    const lightDiv = container.querySelector('[class*="light"]');
    expect(lightDiv).toBeInTheDocument();
  });

  it('does not render light effect div when lightEffect is false', () => {
    const { container } = render(
      <Parallax lightEffect={false}>
        <div>Test</div>
      </Parallax>
    );
    const lightDiv = container.querySelector('[class*="light"]');
    expect(lightDiv).not.toBeInTheDocument();
  });

  it('light overlay sets zIndex to 1', () => {
    const { container } = render(
      <Parallax lightEffect lightOverlay>
        <div>Test</div>
      </Parallax>
    );
    const lightDiv = container.querySelector('[class*="light"]') as HTMLElement;
    expect(lightDiv?.style.zIndex).toBe('1');
  });

  it('light without overlay sets zIndex to -1', () => {
    const { container } = render(
      <Parallax lightEffect lightOverlay={false}>
        <div>Test</div>
      </Parallax>
    );
    const lightDiv = container.querySelector('[class*="light"]') as HTMLElement;
    expect(lightDiv?.style.zIndex).toBe('-1');
  });

  it('applies preserve-3d transformStyle on root', () => {
    const { container } = render(
      <Parallax>
        <div>Test</div>
      </Parallax>
    );
    const root = container.querySelector('[class*="root"]') as HTMLElement;
    expect(root?.style.transformStyle).toBe('preserve-3d');
  });

  it('applies default background position when backgroundParallax is false', () => {
    const { container } = render(
      <Parallax backgroundImage="https://example.com/img.png" backgroundParallax={false}>
        <div>Test</div>
      </Parallax>
    );
    const root = container.querySelector('[class*="root"]') as HTMLElement;
    expect(root?.style.backgroundPosition).toBe('center center');
  });

  it('sets display name', () => {
    expect(Parallax.displayName).toBe('Parallax');
  });

  it('has classes property', () => {
    expect(Parallax.classes).toBeDefined();
  });

  it('passes additional props to the inner Box', () => {
    const { container } = render(
      <Parallax data-testid="parallax-root" aria-label="parallax">
        <div>Test</div>
      </Parallax>
    );
    const root = container.querySelector('[data-testid="parallax-root"]');
    expect(root).toBeInTheDocument();
    expect(root).toHaveAttribute('aria-label', 'parallax');
  });

  it('registers mouse event handlers on outer wrapper', () => {
    const { container } = render(
      <Parallax>
        <div>Test</div>
      </Parallax>
    );
    const outerBox = container.firstElementChild as HTMLElement;
    // Verify that mouse events don't throw
    expect(() => {
      act(() => {
        fireEvent.mouseEnter(outerBox);
      });
      act(() => {
        fireEvent.mouseLeave(outerBox);
      });
    }).not.toThrow();
  });

  it('does not activate hover when disabled', () => {
    const { container } = render(
      <Parallax disabled>
        <div>Test</div>
      </Parallax>
    );
    const outerBox = container.firstElementChild as HTMLElement;

    act(() => {
      fireEvent.mouseEnter(outerBox);
    });
    const root = container.querySelector('[class*="root"]') as HTMLElement;
    expect(root?.style.transition).toBe('all 0.3s ease-out, background-position 0.3s ease-out');
  });

  it('renders with contentParallax without crashing', () => {
    const { container } = render(
      <Parallax contentParallax contentParallaxDistance={2}>
        <span>Child 1</span>
        <span>Child 2</span>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });

  it('applies width and height to outer wrapper', () => {
    const { container } = render(
      <Parallax w={300} h={200}>
        <div>Test</div>
      </Parallax>
    );
    const outerBox = container.firstElementChild as HTMLElement;
    expect(outerBox).toBeInTheDocument();
  });
});
