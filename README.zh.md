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

## 📚 目录

- [简介](#简介)
- [安装](#安装)
- [快速开始](#快速开始)
- [使用指南](#使用指南)
  - [独立组件](#独立组件)
  - [NgModule（旧版方式）](#ngmodule旧版方式)
- [样式化图标](#样式化图标)
- [配置](#配置)
- [Angular 版本兼容性](#angular-版本兼容性)
- [开发与贡献](#开发与贡献)
- [贡献者](#贡献者-)

## 简介

这是 [angular-tabler-icons](https://github.com/pierreavn/angular-tabler-icons) 的一个分支。原项目不再积极维护，因此该版本继续开发和维护。

这个包允许你在 Angular 应用程序中使用 [Tabler 图标](https://tabler.io/icons)。Tabler 图标是一套免费的 MIT 许可证、高质量的 SVG 图标，可用于网页项目。每个图标都是在 24x24 的网格上设计的，笔画为 2px。

**快速链接：**
- 📦 [NPM 包](https://www.npmjs.com/package/@luoxiao123/angular-tabler-icons)
- 🎨 [在线演示](https://xylplm.github.io/angular-tabler-icons/)
- 📖 [图标库](https://tabler.io/icons)

**特性：**
- 🎨 5000+ 高质量的 SVG 图标
- 📦 可摇树（Tree-shakeable）- 仅导入你使用的内容
- 🎯 支持 Angular 12+
- ⚡ 轻量级且高性能
- 🎭 使用 CSS 轻松自定义

## 安装

通过 npm 安装包：

```sh
npm install @luoxiao123/angular-tabler-icons
```

## 快速开始

### 用于独立组件（推荐）

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

### 用于 NgModule 项目

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

然后在你的模板中使用：

```html
<i-tabler name="camera"></i-tabler>
<i-tabler name="heart" style="color: red;"></i-tabler>
```

## 使用指南

### 独立组件

如果你正在使用独立组件，请使用 `provideTablerIcons()` 函数。

#### 组件示例

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
```

## 可用图标

浏览所有可用图标：<https://tabler.io/icons>

此版本包含 **Tabler Icons v3.36.1**。有关完整的更改列表，请参阅 [更新日志](https://tabler.io/icons/changelog)。

## 样式化图标

所有图标都可以使用 CSS 进行单独样式化。使用类或内联样式自定义它们：

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

**样式化提示：**
- 使用 `width` 和 `height` 调整大小
- 使用 `color` 属性改变笔画颜色
- 使用 `fill` 属性改变填充颜色
- 组合多个类以实现复杂的样式

## 配置

### 模块选项

使用可选设置配置模块：

```ts
import { environment } from "../environments/environment";
import { TablerIconsModule } from "@luoxiao123/angular-tabler-icons";
import * as TablerIcons from "@luoxiao123/angular-tabler-icons/icons";

@NgModule({
  imports: [
    TablerIconsModule.pick(TablerIcons, {
      // 抑制警告（例如"未找到 Tabler 图标"）
      ignoreWarnings: environment.production,
    }),
  ],
  exports: [TablerIconsModule],
})
export class IconsModule {}
```

### 导入所有图标

⚠️ **警告：** 导入所有图标会大大增加你的包大小。仅建议用于原型设计。

```ts
import { TablerIconsModule } from "@luoxiao123/angular-tabler-icons";
import * as TablerIcons from "@luoxiao123/angular-tabler-icons/icons";

@NgModule({
  imports: [TablerIconsModule.pick(TablerIcons)],
  exports: [TablerIconsModule],
})
export class IconsModule {}
```

## Angular 版本兼容性

| Angular 版本 | 包版本 |
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

## 开发与贡献

我们欢迎贡献！无论是错误报告、功能请求还是拉取请求，所有贡献都受欢迎。

### 开发入门

1. 克隆仓库
2. 安装依赖：`npm install`
3. 启动开发服务器：`npm run start`

### 常见任务

```bash
# 从最新的 Tabler 图标生成组件
npm run lib:generate

# 为生产构建库
npm run lib:build

# 运行测试
npm test

# 运行 linter
npm lint
```

### 新的 Tabler 图标版本工作流程

更新过程是完全自动化的：

1. 当发布新的 Tabler 图标版本时，GitHub Actions 会自动创建一个 PR
2. 审查并合并生成的拉取请求
3. 使用新的 Tabler 图标版本创建发布标签
4. 该包会自动构建并发布到 npm

## 贡献者 ✨

感谢这些杰出的人对该项目的贡献：

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="25%"><a href="https://github.com/xylplm"><img src="https://avatars.githubusercontent.com/u/49856280?v=4?s=100" width="100px;" alt="逍遥乐"/><br /><sub><b>逍遥乐</b></sub></a><br /><a href="https://github.com/xylplm/angular-tabler-icons/commits?author=xylplm" title="Code">💻</a> <a href="https://github.com/xylplm/angular-tabler-icons/commits?author=xylplm" title="Documentation">📖</a> <a href="#maintenance-xylplm" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="25%"><a href="https://github.com/pierreavn"><img src="https://avatars.githubusercontent.com/u/8176955?v=4?s=100" width="100px;" alt="Pierre"/><br /><sub><b>Pierre</b></sub></a><br /><a href="https://github.com/xylplm/angular-tabler-icons/commits?author=pierreavn" title="Code">💻</a> <a href="https://github.com/xylplm/angular-tabler-icons/commits?author=pierreavn" title="Documentation">📖</a> <a href="#maintenance-pierreavn" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="25%"><a href="https://github.com/the-ult"><img src="https://avatars.githubusercontent.com/u/4863062?v=4?s=100" width="100px;" alt="Arjen Althoff"/><br /><sub><b>Arjen Althoff</b></sub></a><br /><a href="https://github.com/xylplm/angular-tabler-icons/commits?author=the-ult" title="Code">💻</a> <a href="https://github.com/xylplm/angular-tabler-icons/commits?author=the-ult" title="Documentation">📖</a> <a href="#maintenance-the-ult" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="25%"><a href="https://github.com/janschab"><img src="https://avatars.githubusercontent.com/u/56731968?v=4?s=100" width="100px;" alt="Jan Schab"/><br /><sub><b>Jan Schab</b></sub></a><br /><a href="https://github.com/xylplm/angular-tabler-icons/commits?author=janschab" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

该项目遵循 [all-contributors](https://github.com/all-contributors/all-contributors) 规范。**欢迎任何形式的贡献！** 有关如何贡献的信息，请查看[贡献指南](#开发与贡献)。

## 许可证

该项目根据 MIT 许可证获得许可。有关详细信息，请参阅 [LICENSE](LICENSE) 文件。
