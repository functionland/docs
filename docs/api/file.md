---
title: File API
id: file-api
---
import WorkInProgress from '../components/WorkInProgress.mdx'


# File API (Object Store)

File API provides an interface-like object store for you to upload files and streams (eg. photos, videos or any type of document) and efficiently retrieve them for use in your web/mobile DApp.

File protocol is based on object stores.  When you upload something, a [CID](https://docs.ipfs.io/concepts/content-addressing/) is created and returned to you and the file gets stored in an IPFS compatible datastore.

## Upload

### SendFile 
`sendFile(File) => Promise<FileId>` <br/>

sendFile will take a [File](https://developer.mozilla.org/en-US/docs/Web/API/File) as an argument and return a Promise.  If the upload completes successfully, a Promise will return a `FileId` that is a string
representing the CID of uploaded content. 

#### Example
```js
import {Fula, createClient} from '@functionland/fula';

const fulaClient = await createClient();
await fulaClient.connect(serverId);
...
const selectedFile = document.getElementById('input').files[0];
const id = await fulaClient.sendFile(selectedFile);
```

### sendStreamFile
`sendStreamFile(source, meta) => Promise<FileId>` <br/>

sendStreamFile will take a source and meta  as argument and return a Promise.  If upload is done successfully, a Promise will return a `FileId` that is a string
representing the CID of uploaded content.  (This is useful when you're working with stream or outside the browser.)

- source:  `AsyncIterable<Uint8Array>`
- meta: `{name,type,lastModified,size}`

#### Example
```js
import {Fula, createClient} from '@functionland/fula';

const fulaClient = await createClient();
await fulaClient.connect(serverId);
...
export async function* fileToAsyncItrable(file:File) {
    const reader = (file.stream()).getReader();
    while (true) {
        const {value, done} = await reader.read();
        if (done) {
            break;
        }
        yield value;
    }
}
const selectedFile = document.getElementById('input').files[0];
const id = await fulaClient.sendStreamFile(fileToAsyncItrable(selectedFile),
    {
        name: selectedFile.name,
        type: selectedFile.type,
        size: selectedFile.size,
        lastModified: selectedFile.lastModified
    });
```

## Download 
### receiveFile
`(fileId: FileId) => Promise<File>`<br/>

receiveFile will take FileId and return Promise. if file retrieved  successfully Promise return a [File](https://developer.mozilla.org/en-US/docs/Web/API/File)
- fileId:  `FileId`



#### Example
```js
import {Fula, createClient} from '@functionland/fula';

const fulaClient = await createClient();
await fulaClient.connect(serverId);
...
const data = await fulaClient.receiveFile(fileId);

```
### receiveMeta
`(fileId: FileId) => Promise<Meta>`<br/>

receiveMeta will take FileId and return Promise. if meta for the file retrieved successfully Promise return a `Meta`
- fileId:  `FileId`



#### Example
```js
import {Fula, createClient} from '@functionland/fula';

const fulaClient = await createClient();
await fulaClient.connect(serverId);
...
const {name, type, size, lastModified} = await fulaClient.receiveMeta(fileId);

```
### receiveStreamFile 
`(fileId: FileId) => Promise<{ source: AsyncIterable<Uint8Array>, meta: Meta }>` <br/>

receiveStreamFile will take FileId and return a Promise.  If the FileId exists, a Promise will return a `{ source: AsyncIterable<Uint8Array>, meta: Meta }`

That source is a stream of content of the file and Meta is the `Meta`.  (This is useful when you're working with a stream or outside of the browser.)

- fileId:  `FileId`


#### Example
```js
import {Fula, createClient} from '@functionland/fula';

const fulaClient = await createClient();
await fulaClient.connect(serverId);
...
const {source, meta} = await fulaClient.receiveStreamFile(fileId);
const {name, type, size, lastModified} = meta;
const content: Array<Uint8Array> = [];
for await (const chunk of source) {
    content.push(Uint8Array.from(chunk));
}
const blob = new Blob(content, {type})


```




<WorkInProgress />
