# Node API

# Compile from Source

## [Install OS dependencies and Rust](https://github.com/functionland/sugarfunge-node/blob/main/docs/rust-setup.md)

## Clone the Node API

```bash
git clone https://github.com/functionland/sugarfunge-api.git
```

## Run the Node API

Requires a [Node](Node.md) running.

```bash
cargo run --release
```

# Using Docker

## [Install Docker](https://docs.docker.com/engine/install/)

## Build the image

```bash
docker build -t sugarfunge-api:local -f docker/Dockerfile .
```

## Run the Node API

Requires a [Node](Node.md) running.

```bash
docker run --rm -d --network host sugarfunge-api:local
```

# Available arguments

```bash
sugarfunge-api 0.1.0

USAGE:
    sugarfunge-api [OPTIONS]

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

OPTIONS:
    -d, --db-uri <db>                  
    -l, --listen <listen>               [default: http://127.0.0.1:4000]
    -s, --node-server <node-server>     [default: ws://127.0.0.1:9944]
```

# Subscriptions

Basic support for WebSockets subscriptions is available. Any tool that offers features for WebSockets connections and subscriptions will apply. For example, [websocat](https://github.com/vi/websocat)

```bash
websocat ws://127.0.0.1:4000/ws
```

# API Metadata Generation

If you update the [Node](Node.md) manually, it's required to generate the metadata with the SugarFunge fork of [subxt](https://github.com/SugarFunge/subxt) to access the new state of the chain using the API.

```bash
subxt-cli metadata -f bytes > sugarfunge_metadata.scale
```