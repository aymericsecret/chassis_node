# chassis_node

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
