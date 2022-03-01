- Feature Name: replication
- Start Date: 2022-02-01
- RFC PR:
- Functionland Issue:

# Summary
[summary]: #summary

When user set up his box he should join/create a public/private pool. 
in every pool user will pin their data for High availability and replication. and get fula token for keeping the pinset alive. 

# Motivation
[motivation]: #motivation

- user can mine fula and use app's and other futuers.
- user can have HA on his/her data.

# Guide-level explanation
[guide-level-explanation]: #guide-level-explanation
- there is node call validator that run's on the box and try to keep the pinset alive.
- the validator use fula-file-protocol to stream pinned data to functionland/box container which keeping the pools data.
- the validator can get the proof that the data stored and get to consensus of cluster pinset state.

# Reference-level explanation
[reference-level-explanation]: #reference-level-explanation



# Drawbacks
[drawbacks]: #drawbacks


# Rationale and alternatives
[rationale-and-alternatives]: #rationale-and-alternatives


# Prior art
[prior-art]: #prior-art
- [ipfs-cluster](https://cluster.ipfs.io/documentation/deployment/architecture/)
- [file-coin](https://spec.filecoin.io/)

# Unresolved questions
[unresolved-questions]: #unresolved-questions



# Future possibilities
[future-possibilities]: #future-possibilities

