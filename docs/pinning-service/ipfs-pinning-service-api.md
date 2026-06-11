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

## Pinning a DAG (recursive pinning)

<Note>In the IPFS Pinning Service API, **pinning a CID is recursive DAG pinning**. There is no separate "DAG pin" operation and no recursive flag — every pin request pins the *entire* DAG rooted at the CID.</Note>

The [IPFS Pinning Services API Spec](https://ipfs.github.io/pinning-services-api-spec/) defines the `cid` of a pin as:

> Content Identifier (CID) points at the root of a DAG that is pinned recursively.

So when you pin `bafybeib32…` (a file, a directory, or any IPLD/UnixFS DAG root), Functionland Fula retrieves and pins **every block reachable from that root**. A single CID is all you need to pin an arbitrarily large DAG — the commands in the previous section (`ipfs pin remote add …`) are already performing recursive DAG pins.

How the service obtains the DAG (per the standard): after you submit a CID, the service finds providers for the involved CIDs across the IPFS network — optionally helped by the `origins` hints you supply — and downloads the DAG over Bitswap. This is why a pin you just created starts in `queued`/`pinning` and only becomes `pinned` once the whole DAG has been fetched.

## Standard REST API

The `ipfs` CLI above is a convenience wrapper over the standard REST endpoints. You can call them directly against `https://api.cloud.fx.land` with your access token as a bearer credential. Functionland Fula implements the full IPFS Pinning Services API spec.

| Operation | Endpoint | Description |
|---|---|---|
| Add pin | `POST /pins` | Request a recursive DAG pin for a CID |
| List pins | `GET /pins` | List/filter pin objects (by `cid`, `name`, `status`, `before`/`after`, `meta`) |
| Get pin | `GET /pins/{requestid}` | Check the status of one pin request |
| Replace pin | `POST /pins/{requestid}` | Atomically remove + re-add (avoids GC of blocks common to both pins) |
| Remove pin | `DELETE /pins/{requestid}` | Remove a pin object |

All requests send `Authorization: Bearer YOUR_JWT`.

**Create a pin (recursive DAG pin):**

```bash
curl -X POST "https://api.cloud.fx.land/pins" \
  -H "Authorization: Bearer YOUR_JWT" \
  -H "Content-Type: application/json" \
  -d '{
        "cid": "bafybeib32tuqzs2wrc52rdt56cz73sqe3qu2deqdudssspnu4gbezmhig4",
        "name": "war-and-peace.txt"
      }'
```

The **Pin** object you send accepts: `cid` (required — the DAG root), `name` (optional label), `origins` (optional multiaddrs the service should try first to fetch the data), and `meta` (optional string-to-string key/value metadata).

The service responds with a **PinStatus** object:

```json
{
  "requestid": "UniqueIdOfPinRequest",
  "status": "queued",
  "created": "2024-06-28T15:02:42Z",
  "pin": {
    "cid": "bafybeib32tuqzs2wrc52rdt56cz73sqe3qu2deqdudssspnu4gbezmhig4",
    "name": "war-and-peace.txt"
  },
  "delegates": ["/dnsaddr/.../p2p/Qm..."],
  "info": {}
}
```

**Pin lifecycle:** `queued` → `pinning` → `pinned` (or `failed`). Poll `GET /pins/{requestid}` until the status settles:

```bash
curl "https://api.cloud.fx.land/pins/UniqueIdOfPinRequest" \
  -H "Authorization: Bearer YOUR_JWT"
```

**List your pins.** `GET /pins` returns a paginated `PinResults` object — a `count` of total matches plus a `results` array of `PinStatus` objects. To page through more than one batch, pass the `before` filter with the `created` timestamp of the oldest item you've seen:

```bash
curl "https://api.cloud.fx.land/pins?status=pinned&limit=10" \
  -H "Authorization: Bearer YOUR_JWT"
```

```json
{ "count": 42, "results": [ { "requestid": "…", "status": "pinned", "pin": { "cid": "…" } } ] }
```

To speed up the transfer when your own node already has the data, put your node's multiaddrs in `origins`, and pre-connect to the peers returned in the response's `delegates` array (see [Provider hints](https://ipfs.github.io/pinning-services-api-spec/#section/Provider-hints) in the spec).

## Importing a DAG by uploading a CAR file

<Note>This is a **Functionland extension**, not part of the IPFS Pinning Service API standard. The standard is pin-by-CID only and has no data-upload endpoint — it assumes the DAG can be fetched from the network. CAR import fills the gap when the data exists **only on your machine** and no other peer is providing it yet.</Note>

The same content-addressed convention used by [web3.storage](https://web3.storage), NFT.storage and Filebase: you package your DAG as a [CAR (Content Addressable aRchive)](https://ipld.io/specs/transport/car/) file and upload it; the service imports the blocks and recursively pins the root CID to your account.

**1. Export your DAG to a CAR file** (using your local IPFS/Kubo node):

```bash
# Pin or add your data locally first, then export its DAG to a CAR:
ipfs dag export bafybeib32tuqzs2wrc52rdt56cz73sqe3qu2deqdudssspnu4gbezmhig4 > data.car
```

**2. Upload the CAR** to the import endpoint (multipart `file`, optional `name`):

```bash
curl -X POST "https://api.cloud.fx.land/pins/import/car" \
  -H "Authorization: Bearer YOUR_JWT" \
  -F "file=@data.car" \
  -F "name=my-dataset"
```

The service validates the CAR, imports its blocks into the Fula network, and recursively pins the root. It returns the same **PinStatus** object as `POST /pins` (with `status: "queued"`), so you track it the same way via `GET /pins/{requestid}` until it becomes `pinned`. Re-importing a CAR whose root you already have simply returns your existing pin.

**Requirements and limits:**

- **Single root** — the CAR must have exactly one root CID (the DAG that gets pinned). Multi-root CARs are rejected.
- **Complete DAG** — every block referenced by the DAG must be present in the CAR. A partial DAG is rejected (it could never finish pinning).
- **Formats** — CARv1 and CARv2 are both accepted (the `ipfs dag export` default is CARv1).
- **Integrity** — every block's bytes are verified against its CID on the way in.
- **Size** — up to 800 MB per CAR by default; blocks above 2 MiB are rejected.
- **Quota** — the imported DAG counts against your storage quota; an import that wouldn't fit your plan is rejected up front with `402`.

**Error responses:** `400` invalid CAR (bad/truncated, hash mismatch, zero or multiple roots, missing blocks, unsupported codec, oversized/over-deep block); `402` insufficient storage credit; `413` CAR larger than the allowed maximum; `429` too many concurrent imports. The response body carries the specific reason.
