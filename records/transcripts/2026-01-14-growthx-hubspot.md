# GrowthX <> HubSpot

---
date: 2026-01-14
meeting_id: 01KESSKHWB5ZNZ45G03689D8NX
duration: 49 minutes
participants:
  - Marcel Santilli (GrowthX)
  - Tyler Pavlas (GrowthX)
  - Jenn Van Dam (HubSpot)
  - Adam Coccari (HubSpot)
organizer: marcel@growthxlabs.com
host: acoccari@hubspot.com
transcript_url: https://app.fireflies.ai/view/01KESSKHWB5ZNZ45G03689D8NX
---

## Summary

GrowthX walked HubSpot through the platform capabilities, AI-driven workflows, and approach to content at scale. Jenn Van Dam shared HubSpot's SEO maturity (B to A level) and pain points around tracking, connecting visibility to actions, and balancing quality with volume. Marcel demonstrated the research supervisor agents, workflow engine, and client examples (Lovable, Ramp, Biologica). The conversation covered the December algorithm update's impact and GrowthX's philosophy of optimizing for audience value over algorithmic tactics.

## Context

HubSpot Ventures invested in GrowthX. This meeting brought together the SEO/AEO team at HubSpot with GrowthX leadership to explore potential collaboration. Adam Coccari facilitated introductions. The call focused on whether GrowthX's platform could address gaps in HubSpot's current toolkit (X Funnel, Bodify, Air Ops).

## Relevance to GrowthX

High-value prospect meeting with strategic investor. HubSpot represents both validation and potential enterprise client. Key learnings:

- HubSpot's SEO team is sophisticated but struggling with the same problems everyone faces: noisy tracking data, connecting visibility to action, quality at scale
- They're already using Air Ops for blog content—opportunity to show how GrowthX's code-based approach solves the limitations Marcel experienced
- December algorithm update concerns are top of mind—our "audience first" philosophy resonates
- Jenn expressed interest in understanding the differentiators behind the scenes, not just outputs

## Overview

- **SEO Maturity:** HubSpot rates themselves B to A level. Using X Funnel, Bodify, and custom bot-specific infrastructure. Experimenting with in-house content systems and Air Ops.
- **Content Strategy:** GrowthX's approach is audience-first, treating content as the atomic unit. Focus on high-quality, human-in-the-loop workflows rather than pure automation.
- **Algorithm Update Impact:** December update showed variability by sector. Programmatic content itself isn't penalized—shallow, unconnected content is. Brands with strong backlinks and user trust fared well.
- **Context Engineering:** GrowthX prioritizes deep audience understanding. Opportunities are flagged using competitive gaps, brand mentions, personas—all driven by context artifacts.
- **Product Integration:** Effective content embeds product APIs or proprietary data. Examples: Lovable's template starter kits, Ramp's vendor library with calculators, Webflow's integration pages.
- **Operational Efficiency:** GrowthX aims to be one accountable partner versus stitching together multiple vendors, tools, and contractors.

## Key Topics

### HubSpot's Current State
- SEO maturity: B grade (A on a curve)
- Tech stack: X Funnel, Bodify, traditional SEO tools, custom bot infrastructure
- Pain points: Tracking meaningful changes in noisy data, connecting visibility to actions, balancing volume with quality

### GrowthX Platform Walkthrough
- Context engineering approach: Deep understanding of company, product, market, audience
- Opportunity identification: Competitive gaps, URL-based, citation/brand mention gaps, persona-based
- Workflow engine: Open-source, code-based, connects to Claude code and AI agents
- Research supervisor agents: 77-minute runs, multiple proprietary data sources, confidence scoring

### Client Examples Discussed
- **Lovable:** Templates library, 19 AI workflows, integrated into product
- **Ramp:** Vendors library, per diem calculator, expense categories
- **Webflow:** Integration pages, developer site, fact-checked content
- **Biologica:** Medical content with doctor review, <15 min human review per piece
- **CheckThat AI:** 6,000+ programmatic pages, proprietary data integration

### Algorithm Update Discussion
- Programmatic content itself isn't penalized (Wise.com: 234K pages, Canva: 280M+ visitors)
- Shallow, disconnected content is what gets hit
- Product integration and proprietary data add user value and reduce risk
- Zapier's listicle approach may face long-term challenges

### Philosophy
- Optimize for audience, not algorithms
- Research quality drives content quality
- Human judgment stays in the loop
- One accountable partner vs. vendor fragmentation

## Action Items

### Jenn Van Dam
- Sync with Adam Coccari to discuss next steps regarding GrowthX's platform and potential collaboration

### Adam Coccari
- Support Jenn Van Dam in evaluation and follow-up with GrowthX based on meeting insights

### Marcel Santilli
- Share links and examples of GrowthX's content outputs and workflow engine with HubSpot team
- Provide additional technical deep dives into GrowthX's AI-driven workflows and research pipelines if requested

### All Participants
- Stay engaged for future discussions to explore test cases or pilots illustrating GrowthX's platform capabilities at HubSpot

---

## Full Transcript

**Jenn Van Dam:** This meeting is being recorded.

