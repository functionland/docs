# Asset

## Create Class

### **Description:**

This function creates a new class of assets. Classes being a set that includes related assets that have common characteristics.

### **Previous Steps:**

1. Create an account
2. Fund an account

### **Steps:**

1. Call the assets/create_class endpoint with the following request body:

### **Example Input:**

```jsx
{
		"seed": "//Alice",
		"metadata": {
		"userdata": "Type 1"
		},
		"class_id": 1,
		"owner": "5EcFZ4EkYFMYcpJWyjgDde4zG8tVvmdanXeSyNTyD42r552b"
}
```

- seed: the seed of the account that will pay for the transaction.
- class_id: the class identifier (must be unique).
- owner: the account address that will have ownership of the class.
- metadata: additional information about the class.

### **Expected Output:**

```jsx
{
		"class_id": 1,
		"who": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
}
```

- class_id: the class identifier.
- who: the account address of the class owner.

## Class Info

### **Description:**

This function returns information about a class.

### **Previous Steps:**

1. Create an account
2. Fund an account
3. Create a class

### **Steps:**

1. Call the assets/class_info endpoint with the following request body:

### **Example Input:**

```jsx
{
		"class_id": 1
}
```

- class_id: the class identifier.

### **Expected Output:**

```jsx
{
		"info": {
				"class_id": 1,
				"owner": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
				"metadata": {
						"userdata": "data"
				}
		}
}
```

- class_id: the class identifier.
- owner: the account address of the class owner.
- metadata: additional information about the asset.

## Create

### **Description:**

This function creates an asset.

### **Previous Steps:**

1. Create an account
2. Fund an account
3. Create a class

### **Steps:**

1. Call the assets/create endpoint with the following request body:

### **Example Input:**

```jsx
{
		"seed": "//Alice",
		"account": "5EcFZ4EkYFMYcpJWyjgDde4zG8tVvmdanXeSyNTyD42r552b",
		"class_id": 1,
		"asset_id": 1,
		"metadata": {
				"userdata": "Type 1"
		}
}
```

- seed: the seed of the account that will pay for the transaction.
- class_id: the class identifier
- asset_id: the asset identifier (must be unique).
- account: the account address that will have ownership of the asset.
- metadata: additional information about the asset.

### **Expected Output:**

```jsx
{
		"class_id": 1,
		"asset_id": 1,
		"who": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
}
```

- class_id: the class identifier.
- asset_id: the asset identifier.
- who: the account address of the asset owner.

## Info

### **Description:**

This function returns information about an asset.

### **Previous Steps:**

1. Create an account
2. Fund an account
3. Create a class
4. Create an asset

### **Steps:**

1. Call the assets/info endpoint with the following request body:

### **Example Input:**

```jsx
{
		"class_id": 1,
		"asset_id": 1
}
```

- class_id: the class identifier.
- asset_id: the asset identifier.

### **Expected Output:**

```jsx
{
		"info": {
				"class_id": 1,
				"asset_id": 1,
				"owner": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
				"metadata": {
						"userdata": "data"
				}
		}
}
```

- class_id: the class identifier.
- asset_id: the asset identifier.
- owner: the account address of the asset owner.
- metadata: additional information about the asset.

## Update Metadata

### **Description:**

This function updates the asset class metadata.

### **Previous Steps:**

1. Create an account
2. Fund an account
3. Create a class
4. Create an asset

### **Steps:**

1. Call the assets/update_metadata endpoint with the following request body:

### **Example Input:**

```jsx
{
		"seed": "//Alice",
		"metadata": {
				"userdata": "some new data"
		},
		"class_id": 1,
		"asset_id": 1
}
```

- seed: the seed of the account that will pay for the transaction.
- metadata: the new metadata to be set by this function.
- class_id: the class identifier.
- asset_id: the asset identifier.

### **Expected Output:**

```jsx
{
		"class_id": 1,
		"asset_id": 1,
		"who": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
		"metadata": {
				"userdata": "some new data"
		}
}
```

- class_id: the class identifier.
- asset_id: the asset identifier.
- who: the account address that paid for the transaction.
- metadata: the information updated by the function.

## Mint

### **Description:**

This function mints an asset by a given amount.

### **Previous Steps:**

