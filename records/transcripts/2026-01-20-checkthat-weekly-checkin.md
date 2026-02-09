# CheckThat Weekly Check In

---
title: CheckThat Weekly Check In
date: 2026-01-20
duration: 19 minutes
participants: Jose Farias, Stevie Kim
host: Marcel Santilli
source: Fireflies.ai
transcript_id: 01KF9PN6FJW8ZWPR4CY8BNW08Y
transcript_url: https://app.fireflies.ai/view/01KF9PN6FJW8ZWPR4CY8BNW08Y
---

## Summary

The team discussed workspace access management, admin permissions, and launch preparation. Stevie is buffering EMS requests while keeping admin access restricted to prevent public page errors. Jose shared a new "backfill last 14 days" feature for fixing data after recategorization. The team acknowledged the product is in a fluid development phase where detailed acceptance criteria may shift, but agreed to pursue better upfront alignment with Marcel's vision. A roles and permissions system was flagged as a gap that needs design work.

## Context

Weekly CheckThat product sync. Daniel and Marcel couldn't attend, so Stevie led a quick check-in with Jose. The focus was on operational blockers, workspace setup for EMS team members, and launch plan gaps.

## Relevance to GrowthX

This meeting directly relates to CheckThat's launch readiness. Key decisions about admin access, user roles, and workspace permissions will affect how GrowthX's engagement managers demo the product to clients. The discussion also reveals the tension between wanting detailed specs and the reality of rapid product iteration.

## Overview

- **Limited Admin Access:** Admin rights are restricted to prevent public page changes. Only Jason and Marcel have admin access currently.
- **New Backfill Feature:** Jose shared a "backfill last 14 days" button that fixes chart data after recategorization.
- **Launch Plan Clarity:** The team wants better documentation of requirements but recognizes flexibility is needed during this fluid phase.
- **User Roles System:** The current system has no layered roles. Building one would take a few days of development work.
- **Workload Management:** Stevie is acting as a buffer between EMS and delivery team to filter incoming tickets.
- **Proactive Alignment:** The team aims to get ahead of Marcel's expectations rather than react to last-minute changes.

## Key Topics

### Workspace Access and Admin Permissions
Stevie is handling EMS workspace setup and filtering UX-related tickets. Admin access remains limited to prevent accidental public page errors. The backfill feature will help fix data inconsistencies after recategorization.

### Launch Plan and Ticket Management
The team wants clearer acceptance criteria for launch tickets. Jose noted the product is in an "amorphous development phase" where last-minute changes are expected. Stevie will create tickets with user stories to reduce ambiguity.

### User Roles and Invitation System
The current system only distinguishes between GrowthX admins and everyone else. There's no layered permissions system. Inviting users now means granting full access by default. A roles system would need design work and take a few days to build.

### Workspace Ownership Questions
Open questions remain: Can users create multiple workspaces? How do invitations tie to billing? What controls do workspace owners have? Stevie will clarify these with Marcel.

## Action Items

### Stevie Kim
- Complete Stripe account setup and add missing SaaS update details
- Use the "backfill last 14 days" feature to fix data inconsistencies in workspaces
- Continue supporting EMS with workspace content preparation for demos
- Create tickets with user stories and acceptance criteria for missing launch items
- Clarify with Marcel the intended user experience for workspace ownership, invitations, and permissions
- Discuss admin access policies with Jason to decide what level of access EMS should have

### Jose Farias
- Review any pending pull requests
- Provide feedback on admin access and role management system design
- Flag any unclear acceptance criteria on assigned tickets

## Full Transcript

**Jose Farias:** Hello?

**Jose Farias:** Hello.

**Jose Farias:** Hey.

**Jose Farias:** Sorry, I'm here.

**Jose Farias:** This is funny. I was late joining the meeting because I felt guilty joining a call without having Claude do work in the background. This is so, so new.