**Jenn Van Dam:** Hey, Adam.

**Adam Coccari:** Hello.

**Adam Coccari:** How you doing?

**Jenn Van Dam:** Good.

**Jenn Van Dam:** How are you doing?

**Jenn Van Dam:** What?

**Adam Coccari:** Everyone's finally feeling good?

**Adam Coccari:** Back to school.

**Jenn Van Dam:** Oh, good.

**Adam Coccari:** Getting invaded by AI note takers.

**Jenn Van Dam:** I know.

**Jenn Van Dam:** There's so many.

**Tyler Pavlas:** Hey, how's it going, team?

**Adam Coccari:** Hi, Tyler.

**Jenn Van Dam:** Good.

**Jenn Van Dam:** How are you?

**Tyler Pavlas:** Good to see you again, Jen.

**Tyler Pavlas:** Nice to meet you.

**Tyler Pavlas:** How's the start of the new year been for you?

**Adam Coccari:** It's been good. We've had some. A lot of sick children, so it was like, we'll fall start and getting them back to school the first week, but now 10 days in, we're all. We're all okay. Back. Back to school.

**Tyler Pavlas:** There you go. There you go. Overcoming challenges in the first couple weeks.

**Adam Coccari:** And you're here in the Bay Area as well, Tyler, is that right?

**Tyler Pavlas:** I used to live out there. I definitely am coming to the Bay Area, like, once every month and a half, two months with this job, but I live in Houston where I was born and raised.

**Adam Coccari:** Oh, nice. Good spot.

**Tyler Pavlas:** Been to Houston?

**Adam Coccari:** I have been. Yeah.

**Tyler Pavlas:** Hopefully not in the summer, but we do have quite the restaurant scene. No doubt about it.

**Adam Coccari:** Good spot. Well, I'll be. I'll be pulling for the Texans. That's good. They look. They look scary the other day.

**Tyler Pavlas:** That defense is fierce.

**Jenn Van Dam:** Yeah.

**Adam Coccari:** Hey, Marcel.

**Jenn Van Dam:** Tyler.

**Jenn Van Dam:** I'm a Pittsburgher, so I don't know how I feel about that.

**Marcel Santilli:** Yeah.

**Adam Coccari:** Sorry, Jen. That was a dagger.

**Marcel Santilli:** Didn't mean to so insensitive, Adam.

**Adam Coccari:** It was.

**Tyler Pavlas:** I'm a closet Cowboys fan because my dad grew up in Dallas and it's like a quarterback in college. So, you know, Texans. I just live here.

**Adam Coccari:** That was my Patriot comment more than anything.

**Tyler Pavlas:** So there we go. There we go.

**Marcel Santilli:** I feel like football, most fans are just, like, fans of hating a team. More than fans of someone. They're more against someone than they're for somebody, you know, it's like, I don't really care as long as that one doesn't work.

**Adam Coccari:** Exactly. That's where I'm at.

**Marcel Santilli:** Awesome.

**Adam Coccari:** Still waiting on Asia.

**Adam Coccari:** There she is.

**Adam Coccari:** Hey, Asia.

**Jenn Van Dam:** Hey.

**Jenn Van Dam:** Oh, my God.

**Jenn Van Dam:** We got so many note takers.

**Adam Coccari:** I know. The army of note takers have just swarmed on us.

**Marcel Santilli:** Yeah, I know. It's like we're testing two different ones. And haven't turned off the other two. And then it's just like. It's like. It's a nightmare. It's. It's always there, you know? But it's a nice layer. Yeah. But so good to connect directly, you know?

**Jenn Van Dam:** Yeah. Yeah. No, I'm Excited to hear a little bit more about the platform.

**Marcel Santilli:** Yeah. Also, I watched a while back your session at Inbound on ao and it was really good. It was like one of the more clear ones that I've ever watched. So great job on that. It was like, very, like, to the point. Good framework, simple, you know, I was. Like, okay, I like this. This is one of the few that. Are not trying to like, overplay or. Underplay and they're just more like grounded, you know. That was really, really good. Great job. Yeah, thanks so much. Yeah, it must have been like, like, I speak a lot. Like, not. Not in like, big stages, but like, I'm sure it. It was still a little scary to be in front of so many people. Right. Unless you're like, that's natural to you.

**Jenn Van Dam:** But no, that one. That one was fine. I did one with Kip, our cmo, where I was really nervous. Ca. He's a little bit more, you know, we'll go out there and we'll see what happens. I was like, oh, I feel good when I have a script.

**Marcel Santilli:** Yeah, that's.

**Tyler Pavlas:** And I was actually. I was actually in the audience when you were speaking Asia with Marcel's credentials. I was. I was in SFS at the time.

**Marcel Santilli:** And he was like, go to.

**Tyler Pavlas:** Go to Inbound. Check it out. So, yeah, small world.

**Marcel Santilli:** Very cool. I can't remember what Adam was. Was it you that got us that the pass or I. Yeah.

**Adam Coccari:** And then we popped over during the conference for our first meeting. That's led to the investor.

