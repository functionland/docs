---
title: "IPFS Pinning Service API"
id: ipfs-pinning-service-api
slug: "ipfs-pinning-service-api"
excerpt: ""
hidden: false
createdAt: "Fri JUN 28 2024 15:02:42 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri JUN 28 2024 18:39:16 GMT+0000 (Coordinated Universal Time)"
---
<Note>Not to be confused with the Fula API, the Pinning Service API allows you to create a link between your local IPFS node and Functionland Fula Network</Note>

## IPFS Pinning Services API Spec Compatibility

The [IPFS Pinning Services API Spec](https://ipfs.github.io/pinning-services-api-spec/) is a standardized specification for developers building on top of IPFS that allows an application to integrate a pinning service without needing to learn that pinning service's unique API. 

### Introduction

Functionland Fula network is the only available true decentralized network for pinning ipfs data. It currently includes 900 globally distributed nodes. These nodes are individually owned and are rewarded using Fula blockchain based on the storage they provide. Since it is an open network, anyone can join and start providing the service and earns. For more information please visit https://fx.land

<img style={{ width: '100%', borderRadius: '0.5rem'}} src="https://fx.land/igg%20sales%20map.png" />

### Endpoints

Functionland Fula users looking to utilize the IPFS Pinning Services API can do so from our dedicated API endpoint:

`https://api.cloud.fx.land`


### Authentication

To authenticate with Functionland through the Pinning Services API spec, you'll first need to have an `accessToken`. You can create this API token on the [Fula Cloud Page](https://cloud.fx.land/) (FREE 20GB pinning!)

If you ever revoke the API key, it will no longer be valid for authenticating to the Pinning Services API.

**Configuring Functionland Fula in the IPFS Desktop App**

If you are running the IPFS desktop app, you can configure your pinning service of choice within the user interface. To do so, open the app, go to your Preferences, then click Add Service: 

<img style={{ width: '100%', borderRadius: '0.5rem'}} src="https://bafybeidvzrjgjigmagzlan77hzpqbxpdc3ixount6v4y3ojcbja3e2ol3a.ipfs.dweb.link/" />

Select Functionland as the pinning service, and then configure with your secret access token (JWT): 

<!-- Image -->

From there you can upload files and have the option to pin locally as well as remotely to Functionland Fula network! 


### Configuring Functionland Fula in the IPFS CLI

You can also pin to Functionland Fula directly from the IPFS CLI using the `ipfs` command.

To add Functionland Fula credentials, use the following command (where YOUR\_JWT is the JWT token described in the “Authentication” section above):

```bash
ipfs pin remote service add functionland https://api.cloud.fx.land YOUR_JWT
```

To pin a CID to Functionland Fula under a human-readable name:

```bash
ipfs pin remote add --service=functionland --name=war-and-peace.txt bafybeib32tuqzs2wrc52rdt56cz73sqe3qu2deqdudssspnu4gbezmhig4
```

To list successful pins:

```bash
ipfs pin remote ls --service=functionland
```

To list pending pins:

```bash
ipfs pin remote ls --service=functionland --status=queued,pinning,failed
```

For more commands and general help:

```bash
ipfs pin remote --help
```
