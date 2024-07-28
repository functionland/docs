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

   <img src="/img/fxyard-network/bootpins.JPG" style={{ width:400 }} />
   
   The red box shows where the pins marked BOOT are located.
   <br/>
   <img src="/img/fxyard-network/bootpins2.jpg" style={{ width:400 }} />

   So to not take apart the whole board, the jumper cable can be inserted through the bottom of the board.
10. **Connect Blox to computer**

   Connect a usb-c cable to the middle port and the other end to your computer. ONLY the middle port is used for loading the firmware onto the Blox.

11. **Power on Blox and run RKDevTool**

   With the Blox connected to your computer and the installer ready. Connect a power cable to the blox, and now you should hear your windows device recognize the blox.

12. **How To Run RKDevTool**

      1. Verify the Name col, is set to blank and EMMC.
      2. Click on the elipse's cell in row 1 to select the spl loader. Now, click on the second row's elipse cell to choose the full image.
      3. Check the _Write by Address_ box.
      4. Verify it says Found One MASKROM Device at the bottom of the page.
      5. Click *Run* and wait about 10 minutes for it to complete.

   <img src="/img/fxyard-network/rkdev_ss.png"/>

13. **Finishing steps**

   After you get a message saying the downloading is complete. You can unplug the jumper cable, pc cable, and now unplug and replug in the power. Now wait 10-20 minutes to get a flashing cyan lights. Be patient on the first boot, post-update! The FxBlox automatically reboots a couple times and will go through a series of lights. This full process should take about 20 minutes to fully process the update and show the FxBlox WiFi.

14. **Put Blox back together**

   After you've verified that the Blox can get to the flashing cyan light state, you can unplug the Blox, put it back together, and plug it back in.