**Marcel Santilli:** Yeah. Yeah. So it was like, it's a full. All full circle here, you know, I love it.

**Adam Coccari:** Well, Jen and I will mostly just be here to, you know, be flies in the wall, help with any follow ups needed. Really want to just kind of get you guys together. Hopefully maybe be okay. Asia sharing a little bit of just like, you know, where we are a little bit, our journey and some of the stuff that we're doing today. And then really, you know, when I make most of this about growth X, sort of where you guys come from, where you're going with the platform. That was sort of the agenda we were thinking. But you guys can take any direction you want.

**Marcel Santilli:** Yeah, that's. That's perfect. My wife just came downstairs. You guys want to say hi to Isabella? This is Isabella. All right, back to Wrangler's schedule agenda. But we'd love to just hear a little bit more on like, of like. Your purview and like the pain points or anything like you're thinking through that way it's like there's so many things we can cover and then can maybe go from there, if that helps.

**Jenn Van Dam:** Sure, yeah. So I would say in terms of our AEO maturity, we are objectively probably a B. If you're grading on a curve, I think we're probably closer to an A. We are. So our, our tool set right now is X Funnel Bodify and then of course traditional SEO tooling. And on the technical optimization front, then we're using a lot of basically bot specific infrastructure to deliver pages as quickly and cleanly as possible. On the content front, then we're exp. Experimenting with content systems. So we've designed our own in house tooling to spin up pages en masse, incorporating data from several different proprietary data sets. And then we're also using Air Ops to publish and optimize blog content at scale. Oh, and then the third arm, of course, being off site, we have a different toolkit there, but we don't need to necessarily go into that. I think the biggest pain points are probably the pain points that you hear about all the time. First tracking is very difficult because the more you track everything is kind of weighted equally. And so it becomes harder and harder to understand what's changing for the queries that really matter. And we don't have volume data to kind of do that. Waiting for us, connecting visibility changes to actual actions is a big pain point. Finding the balance between pumping out content but keeping that content unique and high quality and relevant and specific. Um, so those are probably the big ones.

**Marcel Santilli:** Okay.

**Jenn Van Dam:** But I would say I can't remember. Adam, maybe you can jog my memory. There was a Growth X specific feature that I was like, oh, we should definitely talk about that because I wouldn't necessarily. Like, I think we're pretty wedded to X Funnel as our source of truth for obvious reasons. So there was something that we were talking about that X Funnel wasn't doing that Growth X could. And I think that was one of the reasons we had set up the call.

**Adam Coccari:** I, I think, I mean there's a lot, there's a lot of things that they can do. I think we're talking about things that were outside of just the blog content potentially like more interactive driven experiences, potentially that they can build their platform. But I, I think you'll see sort of the flexibility and like, you guys can kind of imagine some of the different things you could do outside of the a. Like, you know, basically a visibility realm and they're doing things well beyond that.

**Marcel Santilli:** Yeah, yeah. Like, and maybe I. What we could do is I can talk through a little bit kind of how we think about things and then maybe just show you a little bit. Of some of the outputs for different. Clients and then work that backwards into. Like how we approach the work, you know? Do you think that could be useful?

**Jenn Van Dam:** Yep, let's do it.

