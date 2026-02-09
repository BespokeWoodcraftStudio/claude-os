# CheckThat Weekly Check In

---
title: CheckThat Weekly Check In
date: 2026-01-26
duration: 37 minutes
participants: Marcel Santilli, Leonardo Carpenedo Steffen, Stevie Kim, Jose Farias, Daniel Lopes, Pedro, Jason
organizer: marcel@growthxlabs.com
fireflies_id: 01KFESEHMP7ZNXXZQ8NQDSBT7T
transcript_url: https://app.fireflies.ai/view/01KFESEHMP7ZNXXZQ8NQDSBT7T
---

## Summary

The team finalized workspace invitation and access control decisions for CheckThat's launch. Key outcome: invitations will be tied to specific email addresses (not user-selectable) to reduce complexity and security risks. User roles defined as owner (billing + invites) and member (content management only). RudderStack selected for event tracking, with analytics integrations to follow.

## Context

Weekly product check-in for CheckThat, GrowthX's AI visibility index for B2B. The team is in final launch prep mode, making scope cuts and locking down core functionality.

## Relevance to GrowthX

CheckThat is GrowthX's strategic product bet. These decisions directly impact launch timeline, user onboarding experience, and growth potential. The invitation flow affects viral growth mechanics; analytics integration affects ability to measure and optimize acquisition.

## Overview

- Workspace invitations tied to specific emails for security and simplicity
- User roles defined: owners manage billing and invites; members manage prompts only
- Billing and workspace deletion handled via support until automation ships
- RudderStack chosen for event tracking (replacing Segment consideration)
- Launch scope ruthlessly cut to core features; fast follow-ups planned
- HubSpot integration strategy still pending (separate instance vs. shared with GrowthX)

## Key Topics

### User Invitation Flow (05:45 - 15:19)

Debated whether invitations should be tied to a specific email or let users choose upon acceptance. References to Slack, Notion, and Figma behavior.

**Decision:** Tie invitations to the invited email address. Simpler, more secure, and prevents unauthorized access via forwarded invites.

**Rationale:** Security concerns outweigh flexibility needs at launch. Can add multi-account linking later.

### User Roles and Permissions (18:14 - 20:38)

Defined the permission model:
- **Workspace Owner:** Can manage billing, invite users, delete workspace
- **Workspace Member:** Can manage prompts and content, cannot invite or touch billing

**For launch:** All invited users become members. Only the original owner can invite. No role-changing UI. Support handles edge cases.

**Fast follow:** Admin tier allowing invite permissions without billing access.

### Analytics and MarTech Stack (31:17 - 36:21)

Daniel handling integration this week:
- RudderStack as event pipeline (open source Segment alternative)
- Intercom for support
- Customer.io for lifecycle messaging
- Google Tag Manager for tracking

URL-based attribution for sign-up sources. User identification after email capture flows through RudderStack to all downstream tools.

### HubSpot Integration (34:00 - 36:21)

Open question: Pipe CheckThat data into existing GrowthX HubSpot or create separate instance?

**Marcel's instinct:** Keep separate. Mixing PLG and enterprise sales data in one CRM creates dirty data. Every company that tries it regrets it.

**Next step:** Jason and team to investigate. May bring in Jeff Ignacio for setup help.

## Action Items

### Marcel Santilli
- Coordinate communication for upcoming permission and role changes on invite page and UI
- Discuss admin/member role messaging with team

### Jose Farias
- Update original Slack ticket to reflect final decision (invitations tied to specific email addresses)

### Pedro
- Sync with Stefan about billing details
- Update ticket with role and permission specs for workspace member and owner

### Daniel Lopes
- Complete output migration and schedule downtime for workflow updates (before 6pm tomorrow)
- Implement MarTech integration: RudderStack, Intercom, Customer.io, Google Tag Manager
- Add tracking for sign-up events based on URL parameters
- Support HubSpot integration evaluation

### Stevie Kim
- Create ticket for workspace deletion workflow or support route

### Leonardo Carpenedo Steffen
- Provide feedback on workspace invitation flow from Slack thread

