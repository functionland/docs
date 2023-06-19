A minimum of tw ovalidator nodes is required for hte network to run.

- Requires a [Build](buildNode.md) .
- Run step 1 below to create accounts
- Run step 2
- Run step 5
- Edit node/src/chain_specs

------------------------------------------------------------------------------------------------------------------------------------
1) COMMANDS FOR THE CREATION OF NEW KEYS FOR AN ACCOUNT

	a) Generate the Aura Account

		./target/release/sugarfunge-node key generate --scheme Sr25519 --password-interactive
	
	b) Generate the Grandpa Account using the secret phrase of the Aura Account

		./target/release/sugarfunge-node key inspect --password-interactive --scheme Ed25519 "spider rose click hurt chapter infant guard roof spoon alpha area nominee"

-------------------------------------------------------------------------------------------------------------------------------------

2) COMMANDS FOR THE CREATION OF CHAINSPECS AND CHAINSPECSRAW
 
	a) Generate the CustomSpec.json

		./target/release/sugarfunge-node build-spec --disable-default-bootnode --chain local > customSpec.json
	
	b) Make the necessary changes if desired: 
		> Change the default account of Alice and Bob for Custom Accounts
	
	c) Once the changes to the CustomSpec.json have been made generate the CustomSpecRaw.json

		./target/release/sugarfunge-node build-spec --chain=customSpec.json --raw --disable-default-bootnode > customSpecRaw.json

-------------------------------------------------------------------------------------------------------------------------------------
EXAMPLE OF USER GENERATED

> USE-ONE:
 
Password: 123
  
  Aura Account of the USER-ONE:
  
  Secret phrase:     toe dust enhance uncover version polar ugly person sunset wrist swamp lawsuit
  Network ID:        substrate
  Secret seed:       0xf8a168f8d987dde4d48e055068f480ba64950173c9f58826effc3b7d9c699fb7
  Public key (hex):  0x9cea935ffd8f8e72de04a1022e94fb80fc1e4c56e724e83cc995017f8735d40b
  Account ID:        0x9cea935ffd8f8e72de04a1022e94fb80fc1e4c56e724e83cc995017f8735d40b
  Public key (SS58): 5FcT1aGqnzvkq3gtp65CKz2qRBUTSUxUrmWkqAF8o9MCLHV1
  SS58 Address:      5FcT1aGqnzvkq3gtp65CKz2qRBUTSUxUrmWkqAF8o9MCLHV1
  
  Grandpa Account of the USER-ONE:
  
  Secret phrase:     toe dust enhance uncover version polar ugly person sunset wrist swamp lawsuit
  Network ID:        substrate
  Secret seed:       0xf8a168f8d987dde4d48e055068f480ba64950173c9f58826effc3b7d9c699fb7
  Public key (hex):  0x629b9993ff8409b7a554e73272fd34fc8710a7ab7cc3a139850a283d1a451669
  Account ID:        0x629b9993ff8409b7a554e73272fd34fc8710a7ab7cc3a139850a283d1a451669
  Public key (SS58): 5EHzmmawH9HJPF6cEWeTcBLv8wHW43XUaVgypX462q8T1fbT
  SS58 Address:      5EHzmmawH9HJPF6cEWeTcBLv8wHW43XUaVgypX462q8T1fbT

 
3) ADD THE KEYS TO THE KEYSTORE: This is made so the Accounts can import and finished blocks if not added the accounts won't produce them
    
	a) Add the Aura Key:
	
 		./target/release/sugarfunge-node key insert --base-path /tmp/node01 --chain customSpecRaw.json --scheme Sr25519 --suri "toe dust enhance uncover version polar ugly person sunset wrist swamp lawsuit" --password-interactive --key-type aura
    	
    	b) Add the Grandpa Key:
    	
    		./target/release/sugarfunge-node key insert --base-path /tmp/node01 --chain customSpecRaw.json --scheme Ed25519 --suri "toe dust enhance uncover version polar ugly person sunset wrist swamp lawsuit" --password-interactive --key-type gran
     
