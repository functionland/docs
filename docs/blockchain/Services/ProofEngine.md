# Proof Engine

# Compile from Source

## [Install OS dependencies and Rust](https://github.com/functionland/sugarfunge-node/blob/main/docs/rust-setup.md)

## [Install Bevy dependencies for your OS](https://bevyengine.org/learn/book/getting-started/setup/#install-os-dependencies)

## Clone the Proof Engine

```bash
git clone https://github.com/functionland/proof-engine.git
```

## Run the Proof Engine

Requires a [Node](Node%2044a83cae5a8d453b8f346a35660056b6.md), [Node API](Node%20API%20c6f31aebd35c4bd282432fa96044b8c9.md) and an [IPFS node](https://docs.ipfs.tech/how-to/command-line-quick-start/) running.

```bash
RUST_LOG="warn,proof_engine=info" cargo run --release -- //Alice --pool-id 1000000
```

# Using Docker

## [Install Docker](https://docs.docker.com/engine/install/)

## Build the image

```bash
docker build -t proof-engine:local -f docker/Dockerfile .
```

## Run the Proof Engine

Requires a [Node](Node%2044a83cae5a8d453b8f346a35660056b6.md), [Node API](Node%20API%20c6f31aebd35c4bd282432fa96044b8c9.md) and an [IPFS node](https://docs.ipfs.tech/how-to/command-line-quick-start/) running.

```bash
docker run --rm -d --network host proof-engine:local
```