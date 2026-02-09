# Shaping with Ryan Singer

<metadata>
date: 2026-02-04
time: 17:00 UTC
duration: 177 minutes
organizer: marcel@growthxlabs.com
participants: Marcel Santilli, Daniel Lopes, Ryan Singer
fireflies_id: 01KG80A7B7YMS32CJD0P4Z7D7J
meeting_link: https://us06web.zoom.us/j/87687687726?pwd=2vzjibdeVkWIdibaIp0By26aakWKMa.1
transcript_url: https://app.fireflies.ai/view/01KG80A7B7YMS32CJD0P4Z7D7J
</metadata>

---

## Summary

Ryan Singer led a product shaping session focused on the ContentOS platform UI and navigation architecture. The team resolved a critical architectural question: optimization work and new page creation should live in separate workflows with distinct UI patterns. The meeting established "Learn & Improve" as the primary staff workflow, reorganized navigation to surface the right work at the right time, and clarified the onboarding calibration process.

---

## Context

GrowthX is building ContentOS, an AI-powered content platform that needs to support both new page creation (the exciting, revenue-generating work) and page optimization (the essential but often neglected maintenance work). The team has been struggling with staff not knowing what to focus on, clients not seeing the value being delivered, and a calibration/onboarding process that was confusing both internally and for clients.

Ryan Singer, author of "Shape Up" and former Basecamp product strategist, is consulting on product design. This was a follow-up session from previous shaping work, with a target launch date in March 2026.

---

## Relevance

**To ContentOS Product:**
- Complete navigation restructure: Learn & Improve → New Page Opportunities → Progress Snapshots
- "Work Queue" eliminated as standalone concept—work lives within its context
- Optimization experiments are distinct from new page creation workflows
- Clear separation enables proper database architecture without painting into corners

**To GrowthX Services:**
- Staff will land on "Learn & Improve" as their daily starting point
- New page opportunities remain the client-exciting, sales-driving feature
- Progress Snapshots serve as client communication tool
- Calibration/onboarding simplified to three critical inputs: Personas, Analytics, Site Crawl

**To CheckThat:**
- The same AI workflow framework powers both ContentOS and CheckThat
- Open-source framework shipping this month will support 50+ workflows
- Optimization patterns learned here apply to CheckThat's 9,000+ pages

---

## Overview

- **Product Focus:** Developing a scalable AI-driven content service priced between $5,000 and $10,000 for marketing agencies
- **Market Opportunity:** Targeting 100,000 underserved US marketing agencies by providing AI-native services instead of tools
- **Onboarding Automation:** New system reduces research time to minutes but needs human edits; aims to cut client setup to 2-3 days
- **Content Pipeline Workflow:** New opportunities identified via sitemap crawling and keywords; visible triage and publishing stages enhance staff focus
- **Optimization Tracking:** Separate systems for new pages and optimizations to prevent confusion; planned versioning for continuous content improvement
- **UI/UX Changes:** Clear navigation and action verbs to enhance onboarding clarity and workflow efficiency for both staff and clients

---

## Key Topics

### Navigation Architecture Redesign

Ryan identified that the current navigation buried critical workflows. The new structure prioritizes what staff should do daily:

1. **Learn & Improve** (default landing) - View page portfolio, identify optimization opportunities, run experiments
2. **New Page Opportunities** - Triage → Backlog → Briefing → Writing → Review → Publish pipeline
3. **Progress Snapshots** - Client-facing reporting on impact and outcomes

The "Work Queue" as a separate concept is eliminated. Work lives within its context—new page work inside New Page Opportunities, optimization work inside Learn & Improve.

### Calibration/Onboarding Process

Three critical inputs gate the ability to find opportunities:
1. **Personas defined** - Most fundamental; enables filtering 10,000 ideas down to 500 relevant opportunities
2. **Site crawled** - Automated, but required for gap analysis
3. **Analytics connected** - Nice to have for trust-building, not a blocker

The setup UI should use verbs (Generate, Review) not nouns (Company, Personas). Each item has two phases: auto-generation followed by human review. "Mark Complete" buttons should be removed in favor of clear action steps.

### New Page vs. Optimization Work

**New Page Creation:**
- Linear, multi-step process: Triage → Backlog → Brief → Draft → Annotate → Publish
- Staff knows the phases, can batch similar work
- Produces 700 pages in 4 weeks with current system

**Optimization/Experimentation:**
- Non-linear, checklist-based work
- Goal-oriented: must define what you're trying to improve (CTR, engagement, AI visibility)
- Results feed back as learnings → potentially create agent rules/skills
- For March: focus on meta title/description optimization as MVP

