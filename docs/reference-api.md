---
title: Reference
id: reference-api
---
# Fula API Reference

The Fula API includes the following:

  * a [Graph API](./api/graph.md) for storing and querying structured data (JSON) over a graphql interface

  * a [File API](./api/file.md) for uploading and retrieving files

## Typical API Usage

The `File` and `Graph` APIs can be used together to build many different types of DApps.

To better understand how they work together, here is an illustration of the basic flow you would use if you wanted to build your own photos DApp.

At a high level you will write a client that enables the user to upload a bunch of files and retrieve a list of the files so that they can be displayed in your DApp.

In order to do this you need to tell the `Graph` API where to store the collection of photos.  You can give this collection any name you choose.

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


## Under the Covers

To understand how the Fula client connects to a Box, it may help to understand what is going on under the covers.

The following Box  <->  Client class diagram shows relationships and responsibilities for each component.

![Client Box architecture](/diagrams/box-client-arch.png)


