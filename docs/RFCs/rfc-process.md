---
title: Requests for comments (RFCs)
---
# Request for comments
## What is RFC process
Many changes, including bug fixes and documentation improvements can be implemented and reviewed via the normal GitHub pull request workflow.

Some changes though are "substantial", and we ask that these be put through a bit of a design process and produce a consensus among the community.

The "RFC" (request for comments) process is intended to provide a consistent and controlled path for new features to enter the project, so that all stakeholders and contributors can be confident about the direction the project is evolving in.

## When to follow this process
You should consider using this process if you intend to make "substantial" changes in any of the Functionland projects or the documentations. Some examples that would benefit from an RFC are:
- A new feature that requires rethinking of something that is already developed and shipped.
- A change in the documentation structure in order to enhance readers experience.
- The introduction of a new idea, concept or convention that is not present in Functionland right now.

The RFC process will help you get more attention on your proposal and also make sure that every body gets the chance to participate in shaping and polishing your new idea. 

## What the process is
In short, to get a major feature added to any of Functionland projects, one usually first gets the RFC merged into the RFC repo of that project as a markdown file. At that point the RFC is ‘active’ and may be implemented with the goal of eventual inclusion.
* Fork the project repository
* Copy `rfcs/template.md` to `rfcs/0000-my-feature/README.md` (where my-feature is desctiptive, don't assing an RFC number yet) 
* Put any accompanying resources (pictures, etc.) in rfcs/0000-my-feature/, you can refer to these in the text.
* Fill in the RFC. Put care into the details: RFCs that do not present convincing motivation, demonstrate understanding of the impact of the design, or are disingenuous about the drawbacks or alternatives tend to be poorly-received.
* Submit a pull request. As a pull request the RFC will receive design feedback from the larger community, and the author should be prepared to revise it in response.
* Build consensus and integrate feedback. RFCs that have broad support are much more likely to make progress than those that don't receive any comments.
* The community will discuss the RFC pull request, as much as possible in the comment thread of the pull request itself. Offline discussion will be summarized on the pull request comment thread.
* RFCs rarely go through this process unchanged, especially as alternatives and drawbacks are shown. You can make edits, big and small, to the RFC to clarify or change the design, but make changes as new commits to the pull request, and leave a comment on the pull request explaining your changes. Specifically, do not squash or rebase commits after they are visible on the pull request.
* At some point, a member will propose a "motion for final comment period" (FCP), along with a disposition for the RFC (merge, close, or postpone).
  * For RFCs with lengthy discussion, the motion to FCP is usually preceded by a summary comment trying to lay out the current state of the discussion and major tradeoffs/points of disagreement.
* The FCP lasts ten calendar days, so that it is open for at least 5 business days. This way all stakeholders have a chance to lodge any final objections before a decision is reached.
* In most cases, the FCP period is quiet, and the RFC is either merged or closed. However, sometimes substantial new arguments or ideas are raised, the FCP is canceled, and the RFC goes back into development mode.