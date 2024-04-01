---
title: Add Storage
id: add-storage
---
## Compatible Storage Drives

Almost all types of storage mediums are compatible with the FxBlox. The Blox has internal slots for:
- [Framework Storage Expansion Cards](https://frame.work/marketplace/expansion-cards)
- MicroSD
- M.2 NVMe
- And any internal/external drives via USB-C (or USB-C adaptor)

For the Blox to recognize and use the drive as storage, it must be formatted to **ext4**. This is automatically done for all drives connected to the Blox during the setup. If you want to add more storage after the fact, then you will have to manually partition and format it.

## Install Internal Storage
To install an NVMe or MicroSD drive, you'll have to open the Blox to gain access to the Single Board Computer (SBC) inside.

1. Remove the four black screws of the 3-port USB-C housing.
<!-- <picture here> -->
2. Remove the four silver screws on the bottom of the Blox.
<!-- <picture here> -->
3. Slowly slide out the SBC.
4. Remove light orange cover on the nvme screw mounting point.

### Install M.2 NVMe drive
With nvme drives, there are a lot of options to choose from. Which ever you choose, M.2 NVMe drives are plenty fast enough to maintain a quality speed for reads, writes, and data transfers.

To install your first NVMe drive:
1. Follow [steps above to open the case.](#install-internal-storage)
2. Insert NVMe drive into M.2 slot at an angle. Make sure no pins are showing.
3. Hold drive down, while you screw it into place. (Screw not included with FxBlox)
4. Follow steps in reverse order to put the case back together.

### Install MicroSD Card
MicroSD cards have comparitively slow read & write speeds. We don't have enough data to recommend them as a method of storage for Fula net, but it should still be possible to run a high-speed, high-capacity card. The port is located under the wifi card. To access it:

1. Follow [steps above to open the case.](#install-internal-storage)
2. Wifi card **does not** need to be removed to insert microsd card. Insert microSD card from the side of the board. 
3. Follow steps in reverse order to put the case back together.

## Install External Storage

You can use any type of drive as long as it can be connected via USB-C cable or adapter. Plug it in to any of the three USB-C ports available on the side of the FxBlox. These include, but not limited to:
- SATA drives (2.5-inch internal SSDs or 3.5-inch internal HDDs)
- External SSD's or HDDs
- External NVMe drives
- Docking stations
- Hardware RAID arrays
- etc...

## Manually Parition and Format
If you want to add additional storage at some point after initial setup. You will need to manually parition and format the drive before it can be used by the FxBlox.

You will need to **parition 100%** of the drive and **format to ext4**. To do this on Mac and Linux, you will want to be comfortable with the command line. Windows will require a third party tool.

### Linux (Terminal) (Recommended)
__You do not need a separate Linux computer to do this.__ Although the drive can not be seen in the FxBlox app yet, we can manually format it through the Blox's desktop interface. 

At this point, your Blox must already have an internet connection, if not please complete the [setting up your FxBlox first](fxblox-app.md#app-configuration-steps). If completing set is not an option, you can connect an ethernet cable via usb-c. This will allow you to remotely login from another computer with `ssh`. [Checkout this article](https://fierrolabs.medium.com/how-to-remote-control-your-fxblox-mac-windows-linux-d0771b1565ca), made by a community member, for more information on how to do that.

Alternatively, you can connect keyboard, video, & mouse. Middle and bottom port are DisplayPort and HDMI compatible.

1. Connect your drive to the FxBlox
2. Connect to your FxBlox via `ssh` or keyboard, video, & mouse
3. Log in to `pi` account using password `fxblox`
4. Open up Terminal app with Ctrl + Alt + T
5. Update current packages with `sudo apt update && sudo apt upgrade`
6. Enter password `fxblox`
7. Confirm install with `y`
8. Download `parted` app with `sudo apt install parted`
9. Identify new disk(s) with `sudo parted -l | grep Error`

:::info 
In the following commands, replace `sdx` with the device name(s) found in the output of the above command. Repeat steps 10-12 for any new drives you have, one at a time.
:::

10. Assign your drive the `GPT` paritioning standard with `sudo parted /dev/sdx mklabel gpt`
11. Partition your drive with `sudo parted -a opt /dev/sdx mkpart primary ext4 0% 100%`
12. Format the newly created parition with `sudo mkfs.ext4 /dev/sdx1`
13. Close FxBlox app if its currently opened, otherwise open your Fxblox app now
14. You should now see that your total maximum storage has increased by the size of the drive you installed.

### MacOS (Terminal)
Ext4 is a linux standard that MacOS does not support without some third-party help. **You will not be able to use the `Disk Utility` app on Mac, to partition to Ext4**. We do not need to mount our drive to Mac, we just need to partition and format it. To do so:
1. Start by downloading the [fdisk command-line tool on sourceforge](https://sourceforge.net/projects/gptfdisk/)
2. Install app by double-clicking on the downloaded dpkg file
3. You will not be able to open it, because of Apple security measures. To circumvent them, open `Settings` -> `Privacy & Security` -> `Security`
4. Click on `Allow Anyways`
5. Connect drive to Mac, if not already done. Click `Allow` to allow access to drive and now click `Ignore` to keep it discoverable
6. Open up your Terminal app by searching your Applications or search with Spotlight by pressing `CMD` + `SPACEBAR`, then type `Terminal`
7. Identify disk location with `diskutil list`. You'll want to keep note of the path, it should be something like `/dev/disk#`
8. Now start command-line utility with `sudo gdisk`. **See [Example Output](#example-output) and [Troubleshoot](#troubleshoot) for more information**.
9. Enter device path found in step 7.
10. Hit `n`, to create a new GPT partition
11. Accept the default partition number by just pressing `return/Enter`.
12. Accept the default starting and ending sectors (creates a partition that spans 100% of the drive) by just pressing `return/Enter`
13. Enter `8300` for the Hex-code/GUID. This is shortform to select the 'Linux Filesystem'
14. Enter `w` to write table to disk and exit tool
15. Hit `y` to proceed, wait for it to complete, and safely eject drive
16. Connect your drive to the FxBlox
17. **Close FxBlox app**. Now open your Fxblox app now and see your total maximum storage increase in the FxBlox app.
#### Example Output
<div class="text--center">
    <img src="/img/fxyard-network/gdisk-output.jpg" style={{width: 700}}/>
</div>

### Windows (Free Third-Party App)

Ext4 is a linux standard that Windows does not support without some third-party help. There are various paid and free options out there, but we recommend [Parition Master Free by EaseUS](https://www.easeus.com/partition-manager/epm-free.html).

1. Install [Parition Master Free by EaseUS](https://www.easeus.com/partition-manager/epm-free.html) if not already done

2. Plug in storage device to your Windows computer, if not already done

3. Open the app. Select `Parition Manager` from the left sidebar
    - It may immediately recognize the drive and push you to use the Parition Wizard. The partition wizard is a paid service, so if you exit out of that window you can continue to use the app normally (as described below).

4. Select the new drive

![blank drive](/img/fxyard-network/blank-drive.jpg)

5. Ensure drive partition type is listed as `GPT` instead of `MBR`.
    - If it is **not**, select drive. Then, in right sidebar, select `Initialize to GPT` to add it to task list queue.

<div class="text--center">
    <img src="/img/fxyard-network/init-gpt.png"/>
</div>

6. Select drive, and on the right sidebar, click `Create`
<div class="text--center">
    <img src="/img/fxyard-network/r-sidebar.png" />
</div>

7. Make sure `EXT4` is selected under `File system`
<div class="text--center">
    <img src="/img/fxyard-network/partition-config-screen.jpeg" style={{width: 700}}/>
</div>

8. Click `OK`

9. Click `Execute # Task(s)` at the bottom of the right sidebar of the main window

<div class="text--center">
    <img src="/img/fxyard-network/queue-2.png"/>
</div>

10. Wait for task(s) to complete, then close app and eject drive

11. Connect your drive to the FxBlox

12. Close FxBlox app if its currently opened, otherwise open your Fxblox app now and see your total maximum storage increase in the FxBlox app.

## Troubleshoot
- **Drive not recognized in Windows.** If your windows computer doesn't see the connected drive, try restarting your computer first. Then look into potentially installing drivers for the storage device.
- **FxBlox not updating storage capacity.** If your FxBlox doesn't update the storage the maximum storage capactity even after formatting, try restarting the FxBlox by unplug-plugging it back in.
- **Additional storage devices not showing up under `Device` Tab.** This is a known bug, as of app version 1.6.2. Currently, newly added storage gets added to the total instead of as a separate device.
- **Parition Exists already (MacOS).** If a partition exists already, then you will want to delete it first, write to drive, and rerun the command:
    1. Get to step 9 in the _[Manually Parition and Format for Mac](#macos-terminal)_ instructions
    2. Hit `d`, to delete partition(s).
    3. Hit `w`, confirm by hitting `y` and saving state.
    4. Continue _[Manually Parition and Format for Mac](#macos-terminal)_ instructions, from step 7.

:::info 
**Our apps are open-source and built in React Native for cross-platform support. So if you would like to [contribute to the project](https://github.com/functionland/fx-components), that would be greatly appreciated!**
:::
