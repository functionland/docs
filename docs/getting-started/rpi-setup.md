---
title: Installing Box on Raspberry Pi OS
id: rpi-setup
---
import WorkInProgress from '../components/WorkInProgress.mdx'

# Installing Box on Raspberry Pi OS

<WorkInProgress />

## Pre-requisites

It is assumed you have taken the necessary steps to appropriately secure the linux environment before installing the Box software.

For example, you should change the default `pi` user password if starting from the [current release](https://downloads.raspberrypi.org/raspios_full_armhf/images/raspios_full_armhf-2022-04-07/) of raspberry Pi OS.

You might also create a different user with root priviledges and remove ssh / sudo access for the pi user.

This guide was written using `Debian GNU/Linux 11 (bullseye)` on a Raspberry Pi 4.

## Setup Steps

1.  Install git to clone the FULA repo.

```
  > sudo apt update
  > sudo apt install git
```

2.  Install [docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/) according to your linux distro.  If you get an error during the install process see troubleshooting below.

3.  Create a non-sudo user for the Box server app and other dependencies to run under and add them to the docker group.

```
  > sudo adduser -m fuman
  > sudo passwd fuman
  > sudo usermod -a -G docker fuman
```

Log in as 'fuman' in a new shell

```
  > ssh fuman@yourhost
```

4.  Run docker in [rootless mode](https://docs.docker.com/engine/security/rootless/).

5.  Start Box and it's dependencies.

```
  > git clone https://github.com/functionland/fula
  > docker-compose -f docker-compose.dev.yaml up
```

6.  Verify you are able to connect to the Box on the rPi from a sample DApp.  The most straightforward way to do that is to follow the regular ['getting-started'](../getting-started) process.  On the step to connect to a Box just enter the PeerId of the Box running on your rPi instead of the one that is running on your local dev. machine.

## Troubleshooting

Ensure the [there is a directory matching kernel version in /lib/modules](https://stackoverflow.com/questions/61396131/docker-service-fails-to-start-error-failed-to-mount-overlay-no-such-device-o)
