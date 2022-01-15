<div id="top"></div>

<p align="center">
  <a href="https://github.com/codemantion/lazy-load-image/actions">
    <img alt="Tests Passing" src="https://github.com/codemantion/lazy-load-image/workflows/CI/badge.svg" />
  </a>
  <a href="https://github.com/codemantion/lazy-load-image/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/codemantion/lazy-load-image?color=0088ff" />
  </a>
  <a href="https://github.com/codemantion/lazy-load-image/pulls">
    <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/codemantion/lazy-load-image?color=0088ff" />
  </a>
</p>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/codemantion/lazy-load-image">
    <img src="https://raw.githubusercontent.com/codemantion/common-assets/master/logos/png/lazy-load-image.png" alt="Logo" width="220" height="220">
  </a>

  <h3 align="center">React Lazy Load Image</h3>

  <p align="center">
    An simple React Component to lazy load image
    <br />
    <a href="#installation">Install</a>
    ·
    <a href="https://github.com/codemantion/lazy-load-image/issues">Report Bug</a>
    ·
    <a href="https://github.com/codemantion/lazy-load-image/issues">Request Feature</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#lazyImage-usage">LazyImage Usage</a></li>
    <li><a href="#props">Props</a></li>
    <li><a href="#global-override">Global override</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About the project

A simple and lightweight React Component to lazy load images

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Installation

Installalation
* npm
  ```sh
  npm install @codemantion/lazy-load-image
  ```
* yarn
  ```sh
  yarn add @codemantion/lazy-load-image
  ```

<!-- GETTING STARTED -->
## LazyImage Usage

  ```javascript
import React from 'react';
import LazyImage from '@codemantion/lazy-load-image';
 
const MyComponent = () => (
  <React.Fragment>
    <LazyImage
      alt={'my-logo'}
      height={400}
      src={LOGO} // You can import a logo or use an url
      width={400} 
    />
  </React.Fragment>
);
  ```

### Props

| Prop   | Type     | Required | Default | Description                                                                             |
|:-------|:---------|:---------|:--------|:----------------------------------------------------------------------------------------|
| src    | `string` | `true`   |         | The image source. It can either pass a base64 object or URl can directly be used.       |
| width  | `number` |          | 200     | Image Default width. You can pass a number (i.e. 200) or a string (i.e. '200px').       |
| height | `number` |          | 200     | Image Default height. You can pass a number (i.e. 200) or a string (i.e. '200px').      |
| alt    | `string` |          | 'N/A'   | Alternative text if the image doesn't render.                                           |
| style  | `object` |          | { }     | Element Inline Style. You can simply pass the css attribute inside the style attribute. |

### Global override

You can pass parameters to apply on all the LazyImage components globally.

```javascript
import { overRideConfig } from '@codemantion/lazy-load-image';
```

To enable Server side rendering
```javascript
overRideConfig({ ssr: true });
```

### Global override Props

| Prop | Type      | Required | Default | Description                                  |
|:-----|:----------|:---------|:--------|:---------------------------------------------|
| ssr  | `boolean` |          | `false` | This will enable server side rendering(SSR). |
