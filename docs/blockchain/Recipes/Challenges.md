# Challenges

The Challenges were implemented to improve the security of the proof-engine and the claim of the Fula Tokens. The challenges consist of a series of random proof of storage of a manifest and they are made each cycle in the proof-engine, here:

- The challenger doesn’t select the file to be challenged, it’s selected randomly between all the CIDs stored on the chain.
- The challenged users have to send their current stored CIDs since they don’t know which CID is being challenged: These cids are checked with the IPFS information and the values stored on the chain. This promotes the challenged always to have their corresponding CIDs stored, since if it’s not stored in IPFS the challenge tokens for that CID could be lost.

The purpose of the Challenges is to collect **Challenge Tokens** that depends on the size of the file being challenged, these tokens are different from the **Labor Tokens**. The labor tokens are minted by each user in their proof-engine, while the challenge tokens need you to receive a challenge first from another user. In each cycle of the proof-engine the following actions are performed

- Generate a random challenge to a CID of the chain.
- Checks if a challenge against him is currently active
    - If thats the case, the challenge is verified and on a successful result the challenge tokens are minted for the challenged account, if failed no challenge tokens are gained this way.

The challenge tokens are going to be used with the labor tokens to transform them into **claimed tokens**:

- In a regular case 1 Claimed token = 1 Labor token + 1 Challenge token.
- In cases where the values minted by the labor tokens differ from the expected amounts each cycle (In case some error or attack is being made to get more tokens than they are supposed), a correction to the proportion will be made.

## Generate Challenge

### Description:

Starts a new random challenge of a CID.

### Previous Steps:

1. Upload a manifest.
2. Store a manifest.

### Steps:

1. Call the fula/challenge/generate endpoint with the following request body:

### Example Input:

```jsx
{
    "seed": "//Alice"
}
```

- seed: the seed of the account challenger.

### Example Output:

```jsx
{
   "challenger": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
   "challenged": "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",
   "cid": "CIDTest1",
   "state": "Open"
}
```

- challenger: the account of the challenger that made the request.
- challenged: the selected account of the random challenge.
- cid: the content identifier associated to the challenge.
- state: the current state of this challenge (Open as its just been created)

## Verify Challenge

### Description:

Verifies the challenges made to an account and returns the successful and failed ones 

### Previous Steps:

1. Upload a manifest.
2. Store a manifest.
3. Generate a challenge.

### Steps:

1. Call the fula/challenge/verify endpoint with the following request body:

### Example Input:

```jsx
{
    "seed": "//Alice",
		"pool_id": 1,
		"cids": ["CIDTest1","CIDTest2"],
		"class_id": 2000,
		"asset_id": 3000
}
```

- seed: the seed of the account to verify.
- cid: an array of the content identifiers.
- pool_id: the pool identifier.
- class_id: the class identifier of labor token.
- asset_id: the asset identifier of labor token.

### Example Output:

```jsx
{
   "challenged": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
   "successful": ["CIDTest1"],
   "failed": ["CIDTest2"]
}
```

- challenged: the account of the account being verified.
- successful: and array of the contend identifiers thats were successful.
- failed: and array of the contend identifiers thats were failed.

## Mint Labor Tokens

### Description:

This function mint labor tokens

### Previous Steps:

1. Upload a manifest.
2. Store a manifest.
3. Generate a challenge.
4. Verify a challenge

### Steps:

1. Call the fula/mint_labor_tokens endpoint with the following request body:

### Example Input:

```jsx
{
    "seed": "//Alice",
		"pool_id": 1
		"class_id": 2000,
		"asset_id": 3000
}
```

- seed: the seed of the account to verify.
- pool_id: the pool identifier.
- class_id: the class identifier of labor token.
- asset_id: the asset identifier of labor token.

### Example Output:

```jsx
{
    "account": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
		"amount": 12345,
		"class_id": 2000,
		"asset_id": 3000
}
```

- account: the account minting the labor tokens.
- amount: the amount of labor tokens that were minted.
- class_id: the class identifier of labor token.
- asset_id: the asset identifier of labor token.

## Verify Pending Challenge

### Description:

Verifies if the given account has open challenges

### Previous Steps:

1. Upload a manifest.
2. Store a manifest.
3. Generate a challenge.

### Steps:

1. Call the fula/challenge/pending endpoint with the following request body:

### Example Input:

```jsx
{
    "seed": "//Alice"
}
```

- seed: the seed of the account thats verifying if its got challenges.

### Example Output:

```jsx
{
   "account": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
   "pending": true
}
```

- account: the account being verified.
- pending: indicates if the account has some challenges open

## Verify File Size

### Description:

Cheks that the cids associate with an account are correct

### Previous Steps:

1. Upload a manifest.
2. Store a manifest.

### Steps:

1. Call the fula/file/verify endpoint with the following request body:

### Example Input:

```jsx
{
    "seed": "//Alice"
}
```

- seed: the seed of the account associated with the CIDs.

### Example Output:

```jsx
{
   "account": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
   "cids": ["CIDTest1","CIDTest2"]
}
```

- account: the account being verified.
- pending: an array of content identifiers

## Provide Files Sizes

### Description:

Updates the file of the sized for each cid provided.

### Previous Steps:

1. Upload a manifest.
2. Store a manifest.

### Steps:

1. Call the fula/file/provide endpoint with the following request body:

### Example Input:

```jsx
{
    "seed": "//Alice",
		"pool_id": 1,
		"cids": ["CIDTest1","CIDTest2"],
		"sizes": [88359,23456],
}
```

- seed: the seed of the account associated with the CIDs.
- cid: an array of the content identifiers.
- pool_id: the pool identifier.
- sizes: an array of the file sized corresponding to the array of CIDs.

### Example Output:

```jsx
{
    "account": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
    "pool_id": 1,
		"cids": ["CIDTest1","CIDTest2"],
		"sizes": [88359,23456],
}
```

- account: the account associated with the given CIDs.
- cid: an array of the content identifiers.
- pool_id: the pool identifier.
- sizes: an array of the file sized corresponding to the array of CIDs.