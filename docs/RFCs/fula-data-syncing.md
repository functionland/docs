# @functionland/box Syncing over IPFS-Cluster
- Start Date: 2022-03-24
- RFC PR: [functionland/docs/pull/61](https://github.com/functionland/docs/pull/61)
- Functionland Issue: [functionland/docs/issues/58](https://github.com/functionland/docs/issues/58)
- Status: Draft
- Authors: [Aaron Surty](https://github.com/gitaaron), [Farhoud](https://github.com/farhoud)
- Reviewers: [Farhoud](https://github.com/farhoud), [Ehsan](https://github.com/ehsan6sha), [Masih](https://github.com/orgs/functionland/people/masih)
## Summary

This RFC proposes usage of IPFS-Cluster in conjunction with @functionland/box. Its temporary solution until we can have
a box implementation in go-lang

## Use Case

A person owns several BOXes and they add a document to one of them.

The document immediately gets transferred over to the other BOX so that they can make use of it (ie/ perform CRUD operations on it) from either BOX.

The 'documents' being synced (for now) are:

    * plaintext (eg/ UTF-8 encoded) files

    * photos

    * video

## Out of Scope

* high-frequency updates to documents which might be encountered with multi-tenancy or recording streaming video

* data persisted by orbit db or any other dbs

## Pre-conditions
[pre-conditions]: #pre-conditions

* the owner has already authenticated themselves with each BOX

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

  * peers will probably come and go frequently in the future when data is synced with external devices (ie/ owner's computer or phone)

  * since we have full control over the document store, we can ensure the DAG is shallow (based on limitations of number of files in a directory)

  * less stable / tested conflict resolution can be tolerated for this use case

## Design
### BOX System Architecture

The following diagram illustrates how  various components on the BOX will work together to implement data syncing.


![Box System Architecture](/diagrams/fula-data-sync-architecture.png)


### Integrate IPFS-cluster with @functionland/box

@functionland/box is using js-ipfs as its file-system. we can add ipfs-cluster as service to js-ipfs ([ref](https://github.com/ipfs/js-ipfs/blob/master/docs/core-api/PIN.md#ipfspinremoteserviceaddname-options)) and let the js-ipfs be the temporary storage.
when file uploaded on the js-ipfs we can send it to cluster ([ref](https://github.com/ipfs/js-ipfs/blob/master/docs/core-api/PIN.md#ipfspinremoteaddcid-options)).
when we have to retrieve we can check local and then remote for the CID ([ref](https://github.com/ipfs/js-ipfs/blob/master/docs/core-api/PIN.md#ipfspinremotelsoptions))
and if the file is on remote get it and pass it to client.

### Docker-Compose

In order to access ipfs-cluster-ctl and ipfs from the command line, the correspondant and newsroom will be bundled in the same image as ipfs-cluster-ctl and IPFS.

A separate service will be defined for:

  * box (ipfs-js)
  
  * ipfs-node (ipfs-go)

  * ipfs-cluster-ctl

  * ipfs-cluster-service

The docker setup for the IPFS components can be followed from the  [IPFS-Cluster documentation](http://cluster.ipfs.io.ipns.localhost:8080/documentation/deployment/automations/#docker).


## Drawbacks / Future Improvements
The main drawback of this design is it will require redundant IPFS.
