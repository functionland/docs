# FULA CONTRACT API

This is the end point that interacts with Fula blockchain contract

## Set up the .env file

Using the .env.example create the .env file and fill the needed values

## LAUNCH THE FULA CONTRACT API
	
Run the following command
	
	cargo run

## Available endpoints

Health: Verifies that the API is running
		
	path: "health"
	
### Read endpoints 
	
Supply: Consult the total supply of the token
	
	paths: "goerli/supply", "mumbai/supply"
		
Allowance: Consult the current allowance of the given accounts
	
	paths: "goerli/allowance", "mumbai/allowance"
	
### Write endpoints 
	
Mint: Mint tokens to the given account
	
	paths: "goerli/mint", "mumbai/mint"
	
Burn: Burn tokens from the given account if the necessary allowance

	paths: "goerli/burn", "mumbai/burn"
	
Transfer: Transfer the tokens from the given account if the necessary allowance

	paths: "goerli/transfer", "mumbai/transfer"
	
Increase_allowance: Increase the amount of tokens to be able to burn or transfer

	paths: "goerli/increase_allowance", "mumbai/increase_allowance"
	
Decrease_allowance: Decrease the amount of tokens to be able to burn or transfer

	paths: "goerli/decrease_allowance", "mumbai/decrease_allowance"
