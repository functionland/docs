# Pool

## Create

### Description:

Allows the user to create a pool and is set as the owner of the pool

### Previous Steps:

1. Create an account.
2. Fund an account.

### Steps:

1. Call the fula/pool/create endpoint with the following request body:

### Example Input:

```jsx
{
    "seed": "//Alice",
    "pool_name":"PoolNro1",
    "peer_id": "PeerIdTest1",
		"region": "Ontario"
}
```

- seed: the seed of the account that will pay for the transaction.
- pool_name: the name of the pool.
- peer_id: the peer identifier

### Expected Output:

```jsx
{
    "owner": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
    "pool_id": 1
}
```

- owner: the account address associated with the pool.
- pool_id: the pool identifier.

## Join

### Description:

Sends a request to join a pool to its members, that will vote to decide if the user is Accepted or Denied

### Previous Steps:

1. Create an account.
2. Fund an account.
3. Create a pool.

### Steps:

1. Call the fula/pool/join endpoint with the following request body:

### Example Input:

```jsx
{
    "seed": "//Bob",
    "pool_id": 1,
    "peer_id": "PeerIdBob"
}
```

- seed: the seed of the account that wants to join and will pay for the transaction.
- pool_id: the pool identifier.
- peer_id: the peer identifier

### Expected Output:

```jsx
{
    "pool_id": 1,
    "account": "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty"
}
```

- account: the account address that requested to join the pool.
- pool_id: the pool identifier.

## Cancel Join

### Description:

Withdraw the latest pool request sent to the given pool by that user.

### Previous Steps:

1. Create an account.
2. Fund an account.
3. Create a pool.
4. Request to join the pool.

### Steps:

1. Call the fula/pool/cancel_join endpoint with the following request body:

### Example Input:

```jsx
{
    "seed": "//Bob",
    "pool_id": 1
}
```

- seed: the seed of the account that no longer wants to join the pool.
- pool_id: the pool identifier.

### Expected Output:

```jsx
{
    "pool_id": 1,
    "account": "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty"
}
```

- account: the account address that no longer wants to join the pool.
- pool_id: the pool identifier.

## Pool Requests

### Description:

Allows the user to get all the current pool requests (can be filtered by pool_id and account of the requester)

### Previous Steps:

1. Create an account.
2. Fund an account.
3. Create a pool.
4. Request to join the pool.

### Steps:

1. Call the fula/pool/poolrequests endpoint with the following request body:

> *Note: If you call the function with empty parameters: { }. This will bring all the pool requests there are.*
> 

### Example Input:

```jsx
{
    "pool_id": 1
}
```

- pool_id: the pool identifier.

### Expected Output:

```jsx
{
    "poolrequests": [
        {
            "pool_id": 1,
            "account": "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",
            "voted": [],
            "positive_votes": 0,
            "peer_id": "PeerIdBob"
        }
    ]
}
```

- poolrequests: an array of all the pool requests associated with the queried parameters

## Pools

### Description:

Fetches all the pools that exist in the chain

### Previous Steps:

1. Create an account.
2. Fund an account.
3. Create a pool.

### Steps:

1. Call the fula/pool/all endpoint

### Expected Output:

```jsx
{
    "pools": [
        {
            "pool_id": 1,
            "creator": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
            "pool_name": "PoolTest1",
            "region": "Ontario",
            "parent": null,
            "participants": [
                "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
            ]
        }
    ]
}
```

- pools: an array of all the pools and their respective information.

## Users

### Description:

Get all the accounts that are/were members of a pool or are requesting to be in one

### Previous Steps:

1. Create an account.
2. Fund an account.
3. Create a pool.
4. Join a pool.

### Steps:

1. Call the fula/pool/users endpoint with the following request body: 

> *Note: If you call the function with empty parameters: { }. This will bring all users.*
> 

### Example Input:

```jsx
{
    "pool_id": 1
}
```

- pool_id: the pool identifier.

### Expected Output:

```jsx
{
    "users": [
        {
            "account": "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",
            "pool_id": null,
            "request_pool_id": 1,
            "peer_id": ""
        },
        {
            "account": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
            "pool_id": 1,
            "request_pool_id": null,
            "peer_id": "PeerIdTest1"
        }
    ]
}
```

- users: an array of all the users and their respective information.

## Vote

### Description:

Allows the members of a pool to vote to accept or denied a new given member into the pool

### Previous Steps:

1. Create an account.
2. Fund an account.
3. Create a pool.
4. Join a pool.
5. Get pool requests.

### Steps:

1. Call the fula/pool/vote endpoint with the following request body: 

### Example Input:

```jsx
{
    "seed": "//Alice",
    "pool_id": 1,
    "account": "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",
    "vote_value": true,
		"peer_id": "PeerIdTest"
}
```

- seed: the seed of the user voting.
- pool_id: the pool identifier.
- account: the account address of the user requesting to join.
- vote_value: the vote of the user.

### Expected Output:

```jsx
{
    "pool_id": 1,
    "account": "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty"
}
```

- pool_id: the pool identifier.
- account: the account address of the user requesting to join.

## Leave

### Description:

The user leaves their pool and this will also remove the storing manifests that from their latest pool if they had any

### Previous Steps:

1. Create an account.
2. Fund an account.
3. Create a pool.
4. Join a pool.

### Steps:

1. Call the fula/pool/leave endpoint with the following request body: 

### Example Input:

```jsx
{
    "seed": "//Bob",
    "pool_id": 1
}
```

- seed: the seed of the user that wants to leave the pool.
- pool_id: the pool identifier.

### Expected Output:

```jsx
{
    "pool_id": 1,
    "account": "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty"
}
```

- pool_id: the pool identifier.
- account: the account address of the user that left the pool.