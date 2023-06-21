# Test Node

This document explains how to run sample nodes. However, for an actual node with custom keys please refer to [Run Node](RunNode)

# Compile from Source

## [Install OS dependencies and Rust](https://github.com/functionland/sugarfunge-node/blob/main/docs/rust-setup.md)

## Clone the Node

```bash
git clone https://github.com/functionland/sugarfunge-node.git
```

### Run a Local Testnet

### alice node:

```bash
cargo run --release -- --chain=local --enable-offchain-indexing true --alice --base-path=.tmp/a --port=30334 --ws-port 9944 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external
```

### bob node:

```bash
cargo run --release -- --chain=local --enable-offchain-indexing true --bob --base-path=.tmp/b --port=30335 --ws-port 9945 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external --bootnodes /ip4/127.0.0.1/tcp/30334/p2p/12D3KooWNxmYfzomt7EXfMSLuoaK68JzXnZkNjXyAYAwNrQTDx7Y
```

### charlie node:

```bash
cargo run --release -- --chain=local --enable-offchain-indexing true --charlie --base-path=.tmp/c --port=30336 --ws-port 9946 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external --bootnodes /ip4/127.0.0.1/tcp/30334/p2p/12D3KooWNxmYfzomt7EXfMSLuoaK68JzXnZkNjXyAYAwNrQTDx7Y
```

# Using Docker

## [Install Docker](https://docs.docker.com/engine/install/)

## Build the image

```bash
docker build -t sugarfunge-node:local -f docker/Dockerfile .
```

## Run a Local Testnet

### alice node:

```bash
docker run --rm -d --network host sugarfunge-node:local --chain=local --enable-offchain-indexing true --alice --base-path=.tmp/a --port=30334 --ws-port 9944 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external
```

### bob node:

```bash
docker run --rm -d --network host sugarfunge-node:local --chain=local --enable-offchain-indexing true --bob --base-path=.tmp/b --port=30335 --ws-port 9945 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external --bootnodes /ip4/127.0.0.1/tcp/30334/p2p/12D3KooWNxmYfzomt7EXfMSLuoaK68JzXnZkNjXyAYAwNrQTDx7Y
```

### charlie node:

```bash
docker run --rm -d --network host sugarfunge-node:local --chain=local --enable-offchain-indexing true --charlie --base-path=.tmp/c --port=30336 --ws-port 9946 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external --bootnodes /ip4/127.0.0.1/tcp/30334/p2p/12D3KooWNxmYfzomt7EXfMSLuoaK68JzXnZkNjXyAYAwNrQTDx7Y
```