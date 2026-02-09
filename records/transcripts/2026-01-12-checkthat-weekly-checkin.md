# CheckThat Weekly Check In

---
title: CheckThat Weekly Check In
date: 2026-01-12
meeting_type: weekly sync
duration: 37 minutes
host: Marcel Santilli
participants: Estevão Mascarenhas, Leo Steffen, Daniel Lopes, Pedro, Stevie Kim, Marcel Santilli, Jason Gong, Jose Farias
fireflies_id: 01KE7SZKEJCAT1PNWDWW8K9W5E
transcript_url: https://app.fireflies.ai/view/01KE7SZKEJCAT1PNWDWW8K9W5E
---

## Summary

The team focused on accelerating CheckThat's path to monetization validation. Key discussions covered content quality improvements through a new annotation system, organic traffic growth (108 visits last week), and the urgent need to get the onboarding flow live. Marcel set a clear goal: 10 organic pro plan users by end of January to validate product-market fit before the February board meeting.

## Context

This is a weekly sync for the CheckThat product team. CheckThat is GrowthX's AI visibility index product—a strategic software bet alongside the core services business. The team is pushing hard to prove self-serve monetization works before Q1 ends.

## Relevance to GrowthX

CheckThat represents GrowthX's product diversification strategy. Validating that strangers will pay for the product (not just customers we know) is critical for the 2026 fiscal plan and the upcoming board meeting. Success here proves the company can build recurring software revenue alongside services.

## Overview

- **Content Generation Enhancements:** Daniel demoed the annotation and review system. Prompt fixes are improving content quality. Similar workflows will roll out to Contentos.
- **Organic Traffic Growth:** 108 organic visits last week. LLM referrals (Perplexity, Gemini, ChatGPT) adding another 60% on top. Combined: ~200 visits/week.
- **Onboarding Flow Status:** UI nearly complete. Phone validation still mockup. Plan to deploy for live testing immediately.
- **API Integration Focus:** AI Overview and AI Mode support are blockers. Daniel investigating Gemini APIs today.
- **Cost Management:** Future migration from Anthropic to AWS Bedrock planned for cost reduction.

## Key Topics

### Content Quality and Annotation System
Daniel demonstrated how the team captures feedback on generated pages. The admin panel now has quick review and deep review options. Issues get logged, filtered by date, and exported as JSON. He pushed prompt fixes covering FAQ improvements, transitions, and link behavior. One item deferred: external links opening in new tabs should be handled at the rendering layer, not generation.

### Organic Traffic and Conversion Urgency
Marcel shared the numbers: 108 organic visits, 50-second average session time, ~60% additional traffic from LLM referrals. The critical question isn't traffic—it's whether anyone will convert. Every week without the sign-up flow working is lost validation data. High-intent pages (pricing, reviews) are showing the strongest signals.

### The 10 Pro Users Goal
Marcel set the bar: 10 pro plan users from organic traffic by end of January. Not friends, not existing customers—strangers who found CheckThat through search, signed up, and swiped a credit card. This validates the entire funnel and gives the team something concrete for the board meeting.

### Onboarding Flow Progress
Estevão reported the flow is 90% done. Brand creation, category selection, competitor adding—all working. Phone validation is the remaining piece (Clerk vs Twilio decision pending). The team agreed to skip phone validation for now and ship what works. Jose will model the plan limits (free vs pro) in parallel.

### AI Overview and AI Mode Support
These integrations are blockers that got deprioritized last week. Marcel made clear: anything probing-related is near-emergency priority because you can't recover lost data. Daniel committed to spending an hour researching available APIs and documenting next steps. Pedro will handle implementation after Daniel's writeup.

### Cost Migration Planning
Daniel flagged a future migration from Anthropic to AWS Bedrock. This will significantly reduce AI processing costs. Not urgent for the next two weeks, but on the roadmap for sustainability.

## Action Items

