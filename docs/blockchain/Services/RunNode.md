# Run Node

This docuemnt explains how to run Fula nodes

- Requires a [Build](BuildNode) .

At the moment two validator nodes are run and managed by Fula Governance Association and others cannot run validator nodes. You can still run non-validator nodes (instructions after the validator node)

------------------------------------------------------------------------------------------------------------------------------------
<h1>Run Validator Nodes</h1>

A minimum of two validator nodes is required for the network to run.

1) CREATION OF THE KEYS OF EACH VALIDATOR ACCOUNT (You need to do this steap twice at least):

Note: For each validator node, we use the same password for Aura and Grandpa account, but the two validator nodes each have differnet passwords	

a) Generate the Aura Account

	./target/release/sugarfunge-node key generate --scheme Sr25519 --password-interactive

sample output:

	Secret phrase:     toe dust enhance uncover version polar ugly person sunset wrist swamp lawsuit
	Network ID:        substrate
	Secret seed:       0xf8a168f8d987dde4d48e055068f480ba64950173c9f58826effc3b7d9c699fb7
	Public key (hex):  0x9cea935ffd8f8e72de04a1022e94fb80fc1e4c56e724e83cc995017f8735d40b
	Account ID:        0x9cea935ffd8f8e72de04a1022e94fb80fc1e4c56e724e83cc995017f8735d40b
	Public key (SS58): 5FcT1aGqnzvkq3gtp65CKz2qRBUTSUxUrmWkqAF8o9MCLHV1
	SS58 Address:      5FcT1aGqnzvkq3gtp65CKz2qRBUTSUxUrmWkqAF8o9MCLHV1
	
b) Generate the Grandpa Account using the secret phrase of the Aura Account

	./target/release/sugarfunge-node key inspect --password-interactive --scheme Ed25519 "toe dust enhance uncover version polar ugly person sunset wrist swamp lawsuit"

sample output:

	Secret phrase:     toe dust enhance uncover version polar ugly person sunset wrist swamp lawsuit
	Network ID:        substrate
	Secret seed:       0xf8a168f8d987dde4d48e055068f480ba64950173c9f58826effc3b7d9c699fb7
	Public key (hex):  0x629b9993ff8409b7a554e73272fd34fc8710a7ab7cc3a139850a283d1a451669
	Account ID:        0x629b9993ff8409b7a554e73272fd34fc8710a7ab7cc3a139850a283d1a451669
	Public key (SS58): 5EHzmmawH9HJPF6cEWeTcBLv8wHW43XUaVgypX462q8T1fbT
	SS58 Address:      5EHzmmawH9HJPF6cEWeTcBLv8wHW43XUaVgypX462q8T1fbT

2) GENERATE THE NODE-KEY AND PEER-ID FOR EACH VALIDATOR ACCOUNT
  
a) Generate a random node key and peer-id (run twice, once for each validator node)
	
	./target/release/sugarfunge-node key generate-node-key

sample output:

	Peer-id: 12D3KooWC9nU1QzG8m3dZKSNqssmasdupLPhgu9adYe1h4ToBW7r
	key: 4ac42a38b622dd9943c49ca9300000236406d35a43f0ce82eef556c1d81a4157

b) Save the key as a file
	
	echo -n "4ac42a38b622dd9943c49ca9300000236406d35a43f0ce82eef556c1d81a4157" > user-one-key

And the same for user-two-key

c) Verify that the peer-id is correct using the node-key stored 
	
	./target/release/sugarfunge-node key inspect-node-key --file user-one-key

output should be the peer id

3) CREATION OF CHAINSPECS AND CHAINSPECSRAW
 
a) Before generating the CustomSpec.json, in the file node/src/chain_spec add the Peer-id of each of the validators in the node_authorization of the Genesis Config
	
	sudo nano ./node/src/chain_spec.rs

![Replacing Peer-id in the file](/img/validatorNode1.png)

a.2) Now you need to rebuild the project to apply the above change in release:
	
	cd ..

	sudo rm ./sugarfunge-node

	git clone https://github.com/functionland/sugarfunge-node.git

	cd sugarfunge-node

	cargo build --release

	
b) Generate the CustomSpec.json

	./target/release/sugarfunge-node build-spec --disable-default-bootnode --chain local > customSpec.json

output: A file named customSpec.json is created in the same folder
	
c) Make the necessary changes if desired: 

	sudo nano ./customSpec.json
	
Change the default account of Alice and Bob for Custom Accounts (At the end of hte file under session>keys find Aura and grandpa for both accounts and change all occurances of those)

![Changing default accounts](/img/validatorNode2.png)

Here is the official Fula customSpec.json file:
[![Fula official specs]](/documents/customSpec.json)


d) Once the changes to the CustomSpec.json have been made, generate the CustomSpecRaw.json

	./target/release/sugarfunge-node build-spec --chain=customSpec.json --raw --disable-default-bootnode > customSpecRaw.json
	
