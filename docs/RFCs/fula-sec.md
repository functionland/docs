# FULA Security Layer
- Start Date: 2022-02-27
- RFC PR: [functionland/docs/pull/74](https://github.com/functionland/docs/pull/74)
- Functionland Issue: [functionland/docs/issues/65](https://github.com/functionland/docs/issues/65)
- Status: Draft
- Authors: [Jamshid](https://github.com/ruffiano89)
- Reviewers: [Masih](https://github.com/orgs/functionland/people/masih), [Aaron](https://github.com/gitaaron)


<!-- OVERVIEW -->
## Overview

Authentication and encrypted data storage are the main structural elements for decentralized networks and Web3 applications. By default, IPFS does not encrypt the data persisted to it.  This means that if someone has a [CID](https://docs.ipfs.io/concepts/content-addressing/), they can access the data without the author's permission.  The fula-sec layer aims to solve this, so that data owners can have full control over how their data is accessed.

The fula-sec layer is broken down into the following fundamental building blocks:

- [X] [Decentralized Identity (DID)](./fula-sec/did.md)
- [X] [Encryption](./fula-sec/encryption.md)
- [ ] Box Authentication


## What Security Protocols Implemented

We aim not only to encrypt the data, but also to verify its valid data and use a key exchange mechanism. The key exchange mechanism remains the DID (Decentrilized Identity) mechanism. In the table below, you can see which algorithm was used for what purpose.

|         Keyword       |           Objective               |   Description                         |
|----------------|-------------------------------|-----------------------------|
|Ed25519		 | `Used to obtain user Identity`  |Edwards-curve Digital Signature Algorithm(EdDSA)            |
|AES          |`Used by the client side to encrypt each content. The keys are shared only by authorized audience. The keys are not given to audience in a straightforward manner, of course.`            |Advanced Encryption Standard Algorithm (AES)           |
|JWS         |`JWS includes the Signing option. It has two method sign the payload and verify a signed data. `|A JSON Web Signature (abbreviated JWS) is an IETF-proposed standard (RFC 7515) for signing arbitrary data.|
|JWE         |`An encrypted JWE object for one or multiple DIDs.`|JSON Web Encryption (JWE) is an IETF standard providing a standardised syntax for the exchange of encrypted data, based on JSON and Base64.|
|RSA         |`RSA involves a public key and a private key. The public key can be known by everyone and is used for encrypting messages. The intention is that messages encrypted with the public key can only be decrypted by using the private key.`|Rivest–Shamir–Adleman.|


## Unresolved questions
- Content Access Revoke
- Storing DID document in L3 blockchain

## Future possibilities
- A box owner can associate multiple peer addresses with a DID.
