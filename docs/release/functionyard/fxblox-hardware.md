---
title: FxBlox Hardware
id: fxblox-hardware
---

## Preparing Your FxBlox

### Step 1: Download the Firmware

- **Download**: Find `minimal_update.zip` in the [latest release](https://github.com/functionland/rk1-image/releases/latest) under the Assets section on GitHub. As of 16/Feb/2024, this is the latest file: https://github.com/functionland/rk1-image/releases/download/v1.1.22/minimal_update.zip
  - **Options**:
    - Download files with `minimal_` prefix if you do not need a desktop interface (access via Terminal, smaller file size).
    - Download files without `minimal_` prefix if you require a desktop interface.
  - **Note**: If the file is split into multiple parts (due to GitHub size limits), download all parts to the same folder, and then you can unzip by clicking the one with `.zip` extension.

### Step 2: Unzip and Transfer to FAT32 USB
Before starting, make sure that your USB stick is **32GB or smaller**. Anything larger than 32GB may not work because the limit for FAT32 is 32GB.
- **Unzipping**:
  - Unzip `minimal_update.zip` on your computer.
  - **Important**: Unzip on your computer first, then transfer to avoid `FAT32` file size limitations.
- **Important USB Preparation**:
  - Use a USB drive formatted as `FAT32`.
  - Copy unzipped files directly to the root of the USB drive. So the files `boot.scr`, `update.img.0`, `update.img.1` and `update.img.2` must be in the root of your USB disk

### Step 3: Updating FxBlox

1. **Turn Off**: Ensure your FxBlox is turned off.
2. **USB Connection**: Connect the USB drive to the top USB port of the FxBlox. (Only the top port is designed for updates)
3. **Power On**: Turn on your FxBlox. The LED will display green, blue, and then yellow, indicating the update process.
4. **Final Steps**:
   - After about 15 minutes, the LED blinks green and blue. Remove the USB drive.
   - Restart the FxBlox by unplugging and plugging back the power.
   - Optionally, reinsert the USB to a different port or remove the files if using the top port again.

### Step 4: Post-Update
**Wait after First Boot**: On the first boot post-update, the FxBlox automatically reboots 3 times, and go through a series of lights, this **full process** should take about **30 minutes** to fully process the update and show the FxBlox WiFi.

**Leave it plugged in!**: At any time, you may think it is done or stuck or it is turned off, but be rest assured that it is processing the update. After automatic restarts are done, the FxBlox will proceed to show a variety of colors including: <font color="Blue">blue</font>, <font color="green"> green</font>, <font color="cyan"> cyan</font>, <font color="yellow"> yellow</font>, off, <font color="red"> red</font>; in that order. This process make take around **10 minutes** until LEDs turn flashing <font color="cyan"> cyan</font>.

**Future firmware updates will be automatic, eliminating the need for manual updates.**

## Video Demo of the update steps:

### After attaching the USB:
<video width="320" height="240" controls>
  <source src="https://github.com/functionland/rk1-image/assets/6176518/06ddf8ed-61a0-4031-b48d-77f7f7ba79eb" type="video/mp4" />
  Your browser does not support the video tag.
</video>

### After about 15 minutes:
<video width="320" height="240" controls>
  <source src="https://github.com/functionland/rk1-image/assets/6176518/71d42e46-1cc8-4ab7-b573-a11eeaea3289" type="video/mp4" />
  Your browser does not support the video tag.
</video>