4) START THE NODE COMMAND WITH CUSTOM CHAINSPECRAW
    
    cargo run --release -- --chain ./customSpecRaw.json --enable-offchain-indexing true --base-path /tmp/node01 --port=30334 --ws-port 9944 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external --validator --name MyNode01 --password-interactive
  
5) GENERATE THE NODE-KEY AND PEER-ID FOR THE USER ONE
  
	a) Generate a random node key and peer-id 
	
		./target/release/sugarfunge-node key generate-node-key

		Peer-id: 12D3KooWC9nU1QzG8m3dZKSNqssmasdupLPhgu9adYe1h4ToBW7r
		key: 4ac42a38b622dd9943c49ca9300000236406d35a43f0ce82eef556c1d81a4157

	b) Save the key as a file
	
		echo -n "4ac42a38b622dd9943c49ca9300000236406d35a43f0ce82eef556c1d81a4157" > user-one-key

	c) Verify that the peer-id is correct using the node-key stored 
	
		./target/release/sugarfunge-node key inspect-node-key --file user-one-key

6) START THE NODE COMMAND WITH THE NODE-KEY

cargo run --release -- --chain ./customSpecRaw.json --enable-offchain-indexing true --base-path /tmp/node01 --port=30334 --ws-port 9944 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external --validator --name MyNode01 --password-interactive --node-key=4ac42a38b622dd9943c49ca9300000236406d35a43f0ce82eef556c1d81a4157

-----------------------------------------------------------------------------------------------------------------------------------------
 
> USER-TWO:
 
Password: 456

  Aura account of the USER-TWO:

  Secret phrase:     spider rose click hurt chapter infant guard roof spoon alpha area nominee
  Network ID:        substrate
  Secret seed:       0x6ffbee2aa6e30eb91068b7fb774b8fcc08c72304cac472c7e44fde94b380a7b8
  Public key (hex):  0xdee77879886e6caf74ea6c53ecfab0cda3aa5725956db030305277d0dd4b256a
  Account ID:        0xdee77879886e6caf74ea6c53ecfab0cda3aa5725956db030305277d0dd4b256a
  Public key (SS58): 5H6yFNsRYaciHRvTaEbeYpzhEVgAxzU7SpWume4pMZbzADNH
  SS58 Address:      5H6yFNsRYaciHRvTaEbeYpzhEVgAxzU7SpWume4pMZbzADNH
  
  Grandpa account of the USER-TWO:
  
  Secret phrase:     spider rose click hurt chapter infant guard roof spoon alpha area nominee
  Network ID:        substrate
  Secret seed:       0x6ffbee2aa6e30eb91068b7fb774b8fcc08c72304cac472c7e44fde94b380a7b8
  Public key (hex):  0xec550f22c4a4af7cec58d1fa2cc5c2966bb56e275b08eeef14fced9886cacf0c
  Account ID:        0xec550f22c4a4af7cec58d1fa2cc5c2966bb56e275b08eeef14fced9886cacf0c
  Public key (SS58): 5HQaRec6WFNFgAD6zRpPLhHampk3ujBS1v3nRLCgejLNvwPC
  SS58 Address:      5HQaRec6WFNFgAD6zRpPLhHampk3ujBS1v3nRLCgejLNvwPC
 

 
3) ADD THE KEYS TO THE KEYSTORE: This is made so the Accounts can import and finished blocks if not added the accounts won't produce them
    
	a) Add the Aura Key:
	
 		./target/release/sugarfunge-node key insert --base-path /tmp/node02 --chain customSpecRaw.json --scheme Sr25519 --suri "spider rose click hurt chapter infant guard roof spoon alpha area nominee" --password-interactive --key-type aura
    	
    	b) Add the Grandpa Key:
    	
    		./target/release/sugarfunge-node key insert --base-path /tmp/node02 --chain customSpecRaw.json --scheme Ed25519 --suri "spider rose click hurt chapter infant guard roof spoon alpha area nominee" --password-interactive --key-type gran
     
