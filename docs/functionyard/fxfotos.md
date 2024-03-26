---
title: FxFotos Apps
id: fxfotos
---

## Use case
FxFotos is a decentralized media manager. It automatically syncs up your media files (pictures and videos), and allows you to open and view media files on your phone. It comes with features such as:
 - Thumb scroll to quickly browse earlier dates
 - Pinch to change number of columns
 - Highlights
 - Video and Photos player support for a variety of formats
 - Basic search functionality
  
## Use FxFotos App

1. Install `FxFotos` from [Google Play](https://play.google.com/store/apps/details?id=land.fx.fotos)

2. Wait for a minute for the loading bar to disappear (This makes the experience smoother and just needed for the first time)

:::info It is smoother if you open Metamask here before continuing with login
:::

3. Click on the profile icon on the top right

4. Click allow notifications

5. Enter an arbitrary password (This can be the same or different from `FxBlox` and other dApps). Make sure you do not lose this password as there is no way to retrieve it.

6. Click Login and complete the signing steps in Metamask. After which you will be redirected back to `FxFotos` automatically.

7. After a successful login, you will see relevant information about your account:
- `Your Did`: This is your decentralized ID based on your password
- `Your Content Root CID` (This is hidden by default): This value is needed in order to retrieve your data on another account. We are working to enhance the protocol side to make this value retrievable but right now if you lose it there is no retrieval method. This value changes after each upload (Private)
- `Your Private Key` (This is hidden by default): This value is needed in order to retrieve your data on another account. There is no need to save this as this is automatically being created from the DID (Private)
- `Fula Account`: This is the Fula account that the tokens/payments for backing up your data will be deducted from. For testnet initially there is no charge but also no guarantee for hte data you upload (Not private)
- `Your PeerID`: This is the peer id that the application uses to connect to other nodes (Not private)

8. Click on `Choose a pool for uploads` and select a pool close to you. If you make a mistake, you can `Clear pool selection` and select another pool.

9. Click back and go to main screen.

10. To upload/backup a media file, click on it to open, then tap one time on the screen and you see a back up icon shown at the bottom of screen.

:::info 
We have deactivated the auto-sync initially during testnet launch to give us better troubleshooting and debugging opportunity. We thank you for your patience. 
:::

## How to see my uploaded/backed-up data?

We are working on a web interface that shows you the backed up data, but for now there is an unreleased app which you can copy the "Private Key" and "root Cid" From FxFotos over to that application, and it shows you the list of uploaded files. The app does not transfer the keys outside or to any third party and is totally safe.
It can be downloaded from here: 


## Future Plans

1. Completing the browser based application
2. Sharing with others. You can easily share the uploaded files with others in or outside of Fula network and set expiry date, give write permission, and anything you can do on the cloud. This feature already exists in the protocol and we just need to implement the required interfaces for it.
3. Integration with AI. We are working on integrating the application with on-device face-detection algorithms.
4. Easy import from Google/Apple Photos. We implement a feature to easily migrate your files over from other applications.