### Daniel Lopes
- Draft API availability summary for AI Overview and AI Mode, share with team
- Document workflows for whoever implements the integration
- Create ticket for external link target blank fix
- Plan migration from Anthropic to AWS Bedrock (next few weeks)

### Estevão Mascarenhas
- Deploy onboarding flow to separate environment today
- Share link and testing instructions with team
- Sync with Jose on backend changes before production push

### Jose Farias
- Push backend changes to Estevão's branch
- Model tiered plans with limits (free: 50 prompts, pro: higher limits)
- Implement plan controls in admin panel

### Pedro
- Fix date range filtering bug on sources page
- Take over AI Overview/AI Mode integration after Daniel's research

### Marcel Santilli
- Coordinate plan implementation details
- Monitor infrastructure usage post-launch

### Jason Gong
- Move growth meeting to avoid all-hands conflict
- Look into grouping LLM referrals vs organic in analytics

### Stevie Kim
- Continue coordinating blockers and assignments
- Prep questions on current vs new customer limits for tomorrow's growth meeting

## Full Transcript

**Estevão Mascarenhas:** This meeting is being recorded.

**Leo Steffen:** Good morning.

**Daniel Lopes:** She got a haircut.

**Leo Steffen:** Yeah, thanks for noticing. I had a hair stylist come over. My wife call her to have her hair cut and I was like, I need that too.

**Daniel Lopes:** Got it.

**Leo Steffen:** No need to leave the house. Morning.

**Pedro:** Happy Monday.

**Stevie Kim:** How's everybody's weekend?

**Daniel Lopes:** Good, good. Stop raining here the whole month.

**Leo Steffen:** Raining a lot.

**Daniel Lopes:** I was raining the whole month, like three weeks straight and Mill Valley was flooding, flooding a lot. So I haven't been to the office in two weeks because it was an hour to get there.

**Stevie Kim:** Oh, wow. Yeah, that's happening everywhere. I feel like so. Well, yeah, I mean, Washington earlier this year was flooding and then in Tucson we've had a lot of rain. So I'm like everywhere I go right now, it's sleep. Like I can't get away from it.

**Leo Steffen:** I got a lot of rain here too in Brazil, so it was raining.

**Daniel Lopes:** Oh, that is expected, right? I don't know about P or South Jam.

**Leo Steffen:** It rains a lot.

**Daniel Lopes:** So joining us, I think.

**Leo Steffen:** So note takers here.

**Daniel Lopes:** I wonder if I could give a quick update on what I did first and then I can leave so I can work on some other stuff so you all get a context of what I think. I don't have message or not just message her. Oh yes, cool. Let me just share my screen real quick and then I can just share because it will be very similar to what is going to happen on Contentos.

**Daniel Lopes:** Marcel was just telling Stevie that I'm going to drop in like five minutes so I can work on some other stuff for the next meeting. But I wanted to demo real quick how I did the annotation part for Kavishkam Kerry and how that impacted the changes to the prompts. So we can continue to make the pages better. The generation of pages, essentially.

**Daniel Lopes:** I don't know if you saw that last week, but we have any admin under pages. There is. When you're creating a page there is the option to do a quick review or deep review. You can do that during adding phase or afterwards deeply view. You can like select chunks and then make a bunch of issues while quick review. Just add one that gets logged into here and you can see each one of the issues in detail and you can filter by day by period and then you can export the JSON.

**Daniel Lopes:** And essentially what I did yesterday was to download this JSON + the linear tickets that we had opened and look through and come up with a list of changes that had to be made. And the way we make the changes today, it's essentially very similar to like changing artifacts but in code and the code is on the check that repo so you can see that in my commit here the prompt changes that came out of it.

**Daniel Lopes:** I think I fixed all the things that they mentioned for Steven and Jose and the rest of the folks that can read code. Let's take a look at my last commit is all the fixes and it's essentially prompt changes and I try to annotate really well what the changes I made and how but essentially it's fixing the FAQ adding transition in between one bug that it's I don't think it should be fixed at the generation phase, it should be fixed afterwards.

