# Bundle

## Register

### Description:

This function registers a new bundle schema.

### Previous Steps:

1. Create a class.
2. Create an asset.
3. Mint an asset.

### Steps:

1. Call the bundle/register endpoint with the following request body:

### Example Input:

```jsx
{
    "seed": "//Alice",
    "class_id": 3,
    "asset_id": 0,
    "schema": {
        "class_ids": [1],
        "asset_ids": [
            [1]
        ],
        "amounts": [
            [5]
        ]
    },
    "metadata": {
        "userdata": ""
    }
}
```

- seed: the seed of the account that will pay for the transaction.
- class_id: the new class identifier that the bundle will manage.
- asset_id: the new asset identifier that the bundle will manage.
- schema: this will represent all the classes and assets that need to be present in order to fulfill the other transactions
    - class_ids: an array of the class identifiers that will be part of the schema.
    - asset_ids: an array of asset_ids arrays that will be related to each class_id.
    - amounts: an array of amount arrays that will be related to each asset_id.
- metadata: additional information about the bundle.

### Expected Output:

```jsx
{
    "bundle_id": "460bf8be553867922d58c434b3e672ffee40d163d4e744d28c1f67f93d0b3a3c",
    "who": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
    "class_id": 3,
    "asset_id": 0
}
```

- who: the account address associated with the bundle.
- bundle_id: the bundle identifier.
- class_id: the class identifier managed by the bundle.
- asset_id: the asset identifier managed by the bundle.

## Mint

### Description:

This function mints a bundle.

### Previous Steps:

1. Create an account.
2. Register a bundle schema.

### Steps:

1. Call the bundle/mint endpoint with the following request body:

### Example Input:

```jsx
{
    "seed": "//Alice",
    "from": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
    "to": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
    "bundle_id": "460bf8be553867922d58c434b3e672ffee40d163d4e744d28c1f67f93d0b3a3c",
    "amount": 10
}
```

- seed: the seed of the account that will pay for the transaction.
- from: the account address of the sender.
- to: the account address of the receiver.
- bundle_id: the bundle identifier.
- amount: the amount to be minted.

### Expected Output:

```jsx
{
    "who": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
    "from": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
    "to": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
    "bundle_id": "460bf8be553867922d58c434b3e672ffee40d163d4e744d28c1f67f93d0b3a3c",
    "amount": 10
}
```

- who: the account address that paid for the transaction.
- from: the account address of the sender.
- to: the account address of the receiver.
- bundle_id: the bundle identifier.
- amount: the amount minted.

## Get

### Description:

Fetches the bundles registered

### Previous Steps:

1. Create an account.
2. Register a bundle schema.

### Steps:

1. Call the bundle endpoint with the following request body:

### Example Input:

```jsx
{}
```

### Expected Output:

```jsx
{
		"bundles": [
		    {
				"bundle_id": "460bf8be553867922d58c434b3e672ffee40d163d4e744d28c1f67f93d0b3a3c",
		    "class_id": 5,
		    "asset_id": 1
				}
		]
}
```

- bundle: an array with all the bundle registered.

## Get Data

### Description:

Fetches the data of the bundles registered

### Previous Steps:

1. Create an account.
2. Register a bundle schema.

### Steps:

1. Call the bundle/data endpoint with the following request body:

### Example Input:

```jsx
{}
```

### Expected Output:

```jsx
{
		"bundles": [
		    {
			   "bundle_id": "460bf8be553867922d58c434b3e672ffee40d163d4e744d28c1f67f93d0b3a3c",
					"creator": "5EcFZ4EkYFMYcpJWyjgDde4zG8tVvmdanXeSyNTyD42r552b",
			    "class_id": 5,
			    "asset_id": 1
			    "schema": {
			        "class_ids": [1],
			        "asset_ids": [
			            [1]
			        ],
			        "amounts": [
			            [5]
			        ]
			    },
			    "metadata": {
			        "userdata": "info"
			    }
				}
		]
}
```

- bundle: an array with all the bundle registered and its respective data.