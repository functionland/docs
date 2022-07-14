---
title: Fotos Availability
id: availability
---

# Fotos Availability

## Acceptance Criteria

You uploaded a photo to your Box.

Your Box goes offline and you are still able to retrieve the photo from a second Box in your pool.

## Preconditions

1. You already have a [cluster setup](https://github.com/functionland/fula/tree/main/apps/cluster).

2. You already [setup](./setup) Fotos with your own wallet account and connected it to your Box.

3. You already [backed up](./backup) a photo that you would like to share.

## Steps

1.  Delete the photo from your device by long pressing the photo and selecting the 'delete' icon.

2.  Remove the first Box from your list and add the second using the multiaddress from the server logs of the second Box.

3.  Verify that the second Box is in fact storing the image and that you are able to retrieve it by deleting the image from your device and tapping on the placeholder thumbnail that appears in its place.
