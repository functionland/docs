---
title: FxBlox App
id: fxblox-app
---

## Installing the FxBlox App

### Initial Setup
:::warning 
If you have setup FxBlox **before** official testnet launch, you will be required to format drive to clear out old/incompatible chain data. You can **format the drive after completing setup** and by **click and holding anywhere on the Hard Drive info box** until the pop-up option appears. See more [details here](./fxblox-app.md/#format-drive)
:::
1. **Download the App**: 
   - For Android: [FxBlox on Google Play (v1.5.5+)](https://play.google.com/store/apps/details?id=land.fx.blox).
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

### Troubleshooting

- **Final step connection issues**: Connect to mobile or home wifi, restart the FxBlox app, select `Connect to Existing Blox`. If that doesn't work, restart the FxBlox device. Close app and reopen to proceed with `Connect to new Blox`.
- **If Metamask doesn't redirect after signing transaction**: Manually go back to the FxBlox app.
- **App issues with Metamask**: On some phones, if you cannot get the "Connect" and "sign" prompts in Metamask, you may need to put both the Metamask app and Blox app in Unrestricted mode from the "Battery Optimization". Go to: `Settings` > `Apps` > `FxBlox` > `Battery` / `App Battery` > Choose `Unrestricted`. Do the same for the Metamask app. After the setup, you can return it back to the default of `Optimized`

## Format Drive

If you were eager to test out nightly releases on your own, you may have trouble joining the official launch of the testnet. This is because the blocks from the temporary chains are incompatible with the official testnet blocks. To fix this, you need to clear out all the blocks, easiest way is to format the drive.

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