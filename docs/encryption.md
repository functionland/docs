Current Process:

**Upload:**

1- Get the wallet address and signature (time-based) from metamask

2- randomly create symmetric key on client per content

3- encrypt the file and send it to the backend


**Sharing:**

1- I get the person DID (which can be seeded with wallet address)

2- I generate the jwe specific to the DID

3- If we want the revoke, we need to also put some information in the jwe that we need to fetch from a globally accessible source(ceramic, blockchain,...) to validate access. Otherwise, we still have the time-based revokation feature

4- Share the jwe with the signature included in the header

5- The other person can validate and open the file


**Cons:**

1- Encryption is CPU insentive

2- revokation before the time expires require a globally accessible source


**Pros:**

1- size of jwe does not depend on the size of the file

2- one encrypted file can be shared with multiple people

3- jwe file can be shared on public ipfs without any security problem
