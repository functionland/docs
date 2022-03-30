# Two-way Encryption Mechanism

- Start Date: 2022-02-27
- RFC PR: [functionland/docs/pull/74](https://github.com/functionland/docs/pull/74)
- Functionland Issue: [functionland/docs/issues/65](https://github.com/functionland/docs/issues/65)
- Status: Draft
- Authors: [Jamshid](https://github.com/ruffiano89)
- Reviewers: [Masih](https://github.com/orgs/functionland/people/masih), [Aaron](https://github.com/gitaaron)

## Summary

There are two scenarios that require encryption

1. Tagged DID encryption
2. Asymmetric Encryption - Encrypt the subscriber/audience's public key.

## Tagged Encryption

 **Encrypt data by adding a DID.**

Tagged encryption works according to the following steps:

1. Each agent must have a generated DID address.

2. Alice uses a unique symmetric key (sKn) for encrypting each piece of content and each file while streaming to the Box.

3. After the file has been successfully stored to the IPFS node, it returns the CID for each encrypted file to Alice.

4. Alice now gives Bob access to the file by issuing him a `JWE Doc` with BOB`s DID address, symmetric key (sK1) and CID

5. Bob decrypts the document using his own DID address and then obtains the symmetric key (sK1) to get the file that belongs to Alice. As a result, BOB gets the CID and sends a request to the Box.

6. Bob decrypts the data with sK1 while streaming it from the Box.

<p align="center">
  <img alt="tagged-encryption" src="https://raw.githubusercontent.com/functionland/docs/246391d247fb301351e483594037135d2b3e03d3/static/diagrams/tagged-encryption.svg"/>
  <p align="center">Tagged Encryption Sequence Diagram</p>
</p>

See [here](https://github.com/functionland/fula/blob/fula-sec/libraries/fula-sec/readme.md#tagged-encryption-tagged-did) for tagged encryption sample code.

#

## Asymmetric Encryption

**With assymetric encryption, no one needs to share DID identity with others, they just need to know a PubKey.**

Asymmetric Encryption works according to the following steps:

1. First, each application must have a generated DID address and PublicKey.

2. Alice uses a unique symmetric key (sKn) for encrypting each piece of content and each file while streaming to the Box.

3. After the file has been successfully stored to the IPFS node, it returns the CID for each encrypted file to Alice.

4. Alice now gives Bob access to the file by issuing him a `JWE Doc` with BOB`s PubKey, symmetric key (sK1) and CID.

5. Bob decrypts the document using his own PrivateKey and then obtains the symmetric key (sK1) to get the file that belongs to Alice. As a result, BOB gets the CID and sends a request to the Box.

6. Bob decrypts data with sK1 while streaming it from the Box.

<p align="center">
  <img alt="Assymetric Encryption Sequence Diagram" src="https://raw.githubusercontent.com/functionland/docs/246391d247fb301351e483594037135d2b3e03d3/static/diagrams/assymetric-encryption.svg"/>
  <p align="center">Tagged Encryption Sequence Diagram</p>
</p>


See [here](https://github.com/functionland/fula/blob/fula-sec/libraries/fula-sec/readme.md#asymmetric-encryption) for assymetric encryption sample code.

#

## References

* [Public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography#:~:text=In%20an%20asymmetric%20key%20encryption,become%20known%20to%20any%20other.)
