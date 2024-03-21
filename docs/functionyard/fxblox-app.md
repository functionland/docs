---
title: FxBlox App Setup
id: fxblox-app
---

## Installing the FxBlox App
:::warning 
If you were helping test nightly firmware releases **before** official testnet launch, you will be required to format drive to clear out old/incompatible chain data. **See more [details here.](./fxblox-app.md/#format-drive)**
:::
### Initial Setup

1. **Download the App**: 
   - For Android: [FxBlox on Google Play (v1.6.2+)](https://play.google.com/store/apps/details?id=land.fx.blox).
   - For iOS: Available soon on the App Store.
2. **Metamask Wallet**: Ensure you have a [Metamask wallet](https://play.google.com/store/apps/details?id=io.metamask) for setting up your identity.

### App Configuration Steps

1. Open Metamask Wallet. We recommend having the opening network set to "Ethereum Mainnet" for a smoother setup process.
2. Minimize Metamask (not close) and open the FxBlox app.
3. Read the [Terms and Condition](https://fx.land/terms) and if you agree, then select `Agree and Setup Blox` in the app.
4. Enter a memorable password for data encryption and click `Sign` (Note: This is not your Metamask password).
5. Complete the connection in the Metamask app, then return to the FxBlox app.
   - You may need to click back to manually return to the app if it does not open Blox automatically after you sign in Metamask
   - It does not matter which chain (Ethereum, Mumbai, etc) you are on in your Metamask wallet.
6. Tap `Connect to new blox`.
7. Manually connect your phone to the "FxBlox" WiFi/Hotspot, and turn off "mobile data", then continue in the app.
8. Attach at least 500GB of external storage to your FxBlox. Proceed by clicking `Next` once the app recognizes the storage.
   - If the storage is not recognized ensure that is it correctly formatted by clicking on the `Format` button.
      - The light will turn <font color="purple"> purple</font>, to indicate it is formatting. **Formatting times depend on storage medium and capacity**, so be patient during this time. Device will reboot automatically and eventually start flashing <font color="cyan"> cyan</font> again when it is ready to proceed.
   - If you have an FxBlox version with internal storage, there is no need to attach external storage.
9. Select your desired WiFi network for the FxBlox and enter the password.
   - If you entered the wrong password, double check you're connected to FxBlox Wifi and just go back to the wifi selection screen to choose and re-enter your password.
10. Finally, on the last screen reconnect your mobile device to your home WiFi and you can turn on the mobile data again if you want to. The app will confirm the successful setup. Please note the app does not continue if you do not have an active internet connection. When Blox is connected to the internet, the LEDs turn `green` for 30 seconds and then turn off.
11. We recommend unplugging and replugging the Blox after the initial setup once for a hard reboot and ensuring that everything is set. After you re-plug the power and it boots, it may reboot automatically once as well.

### Troubleshoot

- **Final step connection issues**: Connect to mobile or home wifi, restart the FxBlox app, select `Connect to Existing Blox`. If that doesn't work, restart the FxBlox device. Close app and reopen to proceed with `Connect to new Blox`.
- **If Metamask doesn't redirect after signing transaction**: Manually go back to the FxBlox app.
- **App issues with Metamask**: On some phones, if you cannot get the "Connect" and "sign" prompts in Metamask, you may need to put both the Metamask app and Blox app in Unrestricted mode from the "Battery Optimization". Go to: `Settings` > `Apps` > `FxBlox` > `Battery` / `App Battery` > Choose `Unrestricted`. Do the same for the Metamask app. After the setup, you can return it back to the default of `Optimized`

## Add Multiple FxBlox's

As of Android/iOS app version 1.6.2, there is not an easy way to add more than one blox to your account. Follow these additional steps if you would like to connect more than one blox:

1. If not already done, complete setup of your first Blox. 
2. Verify Blox is listed as `Authorized` under `Settings`->`Blox Discovery`. If not, restart your Blox by unplug/plug-ing it back in.
3. `Log Out` of your account by going to `Settings` -> `Log Out`.
4. Proceed and complete set-up of your next FxBlox.
5. Repeat steps 2-4 for all the FxBloxes you have, except for the last one.
6. When you've finally added the last FxBlox, go to `Settings` -> `Blox Discovery`.
7. All FxBloxes should say `Authorized`, so select them and click `Add selected blox(s)`.
8. Verify you can see all of them by going to `Blox` tab and swiping left/right between them.

:::info 
As you can see the functionality is there, but priotization of an easier way to add them is scheduled for after testnet launch.

**Our apps are open-source and built in React Native for cross-platform support. So if you would like to [contribute to the project](https://github.com/functionland/fx-components), that would be greatly appreciated!**
:::

## Format Drive

If you were eager to test out nightly releases on your own, you may have trouble joining the official launch of the testnet. This is because the blocks from the temporary chains are incompatible with the official testnet blocks. To fix this, you need to erase all previous blocks, easiest way is to format the drive.

To format your drive: 
1. Click on the `Blox` tab.
<div class="text--center">
   <img src="/img/fxyard-network/blox-page.png" style={{width: 450}}/>
</div>
2. Click and hold the `Hard Disk` you want to format.
3. When the pop-up shows, click the `Format` button.
<div class="text--center">
   <img src="/img/fxyard-network/format-button.png" style={{width: 400}}/>
</div>
4. Now wait! The light will turn purple. This process may take more or less than 5 minutes, dependent on the speed of your drive.
5. The FxBlox will auto-reboot, after it is done the lights will turn off.

FxBlox will automatically connect to testnet and save chain history. You should be able to join testnet now.