### Client-Facing Communication

Two "golden tabs" that clients should see:
1. **New Page Opportunities** - The HGTV reveal moment; what gets people excited
2. **Progress Snapshots** - High-level outcomes, not granular work details

Staff screens share with clients; clients don't need direct login access. The system communicates "we have a system, we're not just fucking around."

---

## Action Items

**Daniel**
- Send Ryan the video and GitHub link of the open-source AI workflow framework for prototyping and review
- Continue migrating legacy workflows to the new AI agent framework to support upcoming product launch

**Ryan Singer**
- Review the open-source AI workflow framework and prepare feedback ahead of February 17th session
- Evaluate time availability post current client project ending June 30th and communicate capacity for contribution

**Daniel & Marcel**
- Refine UI to include verb-based action labels (Generate, Review) instead of folder-like static labels for clarity in calibration/setup flows
- Remove ambiguous "Mark Complete" buttons from setup screen and replace with actionable steps per item
- Implement explicit "Does Not Apply" option instead of skip functionality for calibration steps
- Build onboarding/tutorial around the two-phase process: auto-generation of brand data followed by human review and calibration
- Revise navigation to prioritize "Learn & Improve" and "New Page Opportunities" as primary workflows for staff and client engagement
- Define clear distinction between new page creation workflows and optimization workflows, and design separate UI/work queues accordingly
- Prioritize meta tag and meta description optimization tool development for March launch as a minimum viable optimization feature

**Team-wide**
- Continue development and refinement of opportunity discovery, persona calibration, and analytics integration to support content strategy generation and client reporting
- Prepare for next shaping session on February 17th focusing on UI navigation flow and integration of learn and improve workflows

---

## Transcript

**Board Room:** Invite.

**Board Room:** Sec.

**Board Room:** Sorry.

**Board Room:** No problem.

**Board Room:** How do you set up with a meeting that you don't own?

**Board Room:** Just invite the room.

**Board Room:** Ah.

**Board Room:** And then select for me and then it will like ring your answer.

**Ryan Singer:** Marcel, you're also there.

**Board Room:** Hey, we're gonna log in into the main camera here.

**Ryan Singer:** Ah, cool.

**Ryan Singer:** Okay.

**Board Room:** Recording in progress.

**Ryan Singer:** Boardroom, No feed yet.

**Ryan Singer:** Let's see.

**Ryan Singer:** All right.

**Ryan Singer:** Okay.

**Ryan Singer:** There we go.

**Ryan Singer:** Now we have the classic setup.

**Ryan Singer:** Nice to see you guys.

**Board Room:** Yeah, good to see you, man.

**Board Room:** Sorry.

**Board Room:** Sorry I'm a couple minutes late.

**Ryan Singer:** No problem.

**Board Room:** All right.

**Ryan Singer:** Things are good.

**Ryan Singer:** A little.

**Ryan Singer:** A little busy.

**Ryan Singer:** Yeah.

**Ryan Singer:** Probably for you too.

**Ryan Singer:** Yeah.

**Board Room:** It'S.

**Board Room:** We had a board meeting yesterday and it's definitely feeling like the hardest right now.

**Board Room:** Yeah, yeah, yeah.

**Board Room:** But you know, it's like.

**Board Room:** It kind of feels the hardest and at the same time the highest level of conviction I've ever had.

**Ryan Singer:** Oh, that's a good combo.

**Board Room:** So it's like both things are good that they're like a joint.

**Ryan Singer:** Yes.

**Board Room:** Just to give you the context, I think it's actually helpful based on the stuff that I.

**Board Room:** The video that I sent to you and stuff that I don't know if you had the time to watch.

**Ryan Singer:** I did actually.

**Ryan Singer:** I reviewed the video.

**Ryan Singer:** I did, yeah.

**Board Room:** So just to give you context, what that video means in the.

**Board Room:** In the timeline of the company.

**Ryan Singer:** Yes.

**Board Room:** So beginning of last year, Marcel and I essentially like had a bunch of things that we could sell.

**Board Room:** Like he essentially sell anything.

**Board Room:** Any kind of automation and marketing and sales that.

**Board Room:** So many things that we could do.

**Board Room:** And we started selling all those things and then we tried to find what is the thing that we can sell enough that there's enough demand that will be a price that will be like close to what you pay a human, but outperform a human quite a bit.

**Board Room:** That would be like five to $10,000.

**Board Room:** And we landed on content creation and managing large ish websites, basically.

**Board Room:** And.

**Board Room:** And that's the.