**Daniel Lopes:** Is the leaking. Everything that's external should open with a target blank. So that is the one that I think it's better to do it at the Rails level when we're at the React lab when we render just like render the links with target blank. But that's the only one that wasn't fixed. Everything else should be good based on all this list of things that they had here.

**Daniel Lopes:** The only also thing that isn't fixable that easy is if there's a research summary problem. So there's a types of issues research data issue. Sometimes if we're getting the wrong data from exa that's going to be harder and EXA will struggle with things like counting so counting which is kind of expected for LLMs. So like if you're doing like counting number of integrations that is a challenge.

**Daniel Lopes:** I didn't pass a request to scrape more so to not use from cached and Excel will try to usually they respect that so they will rehit the page more if you have that request. So that is in the writing guidelines and some other course but that's the gist. Let me know if I have any questions. I'll add a ticket for the target blank for the external links in the linear quadrant.

**Marcel Santilli:** Nice.

**Stevie Kim:** That's great. I remember us talking about that quite a while ago. It's awesome to be able to get the feedback right in the app.

**Daniel Lopes:** Yeah, I think that's essentially what I'm doing here is I try to just validate all the things we're going to build for everyone else on contentos. So the way to organize the workflows, the way to pass the data, the way to will be pretty much very similar to how we're going to do on the other side. It's just I did it here because we need it faster.

**Stevie Kim:** Awesome. Thanks. Thanks for sharing. Yes we do. I shared it already in Slack and I'll share it here. Now that Daniel's done with his demo, there's the notion doc for the. This weekly sync also. Share my screen.

**Marcel Santilli:** Yeah, maybe I can just go through really quickly on the organic traffic just to give people kind of like a little bit of where my hat is at. But the. The. There's two things, right? Like, one is we're. We're seeing growth. It's early in the year, obviously, and I think the good thing is there is.

**Marcel Santilli:** By the way, Jason, as an aside, can you figure out if there's a easier way to like, group these like, like LLM referrals versus, you know, organic? Like some of these LLM referrals are spread as like referral versus not set or whatever. But the TLDR is like last week we had 108 visits from organic, so that's positive. Average session time, like 50 seconds. So it's not horrible or, you know, but. And then we're getting between perplexity, Gemini ChatGPT almost like 60% of the traffic that organic is driving. And so that. That's a nice boost to everything else.

**Marcel Santilli:** The total. I'm sure there's like a bunch of stuff in direct that's just mostly us, you know, I would assume since we haven't promoted or anything like that. And so. But let's just call like core traffic between LLM referral and organic, 200 visits per week. And so it's growing.

**Marcel Santilli:** The biggest driver is obviously going to be us continuing to improve content, which I'll talk about in a little bit. But like, the speed to establishing the baseline that for our model is really, really critical because right now we're doing fiscal planning and there's a lot of things that go into this. So to know, like, are we going to convert at 1% as 0.1%, like, that's a big delta, right?

**Marcel Santilli:** Are. Is anyone going to. That is coming in organically going to actually sign up and then actually like swipe a credit card for 200 bucks or is it going to be more uphill than that? Right. Like, those are very, like right now we made very conservative assumptions, but even those conservative assumptions could be wrong in a good or a bad direction. Right? Like, so the speed to validate that is really, really critical.

**Marcel Santilli:** And, and I think like, from an organic growth perspective, like the, like what I mentioned earlier in the channel is like the. Any like one week where we're kind of in like low limbo a little bit could have a meaningful impact to us validating something, right? So for instance, like that when I pinged on like hey, are these pages getting indexed or not? Like the, if you look at the this, right? Like a few days after we fix that, the signals are positive, right?

**Marcel Santilli:** And so we started working on custom content, pricing, reviews, things like that. We started talking about it and whatnot. But like the second we focus on what really matters was like is this thing even getting indexed? Is this thing actually getting impressions? Is this hypothesis working? Or like is this true or not, right? Like then you see the right signals, then you can move on to the next hypothesis or the next thing we got to figure out, right?

