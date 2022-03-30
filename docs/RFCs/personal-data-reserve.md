# Personal Data Reserve
- Start Date: 2022-03-18
- RFC PR: [functionland/docs/pull/61](https://github.com/functionland/docs/pull/61)
- Functionland Issue: [functionland/docs/issues/58](https://github.com/functionland/docs/issues/58)
- Status: Draft
- Authors: [Aaron Surty](https://github.com/gitaaron),
- Reviewers: [Farhoud](https://github.com/farhoud), [Ehsan](https://github.com/ehsan6sha), [Masih](https://github.com/orgs/functionland/people/masih)

## Summary
[summary]: #summary

This RFC covers how a Box customer's data can be replicated across a group of Boxes physically separated from each other to help prevent unwanted loss.

## Use Case
[use-case]: #use-case

A person owns 3-5 Boxes (eg/ one in their home, one at their office and one at a friend's house).

Their basement floods bricking the one located in their home.

They are still able to access all of the data that was uploaded to their bricked home Box from one of their other Boxes or a brand new Box provisioned with factory settings.

The following scenarios are handled:

  * adding a new Box to the reserve

  * removing a Box from the reserve

  * data becomes corrupted on a Box


## Terminology
[terminology]: #terminology

| Name                 | Definition                                                                                                                                                    |
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| reserve              | a group of keepers collaboratively working together to back up a snapshot                                                                                     |
| snapshot             | a collection of data that represents the entire file system being backed up at a given moment in time                                                         |
| chunk                | a portion of a data set                                                                                                                                       |
| keeper               | a Box process responsible for backing up a file system to the reserve                                                                                         |
| retriever            | a Box process given the task of rebuilding a usable file system from a snapshot                                                                               |
| author               | the Box where the backed up data set was created                                                                                                              |
| peer                 | a member of the reserve                                                                                                                                       |
| replication factor   | how many keepers a chunk of data is stored on; a greater replication factor means greater resilience                                                          |
| data set             | a file, directory, or data from a database                                                                                                                    |
| warning time window  | how much time should be given to send an alert before an imminent limitation is encountered and a system failure occurs                                       |



## Pre-conditions
[pre-conditions]: #pre-conditions

* the owner has already authenticated themselves with each Box

* the fula-api is persisting data to a disk accessible by the keeper

* each Box is already provisioned with the necessary configuration info required to operate a reserve

## Assumptions

* each keeper in a reserve can be trusted to not operate maliciously by performing unwanted delete operations

* the data being backed up is:
  * multimedia files  such as photos and video
  * [orbit db](https://orbitdb.org/) metadata 
  * plain text files for shared configuration data

## Out of Scope

* high-frequency updates to data sets which might be encountered with multi-tenancy or recording streaming video

* syncing of data between Boxes so that it is usable on each Box (eg/ CRUD operations on them in real time)

* conflicts arising from concurrent updates initiated by a user on several different Boxes

* heuristics used to minimize bandwidth and improve availability

## Limitations
[limitations]: #limitations

The following limitations may be encountered while operating a reserve:
* file size
* number of files in a directory
* snapshot size
* number of keepers in a reserve

## Configuration
[configuration]: #configuration

Configuration data for each peer can be split into local and shared.

### Local Configuration

  * local Box address

  * local public/private key

### Shared Configuration

  * remote Box addresses of other peers in the reserve

  * shared secret

  * minimum acceptable replication factor

  * 'normal' event dispatching frequency

  * warning time window
    * has a global default as well as an override for each limitation

## Conflict Resolution
[conflict-resolution]: #conflict-resolution

Although it can be assumed the snapshot is already free from conflicts caused by concurrent updates initiated from a user, conflicts may still arise from disk corruption or other unforseen keeper errors.

The disputing keepers will take the appropriate steps to resolve the conflict.  If an appropriate resolution can not be achieved, an event is  raised.

## Events
The following events are dispatched for an administrative UI.

  * limitation imminent

  * limitation encountered

  * keeper health
    * memory
    * disk I/O
    * CPU usage
    * disk corruption

  * unresolved conflict

  * unacceptable replication factor

  * keeper added / removed

  * network disruption

### Event Types
  * normal
  * warning
  * failure

### Warnings

Events dispatched before a failure occurs based on a forecasting heuristic to determine how quickly a limit will be reached.

### Event Frequency

Normal events are dispatched periodically (based on a config param) for historical reporting and warnings|failures are dispatched immediately.

## Implementation
[reference-level-explanation]: #reference-level-explanation

### Components

The components that are needed for this use case are:

  * data set keeper

  * data set retriever

  * event dispatcher

  * file integrity monitor

### Event Dispatcher

A mechanism for dispatching events and queueing them to prevent loss if a peer goes down.

### File Integrity Monitoring

For detecting / handling disk corruption.

A full sweep of the file system is periodically done comparing the contents of chunks on disk with a source of truth.


### Network Architecture

A peer-peer architecture is used over master/slave so that if a single Box goes down the rest of the reserve will still be able to operate normally.

  * any shared config data is stored on each Box

  * any shared state required for the retrieval of a data set is stored on each Box

  * no central servers are used for networking


## Drawbacks
[drawbacks]: #drawbacks
Putting the responsibility of data reliability on Box owners means there is potential for a Box owner to make a mistake and permanently lose their data.

## Rationale and alternatives
[rationale-and-alternatives]: #rationale-and-alternatives
An alternative could be to use paid services (cloud storage providers) with their own SLAs to take on the responsibility of data reliability.

If participating in a decentralized storage network (DSN), the Box owner could also purchase a mining component to offset their cost.

There are currently a few drawbacks with this:

  * becoming a storage miner requires a significant upfront investment to cover hardware and staking costs

  * a private reserve will always be more efficient since keepers will not have to worry about the overhead of trusting each other

These options are not mutually exclusive.  Offering both options (free and paid) could provide the greatest freedom/flexibility for Box owners.

## Dependencies

  * [IPFS Cluster](https://cluster.ipfs.io/)

  * private connections

  * authentication

  * retriever

  * keeper

@TODO - provide links to relevant docs

## Unresolved questions
[unresolved-questions]: #unresolved-questions

What is an ideal replication factor?

How can resilience be measured? Markov models?

How can contents of an entire filesystem be efficiently compared with a source of truth?

How can system resources and their limits be calculated?

How can NAT hole punching work in a pnet without any relays?

Should data compression be taken into account?

## Future Possibilities
[future-possibilities]: #future-possibilities

### History

Storing a history snapshots so an owner can go back in time and recover a data set from a previous state.  This could help with data loss due to user errors.

### Regions

A person or group of people may have a large number of Boxes and want to set up geographically grouped regions such that if there is a severe network outage, each region will still be able to recover the entire contents of a snapshot.

