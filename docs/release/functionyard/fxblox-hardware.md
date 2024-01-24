---
title: FxBlox Hardware
id: fxblox-hardware
---

## Preparing Your FxBlox

### Step 1: Download the Firmware

- **Download**: Find `minimal_update.zip` in the [latest release](https://github.com/functionland/rk1-image/releases/latest) under the Assets section on GitHub. As of 24/Jan/2024, this is the latest file: https://github.com/functionland/rk1-image/releases/download/v1.1.10/minimal_update.zip
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

## Video Demo of the update steps:

### After attaching the USB:
![After attaching the USB](https://github.com/functionland/rk1-image/assets/6176518/06ddf8ed-61a0-4031-b48d-77f7f7ba79eb)

### After about 15 minutes:
![After about 15 minutes(https://github.com/functionland/rk1-image/assets/6176518/71d42e46-1cc8-4ab7-b573-a11eeaea3289)