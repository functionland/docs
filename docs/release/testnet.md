# FxBlox Testnet Launch Guide

This comprehensive guide is designed to assist you in preparing your FxBlox for the testnet launch. The testnet is called "Functionyard" and the token is "BORG".

## Preparing Your FxBlox

### Step 1: Download the Firmware

- **Download**: Find `minimal_update.zip` in the latest release under the Assets section on GitHub.
  - **Options**:
    - Download files with `minimal_` prefix if you do not need a desktop interface (access via Terminal, smaller file size).
    - Download files without `minimal_` prefix if you require a desktop interface.
  - **Note**: If the file is split into multiple parts (due to GitHub size limits), download all parts to the same folder.

### Step 2: Unzip and Transfer to USB

- **Unzipping**:
  - Unzip `minimal_update.zip` on your computer.
  - **Important**: Unzip on your computer first, then transfer to avoid FAT32 file size limitations.
- **USB Preparation**:
  - Use a USB drive formatted as FAT32.
  - Copy unzipped files directly to the root of the USB drive.

### Step 3: Updating FxBlox

1. **Turn Off**: Ensure your FxBlox is turned off.
2. **USB Connection**: Connect the USB drive to the top USB port of the FxBlox. (Only the top port is designed for updates)
3. **Power On**: Turn on your FxBlox. The LED will display green, blue, and then yellow, indicating the update process.
4. **Final Steps**:
   - After about 15 minutes, the LED blinks green and blue. Remove the USB drive.
   - Restart the FxBlox by unplugging and plugging back the power.
   - Optionally, reinsert the USB in a different port or remove the files if using the top port again.
5. **First Boot**: On the first boot post-update, the FxBlox may automatically reboot twice, taking about 10 minutes to show the FxBlox WiFi. You can also reboot once manually yourself to ensure proper completion of update.

### Step 4: Post-Update

- Future firmware updates will be automatic, eliminating the need for manual updates.

## Installing the FxBlox App

### Initial Setup

1. **Download the App**: 
   - For Android: [FxBlox on Google Play (v1.4.8+)](https://play.google.com/store/apps/details?id=land.fx.blox).
   - For iOS: Available soon on the App Store.
2. **Metamask Wallet**: Ensure you have a Metamask wallet for setting up your identity.

### App Configuration Steps

1. Select "Setup Blox" in the app.
2. Choose "Mumbai (Polygon Testnet)" as the chain and tap "Connect Wallet".
3. Complete the connection in the Metamask app, then return to the FxBlox app.
4. Enter a memorable password for data encryption and click "Link Password" (Note: This is not your Metamask password).
5. Tap "Connect to new blox".
6. Manually connect your phone to the "FxBlox" WiFi, then continue in the app.
7. Attach at least 500GB of external storage to your FxBlox. Proceed by clicking "Next" once the app recognizes the storage.
8. Select your desired WiFi network for the FxBlox and enter the password.
9. Finally, on the last screen reconnect your mobile device to your home WiFi. The app will confirm successful setup.

### Troubleshooting

- If Metamask doesn't redirect: Manually go back to the FxBlox app.
- App issues with Metamask: Restart both apps and try again.
- Final step connection issues: Restart FxBlox and retry. If unresolved, restart the FxBlox app.

## Joining the Testnet

1. Visit the testnet page at [Functionyard Testnet](https://fund.functionyard.fula.network) and enter your Indiegogo campaign order details.
2. In the FxBlox app, go to `Settings > Pools`. Join a pool nearest to your city. Choose the one closest to you from the list. Please note, that if you choose a pool that is far from you, the request will automatically rejected by the system. 
3. Wait for approval from 5 pool members (may take up to 2 hours).
4. Once approved, the pool button changes to "Leave". You can now start storing and earning.

## Download FxFotos App

- Download FxFotos from [Google Play](https://play.google.com/store/apps/details?id=land.fx.fotos) for decentralized media storage. FxFotos app is available as a replacement for other Media storage apps (like Apple Photos or Google Photos). 

## Adding BORG Token to MetaMask on Mumbai Chain

This guide explains how to add the BORG token, which is not automatically listed in MetaMask, to your wallet on the Mumbai test network.

### Step 1: Select the Mumbai Network in MetaMask

Ensure you have MetaMask installed and select the Mumbai Testnet. If Mumbai is not listed:

1. Select "Add Network" manually.
2. Enter the following details:
   - Network Name: Mumbai Testnet
   - New RPC URL: `https://rpc-mumbai.maticvigil.com/`
   - Chain ID: `80001`
   - Currency Symbol: `MATIC`
   - Block Explorer URL: `https://polygonscan.com/`

### Step 2: Add BORG Token

1. Open the MetaMask extension.
2. Go to the "Assets" tab.
3. Scroll down and click "Import Tokens."
4. Switch to the "Custom Token" tab.
5. Enter the BORG Token Contract Address: `0x99a8b2B50c4bFBf916Add5DFdf680fc873FA81f4`.
   - The token symbol and decimals should auto-fill. If not, you may need to enter them manually.
6. Click "Add Custom Token."
7. Review the token details and click "Import Tokens."

Congratulations, the BORG token is now added to your MetaMask wallet on the Mumbai chain!

---

For any queries or assistance, feel free to reach out for support.
