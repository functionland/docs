---
title: FxBlox Lite Plus (RK1)
id: fxblox-hardware-rk1
---
import ReactPlayer from 'react-player';

## Updating Your FxBlox Lite Plus (RK1)

:::warning 
If you were helping test nightly firmware releases **before** official testnet launch, you will be required to format drive to clear out old/incompatible chain data. **See more [details here.](../fxblox-app.md/#format-drive)**
:::

## Video Guide

<center>
  <ReactPlayer controls url="https://youtu.be/O4-PoQ5wCqs" />
</center>

## Written Guide
### Step 1: Download the Firmware

- **Download**: Find `minimal_update.zip` in the [latest release](https://github.com/functionland/rk1-image/releases/latest) under the Assets section on GitHub. As of 22/JUNE/2024, this is the latest file: https://github.com/functionland/rk1-image/releases/download/v1.54.18/minimal_update.zip
  - **Options**:
    - Download files with `minimal_` prefix if you do not need a desktop interface (access via Terminal, smaller file size).

### Step 2: Unzip and Transfer to FAT32 USB
:::info 
Before starting, make sure that your USB stick is **32GB or smaller**. Anything larger than 32GB may not work due to the FAT32 file system limitations. Instructions **must** be done in this order to avoid complications.
:::
  1. Use a USB drive formatted as `FAT32`.
  2. First, unzip `minimal_update.zip` onto your computer.
  3. Then, copy unzipped files to USB drive to avoid potential file corruption.
  4. Make sure to copy unzipped files directly to the root of the USB drive. So the files `boot.scr`, `update.img.0`, `update.img.1` and `update.img.2` , etc... must be in the root of your USB disk.

  <div class="text--center">
   <img src="/img/fxyard-network/root-usb.png" style={{width: 700}}/>
</div>

### Step 3: Updating FxBlox

1. Ensure your FxBlox is turned off.
2. Connect the USB drive to the top USB port of the FxBlox. (Only the top port is designed for updates)
3. Turn on your FxBlox. The LED will display <font color="green">green</font>, <font color="blue">blue</font>, and then yellow, indicating the update process.
<div class="text--center">
  <video width="400" height="400" controls>
    <source src="https://github.com/functionland/rk1-image/assets/6176518/06ddf8ed-61a0-4031-b48d-77f7f7ba79eb" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

4. After about 15 minutes, the LED blinks <font color="green">green</font> and <font color="blue">blue</font>. Remove the USB drive.
<div class="text--center">
  <video width="400" height="400" controls>
    <source src="https://github.com/functionland/rk1-image/assets/6176518/71d42e46-1cc8-4ab7-b573-a11eeaea3289" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
5. Restart the FxBlox by unplugging and plugging back the power.

### Step 4: Post-Update
**Be patient on the first boot, post-update!** The FxBlox automatically reboots 3 times, and will go through a series of lights. This **full process** should take about **30 minutes** to fully process the update and show the FxBlox WiFi.

**Leave it plugged in!** At any time, you may think it is done or stuck or it is turned off, but be rest assured that it is processing the update. After automatic restarts are done, the FxBlox will proceed to show a variety of colors including: <font color="Blue">blue</font>, <font color="green"> green</font>, <font color="cyan"> cyan</font>, yellow, off, <font color="red"> red</font>; in that order. This process make take around **10 minutes** until LEDs turn flashing <font color="cyan"> light-blue</font>.

:::info
Future firmware updates will be over the air, eliminating the need for manual updates.
:::