**Stevie Kim:** Cool. So I know Marcel and I don't think Daniel can make it and since we went over quite a bit this morning, I think that we can probably go through things pretty quickly.

**Jose Farias:** Oops.

**Jose Farias:** Oops.

**Stevie Kim:** Like clicking all the wrong buttons. All right. Yeah. So if you didn't put your SaaS update, like I'll just throw any missing information on there.

**Stevie Kim:** Yeah, I'm just getting this Stripe account set up and so still there's some details I need to add there. So again, just let me know if anything's missing or if you need any information from me on that, let me know. I don't want to be the blocker there. I think everything like the basics at least are set up.

**Stevie Kim:** Yeah. So the EMS are on the, not the delivery team, but the sprint team, have been added to their customer workspaces. So we're getting some tickets from them that you already are working on. But I've been trying to be the buffer there. So you guys aren't seeing a lot of the information coming from them, but they have raised a lot of, you know, just kind of UX things and so has Jason. So I need to kind of go through some of those.

**Stevie Kim:** There's a lot of manual work that I'm just trying to take care of for their particular workspaces, like fixing if it's in the wrong subcategory, et cetera.

**Stevie Kim:** The reason I bring that up is because most of them we haven't given admin access to because of the ability for admins to mess up the public pages. We've done, Jason and I have done some onboarding, but I don't think it's enough to just give like all these admin access. I could be wrong. So I just wanted to get like a little bit of a sanity check on what y'all thought about that.

**Stevie Kim:** Right now I'm kind of, Carrie is doing, you know, helping me out with some stuff and I'm doing some work around just getting those workspaces like the content to where they can actually demo, feel comfortable demoing and showing to customers. But yeah. What are your guys thoughts about who we are giving admin access to do?

**Jose Farias:** I think ultimately kind of depends on who we're comfortable changing the public pages like you said. In terms of sometimes, for example, when we recategorize, I don't think we're backfilling the charts if anything looks funky after recategorizing, because that's like not a native flow. That's like going through the admin. We haven't paid much attention to it. There is a button in the workspace page where it says, backfill the last 14 days. So if you recategorize and you click that, you just wait a minute and things should be populated.

**Stevie Kim:** Oh, that's great. I didn't. I either didn't notice that or forgot about it. Okay, cool.

**Jose Farias:** It's new, so.

**Stevie Kim:** Okay, cool. Yeah, no, that's great. I will do that after this call. The one that I have, you know, it's kind of like ad hoc, me getting to the things that I need to do for that ticket, but yeah, no, that's perfect. Okay, great.

**Stevie Kim:** So that's the only thing that I kind of wanted to bring up. And then another thing, like, if anybody has time to review any pull requests that are sitting there or if any tickets need clarification, but also if you think about things that are missing from our launch plan, I feel like there's just going to be things that we're just like, oh, yeah, we totally forgot about that piece.

**Stevie Kim:** So, yeah, if anybody thinks of things, please, like, even if you don't have time to create the ticket, just bring to my attention. I'll try to create the ticket with some user stories and acceptance criteria. I was talking to Leo about that and I want to get better about that just because, I don't know, like, for one, it helps me understand what is expected. And also I think it'll help us align better with what is in Marcel's head and what his expectations are. So, you know, like, we can confirm with that written down instead of kind of the ambiguity we've been trying to shape into something a little bit more defined. But that might just be going to help me and no one else.

**Jose Farias:** I definitely think it's helpful. For what it's worth, I think it's worth calling out that we are very sort of like amorphous phase of product development, which is like getting ready to launch. So I think it's only natural that things change last minute and it's hard to capture everything. And then you capture, like any one of us captures their own impression of how things should work. And then Marcel comes in and completely rewrites things. Like, that's in my experience, that's usually how this part of things go.

**Jose Farias:** So I would say, I would, for speaking for myself, I would be comfortable with like, not necessarily having all the fleshed out acceptance criteria. Like, I understand that's like suboptimal, but also at this stage, like, things change. That's.

