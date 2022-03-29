# Private Network

- Start Date: 2022-02-01
- RFC PR: https://github.com/functionland/docs/pull/67
- Functionland Issue: https://github.com/functionland/docs/issues/63
- Status: Draft
- Authors: [Farhoud](https://github.com/farhoud)
- Reviewers: [Aaron](https://github.com/gitaaron), [Ehsan](https://github.com/ehsan6sha), [Masih](https://github.com/orgs/functionland/people/masih)


## Background
We are using IPFS as our file system. But IPFS is built to use for public data, and it does not support ACL,
So we need to find a way to keep users safe until our security layer becomes mature. And also ipfs-cluster [docs](https://cluster.ipfs.io/documentation/guides/security/#ports-overview) recommended to have a secret.

### Current Network
Our current network topology is too simple, its only base on webrtc-start and peer discovery is disabled.
#### Server
Node with roll of server is a js-libp2p node with our protocol's and server side implementations (use js-ipfs as fs) that listen on [webrtc-start](https://github.com/functionland/fula/blob/main/libraries/fula-client/src/config.ts).

#### Client
Node with the roll of [client](https://github.com/functionland/fula/tree/main/libraries/fula-client) (phone,webapp) are listening on [webrtc-start](https://github.com/functionland/fula/blob/main/libraries/fula-client/src/config.ts) and when user provide the string peer id (`B58String`) of the box with [connect](https://docs.fx.land/api/client-instance#connect-to-box) API, the api create multiAddress based on webrtc signaling server add it to libp2p peer store and keep the connection alive with the box.
also have to mention inbound connections are blocked.


## Problem Statement
We need to protect users and their data from harms and risks of public networks and also cover the [multi box scenario](https://github.com/functionland/docs/issues/58).
The public network risks are:
- Anyone on the internet can connect to the box.
- Anyone on the internet that is connected to the box can use bitswap to get data from the box.
- Peer routing and Content discovery can leak what you are doing to the public.
- deficiency in our encryption algorithm or key management can leak all user data to the public.
- clusters running without a secret may discover and connect to the main IPFS network, which is mostly useless for the cluster peers (and for the IPFS network).

## Motivation
Isolating users from public networks can help us reduce the scope of work while maintaining the usefulness of our product, and testing our security layer without putting users in harm's way.

## Proposal
We can use built-in libp2p components to create a private network with encrypted communication.
The components are:
- Libp2p built-in private network. It uses a [private shared key](https://github.com/libp2p/js-libp2p/tree/master/src/pnet#private-shared-keys) for creating an isolated network with encrypted communication.
  - [spec](https://github.com/libp2p/specs/blob/master/pnet/Private-Networks-PSK-V1.md)
  - [js-doc](https://github.com/libp2p/js-libp2p/tree/master/src/pnet)
- Libp2p bootstrap for bootstrapping the network of boxes:
  - [js-doc](https://github.com/libp2p/js-libp2p-bootstrap)

In this way when a node comes online, Libp2p uses the key and the list of other node's to join the network.

## Scope of work
### Box
For box setup users provide an environment variable `FULA_NET_SECRET` which they should remember. and provide a list of node as `config.json`

### FULA-Client
user calls `createClient` they should also provide the secret they used for setting up the boxes. and when he calls `connect` it should pass the list of string peerId's


## Implementation
The box and client already support private-key but need to add test and fixes namings.
### Box
In the [Config](https://github.com/functionland/fula/blob/main/apps/box/src/config.ts) we should change the name `PKEY` to `FULA_NET_SECRET`

We need to add [`js-libp2p-bootstrap`](https://github.com/libp2p/js-libp2p-bootstrap)  and
In the [Config](https://github.com/functionland/fula/blob/main/apps/box/src/config.ts) we should add to support to load `config.json` in this format:

```json
{
 "nodes": [
   "/ip4/104.131.131.82/tcp/4001/ipfs/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ",
   "/dnsaddr/bootstrap.libp2p.io/ipfs/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN",
   "/dnsaddr/bootstrap.libp2p.io/ipfs/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa"
 ]
}
```
Which will be used for creating `js-libp2p-bootstrap` [config](https://github.com/libp2p/js-libp2p-bootstrap).


### FULA-client
In [fula-client](https://github.com/functionland/fula/blob/main/libraries/fula-client/src/index.ts) We have to change pkey to fulaSecret so:
```ts
createClient(config?: Partial<Libp2pOptions & constructorOptions>, pKey = undefined): Promise<Fula>
```
to
```ts
createClient(config?: Partial<Libp2pOptions & constructorOptions>, fulaSecret = undefined): Promise<Fula>
```
and change connect interface to get a list of peerId`s from:
```
connect: (peerId: string) => Connection
```
to
```
 connect: (peerId: [string]) => Connection
```

We need to change [`Connection`](https://github.com/functionland/fula/blob/main/libraries/fula-client/src/connection.ts) in the way that:
- Connection `Status`
  - If we connect to at least one box we are `Online`.
  - When we are not connected to any box and try to connect we are at `Connecting`.
  - When connection fails to all the serverPeerIds we Are `Offline`.
- Connection should have a list of `serverPeerId`.
- Connect to all the `serverPeerId` and keep the connection alive.



## Case Study
For dogfooding of new changes we can use a copy of [react-gallery](https://github.com/functionland/fula/tree/main/examples/react-gallery) and change
the [`BoxConfig`](https://github.com/functionland/fula/blob/main/examples/react-gallery/src/components/BoxConfig.jsx)
to get list of comma seperated peerIds and [`App`](https://github.com/functionland/fula/blob/main/examples/react-gallery/src/App.js) should change to pass the list of peerId's to fula-client.

Note: if example repo would be outside mono-repo we can just use branch for describing every functionality.


## Alternative approaches
### VPN
Using VPN for creating the private network.

Disadvantage:
- It adds another point of failure to the system.
- It is also not that decentralized.