### Jason
- Investigate HubSpot integration options (separate vs. shared instance)
- Provide recommendation on CheckThat vs. GrowthX data separation

---

## Full Transcript

**Marcel Santilli:** Good morning, everyone.

**Marcel Santilli:** Or happy Monday.

**Leonardo Carpenedo Steffen:** Happy Monday.

**Marcel Santilli:** How's it going?

**Leonardo Carpenedo Steffen:** Good. How you?

**Marcel Santilli:** Pretty good.

**Leonardo Carpenedo Steffen:** You guys also have this notion AI trying to write transcribe meeting notes in your workspace. Keeps popping up when I start. When I join Zoom.

**Marcel Santilli:** Pushing hard for it. I think they're just pushing hard for it versus yeah, I always skip it.

**Leonardo Carpenedo Steffen:** But it always comes back. Now Fathom is inviting me to join meeting again.

**Marcel Santilli:** Why?

**Leonardo Carpenedo Steffen:** I'm just going to click it.

**Stevie Kim:** Hey, y'all. So this meeting is being recorded. We already had stand up this morning. So we already did, you know, went through, you know, what we accomplished and you know, what we're planning to do and any blockers. But we did have. We did need some feedback on one of those. It was posted in Slack, but it's also in here. I'll just. I shared it in the Zoom chat as well. But essentially it's some feedback on workspace invitations that we would love some. You know, either Marcel or Daniel, your feedback on. On that. So if you have a second to check out that Slack thread, that would be great.

**Marcel Santilli:** Sorry, what. What's the context here?

**Stevie Kim:** So during standup, we had a discussion on, you know, inviting users to workspaces and how that flow should be as far as, like, what, you know, how much flexibility basically the user should have. Jose can, you know, explain it better than I can, but there was some feedback we wanted to get from you guys just to make sure that we're on the right path there.

**Leonardo Carpenedo Steffen:** I was trying to look for a. Check that AI page or workspace and check that. But do you guys know if there's. There is one and if there's one, is there any way I can join it? Because I, I tried to create one. Ask for one in a workspace in my.

**Marcel Santilli:** My account.

**Leonardo Carpenedo Steffen:** Didn't get anything from it.

**Marcel Santilli:** Okay, sorry, sorry. We're. I feel like we're a little bit all over. I. I just need clarity. Yeah, I am sorry. Like. Like what specifically? Like, I understand the concept of invitations, but like, like, hey, we need input. Like, can somebody give me an actual question that requires an input? Like, I feel like you're just talking as opposed to saying this is the input we need specifically.

**Stevie Kim:** Yeah, I was going to have Jose.

**Jose Farias:** Take that on, I think, honestly. Read the. We got to read the, the. The message there in Slack that. I'm not sure I can put it more terse than that.

**Stevie Kim:** Yeah, so if we can just take a minute to read this and then I think we can discuss. And I put the link in The Notion doc and I linked the Notion doc in this Zoom chat so everybody should have access to it.

**Marcel Santilli:** It.

**Daniel Lopes:** I think the second option. Sorry, I already read everything but if anybody. And I explain why I think the second option is the only way to go.

**Leonardo Carpenedo Steffen:** None.

**Marcel Santilli:** Okay, so I trying to catch up. Here, but I think this is related to inviting entire domains or this is related to inviting agencies or this is.

**Daniel Lopes:** No, this is just the email. I think I understand here, but essentially when you add somebody, you type their email, when they get the invite, they go through and then they see do that email is the only one that you can use and it's tied to that specific workspace. When do you get to choose, you know, which email do you want to use? The reason why I think the only path like we need to let people choose is because I think we're going to have we. Because we only have one brand per workspace. It will be very common to have you tracking your competitors with another workspace. Like that is the case of Sentinel one today. Like in their profound. In their or peak. I don't remember which one they use, but they track four of their competitors. All right, AirByte does the same. AirByte has like four different workspaces for their, for the other players that they're not them. So I think that's going to be pretty common. So we can't assume that folks who have multiple workspaces, not just agencies or just us and letting people control the which email they want to use with that workspace to me is just. It's not that hard of a difference and it opens up for flexibility.