**Marcel Santilli:** Like, and so it's really critical because like a week right now the phase we're at is really, really meaningful because if by end of Q1 we can't prove that this thing can monetize, it's going to be really hard to continue to invest these levels, right? But we're really confident the market is there, like profound. And a bunch of other vendors, like there is revenue to be had, there is demand for this, right?

**Marcel Santilli:** And so for me those are the like the two things. It's like we can't just do things, Jason, on the editorial side, it's like we have to be hyper focused of any work that the team is doing and that we're doing is to validate that this will have a meaningful increase in organic traffic and validate conversion and then on the sign up and any blocks to getting this thing fully validated, especially on the self serve because we can always crank in sales, we can always brute force the stuff sales side of this, but we don't want to take that route as a, as a band aid solution, right?

**Marcel Santilli:** Like sales should layer in once the full self service is fully validated. So that's like the sense of urgency that I have for us to focus on. It's less about like move fast for the sake of move fast is mostly like closing the full loop. Where we go. We had a stranger, someone none of us here knows personally, who, who found this thing organically, signed up and upgraded the plan.

**Marcel Santilli:** Once we have that first one, ideally in January, then it becomes okay, now what are all the levers here? Like how do we improve click through rates on organic traffic? How do we get more organic traffic? How do we improve conversion rates? How do we make monetization stronger? How do we make the value prop better, right? Like how do we fix anything that those people are complaining about or any major, major blocks.

**Marcel Santilli:** So that's my spiel, you know, to get us excited and move that, you know, and I think like as a, as a North Star, if by the end of January we can have 10 pro plan users, I think that that is a reasonable, aggressive but also like good thing for us to keep in mind. Right. Like right now we have zero. Like what do we need to do to continue to grow this thing so that organically we can get to 10 pro plan users by the end of January.

**Marcel Santilli:** And that gives us the okay, this is signal. And if we end up with one or 20, it kind of matters. But it's more about like validating and closing the loop. Right. And getting to that. In other words, if it's not going to have a meaningful impact in accelerating or getting to 10 pro plan users self serve organically, it's not a priority right now. Meaning like anything that's like future roadmap and things like that, you know, I would encourage us to spend like zero mental bandwidth on, on that right now.

**Jason Gong:** You know, and to be clear, like what you mean by that is like, you know, not somebody we know, not a customer. It's like somebody who came in cold through organic traffic and kind of went through that whole funnel and became a user.

**Marcel Santilli:** Yeah, exactly. Hitting up Mario and asking him to swipe a credit card doesn't count. Yeah, yeah, myself.

**Leo Steffen:** Okay, down.

**Stevie Kim:** That's fair. Anything else you wanted to, to cover Marcel, before we kind of get into more of the, the details?

**Marcel Santilli:** No, I, I think the, on the organic growth side we can cover more tomorrow, Jason, but the, I, I think the, the early signals that I'm seeing with traffic from like the cursor pricing page and the von pricing page is just telling us that like the higher the intent the pages are, the more likely I think they're going to be to, to not only generate traffic but also to convert. That's my hypothesis right now, you know, and we should think in, in those clusters, you know, as opposed to like content in, in general.

**Jason Gong:** Yeah, I, I mean I think thinking clusters definitely make sense. I, I guess my takeaway is like, I mean obviously you don't spread ourselves too thin just like creating like 10 different types of content. Like validate them.

**Marcel Santilli:** Exactly.

**Jason Gong:** Get them to the finish line. I, I think the piece that is missing is just like whether it's even a wait list now. You know, but like we, we need to give people some CTA to like show that intent. I have a ticket for it actually. But that's kind of what's on my mind because we have enough traffic, like is enough to get you know, one or two clicking something.

