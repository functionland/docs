---
title: Install Fula Node on Windows
id: join-windows
---
import ReactPlayer from 'react-player';

This guide is for getting a Fula node installed on a Windows machine and adding it to testnet. To get an invite, you can ask a community memeber in Telegram or Discord. If already a Blox or NFT owner, you can join testnet with Indiegogo order or wallet address, respectively.

## Video Guide

<center>
    <ReactPlayer controls url="https://youtu.be/1xHePpEIit8" />
</center>

## Written Guide

## Download Docker Desktop

The Fula node is a set of [Docker containers](https://fierrolabs.medium.com/the-zoo-animal-analogy-of-docker-you-never-knew-you-needed-8c1b295e9bf4) that work in tandem to sync the network of Bloxes and store and retrieve data. Docker Desktop can be downloaded from their website. Follow the [official instructions](https://docs.docker.com/desktop/install/windows-install/) to do so.

[![Docker Desktop Website](/img/fxyard-network/doocker_desktop_install.png)](https://docs.docker.com/desktop/install/windows-install/)

### Install WSL2
If Docker Desktop does not install, try installing the Windows Subsystem for Linux (WSL) first. You can do so easily by opening PowerShell in Admin mode. And run:
```
wsl --install
```

After which, attempt to run the Docker Desktop one more time. For more information on WSL, check out the official [Microsoft WSL guide](https://learn.microsoft.com/en-us/windows/wsl/install).

## Install and Run Docker Desktop

Install and run the application to run through the setup process. Sign up for a Docker account if you don't already have one, otherwise go ahead and log in. Answer the basic questions, and move through the next steps until you get to the _Container View_ page.



## Install and Run Fula Node

Follow this link to download the [Fula Node for Windows](https://fx.land/1.4/FulaSetup.exe).
1. When it finishes downloading, your browser may flag the executable as non-safe, but click **Keep Anyway**. Then, continue with double-clicking on the exe.
2. Accept user license agreement.
3. Choose where to download the program files to.
4. Choose what drive that the Fula Node will use to store files.
5. Accept the prompts from Windows to open up the ports the application is requesting access to.
6. Start the Fula Node by doing a _Windows Search_ for **Fula Start**. 
7. Wait ~10 minutes for the Fula containers to download and start running.

## Join Testnet on Windows

1. Open _Taskbar_ and click on the **Fula** icon.
2. Click **View Terms**, then click **Accept Terms and Continue**.
3. Set a password. **Recommended: **Use the same password across multiple nodes.
4. Sign wallet transaction. **Recommended: **Use the same wallet across multiple nodes.
5. Click **Sign Authorizor**. Then click **Next**.
6. Click on the _Token Account ID_ to copy to clip board.
7. Go to [https://fund.functionyard.fula.network/](https://fund.functionyard.fula.network/) to register your node in the testnet.

### Joining by invitation
Send _Token Account ID_ to the person who is inviting you so they can proceed with the next steps.

### Indiegogo OG funder
#### If setting up for yourself:
1. Fill in your _Email, Order ID, Phone Number, and Token Account ID_.
2. Click **Join Testnet Using Indiegogo**.

#### If inviting someone else:
1. Fill in your _Email, Order ID, and Phone Number_.
2. Fill in _Token Account ID_ with the ID they gave you.
3. Change the _Join Blox_ dropdown to **Invite Others**. 

### NFT Hodler
1. Fill in the _Token Account ID_.
2. Click "Join Testnet Using NFT".
3. Sign the transaction.

## Join a Pool
In the _Join a Pool_ page, click on the pool that is closest to your geographical location. This is to ensure data replication, writing, and reading speeds are quick for all those in the region.

## View Rewards and container status
After at least a day, the node will have earned storage rewards. Now, click on the _Fula taskbar icon_, to see the status of fula containers and the rewards.