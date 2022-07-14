---
title: Protocol Alpha Testnet
id: testnet-alpha
---

# Protocol Alpha Testnet

Last updated:  July 11, 2022

## What is it?

The protocol testnet alpha pre-release includes the Fotos mobile application and some of the Box components that will be pre-installed on Box customer's raspberry Pis when they are shipped.

## Purpose

1.  To give backers an update on our progress by giving them the ability to test things out for themselves.

2.  Help us find errors and edge cases (especially long lived) before we launch.

3.  Gather feedback so we can ensure we are delivering on what is important when we ship.

4.  Build community / rapport with people that share similar values as ourselves.

## What to expect

The software we are delivering to you today can give you an idea of how the Fotos mobile app will backup and store your photos and video to the Box.

Once you have everything setup you should have two Boxes talking to each other running on your host machine.

You should be able to upload your media using Fotos from your mobile phone to one of the Boxes encrypted with a key from your own wallet.

You can use the web gallery sample app to verify that the photos are in fact synced to both Boxes and that you are able to view them on a different device.

You can also get an idea of how a decentralized identity might be generated from yours and your friends wallets in order to enable sharing of photos with each other.

## Requirements

  * one Android phone

  * a second Android phone for sharing photos with a friend

  * your own computer that can run [Docker](https://docs.docker.com/get-docker/)

    * Linux is recommended ( macOS also works with a few additional steps)

  * each phone must be on the same network as the computer where the Box app is running


## Submitting feedback

We woud love to know how it went for you!

Especially if you can not complete any of the steps due to a bug you encountered or because you can not satisfy the above requirements.

You can send us feedback via Github or as an [email](mailto:testnet@fx.land).

Here is some boilerplate text you can copy/paste when you are ready to send the feedback.


```
Subject: Protocol alpha testnet

Feedback Type: [ Bug | Feature Request ]

Feedback:

[ I completed all of the steps successfully.  This rocked but I have a few suggestions for the next release...]

OR

[ I was unable to complete X step(s).  The following happened when I tried to complete the step: ...]

```


If you believe the issue is happening in the backend then you can create an issue on the [fula](https://github.com/functionland/fula/issues) repo and include the docker-compose server logs.

If you believe the issue is happening in the Fotos mobile client then you can create an issue on the [fotos](https://github.com/functionland/fotos/issues) repo and describe what is going wrong.

If you don't know where the problem exists or don't have a Github account then please send us an [email](mailto:testnet@fx.land) and attach both logs if you are reporting a bug.

### To output the server logs to a file

Open a terminal and enter the following in the same directory that you ran docker-compose in the previous steps.

```
  > docker-compose logs >  out.log
```

## Beware of Risks

The Functionland protocol alpha testnet release includes client side encryption as a first layer of security to help prevent others from gaining access to your photos and video.

However, because the software we are delivering is fresh off the press and still not properly audited, PLEASE USE WITH CAUTION.

At this point, we recommend you not upload any highly sensitive media to the Box or use it as a primary backup facility.

## How to get started

### Box Setup

First, you can follow the instructions [over here](https://github.com/functionland/fula/blob/main/apps/cluster/README.md) for setting up a local swarm on your host machine with Docker.

To connect Fotos to your Box, you will need to find the multiaddress from the logs.  From a shell where docker-compose is running use the following command to see logs for Box0 -

```
  > docker-compose logs -f box0
```

[@TODO insert screenshot of what box0 log looks like with multiaddr highlighted]

In order to perform the verify availability step ( 3 ) you will need the multiaddr of the second Box.  You can see the logs similarly to how you did it for box1.

[@TODO insert screenshot of what box1 log looks like with multiaddr highlighted]

Note: If on OSX then change the IP address part of the address to the address of your host machine.

### Fotos Setup

Download latest release of Fotos from the [app center](https://install.appcenter.ms/orgs/fx.-land/apps/photos/releases) and install it.

## Protocol Alpha Testnet Steps

Once you have Fotos and the Box environment properly installed you can proceed with the following steps:

1.  See [here](/mvp/fotos/setup) for instructions on setting up Fotos before moving on to anything else.

2.  See [here](/mvp/fotos/backup) for instructions on backing up an image from your device to a Box using Fotos.

3.  See [here](/mvp/fotos/availability) for instructions on verifying that your photos are still available even if one of the Boxes goes does.

4.  See [here](/mvp/fotos/sharing) for instructions on sharing the image with a friend.
