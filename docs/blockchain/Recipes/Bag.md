# Bag

## Register

### Description:

This function register a bag transaction.

### Steps:

1. Call the bag/register endpoint with the following request body:

### Example Input:

```jsx
{
		"seed": "//Alice",
		"class_id": 100000,
		"metadata": {
		"userdata": "somedata"
		}
}
```

- seed: the seed of the account that will pay for the transaction.
- class_id: the new class identifier that the bag will manage.
- metadata: additional information about the bag.

### Expected Output:

```jsx
{
    "who": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
    "class_id": 100000
}
```

- who: the account address that paid for the transaction.
- class_id: the class identifier managed by the bag.

## Create

### Description:

This function creates a bag transaction.

### Previous Steps:

1. Create an account.
2. Fund an account.
3. Register bag.

### Steps:

1. Call the bag/create endpoint with the following request body:

### Example Input:

```jsx
{
    "seed": "//Alice",
    "class_id": 100000,
    "owners": ["5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"],
    "shares": [1]
}
```

- seed: the seed of the account that will pay for the transaction.
- class_id: the class identifier that the bag manages.
- owners: array of account addresses that will be associated with the bag.
- shares: the amount of share held by the corresponding owners.

### Expected Output:

```jsx
{
    "bag": "5EYCAe5jLQkbmk7kHzj7VNqTGExAEDCjwnnzSh1UEC9N9PgP",
    "class_id": 100000,
    "asset_id": 0,
    "owners": [
        "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
    ]
}
```

- owners: array of account addresses associated with the bag.
- bag: the bag account.
- class_id: the class identifier that the bag manages.
- asset_id: the asset identifier that the bag manages.

## Deposit

### Description:

This function creates a new deposit to the bag account.

### Previous Steps:

1. Create an account.
2. Fund an account.
3. Create a class.
4. Create an asset.
5. Mint an asset.
6. Register bag.
7. Create a bag.

### Steps:

1. Call the bag/deposit endpoint with the following request body:

### Example Input:

```jsx
{
    "seed": "//Alice",
    "bag": "5EYCAe5jLQkbmk7kHzj7VNqTGExAEDCjwnnzSh1UEC9N9PgP",
    "class_ids": [1],
    "asset_ids": [[0,1]],
    "amounts": [[100,200]]
}
```

- seed: the seed of the account that will pay for the transaction.
- bag: the bag account where the deposit will be made.
- class_ids: an array of the class identifiers that will be part of the transaction.
- asset_ids: an array of asset_ids arrays that will be related to each class_id.
- amounts: an array of amount arrays that will be related to each asset_id.

### Expected Output:

```jsx
{
    "bag": "5EYCAe5jLQkbmk7kHzj7VNqTGExAEDCjwnnzSh1UEC9N9PgP",
    "who": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
}
```

- who: the account address that paid for the transaction.
- bag: the bag account.

## Sweep

### Description:

This function sweep the deposits made on an bag account to a given account.

### Previous Steps:

1. Create an account.
2. Fund an account.
3. Create a class.
4. Create an asset.
5. Mint an asset.
6. Register bag.
7. Create a bag.
8. Bag deposit.

### Steps:

1. Call the bag/sweep endpoint with the following request body:

### Example Input:

```jsx
{
    "seed": "//Alice",
    "to": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
    "bag": "5EYCAe5jLQkbmk7kHzj7VNqTGExAEDCjwnnzSh1UEC9N9PgP"
}
```

- seed: the seed of the account that will pay for the transaction.
- bag: the bag account where the deposit were made.
- to: the receiver account address.

### Expected Output:

```jsx
{
    "bag": "5EYCAe5jLQkbmk7kHzj7VNqTGExAEDCjwnnzSh1UEC9N9PgP",
    "who": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
    "to": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
}
```

- who: the account address that paid for the transaction.
- bag: the bag account.
- to: the receiver account address.