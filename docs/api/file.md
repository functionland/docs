---
title: File API
id: file-api
---
import WorkInProgress from '../components/WorkInProgress.mdx'


# File API (Object Store)
File API provides An interface like object stores for you to upload files and streams (eg/ photos, videos or any type of 
document) and efficiently retrieve them for use in your web/mobile Dapp. file protocol is base on object store's so we don's support ls.
if you upload something you have to store the cid to access is. (use data-protocol to keep track of what you uploaded).

## Upload

### `sendFile(File) => Promise<FileId>` 
sendFile will take a File/Blob as argument and return Promise. if upload done successfully Promise return a `FileId` that is a string
representing the CID of uploaded content. 

#### example
```js
import {Borg, createClient} from '@functionland/fula';

const fulaClient = await createClient();
await fulaClient.connect(serverId);
...
const selectedFile = document.getElementById('input').files[0];
const id = await fulaClient.sendFile(selectedFile);
```



<WorkInProgress />
