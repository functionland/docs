# Disconnected Blox Troubleshooting

If your FxBlox appears disconnected or is not responding properly, you can diagnose the issue by checking the LED color patterns. Follow the appropriate troubleshooting steps based on what you observe.

## Step 1: Check LED Color Status

First, observe your FxBlox LED to determine its current state:

### Scenario 1: Continuously Flashing Cyan LED

**What it means**: Your FxBlox needs to be set up from scratch.

**Solution**:
1. **Open the FxBlox app** at [https://docs.fx.land/fxblox-web/](https://docs.fx.land/fxblox-web/) in Chrome or Edge
2. On the *Set identity* screen, use **Clear app storage** — this is the browser equivalent of uninstalling and reinstalling, and removes the stored identity, Blox list, settings and caches
3. **Follow the setup process** from the start
4. **Set up your FxBlox from the beginning** as if it were a new device

See [FxBlox App Setup](../fxblox-app.md) for the full walkthrough.

:::info
A continuously flashing cyan LED indicates the device is in setup mode and ready for initial configuration.
:::

### Scenario 2: LED is Off

**What to do**: Test the firmware status with a power cycle.

**Steps**:
1. **Unplug your FxBlox** from power
2. **Plug it back in** and observe the LED sequence
3. **Check the LED pattern**:
   - If you see: **Blue → Green → Off → Yellowish → Off**
   - This means your FxBlox is on the latest firmware

**If on latest firmware, perform factory reset**:
1. After confirming the firmware sequence (blue → green → off → yellow → off)
2. **Unplug and replug the device 4 times**
   - Each time, wait for the sequence: yellow → off
   - Then unplug and plug back in
3. **On the 4th replug** (5th total including the initial test):
   - The LED will turn yellow, then **immediately purple**
4. **Wait 10 minutes** while it processes
5. After 10 minutes, it will start **flashing cyan**
6. **Clear app storage** in the web app (on the *Set identity* screen)
7. **Set up from the beginning**

:::warning
Make sure to wait for the complete yellow → off sequence before each unplug/replug cycle. Timing is important for this reset process.
:::

### Scenario 3: Bluetooth Connection Method

If the above methods don't work, try connecting via Bluetooth:

**Steps**:
1. **Open the FxBlox app** at [https://docs.fx.land/fxblox-web/](https://docs.fx.land/fxblox-web/) in Chrome or Edge
2. **Go to Settings → Bluetooth** ([/settings/bluetooth](https://docs.fx.land/fxblox-web/settings/bluetooth))
3. **Click the connect icon** in the top right corner, then pick the device starting with `fulatower` or `fxblox` in Chrome's chooser
   - The Blox advertises periodically — leave the chooser open for up to 90 seconds if it does not appear straight away
4. **If connection succeeds**, you'll see several command buttons appear
5. **Click "Hotspot"** to put your Blox into hotspot mode
6. **Connect your computer or phone** to the "FxBlox" WiFi network
7. **In the app**, open the connection options next to **"Disconnected"**
8. **Click "Connect to WiFi"**
9. **Follow the on-screen instructions** to reconnect your Blox to WiFi

:::tip
The Bluetooth connection method is useful when your Blox can't connect to WiFi but is still responsive via Bluetooth.
:::

### Scenario 4: Re-imaging Required

If none of the above solutions work, you may need to re-image your FxBlox:

**For RK1 Model** (most common):
- Follow the guide: [FxBlox Hardware RK1 Re-imaging](../hardware/fxblox-hardware-rk1-reimage.md)

**For Raspberry Pi Model**:
- Follow the guide: [FxBlox Hardware RPi Re-imaging](../hardware/fxblox-hardware-rpi-reimage.md)

:::info
Most FxBlox devices are RK1 models. If you're unsure which model you have, try the RK1 re-imaging process first.
:::

## LED Color Reference

| LED Pattern | Meaning | Action Required |
|-------------|---------|----------------|
| Continuously flashing cyan | Setup mode | Clear app storage and set up from scratch |
| Blue → Green → Off → Yellow → Off | Latest firmware detected | Perform 4x unplug/replug reset |
| Yellow → Purple | Factory reset in progress | Wait 10 minutes |
| Flashing cyan (after reset) | Ready for setup | Clear app storage and set up |
| Off/No response | Possible hardware issue | Try Bluetooth method or re-imaging |

## Additional Support

If you continue to experience issues after trying these troubleshooting steps:

1. Check our [Support page](../support.md) for additional resources
2. Visit our community channels for peer assistance
3. Contact support with your specific LED pattern and model information

:::warning
Always ensure your FxBlox is properly powered and connected to a stable power source before beginning troubleshooting procedures.
:::
