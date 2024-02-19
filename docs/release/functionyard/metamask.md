---
title: Token in Metamask
id: metamask
---

## Adding BORG Token to MetaMask on Mumbai Chain

This guide explains how to add the BORG token, which is not automatically listed in MetaMask, to your wallet on the Mumbai test network. There is an easy way and a manual way!

## Easy Way

### Mumbai

1. Adding `Mumbai` Network to Metamask: First, open [this link to add Mumbai testnet to your MetaMask](https://chainlist.org/chain/80001). Now click on the `Add to Metamask` button. It will open your Metamask extension on Chrome and add Mumbai Network to it (if not already added).

![mumbai connect button](/img/metamask/mubai-connect-button.png)

2. Adding the `BORG` token on `Mumbai`: First, open [this link to add Borg to Mumbai network](https://docs.metamask.io/wallet/reference/wallet_watchasset/?type=ERC20&options[address]=0x99a8b2B50c4bFBf916Add5DFdf680fc873FA81f4&options[symbol]=BORG&options[decimals]=18&options[image]=https://raw.githubusercontent.com/functionland/sugarfunge-explorer/master/assets/BORG.svg&options[tokenId]=BORG) and on the bottom right (you may need to scroll), click on the `Send Request` button. It opens your Metamask extension on Chrome and adds the `BORG` token to the `Mumbai` network (if not already added).

<div class="text--center">
   <img src="/img/metamask/connect-borg-button.png" />
</div>

### Goerli

1. Adding `Goerli` Network to Metamask: First, open [this link to add Goerli testnet to your MetaMask](https://chainlist.org/chain/5) and click on the `Add to Metamask` button. It will open your Metamask extension on Chrome and add Goerli Network to it (if not already added).

![Alt text](/img/metamask/goerli-connect-button.png)

2. Adding the `BORG` token on `Goerli`: Open [this link to add Borg to Goerli testnet](https://docs.metamask.io/wallet/reference/wallet_watchasset/?type=ERC20&options[address]=0x4fE33FB41B2A50ac82732C0399C9e2A82C1cBb5E&options[symbol]=BORG&options[decimals]=18&options[image]=https://raw.githubusercontent.com/functionland/sugarfunge-explorer/master/assets/BORG.svg&options[tokenId]=BORG)and on the bottom right (you may need to scroll), click on the `Send Request` button. It will open your Metamask extension on Chrome and add the `BORG` token to the `Goerli` network (if not already added).

## Manual Way (Mobile/Desktop)

### Step 1: Select the Mumbai Network in MetaMask

Ensure you have MetaMask installed and select the Mumbai Testnet. If Mumbai is not listed:

1. **Select "Add Network" manually**.
<!-- New lines necessary for proper rendered styling on webpage -->
   * **Mobile**: 
   
   <img src="/img/metamask/mobile-network-sel.jpg" width="400" />

   * **Desktop**:
   
   <img src="/img/metamask/desktop-network-sel.png" width="400" />

   * Alternatively, you can go to `Settings` -> `Networks` -> `Add network`, then `Custom Networks` or `Add a network manually`.
2. **Enter the following details**:
   - Network Name: Mumbai Testnet
   - New RPC URL: `https://rpc-mumbai.maticvigil.com/`
   - Chain ID: `80001`
   - Currency Symbol: `MATIC`
   - Block Explorer URL: `https://polygonscan.com/`

### Step 2: Add BORG Token

1. Open the MetaMask extension
2. Go to the `Assets` or `Tokens` tab
3. Scroll down and click `Import Tokens`
4. Switch to the `Custom Token` tab
5. Enter the BORG Token Contract Address: `0x99a8b2B50c4bFBf916Add5DFdf680fc873FA81f4`
   - The token symbol and decimals should auto-fill. If not, you may need to enter them manually.
6. Click `Add Custom Token`
7. Review the token details and click `Import Tokens`

Congratulations, the BORG token is now added to your MetaMask wallet on the Mumbai chain!
