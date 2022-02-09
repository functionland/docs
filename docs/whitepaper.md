---
id: whitepaper
title: Whitepaper
---

# Ending the Rental Web

A decentralized cloud alternative that solves the ‘paying problem' for users and open source developers

Version 0.2

February 2022

Functionland Team

## Abstract

Centralized cloud services offer powerful applications and seamless user experiences. But a provider’s incentives are often misaligned with users. In typical centralized cloud service models, users ‘rent’ the hardware for storage and computation and pay via a subscription, ads, or personal data.

As examples, if a cloud provider profits through user engagement (e.g., ad clicks), the rational behavior, given the incentive, is to draw attention and arouse reactions regardless of the users’ best interests.

A service may provide value to millions of users. But since cloud providers must generate profits for shareholders, they will likely shut down a popular service if it cannot demonstrate a viable revenue stream or tertiary strategic advantage.
Providers may offer ‘free’ services to attract users while planning to introduce a paid tier system later, knowing that a substantial proportion of users who become dependent on the service will be unwilling or unable to pay.

The Fula Network is a privacy-focused, user-owned, free-to-use open-source platform with a built-in incentive layer designed to reduce, eliminate or invert these misaligned incentives while giving the user total ownership of their data.

### The Paying Problem

In the existing cloud service model, a rent-seeking entity provides the hardware infrastructure. That entity may own the infrastructure  (e.g., Google Drive) or rent it out (i.e., cloud services running on AWS, Filecoin, etc.). In either case, they provide the infrastructure as a service, and someone must pay.

Even if a cloud service developer wishes to provide a free service, they must pay the infrastructure cost (e.g., AWS) and must, in turn, recoup that cost from users. This prohibits any possibility for free-to-use, open-source alternative cloud services without reverting to monetizing the user’s data or attention. The paying problem will persist as long as developers and users must rent the computing and storage infrastructure.

#### The Cloud’s Costs and Convenience

Centralized cloud services entered the mainstream in the mid-2000s, providing easy-to-use, cheap infrastructure. At that time, Microsoft’s web-based email Hotmail offered 4MB of storage per account. When Gmail entered the picture in 2004, it introduced an unheard-of 1GB of storage per account.

In 2000, hard drive storage cost around $10.00 for 1GB. As of 2022, storage has dropped to under $0.03 for 1GB. Computation has also seen a dramatic drop in cost; The equivalent computing power of an early 2000s PC is today matched by a single-board computer such as the Raspberri Pi. Costing as little as $35, it can run 24/7 with a fraction of the energy costs of its PC equivalent.

Cloud providers spare users the hardware costs and provide an unmatched user experience. In comparison, a user deploying their own hardware (e.g., a personal server such as NAS) requires a high level of technical expertise to install and significant time to set up and maintain, with software typically unintuitive and prone to issues. Lastly, a personal server does not provide data redundancy since it is confined to one server at one location.

### A decentralized platform built on user-owned hardware

We use low-cost, energy-efficient hardware to build a plug-and-play personal server with a simplified and intuitive user experience that can match the traditional cloud.  Finally, we use Web3 protocols to create a secure, encrypted network among a pool of devices, thereby attaining data availability and redundancy without requiring a single user to have more than one device.

#### Utility

When the hardware that comprises the network is user-owned, we remove the need for a rent-seeking third party. However, the network still creates value in the form of utility. Therefore, the hardware owners, i.e., the network users, are both utility providers and recipients of that utility.

On our user-run network, developers bear no infrastructural costs. Rather, they provide utility for which they are compensated based on usage.  In doing so, developers are incentivized to build free, open-source applications on the platform.

##### Fair Usage

The network’s utility depends on fair usage among all participants. We verify genuine resource-sharing and usage among users while maintaining privacy with zero knowledge using Proof of Resource. The utility provided and received can be measured and attributed a token value on a distributed ledger. This ensures sharing of resources among users, resulting in a net-zero transaction.

### Enabling Open-Source Development

Most open-source projects are not financially supported. Yet they form the foundation of the information economy. In most cases, they are created by individuals who must work a second job to support their open-source work. With a great deal of responsibility and stress placed on maintainers with little thanks and no compensation, burnout is widespread. As a result, even successful and widely used open-source software packages that provide value to millions are often abandoned by their core maintainers. This can, in turn, lead to issues with vulnerabilities and obsolescence.

The Fula Network’s incentive layer enables a monetization mechanism for open-source application development. Including compensation for any upstream dependencies in any project.

In addition to monetary support, we provide secure, open-source primitives that enable application developers to rapidly build peer-to-peer, open-source, decentralized applications using any programming language, such as JavaScript.

## The Fula Network

By default, a user engages with the Fula Network as both a resource consumer (apps, storage, content, etc.) and a resource provider. A user can use services on the network without owning a connected device. However, interacting with the network this way will be costly since our primary goal is incentivizing a robust network comprised of user-owned hardware.

### Layer designations on the Fula Network

![Fula Layers](./FulaLayers.svg)

*DIAGRAM 1a illustrates individual L3 Pool transactions rolled up to their respective L2 Chains. L2s then register to L1*

**Fula L1:** The Global Ledger of the FULA Token on Ethereum. FULA tokens can be bridged from Ethereum to any chain or rollup via a 1:1 mapping of ERC-20 tokens.

**Fula L2:** The Fula L2 is multichain and includes individual chains such as Polkadot, Cosmos, Algorand, and rollups such as Arbitrum, Polygon, etc. 

**Fula L3 PoolChain:** This uses Proof of Resources to verify all transactions on a given Pool. Proofs are rolled up and submitted to the Pool’s L2 to maintain an account of Fula tokens across all pools on a given L2.