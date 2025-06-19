# ng-react-bridge

[![NPM version](https://img.shields.io/badge/npm-v10.7.0-brightgreen)](https://www.npmjs.com/package/ng-react-bridge)
[![NODE version](https://img.shields.io/badge/node-v20.14.0-brightgreen)](https://www.npmjs.com/package/ng-react-bridge)
[![types](https://img.shields.io/badge/types-TypeScript-blue)](https://www.npmjs.com/package/ng-react-bridge)
[![license](https://img.shields.io/github/license/john310897/ng-react-bridge)]()

`ng-react-bridge` is a lightweight Angular package designed to bridge React and Angular. It enables developers to seamlessly render React components inside Angular components using a directive, simplifying the integration of both frameworks in hybrid applications.
- [Demo](https://john310897.github.io/ng-react-bridge/) (You could find the demo code in the project repo)

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

```ts
//tsconfig.json
{
    ...
    "compilerOptions":{
        ...
        "jsx": "react",
     }
}
```

## Installation

Install the package via npm:

```bash
npm install ng-react-bridge
```

## Usage Example

```tsx
//test-component.tsx
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
];

const paginationModel = { page: 0, pageSize: 5 };
type componentProps = {
    data: any
}
export default function TestComponent(props: componentProps) {
    React.useEffect(() => {
        console.log('react component loaded')
    })
    return (
        <Paper sx={{ height: 400, width: '100%' }}>
            <h5>MUI Data table</h5>
            <DataGrid
                rows={props?.data}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>
    );
}
```

```ts
//app.ts
import { Component } from '@angular/core';
import { ReactComponentDirective } from 'ng-react-bridge';
import TestComponent from '../react_components/test-component'

@Component({
  selector: 'app-root',
  imports: [ReactComponentDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'angular-test-pkg';
  component = TestComponent
  angularLabel = "Parent"
  tableData = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 }
  ]
}

```

```html
<!-- app.html-->
<div>
  Angular Component {{angularLabel}}
</div>

<br />
<div>
  React as child component
  <div [reactComponent]="component" [props]="{data:tableData}">
  </div>
</div>
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with detailed changes.

## License

This project is licensed under the MIT License.
