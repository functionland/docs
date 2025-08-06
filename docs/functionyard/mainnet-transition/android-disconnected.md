---
title: Android - Blox Disconnected
id: android-disconnected
---

# Android Mainnet Transition - Blox Disconnected

This guide is for Android users whose Blox app shows as **disconnected** from their Blox device.

<div style={{backgroundColor: '#fff3cd', padding: '15px', borderRadius: '8px', margin: '20px 0'}}>
<strong>⚠️ Prerequisites:</strong>
<ul>
<li>Your Blox app shows "Disconnected" status</li>
<li>You've tried unplugging/replugging and clicking retry without success</li>
<li>FxBlox app version 2.0.1 or higher</li>
<li>Your Blox account ID saved for token claiming</li>
</ul>
</div>

<img src="/img/mainnet-transition/blox_disconnected.jpg" alt="Blox Disconnected Status" style={{maxWidth: '250px'}} />

## Step 1: Verify Internet Connection

First, ensure your Blox is connected to the internet:

1. Go to **Settings > Blox Discovery** (ensure your mobile is on the same WiFi network as your Blox)
2. If Blox is connected to internet, the page should show it
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

1. Use the FxBlox app to set up your Blox
2. Connect it to your internet/WiFi
3. The app should now show **"Connected"**
4. **Wait 2 hours** for the Blox to get fully updated

:::tip Patience Required
The 2-hour waiting period is crucial for the Blox to download and install all necessary updates.
:::

## Step 5: Follow Connected Instructions

Once your Blox shows as connected and has been updated for 2 hours:

1. Follow the instructions in the **[Android - Blox Connected](/functionyard/mainnet-transition/android-connected)** section
2. This includes chain selection, app restart, and pool joining

## LED Status Reference

| LED Color | Status | Action |
|-----------|--------|---------|
| 🟢 Green | Power on | Normal |
| 🟡 Yellow | Booting | Wait for it to turn off |
| 🟣 Purple + 🔵 Blue | Factory reset | Wait 10 minutes |
| 🔵 Cyan (flashing) | Ready for setup | Use app to configure |

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
- Ensure Blox and phone are on same network

**Need more help?** Visit our [Support page](/functionyard/support) for additional assistance.
