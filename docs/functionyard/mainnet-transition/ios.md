---
title: iPhone & iPad
id: ios
---

# iPhone & iPad

## The web app does not run on iOS

The FxBlox app now runs in the browser, but **it cannot run on an iPhone or iPad**.

Setting up and managing a Blox needs Web Bluetooth and your browser's local-network permission. Apple requires every browser on iOS — including Chrome and Edge — to use its WebKit engine, and WebKit provides neither. This is a limitation of iOS itself, not something the app can work around.

:::tip What to do instead
1. **Use a computer.** Windows, macOS or Linux with **Chrome or Edge**, at [https://docs.fx.land/fxblox-web/](https://docs.fx.land/fxblox-web/). This is the recommended route and gives you the full app.
2. **Or use an Android phone**, also with Chrome or Edge.
3. **Or keep using the legacy iOS app** for now — see below.

Your identity is derived from your password and your wallet signature, so whichever device you use, the same password with the same wallet gives you the same identity and your existing Bloxes are recognised immediately. Nothing needs re-pairing.
:::

:::caution The iOS app is being discontinued
[FxBlox on the App Store](https://apps.apple.com/ca/app/fxblox/id6444862171) still works and should be at **version 2.0.1 or higher**, but it will stop receiving updates. Please move to a computer with Chrome or Edge when you can.
:::

---

# Mainnet Transition on iOS

If you are transitioning from testnet on an iPhone, the Blox itself still needs a factory reset. The device steps below are the same regardless of which app you use afterwards.

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

1. Open **[https://docs.fx.land/fxblox-web/](https://docs.fx.land/fxblox-web/)** on a computer with Chrome or Edge — or on an Android phone — and follow the [FxBlox App Setup](/functionyard/fxblox-app) guide.
   - If you are staying on the legacy iOS app, update it from the App Store to version 2.0.1 or higher first. The app is reset during the update; that is expected.
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
- On the web app, reload the tab; if a "new version available" prompt appears, accept it
- On the legacy iOS app, ensure you're using the latest version from the App Store and try force-closing and reopening it

**Blox Connection Issues:**
- Verify WiFi credentials are correct
- Ensure the Blox and the device running the app are on the same network
- Check router settings for device blocking

**Reset Problems:**
- Ensure power cable is properly connected
- Try a different power outlet
- Contact support if LEDs don't follow expected sequence

**Need more help?** Visit our [Support page](/functionyard/support) for additional assistance.
