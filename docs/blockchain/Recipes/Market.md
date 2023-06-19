# Market

## Create

### Description:

This function creates a new market.

### Previous Steps:

1. Create an account.
2. Fund an account.

### Steps:

1. Call the market/create_market endpoint with the following request body:

### Example Input:

```jsx
{
    "seed": "//Alice",
    "market_id": 1
}
```

- seed: the seed of the account that will pay for the transaction.
- market_id: the market identifier.

### Expected Output:

```jsx
{
    "market_id": 1,
    "who": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
}
```

- who: the account address associated with the market.
- market_id: the market identifier.

## Create Market Rate

### Description:

This function creates a new market rate.

### Previous Steps:

1. Create an account.
2. Fund an account.
3. Create a class.
4. Create an asset.
5. Mint an asset.
6. Create a market.

### Steps:

1. Call the market/create_market_rate endpoint with the following request body:

### Example Input:

```jsx
{
    "seed": "//Alice",
    "market_id": 1,
    "market_rate_id": 1,
    "rates": {
        "rates": [
            {
                "class_id": 2000,
                "asset_id": 1,
                "action": {
                    "Transfer": 1
                },
                "from": "Market",
                "to": "Buyer"
            },
            {
                "class_id": 2000,
                "asset_id": 2,
                "action": {
                    "Mint": 1
                },
                "from": "Market",
                "to": "Buyer"
            },
            {
                "class_id": 3000,
                "asset_id": 1,
                "action": {
                    "Has": [
                        "GreaterEqualThan",
                        5000
                    ]
                },
                "from": "Buyer",
                "to": "Market"
            },
            {
                "class_id": 3000,
                "asset_id": 2,
                "action": {
                    "Transfer": 5
                },
                "from": "Buyer",
                "to": "Market"
            },
            {
                "class_id": 3000,
                "asset_id": 3,
                "action": {
                    "Burn": 50
                },
                "from": "Buyer",
                "to": "Market"
            },
            {
                "class_id": 4000,
                "asset_id": 1,
                "action": {
                    "Transfer": 2
                },
                "from": "Market",
                "to": {
                    "Account": "//Alice"
                }
            },
            {
                "class_id": 4000,
                "asset_id": 2,
                "action": {
                    "Transfer": 1
                },
                "from": "Buyer",
                "to": {
                    "Account": "//Alice"
                }
            }
        ],
        "metadata": []
    }
}
```

- seed: the seed of the account that will pay for the transaction.
- market_id: the market identifier
- market_rate_id: the market rate identifier
- rates:
    - rates: an array of the requirements that the transaction needs to fulfilled.
    - metadata: additional information about the rates.

### Expected Output:

```jsx
{
    "market_id": 1,
    "market_rate_id": 1,
    "who": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
}
```

- who: the account address associated with the market.
- market_id: the market identifier.
- market_rate_id: the market rate identifier.

## Deposit Assets

### Description:

This function deposits a given amount of assets in the market.

### Previous Steps:

1. Create an account.
2. Fund an account.
3. Create a class.
4. Create an asset.
5. Mint an asset.
6. Create a market.
7. Create a market rate.

### Steps:

1. Call the market/deposit_assets endpoint with the following request body:

### Example Input:

```jsx
{
    "seed": "//Alice",
    "market_id": 1,
    "market_rate_id": 1,
    "amount": 1000
}
```

- seed: the seed of the account that will pay for the transaction.
- market_id: the market identifier
- market_rate_id: the market rate identifier
- amount: the specific amount of assets to be deposited.

### Expected Output:

```jsx
{
    "who": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
    "market_id": 1,
    "market_rate_id": 1,
    "amount": 1000,
    "balances": [],
    "success": true
}
```

- who: the account address associated with the market.
- market_id: the market identifier.
- market_rate_id: the market rate identifier.
- amount: the specific amount of assets deposited.
- balances: an array of the results of each operation after the deposit
- success: an indicator to see if the deposited was successful

## Exchange Assets

### Description:

This function deposits a given amount of assets in the market.

### Previous Steps:

1. Create an account.
2. Fund an account.
3. Create a class.
4. Create an asset.
5. Mint an asset.
6. Create a market.
7. Create a market rate.
8. Deposit assets.

### Steps:

1. Call the market/exchange_assets endpoint with the following request body:

### Example Input:

```jsx
{
    "seed": "//Bob",
    "market_id": 1,
    "market_rate_id": 1,
    "amount": 1000
}
```

- seed: the seed of the account that will pay for the transaction.
- market_id: the market identifier
- market_rate_id: the market rate identifier
- amount: the specific amount of assets to be exchanged.

### Expected Output:

```jsx
{
    "buyer": "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",
    "market_id": 1,
    "market_rate_id": 1,
    "amount": 1000,
    "balances": [
        {
            "rate": {
                "class_id": 1,
                "asset_id": 1,
                "action": "Mint",
                "amount": 1000,
                "from": "Market",
                "to": "Buyer"
            },
            "balance": 1000000
        }
    ],
    "success": true
}
```

- who: the account address associated with the market.
- market_id: the market identifier.
- market_rate_id: the market rate identifier.
- amount: the specific amount of assets exchanged.
- balances: an array of the results of each operation after the exchange
- success: an indicator to see if the deposited was successful