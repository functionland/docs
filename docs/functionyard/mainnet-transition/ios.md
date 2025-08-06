---
title: iOS Mainnet Transition
id: ios
---

# iOS Mainnet Transition Guide

This guide is for iOS users (iPhone/iPad) transitioning from testnet to mainnet.

<div style={{backgroundColor: '#fff3cd', padding: '15px', borderRadius: '8px', margin: '20px 0'}}>
<strong>⚠️ Critical: Save Your Account ID</strong>
<br />
Before updating the application, ensure you have <strong>copied and saved your Blox account ID</strong> from the app. This will not be shown after the update and you'll need it for claiming testnet tokens.
</div>

:::danger Important Notice
iOS requires both Blox device reset AND application reset. Make sure you have your Blox account ID saved before proceeding!
:::

## Step 1: Save Your Account Information

**Before doing anything else:**
1. Open your current FxBlox app
2. Go to account/profile section
3. **Copy and save your Blox account ID**
4. Store it safely - you'll need this for token claiming at [https://claim-ui.fula.network](https://claim-ui.fula.network)

## Step 2: Verify Internet Connection

Ensure your Blox is connected to the internet:

1. Go to **Settings > Blox Discovery** (ensure your iPhone is on the same WiFi network as your Blox)
2. If Blox is connected to internet, the page should show it
3. You can also check from your router admin panel

<img src="/img/mainnet-transition/blox_discovery.jpg" alt="Blox Discovery" style={{maxWidth: '250px'}} />

## Step 3: Factory Reset Your Blox Device

:::warning Reset Sequence
Follow this sequence exactly 5 times for proper reset.
:::

1. **Unplug** the Blox from power
2. **Plug it back** into power
3. **Watch the LED sequence:**
   - LED turns **green** → **off**
   - Then **yellow** → **off** (takes about 20 seconds)
4. **As soon as the yellow LED turns off**, unplug and replug again
5. **Repeat this process 5 times total**

<video controls width="100%" style={{maxWidth: '250px'}}>
  <source src="/videos/mainnet-transition/reboot.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

### Factory Reset Completion (5th Cycle)

On the **5th time** you plug it back:

1. LED turns **green** → **yellow**
2. Then **quickly** turns **purple** and **blue**
3. This means it's being reset
4. **Wait** until it starts **flashing Cyan** (takes about 10 minutes)

<video controls width="100%" style={{maxWidth: '250px'}}>
  <source src="/videos/mainnet-transition/reset.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Step 4: Update Your iOS App

1. Update your FxBlox app from the App Store to version **2.0.1 or higher**
2. The app will be reset during this process (this is expected)

## Step 5: Setup After Reset

After the Blox starts **flashing cyan** and you've updated the app:

1. Use the updated FxBlox app to set up your Blox
2. Connect it to your internet/WiFi
3. The app should now show **"Connected"**
4. **Wait 2 hours** for the Blox to get fully updated

:::tip Patience Required
The 2-hour waiting period is crucial for the Blox to download and install all necessary updates.
:::

## Step 6: Follow Android Connected Instructions

Once your Blox shows as connected and has been updated for 2 hours, the process is the same as Android:

### Chain Selection
1. Go to **Settings > Chain Selection**
2. Ensure you are on the correct chain (Base/Skale) - default is Skale
3. If you have authorization code, change to Base only if instructed by the team
4. Click **"Add and Switch to Skale/Base"** button (opens MetaMask)
5. In MetaMask, ensure you're on the same chain selected in Blox app

### App Restart
1. **Close both** FxBlox app and MetaMask completely
2. **Re-open** the FxBlox app

### Switch to Mainnet
1. On home screen, click **"Switch to Skale/Base"** button
2. This opens MetaMask - **wait a few seconds**
3. You'll see "Go back to application" message
4. Switch back to FxBlox app
5. The button should disappear

### Join Global Pool
1. Go to **Settings > Pools**
2. Join the **Global pool**

## Step 7: Verify Success

You should now see:
- **Rewards displayed** on the home page
- A **Claim button** below rewards when available

## LED Status Reference

| LED Color | Status | Action |
|-----------|--------|---------|
| 🟢 Green | Power on | Normal |
| 🟡 Yellow | Booting | Wait for it to turn off |
| 🟣 Purple + 🔵 Blue | Factory reset | Wait 10 minutes |
| 🔵 Cyan (flashing) | Ready for setup | Use app to configure |

:::success Congratulations!
You have successfully transitioned your iOS device to mainnet! Your rewards will now accumulate and you can claim them when available.
:::

---

## Troubleshooting

**App Issues:**
- Ensure you're using the latest version from App Store
- Try force-closing and reopening the app
- Restart your iPhone if needed

**Blox Connection Issues:**
- Verify WiFi credentials are correct
- Ensure Blox and iPhone are on same network
- Check router settings for device blocking

**Reset Problems:**
- Ensure power cable is properly connected
- Try a different power outlet
- Contact support if LEDs don't follow expected sequence

**Need more help?** Visit our [Support page](/functionyard/support) for additional assistance.
