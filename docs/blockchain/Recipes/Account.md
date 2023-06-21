---
title: Account
---
# Account

## Create

### **Description:**

This function generates a new SugarFunge key pair to interact with the node.

### **Steps:**

1. Call the account/create endpoint.

### **Expected Output:**

```jsx
{
		"seed": "//074a488cc87418a474b5ac30dbcf979caf2099110af805fa208b1a0c53097fc2",
		"account": "5EcFZ4EkYFMYcpJWyjgDde4zG8tVvmdanXeSyNTyD42r552b"
}
```

- seed: represents the private key of the new account.
- account: represents the public key of the new account.

## Fund

### **Description:**

This function funds an account to be able to carry out different operations on the node. By funding an account, that key pair its inserted in the node's keystore.

### **Previous Steps:**

1. Create an account

### **Steps:**

1. Call the account/fund endpoint with the following request body:

### **Example Input:**

```jsx
{
		"seed": "//Alice",
		"amount": 750000000000,
		"to": "5EcFZ4EkYFMYcpJWyjgDde4zG8tVvmdanXeSyNTyD42r552b"
}
```

- seed: the seed of the account that would be doing the funding.
- to: the account address that will be funded.
- amount: the specific amount to be added to the account.

### **Expected Output:**

```jsx
{
		"from": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
		"to": "5EcFZ4EkYFMYcpJWyjgDde4zG8tVvmdanXeSyNTyD42r552b",
		"amount": 750000000000
}
```

- from: the account address that did the funding.
- to: the account address that was funded.
- amount: the specific amount that was added to the account.

## Exists

### ****Description:**

This function checks if the account exists and is active.

> *Note: This function will return false if the account has not been funded yet*
> 

### **Previous Steps:**

1. Create an account
2. Fund an account

### **Steps:**

1. Call the account/exists endpoint with the following request body:

### **Example Input:**

```jsx
{
		"account": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
}
```

- account: the account address that will be checked.

### **Expected Output:**

```jsx
{
		"account": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
		"exists": true
}
```

- account: the checked account address.
- exists: the account current status.

## Seeded

### ****Description:****

This function computes the account from seed.

### **Previous Steps:**

1. Create an account

### **Steps:**

1. Call the account/seeded endpoint with the following request body:

### **Example Input:**

```jsx
{
		"seed": "//Alice"
}
```

- seed: the seed of the account to be computed.

### **Expected Output:**

```jsx
{
		"seed": "//Alice",
		"account": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
}
```

- seed: the seed of the account.
- account: the account address that was computed.

## **Balance**

### **Description:**

This function checks the balance of sugar in an account.

### **Previous Steps:**

1. Create an account

### **Steps:**

1. Call the account/balance endpoint with the following request body:

### **Example Input:**

```jsx
{
		"account": "5EcFZ4EkYFMYcpJWyjgDde4zG8tVvmdanXeSyNTyD42r552b"
}
```

- account: the account address that will be checked.

### **Expected Output:**

```jsx
{
		"amount": 750000000000
}
```

- amount: the amount of sugar in that given account.