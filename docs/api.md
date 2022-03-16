---
title: FULA API
id: api
---
# FULA API

The FULA API was designed by us for us with the intention that you (a third party open source developer) will be able to leverage in order to build other compelling/rich user experiences for BOX customers.

It comprises of the following.

  * a [data api](./api/data.md) for storing and querying structured data (JSON)

  * a [file api](./api/file.md) for uploading and retrieving files

## Typical API Usage

The `FILE` and `DATA` APIs can be used together to build many different types of DApps.

To better understand how they work together, here is an illustration of the basic flow you would use if you wanted to build your own Photos DApp.

At a high level you will write a client that enables the user to upload a bunch of files and retrieve a list of the files so that they can be displayed in your DApp.

In order to do this you need to tell the `DATA` API where to store the collection of photos.  The name of the collection can be anything you choose.

### Photo Upload
![Photo-Upload](/diagrams/upload-photo.svg)

### Retrieve Photos for Gallery
![Gallery-Retrieve](/diagrams/retrieve-photo.svg)

