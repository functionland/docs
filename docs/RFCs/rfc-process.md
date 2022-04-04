---
title: Requests for comments (RFCs)
---
# Request for comments
## What is the RFC process?

Many changes, including bug fixes and documentation improvements, can be implemented and reviewed via the normal GitHub pull request workflow.

However, some changes though are "substantial", and we ask that these be put through a bit of design process and produce a consensus among community members.

The "RFC" (Request For Comments) process is intended to provide a consistent, controlled path for new features to enter the project, so that all stakeholders and contributors can be confident about the direction the project is evolving in.

## When to follow this process
You should consider using this process if you intend to make "substantial" changes in any Functionland project or the documentation. Here are some examples of things that would benefit from an RFC:
- A new feature that requires rethinking of something that has already been developed and shipped.
- A change in the documentation structure in order to enhance readers experience.
- The introduction of a new idea, concept or convention that is currently not present in Functionland.

The RFC process will help you attract more attention to your proposal, as well as make sure that everybody gets a chance to participate in shaping and polishing your new idea.

## About the process
In short, to get a major feature added to any of Functionland's projects, you would first get the RFC merged into the RFC repo of that project as a markdown file.  At that point the RFC is ‘active’ and may be implemented with the goal of eventual inclusion.
* Fork the project repository
* Copy `rfcs/template.md` to `rfcs/0000-my-feature/README.md` (where my-feature is descriptive, don't ask for an RFC number yet)
* Put any accompanying resources (pictures, etc.) in rfcs/0000-my-feature/.  You can refer to these in the text.
* Fill in the RFC. Details matter!  Remember: RFCs that lack convincing motivation, fail to demonstrate understanding of the impact of the design, or are disingenuous about the drawbacks or alternatives tend to be poorly received.
* Submit a pull request. As a pull request, the RFC will receive design feedback from the broader community.  The author should be prepared to revise it in response to their feedback.
* Build consensus and integrate feedback. RFCs that have broad support are much more likely to make progress than those that don't receive any comments.
* The community will discuss the RFC pull request in the comment thread of the pull request itself as much as possible.  Offline discussion will be summarized on the pull request comment thread.
* RFCs rarely go through this process unchanged, especially as members of the broader community identify alternatives and drawbacks. You can make edits, big and small, to the RFC to clarify or change the design, but make changes as new commits to the pull request, and leave a comment on the pull request explaining your changes. Specifically, do not squash or rebase commits after they are visible on the pull request.
* At some point, a member will propose a "motion for final comment period" (FCP), along with a disposition for the RFC (merge, close, or postpone).
  * For RFCs with lengthy discussion, the motion to FCP is usually preceded by a summary comment that attempts to map the current state of the discussion including major tradeoffs and/or points of disagreement.
* The FCP lasts ten (10) calendar days, guaranteeing it remains open for at least five (5) business days.  This allows stakeholders the opportunity to submit any final objections before a decision is reached.
* In most cases the FCP period is quiet, and the RFC is either merged or closed. However, sometimes substantial new arguments or ideas are raised, the FCP is canceled, and the RFC returns to development mode.
