- Feature Name: private-network-for-privacy
- Start Date: 2022-02-01
- RFC PR: 
- Functionland Issue: 

# Summary
[summary]: #summary

Using build-in p-net of libp2p and creating secure network for user. and isolate his private content from public ipfs 
network. we can containerize @functionland/box (ipfs + orbitdb + protocol-suite) and run:
- public  @functionland/box for sharing.
- a private @functionland/box pre user of the box.

# Motivation
[motivation]: #motivation

IPFS is built around public data and p2p networks. When you start a node it’s trying to find and connect to other peers,
so it finds more peers and content. And what you hold on your ipfs is not only accessible by others, but it's also
publicly broadcast (for purposes of content routing and peer routing) and in our protocol we also have to expose peer-id
of the user. even by using encryption we are putting user at risk. if he loses a key all his content are publicly distributed
on ipfs network. libp2p has a build in future call pnet which we can use to isolate user private data in his own network
and only uses public network for sharing and public data. 
We can also bring multi-tenancy by letting owner create network for his family member. 

# Guide-level explanation
[guide-level-explanation]: #guide-level-explanation
base on user configuration we will create a docker swarm which will run @functionland/box in private and public mode.
for creating a private @functionland/box we need to generate key and share it using docker secret.

# Reference-level explanation
[reference-level-explanation]: #reference-level-explanation



# Drawbacks
[drawbacks]: #drawbacks

the exchanging and rotation mechanism for this key is on our shoulder.

# Rationale and alternatives
[rationale-and-alternatives]: #rationale-and-alternatives


# Prior art
[prior-art]: #prior-art


# Unresolved questions
[unresolved-questions]: #unresolved-questions
- the exchanging and rotation mechanism for private key.
- we can create private network for every user of the box but does it mean we should do it?


# Future possibilities
[future-possibilities]: #future-possibilities

