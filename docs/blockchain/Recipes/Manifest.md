# Manifest

## Upload Manifest

### Description:

Allows the user to upload a manifest to the chain so it's available to be stored.

### Previous Steps:

1. Upload the file on IPFS and copy the file CID.

### Steps:

1. Call the manifest/upload endpoint with the following request body:

### Example Input:

```jsx
{
    "seed": "//Alice",
    "pool_id": 1,
    "cid": "CIDTest1",
    "replication_factor":2,
    "manifest_metadata": {
        "job": {
            "work": "Storage",
            "engine": "IPFS",
            "uri": "CIDTest1"
        }
    }
}
```

- seed: the seed of the account uploader.
- replication_factor: the amount of times that file can be replicated.
- pool_id: the pool identifier where the file its going to be uploaded.
- manifest_metadata: the corresponding metadata of the manifest being uploaded.

### Example Output:

```jsx
{
   "uploader": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
   "storage": [],
   "manifest_metadata": {
       "job": {
           "engine": "IPFS",
           "uri": "CIDTest1",
           "work": "Storage"
       }
   },
   "pool_id": 1
}
```

- uploader: the account of the file uploader.
- storage: the accounts that are storing the file currently (initialized as empty).
- manifest_metadata: the corresponding metadata of the manifest uploaded.
- pool_id: the pool identifier where the file its going to be uploaded.

## Batch Upload Manifest

### Description:

Allows the user to upload multiple manifest to the chain so they’re available to be stored.

### Previous Steps:

1. Upload the files on IPFS and copy the file CIDs.

### Steps:

1. Call the manifest/batch_upload endpoint with the following request body:

### Example Input:

```jsx
{
    "seed": "//Alice",
    "pool_id": [1,1],
    "cid":["CIDTest2", "CIDTest3"],
    "replication_factor": [2,3],
    "manifest_metadata": [{
        "job": {
            "work": "Storage",
            "engine": "IPFS",
            "uri": "CIDTest1"
        }
    },{
        "job": {
            "work": "Storage",
            "engine": "IPFS",
            "uri": "CIDTest2"
        }
    }]
}
```

- seed: the seed of the account uploader.
- replication_factor: the amount of times that file can be replicated.
- pool_id: the pool identifier where the file its going to be uploaded.
- manifest_metadata: the corresponding metadata of the manifest being uploaded.

### Example Output:

```jsx
{
    "uploader": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
    "pool_id": [1,1],
    "manifest_metadata": [
        {
            "job": {
                "engine": "IPFS",
                "uri": "CIDTest1",
                "work": "Storage"
            }
        },
        {
            "job": {
                "engine": "IPFS",
                "uri": "CIDTest2",
                "work": "Storage"
            }
        }
    ]
}
```

- uploader: the account of the file uploader.
- manifest_metadata: the corresponding array of metadata of the manifests uploaded.
- pool_id: the array of pool identifiers where the file its going to be uploaded.

## Store Manifest

### Description:

Allows the user to store a specific manifest through the cid of a manifest.

### Previous Steps:

1. Upload a manifest.

### Steps:

1. Call the manifest/storage endpoint with the following request body:

### Example Input:

```jsx
{
   "seed": "//Bob"
   "cid": "CIDTest1",
   "pool_id": 1
}
```

- seed: the seed of the storage account.
- cid: the content identifier associated with the file uploaded.
- pool_id: the pool identifier where the file is uploaded.

### Example Output:

```jsx
{
   "storage": "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",
   "cid": "CIDTest1",
   "pool_id": 1
}
```

- storage: the account that's storing the file.
- cid: the content identifier of the manifest being stored.
- pool_id: the pool identifier where the file is uploaded.

## Batch Store Manifest

### Description:

Allows the user to store all the manifest he wants through the cids of those manifest.

### Previous Steps:

1. Upload a manifest.

### Steps:

1. Call the manifest/batch_storage endpoint with the following request body:

### Example Input:

```jsx
{
    "seed": "//Bob",
    "pool_id": 1,
    "cid": ["CIDTest1","CIDTest2"]
}
```

- seed: the seed of the storage account.
- cid: an array of the content identifiers associated with the files uploaded.
- pool_id: the pool identifier where the file is uploaded.

### Example Output:

```jsx
{
   "storer": "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",
   "cid": ["CIDTest1","CIDTest2"]
   "pool_id": 1
}
```

- storer: the account that's storing the file.
- cid: an array of the content identifiers associated with the files uploaded.
- pool_id: the pool identifier where the file is uploaded.

## **Get Available**

### Description:

Fetches all the available manifests to be stored.

### Previous Steps:

1. Upload a manifest.

### Steps:

