---
title: FULA API
id: api
---
# FULA API

The FULA API was designed by us for us with the intention that you (a third party open source developer) will be able to leverage in order to build other compelling/rich user experiences for Box customers.

It comprises of the following.

  * a [data api](./api/data.md) for storing and querying structured data (JSON)

  * a [file api](./api/file.md) for uploading and retrieving files

## Typical API Usage

The `FILE` and `DATA` APIs can be used together to build many different types of DApps.

To better understand how they work together, here is an illustration of the basic flow you would use if you wanted to build your own Photos DApp.

At a high level you will write a client that enables the user to upload a bunch of files and retrieve a list of the files so that they can be displayed in your DApp.

In order to do this you need to tell the `DATA` API where to store the collection of photos.  The name of the collection can be anything you choose.

### Photo Upload

<p align="center">
  <img alt="Photo-Upload" src="https://raw.githubusercontent.com/functionland/docs/246391d247fb301351e483594037135d2b3e03d3/static/diagrams/upload-photo.svg"/>
  <p align="center">Photo-Upload</p>
</p>

### Retrieve Photos for Gallery

<p align="center">
  <img alt="Gallery-Retrieve" src="https://raw.githubusercontent.com/functionland/docs/246391d247fb301351e483594037135d2b3e03d3/static/diagrams/retrieve-photo.svg"/>
  <p align="center">Gallery-Retrieve</p>
</p>