**Marcel Santilli:** I think I understand. Sorry to be kind of slow today. But. Isn't it just like every other system where you're. There's a members or users section, you go there and you type in an email, you select what permissioning they they. Have and you click Invite and then they have to accept using that email only. Right? And then everything else is just permissioning.

**Daniel Lopes:** As the decision like do we have to like tie to that specific email or do we let them pick another email? Like I use GrowthX AI and GrowthX Labs. I cannot use Google login with GrowthX AI for example.

**Marcel Santilli:** I think it's just like a huge loophole. Like let's say like I invite you and then you forward that email and now all of a sudden like somebody. Else was with a different email gets access to my dashboard. You know, that's a huge security loophole. I feel like because it's like anytime where that happens like, if I know you and I'm inviting you, if for whatever reason I send it to the wrong email, which happens in Figma, for example. Like, it's, it's a common thing, but it's not a. It's more of like, well, that organization. Hasn't swapped like, their, their domains. Like, it's really like, just meet you. And like a couple of others that. Have that, that issue. Right? Like, like, in other words, keep it the way that every other tool does it in this space or in, in a lot of other places, which is like, whatever email you invite, that is. The only email you could possibly sign up. And you can talk to the person that invited you to send it to. A different email if necessary.

**Jose Farias:** My impression is that that is not how most tools work.

**Marcel Santilli:** Most.

**Jose Farias:** Most tools let you choose.

**Daniel Lopes:** Yeah.

**Marcel Santilli:** Okay, so, so if I invite Jose at Growth Hacks AI in figma, you're saying that when you accept that invite. You can pick any email on the planet, including, like, yeah, that's how Slack works.

**Daniel Lopes:** That's how Slack Linear Basecamp. Like, you log in with that email, you accept that invite with that email. So that means you came from that email and then you can put another one if you want to.

**Jose Farias:** So one point of clarification here. You're never really asked, like, which email do you want to choose? It just so happens that if I'm already logged into Figma and you invited me, I click on the link, I'm already logged in, so I'm not even asked, like, which email would I would like to choose? It's just like, accept invite.

**Marcel Santilli:** So essentially like right here, right? Like if I type this, this is peak, right? And. And I click Invite, what would show here if they choose a different email it for?

**Jose Farias:** It would choose. It would show that because that's what you invited. But once you create an account, the invitation stops appearing and then you have a different screen for, like, users.

**Marcel Santilli:** As an admin of the space, like, I'm a security company, I'm sentinel1, and I invite, you know, marcelsentinel1.com and I come in here and if I see marcelmail.com I would think that is like. A data breach or something, right? Like, or I think it was like. Somebody hacked my account, right? Like the person accidentally or just wanted to. I'm just trying to understand the use cases where I think we need to.

**Daniel Lopes:** Do the exact same thing as everyone else does. Like, the point here is that I don't think we're understanding how login works. Like, the point here Is if you have, you have this, you go through. If you already logged in with another email, you cannot accept that invitation. On other email you need to show like this do you want to use. It has to match. Let the person choose, you know, because otherwise you're going to add the invitation to another domain. That is the real risk.

**Marcel Santilli:** I just don't understand in the context of you can only use work emails how can somebody possibly other than agencies or companies like us that at some point in the very early days had a different domain?

**Daniel Lopes:** Like it's, it's not about that. It's like I think this is more of a technical discussion and like, like you go like let's say you're, you're. I have two accounts. One is my Canopy account and another one is my Growth X account. I have two logins. I happen to be logged in with my Canopy. I receive an invite on my girlfx email. I click on that link my cook is for Canopy. So it's going to tie the invitation to Canopy. We need a screen before they'll say pick your right one or you're not using the same. It's what Google does when you go in and Google says switch accounts because this invite came from another account, you know and then you see the drop down to say like a.

