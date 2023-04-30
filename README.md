# TSNoder

[contributing]: CONTRIBUTING.md
[code-of-conduct]: CODE_OF_CONDUCT.md
[security]: SECURITY.md

Simple, minimal and efficient cross-platform [NodeJS](https://nodejs.org/en) [Typescript](https://www.typescriptlang.org) development server for monitoring changes in your application.

> Inspired by [nodemon](https://github.com/fgnass/node-dev) development server to run nodejs apps that uses ts-node under the hood and compile `.ts` to `.js`. We also uses[chokidar](https://github.com/paulmillr/chokidar) to watch file changes and restart the process by respawning a `node:child_process`.

> **DISCLAIMER:** This is not a clone of [ts-node-dev](https://github.com/whitecolor/ts-node-dev). We are not combining both [ts-node](https://github.com/TypeStrong/ts-node) and [node-dev](https://github.com/fgnass/node-dev).

# Why?

### nodemon

- Slower on larger applications
- Not lightweight enough because of the additional features for sipporting `js`
- `nodemon` has a Typescript support but it is still using `ts-node` under the hood.

### ts-node-dev

- Fast but unreliable
- Some flags are not being used and has an issue
- Bloated of features that comes from both `node-dev` and `ts-node`

### nodemon + ts-node

- Require some configuration files
- Somewhat slower than using `nodemon` itself
- Pretty stable but needs to be explicitly configured

### node-dev + ts-node

- You will have feature that you don't on both nodemon and tsnode
- Requires much less configuration than `nodemon + tsnode` but still slow

### nodemon + tsc

- A little bit harder to setup
- Relies on your knowledge to setup the `tsconfig.json`
- You need to add some flag to have much finer control on the compiler

> **TSNoder** resolves all of these problems.

Initially I used this as my personal typescript node watcher server for my other projects like [MayaJS](https://github.com/mayajs/maya) for its development server and build tools.

# How?

**TSNoder** relies on `chokidar` to watch the files for any modifications. Every time a file was changed an event will be trigger to `restart` the process. If a `child_process` is still running, a `kill` event will be trigger to force all the `subprocess` to `exit`. After a successful clean up of the child the restart event will again be triggered.

# Getting Started

### Install with `npm`

> ```shell
> # Locally in your project.
> npm install -D typescript
> npm install -D tsnoder
> ```

> ```shell
> # Or globally with TypeScript.
> npm install -g typescript
> npm install -g tsnoder
> ```

> ```shell
> # Depending on configuration, you may also need these
> npm install -D tslib @types/node
> ```


### Add start script in `package.json`

> `"start" : "tsnoder index.ts"`

### Or run in `terminal`

> `tsnoder index.ts`

# Contributing

We encourage you to contribute to TSNoder! Please check out the [Contributing][contributing] to TSNoder guide for guidelines about how to proceed. [Join us!](https://github.com/mackignacio/tsnoder/issues)

Trying to report a possible [security vulnerability][security] in TSNoder? Please check out our security policy for guidelines about how to proceed.

Everyone interacting in TSNoder and its sub-projects' codebases, [issue trackers](https://github.com/mackignacio/tsnoder/issues), chat rooms, and mailing lists is expected to follow the TSNoder [Code of Conduct][code-of-conduct].

# License

**TSNoder** is licensed under the [GNU GENERAL PUBLIC LICENSE Version 3](https://www.gnu.org/licenses/gpl-3.0.en.html).

**TSNoder** includes source code from Node.js which is licensed under the [MIT license](https://raw.githubusercontent.com/nodejs/node/master/LICENSE).

**TSNoder** includes source code from the TypeScript compiler which is licensed under the [Apache License 2.0](https://github.com/microsoft/TypeScript/blob/master/LICENSE.txt).