**Board Room:** And then by.

**Board Room:** So we fundraised in February, built the team enough to just have like small pods doing certain things, but not the perfect team yet because, like, we just like just each one of the seats and figure out some conviction.

**Board Room:** By July, some of the tools that we're using started to see us as a competitor.

**Board Room:** So Aerops was one of the tools that I was stitching together a bunch of our APIs that we were building and the agents inside as a UI ops was just a ui and they realized that we were a threat to them and they cut the core.

**Board Room:** So we had to build the part of the system that we have today as a temporary holdup for being able to do the work that Aerops got us off and after like during that time we also saw the opportunity that monitoring people's AI visibility is a huge thing.

**Board Room:** And it's a locked data set that.

**Board Room:** You don't have access.

**Board Room:** It's not something that you have access like keywords from Semrush or Google Analytics, like it's a private data and there's all these companies doing that at the same time and our clients are buying those things and we know they're going the same direction as us as like they want to start creating content too.

**Board Room:** So we don't want to be dependent on them and have this trojan horse that all of our clients pay for for $1,000 and not be part of the conversation.

**Board Room:** Then we do check that in three months essentially and check that out as a growth loop for marketing.

**Board Room:** So check that we're getting impressions on Google already in just a month since.

**Board Room:** We started doing marketing.

**Board Room:** And that is the backstory of like.

**Board Room:** And at the same time we have trying to figure out what is the minimum amount of stuff that we need to build that will be like that five to $10,000 that a normal person that we can train that is in the content industry that is very capable person, but it's not as capable as Marcel that has a bunch of techniques.

**Board Room:** So the stuff that we have a bunch of agents to spread out everywhere we search agents for opportunity is basically taking money, decomposing Marcel steps and creating an AI workflow that does that to like in a scalable way that anybody that knows that they're doing an auction can do.

**Board Room:** So like that product that I sent you, that's just a mock up out of like essentially spent two days after our session just mocking that up and trying to find, utilize every corner that I wasn't sure like what's the right copy, what's the right metrics on the screen?

**Board Room:** The data on the screen that's about the visual side and more about what is the information I need on the screen and what's the information that I need to collect.

**Board Room:** Like I need a crawler, I need the analytics and I can have the guys reading that and I can make that UI better and better in the next month.

**Board Room:** And the assumption is that that will be all we need to be able to solve a lot of the bottlenecks we have today.

**Board Room:** To the bottlenecks.

**Board Room:** Like the goal of that version, it's not a final self serving product that will like solve everything.

**Board Room:** It's more like, are we building leverage in some of the key areas that are problematic today that humans do by hand?

**Board Room:** We're spaced out is one, another one is keeping an eye on the analytics and another one is coming out with opportunities and executing on some of the opportunities.

**Board Room:** Not all kinds of opportunities, some kind of.

**Board Room:** So making progress on that spectrum.

**Board Room:** And another one would be letting clients log in and even if it's shitty and they know what they're looking at, but if the client can log in and you can walk them through, like, here's what happened this week.

**Board Room:** That is something that we don't have.

**Board Room:** So clients think we are operating like an NAN or like a log into their Google search console, which we're not essentially for many things.

**Board Room:** So those are the two main things like make products and leverage have something that clients can look at.

**Board Room:** And that's the goal for March.

**Board Room:** Yeah.

**Board Room:** I think one thing just to add an additional layer there quickly is we picked a lot of primitives and made a lot of assumptions that are now completely valid.

**Board Room:** So I think the first one like YC posted, you know how like YC sends these requests for companies.

**Board Room:** They just posted one this week asking for agencies.

**Board Room:** Like, think about that for a second, right?

**Board Room:** Like why Combinator saying more companies should start agencies, AI native agencies.

**Board Room:** You know, that's totally a software is.

**Ryan Singer:** Eating the world thing.

**Ryan Singer:** Like services that you didn't think were tech.

**Ryan Singer:** It's incredible.

**Board Room:** There are 100,000 marketing agencies in the US alone, man.

**Board Room:** Like, that's incredible.

**Board Room:** Like, you know, that's not even freelancers.

**Board Room:** That's just legit service providers listed on sites like Clutch Co, you know, saying, I do some kind of marketing, you know, and so that.

**Board Room:** So that was one we got right, like right away, which was like, no one wants to buy tools.

**Board Room:** Like, they just want to buy something that just gets the shit done for you.

**Board Room:** Yes.

**Board Room:** The second one was like, I remember.

**Board Room:** I mean, I've been doing content for 15 years for every company I work for.

