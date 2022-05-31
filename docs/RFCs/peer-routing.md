# Peer Routing
- Start Date: 2022-05-31
- RFC PR: [functionland/docs/pull/113](https://github.com/functionland/docs/pull/113)
- Functionland Issue: [functionland/docs/issues/112](https://github.com/functionland/docs/issues/112)
- Status: Draft
- Authors: [Farhoud](https://github.com/farhoud),
- Reviewers: [Aaron](https://github.com/gitaaron), [Ehsan](https://github.com/ehsan6sha), [Masih](https://github.com/orgs/functionland/people/masih)


## Summary
[summary]: #summary

This RFC Will cover 
- How peers find address of each other on the network.
- How to connect node that has incompatible transport.
- How to connect node that is behind NAT.


## Problem Statement
Our initial design was to use `WebRTC-star` as our transport which has internal peer discovery and peer routing. But things changes:
- For using `IPFS-cluster` we added `go-IPFS`.
- Success Rate of webrtc is not above 80%.
- `fula-react-native` use go-libp2 which does not have `WebRTC-star` transport
- We need other transport to cover offline network. (WebRTC need to have online signaling server).

Now we need to enable all magic that libp2p has to Enable us:

### Peer discovery
Its like a dns of web2 there should be a way to get address of node by its peerID.
- `fula-react-native` addBox api should work if user only provide:
`/fula/[peerID]`
- `fula-web` need to way to work offline.

### Peer routing
- `fula-react-native` and `box` has different and incompatible transport which we can use `go-IPFS` as its relay.

