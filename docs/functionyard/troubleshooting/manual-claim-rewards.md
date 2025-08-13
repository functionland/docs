# Manual Claim Rewards

If the "Claim Rewards" button in the FxBlox app is not working or the transaction fails, you can manually claim your rewards directly from the blockchain explorer. Follow these step-by-step instructions:

## Prerequisites

- You must have a Web3 wallet (like MetaMask) installed and connected
- You need to have completed at least one transaction that generated rewards

## Step-by-Step Instructions

### Step 1: Find Your Transaction Details

1. **Go to the Pool Contract Explorer**
   
   Navigate to: [https://elated-tan-skat.explorer.mainnet.skalenodes.com/address/0xF7c64248294C45Eb3AcdD282b58675F1831fb047](https://elated-tan-skat.explorer.mainnet.skalenodes.com/address/0xF7c64248294C45Eb3AcdD282b58675F1831fb047)

2. **Find Your Transaction**
   
   Look through the transaction list to find your transaction and click on the **transaction hash** to view details.

3. **View Transaction Details**
   
   Click on **"View Details"** to expand the transaction information.

4. **Copy Required Information**
   
   From the transaction details, copy and save the following values:
   - **peerid** - Your peer identifier
   - **poolid** - The pool identifier

:::tip
Keep these values handy as you'll need them in the next steps. You can paste them in a text file temporarily.
:::

### Step 2: Manually Claim Rewards

1. **Go to the Contract Interface**
   
   Navigate to: [https://elated-tan-skat.explorer.mainnet.skalenodes.com/address/0xF7c64248294C45Eb3AcdD282b58675F1831fb047?tab=read_write_proxy](https://elated-tan-skat.explorer.mainnet.skalenodes.com/address/0xF7c64248294C45Eb3AcdD282b58675F1831fb047?tab=read_write_proxy)

2. **Connect Your Wallet**
   
   Click the **"Connect Wallet"** button and approve the connection in your Web3 wallet.

3. **Find the claimRewards Function**
   
   Scroll down to find **"claimRewards"** and click the arrow to expand it.

4. **Enter Your Information**
   
   Fill in the required fields:
   - **peerid**: Enter the peerid you copied from Step 1
   - **poolid**: Enter the poolid you copied from Step 1

5. **Execute the Transaction**
   
   - Click the **"Write"** button
   - Your wallet will prompt you to approve the transaction
   - Click **"Approve"** in your wallet to complete the claim

:::success
Once the transaction is confirmed on the blockchain, your rewards will be claimed and transferred to your wallet!
:::

## Troubleshooting

### Common Issues

**Wallet Connection Problems**
- Make sure you're connected to the correct network (SKALE Mainnet)
- Try refreshing the page and reconnecting your wallet

**Transaction Fails**
- Ensure you have enough gas fees in your wallet
- Double-check that the peerid and poolid are entered correctly
- Wait a few minutes and try again if the network is congested

**Can't Find Transaction**
- Make sure you're looking at the correct contract address
- Check that your transaction was actually processed on the mainnet

### Need More Help?

If you continue to experience issues with manual reward claiming, please:

1. Check our [Support page](../support.md) for additional resources
2. Join our community channels for assistance
3. Contact our support team with your transaction details

:::warning
Always double-check the contract addresses and ensure you're on the correct network before executing any transactions. Never share your private keys or seed phrases with anyone.
:::
