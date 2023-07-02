# Explorer

# Compile from Source

## [Install NodeJS](https://nodejs.org/en/)

## [Install Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

## Clone the Explorer

```bash
git clone https://github.com/functionland/sugarfunge-explorer.git
```

## Run the Explorer

Requires a [Node](Node.md) running.

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

Requires a [Node](Node.md) running.

```bash
docker run --rm -d --network host --env WS_URL=ws://127.0.0.1:9944 sugarfunge-explorer:local
```

# Functionyard Network

If you want to run an explorer for functionyard network:

```bash
docker run --rm --name Explorer --network host --env WS_URL=wss://node.functionyard.fx.land --env WSS_URL=wss://node.functionyard.fx.land sugarfunge-explorer:local
```

Or set it as a service:

```bash
sudo nano /etc/systemd/system/docker-sugarfunge-explorer.service
```

And fill it with:

```bash
[Unit]
Description=Docker Sugarfunge Explorer
After=docker.service
Requires=docker.service

[Service]
TimeoutStartSec=0
Type=simple
ExecStart=/usr/bin/docker run --rm --name Explorer --network host --env WS_URL=wss://node.functionyard.fx.land --env WSS_URL=wss://node.functionyard.fx.land sugarfunge-explorer:local
ExecStop=/usr/bin/docker stop Explorer
Restart=always
StandardOutput=file:/var/log/Explorer.log
StandardError=file:/var/log/Explorer.err

[Install]
WantedBy=multi-user.target
```