**Marcel Santilli:** That makes sense but like if yousef sends a new an invite to a new employee, that new employee can't accept it and log in as their Gmail. You know, it's like switch between accounts and that's a very common thing like notion for example. Right. I can see all the accounts but I just add another account. Like right, like meaning like I add another sign in and then both are tied together. But, but if I'm Sentinel one and I invited you I only ever going to see the person I invited. Like I won't ever see like your other email. Right. Like and this only and that feels like like more important for like you. Know, in the context of like people managing multiple companies on behalf of those. Companies, not people working at those companies. Right.

**Daniel Lopes:** Yeah.

**Marcel Santilli:** Right. There's also a launch thing like meaning for now. Yes. It's a pain in the ass if you're in that edge case of like having to workspaces. But the solution for that is the workspace admin ads, whatever that like you know like yeah have a sentinel one email. I would only have my growth x1. And I have 50 workspaces added to. It, you know and then later on. We can connect workspaces as a feature maybe.

**Daniel Lopes:** Yeah I think that makes sense. And also like domain, domain, allow list for domain, you know.

**Marcel Santilli:** Yeah.

**Jose Farias:** So we're touching on a, on a bit of a. So auth is complicated and we're not necessarily like reinventing the wheel. All of the systems that we've described so far, they all exist in the wild. In the wild, Sorry. So tying it to a specific email address exists, letting the customer choose exists. Merging accounts exists, logging in and seeing an account picker exists. And they're all like different ways to go about this. So in the interest of moving forward, like I think we need to make a decision here and just like do the simplest thing possible. Even knowing that it's going to underwhelm certain use cases just because building out the ideal experience is just going to take a while.

**Leonardo Carpenedo Steffen:** If you can revert it later or merge or do whatever, change the decision later, then doing the simplest to. In the sake of just time, whatever gets done quickest. What do you guys think?

**Marcel Santilli:** Sharpening?

**Leonardo Carpenedo Steffen:** No, it's not on me to decide. I was just trying to understand.

**Jose Farias:** And we're at a point where doing it one way or the other is practically the same amount of time. So let's just, let's just go with tying it with. To a specific email address. I guess I'm not sure. I'm hesitant to say that because Daniel's instinct was exactly the opposite at the beginning of the call, which is letting the recipient choose.

**Marcel Santilli:** Yeah.

**Jose Farias:** So I. If it's. We can do whatever.

**Daniel Lopes:** Dying is better because you can add after like flexibility. But time, you start filtered.

**Marcel Santilli:** Yeah. Like Notion has got it right. And this is the simplest, like I have this email. These are all the workspaces I have access to. And for now that's the only thing you can do. Later on we can add a, like add another account.

**Jose Farias:** So for what it's worth, Notion does the letting people choose, not tying it to a specific email address. It happened to Pedro when he onboarded onto GrowthX. He accepted the invitation with his personal email because he uses Notion personally. And then Yusuf had to reach out and be like, oh, actually accept it with the right email. Yeah, that's, that's, that's what Notion does. So I, I don't know, we're going.

**Marcel Santilli:** Back and forth because that's what Notion does. If you sent an invite link, which is a lazy way during our onboarding that we do not. When you add. And specifically if I come here and. I add like a specific email, you cannot accept it from a different email. But if I go into and click like invite link, which is what we do with customers or employees sometimes, which we shouldn't. And you accept that link, then what you just described happens. Right, but either way, it would show up as a different thing here. Like it wouldn't be associated to this email. Right. Like so. So right now if you go and check that, like it would be like. Only this option, and later on you can add an account, another account, and then you sign into that, the other. Login, and then both would show up. As different organizations or different areas, you. Know, and each one of them would have a group of workspaces attached to. It with a later on a permission. Right, that sounds good.

**Jose Farias:** Okay. Then we can move forward with tying it to the specific email address that was invited.

**Marcel Santilli:** Sounds good. And for now, just so I understand, everyone is just like admin by default. Or are we. Or is there a concept of view only? Not trying to add scope, just trying to understand.

**Jose Farias:** I forget Pendra was that part of it?

**Pedro:** We have the admin, which is group, which is check that admin. And then we have workspace owner and workspace member. Workspace member cannot invite other workspace users. That's the main difference.

**Marcel Santilli:** But they can delete the whole thing?

**Pedro:** No, they can't delete workspace users only.