**Board Room:** So it's like content was always the secret weapon to make marketing more like, sustainable and compounding.

**Board Room:** Right.

**Board Room:** Like, that's how you build credibility.

**Board Room:** I mean, that's how, you know, you.

**Board Room:** You've been able to impact so many lives without needing to have these types of meetings with, you know, hundreds of thousands of people, you know, and it's pretty, pretty incredible.

**Board Room:** Right?

**Board Room:** And.

**Board Room:** And then the other thing was, like, last year, people were like, websites are going to go away.

**Board Room:** And I always had this conviction, like, the Internet will collapse if websites go away.

**Board Room:** Like, I know, I've been inside these companies that create the training data.

**Board Room:** Like if the web, if there was no more pages on the web, we are fucked.

**Board Room:** Like models will not get better like you because you don't have access to people's private databases.

**Board Room:** Right.

**Board Room:** So it's like you need the web to be there and you need incentives for people to put really high quality information into the web and continue to update that information forever.

**Board Room:** And the second you say only ChatGPT is going to be the only quote unquote site in the planet in the front door and no, like.

**Ryan Singer:** It's an aggregator but there has to be a whole bunch of supply to aggregate.

**Board Room:** Exactly.

**Board Room:** The long term goal, like the dream would be every company would load the system with how they speak, how they care about their space and all the context that is unique to them.

**Board Room:** And then every website, every page on the website essentially becomes like a fully personalized experience for that person that's asking a question.

**Board Room:** Like that is the path that we think websites will eventually become.

**Board Room:** To get there, there's many things so you need to know like we're not there.

**Board Room:** So that's going to be like five years.

**Ryan Singer:** Oh, I see.

**Ryan Singer:** So you're saying like the LLM actually becomes like the navigation.

**Ryan Singer:** Like the site is like deeper and wider but you, you get brought into the thing that's more that.

**Board Room:** Yeah, like just really quickly, just to kind of close the loop there.

**Board Room:** It's like so like the website we got I think.

**Board Room:** Right.

**Board Room:** And the assumption that they're not going to go away.

**Board Room:** And it's not like a dynamic thing that just personalizes on a visit.

**Board Room:** It's truly like a knowledge graph and we're approaching.

**Board Room:** It's like you need to create more surface area.

**Board Room:** Not for the sake of more surface area, but because you're answering way more queries.

**Board Room:** An infinite long tail essentially now.

**Board Room:** Right.

**Board Room:** And now you're influencing the buyers that come to your site, you're influencing agents that are serving us and you're influencing training data that will form a long term opinion on you.

**Board Room:** Right.

**Board Room:** And so like your website now carries like 10x of the impact and the last thing but perhaps the most important thing was like Daniel's insight.

**Board Room:** This was like 18 months ago.

**Board Room:** Okay.

**Board Room:** Plot code didn't exist where he's like coding agents just keep getting better and better and better.

**Board Room:** Like everything we do should be code.

**Board Room:** And coding agents are really good.

**Board Room:** Everything has to be file system based at files.

**Ryan Singer:** Yes, right, exactly.

**Board Room:** And we need a way to an observability layer and a Runtime layer, AKA like if lifestyle.

**Board Room:** Right.

**Board Room:** In a way for the system to just build itself.

**Board Room:** Because dragging and drop the things in the local tool or writing crazy code off to the side is not sustainable.

**Board Room:** It's your goal.

**Board Room:** And I saw you like playing with plot code for breadboarding and that kind of stuff.

**Board Room:** Like, if you're really good at massaging, you can get it to perform.

**Ryan Singer:** Oh yeah.

**Board Room:** But if you see the demo that I was sending to you, there aren't workflows.

**Board Room:** There's probably like 50 AI workflows that need to be repeatable.

**Board Room:** It's very different than getting my quality code to behave.

**Board Room:** Even the skills might not behave properly.

**Board Room:** So we needed a foundation to be able to create like 50 workflows.

**Board Room:** That's essentially why I only spent two days on this design.

**Board Room:** It's because I spent the last week and a half migrating the 50 workflows we had on our legacy initial code base.

**Board Room:** That was the assumptions of this framework to the final version that we're going to make open source this month for checkout.

**Board Room:** So checkout has like 50 workflows under the hood.

**Board Room:** Has like 50 or something workflows under the hood that I migrated everything last week to the final version.

**Board Room:** So like, imagine like rail00 when migrating to like 0.5 before launch.

**Board Room:** So that's what we're doing last week.

**Board Room:** And okay, the, the other thing, and the last one, I promise is like, okay, so now like, the hard thing about what we're doing is we started with service and we started with infrastructure.

