---
title: Blox Disconnected
id: android-disconnected
---

# Mainnet Transition - Blox Disconnected

This guide is for users whose FxBlox app shows their Blox as **disconnected**.

:::caution Prerequisites
- Your app shows "Disconnected" status
- You've tried unplugging/replugging and clicking retry without success
- You are using the web app at [https://docs.fx.land/fxblox-web/](https://docs.fx.land/fxblox-web/), or the legacy mobile app at version 2.0.1 or higher
- Your Blox account ID is saved for token claiming
:::

<img src="/img/mainnet-transition/blox_disconnected.jpg" alt="Blox Disconnected Status" style={{maxWidth: '250px'}} />

## Step 1: Verify Internet Connection

First, ensure your Blox is connected to the internet:

1. Go to **Settings > Blox discovery** and search the network (make sure your computer or phone is on the same Wi-Fi as the Blox)
2. If the Blox is on the network, it will be listed there
3. You can also check from your router admin panel

<img src="/img/mainnet-transition/blox_discovery.jpg" alt="Blox Discovery" style={{maxWidth: '250px'}} />

## Step 2: Power Reset Sequence

:::warning Important
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

## Step 3: Factory Reset (5th Cycle)

On the **5th time** you plug it back:

1. LED turns **green** → **yellow**
2. Then **quickly** turns **purple** and **blue**
3. This means it's being reset
4. **Wait** until it starts **flashing Cyan** (takes about 10 minutes)

:::info Reset Indicator
Purple and blue LEDs indicate the factory reset is in progress. Be patient during this process.
:::

<video controls width="100%" style={{maxWidth: '250px'}}>
  <source src="/videos/mainnet-transition/reset.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Step 4: Setup After Reset

After the Blox starts **flashing cyan**:

1. Open the FxBlox web app at **[https://docs.fx.land/fxblox-web/](https://docs.fx.land/fxblox-web/)** in Chrome or Edge and set your Blox up again — the full walkthrough is on the [FxBlox App Setup](/functionyard/fxblox-app) page
2. Connect it to your internet/WiFi
3. The app should now show **"Connected"**
4. **Wait 2 hours** for the Blox to get fully updated

:::tip Patience Required
The 2-hour waiting period is crucial for the Blox to download and install all necessary updates.
:::

## Step 5: Follow Connected Instructions

Once your Blox shows as connected and has been updated for 2 hours:

1. Follow the instructions in the **[Blox Connected](/functionyard/mainnet-transition/android-connected)** section
2. This includes chain selection, app restart, and pool joining

## LED Status Reference

| LED Color | Status | Action |
|-----------|--------|---------|
| 🟢 Green | Power on | Normal |
| 🟡 Yellow | Booting | Wait for it to turn off |
| 🟣 Purple + 🔵 Blue | Factory reset | Wait 10 minutes |
| 🔵 Cyan (flashing) | Ready for setup | Use the app to configure |

:::success Success Indicator
When your app shows "Connected" status after the reset and 2-hour wait period, you're ready to proceed with the mainnet transition!
:::

---

## Troubleshooting

**If the reset doesn't work:**
- Ensure power cable is properly connected
- Try a different power outlet
- Contact support if LEDs don't follow the expected sequence

**If still showing disconnected after reset:**
- Verify WiFi credentials are correct
- Check router settings for device blocking
- Ensure the Blox and the device running the app are on the same network

**Need more help?** Visit our [Support page](/functionyard/support) for additional assistance.
