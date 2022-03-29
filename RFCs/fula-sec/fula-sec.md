Feature Name: fula-sec

Start Date: 27.02.2022

# FULA SECURITY LAYER

## Summary
**Authentication and encrypted data storage are the main structural elements for Decentralized network and Web3 applications. IPFS keeps the data open state, which means that if someone has a CID, they can have the data without the author's permission. Therefore, we aim to develop fula-sec in this project from a security point of view, not to have access to data without the permission of the author.**

## Motivation

By implementing security layer into the Fula protocol, the owner can decide with whom to share data, give access, and store encrypted data. The data owner stores the following structure in the metadata (for example: owner, grant, access time) to share data with multiple users, and the Fula security model checks if other users have access to the data which is published by the data owner.


## What Security Protocols Implemented

We aim not only to encrypt the data, but also to verify its valid data and use a key exchange mechanism. The key exchange mechanism remains the DID (Decentrilized Identity) mechanism. In the table below, you can see which algorithm was used for what purpose.

|         Keyword       |           Objective               |   Description                         |
|----------------|-------------------------------|-----------------------------|
|Ed25519		 | `Used to obtain user Identity`  |Edwards-curve Digital Signature Algorithm(EdDSA)            |
|AES          |`Used by the client side to encrypt each content. The keys are shared only by authorized audience. The keys are not given to audience in a straightforward manner, of course.`            |Advanced Encryption Standard Algorithm (AES)           |
|JWS         |`JWS includes the Signing option. It has two method sign the payload and verify a signed data. `|A JSON Web Signature (abbreviated JWS) is an IETF-proposed standard (RFC 7515) for signing arbitrary data.|
|JWE         |`An encrypted JWE object for one or multiple DIDs.`|JSON Web Encryption (JWE) is an IETF standard providing a standardised syntax for the exchange of encrypted data, based on JSON and Base64.|
|RSA         |`RSA involves a public key and a private key. The public key can be known by everyone and is used for encrypting messages. The intention is that messages encrypted with the public key can only be decrypted by using the private key.`|Rivest–Shamir–Adleman.|

<!-- CONTENT -->
## Contents:

- [Decentralized Identity (DID)](./did.md)
- [Enryption](./encryption.md)
- Box Authentication


<!-- ROADMAP -->
## Roadmap
- [X] Identity (DIDs)
- [X] Encryption
- [ ] Box Authentication


## Unresolved questions
- Content Access Revoke
- Storing DID document in L3 blockchain

## Future possibilities
- A box owner can associate multiple peer addresses with a DID.