**Board Room:** And most companies will build an app or a platform.

**Board Room:** Very few will build a service layer until everything else is built.

**Board Room:** And very few will build infrastructure like Ashicorp.

**Board Room:** You know, like, they had work.

**Board Room:** Been working on Open source Like 3, 4 years on Vagrant and then Terraform before there was even a company, you know.

**Board Room:** And then after that, they worked it for a few more years after raising money before they ever even monetized the infrastructure, right?

**Board Room:** So we're almost like building the infrastructure layer of like, output AI, which is like the agent framework.

**Board Room:** And then we did service and then we're sandwiching the other two almost, right?

**Board Room:** And so everything here is us going, hey, the platform has to close the full loop.

**Board Room:** So with every output, with every unit of work, like, the next one gets better, faster, smarter, you know, or at least a path to that so that it feels like.

**Board Room:** That it feels.

**Board Room:** And you have some switching costs and you have some economies of scale happening.

**Board Room:** Because right now we have diminishing economies of scale with services.

**Board Room:** So, like a lot of stuff that we worked on, our first session was like figuring out the annotation flow and the client will do the first annotation.

**Board Room:** And then the other part is our team switches from line editing everything they start annotating so they have all this data.

**Board Room:** So we also build the team.

**Board Room:** That's between the taking our agents and injecting the reward models, enforcement, learning all these things to make it go to that next level.

**Board Room:** But we need that collection of data and we need to reframe the product.

**Board Room:** You're not a writer, you're more of an editor.

**Board Room:** And a big part of your job is allocating the failure modes.

**Board Room:** So essentially everything we talked about or everything that we've done so far really helped me be able to like, visualize the parts of the system that we could, like, okay, this is just enough for like Ada, like one of some of people on our team to be able to do some work there and be able to be more, have more leverage.

**Board Room:** And then same thing with the analytics and the same thing with the strategy area.

**Board Room:** We're just trying to figure out what is the minimum amount of analytics that they can absorb, you know, so that's just to set the context of where, where we are.

**Board Room:** When we met last year, the goal was just like, can we get this out in February?

**Board Room:** And we had a bunch of other things happen, as in like, check that AI we're launching today and like a soft launch today, hard launch tomorrow.

**Board Room:** So that took some of our app.

**Board Room:** So we're essentially like a month behind, but not super behind.

**Board Room:** I had just based on those mockups that I showed you what it would be super helpful to get your take on it less on the shaping side, but more on like, as like a, like a super good designer and a product manager and somebody that understands Rails and understands how to build, simplify things.

**Board Room:** Like, is there anything on that?

**Board Room:** And we can go through like screen by screen.

**Board Room:** Anything that's like, is a red flag to you or anything that I might not be thinking about or.

**Board Room:** But that's one just as a pm.

**Board Room:** Is there something that.

**Board Room:** Is there anything on my blind spot on that UI or from the UX angle?

**Board Room:** Is there something that Marcel and I have too much understanding on the business that there are too many questions that you're not understanding.

**Board Room:** So when I try to train the team, they're going to not understand it or like just get the intuition on that.

**Ryan Singer:** Yeah.

**Board Room:** And another thing.

**Board Room:** And then if we don't find anything that's major and then we go to that super fast.

**Board Room:** The other thing would be like all of the opportunities in the opportunities area there are about new pages.

**Ryan Singer:** Exactly.

**Board Room:** Fast follow is what happens when you click Optimize and Optimize.

**Board Room:** There's so many gotchas there on like, okay, like if you're optimizing just the title now you have to go open and say ads and JSON.

**Board Room:** If you're optimizing like images, how does that look like?

**Board Room:** If you're optimizing text, is it just a to do list?

**Board Room:** If you're optimizing broken links, is that just a to do list that somebody has to go there and do?

**Board Room:** So there's so many things that I don't have a clear view in my mind how it works.

**Board Room:** Marcel has some opinions and have some ideas.

**Board Room:** You might have a bunch of like good questions to help us unpack that.

**Board Room:** So those are the two things that are top of mind for me.

**Ryan Singer:** Like, I like those two for today because I think that they also overlap because I think that like you, there's a lot of value in, in the optimizing of opportunities.

**Ryan Singer:** And in order for, for what we identified when we talked about problem side last time was like, there's this thing where like the staff is not the, the analytics aren't jumping up in front of their faces enough to make them think like I should be.

**Ryan Singer:** I should be updating this page or I should be thinking about the performance, you know, And I think, I think that that's.

