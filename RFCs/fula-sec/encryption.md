
## We provide a two-way encryption method: 
1. Tagged DID encryption - Encrypt data by adding a DID id. 
2. Asymmetric Encryption - Encrypt the subscriber/audience`s public key.

#

## 1 - Scenario: Tagged Encryption.

The Tagged Encryption works according to the following scenario:
1. First, each application must have a generated DID address.
2. Alice uses a unique symmetric key (sKn) for each content, and each file must be encrypted while streaming to the box.
3. After the file has been successfully stored to the IPFS node, it returns the CID to Alice.
4. The DID JWE Encryption works as following way. By including BOB`s DID address, symmetric key (sK1) and CID will encrypting in order to get JWE Doc.
5. Bob decrypts the document using his own DID address and then obtains the symmetric key (sK1) to get the file that belongs to Alice. As a result, BOB gets the CID and sends a request to the Box.
6. Bob decrypts data with sK1 while data streaming.

```mermaid

sequenceDiagram

participant Alice

participant Box

participant Bob

Note left of Alice: - Create DID <br/> 
Note right of Bob: - Create DID <br/>

Alice->>Box: Chunked stream Cip = Encryption(m,sK1)

Note right of Box: Save Encrypted Content into IPFS

Box->>Alice: return CID

Bob->>Alice: Send Public Addresses (B^DID)

Alice->>Bob: JWE(DIDs, Doc={CID,sK1}

Note right of Bob: - Save JWE <br/>

Bob->>Bob: Doc={CID,sK1} = JWE Decrypt(B^DID)

Bob->>Box: Send CID

Box->>Bob: Encrypted stream -> Decryption(Cip,sK1)

```

[Tagged Encryption (Tagged DID) ->](https://github.com/functionland/fula/blob/fula-sec/libraries/fula-sec/readme.md#tagged-encryption-tagged-did)

#

## 2 - Asymmetric Encryption
This way no one need to share DID identity with others, just need to know PubKey.
The Asymmetric Encryption works according to the following scenario:
1. First, each application must have a generated DID address and PublicKey.
2. Alice uses a unique symmetric key (sKn) for each content, and each file must be encrypted while streaming to the box.
3. After the file has been successfully stored to the IPFS node, it returns the CID to Alice.
4. The Asymmetric Encryption works as following way. By including BOB`s PubKey, symmetric key (sK1) and CID will encrypting in order to get JWE Doc.
5. Bob decrypts the document using his own PrivateKey and then obtains the symmetric key (sK1) to get the file that belongs to Alice. As a result, BOB gets the CID and sends a request to the Box.
6. Bob decrypts data with sK1 while data streaming.
```mermaid

sequenceDiagram

participant Alice

participant Box

participant Bob

Note left of Alice: - Create DID <br/> 
Note left of Alice: - AsymEncryption(init) <br/> - Import PivateKey <br/> - Get PublicKey <br/>

Note right of Bob: - Create DID <br/>
Note right of Bob: - AsymEncryption(init) <br/> - Import PivateKey <br/> - Get PublicKey <br/>

Alice->>Box: Chunked stream Cip = Encryption(m,sK1)

Note right of Box: Save Encrypted Content into IPFS

Box->>Alice: return CID

Bob->>Alice: Send Public Addresses (B^PubKey)

Alice->>Bob: JWE = AsymEncrypt(PubKey, Doc={CID,sK1}

Note right of Bob: - Save JWE <br/>

Bob->>Bob: Doc={CID,sK1} = AsymDecrypt(JWE)

Bob->>Box: Send CID

Box->>Bob: Encrypted stream -> Decryption(Cip,sK1)

```


[Asymmetric Encryption ->](https://github.com/functionland/fula/blob/fula-sec/libraries/fula-sec/readme.md#asymmetric-encryption)


[Public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography#:~:text=In%20an%20asymmetric%20key%20encryption,become%20known%20to%20any%20other.)
#