**Marcel Santilli:** Well, we, we have George Main pulled together to improve those pages and then we have the CTA bar that I mocked as well as the, the CTA widget. Right. And that we can put everywhere essentially. What, and then what we're, we're, we can review right now is just get the flow working and even if the monetization is not there at all, like just get, get the, the full end to end working and then we swap and put all the CTAs on.

**Marcel Santilli:** So I think like the, it's. It's marked. It's just like as soon as the MVP of the onboarding a sign up works, then we can swap everything to, to point to that and then we sh. And then the next thing after that is just making sure like we, we can measure all the events to understand like you know, what's driving the, the, the conversions and like you know, conversion initiation versus drop off, where they're dropping off, things like that, you know, but we can tackle that after. But maybe we can focus on that as the main. The next thing here.

**Stevie Kim:** Yeah, I actually didn't have that down. I saw that. What, what are we calling those different? I again, I'm super new to growth and in this area you have those three different.

**Marcel Santilli:** Well, the main thing is just the onboarding flow. I'm a little bit behind on catching up on the channel, so maybe it would be good to just like go through where we are if there's any questions and anything.

**Stevie Kim:** Right. Yeah, that was my plan. I did have a question on like what George Main put together those mock ups are. So I'm assuming this team is going to execute on those designs. And as far as the onboarding flow, like where do those fit in prioritization?

**Marcel Santilli:** Those are not onboarding flows. Those are just they. If you're not logged in and you go to the overview prompts or source tabs, there's a page there that has a wrong and bad text and completely out of context. So I asked George Main in the channel a few weeks back or last week to mock up something that's actually like looks like it belongs. And so he did and it's pretty much design ready. So it's just swapping those pages and then the PTA will still be the wait list until the onboarding works, you know.

**Stevie Kim:** Okay, gotcha. Thank you. Perfect. So yeah, I saw the slack thread about the onboarding flow and talking about the architecture. Estavio and Jose, is there anything blocking you guys from moving forward? Like what's the. If you can give a summary real quick on what you talked about in Slack as far as your plan. I think that would be helpful.

**Daniel Lopes:** Yeah, sure.

**Estevão Mascarenhas:** I can give an update. So I am a bit behind of my schedule. I wanted on Friday to put out like the boarding flow, but I was aiming to do it not working end to end, but mostly the UI part. But I decided like suddenly I decided to go and try to make it work end to end. I send a message to. I answered the thread to Jose so he can start taking a look on the back end while I wrapped things out for the entire onboard flow.

**Estevão Mascarenhas:** There are just two things remaining. So I have the flow. Like you can add brand, you can pick the category of the brand, you can add competitors. The only part that is mock up right now is the phone validation. I think I still need to take a look on how we're going to do that if we're going to go with a provider like Twitter or if we're going to use Clerk. I know that Clerk has something set up for that. So this is the only part that is not that it's mockup. It's not working.

**Estevão Mascarenhas:** But you can get to the end of the onboarding and then when you go to your dashboard, the data is not there yet, but you can see like you add the competitors that you add the prompts of the subject categories that you picked. It's almost there. The only thing that I'm going to do today is I need to set up a different environment for deploying this so we can take a look.

**Estevão Mascarenhas:** Because the preview instances that we use, they usually share the production database. So right now in my branch I don't think it's ready yet to change the production database. So I want to keep things separate just, just for us to test. So that's, that's what I'm going to do. Like finishing this call by the end of the day. I'm going to put a link and some instructions and then you can see how the onboarding flow like where we are at. And I still think we need like maybe one or two days of polishing but, but I'm aiming to make it functional at least.

**Marcel Santilli:** Yeah, like for, for Clerk, if, if someone can just look into it. I know for a fact like I did the research and, and it's there. As far as like phone validation, I'm sure there's some like details on just making sure how it's implemented. There's a couple of options on what kind of validation. Like if it accepts like voiceover IP type of numbers or disposable numbers type of things. You know, like there's a couple of small settings and.