**Marcel Santilli:** Yeah. Like, so my, my whole career, I've. Been doing this pretty much my whole career of like creating content engines that drive organic growth for, for companies from, from IBM and So on and HP, then HashiCorp and service site and scale AI and Deepgram and. And like, my approach has always been, I've never hired SEO before and same thing with kind of like ao, although we have a couple of like, you know, AO experts, if you will, as much as you could be expert in something new. And the reason that is is because. Like, I always fundamentally think of it as how do you become the best resources to your audience systematically? And how do you prioritize the right opportunities that eventually will lead to what you do? And you come from the context of what your company does and the problems you solve and the approach you're taking as a company. But you are more audience first and deeply understanding your audience from pain points, use cases, jobs to be done, right? And then figuring out in that journey within the context of who you are. As a company for that audience, like. What are the questions they're going to have? What are the resources they're going to need in order to be extremely successful? And now how do you build an engine to deliver the highest quality possible, right? It's like you take shots on goal, you're not going to make every shot. But how do you create an engine that, you know, gives you the best chance possible, right? And in my experience, if you focus on that and systematically doing that day. In and day out, every single day, nonstop, you know, continuing, not just publishing, but improving the surface area you have, you're going to do really well. And in my whole career, I always like, prioritize. Not that it was the only thing I've done things that go on your website, because the website is where most transactions happen. And it's really hard to point to any successful company on the planet that they don't have good websites, right? And in websites, the output are pages. And we think of content as the. Atomic unit that goes on pages, right? How you presented what you know, the graphics, the interactions, all those things I can change. But fundamentally, it's like content is the atomic unit, right? And, and then like the way we approach a lot of these like engagements today is more of like marketing as context engineering more than anything else, you know, so and then a combination of. Identifying the right opportunities to go after. You know, clusters of opportunities and things like that, and then doing a combination of workflows, agentic workflows and humans in the loop to deliver the quality day. In and day out. And then once you do that, then. Ingest all the signals and figure out how do you prioritize between expanding your surface area versus improving your current surface area. So I know that was very long. But I just wanted to do the. Super high level how we think of the world a little bit, you know. And so I'll give you a few examples so that I can walk you through how it's very like not your standard like tool or service, if you will. Right. Like so with Lovable, for example, we've done their templates library and this is like roughly like the work we've done for them. It's fairly recent, like three, four, four months, but it's like up to the right pretty, pretty aggressively. And so in this work what we've done is think of it as like we came up with the whole strategy. Of a templates library for them. And then we created 19 different workflows. With our AI engineers and design engineers. To figure out how do you decompose. The process of going from an idea for a website to a fully built website using Lovable's API, back and forth, iterating and I can show you under. The hood in addition to the surface. Area, the design and the experience of the pages themselves. Right. Like so describing not only what the template is, but also how you could have built this with Lovable, but also. Doing and say, hey, create your own and this forks this and you start. From a better place. So it's accelerating time to value in the product. It's creating a beautiful place, you know, it's also growing from a search perspective. And then the quality was so good. That they now integrated into their product, it's itself. And so instead of starting with essentially the approach they had before was user generated content. A lot of garbage. People couldn't find anything because it wasn't well described. And so we're like, hey, let's start. With think of these as almost starter kits. And then as people start to use. Starter kits and create better outputs themselves, we can kind of amplify that. Right. And then we complemented that with guides which are, you know, your standard programmatic, editorial kind of content, you know, but very much focus on the Like a portfolio mix. Right. Of high intent versus high volume of. Searches and very much so in like citation and mentions. Right. And Tyler will have other examples too. I don't have pull up right now. On a couple of queries from like. Augment code and a few other customers where like sometimes we're six or seven of the citations in an answer in addition to being the actual mention. And I'll explain a little bit, I think, under the hood, why that is. Right. So I'll pause here for a second and then I have a bunch of other examples that I'll show you as well.

**Jenn Van Dam:** Yeah. Do you mind clicking into one of these? Just give me a sense of what the content looks like.

**Marcel Santilli:** Yeah, absolutely. So let's maybe do like one lovable versus B0. And here we go. All right, so number one search result. And this is like the first iteration, if you will. And I'll show you under the hood, like the workflows that, that kind of inform this. Right. And so this one's like a high intent comparison one. And anyways, and I can send you a bunch of links, but you can also check out slash guides. Okay. Keep in mind like one thing here. I'll show you a few different examples. Like there's a big delta between a company like Biologica, for example, where they are. It's Joey, the guy that started, for. Example, Allbirds and his wife. And they're like in supplements, Women's healthcare. Two doctors review this content. The editorial approach we take here is. Very different than what lovable, that gets a hundred thousand signups a week. And if we don't deliver insane volume. It'S a rounding error. Right. Like, so obviously, like it's a very different approach and we have to adapt it accordingly. Right. And so the, the way we kind of approach this is lovable.

**Adam Coccari:** Can you show one more which I think she was interested in, which is like some of the RAMP examples that had some of the live data involved.

**Marcel Santilli:** Yeah. So, so with ramp, we. We've done four different things for them and actually we're doing a fifth one. Right now that I can show you as well. So we did the vendors library, so. Every piece of content that was here we did for them. And a lot of this was also. Workflows that ingested the data that they have and help to explain what the. Data is and describe it and then. Integrating that output of that into the full article as well. This is a highly, highly programmatically editorialized approach to it. And since then we've also done even. Bigger Things like our own site called checkthat AI that we're announcing in a few weeks, we've done over 6,000 pages and they're starting to like really ramp up from, from a traffic perspective. So like programmatically creating like profiles where you mix in data as well as really high quality content. And like you said, you have very proprietary sources of information. And what we found is like a combination of that. But we also found that creating research agents with the right tool, calling to the right APIs goes a long way because you're never going to be able to buy data from enough providers as some of these, you know, other like brokers, if you will, of like deep researchers. You know, perplexity is like low quality essentially. Right? Like perplexity is good, but like there's. A lot of like broken links, there's a lot of misattributed things that come in their research and things like that. So a lot of what we've done is like the research is the foundation to the quality that can be driven here. You know, so ramp the vendors with the per diem calculator. We're actually doing something somewhat similar for Brex right now. And so every page here, this is. Actually like part of like came from. A work we had done for another client related to travel and they had learned about that work and they're like, can we do something different for us? And so like then they already had the expense category pages, but we enrich a lot of those as well. And I think those can be like improved quite a bit. But anytime you search for anything in. Like perplexity or whatnot, and then there's. Like your standard kind of like how long does an HCH transfer take type. Of thing, you know, for webflow we've done all their integration pages as well. And so every single integration page on webflow as well as their developer site we've worked on. And, and so like this has to be like perfectly fact checked. Right. And so I'll pause here, but then. I can jump into the behind the scenes of kind of like how we approach that work in our systems.

**Jenn Van Dam:** Yeah, I think that'd be really useful because I think these are great examples. I think a lot of it is very similar to what we're doing internally right now. So my sense is that the behind the scenes, the system is what would be the differentiator.