**Marcel Santilli:** But they can go in and delete. Every prompt if they want, right? Yeah. Yeah. Okay. Okay.

**Daniel Lopes:** Yeah, it's just easy. It's easy to add the defense after because you already have the concept of owner, Workspace owner. But that's the only addition we did.

**Pedro:** Yeah, we have the workspace member role, which can be owner and member. And we can build on top of that an authorization system.

**Marcel Santilli:** Okay. Now we'll be your only option, so. So for now it's owner or workspace owner or member Owner can change billing and invite users. Member can manage everything, all the prompts and contacts and everything else. But can't invite or touch Billy. And later on we could add a workspace viewer, which is just like you only view things. That's it. Okay, cool.

**Pedro:** Completely. I still need to sync with Stefan about the billing, but that's how it will work.

**Marcel Santilli:** Okay, we. If we can work with. I don't know if Ran or George Wayne or. Or anyone can, or just the team here. Like how we communicate that in the invite page. Right? Like, what's the. Like just a basic. Where we say that like workspace owners. Versus members, Members can't change this and that, or. But then like that they can delete things or whatever. You know, usually. Usually it's where it Says the.

**Daniel Lopes:** Set.

**Marcel Santilli:** Yeah, like where it has the role. If you have thing.

**Daniel Lopes:** I think, I think for now, just for simplicity, like let's not do any way to change the owner, you know, because if you can't change the owner, you don't have to explain anything. Like if you. Whoever buys it is the one that controls billing and then whoever can invite. And then we just say owner in the table and then put a tooltip there can invite and change people. And then if anybody needs to change owner, there's a message support to flip the boolean in the back end, you know, in the admin in the.

**Marcel Santilli:** And they can ease the pain by.

**Leonardo Carpenedo Steffen:** Just communicating them that this change is coming on soon. Right. So if you're going to add new features, telling people that they're going to be able to change the user permission soon, we can just tell them, communicate them in simple way.

**Marcel Santilli:** Okay, so what just to make sure I understand, Daniel, what you're saying is you can only invite members. You can't invite owners for now. And members can't see billing at all or request upgrade or anything or invite other users. And, and so for the. Until we change that, only one person. Will be able to invite team members. Okay. And so if someone wants someone that's not that person. Right. Let's say like an IT person signed up for the thing. But then the. The people in there want to invite other people. Would they have to submit a ticket to support or would they just say. Like talk to your admin to invite.

**Daniel Lopes:** Talk to your owner, ask your owner to invite. That's what like Figma and others do. And then we add multiple owners later.

**Marcel Santilli:** Okay. Okay.

**Stevie Kim:** And I think it'd be helpful, Pedro, if you updated like my original ticket.

**Marcel Santilli:** For that to reflect if it's not too much trouble. So sorry just to not lose my train of thought here. If it's truly just like.

**Daniel Lopes:** We need to cut everything. I think we need to read that Ruthless cut. This is the last week. Let's not add anything.

**Marcel Santilli:** We can always add after just this is a. If this thing does really well, like it should be a very fast follow because like removing.

**Daniel Lopes:** Yeah, it is a fast quality for.

**Marcel Santilli:** Other people to invite members is going to be a nightmare.

**Daniel Lopes:** Yeah, it is. It is a F follow. We need to like really prioritize.

**Stevie Kim:** Yeah. Every. I think everything around billing, user management. Those are going to be like super fast follow that will. Will be able to handle a lot more of the, you know, what you would normally expect out of an app like this.

**Marcel Santilli:** Okay. So. So as A fast follow. Can someone create a ticket for creating a member tier? Call admin and then you can invite. Admins and admins can at least invite others but not change billing. And that's the only thing just because. Like we want people inviting each other, you know. Yeah. Like that. That it is free to invite other people. So the more people that come in, the more likely this thing will grow.

**Daniel Lopes:** Another option is to not have the restriction just let people invite anybody. You know.

**Marcel Santilli:** I prefer that because we don't have seats anyway. For now it's just like, you know, it's like owner manages mostly the trade off of how quickly we'll have another tier of user. If it's weak then then really the.

