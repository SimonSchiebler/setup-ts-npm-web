# setup-ts-npm-web - Cordova Version

A project setup for the creation of web apps using Cordova, Typescript and npm packages.

## Prerequisites

### Software

* [Node.js](https://nodejs.org/en/download/) - A JavaScript run-time environment

### Packages

```node
npm install --global gulp-cli
```

```cordova
npm install --global cordova
```

### VS Code extensions

This project is intended to be used with Visual Studio Code and the following extensions are recommended:

* [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint) - TSLint for Visual Studio Code
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Integrates ESLint into VS Code

## Getting it running

### Installing

```node
npm install
```
```cordova
cordova platforms add [your desired platform (android, ios ...)]
```

### Linting

#### TypeScript

```node
gulp lint:ts
```

#### JavaScript

```node
gulp lint:es
```

#### Both

```node
gulp lint
```

### Building

#### One-time

```node
gulp build
```

#### Watch for changes

```node
gulp watch
```

### Tricks

#### Open in browser

```node
cordova run Platform
```

#### Watch for changes and open in browser

```node
gulp default
```

## Authors

* **Robin Hartmann** - *Initial work* - [RobinHartmann](https://github.com/RobinHartmann)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