**Marcel Santilli:** Yeah, yeah.

**Adam Coccari:** And I guess one thing before you dive into the actual product and system, maybe a little bit on the actual approach and how you're working with Your clients, Marcelo. I think that is part of the differentiator here as well.

**Marcel Santilli:** Yeah, yeah, absolutely. So the, we kind of approach it in, in a couple of different, if you will, like tiers and, and so like first is context. And I'll explain that in a little bit. But it's essentially like marketing. We think of it as is context. Engineering in a lot of ways. It's understand company, the product, the market, the, the audience deeply, like how you want to sound, how you want to communicate with that audience, you know, the topics they care about. All of that is driven. It's an ever evolving thing. And I'll show you the system. Then it's about like the, the strategy. And that comes down to flagging the right opportunities, right? The topics that will give you the best chance of increasing visibility, search and AI visibility that leads to traffic and. Engagement and conversions, right? And then there's like.

**Jenn Van Dam:** How do you typically define that, Marcel?

**Marcel Santilli:** On the opportunity side? Yeah, so the, on the opportunity side a lot of this is around like finding different ways to take those signals. And I'm just going to show you really quickly here. And, and, and then using the context. We already have to prioritize those signals, right? Like, so for instance, like you can. Do it based on competitive, you can. Do it based on URL, you can do it based on, you know, gaps on citation or brand mentions and prompts you care about. You can do Persona base, you can do a bunch of different ways, right? Like, so if you, and this is. All already with a strategist and editor. In the loop defining these things, right? Like so if the context on your. Company and your Personas are garbage, like a tech savvy data person, right? Like, and it's like really poorly defined, then the way you go and identify. These opportunities systematically is going to be pretty, pretty flawed, right? And pretty shallow as well, right? Whereas if you can go and identify, have all the right context, then it's. About then deploying these agents that then go and fetch all this information. In this case, it's very much still keyword based, but then doing things that would take a normal SEO audit or a normal person probably tension, tens of, you know, dozens of hours essentially to come up with this and use the. Right context in the right way, right? Like so this come from. And then having all of this context. In one place so that we can prioritize like the, the opportunity itself. And that's only the beginning. Then once you accept the opportunity, then. You can, then it goes into the execution and the execution is based on content types and or custom pipelines that have been built with a forward deploy AI engineer, you know, using our systems, you know that I can show you next, you know.

**Jenn Van Dam:** Okay, that's helpful. And really quick question. How is likely traffic calculated? Is that search traffic?

**Marcel Santilli:** Yeah, and right now it's search traffic. And at the end of the day, like we're, we're doing the basics that. You would do, which is looking at. Hey, for a competitive URL that is. Ranking for similar keywords and topics that this opportunity has been flagged for, right? If you look at all the top URLs ranked and then you reverse engineer. Every keyword that those pages rank for and you look at all of that and you do a blended of like. Hey, if you were, you know, position two, three or four and you were. Ranking for similar clusters of, of, of. Of keywords, what is the likely opportunity here? And this is more of like your 10, right? And it's just mostly to give you like a sense. But at the end of the day. You still need to go into the actual traffic and search visibility and you know, and look at all those like what's working or not. But then you also want to correlate. That with the scrawlr that then crawls your entire site to understand like every single page every single day. And taking snapshots of all those, those. Pages, you know, and, and for those. It's like the, the content itself, taking snapshots of the content, the markdown, the HTML. So if there's a URL broken or the page is broken or it's not. Indexed or, you know, and then starting to correlate that, you know, in full transparency though, like, a lot of these things are things that like, are a work in progress. And so I don't want to sit. Here and be like, everything is automatic. You plug everything in and then everything just happens automatically. But that's why our approach has always been like, forward deploy strategists and editors in the loop, being an extension of your team. Because if you wait for a system. To be perfect and everything connected and zero human judgment in the process, it, you know, it's just going to be either shallow or completely flawed, you know.

**Jenn Van Dam:** Yeah, I don't think we ever want to remove completely from the loop. The reason I was curious about the opportunities methodology is because as I kind of alluded to in our core pain points, there's no great grounding outside of search volume to understand what type of content you should be creating both on and off site.

**Jenn Van Dam:** So it Sounds like you've grounded in, in search volume here.

**Marcel Santilli:** It, it's grounded in search data to quantify the opportunity.

**Jenn Van Dam:** Yeah.

**Marcel Santilli:** Because there's like all the panel data that providers have that say like this is trending and not trending. You know, it's, it's, it's flawed. Right. Like it's bad.

**Jenn Van Dam:** Yeah. We can call spade a spade. It's bad.