**Daniel Lopes:** Really destructive like the only thing we need on is like the really destructive thing. Delete workspace and change billing. Like if we only block the things because we don't charge per seat. So like you can just like let people invite whoever they want.

**Marcel Santilli:** Yeah, the only thing is like later on when we add an admin or we want to have a tier that allows you to manage prompts and delete prompts. Do we or sorry invite members. Do we downgrade everybody to a member where they can't invite others or.

**Daniel Lopes:** Yeah, that's why we do canopy. Like all this things is pretty safe for nobody ever complained.

**Marcel Santilli:** Okay, cool. Yeah, so it's just like. So right now everyone is a member and a member allows you to. Today for launch will allow you to invite others and do delete any prompt and manage any prompt and once we add another tier of admin then admins will only be able to do some of those actions or we'll figure out the tiers. Right. Like but for now every invite is members and members are allowed to do everything except F with billings or delete the workspace. Yeah. Okay, cool. That's better I think because at least we'll see if people are inviting and you know. Yeah, yeah.

**Daniel Lopes:** This is a legit risk of not yet engagement if you can't get the other ones invited and it has to go to. We're going to need like one ticket that we might need Stevie is that we might. Or like I don't know how we would love this but we need a place in this area to support to cancel your account or delete your workspace. We don't need to build the feature, you just need a place to like you need to delete your organization or.

**Marcel Santilli:** Your workspace in the manage account. Is that fully managed by. Clerk?

**Jose Farias:** No, accounts are managed by us and then Only users are.

**Marcel Santilli:** So like this view is managed by us, right?

**Daniel Lopes:** This is correct.

**Marcel Santilli:** So.

**Jose Farias:** So that's clear.

**Marcel Santilli:** A billing stab here. Is that what you're saying, Daniel, to be able to like cancel or. Where would a user cancel?

**Pedro:** Right there.

**Marcel Santilli:** Yeah.

**Daniel Lopes:** This is clerk.

**Pedro:** Yeah, but. But clerk has a billing option there because I saw alum from Stellum and there is a billing menu right there. I think clerk will accept a URL for them to post or get to redirect you to the billing.

**Marcel Santilli:** Crunch. Does it?

**Daniel Lopes:** Yeah, but billing is different than like GDPR Request delete my account. You cannot put that.

**Marcel Santilli:** Okay, okay. Sorry.

**Daniel Lopes:** Workspaces my account.

**Pedro:** Yeah. I thought we were talking about billing downgrading and upgrading.

**Marcel Santilli:** Sorry. Yeah.

**Jose Farias:** Billion.

**Daniel Lopes:** Yes.

**Marcel Santilli:** Okay. All right. So there should be like some really red thing somewhere which says like you. Know, request to delete this account.

**Daniel Lopes:** Yeah. I think that people that will come through support. You probably don't need to even that. But those are the things you're going.

**Marcel Santilli:** To have to check out.

**Daniel Lopes:** I also don't know how it fits into whatever.

**Marcel Santilli:** Like a. A help link somewhere that.

**Daniel Lopes:** Yeah.

**Marcel Santilli:** With an email, you know, or just a form. Not even an email, just a form, you know.

**Daniel Lopes:** Yeah.

**Marcel Santilli:** That like. Or like an intercom thing.

**Daniel Lopes:** Yeah, yeah.

**Marcel Santilli:** And it's the goal to not adding scope. You're just understanding. Is the goal to have intercom for. Launch or not for lunch.

**Daniel Lopes:** Yeah, for lunch. Yeah. This is on my plate. What I have to do this week is finish all the output migration. I'm almost done with the workflow and then so that will be a downtime somewhere probably tomorrow for before we start probing at 6pm on the workflows. Fine. And then the second thing that I have on my plate is all the Martech and the support stuff that will be Roger Stack and Google Tag manager with customer I.O. and intercom.

**Marcel Santilli:** Okay.

**Daniel Lopes:** All the events as well. The events on the back for adding prompts or like removing prompts, inviting people. All those things will trigger events and the activity fee, Intercom and Customer IO will be installed through router Stack.

**Marcel Santilli:** Got it. Okay, cool.