1. Create an account
2. Fund an account
3. Create a class
4. Create an asset

### **Steps:**

1. Call the assets/mint endpoint with the following request body:

### **Example Input:**

```jsx
{
		"seed": "//Alice",
		"to": "5EcFZ4EkYFMYcpJWyjgDde4zG8tVvmdanXeSyNTyD42r552b",
		"class_id": 1
		"asset_id": 1,
		"amount": 500000
}
```

- seed: the seed of the account that will pay for the transaction.
- class_id: the class identifier
- asset_id: the asset identifier
- to: the account address that will have ownership of the assets.
- amount: the specific amount of assets to be minted.

### **Expected Output:**

```jsx
{
		"to": "5EcFZ4EkYFMYcpJWyjgDde4zG8tVvmdanXeSyNTyD42r552b",
		"class_id": 1,
		"asset_id": 1,
		"amount": 500000,
		"who": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
}
```

- who: the account address that paid for the transaction.
- class_id: the class identifier
- asset_id: the asset identifier
- to: the account address that has the ownership of the assets.
- amount: the specific amount of assets minted.

## Burn

### **Description:**

This function burns an asset by a given amount.

### **Previous Steps:**

1. Create an account
2. Fund an account
3. Create a class
4. Create an asset

### **Steps:**

1. Call the assets/burn endpoint with the following request body:

### **Example Input:**

```jsx
{
		"seed": "//Alice",
		"from": "5EcFZ4EkYFMYcpJWyjgDde4zG8tVvmdanXeSyNTyD42r552b",
		"class_id": 1,
		"asset_id": 1,
		"amount": 4000
}
```

- seed: the seed of the account that will pay for the transaction.
- class_id: the class identifier
- asset_id: the asset identifier
- from: the account address that will burn the assets.
- amount: the specific amount of assets to be burned.

### **Expected Output:**

```jsx
{
		"from": "5EcFZ4EkYFMYcpJWyjgDde4zG8tVvmdanXeSyNTyD42r552b",
		"class_id": 1,
		"asset_id": 1,
		"amount": 4000,
		"who": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
}
```

- who: the account address that paid for the transaction.
- class_id: the class identifier
- asset_id: the asset identifier
- from: the account address that burned the assets.
- amount: the specific amount of assets burned.

## Balance

### **Description:**

This function checks the balance of an asset in the given account.

### **Previous Steps:**

1. Create an account
2. Fund an account
3. Create a class
4. Create an asset

### **Steps:**

1. Call the assets/balance endpoint with the following request body:

### **Example Input:**

```jsx
{
		"account": "5EcFZ4EkYFMYcpJWyjgDde4zG8tVvmdanXeSyNTyD42r552b",
		"class_id": 1,
		"asset_id": 1
}
```

- class_id: the class identifier
- asset_id: the asset identifier
- account: the account address that will be checked.

### **Expected Output:**

```jsx
{
		"amount": 500000
}
```

- amount: the specific amount of assets in the given account.

## Transfer

### **Description:**

This function transfers a given amount of assets from one account to another.

### **Previous Steps:**

1. Create an account
2. Fund an account
3. Create a class
4. Create an asset
5. Mint an asset

### **Steps:**

1. Call the assets/transfer_from endpoint with the following request body:

### **Example Input:**

```jsx
{
		"seed": "//Alice",
		"from": "5EcFZ4EkYFMYcpJWyjgDde4zG8tVvmdanXeSyNTyD42r552b",
		"to": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
		"class_id": 1,
		"asset_id": 1,
		"amount": 50000
}
```

- seed: the seed of the account that will pay for the transaction.
- class_id: the class identifier
- asset_id: the asset identifier
- from: the account address that will send the assets.
- to: the account address that will receive the assets
- amount: the specific amount of assets to be sent.

### **Expected Output:**

```jsx
{
		"from": "5EcFZ4EkYFMYcpJWyjgDde4zG8tVvmdanXeSyNTyD42r552b",
		"to": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
		"class_id": 1,
		"asset_id": 1,
		"amount": 50000,
		"who": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
}
```

- who: the account address that paid for the transaction.
- class_id: the class identifier
- asset_id: the asset identifier
- from: the account address that sent the assets.
- to: the account address that received the assets
- amount: the specific amount of assets sent.