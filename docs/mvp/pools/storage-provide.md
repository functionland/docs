---
title: Providing Storage
id: storage-provide
---

# Providing Storage

## Acceptance Criteria

You see your balance increase on the [chain explorer](https://explorer.testnet.fx.land/#/explorer) after uploading a file to your node using Fotos.

## Preconditions

1. You are a running a [fula testnet](https://github.com/functionland/fula-testnet#setup) environment.

2. You have already [set up Fotos](../fotos/setup) and connected it to your Box running in the fula testnet environment.

## Steps

Here is a video demonstrating the following steps.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VK2R3yvQEsM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

1.  In the Fotos app, tap on a photo to enter browse mode and tap the 'upload to cloud' icon in the top right.

2.  [Take note](https://github.com/functionland/fula-testnet#find-the-cid-for-files-uploaded-via-the-fula-file-api) of the CID for the file that you just uploaded.

3.  [Add](https://github.com/functionland/fula-testnet#ensure-the-file-you-added-is-part-of-ipfs-mfs) the file you uploaded to your IPFS node's MFS (so that it can be found by the proof engine).

4.  [Take note](https://github.com/functionland/fula-testnet#find-your-account-id) of your Account ID.

5.  Let the proof engine know that you are storing the file by [creating](https://github.com/functionland/fula-testnet#upload-a-manifest) a new manifest for the file you just uploaded.

6.  [Restart](https://github.com/functionland/fula-testnet#restart-the-proof-engine) the proof engine to ensure it picks up the latest manifest.

7.  [See that your balance has increased](https://github.com/functionland/fula-testnet#viewing-your-rewards) either by viewing the proof engine logs from docker-compose or by looking for your account in the chain explorer.
