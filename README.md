# Mantine Parallax Component

<img width="2752" height="1536" alt="Mantine Parallax" src="https://github.com/user-attachments/assets/1424a67d-43f7-423b-b7f0-15b3c579ebe3" />

<div align="center">

  [![Latest Stable Version](https://img.shields.io/npm/v/%40gfazioli%2Fmantine-parallax?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-parallax)
  [![NPM Downloads](https://img.shields.io/npm/dm/%40gfazioli%2Fmantine-parallax?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-parallax)
  [![NPM Downloads](https://img.shields.io/npm/dy/%40gfazioli%2Fmantine-parallax?style=for-the-badge&label=%20&color=f90)](https://www.npmjs.com/package/@gfazioli/mantine-parallax)
  [![License](https://img.shields.io/npm/l/%40gfazioli%2Fmantine-parallax?style=for-the-badge)](https://github.com/gfazioli/mantine-parallax/blob/master/LICENSE)

---

[<kbd> <br/> ❤️ If this component has been useful to you or your team, please consider becoming a sponsor <br/> </kbd>](https://github.com/sponsors/gfazioli?o=esc)  

</div>

## Overview

This component is created on top of the [Mantine](https://mantine.dev/) library.

[Mantine Parallax](https://gfazioli.github.io/mantine-parallax/) provides a flexible way to create rich, interactive motion effects for UI elements, ranging from the classic Apple TV card tilt to custom 3D transformations. 

Through props like perspective, initialPerspective, rotation (X/Y/Z), skew (X/Y), and lightEffect/lightOverlay, you can fine-tune both the visual depth and the response to user hover. It also offers guardrails—setting disabled or using large initialPerspective values (≥ 10000) effectively turns off perspective—to maintain control over extreme configurations. 

Beyond hover, Parallax integrates with scroll-driven interactions by feeding values from useWindowScroll to initial transformation props, enabling dynamic transitions tied to page position. For layered scenes, backgroundParallax and backgroundParallaxThreshold add independent parallax to backgrounds, making it simple to create immersive cards, banners, and panels that feel responsive and dimensional while remaining straightforward to integrate and style via the provided CSS layers.

> [!note]
>
> → [Demo and Documentation](https://gfazioli.github.io/mantine-parallax/) → [Youtube Video](https://www.youtube.com/playlist?list=PL85tTROKkZrWyqCcmNCdWajpx05-cTal4) → [More Mantine Components](https://mantine-extensions.vercel.app/)

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
## Sponsor

<div align="center">

[<kbd> <br/> ❤️ If this component has been useful to you or your team, please consider becoming a sponsor <br/> </kbd>](https://github.com/sponsors/gfazioli?o=esc)

</div>

Your support helps me:

- Keep the project actively maintained with timely bug fixes and security updates	
- Add new features, improve performance, and refine the developer experience	
- Expand test coverage and documentation for smoother adoption	
- Ensure long‑term sustainability without relying on ad hoc free time	
- Prioritize community requests and roadmap items that matter most

Open source thrives when those who benefit can give back—even a small monthly contribution makes a real difference. Sponsorships help cover maintenance time, infrastructure, and the countless invisible tasks that keep a project healthy.

Your help truly matters.

💚 [Become a sponsor](https://github.com/sponsors/gfazioli?o=esc) today and help me keep this project reliable, up‑to‑date, and growing for everyone.

---
https://github.com/user-attachments/assets/a44d9e9f-e3bc-4ff4-9f47-a4fde13c048b

---  
[![Star History Chart](https://api.star-history.com/svg?repos=gfazioli/mantine-parallax&type=Timeline)](https://www.star-history.com/#gfazioli/mantine-parallax&Timeline)