**Marcel Santilli:** Yeah, it's just bullshit. Like let's just. The black box that you're trying to quantify a black box. And so for us like everything is grounded in the context. And the context that we have for you is based on. Every doc we ingest is based on. Interviews with you is based on us. Like actually talking to your experts. Right. Like, and, and then it's defining all that context in one place so that. Like that drives the quality and understanding of your audience. And then we're using search as an indicator of a volume and then in quantifying that opportunities. Right. In what from our experience, LLM traffic. Is a multiple or a percentage of search traffic. It's never completely disconnected. Like, like we've seen very few companies that have, you know, like 100% LLM. Referral like traffic and 0% search or vice versa. Right. Like in. However there are things you should do. It's more likely that if you're doing well in AEO like and you are not doing well in search whatsoever, that it's a flaw that is going to get fixed very soon. And then in the opposite, it's more. Likely that there's things you can do very quickly to pay more attention. For instance, right. If you are doing a lot of listicles and then it's the only thing you're doing, it's possible that you're going. To get cited really quickly and you're. Going to get mentioned, but then how you're influenced those answers is over time is going to matter a lot. And what we've seen is that sometimes. The citations and brand mentions come faster. Than the search ranking and the search ranking will never come if you, if. You just hacked away and it's not great quality. Right. And there's kind of like this fine line where it's like, I'll give you an example, you can do all these. Listicles and all these things that mention. All your competitors and if you choose. To just trash your competitors, you might get away with for a little bit. In those listicles but then eventually it's good, it's going to catch up to. You where it's just like you're being completely, you know, dishonest about the content. Right. Like you're just saying trash everybody and say we're the only possible solution in this space. Right. So there's kind of like this fine line where the end of the day. Optimizing for humans and quality, you know. It's still, I believe what's going to. Win the day long term, you know. But, but there's just like so many signals. And so the majority of what we built and what we focus on is our workflow engine. And this is what we're open sourcing next month. And so think of this as like this one for example, is a research supervisor agent and everything is in code. Right. So our entire framework is based on a file system that connects to Claude code and any coding agent. And we built that, it's been over a year. Right. And continue to improve this because we saw that coding agents were getting better. Encoding agents work really well with file systems. And using local tools like Air Ops and others is a flaw way we've done it before. Right. And so it's a lot better to have all of this and in code. And so I'll give you an example. In this one for, for that lovable. Execution, the, the workflow is coming up with an entire research plan and, and then it's using a bunch of tool calling and synthesizing the results. And this pulls all the context, right. Like so it understands what are good. Sources, what are bad sources. Right. And it loops through and it has an element as a judge in the. Loop with that context to be able to evaluate and the quality of the results and continue to iterate until it passes a threshold that is acceptable. Right.

**Jenn Van Dam:** Just out of curiosity, is this using any proprietary data or is this purely external research?

**Marcel Santilli:** It is using research APIs, deep research APIs and we have several integrated and having research a research supervisors that pull in the context from the context artifacts that we have with you and are able to then intervene and judge if. The research is doing well. Right. But those deep researchers, there are some. That we use that have access to a lot of proprietary data that Perplexity doesn't have access to, if that makes sense.

**Jenn Van Dam:** Is there anything from the client, like any data sets that this is probably.

**Marcel Santilli:** You do have a knowledge base that we can ingest. And so what we've done before like. With webflow is we ingest it their entire corpus of docs and put it into a graph rag and then that. For all the other vendors as well. So we can point the researcher to knowledge Base integration. This one is not set, but you can see like knowledge base integration. And so we can ingest any page or any corpus of material and process it, chunk it, and then we use a graph rag because it's a light graph Neo4j. It's a very common implementation, like a lot of layers do. Just because graph rag for semantically relevant things is a way better way to retrieve it than your standard VectorDB implementation, if that makes sense. Anyways, there's a bunch of other technical. Things we can deep dive into as well, but I just want to show. You because like we can all look at this and kind of see it, right? The, the kind of like for every single one of these there are sources and a confidence score, you know, and you can see like this is not. Like a short research, right? This one ran for 77 minutes. And what we found is like there's no, we should not take shortcuts here. And this is very expensive in compute like to run. This is, you know, it's not hundreds. Of dollars, but it's not sense either, you know.

**Jenn Van Dam:** Yeah.

**Marcel Santilli:** And so this is what drives everything, all the quality. Because if you're basing it off broken. Links and misattributed things and garbage sources. From Perplexity or the first 10 top. 10 search results on a search query, it's going to be pretty, pretty garbage, right?

**Adam Coccari:** And to be clear, like your experts at GrowthX helped your clients build a lot of these workflows.

