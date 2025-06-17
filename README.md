# ng-react-bridge

[![NPM version](https://img.shields.io/badge/npm-v10.7.0-brightgreen)](https://www.npmjs.com/package/ng-react-bridge)
[![NODE version](https://img.shields.io/badge/node-v20.14.0-brightgreen)](https://www.npmjs.com/package/ng-react-bridge)
[![types](https://img.shields.io/badge/types-TypeScript-blue)](https://www.npmjs.com/package/ng-react-bridge)
[![license](https://img.shields.io/github/license/john310897/ng-react-bridge)]()

`ng-react-bridge` is a lightweight Angular package designed to bridge React and Angular. It enables developers to seamlessly render React components inside Angular components using a directive, simplifying the integration of both frameworks in hybrid applications.

## Compatability

- ✅ Compatible with Angular 20 and React 17+
- ⚠️ Built and tested with Angular 20

## Features

- Render React components within Angular templates.
- Pass props dynamically from Angular to React components.
- Lightweight and easy-to-use directive.
- Fully compatible with Angular standalone components.

## 🔧 API

Below are the supported parameters:

| Property   | Type                 | Description                                                             |
|------------|----------------------|-------------------------------------------------------------------------|
| `reactComponent` | `React.ComponentType` | The React component to render inside the Angular context.              |
| `props`     | `Record<string, any>` | An object containing props to pass to the React component.             |

## Prerequisites

To use `ng-react-bridge`, ensure your project has the following dependencies installed:

- **React** (`react`)
- **ReactDOM** (`react-dom`)
- **Babel** (for compiling and running React components in Angular)

Install them if they are not already present in your project:

```bash
npm install react react-dom @types/react @babel/preset-react
```

And also you need to update tsconfig.json file so it can recognize the react imports and compile JS

```json 
//tsconfig.json
{
    ...
    "compilerOptions":{
        ...
        "jsx": "react",
        "allowJs": true,
        "checkJs": true
    }
}
```

## Installation

Install the package via npm:

```bash
npm install ng-react-bridge
```

## Usage

```jsx
//test-component.jsx
import React from 'react'

function TestComponent() {
    return (
        <div>test-component</div>
    )
}

export default TestComponent
```

```ts
//app.ts
import { ReactComponentDirective } from 'ng-react-bridge';
import TestComponent from '../react-components/test-component.jsx'

@Component({
  selector: 'app-root',
  imports: [ReactComponentDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'angular-pkg-test';
  reactComponent = TestComponent
}
```

```html
<!-- app.html-->
<main class="main">
  <div class="content">
    this is angular app component
  </div>

    <div>
        this is react compoent
        <div [reactComponent]="reactComponent"></div>
    </div>
</main>
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with detailed changes.

## License

This project is licensed under the MIT License.