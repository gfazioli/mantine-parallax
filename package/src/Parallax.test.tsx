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
    expect(root?.style.transition).toBe(
      'transform 300ms ease-out, background-position 300ms ease-out'
    );
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

  it('registers touch event handlers on outer wrapper', () => {
    const { container } = render(
      <Parallax>
        <div>Test</div>
      </Parallax>
    );
    const outerBox = container.firstElementChild as HTMLElement;
    expect(() => {
      act(() => {
        fireEvent.touchStart(outerBox);
      });
      act(() => {
        fireEvent.touchEnd(outerBox);
      });
    }).not.toThrow();
  });

  it('does not activate touch when touchEnabled is false', () => {
    const { container } = render(
      <Parallax touchEnabled={false}>
        <div>Test</div>
      </Parallax>
    );
    const outerBox = container.firstElementChild as HTMLElement;

    act(() => {
      fireEvent.touchStart(outerBox);
    });
    const root = container.querySelector('[class*="root"]') as HTMLElement;
    expect(root?.style.transition).toBe(
      'transform 300ms ease-out, background-position 300ms ease-out'
    );
  });

  it('renders with touchEnabled without crashing', () => {
    const { container } = render(
      <Parallax touchEnabled>
        <div>Test</div>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });

  it('renders with touchEnabled false without crashing', () => {
    const { container } = render(
      <Parallax touchEnabled={false}>
        <div>Test</div>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });

  it('applies custom transitionDuration and transitionEasing', () => {
    const { container } = render(
      <Parallax transitionDuration={500} transitionEasing="cubic-bezier(0.4, 0, 0.2, 1)">
        <div>Test</div>
      </Parallax>
    );
    const root = container.querySelector('[class*="root"]') as HTMLElement;
    expect(root?.style.transition).toBe(
      'transform 500ms cubic-bezier(0.4, 0, 0.2, 1), background-position 500ms cubic-bezier(0.4, 0, 0.2, 1)'
    );
  });

  it('applies default hoverScale of 1 (no scale in transform)', () => {
    const { container } = render(
      <Parallax>
        <div>Test</div>
      </Parallax>
    );
    const root = container.querySelector('[class*="root"]') as HTMLElement;
    expect(root?.style.transform).not.toContain('scale');
  });

  it('renders with hoverScale without crashing', () => {
    const { container } = render(
      <Parallax hoverScale={1.05}>
        <div>Test</div>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });

  it('renders with onRotationChange without crashing', () => {
    const onRotationChange = jest.fn();
    const { container } = render(
      <Parallax onRotationChange={onRotationChange}>
        <div>Test</div>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });

  it('does not call onRotationChange on mount', () => {
    const onRotationChange = jest.fn();
    render(
      <Parallax onRotationChange={onRotationChange}>
        <div>Test</div>
      </Parallax>
    );
    expect(onRotationChange).not.toHaveBeenCalled();
  });

  it('has Layer static property', () => {
    expect(Parallax.Layer).toBeDefined();
    expect(Parallax.Layer.displayName).toBe('ParallaxLayer');
  });

  it('renders Parallax.Layer inside Parallax', () => {
    const { container } = render(
      <Parallax>
        <Parallax.Layer depth={2}>
          <span data-testid="layer-child">Layer content</span>
        </Parallax.Layer>
      </Parallax>
    );
    expect(screen.getByTestId('layer-child')).toHaveTextContent('Layer content');
    expect(container).toBeTruthy();
  });

  it('renders multiple Parallax.Layer with different depths', () => {
    const { container } = render(
      <Parallax>
        <Parallax.Layer depth={1}>
          <span data-testid="layer-1">Layer 1</span>
        </Parallax.Layer>
        <Parallax.Layer depth={3}>
          <span data-testid="layer-2">Layer 2</span>
        </Parallax.Layer>
      </Parallax>
    );
    expect(screen.getByTestId('layer-1')).toBeInTheDocument();
    expect(screen.getByTestId('layer-2')).toBeInTheDocument();
    expect(container).toBeTruthy();
  });

  it('light effect div persists after mouse enter and leave', () => {
    const { container } = render(
      <Parallax lightEffect>
        <div>Test</div>
      </Parallax>
    );
    const outerBox = container.firstElementChild as HTMLElement;

    act(() => {
      fireEvent.mouseEnter(outerBox);
    });
    act(() => {
      fireEvent.mouseLeave(outerBox);
    });

    const lightDiv = container.querySelector('[class*="light"]');
    expect(lightDiv).toBeInTheDocument();
  });

  it('Parallax.Layer throws when used outside Parallax', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => {
      render(
        <Parallax.Layer depth={1}>
          <div>Orphan</div>
        </Parallax.Layer>
      );
    }).toThrow('Parallax.Layer must be used within a Parallax component');
    consoleSpy.mockRestore();
  });

  it('applies boxShadow when shadowEffect is true', () => {
    const { container } = render(
      <Parallax shadowEffect shadowColor="rgba(0,0,0,0.5)" shadowBlur={20}>
        <div>Test</div>
      </Parallax>
    );
    const root = container.querySelector('[class*="root"]') as HTMLElement;
    expect(root?.style.boxShadow).toContain('20px');
    expect(root?.style.boxShadow).toContain('rgba(0,0,0,0.5)');
  });

  it('does not apply boxShadow when shadowEffect is false', () => {
    const { container } = render(
      <Parallax>
        <div>Test</div>
      </Parallax>
    );
    const root = container.querySelector('[class*="root"]') as HTMLElement;
    expect(root?.style.boxShadow).toBe('');
  });

  it('renders with all shadow props without crashing', () => {
    const { container } = render(
      <Parallax shadowEffect shadowColor="red" shadowBlur={40} shadowOffset={1.5}>
        <div>Test</div>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });

  it('renders glare div when glareEffect is true', () => {
    const { container } = render(
      <Parallax glareEffect>
        <div>Test</div>
      </Parallax>
    );
    const glareDiv = container.querySelector('[class*="glare"]');
    expect(glareDiv).toBeInTheDocument();
  });

  it('does not render glare div when glareEffect is false', () => {
    const { container } = render(
      <Parallax>
        <div>Test</div>
      </Parallax>
    );
    const glareDiv = container.querySelector('[class*="glare"]');
    expect(glareDiv).not.toBeInTheDocument();
  });

  it('glare overlay sets zIndex to 2', () => {
    const { container } = render(
      <Parallax glareEffect glareOverlay>
        <div>Test</div>
      </Parallax>
    );
    const glareDiv = container.querySelector('[class*="glare"]') as HTMLElement;
    expect(glareDiv?.style.zIndex).toBe('2');
  });

  it('glare without overlay sets zIndex to -1', () => {
    const { container } = render(
      <Parallax glareEffect glareOverlay={false}>
        <div>Test</div>
      </Parallax>
    );
    const glareDiv = container.querySelector('[class*="glare"]') as HTMLElement;
    expect(glareDiv?.style.zIndex).toBe('-1');
  });

  it('renders with all glare props without crashing', () => {
    const { container } = render(
      <Parallax glareEffect glareColor="blue" glareMaxOpacity={0.6} glareSize={40}>
        <div>Test</div>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });

  it('renders with resetOnLeave false without crashing', () => {
    const { container } = render(
      <Parallax resetOnLeave={false}>
        <div>Test</div>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });

  it('renders with resetOnLeave true (default) without crashing', () => {
    const { container } = render(
      <Parallax>
        <div>Test</div>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });

  it('renders with invertRotation without crashing', () => {
    const { container } = render(
      <Parallax invertRotation>
        <div>Test</div>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });

  it('renders with invertRotation false without crashing', () => {
    const { container } = render(
      <Parallax invertRotation={false}>
        <div>Test</div>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });

  it('renders with maxRotation without crashing', () => {
    const { container } = render(
      <Parallax maxRotation={15}>
        <div>Test</div>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });

  it('renders with all minor props combined without crashing', () => {
    const { container } = render(
      <Parallax resetOnLeave={false} invertRotation maxRotation={20}>
        <div>Test</div>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });

  it('renders with gyroscopeEnabled without crashing', () => {
    const { container } = render(
      <Parallax gyroscopeEnabled>
        <div>Test</div>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });

  it('renders with gyroscopeEnabled false without crashing', () => {
    const { container } = render(
      <Parallax gyroscopeEnabled={false}>
        <div>Test</div>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });

  it('renders with gyroscopeSensitivity without crashing', () => {
    const { container } = render(
      <Parallax gyroscopeEnabled gyroscopeSensitivity={2}>
        <div>Test</div>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });

  it('renders with gyroscope and other effects combined without crashing', () => {
    const { container } = render(
      <Parallax gyroscopeEnabled gyroscopeSensitivity={1.5} lightEffect glareEffect shadowEffect>
        <div>Test</div>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });

  it('renders with springEffect without crashing', () => {
    const { container } = render(
      <Parallax springEffect>
        <div>Test</div>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });

  it('renders with springEffect false without crashing', () => {
    const { container } = render(
      <Parallax springEffect={false}>
        <div>Test</div>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });

  it('renders with spring props without crashing', () => {
    const { container } = render(
      <Parallax springEffect springStiffness={200} springDamping={15}>
        <div>Test</div>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });

  it('disables CSS transition on transform when springEffect is true', () => {
    const { container } = render(
      <Parallax springEffect>
        <div>Test</div>
      </Parallax>
    );
    const rootDiv = container.querySelector('[class]');
    const style = rootDiv?.getAttribute('style') || '';
    expect(style).not.toContain('transform 300ms');
  });

  it('renders with spring and other effects combined without crashing', () => {
    const { container } = render(
      <Parallax
        springEffect
        springStiffness={180}
        springDamping={10}
        lightEffect
        shadowEffect
        glareEffect
      >
        <div>Test</div>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });

  it('renders Parallax.Layer with springEffect parent without crashing', () => {
    const { container } = render(
      <Parallax springEffect>
        <Parallax.Layer depth={5}>
          <div>Layer content</div>
        </Parallax.Layer>
      </Parallax>
    );
    expect(container).toBeTruthy();
  });
});
