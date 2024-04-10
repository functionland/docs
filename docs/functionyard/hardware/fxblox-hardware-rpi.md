---
title: FxBlox Lite (CM4)
id: fxblox-hardware-rpi
---

## Updating Your FxBlox Lite (RPI)
:::warning 
If you were helping test nightly firmware releases **before** official testnet launch, you will be required to format drive to clear out old/incompatible chain data. **See more [details here.](../fxblox-app.md/#format-drive)**
:::
### Step 1: Download the firmware
:::info
If this is your very first time setting up your FxBlox Lite, see these [instructions first](#first-time-setup)
:::
- **Download**: Find `rpi_cm4_usb_update.zip` files in the [latest release](https://github.com/functionland/rpi-image/releases/latest) under the Assets section on GitHub, and download all files that start with `rpi_cm4_usb_update`.
- **Download**: You need `7zip` to unzip the downloaded chunked zip files. You can download it from [their website here](https://www.7-zip.org/download.html), and then right click on the file that ends with `.zip.001` and choose `7zip > extract`

- Download: Download `Win32 Disk Imager` for writing update firmware to USB. 
https://win32diskimager.org/
  
### Step 2: Unzip and Write image to USB

1. **Unzipping**: Unzip `rpi_update.zip` on your computer. After unzipping there must be a .img file.
2. **Writing Image to USB**:  
    - In Image File section select `rpi_update.img` file.
    - In Device section select USB Disk Partion letter.
    - Click Write to start flashing USB Disk.

    ![Win32 Disk Imager](/img/fxyard-network/win32DiskImager.png)

### Step 3: Updating FxBlox

1. **Turn Off**: Ensure your FxBlox (RPI) Lite is turned off.
2. **USB Connection**: Connect the USB drive to the BOTTOM USB port of the FxBlox Lite (RPI).
3. **Power On**: Turn on your FxBlox Lite (RPI). After about 30 sec, the LED will blink yellow 5 times that indicating the update process started.
:::warning
In update process the LED blinks red and green. This phase is very critical, and any mistake in this phase cause breaking FxBlox Lite (RPI). 
:::
4. After about 10 minutes, the LED blinks red only. Remove the USB drive.
5. Restart the FxBlox Lite (RPI) by unplugging and plugging back the power (Make sure an external storage, without the img files, is plugged to the bottom port of blox before powering it back on or the sequence of lighting you would see might defer from this documentation). The best partitioning format for storage devices is `ext4` but `vfat` is also acceptable.

**Note** If the blox stays in blue/white color, or does not connect to wifi and neither shows FxBlox hotspot or you rebooted during the update and think it is broken, you need to do a full re-image by following the [instructions here](fxblox-hardware-rpi-reimage.md).

### Step 4: Post-Update

1. Ensure your FxBlox is turned off.
2. Connect the external storage USB drive (not needed if you have internal) to the bottom USB port of the FxBlox.
3. Turn on your FxBlox. After automatic restarts are done, the FxBlox will proceed to show a variety of colors including: <font color="Blue">blue</font>, <font color="green"> green</font>, <font color="cyan"> cyan</font>, yellow, off, <font color="red"> red</font>; in that order. This process make take around **10 minutes** until LEDs turn flashing <font color="cyan"> light-blue</font>

Please wait for `10-15 minutes` before doing anything. You may think it is done or stuck or it is turned off, but be sure that it is processing the update for `10-15 minutes` after the first boot. At the end of process the LED starts blinking light blue (cyan) consistently if an external storage is plugged to the blox or it has internal storage (XL orders). If no external storage is plugged, then you cannot see this sequence until you plug one.

**Use FxBlox App**: AFter the lights become a flashing blue, you can start setting up the Blox with the application. Follow on-screen instructions in the app. Please make sure follow instructions as detailed in the [documentation](../fxblox-app.md)

- If at the end of setup through the FxBlox app, you see a message that the app could not connect to Blox, Close the app, unplug and re-plug the blox and wait for 1 minute and open the app.

:::info 
**Future firmware updates will be automatic, eliminating the need for manual updates.**
:::

## First Time Setup
If this is your very first time setting up your FxBlox Lite (RPI), you will not be able to install the latest usb update. The reason for that is because "updating via usb" feature was not added in until a later firmware version. 

To automatically get that version, you need to connect the Blox to the wifi first. You can do so by following these steps:

1. Download the latest iOS/Android app.
2. Follow prompts to create password and connect Metamask.
3. On the authorize blox screen wait for 15 seconds and a "skip" button appears in the bottom left. click that to skip the authorization and then click yes to confirm. [** * **](#troubleshoot)
4. Connect Blox to wifi. [** * **](#troubleshoot)
5. Now, wait 24 hours for the update to install. [** * **](#troubleshoot)
6. With new version installed, you can proceed with the [normal upgrading process.](#step-1-download-the-firmware)

### Troubleshoot
* You may need to wait somewhere between 20-30 seconds for the button to appear.
* You may not get a `setup complete` message after connecting to wifi, because you don't have the latest firmware version. Check your router settings to see if it connected properly.
* We recommend waiting 24 hours, because there are no indicators for when it is completed.
* If the blox stays in blue/white color for a long time after reboot, or does not connect to wifi and neither shows FxBlox hotspot or you rebooted during hte update and think it is broken, you need to do a full re-image by following the [instructions here](fxblox-hardware-rpi-reimage.md)
