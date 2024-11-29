# Mantine Parallax Component

<p align="center">
  <img width="866" alt="image" src="https://github.com/gfazioli/mantine-parallax/assets/432181/d9d37b48-ab49-44c7-9315-4ad9a48e70f8">
</p>

---

<p align="center">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@gfazioli/mantine-parallax">
    <img alt="NPM version" src="https://img.shields.io/npm/v/%40gfazioli%2Fmantine-parallax?style=for-the-badge">
  </a>
  
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@gfazioli/mantine-parallax">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/%40gfazioli%2Fmantine-parallax?style=for-the-badge">
  </a>

  <img alt="NPM License" src="https://img.shields.io/npm/l/%40gfazioli%2Fmantine-parallax?style=for-the-badge">

</p>

## Overview

This component is created on top of the [Mantine](https://mantine.dev/) library.

It allows to create a parallax effect with any content. In particular, you can use this component to create the typical Apple TV Card effect.

You can find more components on the [Mantine Extensions Hub](https://mantine-extensions.vercel.app/) library.

## Installation

```sh
npm install @gfazioli/mantine-parallax
```
or 

```sh
yarn add @gfazioli/mantine-parallax
```

After installation import package styles at the root of your application:

```tsx
import '@gfazioli/mantine-parallax/styles.css';
```

## Usage

```tsx
import { Parallax } from '@gfazioli/mantine-parallax';

function Demo() {

  return (
    <Parallax w={560} h={300}>
        <Title>Parallax</Title>
        <Text>
          Amazing contentParallax effect component. Hover to see the effect.
        </Text>
    </Parallax>
  );
}
```
