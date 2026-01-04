# angular-tabler-icons

[![tabler-icons-version](https://img.shields.io/badge/Tabler%20Icons-v3.36.1-%23206bc4?style=flat-square)](https://tabler.io/icons)
[![npm version](https://img.shields.io/npm/v/@luoxiao123/angular-tabler-icons.svg?style=flat-square)](https://www.npmjs.com/package/@luoxiao123/angular-tabler-icons)
[![license](https://img.shields.io/npm/l/angular-tabler-icons.svg?style=flat-square)]()
[![downloads](https://img.shields.io/npm/dm/angular-tabler-icons?style=flat-square)]()
[![GitHub stars](https://img.shields.io/github/stars/xylplm/angular-tabler-icons.svg?style=flat-square)](https://github.com/xylplm/angular-tabler-icons)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[English](https://github.com/xylplm/angular-tabler-icons) | [中文](https://github.com/xylplm/angular-tabler-icons/blob/master/README.zh.md)

## 📚 Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Usage Guide](#usage-guide)
  - [Standalone Components](#standalone-components)
  - [NgModule (Legacy)](#ngmodule-setup-legacy)
- [Styling Icons](#styling-icons)
- [Configuration](#configuration)
- [Angular Version Compatibility](#angular-version-compatibility)
- [Development & Contributing](#development--contributing)
- [Contributors](#contributors-)

## Description

This is a fork of [angular-tabler-icons](https://github.com/pierreavn/angular-tabler-icons). The original project is no longer actively maintained, so this version continues development and maintenance.

This package allows you to use the [Tabler Icons](https://tabler.io/icons) in your Angular applications. Tabler Icons is a set of free MIT-licensed, high-quality SVG icons for use in web projects. Each icon is designed on a 24x24 grid with a 2px stroke.

**Quick Links:**
- 📦 [NPM Package](https://www.npmjs.com/package/@luoxiao123/angular-tabler-icons)
- 🎨 [Live Demo](https://xylplm.github.io/angular-tabler-icons/)
- 📖 [Icon Library](https://tabler.io/icons)

**Features:**
- 🎨 5000+ high-quality SVG icons
- 📦 Tree-shakeable - import only what you use
- 🎯 Works with Angular 12+
- ⚡ Lightweight and performant
- 🎭 Easy to customize with CSS

## Installation

Install the package via npm:

```sh
npm install @luoxiao123/angular-tabler-icons
```

## Quick Start

### For Standalone Components (Recommended)

```ts
import { Component } from '@angular/core';
import { TablerIconComponent, provideTablerIcons } from '@luoxiao123/angular-tabler-icons';
import { IconCamera, IconHeart } from '@luoxiao123/angular-tabler-icons/icons';

@Component({
  selector: 'app-root',
  imports: [TablerIconComponent],
  providers: [
    provideTablerIcons({
      IconCamera,
      IconHeart,
    }),
  ],
  template: `
    <i-tabler name="camera"></i-tabler>
    <i-tabler name="heart" style="color: red;"></i-tabler>
  `,
})
export class AppComponent {}
```

### For NgModule Projects

```ts
import { NgModule } from '@angular/core';
import { TablerIconsModule } from '@luoxiao123/angular-tabler-icons';
import { IconCamera, IconHeart } from '@luoxiao123/angular-tabler-icons/icons';

const icons = {
  IconCamera,
  IconHeart,
};

@NgModule({
  imports: [TablerIconsModule.pick(icons)],
  exports: [TablerIconsModule],
})
export class IconsModule {}
```

Then use in your templates:

```html
<i-tabler name="camera"></i-tabler>
<i-tabler name="heart" style="color: red;"></i-tabler>
```

## Usage Guide

### Standalone Components

If you are using Standalone Components, use the `provideTablerIcons()` function.

#### Component Example

```ts
import { Component } from '@angular/core';
import { TablerIconComponent, provideTablerIcons } from '@luoxiao123/angular-tabler-icons';
import {
  IconNumber123,
  IconAdOff,
  IconHeartFilled,
} from '@luoxiao123/angular-tabler-icons/icons';

@Component({
  selector: 'app-standalone',
  imports: [TablerIconComponent],
  providers: [
    provideTablerIcons({
      IconNumber123,
      IconAdOff,
      IconHeartFilled,
    }),
  ],
  template: `
    <div>
      <i-tabler name="number-123"></i-tabler>
      <i-tabler name="number-123" style="height: 60px; width: 60px;"></i-tabler>
      <i-tabler name="ad-off" style="color: red;"></i-tabler>
      <i-tabler name="heart-filled" style="color: red;"></i-tabler>
    </div>
  `,
})
export class StandaloneComponent {}

## Available Icons

Browse all available icons: <https://tabler.io/icons>

This version includes **Tabler Icons v3.36.1**. For a complete list of changes, see the [changelog](https://tabler.io/icons/changelog).

## Styling Icons

All icons can be styled individually using CSS. Customize them with classes or inline styles:

```html
<i-tabler name="camera" class="big fill-red stroke-blue thin"></i-tabler>
```

```css
.big {
  height: 50px;
  width: 50px;
}

.fill-red {
  fill: red;
}

.stroke-blue {
  color: blue;
}

.thin {
  stroke-width: 1px;
}
```

**Styling Tips:**
- Use `width` and `height` for resizing
- Use `color` property to change stroke color
- Use `fill` property to change fill color
- Combine multiple classes for complex styling

## Configuration

### Module Options

Configure the module with optional settings:

```ts
import { environment } from "../environments/environment";
import { TablerIconsModule } from "@luoxiao123/angular-tabler-icons";
import * as TablerIcons from "@luoxiao123/angular-tabler-icons/icons";

@NgModule({
  imports: [
    TablerIconsModule.pick(TablerIcons, {
      // Suppress warnings (e.g., "Tabler Icon not found")
      ignoreWarnings: environment.production,
    }),
  ],
  exports: [TablerIconsModule],
})
export class IconsModule {}
```

### Importing All Icons

⚠️ **Warning:** Importing all icons will increase your bundle size significantly. This is only recommended for prototyping.

```ts
import { TablerIconsModule } from "@luoxiao123/angular-tabler-icons";
import * as TablerIcons from "@luoxiao123/angular-tabler-icons/icons";

@NgModule({
  imports: [TablerIconsModule.pick(TablerIcons)],
  exports: [TablerIconsModule],
})
export class IconsModule {}
```

## Angular Version Compatibility

| Angular Version | Package Version |
| :---: | :---: |
| 21 | 3.35.2+ |
| 18-20 | 3.22.0+ |
| 17 | 2.40.1+ |
| 16 | 2.21.1+ |
| 15 | 1.117.1+ |
| 14 | 1.72.1+ |
| 13 | 1.53.1+ |
| 12 | 1.41.3+ |
| 11 | 1.41.0+ |

## Development & Contributing

We welcome contributions! Whether it's bug reports, feature requests, or pull requests, all contributions are appreciated.

### Getting Started with Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run start`

### Common Tasks

```bash
# Generate components from latest Tabler Icons
npm run lib:generate

# Build the library for production
npm run lib:build

# Run tests
npm test

# Run linter
npm lint
```

### Workflow for New Tabler Icons Versions

The update process is fully automated:

1. When a new Tabler Icons version is released, GitHub Actions automatically creates a PR
2. Review and merge the generated Pull Request
3. Create a release tag with the new Tabler Icons version
4. The package is automatically built and published to npm

## Contributors ✨

Thanks goes to these wonderful people who have contributed to this project:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/pierreavn"><img src="https://avatars.githubusercontent.com/u/8176955?v=4?s=100" width="100px;" alt="Pierre"/><br /><sub><b>Pierre</b></sub></a><br /><a href="https://github.com/xylplm/angular-tabler-icons/commits?author=pierreavn" title="Code">💻</a> <a href="https://github.com/xylplm/angular-tabler-icons/commits?author=pierreavn" title="Documentation">📖</a> <a href="#maintenance-pierreavn" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/the-ult"><img src="https://avatars.githubusercontent.com/u/4863062?v=4?s=100" width="100px;" alt="Arjen Althoff"/><br /><sub><b>Arjen Althoff</b></sub></a><br /><a href="https://github.com/xylplm/angular-tabler-icons/commits?author=the-ult" title="Code">💻</a> <a href="https://github.com/xylplm/angular-tabler-icons/commits?author=the-ult" title="Documentation">📖</a> <a href="#maintenance-the-ult" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/janschab"><img src="https://avatars.githubusercontent.com/u/56731968?v=4?s=100" width="100px;" alt="Jan Schab"/><br /><sub><b>Jan Schab</b></sub></a><br /><a href="https://github.com/xylplm/angular-tabler-icons/commits?author=janschab" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/xylplm"><img src="https://avatars.githubusercontent.com/u/49856280?v=4?s=100" width="100px;" alt="逍遥乐"/><br /><sub><b>逍遥乐</b></sub></a><br /><a href="https://github.com/xylplm/angular-tabler-icons/commits?author=xylplm" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. **Contributions of any kind are welcome!** For information on how to contribute, check the [Contributing guide](#development--contributing).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
