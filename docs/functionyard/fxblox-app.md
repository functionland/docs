---
title: FxBlox App Setup
id: fxblox-app
---

## Open the FxBlox app

The FxBlox app now runs **in your browser**. There is nothing to install and nothing to update — open:

### [https://docs.fx.land/fxblox-web/](https://docs.fx.land/fxblox-web/)

:::info What you need
- **Google Chrome or Microsoft Edge**, on a computer (Windows, macOS, Linux) or an Android phone.
- Setting up a Blox uses Web Bluetooth and your browser's local-network permission, which only Chromium-based browsers provide. Firefox and Safari will show an "unsupported browser" page.
:::

:::caution iOS is not supported — use a computer
The FxBlox app **does not support iPhone or iPad**. Every browser on iOS — including Chrome and Edge — is built on Apple's WebKit engine, which has no Web Bluetooth and no local-network access, so a web page on iOS has no way to reach your Blox.

**Set your Blox up from a computer instead** — Windows, macOS or Linux with Chrome or Edge. This is new: the old mobile apps could only run on a phone, so you had to use one. The web app runs on a desktop or laptop, so a computer is now the simplest way to set up a Blox. (An Android phone works too, if that is what you have to hand.)
:::

:::warning
There is no need for extra reboots, long waits other than what is specified, or multiple retries if you follow these instructions exactly. If at any point it is not as expected, it means there is an issue and you need to [contact support](/functionyard/support).
:::

## Before you start

1. **A wallet.** MetaMask as a browser extension on desktop, or the MetaMask app on Android. It does not matter which network your wallet is on during setup.
2. **Storage.** Either a Blox with internal storage, or at least **300 GB** of external storage attached. If your Blox has internal storage, disconnect any external disk before you begin.
3. **A powered-on Blox** whose LED is flashing <font color="cyan">light blue</font>. If it is not, wait — after the first boot it can take 10-15 minutes to get there.

---

## Set up your Blox

### 1. Welcome

