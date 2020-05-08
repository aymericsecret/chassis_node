# chassis_node

[![codecov](https://codecov.io/gh/aymericsecret/chassis_node/branch/master/graph/badge.svg?token=FU5R4C21DO)](https://codecov.io/gh/aymericsecret/chassis_node)
[![aymericsecret](https://circleci.com/gh/aymericsecret/chassis_node.svg?style=shield&circle-token=27a6905cf5496f662e3a4c38c34cc33e1a3ecead)](https://app.circleci.com/pipelines/github/aymericsecret/chassis_node)

## Installation

```bash
nvm i
npm install
```

## Running processes

```sh
# Running the web process with npm
npm run start

# Running the web process in dev mode with npm
npm run start:dev

# Running a process directly through node (need to transpile the code beforehand)
node src/index.js
```

## Tests

```bash
# Run the mocha tests only
npm run mocha

# Run the eslint only
npm run eslint

# Run all the tests
npm test
```

## Environment variables

- `WEB_PROCESS_SHOW_ERROR` (default: `true`)
- `WEB_PROCESS_PORT` (default: `3001`)
- `WEB_PROCESS_EXIT_TIMEOUT` (default: `1000`)

### Documentation

#### Generate documentation

```sh
npm run apidoc
```

#### Access API documentation

Simply run the project and access it there:
`http://localhost:3001/api-docs/`
