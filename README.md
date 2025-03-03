# Mantine Parallax Component

<div align="center">
  
  ![image](https://github.com/user-attachments/assets/68345b72-c321-4c6f-a52c-85d8aca1cee6)

</div>

---

<div align="center">

  [![Latest Stable Version](https://img.shields.io/npm/v/%40gfazioli%2Fmantine-parallax?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-parallax)
  [![NPM Downloads](https://img.shields.io/npm/dm/%40gfazioli%2Fmantine-parallax?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-parallax)
  [![NPM Downloads](https://img.shields.io/npm/dy/%40gfazioli%2Fmantine-parallax?style=for-the-badge&label=%20&color=f90)](https://www.npmjs.com/package/@gfazioli/mantine-parallax)
  [![License](https://img.shields.io/npm/l/%40gfazioli%2Fmantine-parallax?style=for-the-badge)](https://github.com/gfazioli/mantine-parallax/blob/master/LICENSE)

</div>

## Overview

This component is created on top of the [Mantine](https://mantine.dev/) library.

[![Mantine UI Library](https://img.shields.io/badge/-MANTINE_UI_LIBRARY-blue?style=for-the-badge&labelColor=black&logo=mantine
)](https://mantine.dev/)

Despite the `Parallax` component allowing you to create the famous **Apple TV Card** effect, you can use this component to manipulate the perspective and rotation of an element. It is also possible to act on the skew of the element and disable the parallax effect when hovering with the mouse.

[![Video](https://img.shields.io/badge/-Watch_the_Video-blue?style=for-the-badge&labelColor=black&logo=youtube
)](https://youtu.be/8hfYDvMbwDM)
[![Demo and Documentation](https://img.shields.io/badge/-Demo_%26_Documentation-blue?style=for-the-badge&labelColor=black&logo=typescript
)](https://gfazioli.github.io/mantine-parallax/)
[![Mantine Extensions HUB](https://img.shields.io/badge/-Mantine_Extensions_Hub-blue?style=for-the-badge&labelColor=blue
)](https://mantine-extensions.vercel.app/)

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
