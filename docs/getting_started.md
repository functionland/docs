---
title: Getting Started
id: getting-started
---
import WorkInProgress from './components/WorkInProgress.mdx'

# Getting Started

To get started developing your own DApps on top of BOX there are two steps.  

First you will get the BOX platform up and running and then you will develop your own front-end that leverages the BOX Api.

## Step 1: Get the BOX server running locally.

The easiest way to do that is to clone our repo and use docker.

```
  > git clone https://github.com/functionland/fula
  > docker-compose -f docker-compose-dev.yml up
```

This not only starts the BOX app but also a few sample apps that already leverage the api.  Lets have a look at one of those samples now to verify everything is working as expected.

First you will need your [PeerID](https://docs.libp2p.io/concepts/peer-id/) that the BOX server created on startup.  

To find that have a look at your docker-compose logs for the following -

```
box_1             | Swarm listening on /dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star/p2p/12D3KooWPeEhynWyG7dHytppDP6ZG6jhEv7LcDLWsExGq1YD784E
box_1             | Swarm listening on /dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star/p2p/12D3KooWPeEhynWyG7dHytppDP6ZG6jhEv7LcDLWsExGq1YD784E
```

Next open the TODO sample app by navigating to `http://localhost:3000` in a browser.

You should see the following dialog:

![Todo Connect Prompt](/img/Todo-Connect.png)

Copy/paste the `PeerId` from the docker-compose logs into the text input.

Now open the browser console and you should see the following in the console log.

```
  Connected to QmT9wgbwG93G8HgbqQ9mMDRMGXT5N9oGEviLMdutmWZxms
```

Where QmT9wgbwG93G8HgbqQ9mMDRMGXT5N9oGEviLMdutmWZxms is your BOX's ```PeerID```

Click connect and ...


The app should redirect you to the TODOs app.

![Todo App](/img/Todo-Connected.png)

Congrats!  You now have the BOX server up and running and verified you can connect to it from a sample app.

## Step 2: Write your own front-end

Start writing your own front-end by either adding the FULA client libraries using npm/yarn to your project or starting from one of the [samples](https://github.com/functionland/fula/tree/main/examples) we provided.

We'll cover both.

### Using the samples

Open `/path/to/fula/examples/react-todo-app/src/components/TodoList.tsx` in your favourite editor.

Change the headline from -

```
<h1>Functionland Todo App</h1>
```

to -

```
<h1>My Todo App</h1>
```

You should now see the change reflected in your browser.

### Importing the client libraries in your own project

<WorkInProgress />

## What Next?

Now that you are up and running, head on over to the [BOX Reference Api](./api) to see everything you can do with BOX.
