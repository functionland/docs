# Explorer

# Compile from Source

## [Install NodeJS](https://nodejs.org/en/)

## [Install Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

## Clone the Explorer

```bash
git clone https://github.com/functionland/sugarfunge-explorer.git
```

## Run the Explorer

Requires a [Node](Node%2044a83cae5a8d453b8f346a35660056b6.md) running.

```bash
yarn
WS_URL=ws://127.0.0.1:9944 yarn start
```

# Using Docker

## [Install Docker](https://docs.docker.com/engine/install/)

## Build the image

```bash
docker build -t sugarfunge-explorer:local -f docker/Dockerfile .
```

### Run the Explorer

Requires a [Node](Node%2044a83cae5a8d453b8f346a35660056b6.md) running.

```bash
docker run --rm -d --network host --env WS_URL=ws://127.0.0.1:9944 sugarfunge-explorer:local
```