**Ryan Singer:** I don't know if we're jumping in already, but like short version is like when I saw the, When I saw the video demo that you sent Daniel, I was really encouraged by the fact that it, it definitely feels like they.

**Ryan Singer:** I felt like I could follow you like where you were, you were moving to different places in the system that had dedicated purposes, you know, And I didn't feel like as much like it was just like a bunch of stuff everywhere, you know.

**Ryan Singer:** And I could feel that a lot of the things that we talked about that they had been like thought through and they had a place and like, so there was that and then I do have some kind of red flags and stuff like that from a UX and product perspective, because I think it's not all the way there.

**Ryan Singer:** But what I like is that it's like, I definitely feel like it's getting warmer, you know, and that we can build on it and it's more, more about like it's.

**Ryan Singer:** Well, yeah, there's some things there and it totally ties into this optimizing thing.

**Ryan Singer:** So, yeah.

**Ryan Singer:** Do you want to.

**Board Room:** Yeah.

**Board Room:** Share the screen or.

**Ryan Singer:** Yeah.

**Ryan Singer:** I've got one other thing I want to have in my mind as we do this in the session today, which is what I heard, is that for March, you've got two goals.

**Ryan Singer:** One is more leverage in the sense that, like, the staff who use this are doing more to optimize and create impact, like, for the client.

**Ryan Singer:** But the other thing is, I heard client facing pieces, and I think that the client facing piece of this is significant when we think about the kind of the core UI here, like, what does the client see versus what does the client not see is also really important for staff.

**Ryan Singer:** And like, what, like, where should you be directing clients attention to?

**Ryan Singer:** And like, why is this tab here?

**Ryan Singer:** You know?

**Ryan Singer:** So I think that there's a version of this where, like, what I'm curious is like, is it really true that client facing is like, is part of the story for today or is it more in the.

**Ryan Singer:** Nice to have, like, help me understand where you guys both sit in terms of like.

**Ryan Singer:** Because what I heard last time, I have this, like, I have a little bit of a conflict in my head that I want to resolve and probably it's because I misunderstand something.

**Ryan Singer:** What I heard last time was like, we absolutely have to have this like, impact page for a client, which is the thing that you communicate to the client as like the kind of account rep, which is like, it's not at the level of pages and content, it's at the level of impact.

**Ryan Singer:** And like, that conversation has to be happening in order for clients to not be churning.

**Ryan Singer:** And like that.

**Ryan Singer:** What I, what I kind of got from Marcel last time was like, I just felt a lot of fire around that point.

**Ryan Singer:** And then when we looked, when I saw the loom video and there was.

**Ryan Singer:** And you and Daniel, you touched on the insights tab.

**Ryan Singer:** What did I.

**Ryan Singer:** What I kind of picked up was like, this is more for later.

**Ryan Singer:** And I'm wondering if I'm.

**Ryan Singer:** If I'm crossing wires in my head because, like, to me, that insights tab kind of looked like what that, like, account manager thing is, that they're supposed to be communicating the progress at the highest level.

**Ryan Singer:** And I'm just kind of trying to understand, like, is it really later?

**Ryan Singer:** It's like, parts of it later are parts of it now.

**Ryan Singer:** You know what I mean?

**Ryan Singer:** Like, what's in the air?

**Ryan Singer:** What's in the air in terms of what's urgent for you guys to solve before March?

**Board Room:** Yeah, I think the main thing, like, when you talk about leverage, it's more like leverage on our team spending their.

**Board Room:** Time the right way.

**Ryan Singer:** Yes.

**Board Room:** We have a checklist of the things that they need to do.

**Board Room:** Like when a client comes in.

**Board Room:** Here's all the things you need to do.

**Ryan Singer:** Yeah.

**Board Room:** It's all in notion and other things and they don't.

**Ryan Singer:** Okay.

**Board Room:** Very often like some of the team will do the good.

**Board Room:** The good part of the team will do it.

**Board Room:** The untrained ones would not do it.

**Board Room:** And then there's bad people in the mix too that will shackle.

**Board Room:** So like but even the good ones have potential they might not do because the graduators are not there.

**Board Room:** Like just being a notion takes too much effort, too much friction.

**Board Room:** And so that's one.

**Board Room:** So like account setup is a big one.

**Board Room:** So like if we can make sure the accounts are set up correctly.

**Board Room:** That's why we have those control futures, the server fields.

**Board Room:** We have certain areas that forces the account set up to be mostly all done by the agent and people customize.

**Board Room:** So there are jobs.

**Board Room:** Go here, customize here.

**Board Room:** Go go here, customize here.

