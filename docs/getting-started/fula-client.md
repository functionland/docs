---
title: The FULA Client Library
id: fula-client
---
import WorkInProgress from '../components/WorkInProgress.mdx'

# The FULA Client Library
FULA Client lets you connect your web application to the BOX using [libp2p](https://libp2p.io/). It helps DApp developers to use a BOX as the back-end for their applications. You can use File and Data APIs to store and retrieve your data.  

## Installation
FULA Client is available in javascript, and it can be installed like any other NPM package:

```shell
npm i @functionland/fula
```

Alternatively, you can use the CDN version:

```html
<script src="https://cdn.jsdelivr.net/npm/@functionland/fula/dist/index.js"></script>
```

## Usage
Once you've imported the package in your project, in order to connect to your BOX you should create a client:
```javascript
import {createClient} from '@functionland/fula'
 
const fulaClient = await createClient();
```
Now that you have a FULA client instance, you can connect it to the BOX server. You must have the base58 PeerID string provided by your BOX server. 
```javascript
await fulaClient.connect(serverId)
```

## Helper Libraries

In addition to the FULA client library you might also find one of our framework helpers useful.

We currently support:

* [React](https://www.npmjs.com/package/@functionland/fula-client-react)

## What Next?

Now that you are up and running, head on over to the [FULA Reference Api](/api) to see everything you can do with BOX.

<WorkInProgress />