**Marcel Santilli:** But, but if for whatever reason we had a bottleneck that we feel like will be a times time sink, let me know and we can make a call on if we skip that and you know, and move that over. And given we don't have the sign up and the traffic's already there and every day that goes by that's traffic that might not come back, I would, you know, lean towards like get it working and get it out to see if like people start to sign up. Unless folks think otherwise here, you know.

**Daniel Lopes:** Like we can even drop some of these requirements. So like the clerk stuff like do that later. You know, just put the finish and then you can always add after.

**Marcel Santilli:** You know, the, the, the one thing of consideration for adding later is that the, if it becomes a requirement, then we might need to, when people log in, just have an alert or something that says you must validate to continue to use kind of thing, you know. But, but I think so that might add a little bit of scope later on, but it's something we'll probably need to do anyways. So if we want to skip that for now, then that's fine.

**Daniel Lopes:** I would just step on, do whatever you need there to just get the flow working end to end. And if a new user can land on the dashboard and use the product and then we need to add the other parts after because the code that Marcelo has there for to get some few pro users, that is tight. If we spend a week trying to. One more week, we're halfway through to June, you know, through January.

**Estevão Mascarenhas:** Got it. Yeah. Okay. So I think maybe I'm going to skip this review part and I'm going to deploy to production. If you guys are okay with it, maybe just Jose, like we can sync up just so we don't do anything on the backend side that we don't want to. But yeah, that way like we can put out there, we can test live and see how it goes.

**Marcel Santilli:** Okay, yeah, that sounds good.

**Jose Farias:** Want to add a couple things there. We. I think we need to think a little bit more about what happens after the onboarding is completed because plans, that's. That's another part that isn't coded yet. So we are not set up to charge anyone yet, but the permissions are all the way open in terms of they can add their own custom prompt. So anyone could just like go crazy and add that much more spending to our infrastructure.

**Jose Farias:** Being practical about it, I don't think anyone is going to like have a meaningful impact on how much we spend. So we can deploy the onboarding with all the permissions turned on and then figure out how we're going to limit that. If that sounds good.

**Marcel Santilli:** Yeah.

**Leo Steffen:** Is there when you do that? So I want to categorize all the API keys and everything related with whatever is. Check that. Check that is right now still rd. Right. But if we want to move it to prod, I'd like to have it in a separate bucket so we can track it later. So one, one thing.

**Marcel Santilli:** If we can just have the plans implemented so that in the sense of like the limits. Right. Free versus Pro, then that can ideally just be a quick drop down or something in the admin panel. So our customer accounts are toggle as you know, free Pro and then there's like we can put a third one that's kind of like close to unlimited, you know, that we monitor.

**Marcel Santilli:** It's like when I say close to unlimited, like put some like, you know, reasonable things. So but, but hopefully we're monitoring enough that nothing is crazy out of, out of hand. But then what that means is that anyone signing up, they're just in the free plan right now. And so they wouldn't be able to add more than 100 prompts or whatever or 50 prompts I think is what I put in there, you know, and, and then like and block.

**Daniel Lopes:** The access to the admin as well.

**Daniel Lopes:** Yeah, those are two, two main things.

**Jose Farias:** Right. We, I think the admin is blocked. We have a flag in the database and new users would just default to false. Okay, I think I'll just, let's do this. I'll push up any changes stone to the branch. Instead of like going through the review, I'll just like push them up and I'll start working on the modeling the planning in parallel so that we can have that set up that with the free tier limits and just deploy that.

**Estevão Mascarenhas:** Perfect.

**Marcel Santilli:** Yeah.

**Daniel Lopes:** Cool.

**Marcel Santilli:** That sounds good. Again, I know this is going to feel fast. This is mostly like we spend a lot of time in the foundation and we need to get to proving this out. And if we can do it by the end of January, at least as a baseline, end to end proven out, then we have our board meeting in early February and this is like one.

**Pedro:** Of the big bets of the year.

