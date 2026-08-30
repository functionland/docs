---
title: iPhone & iPad
id: ios
---

# iPhone & iPad

## iOS is not supported — use a computer

The FxBlox app **does not support iPhone or iPad**.

Setting up and managing a Blox needs Web Bluetooth and your browser's local-network permission. Apple requires every browser on iOS — including Chrome and Edge — to use its WebKit engine, and WebKit provides neither. This is a limitation of iOS itself, not something the app can work around.

:::tip Use a computer instead
Open [https://docs.fx.land/fxblox-web/](https://docs.fx.land/fxblox-web/) on a **computer** — Windows, macOS or Linux — in **Chrome or Edge**. There is nothing to install.

This is the part that changed. The old FxBlox apps only ran on a phone, so if you had an iPhone you had to use the iPhone app. The web app runs on any desktop or laptop, so **a computer is now the normal way to set up a Blox** — you no longer need a phone at all. (An Android phone works too, if that is what you have to hand.)

Your identity comes from your password and your wallet signature, so whichever computer you use, the same password with the same wallet gives you the same identity and your existing Bloxes are recognised immediately. Nothing needs re-pairing.
:::

:::caution Don't start on the iOS app
The Android and iOS apps are being discontinued and will stop receiving updates, so please don't set up a new Blox with them. Use a computer with Chrome or Edge.
:::

---

# Mainnet Transition for iPhone owners

If you are transitioning from testnet and your phone is an iPhone, the Blox itself still needs a factory reset. Do the device steps below, then finish on a computer.

:::warning Critical: Save Your Account ID
Before doing anything else, **copy and save your Blox account ID** from the app. You will need it for claiming testnet tokens at [https://claim-ui.fula.network](https://claim-ui.fula.network).
:::

## Step 1: Save Your Account Information

1. Open your current FxBlox app
2. Go to the account/profile section
3. **Copy and save your Blox account ID**
4. Store it safely

## Step 2: Verify Internet Connection

Ensure your Blox is connected to the internet:

1. Go to **Settings > Blox discovery** (make sure your device is on the same WiFi network as your Blox)
2. If the Blox is on the network, it will be listed there
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

## Step 4: Set the Blox up again

After the Blox starts **flashing cyan**:

1. On a **computer** (Windows, macOS or Linux) open **[https://docs.fx.land/fxblox-web/](https://docs.fx.land/fxblox-web/)** in Chrome or Edge and follow the [FxBlox App Setup](/functionyard/fxblox-app) guide. Your iPhone is not needed for this step.
2. Connect the Blox to your internet/WiFi
3. The app should now show **"Connected"**
4. **Wait 2 hours** for the Blox to get fully updated

:::tip Patience Required
The 2-hour waiting period is crucial for the Blox to download and install all necessary updates.
:::

## Step 5: Complete the Mainnet Transition

Once your Blox shows as connected and has been updated for 2 hours, the remaining steps are the same for everyone:

### Chain Selection
1. Go to **Settings > Chain Selection**
2. Ensure you are on the correct chain (Base/Skale) - default is Skale
3. If you have an authorization code, change to Base only if instructed by the team
4. Click **"Add and Switch to Skale/Base"** button (opens MetaMask)
5. In MetaMask, ensure you're on the same chain selected in the FxBlox app

### Restart
1. **Close MetaMask** completely
2. **Reload the FxBlox tab** (or close and re-open the mobile app)

### Switch to Mainnet
1. On the home screen, click the **"Switch to Skale/Base"** button
2. This opens MetaMask - **wait a few seconds**
3. You'll see a "Go back to application" message
4. Switch back to the FxBlox app
5. The button should disappear

### Join Global Pool
1. Go to **Settings > Pools**
2. Join the **Global pool**

## Step 6: Verify Success

You should now see:
- **Rewards displayed** on the home page
- A **Claim button** below rewards when available

## LED Status Reference

| LED Color | Status | Action |
|-----------|--------|---------|
| 🟢 Green | Power on | Normal |
| 🟡 Yellow | Booting | Wait for it to turn off |
| 🟣 Purple + 🔵 Blue | Factory reset | Wait 10 minutes |
| 🔵 Cyan (flashing) | Ready for setup | Use the app to configure |

:::success Congratulations!
You have successfully transitioned to mainnet! Your rewards will now accumulate and you can claim them when available.
:::

---

## Troubleshooting

**App Issues:**
- Reload the tab; if a "new version available" prompt appears, accept it
- If the app shows an "unsupported browser" page, you are on iOS — switch to a computer with Chrome or Edge

**Blox Connection Issues:**
- Verify WiFi credentials are correct
- Ensure the Blox and the computer running the app are on the same network
- Check router settings for device blocking

**Reset Problems:**
- Ensure power cable is properly connected
- Try a different power outlet
- Contact support if LEDs don't follow expected sequence

**Need more help?** Visit our [Support page](/functionyard/support) for additional assistance.