Here is the official Fula customSpecRaw.json file:
[![Fula official generated raw specs]](/documents/customSpecRaw.json)

 
4) ADD THE KEYS TO THE KEYSTORE FOR EACH VALIDATOR: This is made so the Accounts can import and finished blocks if not added the accounts won't produce them
    
a) Add the Aura Key (replace the key phrase with generated one in step 1):

	./target/release/sugarfunge-node key insert --base-path=.tmp/node01 --chain customSpecRaw.json --scheme Sr25519 --suri "toe dust enhance uncover version polar ugly person sunset wrist swamp lawsuit" --password-interactive --key-type aura


b) Add the Grandpa Key (replace the key phrase with generated one in step 1):

	./target/release/sugarfunge-node key insert --base-path=.tmp/node01 --chain customSpecRaw.json --scheme Ed25519 --suri "toe dust enhance uncover version polar ugly person sunset wrist swamp lawsuit" --password-interactive --key-type gran

Note: For other validators the following fields should be change accordingly:
	--base-path= .temp/node02
	--suri “ the corresponding secret phrase”
     
5) COMMANDS TO START THE NODES

a) For the main validator node execute (replace the node-key with correct key of peer id):

	cargo run --release -- --chain ./customSpecRaw.json --enable-offchain-indexing true --base-path=.tmp/node01 --port=30334 --ws-port 9944 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external --validator --name MyNode01 --password-interactive --node-key=4ac42a38b622dd9943c49ca9300000236406d35a43f0ce82eef556c1d81a4157

b) For the rest of validator nodes execute (replacing node-key with second peer id key and peerID after /p2p/ with the main node peer id) :

	cargo run --release -- --chain ./customSpecRaw.json --enable-offchain-indexing true --base-path=.tmp/node02 --port=30335 --ws-port 9945 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external --bootnodes /ip4/127.0.0.1/tcp/30334/p2p/12D3KooWC9nU1QzG8m3dZKSNqssmasdupLPhgu9adYe1h4ToBW7r --validator --name MyNode02 --password-interactive --node-key=5ed89682d5d0d2efd35f98a248b97cc1f6155e6af169719f3d54900d34a98a4a

Note: For each of the commands the following fields should be change accordingly:

	--base-path = .temp/node02 or .temp/node03
	--port = To a port not used in other commands
	--ws-port = To a port not used in other commands
	--bootnodes = Update the last segment value to the peer-id of the main validator obtained in step 2
	--name = to the given name
	--node-key with the node key values obtained in step 2 for each account



<h1>Run Non-Validator Nodes</h1>

To add new nodes to the network that are not authorized:

1) GENERATE THE NODE-KEY AND PEER-ID FOR THE USER-THREE

a) Generate a random node key and peer-id 
	
	./target/release/sugarfunge-node key generate-node-key
	
sample output:

	Peer-id: 12D3KooWF3MLTqgFRAKVqAdscdfZSSb9xXKFJ8paNEbtETKczUto
	key: 239afb9dae01b5c010c454f1e1df64ce83b3e13803540df079677860a745d168

b) Save the key as a file
	
	echo -n "239afb9dae01b5c010c454f1e1df64ce83b3e13803540df079677860a745d168" > user-three-key

c) Verify that the peer-id is correct using the node-key stored 
	
	./target/release/sugarfunge-node key inspect-node-key --file user-three-key
		
2) START NODE COMMAND FOR THE NOT AUTHORIZE NODE

	cargo run --release -- --chain ./customSpecRaw.json --enable-offchain-indexing true --base-path=.tmp/node03 --port=30336 --ws-port 9946 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external --bootnodes /dns4/node.functionyard.fx.land/tcp/30334/p2p/12D3KooWBeXV65svCyknCvG1yLxXVFwRxzBLqvBJnUF6W84BLugv --name MyNode03 --node-key=[key3] --offchain-worker always

Note: For each of the commands the following fields should be change accordingly:

	--base-path = .temp/node02 or .temp/node03
	--port = To a port not used in other commands
	--ws-port = To a port not used in other commands
	--name = to the given name
	--node-key with the node key values obtained in step 2 for each account
	
Here is the official Fula customSpecRaw.json file:
[![Fula official raw specs]](/documents/customSpecRaw.json)

---------------------------------------------------------------------------
# Using Docker

## [Install Docker](https://docs.docker.com/engine/install/)

## Build the image

```bash
cd sugarfunge-node

sudo mkdir /var/lib/.sugarfunge-node
sudo chmod 777 /var/lib/.sugarfunge-node
sudo mkdir /var/lib/.sugarfunge-node/passwords
sudo mkdir /var/lib/.sugarfunge-node/keys
sudo mkdir /var/lib/.sugarfunge-node/keys/node01
sudo mkdir /var/lib/.sugarfunge-node/keys/node02
sudo mkdir /var/lib/.sugarfunge-node/data
sudo mkdir /var/lib/.sugarfunge-node/data/node01
sudo mkdir /var/lib/.sugarfunge-node/data/node02
```

Now insert Keys:

```bash
./target/release/sugarfunge-node key insert --base-path=/var/lib/.sugarfunge-node/keys/node01 --chain customSpecRaw.json --scheme Sr25519 --suri "YOUR SECRET WORDS" --password-interactive --key-type aura

./target/release/sugarfunge-node key insert --base-path=/var/lib/.sugarfunge-node/keys/node01 --chain customSpecRaw.json --scheme Sr25519 --suri "YOUR SECRET WORDS" --password-interactive --key-type gran
 ```

 Redo the same for node02 and put the keys for node02.

```bash
sudo nano /var/lib/.sugarfunge-node/passwords/password1.txt
```
Insert the password for node1 and redo with password2 for node2.  Then revert the permission:

```bash
sudo chmod 755 /var/lib/.sugarfunge-node
```

Build:

```bash
docker build -t sugarfunge-node:local -f docker/Dockerfile .
```

Then you can run the validator nodes like:

```bash
docker run --rm -d --name MyNode01 --network host -v /var/lib/.sugarfunge-node/passwords/password1.txt:/password.txt -v /var/lib/.sugarfunge-node/keys/node01:/keys -v /var/lib/.sugarfunge-node/data/node01:/data sugarfunge-node:local --chain /customSpecRaw.json --enable-offchain-indexing true --base-path=/data --keystore-path=/keys --port=30334 --ws-port 9944 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external --validator --name MyNode01 --password-filename "/password.txt" --node-key=[key1]

docker run --rm -d --name MyNode02 --network host -v /var/lib/.sugarfunge-node/passwords/password2.txt:/password.txt -v /var/lib/.sugarfunge-node/keys/node02:/keys -v /var/lib/.sugarfunge-node/data/node02:/data sugarfunge-node:local --chain ./customSpecRaw.json --enable-offchain-indexing true --base-path=/data --keystore-path=/keys --port=30335 --ws-port 9945 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external --bootnodes /ip4/127.0.0.1/tcp/30334/p2p/[peerId1] --validator --name MyNode02 --password-filename "/password.txt" --node-key=[key2]
```

For non-validator node on Functionyard network, you can run:

```bash
docker run --rm -d --name MyNode03 --network host -v /var/lib/.sugarfunge-node/passwords/password3.txt:/password.txt -v /var/lib/.sugarfunge-node/keys/node03:/keys -v /var/lib/.sugarfunge-node/data/node03:/data sugarfunge-node:local --chain ./customSpecRaw.json --enable-offchain-indexing true --base-path=/data --keystore-path=/keys --port=30336 --ws-port 9946 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external --bootnodes /dns4/node.functionyard.fx.land/tcp/30334/p2p/12D3KooWBeXV65svCyknCvG1yLxXVFwRxzBLqvBJnUF6W84BLugv --name MyNode03 --node-key=[key3] --offchain-worker always
```

## Run as service

```bash
sudo nano /etc/systemd/system/docker-sugarfunge-node1.service
```

And insert:

```bash
[Unit]
Description=Docker Sugarfunge Node 1
After=docker.service
Requires=docker.service

[Service]
TimeoutStartSec=0
Type=simple
ExecStart=/usr/bin/docker run --rm --name MyNode01 --network host -v /var/lib/.sugarfunge-node/passwords/password1.txt:/password.txt -v /var/lib/.sugarfunge-node/keys/node01:/keys -v /var/lib/.sugarfunge-node/data/node01:/data sugarfunge-node:local --chain /customSpecRaw.json --enable-offchain-indexing true --base-path=/data --keystore-path=/keys --port=30334 --ws-port 9944 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external --validator --name MyNode01 --password-filename "/password.txt" --node-key=[key]
ExecStop=/usr/bin/docker stop MyNode01
Restart=always
StandardOutput=file:/var/log/MyNode01.log
StandardError=file:/var/log/MyNode01.err

[Install]
WantedBy=multi-user.target
```

```bash
sudo nano /etc/systemd/system/docker-sugarfunge-node2.service
```

And insert:

```bash
[Unit]
Description=Docker Sugarfunge Node 2
After=docker.service
Requires=docker.service

[Service]
TimeoutStartSec=0
Type=simple
ExecStart=/usr/bin/docker run --rm --name MyNode02 --network host -v /var/lib/.sugarfunge-node/passwords/password2.txt:/password.txt -v /var/lib/.sugarfunge-node/keys/node02:/keys -v /var/lib/.sugarfunge-node/data/node02:/data sugarfunge-node:local --chain ./customSpecRaw.json --enable-offchain-indexing true --base-path=/data --keystore-path=/keys --port=30335 --ws-port 9945 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external --bootnodes /ip4/127.0.0.1/tcp/30334/p2p/[peerId1] --validator --name MyNode02 --password-filename "/password.txt" --node-key=[Key2]
ExecStop=/usr/bin/docker stop MyNode02
Restart=always
StandardOutput=file:/var/log/MyNode02.log
StandardError=file:/var/log/MyNode02.err

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable docker-sugarfunge-node1.service
sudo systemctl enable docker-sugarfunge-node2.service
sudo systemctl start docker-sugarfunge-node1.service
sudo systemctl start docker-sugarfunge-node2.service
```