**Marcel Santilli:** Right. Like so, so this would be a good, good, good thing for us to be able to say, hey, we did put a ton of investment. We've been working on this for months and, but also, like, we gotten to. To validate that someone, you know, signed up and. And actually swiped the credit card.

**Marcel Santilli:** Like kind of similar to like the community. The community is, is at 60k in AR, right. Like, and it was like we were kind of like planning things. Planning things and adventures like just get to launch and then people started swiping credit cards, you know, and that. That also builds momentum for everyone.

**Marcel Santilli:** But if there's any questions, like all the plans should already be in the doc. But if we. So there are things there that if we can divide and conquer around like limits later on thinking through like how we show some of those limits. So if there's things, questions like, let me know. Those docs should be fairly straightforward, you know. And I have to run to a meeting with HubSpot here in 5 minutes.

**Marcel Santilli:** But CV there are other blocks here that. And I can catch up Async as well. I think the main one was the AI Overview and AI Mode was the other one. Right?

**Stevie Kim:** Yeah. I mean there's some that I have about current customers versus new customers, especially around limits, like what we're giving them. But we can talk about that in tomorrow's meeting. Growth meeting, except for that overlaps with all hands, I think. So if we can shift that, Jason, a little bit.

**Jason Gong:** Yep, I'll. I'll move it.

**Stevie Kim:** Yeah. And I think, yeah, Marcel, if you're going to be in that meeting, I think you know that my questions can be covered there.

**Marcel Santilli:** Yeah, that sounds. That sounds good. What's the latest then on the AI mode and AI Overview support?

**Stevie Kim:** Yeah, so that's still to do.

**Marcel Santilli:** By we.

**Stevie Kim:** Well, okay, so here's the thing. Like we have. We have to figure out if we are going to. We need to invite. Be able to invite current customers to their workspaces.

**Marcel Santilli:** Sorry, I'm talking about AI Overview and AI mode.

**Stevie Kim:** Yeah, I know. I'm just saying that there's, you know, I've got different people saying we have. We need, you know, this right now and that right now. So I'm kind of trying to like.

**Marcel Santilli:** The only one that.

**Stevie Kim:** Okay. You're the only one that matters. Okay. So if we're gonna.

**Marcel Santilli:** Someone asks to change priority and it's not me or Daniel, like, do not listen. Like, like AI Mode and anything that's a blocker. Like, just if you're not sure. I know last week I was a bit out of pocket, but. But between like Daniel and I, like, there's no reason AI Mode and AI Overview should not already be done, you know.

**Daniel Lopes:** Okay.

**Marcel Santilli:** Unless there's like a very good. Like hey, we're deprioritizing this but since it's a blocker and you know, like at least supporting it and things like that, like. Or at least flagging. Right? Like hey, we're block here. We're choosing not to do this for this reason, right?

**Stevie Kim:** Yeah. Well, last week it was deprioritized because of the, you know, the work on the. The onboarding focus.

**Marcel Santilli:** But we do have multiple folks here, right? Like yeah, so can work on it. So. So like between.

**Stevie Kim:** Peter, can you take this on?

**Marcel Santilli:** Yeah, yeah, I'm.

**Pedro:** Last week I was working on the blocker for Bracks to list citations in the prompt show page and I found that we had a small issue with the data for the sources and I'm working on it right now.

**Marcel Santilli:** Okay.

**Pedro:** If you go to the sources page, even for the wall list right now and you change date ranges, it won't change the list. So I'm working to fix it then. But if that's more important, I can stop working here.

**Daniel Lopes:** I think I can spend one hour on trying to figure out which one is available because like the Gemini we have today with Google Search was trying, essentially mimicking. Trying to mimic some of those AI overview and AI mode because they didn't have APIs for some of the things before.

**Daniel Lopes:** And we do hit API limits with Google normal APIs. Gemini we don't because we are on Vertex so we had to move to Vertex. There was a lot of challenges with dealing with Google and I can spend an hour trying to figure out which API is available and I can write how to do it because I wrote all the Pro V workflows so I can put that on my to do for today.

