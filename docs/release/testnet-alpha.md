---
title: Protocol Testnet Alpha Pre-release
id: testnet-alpha
---

# Protocol Testnet Alpha Pre-release

Last updated:  July 29, 2022

## What is it?

The protocol testnet alpha pre-release includes the Fotos mobile application and some of the Fula components that will be pre-installed on FxBlox customer's raspberry Pis when they are shipped.

## What to expect

The software we are delivering to you today can give you an idea of how the Fotos mobile app will back up and store your photos to the Fula testnet environment.

Once you have everything set up, you should have a Fula API server, IPFS and Fula funge components all talking to each other running on your host machine.

You should be able to upload your media using Fotos from your mobile phone to the Fula testnet environment encrypted with a key from your own wallet.

You can also get an idea of how a decentralized identity might be generated from your and your friend' wallets in order to enable sharing of photos with each other.

Lastly, you can get a first glimpse of how backing up files (that you uploaded with Fotos) will cause rewards to be generated for you on the Fula testnet blockchain.

## Requirements

  * one Android phone

  * a second Android phone for sharing photos with a friend

  * your own computer that can run [Docker](https://docs.docker.com/get-docker/)

    * Linux is required for the last step

  * each phone must be on the same network as the computer where the Fula testnet environment is running

  * a mobile ethereum compatible wallet (eg/ Metamask or Trust Wallet)

## Submitting feedback

We would love to know how it went for you!

Especially if you cannot complete any of the steps due to a bug you encountered or because you cannot satisfy the above requirements.

You can send us feedback via Github or as an [email](mailto:testnet@fx.land).

Here is some boilerplate text you can copy/paste when you are ready to send the feedback.


```
Subject: Protocol testnet alpha

Feedback Type: [ Bug | Feature Request ]

Feedback:

[ I completed all of the steps successfully.  This rocked but I have a few suggestions for the next release...]

OR

[ I was unable to complete X step(s).  The following happened when I tried to complete the step: ...]

```


If you believe the issue is happening in the Fula API then you can create an issue on the [Fula](https://github.com/functionland/fula/issues) repo and include the docker-compose server logs.

If you believe the issue has something to do with the testnet setup you can create an issue on the [testnet](https://github.com/functionland/fula-testnet/issues) repo and include the docker-compose server logs.

If you believe the issue is happening in the Fotos mobile client then you can create an issue on the [Fotos](https://github.com/functionland/fotos/issues) repo and describe what is going wrong.

If you don't know where the problem exists or don't have a Github account then please send us an [email](mailto:testnet@fx.land) and attach the server logs if you are reporting a bug.

### To output the server logs to a file

Open a terminal and enter the following in the same directory that you ran docker-compose in the previous steps.

```
  > docker-compose logs >  out.log
```

## Beware of Risks

The Functionland protocol testnet alpha pre-release includes client side encryption as a first layer of security to help prevent others from gaining access to your photos and video.

However, because the software we are delivering is fresh off the press and still not properly audited, PLEASE USE WITH CAUTION.

At this point, we recommend you not upload any highly sensitive media to the Fula testnet environment, use it as a primary backup facility or expose any of the services over untrusted networks.

## How to get started

### Fula testnet environment setup

First, you can follow the instructions [over here](https://github.com/functionland/fula-testnet) for setting up a Fula testnet environment on your host machine with Docker.

### Fotos installation

Download the latest release of Fotos from the [google play store](https://play.google.com/store/apps/details?id=land.fx.fotos) and install it.

### Testing steps

Once you have Fotos and the Fula testnet environment properly installed you can proceed with the following steps:

1.  See [here](/mvp/fotos/setup) for instructions on setting up Fotos before moving on to anything else.

2.  See [here](/mvp/fotos/backup) for instructions on backing up an image from your device to the Fula API server using Fotos.

3.  See [here](/mvp/fotos/sharing) for instructions on sharing the image with a friend.

4.  See [here](/mvp/pools/storage-provide) for instructions on how to give yourself $FULA rewards for storing a file uploaded from your Fotos application.
