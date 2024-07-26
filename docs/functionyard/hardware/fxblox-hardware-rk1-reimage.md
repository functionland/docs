---
title: Re-Imaging RK1
id: fxblox-hardware-rk1-reimage
---
import ReactPlayer from 'react-player';

# Advanced Firmware Update Process

:::info This process is only available Windows
:::

If for any reason the RK1 fulatower gets stuck in a blue/white light without going through the whole boot process, or it is not connected to the Wi-Fi or propagating the FxBlox hotspot, you need to perform a full re-image.

## Written Guide for Re-Imaging

1. **Unplug the tower from power**

   Ensure the tower is not connected to any power source before proceeding.

2. **Opening the tower**

   Follow the instructions here to remove the single board computer (SBC) from the case.

<center>
   <ReactPlayer controls url="https://youtu.be/feBov6U_kJs&t=246s" />
</center>

3. **Download Blox drivers**

   You can download the drivers [from our github](../../../rk1-installs/DriverAssitant_v5.1.1.zip).

   Now, find it in your Downloads, right-click it, and extract all.

4. **Install Drivers**

   After its been extracted, run the executable to install.

5. **Download RKDevTool app**

   Various antivirus might flag the rk1 flash tool as malware, but its safe to download. You can get the program [from our github](../../../rk1-installs/RKDevTool_Release_v2.96.rar).

6. **Unzip and install RKDevTool**

   We recommend using [winrar](https://www.win-rar.com/download.html?&L=0) to unzip the RKDevTool. Regular Windows extract will not work.

   After you've extracted it, you can install the program with all of its default settings.

7. **Download and unzip latest full image**

   Find `minimal_fullimage_minimal.zip` in the [latest release](https://github.com/functionland/rk1-image/releases/latest) under the Assets section on GitHub.

   Now, find it in your Downloads, right-click it, and extract all. You will need this in step 11.

8. **Download the rk3588 spl loader**

   Finally, download the spl loader [from our github](../../../rk1-installs/rk3588_spl_loader_v1.08.111.bin) as well. You will need this in step 11.

9. **Short pins to enter BOOT mode**

   To get the RK1 into BOOT mode, you need to "short the pins". Specifically you need to short the pins labeled BOOT. This means to create a connection between one pin and the another. This can be done with anything conductive. Or if you have male-male jumper cable that would the best way to short the pins.

   <!-- <picture here> -->
10. **Connect Blox to computer**

   Connect a usb-c cable to the middle port and the other end to your computer. ONLY the middle port is used for loading the firmware onto the Blox.

11. **How To Run RKDevTool**

   In the first row, make sure you have Storage: blank and Name: Loader.
   Now, click on the Path cell and find the unzipped, spl loader you downloaded earlier.
   In the second row, make sure you have Storage: EMMC and Name: Image. 
   Now, similar thing here, click on the Path cell, and find the unzipped, minimal_full_image from earlier.

   Make sure the "Write By Address" check box is checked.

12. **Power on Blox and run RKDevTool**

   With the Blox connected to your computer and the installer ready. Connect a power cable to the blox, and now you should hear your windows device recognize the blox. Additionally, the RKDevTool will now show MASKOM Device at the bottom of its screen. Now that your blox is listed in the software you can press "run" to load the firmware onto the sbc.This process should take less than 10 minutes.

13. **Finishing steps**

   After you get a message saying the downloading is complete. You can unplug the jumper cable, pc cable, and now unplug and replug in the power. Now wait 10-20 minutes to get a flashing cyan lights.

14. **Put Blox back together**