4) START THE NODE COMMAND WITH CUSTOM CHAINSPECRAW
    
    cargo run --release -- --chain ./customSpecRaw.json --enable-offchain-indexing true --base-path /tmp/node02 --port=30335 --ws-port 9945 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external --bootnodes /ip4/127.0.0.1/tcp/30334/p2p/12D3KooWLgumLMPSeyf7X7xKysdgNgiKRmWvDP7btezurWospEA6 --validator --name MyNode02 --password-interactive
  
5) GENERATE THE NODE-KEY AND PEER-ID FOR THE USER-TWO
  
	a) Generate a random node key and peer-id 
	
		./target/release/sugarfunge-node key generate-node-key

		Peer-id: 12D3KooWDMrqqWiNSEhAFd7FifUMNpc8GdjoGr1sGdWEciuSLMqA
		key: 5ed89682d5d0d2efd35f98a248b97cc1f6155e6af169719f3d54900d34a98a4a

	b) Save the key as a file
	
		echo -n "5ed89682d5d0d2efd35f98a248b97cc1f6155e6af169719f3d54900d34a98a4a" > user-two-key

	c) Verify that the peer-id is correct using the node-key stored 
	
		./target/release/sugarfunge-node key inspect-node-key --file user-two-key

6) START THE NODE COMMAND WITH THE NODE-KEY

cargo run --release -- --chain ./customSpecRaw.json --enable-offchain-indexing true --base-path /tmp/node02 --port=30335 --ws-port 9945 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external --bootnodes /ip4/127.0.0.1/tcp/30334/p2p/12D3KooWC9nU1QzG8m3dZKSNqssmasdupLPhgu9adYe1h4ToBW7r --validator --name MyNode02 --password-interactive --node-key=5ed89682d5d0d2efd35f98a248b97cc1f6155e6af169719f3d54900d34a98a4a

----------------------------------------------------------------------------------------------------------------------------------------- 

NEW NODES TO ADD TO THE TESNET

-----------------------------------------------------------------------------------------------------------------------------------------

> USER-THREE:

1) GENERATE THE NODE-KEY AND PEER-ID FOR THE USER-THREE

	a) Generate a random node key and peer-id 
	
		./target/release/sugarfunge-node key generate-node-key

		Peer-id: 12D3KooWF3MLTqgFRAKVqAdscdfZSSb9xXKFJ8paNEbtETKczUto
		key: 239afb9dae01b5c010c454f1e1df64ce83b3e13803540df079677860a745d168

	b) Save the key as a file
	
		echo -n "239afb9dae01b5c010c454f1e1df64ce83b3e13803540df079677860a745d168" > user-three-key

	c) Verify that the peer-id is correct using the node-key stored 
	
		./target/release/sugarfunge-node key inspect-node-key --file user-three-key
		
2) START NODE COMMAND FOR THE NOT AUTHORIZE NODE

 cargo run --release -- --chain ./customSpecRaw.json --enable-offchain-indexing true --base-path /tmp/node03 --port=30336 --ws-port 9946 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external --name MyNode03 --node-key=239afb9dae01b5c010c454f1e1df64ce83b3e13803540df079677860a745d168 --offchain-worker always

----------------------------------------------------------------------------------------------------------------------------------------

> USER-FOUR:

1) GENERATE THE NODE-KEY AND PEER-ID FOR THE USER-FOUR

	a) Generate a random node key and peer-id 
	
		./target/release/sugarfunge-node key generate-node-key

		Peer-id: 12D3KooWM87x5LyKoRohdHBYNQ7LGEg9UJWYK1KWnDBbMdb7k5iT
		key: 3fddc50e6a6b5d86367d20dfda914f1fe5078cbf7b1a73b88b4be4f986ae4389

	b) Save the key as a file
	
		echo -n "3fddc50e6a6b5d86367d20dfda914f1fe5078cbf7b1a73b88b4be4f986ae4389" > user-four-key

	c) Verify that the peer-id is correct using the node-key stored 
	
		./target/release/sugarfunge-node key inspect-node-key --file user-four-key

