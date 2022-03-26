- Feature Name: private-network
- Start Date: 2022-02-01
- RFC PR:
- Functionland Issue:

## Background
We are using IPFS as our file system. But IPFS is built to use for public data, and it does not support ACL, 
so we need to find a way to keep users safe until our security layer becomes mature.

## Problem Statement
We need to protect user and their data from harms and risk of public network.  

## Motivation
Isolating users from public network can help us reduce the scope of work while maintaining the usefulness of our product, and testing our security layer without putting users in harm's way. 

## Proposal
using IPFS build-in private network. base on [spec](https://github.com/libp2p/specs/blob/master/pnet/Private-Networks-PSK-V1.md)
Its uses a pre-shared key (PSK) to create a private network with encrypted communication.

For box setup user provide an environment variable SECRET which is password he should remember.
the secret then convert to a hash of 256 bit by algorithm like sha256 and generate the swarm.key for ipfs and libp2p node's.

For Fula client when user call createClient he should also provide the password he used for setting the box's.

For network discovery its manual process that user should provide all box peer id's in config.

## Scope of work
- human friendly password to swarm.key 
- box should look for SECRET env variable and if it exit set the connProtector for libp2p config
- fula-client constructor should get another parameter call secret and if exist set connProtector for libp2p
- create an example for the describing functionality

## Implementation 
### human-readable password
Convert a human-readable password to swarm.key
simplest way is to use ['libp2p-crypto'](https://github.com/libp2p/js-libp2p-crypto#cryptopbkdf2password-salt-iterations-keysize-hash) (it works both on browser and node)
```js
import crypto from 'libp2p-crypto'
const salt = '';
const passwordToPKey = (password) => {
  // it should be somthing like this
  const key = crypto.pbkdf2(password, salt, 5, 256, 'sha2-256')
  pkey = `/key/swarm/psk/1.0.0/
  /base16/
  ${key}`
  return new TextEncoder().encode(key)
}

```
the box and client already support pkey input, but we should add the above function to them
and after that we should change existing pkey on both fula and box to use the above function.

for creating an example we can create copy of react-gallery and add the password field in config.<br/>
note: if example repo would be outside mono-repo we can just use branch for describing every functionality.


## Alternative approaches
- Using VPN for creating the private network
  - It adds another point of failure to the system.

## Risks
### Work prioritization
### Anything that impacts the value of RFC
### what could impact delivery of this RFC?
## dependencies
## Impact
