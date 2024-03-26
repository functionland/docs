---
title: Token in Metamask
id: metamask
---

## Adding BORG Token to MetaMask on Mumbai Chain

This guide explains how to add the BORG token, which is not automatically listed in MetaMask, to your wallet on the Mumbai test network. There is an easy way and a manual way!

## Easy Way (Desktop)

1. Adding `Mumbai` Network to Metamask: First, open [this link to add Mumbai testnet to your MetaMask](https://chainlist.org/chain/80001). Now click on the `Add to Metamask` button. It will open your Metamask extension on Chrome and add Mumbai Network to it (if not already added).

![mumbai connect button](/img/fxyard-network/mubai-connect-button.png)

2. Adding the `BORG` token on `Mumbai`: First, open [this link to add Borg to Mumbai network](https://docs.metamask.io/wallet/reference/wallet_watchasset/?type=ERC20&options[address]=0x99a8b2B50c4bFBf916Add5DFdf680fc873FA81f4&options[symbol]=BORG&options[decimals]=18&options[image]=https://raw.githubusercontent.com/functionland/sugarfunge-explorer/master/assets/BORG.svg&options[tokenId]=BORG) and on the bottom right (you may need to scroll), click on the `Send Request` button. It opens your Metamask extension on Chrome and adds the `BORG` token to the `Mumbai` network (if not already added).

<div class="text--center">
   <img src="/img/fxyard-network/connect-borg-button.png" />
</div>

## Easy Way (Mobile)

In Metamask mobile, you have to be using the browser that is available in the MetaMask app for the sites to recognize your Metamask wallet.

1. Copy/Paste https://chainlist.org/chain/80001 into the Metamask web browser.
2. Click on `Connect Wallet` under where it says `Mumbai`. Confirm popup.
<div class="text--center">
   <img src="/img/fxyard-network/mobile-mm-connect.png" style={{width: 500}}/>
</div>
3. Copy/Paste, into a new tab of the Metamask web browser, https://docs.metamask.io/wallet/reference/wallet_watchasset/?type=ERC20&options[address]=0x99a8b2B50c4bFBf916Add5DFdf680fc873FA81f4&options[symbol]=BORG&options[decimals]=18&options[image]=https://raw.githubusercontent.com/functionland/sugarfunge-explorer/master/assets/BORG.svg&options[tokenId]=BORG.
4. Scroll all the way down to the `Send Request` button. Confirm popup.

## Manual Way (Mobile/Desktop)

#### Step 1: Select the Mumbai Network in MetaMask

Ensure you have MetaMask installed and select the Mumbai Testnet. If Mumbai is not listed:

1. **Select "Add Network" manually**.
<!-- New lines necessary for proper rendered styling on webpage -->
   * **Mobile**: First, click on circled button. Then, `Add Network`
   
   <img src="/img/fxyard-network/mobile-add-network.png" width="400" />

   * **Desktop**: First, click on circled button. Then, `Add Network`
   
   <img src="/img/fxyard-network/desktop-network-sel.png" width="400" />

   * Alternatively, you can go to `Settings` -> `Networks` -> `Add network`, then `Custom Networks` or `Add a network manually`.
2. **Enter the following details**:
   - Network Name: Mumbai Testnet
   - New RPC URL: `https://rpc-mumbai.maticvigil.com/`
   - Chain ID: `80001`
   - Currency Symbol: `MATIC`
   - Block Explorer URL: `https://polygonscan.com/`

#### Step 2: Add BORG Token

1. Open the MetaMask extension
2. Go to the `Assets` or `Tokens` tab
3. Scroll down and click `Import Tokens`
4. Switch to the `Custom Token` tab
5. Enter the BORG Token Contract Address: `0x99a8b2B50c4bFBf916Add5DFdf680fc873FA81f4`
   - The token symbol and decimals should auto-fill. If not, you may need to enter them manually.
6. Click `Add Custom Token`
7. Review the token details and click `Import Tokens`

Congratulations, the BORG token is now added to your MetaMask wallet on the Mumbai chain!

## Troubleshoot

1. **BORG token no longer shows in Metamask wallet.** This may be because the Mumbai chain rpc provider is unavailable. You can remedy this by redoing the steps outlined in this guide ([easy way](#adding-borg-token-to-metamask-on-mumbai-chain) or [manual way](#manual-way-mobiledesktop)).
2. **Error when adding Mumbai chain.** This may occur because the Mumbai chain rpc provider is unavailable, if you are selecting a provider from the list, make sure that it has a green check mark for both `Score` and `Privacy`. This will most likely occur when doing the [manual way](#manual-way-mobiledesktop).

![mumbai chain options](/img/fxyard-network/mumbai_options.png)