**Daniel Lopes:** If that makes sense.

**Marcel Santilli:** Separately the one thing we need to. Once you implemented that, I think we still need like you not UTM but like essentially like tags to know. Right. Like. Or either to trigger events or at least to know where people came from. For like sign up, for example, like. If they click on, let's say like. The button on the top. Right. Versus the button on the top on. The bottom or whatever and that they. Came from that page. Right. Like at least from the buttons either it needs to trigger an event. Right. And or we do it a URL. Yeah. If you do it eventually and we don't pass that event to GA or our analytics then we won't be able. To track as much. But I. I don't know anyway so we can take off.

**Daniel Lopes:** Yeah.

**Marcel Santilli:** The point is like we need to be able to. The ask is we need to be able to track where from and like what exactly they they interacted with that led them to. To that the event. Right. Yeah.

**Daniel Lopes:** Yeah. We can do everything with URL based because all our things is all page based so it can all guarantee go sounds good.

**Marcel Santilli:** I have that in the ticket and the other thing I'll flag is like in post hog especially like identifying people after we get their email. It's probably the biggest gap what's going. Daniel in this case rudderstack.

**Daniel Lopes:** Rudderstack. Yeah.

**Marcel Santilli:** And so does Rudder Stack would keep like a ledge of.

**Daniel Lopes:** Yeah. Rudder Stack is a one to one replacement for segment. It's their biggest threat.

**Marcel Santilli:** So then we don't need GA pixels anymore or anything. Everything's just passed through from the Rudder Stack pixel.

**Daniel Lopes:** Yeah, got it.

**Marcel Santilli:** Cool.

**Daniel Lopes:** It's exactly like segment. Like I was going to add segment and then it looks like Rudder Stack is taken there.

**Marcel Santilli:** And Jason, we can. Look into see if Rudder Stack. I'm assuming it will have integration with HubSpot as well. But then we do need to decide. Jason separately if we're going to integrate with our current HubSpot or create a different workspace for check that there's pros and cons of each. It's a nightmare.

**Daniel Lopes:** Do you want to use segment? I could also use segments for the stack.

**Marcel Santilli:** Let me do a little bit of digging. I think if it's like if it. Has the same integrations then it's fine. It's just.

**Daniel Lopes:** But it's also open source so when you get super big you can self host.

**Marcel Santilli:** I have zero confidence that Twilio tool is just a shitty company. Like zero innovation. So it's like.

**Daniel Lopes:** Yeah, that's my concern.

**Marcel Santilli:** Yeah, they have. It looks like they have everything. Let me just. The main one is just like seeing. They should have HubSpot.

**Daniel Lopes:** They have. They have everything.

**Marcel Santilli:** Okay, perfect. Yeah they have a HubSpot and an. Intercom so that's all that really matters. It's just mostly for us we need to decide just for everybody's context. We just decide if we're piping all this activity into check that as a. Separate instance in HubSpot like a separate organization. The pros of that is that you don't with all the data on growth X on all the deals and stuff. The downside of that is that it's not easy to integrate those two. Right. And so you AKA do you treat it as two separate companies or do you treat it as one? And every company that I've seen try to do PLG and enterprise in the. Same instances, it's a fucking nightmare. Like it's a nightmare because there's so. Much dirty data that's going to be like created from like just people creating accounts. The deal cycles, you know, but then at the same time, you know, Nigel starting today or new AE for check that like you know he's going to be reporting on that side and so. You just need to put reports. But my instinct is that we probably should keep it separate and later on figure out if we need to like. You know, share one with the other a little bit. But Jason, I don't know, I think. You've looked into that before, right? Yeah, we did and we just. Our rip ups guy left and we never were still trying to backfill him so we kind of punted it. But. Okay. All right. Yeah, let's prioritize for this week and. See if Jeff Ignacio can, can help with that if we move forward with getting his help just because like we have an AE now so. We get like a, a week or two to. Have the set up. But maybe Leah can help as well. Awesome. Thanks team.

**Daniel Lopes:** Thank you.

**Marcel Santilli:** See ya. Bye.
