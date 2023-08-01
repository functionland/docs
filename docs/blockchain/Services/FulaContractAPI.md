# Fula Contract API

This is the end point that interacts with Fula blockchain contract

## Run the Node API

Requires a [Node](Node.md) running.

## Install dependencies

	sudo apt-get install build-essential

## Set up the .env file

Using the .env.example create the .env file and fill the needed values

## LAUNCH THE FULA CONTRACT API
	
Run the following command
	
	cargo run --release -- --node-server=wss://node3.functionyard.fx.land

Alternatively, if you want to set it up as a service:

	cargo build --release

then:

	sudo nano /etc/systemd/system/fula-contract-api.service

And enter hte below in the file:

```
[Unit]
Description=Fula Contract API

[Service]
TimeoutStartSec=0
Type=simple
ExecStart=/home/user/fula-contract-api/target/release/functionland-contract-api --node-server=wss://node3.funct>Restart=always
StandardOutput=file:/var/log/fula-contract-api.log
StandardError=file:/var/log/fula-contract-api.err

[Install]
WantedBy=multi-user.target
```

Then enable the service and start it. You can test the end points like below:

	curl -X POST http://127.0.0.1:4001/health

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
