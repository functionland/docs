Feature Name: fula-sec

Start Date: 26.02.2022

# FULA SECURITY LAYER

## Summary
**The FULA protocol includes libp2p and ipfs. Using the crypto model on the libp2p network, we can transmit secure data on the transport layer. However, the data inside the ipfs is stored unencrypted. This does not mean that we cannot keep the data secure inside nodes. IPFS has left this opportunity open to us.**


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


## Fula-Sec Sequence Diagram

The Fula security layer works according to the following scenario: 
1. First, each application must have a generated DID address.
2. User application must have a wallet address and a link to the DID (in this scenario we mentioned about EVM-capapble blockchain wallets).
3. Alice uses a unique symmetric key (sKn) for each content, and each file must be encrypted while streaming to the box.
5. After the file has been successfully stored to the IPFS node, it returns the CID to Alice.
4. The JWE Encryption works as following way. By including BOB`s DID address, symmetric key (sK1) and CID will encrypting in order to get JWE Obj. JWS will also be sent to Bob with signOption.
5. Bob decrypts the document using his own DID address and then obtains the symmetric key (sK1) to get the file that belongs to Alice. As a result, BOB receives the CID and sends a request to the Box.
6. The box sends the encrypted data back to BOB, and by using the key sk1, Bob receives the complete decrypted file.


```mermaid
sequenceDiagram
	participant  Alice  
	participant  Box
	participant  Bob 
	Note left of Alice: - Create DID <br/> - Get Wallet Address <br/>
	Note right of Bob: - Create DID <br/> - Get Wallet Address <br/>
	Alice->>Box: Chunked stream Cip = Encryption(m,sK1)
	Note right of Box: Save Encrypted Content into IPFS
	Box->>Alice: return CID
	Bob->>Alice: Send Public Addresses (B^DID)
	Alice->>Bob: H = JWS(signOption), B = JWE(DIDs, Doc={CID,sK1}
	Note right of Bob: - Save H:B <br/>
	Bob->>Bob: CID^sK1 = JWE Decrypt(B^DID) / JWS Validation
	Bob->>Box: Send CID
	Box->>Bob: Encrypted stream -> Decryption(Cip,sK1)
```
## Future possibilities
- At the current stage, we decided to use a ceramic network provider. We will switch to the L3 networks to keep JWT and JWS object to validate access and revoke access. It gives us more efficient decentrilized authorization.
- In the next update of Fula-sec, will move the JWS and JWE object to L3. In this case, none of user need to save the documents.