**Board Room:** Mark has done hope there is that we can reduce account setup from like a couple of weeks with a bunch of mistakes here and there and like sending documents to the client to like them doing that in two, three days and then walking the client through in a zoom call.

**Board Room:** This is what I did.

**Board Room:** So that is client seeing the surface of the product and okay.

**Board Room:** And then if we want to let.

**Board Room:** The client log in into that and.

**Board Room:** Tweak they can but it's more like they would be a normal use.

**Board Room:** We're not expecting the client to do any work would be like hey, this is how we do it.

**Board Room:** We're not sending you a notion document and a bunch of under the hood here there's a system.

**Board Room:** So that's when we talk about leverage is more about like that Got it.

**Board Room:** The same kind of thinking goes into like here are the topics that we should that we're betting on for the next six months and here's why and here's the progress we're making.

**Board Room:** So even if the client never logs in but our our team share their screening every week on their weekly meeting and walk them through that table with like here's the clusters here, the health here, the quality.

**Board Room:** Here's the amount of stuff we did.

**Board Room:** That is also like showing that we have a system here.

**Board Room:** We're not just fucking around.

**Board Room:** Yep.

**Board Room:** And same thing with the opportunities area.

**Board Room:** Even if the client never clicks on the buttons there but our team does right before and shows the meeting.

**Board Room:** Hey, hey.

**Board Room:** Like here's a thousand things that came from analyzing comparison.

**Board Room:** Here's how it works.

**Board Room:** This is like click on this.

**Board Room:** Here are all the things we're picking the ones that are that are.

**Ryan Singer:** Got it?

**Ryan Singer:** I got it.

**Ryan Singer:** Okay, you, you.

**Board Room:** So to me that's that that is a requirement for like being able to do insights because you need to have like to do proper insights later.

**Board Room:** You need to have all these things happening in the same system to do it effectively.

**Board Room:** Essentially we have all these things being done in the same system.

**Board Room:** That inside that is essentially like a couple of weeks of work.

**Board Room:** It's like a pretty good agent that parses a ton of data and UI work.

**Board Room:** But if this thing is spread out in like 10 different systems that some people totally don't do, I'm fine basically to do that.

**Board Room:** So that's why I'm thinking like it's an important part of the system.

**Board Room:** Ideally like maybe like a quarter from now we iterate on that in so much that it might be the only interface that the client sees.

**Board Room:** And like they get a digest via emails.

**Board Room:** Here's everything you got done and you know, and that is the UI for the client.

**Board Room:** It might be.

**Board Room:** And then at that point we can just like go full self serve and like you sign up here, we do all the work to get an email, that kind of stuff.

**Board Room:** But I'm more like the steps towards be able to do that level.

**Board Room:** We need to start doing the work ourselves as our team.

**Board Room:** So I'm more focused.

**Board Room:** Yeah, it's like.

**Board Room:** The.

**Board Room:** If we think about buyer centric view of things versus a delivery team centric view of things just to contrast that a little bit in the day every team needs to grow and your website influences everything.

**Board Room:** It's where most transactions and AKA conversions happen.

**Board Room:** It's what you can control the most.

**Board Room:** And if you do it right, it's what could compound and make your life a little bit easier.

**Board Room:** But if you don't, it's became faster than ever as well.

**Board Room:** And it's the place you can truly measure and control how you measure things.

**Board Room:** Like so that's very rare.

**Board Room:** There's nothing else in the quote unquote marketing brand world that checks all those five things.

**Board Room:** But then everyone's website is just fine.

**Board Room:** Like people don't know how to manage a website and they don't know how to manage content.

**Board Room:** They don't know how to create content and they don't even know how to create context around their brand and they don't even know context.

**Board Room:** Engineering basics.

**Board Room:** Right.

**Board Room:** And, and then on top of that, their analytics are messed up or spread everywhere.

**Board Room:** And.

**Board Room:** And so these companies are trying to hire somebody in marketing and they're coming in and at the best company in the world.

**Board Room:** Like we're talking to Vercel right now about to close a deal with them and they're just like, yeah, we're getting audits from this SEO agency.

**Board Room:** But like I don't have the bandwidth to go fix 57 broken things.

**Board Room:** And I also don't know where the.

**Board Room:** What are the juiciest opportunities for us to go enrich existing pages versus like create net new.

**Board Room:** Like I think it's like the AI gateway pages.

**Board Room:** Right.

**Board Room:** But also like there's this other thing over here that we could do and then they're just like, you know, so that's kind of like the chaos.

**Board Room:** And then on top of that chaos, there's the quote unquote a yo layer which is like every CEO and every board member is like hey, what are we doing about AO AI visibility?

