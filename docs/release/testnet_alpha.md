# Testnet Alpha Pre-release

Last updated:  June 20, 2022

## What is it?

The testnet alpha pre-release includes the Fotos mobile application and some of the Box components that will be pre-installed on Box customer's raspberry Pis when they are shipped.

### Please note

Fotos is currently only released on Android.  If you are running iOS and would like to start testing it out then please let us know at [@TODO include support contact](https://community.fx.land/support) page.

## What to expect

Once you have everything setup you should have two Boxes talking to each other running on your host machine.  You should be able to upload your media using Fotos from your mobile phone to one of the Boxes encrypted with a key from your own wallet.

You can then go ahead and run the web gallery sample app to verify that the photos are in fact synced to both Boxes and that you are able to view them on a different device.

## Caveat Emptor

The Functionland testnet alpha release includes client side encryption as a first layer of security to help prevent others from gaining access to your photos and video.

However, because the software we are delivering is fresh off the press and still not properly audited, PLEASE USE WITH CAUTION.

At this point, we recommend you not upload any highly sensitive media to the Box or use it as a primary backup facility.

## How to get started

### Box Setup

First, you can follow the instructions [over here](https://github.com/functionland/fula/tree/v0.6.1/apps/cluster) for setting up a local swarm on your host machine with Docker.

### Fotos Setup

Once you have verified the Boxes are running and connected from the logs you can install Fotos and configure it to connect to Box0.

First, download Fotos from the [app center](https://install.appcenter.ms/orgs/fx.-land/apps/photos/distribution_groups/public%20testers/releases/17) and install it.

Next open Fotos and [@TODO insert info on finding the Box address]

## Have an idea or feature request?

We would love to hear back from you on any ideas or things you would like to see in our next release.

1.  Start a discussion in our [Discourse community](https://community.fx.land).

2.  Create an issue on one of the Functionland repos.

  * [Fotos issues](https://github.com/functionland/fotos/issues)

  * [Fula issues](https://github.com/functionland/fula/issues)


## Submitting a bug report

If you encounter a bug or anything strange that is happening with the Box components then please create an issue on the [fula](https://github.com/functionland/fula/issues) repo and include the docker-compose server logs.

To output the server logs to a file:

```
  > docker-compose logs >  out.log
```

Then you can attach the file by dragging it onto the issue when you create it.

## Get involved with development

If you are a developer and would like to get involved helping us then we would love to hear from you!  The best way to do that is send an email to [@TODO insert dev intake here]