Open [https://docs.fx.land/fxblox-web/](https://docs.fx.land/fxblox-web/). Read the [Terms and Conditions](https://fx.land/terms) and, if you agree, choose **Agree & Setup my Blox**.

<img src="/img/fxblox-web/01-welcome.jpg" alt="FxBlox web app welcome screen" style={{maxWidth: '250px'}} />

### 2. Before you start (browser check)

The app checks your browser and shows only what needs your attention — an unsupported browser, blocked local-network access, or the optional camera permission used for scanning a pairing QR code. You can always type a pairing code by hand instead of allowing the camera.

<img src="/img/fxblox-web/02-requirements.jpg" alt="Browser requirements check" style={{maxWidth: '250px'}} />

:::tip
If Chrome asks to **allow this site to access devices on your local network**, choose **Allow**. Without it the app cannot reach your Blox over Wi-Fi. You can change it later at `chrome://settings/content/localNetworkAccess`.
:::

### 3. Set your identity

Enter a memorable **password** — this encrypts your data and is **not** your MetaMask password. Then connect your wallet and approve the signature request.

Your password plus that one signature is what produces your identity. **Write the password down**: the same password with the same wallet always produces the same identity, and a different password produces a different one.

On a phone this takes two taps, on purpose: the first **Sign with Wallet** connects the wallet, and the second sends it the signature request. A browser is only allowed to switch to another app from a real tap, so the second one cannot happen for you.

:::info Coming back from your wallet? Give the page a few seconds
After you approve in MetaMask — or any other wallet — and return to the FxBlox tab, the page can still show **Connecting Wallet…** for a few seconds before it catches up. That is normal. Android suspends the browser's connection while you are away in another app, and it has to be re-established before the page can see what you approved.

**Wait for it rather than helping.** Tapping the button again, reloading the tab or going back a screen cancels the request you just approved, and you have to start the whole hand-off over. Only if nothing has changed after roughly half a minute is something actually wrong.
:::

:::tip Wallet opened but stuck on its splash screen?
This happens on Android, most often on the first signature right after connecting: MetaMask comes to the front and then sits on its splash screen without ever showing the prompt.

**Close MetaMask completely from your recent apps**, return to the FxBlox tab, and tap **Open wallet to approve**. That is the step that clears it — tapping the button again *without* closing MetaMask first will simply open it back onto the same stuck screen.

Your signature request stays valid throughout, so nothing is lost and you do not need to start setup again. This is a fault inside the wallet app; a web page cannot reach into it and restart it for you.
:::

### 4. Connect to your Blox

<img src="/img/fxblox-web/03-connect-blox.jpg" alt="Connect to Blox screen" style={{maxWidth: '250px'}} />

There are three ways to reach the Blox. Try them in this order:

1. **Connect via Bluetooth** — the most reliable, and it works whatever network you are on. Chrome opens its own device chooser; pick the entry starting with **`fulatower`** or **`fxblox`** and click **Pair**.
   - The Blox only advertises over Bluetooth periodically. If you do not see it, wait up to 90 seconds with the chooser open and it will appear.
2. **By its address on your network** — if your Blox is plugged into your router with a cable, or is already on your Wi-Fi. Find its address in your router's list of connected devices; it usually starts with `192.168.`.
3. **Over the Blox's own Wi-Fi hotspot** — open your Wi-Fi settings, join the network called **"FxBlox"**, then come back and press the check button. Your internet will pause while you are connected to it.

:::info
The hotspot route needs recent Blox firmware. If the app reports that the Blox answered but its firmware predates the web update, use **Connect via Bluetooth** instead — that path works on every firmware version.
:::

### 5. Set the Blox authorizer and format the disk

This screen claims the Blox for your identity.

:::warning Everyone should format their storage at this step
At the *Set authorizer* page, wait about **10 seconds** and a green **Format Disk** button appears. Click it. The Blox turns <font color="purple">purple</font> and reboots after a few minutes, and the app returns to the *Connect to Blox* screen. Wait for the LED to be flashing <font color="cyan">light blue</font> again, then reconnect and continue.

If the capacity still shows 0 after formatting, format the external disk yourself — or, if you have a 1 TB internal drive, [contact support](/functionyard/support).
:::

Once the app recognises your storage, continue. Formatting time depends on the drive's speed and capacity, so be patient; the Blox reboots by itself and eventually flashes <font color="cyan">light blue</font> again when it is ready.

### 6. Connect the Blox to Wi-Fi

Choose the network you want the **Blox** to join and enter its password. The list shows the networks *the Blox* can see, not the ones your computer can see. Set the two-letter country code to match where you are (for example `CA`, `US`, `DE`).

If you mistype the password, go back to the network list and select it again.

### 7. Reconnect and finish

The Blox's own "FxBlox" hotspot switches off as soon as it joins your Wi-Fi, so your computer or phone may drop off the network. Rejoin the same Wi-Fi as the Blox and press **I'm connected**.

When the Blox reaches the internet, its LEDs turn <font color="green">green</font> for 30 seconds and then switch off. Keep the browser tab open while this happens.

:::info
After setup completes, the chain starts syncing. If you see a **Reset Chain Data** prompt, ignore it and wait for the sync to finish — you can watch the progress in **Settings → Pools**.
:::

We recommend unplugging and replugging the Blox once after the initial setup. It may reboot itself once more after that.

---

## Already set up from the phone?

**You do not need to set your Blox up again.** The web app derives your identity exactly the same way the mobile app does: the same password with the same wallet produces the same identity, so a Blox that was paired from your phone recognises the browser straight away.

Open the web app, enter your existing password, sign with the same wallet, then choose **Reconnect to existing blox**. Signing works exactly as in [step 3](#3-set-your-identity) — including the wait after you come back from your wallet:

<img src="/img/fxblox-web/04-connect-existing.jpg" alt="Finding Bloxes on your network" style={{maxWidth: '250px'}} />

- **Search the network** finds your Blox by its name on the network you are on and reads its peer ID.
- **Find over Bluetooth** also reaches a Blox that is already set up.
- **Add by peer ID** works from anywhere — the Blox does not need to be on your network. In the mobile app the peer ID is on the **Users** tab under *Bloxs' PeerId*, with a copy button. It starts with `12D3KooW` and is 52 characters long.

## Add Multiple FxBloxes

Adding more than one Blox no longer requires logging out and back in. From the web app:

1. Complete setup of your first Blox.
2. Go to **Settings → Blox discovery** (or open [/setup/connect-existing](https://docs.fx.land/fxblox-web/setup/connect-existing) directly).
3. **Search the network**, or **Find over Bluetooth**, or **Add by peer ID**.
4. Tick every Blox you want, then press **Add selected blox(s)**.
5. Check them all under the **Blox** tab.

:::info
**Our apps are open source. If you would like to [contribute to the project](https://github.com/functionland/fxblox-web), that would be greatly appreciated!**
:::

## Format Drive

If you tested nightly releases before the official launch, blocks from those temporary chains are incompatible with the official network. The easiest fix is to erase them by formatting the drive.

During setup, use the **Format Disk** button on the *Set authorizer* screen (see [step 5](#5-set-the-blox-authorizer-and-format-the-disk) above).

After setup, from the **Blox** tab:

1. Open the **Blox** tab.
<center>
   <img src="/img/fxyard-network/blox-page.png" style={{width: 450}}/>
</center>
2. Open the actions for the **Hard Disk** you want to format.
3. Choose **Format** and confirm.
<center>
   <img src="/img/fxyard-network/format-button.png" style={{width: 400}}/>
</center>
4. **Now wait.** The LED turns purple. This can take more or less than 5 minutes depending on the speed of your drive.
5. The Blox reboots by itself; when it is done the lights turn off.

The Blox reconnects to the network and saves chain history automatically.

## Troubleshooting

- **The app says your browser will not work.** Use Chrome or Edge on a computer (Windows, macOS or Linux), or on an Android phone. iOS is not supported — see the note at the top of this page.
- **"Your browser is blocking access to your network."** Chrome has not been granted local network access for this site. Allow it at `chrome://settings/content/localNetworkAccess`, then reload the page. Or use **Connect via Bluetooth**, which does not need that permission.
- **The Blox answers but the app reports missing CORS headers.** The firmware predates the web update. Use **Connect via Bluetooth** to continue, or update the Blox from the legacy mobile app.
- **Chrome's Bluetooth chooser is empty.** Leave it open for up to 90 seconds — the Blox advertises periodically rather than continuously. Make sure Bluetooth is switched on, and that the browser itself is allowed to use it (see the macOS and Android notes below).
- **On macOS**, Chrome needs two permissions from the system or it will fail quietly. Grant both under  **System Settings → Privacy & Security**: **Bluetooth** (otherwise the device chooser stays empty) and **Local Network** (otherwise the app cannot reach the Blox over Wi-Fi). Quit and reopen Chrome after changing them.
- **On Android**, the browser needs the location / nearby-devices permission before it can scan for Bluetooth devices.
- **The page still says "Connecting Wallet…" after you approved.** Wait a few seconds. The browser's connection is suspended while you are away in your wallet and has to be re-established on the way back, so the page notices a little after you do. Do not tap again or reload — that cancels the request you just approved.
- **The wallet does not come back after signing.** Switch back to the FxBlox tab yourself. If MetaMask is stuck on its splash screen, close it fully from your recent apps and then tap **Open wallet to approve** — tapping without closing it first only returns you to the same stuck screen. The signature request stays valid either way.
- **Connection problems at the final step.** Connect to the same Wi-Fi as the Blox, reload the page, and use **Reconnect to existing blox**. If that does not work, restart the Blox, wait for the flashing light blue, and set it up again.
- **Starting completely over.** The browser equivalent of uninstalling and reinstalling the app is **Clear app storage** on the *Set identity* screen. It deletes everything FxBlox stored in this browser — identity, Blox list, settings and caches — and reloads the page.
- **Nothing loads after a new release.** Reload the tab. If a "new version available" prompt appears, accept it.

## App features

1. You can transfer your earned tokens to your wallet from the **Earnings** section on the Blox page, pasting the destination address (manual entry is not allowed).
2. You can format storage from the **Hard Disks** section of the Blox page.
3. You can see Blox details from the Blox icon, and account details from the profile icon in the top right.
4. You can find Bloxes already on your network under **Settings → Blox discovery**.

---

## Legacy mobile apps

:::caution Being discontinued
The Android and iOS FxBlox apps are being discontinued and will stop receiving updates. Please move to the web app at [https://docs.fx.land/fxblox-web/](https://docs.fx.land/fxblox-web/).

You do not lose anything by switching: the same password and the same wallet give you the same identity, so your existing Bloxes are recognised immediately.
:::

They are listed here only for people who already have them installed. **Don't set up a new Blox with them** — use a computer with Chrome or Edge instead.

- Android: [FxBlox on Google Play](https://play.google.com/store/apps/details?id=land.fx.blox) (version 2.0.1 or higher)
- iOS: [FxBlox on the App Store](https://apps.apple.com/ca/app/fxblox/id6444862171) (version 2.0.1 or higher)

If you use the mobile app: check your version in **Settings → About**, and if you are reinstalling, uninstall the old version first rather than updating over it. On some Android phones you may need to set both MetaMask and FxBlox to **Unrestricted** under `Settings → Apps → FxBlox → Battery` for the connect and sign prompts to appear.
