# Decentralized Identity (DID)

- Start Date: 2022-02-27
- RFC PR: [functionland/docs/pull/74](https://github.com/functionland/docs/pull/74)
- Functionland Issue: [functionland/docs/issues/65](https://github.com/functionland/docs/issues/65)
- Status: Draft
- Authors: [Jamshid](https://github.com/ruffiano89)
- Reviewers: [Masih](https://github.com/orgs/functionland/people/masih), [Aaron](https://github.com/gitaaron)


## Why DID in FULA?

DID enables agents to assert their identity so that they can establish trust, privacy and security with other agents in the network without a centralized authority.

## What is Required?
Setting up decentralized identity with providers(blockchain/distributed ledger) usually consists of the following elements:

1. Identity owner: The user who creates their decentralized identity using the identity wallet.
2. Issuer/Verifier: An entity that issues and verifies identification information. They sign the transaction with their private key.
3. Blockchain/Distributed Ledger: A decentralized and distributed ledger that provides the mechanism and functions for DID and operation.
4. DID (Decentralized Identifier): A unique identifier that contains details such as public key, verification information, documents.

## Can we achieve creating DID without any providers?

**Yes, but with some flaws.** As long as we do not store all operations with DID on a ledger verified by an acceptable number of other nodes, security of the data will be lost. Moreover, data storage in blockchain/distributed ledger mechanism is immutable and permanent, and hence, modification and deletion are not possible. The decentralized identity systems use this mechanism so that no external entity can tamper or modify the data.

## How does it work?

1. Create DID identity -
With Create DID, we will have a DID identity and two secret keys options for backup.

<p align="center">
  <img alt="create-did" src="https://raw.githubusercontent.com/functionland/docs/246391d247fb301351e483594037135d2b3e03d3/static/diagrams/create-did.svg"/>
  <p align="center">Create DID identity flow</p>
</p>

<br></br>

2. Recover DID identity - We need a mnemonic or private key to restore identity.

<p align="center">
  <img alt="recover-did" src="https://raw.githubusercontent.com/functionland/docs/246391d247fb301351e483594037135d2b3e03d3/static/diagrams/recover-did.svg"/>
  <p align="center">Recover DID identity flow</p>
</p>

See [here](https://github.com/functionland/fula/tree/fula-sec/libraries/fula-sec#decentralized-identity-did) for DID reference implementation.

