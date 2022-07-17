---
title: Fotos Availability
id: availability
---

# Fotos Availability

## Acceptance Criteria

You uploaded a photo to your Box.

Your Box goes offline and you are still able to retrieve the photo from a second Box in your pool.

## Preconditions

1. You have already [setup a cluster](https://github.com/functionland/fula/tree/main/apps/cluster).

2. You have already [setup Fotos](./setup) with your own wallet account and connected it to your Box.

3. You already [backed up](./backup) a photo that you would like to share.

## Steps

[See here](https://drive.google.com/file/d/1BxYo3Enb_6f4cgcMazsAPskfcNQMCowW/view?usp=sharing) for a video demonstrating the following steps.

1.  Delete the photo from your device by long pressing the photo and selecting the 'delete' icon.

2.  Remove the first Box from your list and add the second using the multiaddress from the server logs of the second Box.

3.  Verify that the second Box is in fact storing the image and that you are able to retrieve it by tapping on the placeholder thumbnail that appears in the deleted image's place.
