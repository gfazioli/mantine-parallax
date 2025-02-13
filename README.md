# Mantine Parallax Component

<p align="center">
  <img width="100%" alt="image" src="https://github.com/user-attachments/assets/68345b72-c321-4c6f-a52c-85d8aca1cee6" />
</p>

---

<div align="center">

  [![Latest Stable Version](https://img.shields.io/npm/v/%40gfazioli%2Fmantine-parallax?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-parallax)
  [![NPM Downloads](https://img.shields.io/npm/dm/%40gfazioli%2Fmantine-parallax?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-parallax)
  [![NPM Downloads](https://img.shields.io/npm/dy/%40gfazioli%2Fmantine-parallax?style=for-the-badge&label=%20&color=f90)](https://www.npmjs.com/package/@gfazioli/mantine-parallax)
  [![License](https://img.shields.io/npm/l/%40gfazioli%2Fmantine-parallax?style=for-the-badge)](https://github.com/gfazioli/mantine-parallax/blob/master/LICENSE)

</div>

## Overview

This component is created on top of the [Mantine](https://mantine.dev/) library.

Despite the `Parallax` component allowing you to create the famous **Apple TV Card** effect, you can use this component to manipulate the perspective and rotation of an element. It is also possible to act on the skew of the element and disable the parallax effect when hovering with the mouse.

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