1. Call the manifest/available endpoint with the following request body:

### Example Input:

```jsx
{
   "pool_id": 1
}
```

- pool_id: the pool identifier where the file is uploaded.

### Example Output:

```jsx
{
   "manifests": [
       {
           "pool_id": 1,
           "manifest_data": {
               "manifest_metadata": {
                   "job": {
                       "engine": "IPFS",
                       "uri": "CIDTest1",
                       "work": "Storage"
                   }
               }
           },
           "replication_available": 1
       }
   ]
}
```

- manifests: an array of all the manifest that are available to be stored in that pool.

## **Get All**

### Description:

Fetches all the manifest there are or those related to the parameters given as filter.

### Previous Steps:

1. Upload a manifest.

### Steps:

1. Call the manifest endpoint with the following request body:

> *Note: If you call the function with empty parameters: { }. This will bring all the manifest there are.*
> 

### Example Input:

```jsx
{
   "pool_id": 1,
   "account":"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
}
```

- pool_id: the pool identifier where the files are uploaded.
- account: the account that uploaded the files.

### Example Output:

```jsx
{
    "manifests": [
        {
            "pool_id": 1,
            "uploaders": [
                {
                    "uploader": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
                    "storers": [],
                    "replication_available": 2
                }
            ],
            "manifest_metadata": {
                "job": {
                    "engine": "IPFS",
                    "uri": "CIDTest1",
                    "work": "Storage"
                }
            }
        }
    ]
}
```

- manifests: an array of all the manifest that were fetch according to the parameters given.

## **Remove**

### Description:

The uploader or admin can remove a manifest from the pool.

### Previous Steps:

1. Upload a manifest.

### Steps:

1. Call the manifest/remove endpoint with the following request body:

### Example Input:

```jsx
{
   "seed": "//Alice",
   "cid": "CIDTest1",
   "pool_id": 1
}
```

- seed: the seed of the account uploader.
- cid: the content identifier of the manifest being removed.
- pool_id: the pool identifier where the file is being removed.

### Example Output:

```jsx
{
   "uploader": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
   "cid": "CIDTest1",
   "pool_id": 1
}
```

- uploader: the account of the file uploader.
- cid: the content identifier of the manifest removed.
- pool_id: the pool identifier where the file was removed.

## Batch **Remove**

### Description:

The uploader or admin can remove a manifest from the pool.

### Previous Steps:

1. Upload a manifest.

### Steps:

1. Call the manifest/batch_remove endpoint with the following request body:

### Example Input:

```jsx
{
    "seed": "//Alice",
    "pool_id": [1,1],
    "cid": ["CIDTest1","CIDTest2"]
}
```

- seed: the seed of the storage account.
- cid: an array of the content identifiers associated with manifest being removed.
- pool_id: the pool identifier where the file is being removed.

### Example Output:

```jsx
{
   "uploader": "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",
   "cid": ["CIDTest1","CIDTest2"],
   "pool_id": [1,1],
}
```

- uploader: the account of the file uploader.
- cid: the array of content identifiers of the manifest removed.
- pool_id: the pool identifier where the file was removed.

## **Remove Stored Manifest**

### Description:

The storer can stop storing a given manifest

### Previous Steps:

1. Upload a manifest.
2. Store a manifest.

### Steps:

1. Call the manifest/remove_storing_manifest endpoint with the following request body:

### Example Input:

```jsx
{
   "seed": "//Bob",
   "cid": "CIDTest1",
   "pool_id": 1
}
```

- seed: the seed of the account storer.
- cid: the content identifier of the manifest to no longer be stored.
- pool_id: the pool identifier.

### Example Output:

```jsx
{
   "storer": "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",
   "cid": "CIDTest1",
   "pool_id": 1
}
```

- storer: the account of the file storer.
- cid: the content identifier of the manifest no longer being stored.
- pool_id: the pool identifier.

## Batch **Remove Stored Manifest**

### Description:

The storer can stop storing the given manifests

### Previous Steps:

1. Upload a manifest.
2. Store a manifest.

### Steps:

1. Call the manifest/batch_remove_storing_manifest endpoint with the following request body:

### Example Input:

```jsx
{
   "seed": "//Bob",
   "cid": ["CIDTest1","CIDTest2"]
   "pool_id": 1
}
```

- seed: the seed of the account storer.
- cid: the array of content identifiers of the manifests to no longer be stored.
- pool_id: the pool identifier.

### Example Output:

```jsx
{
   "storer": "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",
   "cid": ["CIDTest1","CIDTest2"]
   "pool_id": 1
}
```

- storer: the account of the file storer.
- cid: the array of content identifiers of the manifests no longer being stored.
- pool_id: the pool identifier.