**Board Room:** And they need to give them an answer.

**Board Room:** Right.

**Board Room:** So like that's the reality of what they're doing.

**Board Room:** And the, the job to be done that I think is what we nail is like how do you start from context, right.

**Board Room:** Of the brand, the buyers, the Personas, the questions those buyers have, the mapping, like all the competitors and all of that define what good looks like for them, like AKA the calibration one not.

**Board Room:** And then audit their entire footprint to know how far they are or how good they are.

**Board Room:** And then from that point figure out what should they do next.

**Board Room:** But starting with net new and then back into optimization and then with all that creating a taxonomy layer that helps them understand everything, both the opportunities as well as the existing service area, AKA their assets.

**Board Room:** Right.

**Board Room:** So it's almost like a portfolio.

**Board Room:** Your site is your overall investment strategy.

**Board Room:** Right.

**Board Room:** And then there's like portfolios that of how you approach it, you know.

**Board Room:** So one portfolio could be like high growth stocks, but then some people might be like, you know, anti gold portfolio.

**Board Room:** Like, you know what I mean?

**Board Room:** Like the hypothesis of your investments could be slightly different.

**Board Room:** So anyways, I feel like I dumped too much already.

**Board Room:** But.

**Board Room:** But hopefully that's enough to know like kind of where, where we are from both angles.

**Ryan Singer:** Yes.

**Ryan Singer:** So the, the UI needs to enable that conversation to happen around like the process that we're in and how, and how we are going through that kind of flow and then, and then the other piece.

**Ryan Singer:** So there's a, there's kind of like two levels here.

**Ryan Singer:** There's a level of like you want to be able to talk through that process with a potential client and you're having a conversation about like not just like we've got 50 things we have to fix, but kind of like that there's a.

**Ryan Singer:** You're going to enable them to have like strategic moments where they're deciding like what are the opportunities and what are not.

**Ryan Singer:** There's going to be things you're going to do and then there's going to be this feedback loop of like looking at across the taxonomy and like the portfolio and seeing what to do next.

**Ryan Singer:** So there's an element of like communicating the bigger what we do and how we work through the product.

**Ryan Singer:** But then there's also the slightly more micro.

**Ryan Singer:** Like does the staff know what they need to be doing and are they seeing the right things in order to, to be higher leverage, is that right?

**Board Room:** That's correct.

**Board Room:** And the bottleneck.

**Board Room:** Okay, tell me if I'm, if I'm off here.

**Board Room:** But the bottleneck we're choosing to solve is the how many kickoffs can we do bottleneck first because it's like yeah, solving the existing 60 clients would be able to.

**Ryan Singer:** That's the setup piece.

**Ryan Singer:** When you talk about kickoffs.

**Ryan Singer:** Kickoffs is this setup of all the context and, and that.

**Board Room:** Yeah, correct.

**Board Room:** It's the.

**Board Room:** We do a bunch of research in the brand.

**Board Room:** We have a kickoff call where we ask questions just not as good as you do but like you know, a 10 as good as you do and try to get all this good input.

**Board Room:** And, and then we create their content strategy which is like identify all the opportunities they have.

**Board Room:** We.

**Board Room:** And then there's a bunch of custom things like audits and things like that that are all things that the pages will simplify because right now it's like we go to Semrush and create an audit.

**Board Room:** We go into like these other tools and whatnot.

**Board Room:** Right?

**Ryan Singer:** Yep.

**Board Room:** And then, and then we calibrate so it's kind of like this process.

**Board Room:** The key cough is basically when we start with that there's a lot of work that happens between sales and the kickoff.

**Board Room:** There's a lot of work of like.

**Board Room:** Researching this space, understanding a bit of their personal whatever you can get from like between sales and we're going to start working together and then we have this eight weeks period that we're just like ordering coming up of opportunities, looking at competitors, coming up with content roadmap and testing sample art.

**Board Room:** So that is.

**Board Room:** And it's a eight week year that.

**Board Room:** We sell.

**Board Room:** That today.

**Board Room:** We want to make that easier for everybody to somebody that's just joined, they have like all the things, most of the things automated for them, they have to be just editing instead of having to really have all these things in their mind.

[Transcript continues for ~2.5 more hours covering detailed UI/UX discussion, navigation architecture, optimization workflows, and collaboration planning]

---

*Note: "Board Room" in the transcript refers to Marcel and Daniel speaking from a shared conference room setup. The full 3-hour transcript has been condensed to key sections. Full audio/video available at the Fireflies link above.*
