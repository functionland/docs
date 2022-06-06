# Peer Routing
- Start Date: 2022-05-31
- RFC PR: [functionland/docs/pull/113](https://github.com/functionland/docs/pull/113)
- Functionland Issue: [functionland/docs/issues/112](https://github.com/functionland/docs/issues/112)
- Status: Draft
- Authors: [Farhoud](https://github.com/farhoud),
- Reviewers: [Aaron](https://github.com/gitaaron), [Ehsan](https://github.com/ehsan6sha), [Masih](https://github.com/orgs/functionland/people/masih)


## Summary
[summary]: #summary

This RFC Will Cover Peer Discovery and Peer Routing,In simple explanation how we find address of box after that find a route in p2p network and establishing connection.


## Problem Statement
- Find address of node from peer id.
- We have Libp2p with Incompatible transport. 
- Most of our boxes will install behind NAT with dynamic IP address (Home Network Environment) and we promised our users zero config Box installation.

## Motivation
Our initial design was to stick to `JS-Libp2p` and use `WebRTC-star` as our transport which has internal peer discovery and peer routing. But things changed:
- For using `IPFS-cluster` we added `go-IPFS` as FS layer of `Box`.
- Success Rate of webrtc is not above 80%. [ref](https://github.com/functionland/docs/issues/28)
- `fula-react-native` uses `go-libp2p`.
- Box should work in offline environment. (`WebRTC-star` need a signaling server)



## Use Cases
- Box should be able to handle nat-traversal automatically.
- `fula-react-native` addBox api should work with `/fula/[peerID]`
- Box should work in offline environment.
- `fula-react-native` and `box` has different and incompatible transport which we can use `go-IPFS` as its relay.


## Action Items
We will enable all that libp2p has to overcome above use cases.
- Go-IPFS in Box should be Mandatory and Delegate Box DHT to go-ipfs.
- Enable all the available transport both on JS and go.
- Enable all the NAT Traversal tooling in libp2p [NAT traversal tracking issue](https://github.com/libp2p/specs/issues/312).
- Use DHT in client for resolving address.
- Having our own bootstrap node.

## Implementing
Most of our work is configuration. and using peer routing api in our client.

### Box 
For box usage of go-ipfs should be mandatory and for optimizing performance we delegate peer-routing to go-ipfs ([ref](https://github.com/libp2p/js-libp2p-delegated-peer-routing)). also enable the relay and nat.We have encounter some error's in some environments when enabling NAT so it should be smart and if error happens disable it.
we need another mechanism for box to check if its offline or online. (libp2p break if you listen on inaccessible signalling server)
Try to use MDNS if its offline and if the environment let it.
also enable the relay.

### go-ipfs
Enable auto relay.


### Fula client
Use libp2p peer routing for resolving peer address and routing.

#### JS
In js we should change `fula-client/src/connection.ts`.
- Use PeerStore instead of local array
- Use peer routing API.
- connect api in js should change to accept multi address so if no automatic peer discovery available user can do it manually:
- `/fula/[peerId]`
- `/ip4/127.0.0.1/tcp/4002/p2p/12D3KooWGrkcHUBzAAuYhMRxBreCgofKKDhLgR84FbawknJZHwK1`


#### go
- add peer routing 
- addBox api should accept `/fula/[peerId]`


### Fula Infrastructure
- Bootstrap nodes with public address
- Signalling server for WebRtc

## Future Possibilities
- Delegate client dht to some node in Fula Infrastructure. (Reduce resource consumption)
- Create a HA proxy for dht delegation so we can also add box
as dht if they are available
- Add rendezvous 

## Related Issue
- [functionland/fula/issues/129](https://github.com/functionland/fula/issues/129)
- [functionland/fula/issues/193](https://github.com/functionland/fula/issues/193)
- [functionland/docs/issues/28](https://github.com/functionland/docs/issues/28)