**Stevie Kim:** Yeah. I was just thinking that it might be a way to get ahead of that. Yeah, yeah, I'll think a little bit more on that because I'm trying to get us in a more proactive state where we're not just waiting for Marcel to catch things like we know what he wants ahead of time. But yeah, it's probably not the best time to try to do that.

**Jose Farias:** I think there's going to be some tension there, but I mean, if you find the time, that's great. That's definitely helpful. Yeah.

**Stevie Kim:** So, yeah, does anybody like, have anything that's on their mind that's not on their update or anything? Like, as far as the launch plan, the blockers that we have to ship, is there anything that anyone is confused about or doesn't like really know the acceptance criteria? Because I can in the background try to get that information for you.

**Jose Farias:** Yes. One thing for me, I just thought about this. So the ticket for a workspace owner should be able to invite users to workspace. Usually that comes bundled with assumptions from like different assumptions from the engineering team versus product. Usually the point of tension there is roles like we're usually people expect, like, oh, you are implementing invitations, obviously we're implementing roles as well. And that's like a whole other system, right?

**Stevie Kim:** Yeah, yeah, it is a whole like, well, so when I originally had that, was thinking about that, it was, yeah, it was for something else that I didn't realize was already there. So it kind of needs to be thought out and fleshed out more.

**Stevie Kim:** And I think that's one of the biggest things that's missing from my mind is like, you know, the user experience within the workspace. So they, you know, on through the onboarding, they submit their domain and we create a workspace based on that. And then like, what control and power do they have from then on? Like, do they have the power to create another workspace with a different brand? Like, I don't know how any of that is supposed to work and then can they invite users to their workspace?

**Stevie Kim:** But we're only like, it has, it's tied to the billing stuff too with one workspace per subscription, I think, is what Marcel had. So, yeah, there's some, I feel like that's not fleshed out at all, but I wanted to confirm that because maybe it is. But like you said, roles and permissions, we haven't thought through any of that experience.

**Jose Farias:** So, yeah, I just want to call out. There is no system for roles currently. The one level of hierarchy that we handle currently is just like GrowthX admins, which is like you and Jason and Marcel and just us and then everyone else like that. Those are the two things that we support currently.

**Jose Farias:** So the fast straight shot there would be just simply inviting users means any new user can do everything. Right? That's a straight shot if you want to add roles on top of that. That's like, not super complex, but it is like a system, right, that we need to design. So a couple days work.

**Stevie Kim:** Okay, I'll make sure that I understand what Marcel has in mind for as far as what we want to allow users to do and not because it has changed so much and every time I think I know it's not that way and then I misremember things based on past conversations. So I'll, yeah, I'll spend some time on that. And any outstanding questions, I will ping Marcel on.

**Jose Farias:** So that's good. That was the one thing for me.

**Stevie Kim:** Anything on anybody else's mind?

**Jose Farias:** Cool.

**Stevie Kim:** All right, well, those are the only things that I wanted to cover to make sure I wasn't blocking anybody and just sharing the kind of my thoughts on, and setting up and helping out the EMS with their workspaces and stuff. And right now it's doable and manageable and I think it'll be okay.

**Stevie Kim:** So I don't think we need to do anything on our end as far as giving everybody admin access. But, yeah, we'll see if I just don't want to go into panic mode because I'm getting overrun and giving everyone admin access because I'm, you know, I can't help them with their workspaces. So that's what I'm trying to avoid.

**Stevie Kim:** So I'll think a little bit more about and talk to maybe Jason and I'm not sure who else about what we want to give to whom. All right, well, if nobody has anything else, we can get some time back.

**Jose Farias:** Yep, sounds good.

**Stevie Kim:** All right, thanks, y'all.

**Jose Farias:** Thank you.

**Jose Farias:** Thank you.

**Jose Farias:** Bye.
