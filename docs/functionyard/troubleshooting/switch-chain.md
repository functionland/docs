# Switch Chain Troubleshooting

If you're experiencing issues with blockchain network switching in the FxBlox app, this guide will help you resolve common problems.

## Understanding Blockchain Networks

The FxBlox app supports multiple blockchain networks:

- **SKALE** - The default chain for most users
- **Base** - Available for users with authorization codes

## Common Issue: Persistent "Switch Chain" Button

If the app continues to show a "Switch to Chain" button even after you've selected the correct chain in MetaMask, follow these troubleshooting steps:

### Symptoms
- The "Switch to Chain" button appears on the home page, pools page, or chain selection page
- Button remains visible even after selecting the correct chain in MetaMask
- App doesn't recognize that you're on the correct network

### Solution Steps

Follow these steps in order to resolve the chain switching issue:

#### Step 1: Verify MetaMask Network
1. **Open MetaMask** in your browser or mobile app
2. **Check the network selector** at the top of MetaMask
3. **Ensure you're connected** to the chain you want to use:
   - **SKALE Mainnet** (default)
   - **Base** (if you have authorization)

:::tip
Make sure the network name in MetaMask exactly matches what the FxBlox app expects. Sometimes custom network names can cause recognition issues.
:::

#### Step 2: Close Both Applications
1. **Close the FxBlox app** completely
   - On mobile: Swipe up and close the app from recent apps
   - On desktop: Close the browser tab or application window
2. **Close MetaMask** completely
   - Close all MetaMask browser tabs or mobile app instances

#### Step 3: Restart FxBlox App
1. **Open the FxBlox app** fresh
2. **Navigate to the page** where you see the "Switch to Chain" button
   - This could be the home page, pools page, or chain selection page

#### Step 4: Initiate Chain Switch
1. **Click the "Switch to Chain" button** in the FxBlox app
2. **MetaMask will automatically open** and prompt for network switching

#### Step 5: Wait for MetaMask Processing
1. **Wait a few seconds** after MetaMask opens
2. **Look for the "Return to App" prompt** in MetaMask
3. **This indicates the chain switch was successful**

:::success
When you see "Return to App" in MetaMask, it means the network switching process completed successfully.
:::

#### Step 6: Return to FxBlox App
1. **Click "Return to App"** in MetaMask or switch back to the FxBlox app
2. **Give the page a few seconds** — see the note below
3. **The "Switch to Chain" button should now disappear**
4. **Your app should now be properly connected** to the selected network

:::info The page may lag a few seconds behind your wallet
On a phone, the browser's connection to your wallet is suspended while you are away in MetaMask, and has to be re-established when you come back. So the FxBlox tab can still show **Connecting Wallet…**, or still show the old button, for a few seconds after you have already approved.

**Wait rather than helping.** Tapping the button again or reloading the tab in those first seconds cancels the request you just approved and starts the hand-off over. Only if nothing has changed after roughly half a minute should you try the steps again.
:::

## Troubleshooting Tips

### If the Button Still Appears
- **Clear your browser cache** if using the web version
- **Try disconnecting and reconnecting** your wallet in the app
- **Reload the FxBlox tab** to make sure you are on the latest version of the web app, and check that MetaMask is up to date

### Network Configuration Issues
- **Verify network details** in MetaMask match the official network parameters
- **Check if you have authorization** for Base chain if trying to switch to it
- **Contact support** if you believe you should have access to a specific chain

### MetaMask Connection Problems
- **Give it a few seconds first** if the app still says "Connecting Wallet…" after you came back from MetaMask — on a phone the page catches up a little after you do, and tapping again in the meantime cancels what you just approved
- **On Android, if MetaMask opens and sits on its splash screen**, close it completely from your recent apps before coming back and tapping again — tapping without closing it first only returns you to the same stuck screen
- **If that happens every time**, Android is restricting MetaMask in the background: set MetaMask and your browser to **Unrestricted** under **Settings → Apps → (app) → Battery**
- **Refresh the MetaMask extension** if it appears unresponsive
- **Check MetaMask permissions** for the FxBlox app
- **Try using a different browser** if issues persist

## Supported Networks

| Network | Access | Requirements |
|---------|--------|-------------|
| SKALE Mainnet | Default | All users |
| Base | Restricted | Authorization code required |

:::info
SKALE is the default network for most FxBlox operations. Base chain access requires special authorization and is not available to all users.
:::

## Additional Support

If you continue to experience chain switching issues:

1. **Check our [Support page](../support.md)** for additional resources
2. **Verify your authorization status** if trying to access restricted networks
3. **Contact support** with details about which networks you're trying to switch between

:::warning
Always ensure you're using official network configurations. Using incorrect network parameters can cause connection issues and potential security risks.
:::