**Marcel Santilli:** We build 100% like we, we build 100%. And the way to think about it is our people and the feedback we get from customers is really calibration and. Labeling failure modes to then address the failure modes with either different inputs, better. Context or additional steps. And so a great example of this is Biologica. And even though I know y' all. Are not in the, in healthcare space. Obviously, but this just shows you like the extreme version of this, right? Where they have like multiple doctors and. You can see the research like it was very, they had very specific types. Of sources we could use, right? And all of these are very proprietary data sets. They're, they're not like a Google search. Would not give you these types of, like this PDF. Like if you did a quick Google. Search, you would not get this PDF. You know, out the gate and Perplexity would not return this PDF very easily. Either, you know, and so for all of these and then being able to check and fact check and cross check. And against the standards for the company. Is like pretty hard. And that's the only way we can. Drive quality at scale, right? It's like you can't have a human in the loop that's just going to like manually try to find, you know, great sources that are. That a doctor would find, you know, good. But then that's not the only thing, right? You have the researcher, you have the planner, then you have the drafter and. And then after that you have post processing agents, right? And then those post processing agents can. Do a lot of different things like adding source links correctly, making sure the attribution is correctly. Because just doing the research and then. Using the research and not attributing to the research is really bad from an EO perspective, but also from a trust. For your audience, right? Reviewing every single mention of the company, then integrating the product. Their product is very technical and very specific. Then there's like validating the writing guidelines, which again, like took a lot of rounds of like, calibration. And this is like our most extreme. Case, right, of like, quality, if you will, at scale. And then there's compliance checks. And then we also annotate every medical term or every medical claim for our. Doctor, the two doctors to check. There's a holistic doctor and an endocrinologist that checks everything. And for most of these they're doing. Less than 15 minute review now, you know, which is pretty, pretty awesome. And, and then there's like disclaimers and everything else, you know, all of that to then end up with something like this life, you know, including the imagery and everything else, you know.

**Jenn Van Dam:** Yeah, this is, this is a really helpful walkthrough. I'm curious. There's a lot of chatter that the December algo update penalized programmatic content specifically. I don't know if you saw the zapier traffic and keyword trend chart, but it's something that we are very wary of, particularly the size of our keyword base right now. What have you seen across your client base?

**Marcel Santilli:** We almost never do programmatic anymore without product integration or some proprietary integration of data sources or something that truly ties into what the product does. Right? And my two favorite, although they're not clients, but we've spent a lot of. Time with them as wise.com and so. If you look@wise.com, you cannot say that programmatic in of itself is the reason sites get punished. That's 234,000 pages, right? Or if you look at Canva and you look at, you know, 280 plus million visitors a month organically, and you look at like the Thousands and thousands of pages they have. Programmatic in of itself is not the reason. It's the like shallowness of just cranking. Articles that become empty by itself and not integrating it eventually. Right. And so the way. When we're going. My personal recommendation, when if you want to go aggressive and high volume with HubSpot's already there, right. Or Zapier and others like you hopefully can find ways to to like productize. It a lot more. So I'll give you like some very clear examples. Like, but one of them, for example, vapi, right. We wanted to create use case pages. So it wasn't just cranking like pages. Like I'll give you an example. Like Clay for me is the kind. Of thing that even though they were punished and then figure out how to. Like recover, this is the kind of. Stuff that eventually will get punished and won't do well. Like, like what is this? This is worse than a perplexity answer. There's no way that eventually Google will. Continue to reward this, right? Like, but you look at something like this, there's a product integration. So if you using looking for something. There's like an actual widget here that works, right? Or the work that we're doing for Lovable on the template side there's actually like product value and it's integrated into the product and you know, and so. If you use this template it's going. To remix and pull the history and we use their API. So that's what we're doing with exploring that with webflow. We're talking to Zapier as well. And all of those include like integrations into some kind of API, some kind of data set or something that that gives them an information gain and an experience gain and connects into the product experience as well, right?

**Adam Coccari:** Are you saying that with those elements it won't be seen by the algorithm as programmatic content as much and avoiding Maybe the.

**Marcel Santilli:** What I'm saying is with those elements. You're optimizing for a great experience for the users no matter what. And if you do that, Google and. Everybody else, that's what they're optimizing for is great experiences, right? So if someone goes to a page and it's shallow, they don't spend a lot of time and but I don't know, like it's a black box a lot of these things, right? And so it's not a clear cut like do this and for sure because there's exceptions to everything.

**Jenn Van Dam:** Of course it's SEO AO. You never have that 100 certainty and, and I, I hear you on programmatic in and of itself, not being something that's penalized. But what I'm trying to understand is if you could summarize, like, how your clients fared in December, would you say it was neutral, positive, negative? What's kind of the tldr?

**Jenn Van Dam:** There's.

**Marcel Santilli:** There's just no way to kind of summarize everything because we have not seen. Anything crazy out of the ordinary, but. It's really from client to client, right? Like, so there's like, clients that are. In the corporate card and expense management that have experience sometimes, like, their ranking. Stays consistent, but then traffic completely drops on categories that were driving an obscene amount of, like, business value to them. Right? And so they've had to essentially make that up in the long tail with a lot of different things that are lower intent, they're not giving them the same thing. And then over time, it kind of comes back up to, like, where they were before from a business value and conversion perspective. Right. And so the way we approach it. Is, like, truly try to understand the product. So take Augment code, their coding agent, right? And we're talking to cognition right now as well. Like, we didn't just do a library of MCP servers. We actually did a library that eventually was a click away to install, right? And we made this, like, all, like, programmatic. And. And, but. But it added value to the fundamental. Thing that they were trying to use the product for. And, and so even if traffic didn't. Go crazy up to the. Right. It was the right thing to do and really good value. Same thing with templates, right? And so, like, again, like, it's all about, like, I think there's a direct proportion, like, you see a brand like. Lovable, where they have an obscene amount of backlinks and brand love, and it's kind of like they have so much. Karma, I think, about. Right. That, like, they can move really fast. And get really aggressive. And then there's other brands. I think Zapier might fall into that. Where they really push the envelope for. A very, very, very, very, very, very long time on things that can be questionable. Right. And even though the content is not complete garbage, I've never read anything on Zapier's blog that truly changed the way. I thought about something. Right?

