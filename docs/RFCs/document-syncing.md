# Document Syncing
- Start Date: 2022-03-24
- RFC PR: [functionland/docs/pull/61](https://github.com/functionland/docs/pull/61)
- Functionland Issue: [functionland/docs/issues/58](https://github.com/functionland/docs/issues/58)
- Status: Draft
- Authors: [Aaron](https://github.com/gitaaron),
- Reviewers: [Farhoud](https://github.com/farhoud), [Ehsan](https://github.com/ehsan6sha), [Masih](https://github.com/orgs/functionland/people/masih)

## Summary

This RFC proposes usage of `IPFS-Cluster` in conjunction with a `Correspondant` and `Newsroom` component to sync files and folders across several devices.

## Use Case

A Box owner would like to sync the meeting notes on their desktop with other meeting participants in real time.

They run a command and provide instructions for other participants to download the document.

Each participant is able to download and edit the meeting notes and see updates from others in real time.


## Out of Scope

* high-frequency updates to documents which might be encountered with multi-tenancy or recording streaming video

* data persisted by orbit db or any other dbs

## Pre-conditions
[pre-conditions]: #pre-conditions

* each participant's device in the meeting is accessible from the others

      EITHER

      * they have a public static IP 

      OR

      * NAT hole punching works AND there are relays available to help establish connectivity

## Design Considerations

### IPFS-Cluster

A properly configured ipfs-cluster provides most of the properties required to implement this use case including.

  * a private network of trusted peers

  * conflict resolution

  * notifying peers of changes

  * efficient transmission of data

  * providing peer pinning status

### Conflict Resolution

IPFS Cluster provides [two choices](https://cluster.ipfs.io/documentation/guides/consensus/) for conflict resolution.

CRDT will be used because:

  * it utilizes 'GossipSub' which will probably be useful for future use cases related to replication.

  * it does not require > 50% of peers to be online in order to operate

  * 'follower' peers might be used in the future to provide 'read-only' access

  * 'trusted peers' might be used in the future to provide access control

  * peers will probably come and go frequently (ie/ someone needs to drop from the meeting)

  * since we have full control over the document store, we can ensure the DAG is shallow (based on limitations of number of files in a directory)

  * less stable / tested conflict resolution can be tolerated for this use case

## Design
### Box System Architecture

The following diagram illustrates how  various components on the Box will work together to implement data syncing.

There are two new components introduced:

  * correspondant

  * newsroom

<p align="center">
  <img alt="Box System Architecture" src="https://raw.githubusercontent.com/functionland/docs/246391d247fb301351e483594037135d2b3e03d3/static/diagrams/BOX-data-sync-architecture.png"/>
  <p align="center">Box System Architecture</p>
</p>


### System Properties

  * peers should not enter a recursive loop with each other by notifying authors of updates that originated from them

  * each program should be reentrant in the sense that they can be aborted at any point during execution then restarted

     * the shared state will be updated to reflect the latest changes to the file system


### Correspondant

The role of the correspondant is to ensure IPFS-Cluster is pinning the latest files created and updated on the author's file system.

When the root CID of the file system changes it should also unpin the old one so that the garbage collector can remove deleted files.

A watch (with debounce) of the filesystem is used instead of an interval timer for the event loop since it will enable changes to be corresponded immediately without consuming resources unnecessarily.

#### Correspondant Flow State

<p align="center">
  <img alt="Correspondant Flow Chart Implementation" src="https://raw.githubusercontent.com/functionland/docs/246391d247fb301351e483594037135d2b3e03d3/static/diagrams/data-sync-correspondant.png"/>
  <p align="center">Correspondant Flow Chart Implementation</p>
</p>

#### Newsroom Flow State

<p align="center">
  <img alt="Newsroom FLow Chart Implementation" src="https://raw.githubusercontent.com/functionland/docs/246391d247fb301351e483594037135d2b3e03d3/static/diagrams/data-sync-newsroom.png"/>
  <p align="center">Newsroom FLow Chart Implementation</p>
</p>


### Docker-Compose

In order to access ipfs-cluster-ctl and ipfs from the command line, the correspondant and newsroom will be bundled in the same image as ipfs-cluster-ctl and IPFS.

A separate service will be defined for:

  * newsroom

  * correspondant

  * IPFS

  * ipfs-cluster-ctl

  * ipfs-cluster-service

The docker setup for the IPFS components can be followed from the  [IPFS-Cluster documentation](http://cluster.ipfs.io.ipns.localhost:8080/documentation/deployment/automations/#docker).

The IPFS components should be listed as a dependency of the correspondant and newsroom.

## Future 

### Performance Optimizations

* a scheduler might be used to prioritize fula-api latency over syncing

* since the correspondant knows what file/folder changed, it might rebuild the DAG bottom up instead of top down

* further research needs to be put into how `ipfs get` works to see if entire contents of the DAG are copied to `/fx` or only the parts that change

  * if the former is true, since we know the old DAG, we could walk them both ourselves skipping the CIDs that are the same

  * this may be necessary for handling removal of files anyway

### Connectivity Research

The main goal is to remove the connectivity pre-condition from this use case so it will work from any device over the vast majority of network topologies.

The following issues are related to this:

  * [research: fula-client overcoming NAT to reach fula-api](https://github.com/functionland/docs/issues/28)

  * [research: public/private relays availability](https://github.com/functionland/docs/issues/72)

### Possibilities
[future-possibilities]: #future-possibilities

#### Data types

Although this use case is focused on syncing plaintext (eg/ UTF-8 encoded) files it [could also](https://github.com/functionland/docs/issues/71) cover other documents that `IPFS` and `IPFS-Cluster` handles well out of the box such as photos and video.

#### Person-person Collaboration

With the addition of an authentication and ACL layer:
  * two different Box owners could share a document with each other and perform real-time edits on it.  They might add a third person as reviewer with read-only access

  * a group of people might create a shared album where certain members have the ability to upload photos and others are only allowed to view them (or vice versa)


