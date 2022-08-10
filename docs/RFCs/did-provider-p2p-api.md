Required: 
1. Create
2. Resolve
3. Update


1. Create:
 Param (content: object)
 Returns Content: object
```  
const cid = await ipfs.dag.put(content, { storeCodec: 'dag-cbor', hashAlg: 'sha2-512' });
const path = `/ipfs/${cid}`;
await ipfs.name.publish(path, {
                lifetime: lifetime,
                ttl: lifetime,
                key: keyName, // optional
            });
return content
```
2. Resolve:
 Param (peerId: string)
 Returns (Content: Object)
```  
const path:any = await all(ipfs.name.resolve(peerId));
console.log('path: ', path)
if(!path) return false
const cidStr = path[0].replace(/^\/ipfs\//, '');
const cid = CID.parse(cidStr)
const { value: content } = await ipfs.dag.get(cid);
return content
```  
3. Update:
Call Resolve function and get Content with peerID
Update previous content with new Content
```
const cid = await ipfs.dag.put(new_content, { storeCodec: 'dag-cbor', hashAlg: 'sha2-512' });
const path = `/ipfs/${cid}`;
await ipfs.name.publish(path, {
                lifetime: lifetime,
                ttl: lifetime,
                key: keyName, // optional
            });
return new_content
```

