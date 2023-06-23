# Build Node

1- Install Rust

	curl https://sh.rustup.rs -sSf | sh

2- Install dependencies:

	sudo apt-get install protobuf-compiler libclang-dev build-essential

3- Clone node repo

	git clone sugarfundge-node
	
4- Enter the folder

	cd ./sugarfundge-node
	
5- Install wasm32

	rustup target add wasm32-unknown-unknown

6- Build

	cargo build --release

Now a folder named "./target/release" is create where it contains all the compiled codes. If any error occured, your system might still be missing some dependancies. Please follow the full guide below and run step 6 again afterwards:

## [Install OS dependencies and Rust](https://github.com/functionland/sugarfunge-node/blob/main/docs/rust-setup.md)