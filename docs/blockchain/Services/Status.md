# Status

# Compile from Source

## [Install NodeJS](https://nodejs.org/en/)

## [Install Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

## Clone the Status

```bash
git clone https://github.com/functionland/functionland-status.git
```

## Run the Status

Requires a [Node](Node.md) running.

```bash
yarn
PORT=8000 REACT_APP_PROVIDER_SOCKET=ws://127.0.0.1:9944 yarn start
```

# Using Docker

## [Install Docker](https://docs.docker.com/engine/install/)

## Build the image

```bash
docker build -t sugarfunge-status:local -f docker/Dockerfile .
```

## Run the Status

Requires a [Node](Node.md) running.

```bash
docker run --rm -d --network host --env PORT=8000 --env REACT_APP_PROVIDER_SOCKET=ws://127.0.0.1:9944 sugarfunge-status:local
```