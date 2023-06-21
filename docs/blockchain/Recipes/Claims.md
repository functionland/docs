# Claims

## Claim tokens

### Description:

Its retrives all the claims done by the clients.

### Steps:

1. Call the fula/claims endpoint with the following request body:

### Expected Input:

```jsx
{}
```

### Example Output:

```jsx
{
		"claims": [
				{
				    "account": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
				    "minted_labor_tokens": 10,
						"expected_labor_tokens": 0,
						"minted_challenge_tokens": 1000
		}
}
```

- account: the account associated with the claims tokens.
- minted_labor_tokens: the amount of labor tokens minted.
- expected_labor_tokens:  the amount of labor tokens expected.
- minted_challenge_tokens:  the amount of challenge tokens minted.