**Daniel Lopes:** And then if someone else like I think Jose probably would be. Would probably be the best Jose or stable because both of you guys did a lot of workflows in the project. Yeah, because I also have to migrate. Another thing that's aligned here is that we need to migrate check that to output. That's one of the things that I've been having as like a way to battle test the output framework if it works or not. So once we have check that migrate it would be good. But I can, I can spend an hour on this today and write it after.

**Marcel Santilli:** Sounds good. Like for context in the future. Anything that's related to probing, like the reason is time sensitive and tends to be more important is because last week we lost a week of data. Right. Like, so like Brex wants to know how they're doing an AI overview for their, you know, or our 50 customers that are there, they no longer have that. They don't have any data at all.

**Marcel Santilli:** Right. Like, so every day that goes by, you cannot go back a day in that data. So anything that's probing related or adding a provider, a provider not working should be considered kind of like as close to a, you know, a drop and do that as possible, you know, just because you can't go back in time in data. Right. Like, but, but obviously there's not that many more providers. So it's like there shouldn't be one of these. But in the future, if for example, like probing starts to fail for one of the providers, like that is, which.

**Daniel Lopes:** One do you think is more important? Because there will be different APIs that they don't at some point. I think they don't even have APIs for. I think maybe AI overview. They do have. What? I'm not sure.

**Marcel Santilli:** I think AI overview. It's just that Gemini gain market share against ChatGPT in the last two months and so they're technically five times bigger than Perplexity already. And they're like, you know, the close second in market share from, from.

**Daniel Lopes:** But they have the two, two, two modes. Right. And I don't think they're going to support the same level of APIs because they didn't, they didn't have an AI mode API back then like a month, like a month and a half ago.

**Marcel Santilli:** Let me run because I got to connect with HubSpot Ventures. But, but if you want to dig in and just ping me offline, I can, I can do some digging later to. All right, thanks team.

**Daniel Lopes:** All right, I'll drop to you.

**Stevie Kim:** All right. Yeah, I mean that was, that was pretty much it. Just getting those blockers assigned and so anybody have any more questions or updates?

**Daniel Lopes:** Oh, I would say, sorry, the migration, we're gonna have to migrate to bedrock eventually. That is another thing related to cost. So all the processing we do with Anthropic can be moved to bedrock. And Bedrock it's going to be AWS cost, not Anthropic cost. Much, much, much cheaper.

**Daniel Lopes:** So we don't have to do that in the next couple weeks. Couple of weeks. But just to keep that in mind. So like when you're freaking out about cost, all those things, I think Gene is under control. But the post processing, brand extraction, all that, eventually you're going to have to migrate to bedrock. That's so like whenever. More so it's like thinking about costs and all that.

**Daniel Lopes:** Even if we launch with like, higher costs. Now, I think it's fine because the migration to bedrock is doable, and if that doesn't work, then we migrate to Llama or something like that, and you should be fine. But just to keep that on the radar would be probably a ticket for, like, next week or the fall.

**Jose Farias:** That's good.

**Leo Steffen:** Sounds good.

**Jose Farias:** I was going to say, regarding the AI overview of Google integrations, when Daniel finishes writing up those, his investigation, I think Pedro would be the best to tackle that. Just because I, like, someone needs to model the planning before we go live with the onboarding. So I. I think I could do that so my skills would be better spent there.

**Jose Farias:** So I'll prioritize pushing to Stefan's branch and then modeling the plans, and then we can do the Google work off band. That sounds good.

**Stevie Kim:** Yeah, I already assigned it to Pedro, so that's perfect. Anything else?

**Jose Farias:** Not for me.

**Stevie Kim:** All right, thanks, y'all.

**Leo Steffen:** Thank y'all.

**Marcel Santilli:** Bye.

**Daniel Lopes:** Thank you, Joe. Thank you.