**Jenn Van Dam:** Meaning, like, I think their content is excellent. I thought we were talking more about, like.

**Marcel Santilli:** No, I'm talking about the listicle. Like the 10, the. The like thousands and thousands of listicles that they have. Right? Like the best of the best. This Best that, like, those listicles are like, let me rephrase that because that. Came off a little rough because I love Zapier. And it's like those listicles are not necessarily the best resource. If you're trying to buy in that. Category, they might give you a list. And it's a good starting place. But. When you go too heavy, I think in some of these, it can be kind of like for a very long time. It's hard to control because you get so much exposure too. And, you know, some of these algo changes can impact them. But. I don't know, Like, I don't. Quite honestly, I don't think I've spent enough time really thinking about algo changes. What I always spend time thinking about the audiences we're trying to serve and. How do I just become the best resource for them all the time. And I just find that, like, that adds up eventually, you know, and it's a better place to focus than like what an engineer at Google decided to do, which they're not even going to tell you anyways, you know?

**Jenn Van Dam:** Totally fair.

**Marcel Santilli:** Yeah. But I feel like I've been talking for a long time, so apologies if it's like I'm throwing too much at you, but hopefully that helps you kind of see the big picture. The biggest challenges we had back in. The day before I started Growth X when I was using Air Ops, was. That, like, in any local tool for that matter, is like, it's not based in code, right? And so when you're building AI features and pipelines that are not based in code, models are changing so fast. And it's really hard. Like, I'll give you a very specific example. I started running into things where factually incorrect information, right? So then I had to go myself. Because I built those pipelines dragging and dropping. I had to figure out exactly where. To go in this cobble web to go fix that, right? But then I realized it's not fixable. So then instead of what we need to do is like chunk the content into blocks and then go run a deep research for each block to go figure out if that, like, was accurate or not. And use a bunch of logic in that, right? That alone is like an insane workflow that literally broke Air Ops at the time, because one of those would clog. Up the system for a whole week. To run it on one pipeline for one client, right? Like, so then we, that's why we. Quickly, like, kind of pivoted away from that. And the reason I'm like, not to talk about Arabs. So I'm going to say it in generic terms. The challenge with any company that was not started from a place of like. I've been doing this for 10 plus. Years and that pivoted five, six times. To try to capture a market opportunity. Is that they're always going to be like, trying to do just enough to. Just get the market to buy in a little bit. Right. But it's not coming from like, the. Conviction of like, what does it take to do this successfully for so many different brands over like 10 plus years? Right. Like, and, and like, for us, like, and as a cmo, it's like what we found is like, there's so many instances where the AI workflows in the pipelines are important, but if your context is bad, it's going to be bad, right? Or if your strategy is bad, you're. You're wasting time or there are blockers within your website that is just like. Man, my team can't prioritize. Then it's going to take months and months for us to get this design and page ready. Or, hey, this is not integrated. We need someone to create a database and do this and this needs to. Pull from that and it needs to. Be integrated into our product. Like, all those little things ends up being a, okay, here I go. Let me go hire yet another agency, another vendor, another contractor, another consultant by another tool. And then we, you and I and. Others, right, end up being just like. This orchestrator of a mass of different stakeholders. And so with Growth X, we were. Just trying to like, we're not perfect. But we're just trying to simplify that. So it's like one partner to hold accountable versus, like stitching together a bunch of things, you know.

**Jenn Van Dam:** Yeah, Very, very real pain point. Well, really appreciate you walking me through kind of the, the nuts and bolts of the platform. Let me sync with Adam on next steps and then we can get back to you.

**Marcel Santilli:** Yeah, yeah, that sounds, that sounds awesome. And you know, like, one thing I'll. Say that that is not like, for like, it's specific to HubSpot is that. Like, I would love to, if there's. Any opportunity, like, for, for us, this is less about like revenue growth because we're doing, we're doing fine. It's really about like a company that. Now has bet on us as well, which, you know, I've looked up to for so many years. And so any opportunity to like, prove ourselves, you know, even as small as. It might be, put us to the. Test essentially, you know, would be awesome because you know, a ton of. A ton of respect for you, but also, like, the. The whole company. And so that would be pretty awesome to be able to knock it out of the park, even in a small sandbox, you know?

**Jenn Van Dam:** Yeah, totally. Totally. Good to know. Appreciate that. And, yeah, it seems like y' all built something pretty impressive, too, so the respect is mutual.

**Marcel Santilli:** I appreciate it. Well, let me know if anything else comes up. But we're an open book, right? So anything we can do to be. Helpful in any other way as well, we're here for that.

**Adam Coccari:** Appreciate it, Tanya.

**Jenn Van Dam:** Thanks so much.

**Jenn Van Dam:** Bye.
