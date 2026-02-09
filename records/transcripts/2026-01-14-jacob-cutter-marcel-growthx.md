# Jacob Cutter <> Marcel with GrowthX

---
title: Jacob Cutter <> Marcel with GrowthX
date: 2026-01-14
participants: Marcel Santilli, Jacob Cutter
meeting_type: Hiring Interview
duration: 53 minutes
source: Fireflies (01KEXB3DSJ2W9AK2M85VZ8Q23T)
transcript_url: https://app.fireflies.ai/view/01KEXB3DSJ2W9AK2M85VZ8Q23T
---

## Summary

Marcel reconnected with Jacob Cutter, a former Deepgram colleague now at Salesforce, for a hiring interview. The conversation covered GrowthX's evolution from Marcel's AI content experiments at Deepgram into a $12M+ ARR company with strong unit economics. Jacob's background in AI engineering and agentic systems aligns with GrowthX's need for engineers who can own end-to-end solutions while understanding business context.

## Context

Jacob worked with Marcel at Deepgram on analytics and product launches. Since then, he's moved into AI engineering at Salesforce, building voice agents and agentic systems. He's exploring a potential role at GrowthX as the company scales its AI platform.

## Relevance to GrowthX

This interview demonstrates how GrowthX positions itself to engineering candidates:

1. **Origin story**: Started from Marcel's AI workflows at Deepgram, not a pitch deck
2. **Technical foundation**: Output AI framework, open-sourcing next month, built by infrastructure engineers (Hashicorp, Airbyte)
3. **Business model**: AI-powered content platform with 90% automation + human refinement
4. **Financial discipline**: $12M ARR, only $3M burned, cash flow positive in 2 of last 4 months
5. **Hiring philosophy**: Looking for engineers with business empathy who can own problems end-to-end

## Overview

- GrowthX aims to be the AI content platform that drives sustainable growth through website optimization
- The company combines agentic AI workflows with human judgment to hit 90% automation
- Achieved $12M+ ARR with only $3M burned, maintaining strong unit economics
- Hiring versatile AI engineers with business sense; roles are flexible to foster ownership
- Targeting the fragmented marketing content market with integrated AI solutions
- Culture emphasizes work-life balance, family support, and healthy startup environment

## Key Topics

### Company Vision and Strategic Positioning
Marcel explained that GrowthX builds scalable AI-powered content systems that drive growth outcomes. The approach combines agentic AI workflows with human calibration. The open-source framework (Output AI) handles workflows as code with traceability, evals, retries, and parallelization at scale.

### Product and Technology
The platform is a multi-layered AI system: research agents, drafters, post-processing, and human-in-the-loop reviews. They crawl all client website pages, ingest search and AI visibility signals, identify opportunities, and execute content at scale. The goal is closing the full optimization loop from inputs to growth outcomes.

### Hiring Strategy
GrowthX needs engineers who understand both the technical and business sides. The roles aren't rigidly defined because profiles combining AI engineering, product sense, and pragmatic execution are rare. End-to-end ownership is the expectation, not siloed handoffs.

### Financial Health
The company has been profitable at times, cash flow positive recently, with only one investor (Karan) at a conservative valuation multiple. Employee-friendly equity terms include a one-year exercise window after leaving.

### Culture and Work-Life Balance
Three new parents on the engineering team in the last two months. Remote-first with flexibility. Marcel works intensely but protects family time (4:30-8pm). The bar is building a company where Marcel would want his daughter to work.

## Action Items

**Jacob Cutter**
- Schedule and complete interview with Katya (data scientist consultant)
- Send any follow-up questions to Marcel via text

**Marcel Santilli**
- Remain available for follow-up questions throughout the interview process
- Continue collaborating with Daniel and Katya on defining role requirements

---

## Full Transcript

**Marcel Santilli:** Hello, my friend. How's it going?

**Jacob Cutter:** Going well. How are you doing, Marcel?

**Marcel Santilli:** Good, man, it's so good to see you again.

**Jacob Cutter:** Yeah, likewise.

**Marcel Santilli:** How's family? How's life, you know?

**Jacob Cutter:** Yeah, things are going well. My kid is doing great. He's enjoying the preschool so far with which he still goes to with his mom. And yeah, I'm just keeping real busy at Salesforce. So yeah, kind of had a jam packed couple of years since Deepgram.

**Marcel Santilli:** Yeah, that's fun times. That's good, man. I think Deepgram is really good. But it's also like, I don't know if you found this. Anytime you make moves like it really challenges you in different ways and of course you kind of expand your horizons for good, better, worse or whatever. But it usually it's like no matter what, like you have a more clear picture. You appreciate certain things about the new company versus the other one as well. And it's just like expense and so at least for me, my strategy was always like, even though at times like I hit my head against the wall from a culture perspective of companies. It was always like, man, like there's no way I would have learned everything I did had I not made the change. But happy to also report that from what I hear, Deepgram is doing really well. So hopefully you still have your stocks.

**Jacob Cutter:** Yeah, my LinkedIn feed was flooded with Deepgram announcements. It was pretty cool.

**Marcel Santilli:** Oh, it's awesome. I actually didn't open my LinkedIn today. Was it today?

**Jacob Cutter:** Oh, yesterday.

**Marcel Santilli:** Yesterday, yeah, yesterday I knew about it because Karan is on our board and he's on the board of Deepgram as well. And so I knew about it, but I must have been under a rock yesterday because I was so busy back to back that I didn't even open my LinkedIn. So they finally...

**Jacob Cutter:** Well, because there was a number of plays it sounds like they're making, right? So like they did the fundraise and they're kind of, there were some announcements about how they were going to invest that money, like what they were going to use it for. And one of them was like an acquisition of this restaurant food ordering AI startup. And there was kind of a number of other things that they announced, but it was pretty interesting. Good to see them kind of accelerate, you know.

**Marcel Santilli:** Yeah, yeah, yeah. No, I caught up with Chadi a few months back and they're doing really well. I think they're well past, like getting closer to 100 million in ARR. So that's positive, you know. But anyways. But how was the chat with Daniel? You really enjoyed it. So how is it from your perspective?

**Jacob Cutter:** No, it was cool. It was interesting because, obviously, I mean, if you just look at my resume and even since Deepgram, right, like, I've been voice focused, right? So I've been working on these end to end conversational voice agents. And so I've kind of gone from like ASR model, like R&D on the research side and the data science and all that stuff and kind of getting more and more into the engineering heavy roles. And at this point, like, most of my time is spent on backend integrations and building an agentic system that incorporates all the business logic. So that's kind of part of why I think this role is interesting. It kind of ties in with a lot of my recent work. But that's actually... I was a little bit surprised that Daniel recommended we have a call like now, but I think it would be a good thing to kind of discuss some of those things I discussed with him because one of my main concerns is sort of around that alignment and vision for the role I'd be coming into, right?

So my thoughts immediately when you asked me if I wanted to interview was like, the capacity that I was working with you was very different than what I've been working on in the last couple years. So even at the time, like, I had already trained a lot of ASR models and done all this other stuff and I was very metrics or analytics focused for the product launches and announcements that we were working on together. So this is a bit of a... The way I'm looking at my career trajectory is more and more on the AI engineering side and building basically. Agentic systems, whatever.

And so my question, I guess to you is kind of like, given that I'm departing the voice world, if I were to make this move, it would be good to get a sense of what you envision the company building towards as an AI company, leveraging AI to do all these cool things and how my skill set really would fit in because I know that Daniel mentioned there's a few roles that we're looking at and we're already hiring for the data science metrics kind of role. But is that the capacity you see me working in or is it more on like, are you looking for someone to come in and really build out some of the agentic systems?

**Marcel Santilli:** Yeah. So let me give you the big, big picture and then that hopefully will give you the context, right. Even further. But so I wasn't kind of sitting there going, hey, I'm going to start a company and it's going to be this thing. It was truly like every step in my career I had built organic content engines and when I did it at Deepgram, I think it was a little bit after you left too, it happened, it took off. I had done that in every company I've been at in addition to everything else in marketing.

And so Deepgram was really nice because Scott kind of was hands off and so I could do whatever I want. And so I took a lot more risk and went way more aggressive. So I started to build these AI workflows to try to scale quality of content and try to publish more pages at scale to compete with the likes of OpenAI. Because it's kind of like, we gotta cheat somehow here. There's no way I have enough marketing dollars to compete with FU awareness.

And in the process of doing that, I just spent thousands and thousands of hours on input, output prompts, tweaking the prompts, essentially taking every single step in a deterministic way. Not an agentic way at the time. But then figuring out where humans should go in this equation to scale this thing up. And it worked with 24X traffic, company's doing well, but obviously it's not only because of that.

And then in the process of doing that, what I had done was distill my know how into first principles and then figuring out how to use models within their limitations to get something from zero to like 90% and then the humans take it the rest of the way. And turns out very few people have done that. And within marketing and content, no one had done that.

So I started doing workshops and then we had about 170 people. While still CMO, Deepgram paid 500 bucks to come to these three workshops. And after each workshop, people were like, can you just do this for me? I don't want to go find humans in the loop and hire them. Finding that is really hard. I don't want to build the workflows myself. But I also need help with the strategy overall.

And I was like, yeah, exactly. Everybody needs that. That's what I've done my whole career. Except I didn't have AI before. That's a no brainer. So I said yes to 2, then 6, then 12. By the time I gave my notice in September, we actually had a million and a half in revenue, recurring revenue, and 12 customers. And that's when I partnered with Daniel.

And so Daniel came in, right? Daniel was If This Then That back in the day, which was like a precursor to Zapier. And then since then he became obsessed with AI and actually took a year off from his last CTO founder role. And he had also worked at Basecamp. And so I don't know if you're familiar with Basecamp and their methodology to how they build products. It was very thoughtful.

And so he had done a lot of similar things from an AI engineering perspective, but more about how do I apply this. But he was also on the extreme spectrum of early adopter on being an AI native coder as well. And builder. Who had also worked on infrastructure in an infrastructure heavy company like IFTTT with a runtime layer.

So it was like this combination of things that was this perfect combination in addition to what I had done. And I had this weird combination of someone that had worked for multiple companies that trained their own models, including Scalia and Deepgram, had been in this space very early on and was intellectually curious enough to be able to have a conversation with you or whoever and understand how things work and decompose things from first principles, but also applied it to a domain that I had decently mastered.

And so the combination of those two things is really awesome. And so when he came in, he saw what I had built with all the workflows and he's like, this is incredible logic. This is coding, except it's not. It's a no code tool. I'm going to re architect this thing with the same logic to make this more scalable within low code tools.

And so he did that. And within a month or so of doing that, he realized where everything was breaking. And he's like, hey, coding agents are the future and everything here should be in code. This is stupid. Why would we do all these what now is agentic workflows in low code tools? There's a bunch of things like traceability, error logging, evals, retries, running at massive scale parallelization. All these things are necessary to run agents at scale.

And so he built this framework which is what we're open sourcing next month. It's going to be called Output AI and think of it as an agentic framework of coding agents that can build workflows as code with a runtime layer and all the bells and whistles of traceability evals all baked in with runtime layer that's an abstraction of temporal and all there with the right primitives and highly opinionated in some places. And this is what we've been using for over a year now.

And that's the foundation of what we built. It's like you look at us from the outside in, it's like you all look like an agency, an AI powered agency. But under the hood it's like we have infra people. Clint worked with me at Hashicorp, he was the first engineer at Terraform, and was there for seven years. Stefano was at his company, got acquired by Meltwater. Ben was early engineer at Airbyte. So as you look at that team and you go, what the hell? What are these people doing there?

And so today there's been a lot of evolution and so the way to think about it is like a lot of the labs, what they're doing is they're doing a lot of the post training and labeling data, essentially finding the failure modes in these edge cases and trying to get it better, to create data to get it better within these domains. And they're essentially paying billions of dollars for companies to give them that data.

And what we're doing instead is saying let's sign up to do the work and sign up for the outcomes and the outputs that companies value, AKA creating high quality content that drives growth and revenue for companies. And in the process of doing that, let's build the systems we need to deliver that: a scalable agentic framework and processes but with humans in the loop. And as this gets really good we can shift the burden more and more to the clients and eventually the byproduct of all this data can be really valuable data to at the very least fine tune models if not for reinforcement learning and company specific models, task specific models or whatever.

And regardless of that, the work we're doing is really valuable. So companies are willing to pay for it because it's one stop shop.

So anyway, that's like the beginning and then as far as where we're heading... So we picked a domain that I think is really valuable and it's been substantially underserved. Today marketing is one of the biggest vendors in companies and there's over a hundred thousand Martech tools. And there's like 140 something agencies in the US alone that do marketing.

And so any space you look, if the default is a flood of point solution tools that don't work and don't connect to each other and a ton of agencies, service providers and freelancers, there means there's a big gap. And so for most companies the outcome they care about is sustainable growth and compounding growth that tends to be organic growth. And their website is where most of the transactions happen and where influences everything.

Websites are mostly made out of pages. The atomic unit that goes into pages is content and it's also the atomic unit of marketing. And so if you can get content right, you get language right and you get marketing right and that gives you the right to solve other jobs to be done within marketing.

And so we picked the most valuable asset which destination is the website. We picked the output that we can influence repeatedly so we can have recurring revenue which is pages and we pick the atomic unit that is content and we build an agentic platform and framework plus humans in the loop with strategists to deliver that at scale.

And we started with the world's most trusted brands because if we can do it at the hardest level for the best brands, there's this trust cascade to do it with everyone else. And it turns out it's a massive TAM. And we have really good unit economics. In the last four months, two of the last four months we were cash flow positive. Just to give you an idea.

I'll shut up now but hopefully that was like a bit... There's just so many layers to the company. So I wanted to give you the full picture.

**Jacob Cutter:** No, it's great. Yeah, thank you. I appreciate the context. So yeah, and you were just talking about growth or growth and profitability. So that's another thing I'm curious about, like what is the market here? What's the market size? Because you said like I could see how this is kind of an interesting scenario because it sounds like there's almost, what do they call that when there's too many choices? You know what I mean? But not, you're saying not a lot of it is AI driven or very little of it. You're saying there's basically these different factions of marketing firms and human in the loop type things. Like there's sort of a lot of solutions, but maybe not something that's this agentic basically.

**Marcel Santilli:** Yeah, I mean in most domains people are still trying to figure it out. Like maybe legal AI, there's a few more players that have seemed to build robust end to end systems of work and systems of intelligence. But in marketing there's nothing even remotely close.

And so what the approach most people take is they pick one specific task within the marketing domain and they try to bolt on some good prompts and models and try to build an AI ish SaaS. And the approach we took is kind of very different. It's more let's pick a lane that is something that you have to always invest and that's really important, which is content.

And content is also driving AEO which is AI engine optimization. So how often your brand is cited and mentioned in ChatGPT and others, it turns out it became a massive category out of nowhere. But also every single legit company in the planet has a website and every company that wants to grow needs to do content. And we are I believe the best one stop solution for that.

And so the problem we have, we've done no marketing and we went from 0 to a little over 12 million in ARR this last year. And we only burned 3 million in that process and we still have about 12 million in the bank and we're not burning a whole lot.

And part of that is just because now the challenge is how do you build this into not only a framework process and people, but really a platform that allows us to scale more because people just won't scale as much. Training people on what to do, how to do it.

And I think just to show you. I don't know if Daniel shared a little bit, but if you look at like Biologica, the founder of Allbirds, his new company with his wife, they just launched. And you look at this and some of the content we've done for them. It's really the foundation of what this brand is and what they're about.

And this is really nuanced content that requires medical research. We have to cite these papers. It's not an easy thing to do. And so a lot of the work that we had to do was coming up with these artifacts, essentially context engineering, getting the inputs, coming up with the right artifacts and then building an agentic pipeline, mostly agentic. There are some steps that are not agentic, but most of them are to scale quality and figure out where should the human judgment be.

And using humans to both be input calibrators, figuring out what the right inputs, and output bar raisers, but also finding the failure modes in the outputs to give that feedback back to figure out should the input, the context or the steps of the execution be changed in order to address that failure mode.

So for instance, if you take our research agent... Just I'll show you in the studio. But if you look at our research supervisor. It's going through so many different steps. So it's validating, it's splitting in paragraphs. There's so many things that happen under the hood to drive that.

And then when you look at a pipeline where you have a research agent, you have a drafter, you have a bunch of post processing steps. This is legit AI engineering.

And so the challenge we have now is that you have all these inputs, you have the context engineering part. That's really hard. Then you have to figure out what is the right level of generalization on these pipelines and what altitude. Then you need to figure out when something is going well or not for a client before the client catches it.

But then you also have all these other signals of traffic, AI visibility and all these other metrics. Also ingesting every single page on their site and crawling every single page on their site. So it's an insane amount of data and signals for you to ingest, to figure out what opportunities to go prioritize and go tackle, how do you execute that and then how do you continuously optimize it.

**Jacob Cutter:** Yeah, yeah, yeah. I mean, I think a lot of this makes sense. There's definitely a lot of intriguing work here because one of the things that I'm kind of steering more towards is the context engineering and designing a system that can learn from different types of data and reason with it and decide how to take action based on that.

I think in terms of the role that we're or the roles that you're hiring for, it still sounds like maybe there's a couple of different things you're hiring for right now. I think Daniel mentioned there's a data science, more product focused role with metrics and whatnot. But then it sounded like the engineers that you're hiring for, it sounded where I fell into the picture was almost on this product engineering type role where it's closer to the product that you're kind of showing me.

It's like basically how to build out this platform such that we have all the context we need for sort of these different aspects of the product. So my question is kind of like, looking at my skill set in my resume, where do you see me precisely getting in here or is it still pretty up in the air on what the responsibilities would be?

**Marcel Santilli:** So one of the reasons I reached out to you and besides the fact that I really enjoy working with you is the fact that very few people I think have empathy for the business side and that are also technical and curious enough, but don't get stuck on the technicals and kind of understand when to go deep and when to be more pragmatic and get done, but also why the business cares about the thing that they're doing.

And I got from our interactions, although it was not an insane amount of interactions, I could sense that you had that more than the average person or even the above average person with similar skill set. So that was the main reason. It wasn't because you did that one specific thing. I don't know if that sounded accurate or not.

**Jacob Cutter:** I mean, thank you first of all. I appreciate that. But also I agree in the sense that I am totally aware of the fact that I am a fairly product oriented, pragmatic person as an engineer. Like even at Salesforce, I probably think more about the product and the business side than a lot of the software engineers that I work around.

And actually I think that's part of why I've been really successful as a tech lead on the voice project there because I've been handling a pretty complex piece of the voice agent there, which is the reasoning, the actual text based reasoning engine that has to hook into the business logic and all this other stuff. And I have to talk to a lot of different teams.

And so I think that's part of why I've been successful in that role is I can get technical and I really dig into certain things and I do have projects that I have to build in new features to our voice stack. But at the same time, like you said, I'm thinking about I want to build things that are usable, that actually like... One of the things that frustrates me the most is when you put a lot of time into something or build something but you didn't think it through enough so it just falls flat and then it disintegrates.

**Marcel Santilli:** What's really cool here too is so we have the really technical framework that we're open sourcing and that everything works under, if you will. We have multiple products, one that is an actual self serve product that we're launching next week, but that has been fully built and then the platform that our internal stakeholders use that in the next month or so. The intent is for it more and more to be also operated by customers, but we also have a forward deploy service.

But it's not like Deepgram and other companies where it's kind of like, hey, we do train your models for you, but it happens kind of over email and things happen and it's very structured. And so that essentially causes us to be in this place where we've never built a thing that has not been used because everything we're building is to address inconsistent outputs, quality, scalability or some manual thing that is better done by automating or by AI.

But then specifically, let me give you an example of the domain area. And stop me if it's too much, but think of it as we start with outcomes. If you pick an outcome that's valuable to businesses, you're in a really good place to start with. If you pick a feature and then you try to sell a feature, you're effed, usually.

So if you pick the right domain, even with okay execution. Deepgram picked voice AI before voice was a thing and they had the assumption that voice is the most natural way to communicate. And eventually AI is going to mostly rely on voice for a lot of things. If you pick that, things tend to be really good from there.

So we picked the outcome that most companies care about, which is growth. And think of the outcome as growth and then that's the output of the outcome. But you need leading indicators that tell you if you're doing well. And those leading indicators are today, search visibility. Do you show up in search when people are searching? And AI visibility, which is, do you get mentioned and cited when people ask about things in ChatGPT and whatnot.

That leads to engagement and traffic, and that leads to conversion or transactions. And those are growth. And so those are all the signals here.

Then the output that influences those outcomes are within the destination of your website are pages. But then pages are not just the words that go on the page. There's the HTML, there's the rendering, there's the page performance, the content, the links, a bunch of things there. All within the context of the entire site. So there's a ton of signals there.

Then the inputs to this whole system are no longer just a human making a bunch of decisions. It's the context engineering, the artifacts and everything else. It's picking the right opportunity, a topic or whatever page to go create. Then there's all the executions that happen and all the human interventions and all the context of why those human interventions were done within that.

So within one single execution of one single opportunity to create one piece of content for one output within one page, there could be thousands of inputs and outputs and executions from AI and tons of interactions from humans.

So if you look at even something like this and the user activity and what these users are doing, pipeline execution started 3200, create stop, the edits where they did it, why they did those things. That's an insane amount.

So those are the execution and activities by AI and humans. And then there's the output and then there's measuring the quality of the output and then figuring out if that output is influencing the outcomes you care about.

So we're in the process where we're close to closing the full loop where you have pages, which is a crawling system that crawls all your pages on your site. The search visibility and traffic, which is just ingesting what's happening. Opportunities, which is taking a bunch of those signals and identifying what kind of topics and things you should do based on your Personas or something else. Where it's identifying and thinking all of that, your context engineering, AKA your brand kit and whatnot. And then how you execute all of that, which is the pipeline, which was the hardest part. That combination of both workflows as well as human reviews.

And so once you close the loop, not that it's all perfect, but now you have potentially a closed loop reinforcement system here where... And now it's about how do you take all these signals and figure out what actions to prioritize that will optimize for the outcome that you care about, which the leading outcomes are AI visibility and search visibility, that then leads to traffic and that then leads to engagement and conversions.

So that probably sounded crazy, but we're so close to that and we have such good primitives and foundation that once we close the loop, which is why we care about hiring this role. We need someone that knows the AI engineering and the engineering side. Understands the business and empathy for the business and the domain, but also understands that there's a lot of data here to figure out how to act on in a pragmatic way. That's not like, hey, let me go work on this for a year and figure out what to do.

**Jacob Cutter:** I see. Yeah. I know we're over time, but I don't want to take all your time. But if you're happy to stay on, I have maybe one more question.

**Marcel Santilli:** Yeah, yeah, I have the next 30 minutes too. So happy to stay on but also happy to grab more time later too. So up to you.

**Jacob Cutter:** Yeah, maybe I'll ask one more question if that's okay. Yeah, no, but yeah, I mean, I guess all of that makes sense and I kind of see the challenges there. So I think from what Daniel was telling me, simultaneously you're looking to basically... So you're basically hiring for a couple of different roles. Do you know yet how you're divvying things up between those roles like data science and the analytics side versus... I think he said you were hiring for basically two different engineers. Like an AI...

**Marcel Santilli:** Honestly the way the roles are shaped is because it's very rare to find people with a profile kind of similar to you. In the sense of that could play both roles and it tends to be like there's folks with more of an ML background, then there's folks with more of a data science background. Then there's core principal engineers that have been a little bit resistant on AI and maybe played around with a thing or two.

Then there's AI engineers that are not great engineers. They're just like have done a lot of AI stuff that kind of works. And then there's product minded people that maybe are okay engineers. So there's a lot of different things.

And so from us, all the people we hire in interviews and what we've learned, it's kind of like it's going to be really difficult. If we shape the role in one way, it's going to be like finding a unicorn.

So at the end of the day what we care about is finding the right people with the right profile, with the right approach. And if we find that there's quite a bit of agency here for someone to come in and own end to end and work on the things that are important and the right things to work on.

And so we are not overly structured whatsoever. It's more like, I don't want to say organized chaos, but it's more of like we very much take a mentality of everybody should own things end to end. And it's not like product does this, design does this, engineering does this, AI does that. It's really end to end. Ideally.

**Jacob Cutter:** Yeah, no, that makes sense. Cool. Yeah. So just so I don't take all your time. I kind of wanted to ask one more thing. Just full disclosure. So I did want to ask about... This is kind of random, but we are a growing family. So in terms of timeline, do you guys have a friendly parental leave policy? Is that... you know, six months or however many months down the road.

**Marcel Santilli:** Yeah. One thing I'll say is that obviously I value that a lot personally. And so we try to be very generous. I don't want to misquote our parental leave policy for the US. It's slightly more generous on the parent giving birth.

And just within our engineering team, we've had three brand new parents in the last two months. There you go. And almost every single person in the leadership team either has kids or has a two or three year old or is going through a process or is very close to taking leave.

And so anyways, the reason I'm hesitating is just because this stuff is very like what you are allowed to say, not say in interviews. But hopefully you know of me enough to have a few signals of character on that front.

**Jacob Cutter:** Yeah, no, honestly, I wouldn't have even brought it up. The main reason was that my call with Daniel, it sounded like he was basically saying, okay, this role that we're hiring for, especially if it's someone who has a pretty well rounded skill set. This is effectively someone we would be building an AI team around to some extent. Or this would be a person that has, like you said, a lot of agency.

And so to me, that also kind of raises that concern of like, is it going to be a catastrophe if I step out for a couple of weeks? Or a month or...

**Marcel Santilli:** Yeah, yeah. So yeah, honestly, what I would say to that is as important as everyone is, no one is irreplaceable.

And I think right now we have someone in the leadership team that's a few months away from stepping away for a few months or more. And also we've had folks that, someone on the engineering team that started and within a month took some leave with the newborn and has a growing family. And we had to move a few folks around because it was in an imminent timeline of launching CheckThat. Which is the product we're launching in a couple of weeks.

But it's like we didn't really miss a beat. There was just a little bit more planning obviously as a responsible professional of trying to plan ahead and not leave team hanging or making sure people are aware, communicating and things like that. But I wouldn't worry about it. Yeah. As far as working with us related to that.

Because it's something that is very important to me and I've worked at toxic places that were kind of messed up. So my bar for this company is like, I want to build a kind of company that I would be... If my daughter wanted to work here and not like stay away, it's messed up. Which is very few companies I've worked for. I would allow my daughter to work there when she gets older. That's kind of the bar.

**Jacob Cutter:** Yeah, for sure. No, I mean, and I appreciate that. I think that's comforting because not all startups are equal. Right. When it comes to that mentality. Or like they might offer the time off, but there's a lot of pressure to either not take it or whatever.

And obviously, I know, like you said, I know your character enough to know that you care about creating a good environment.

**Marcel Santilli:** Yeah, I feel like you can't fake ambition or force or try to artificially create it. And people need to be excited about the work that they're doing, who they're doing with the domain, the company, and when they feel taken care of and they have it in them.

If they don't have it in them, then that's obviously a problem. If they're just like, I don't really care about what I do, I don't have pride in my work. That's a different thing.

But when they do. But you also like they feel taken care of and that you care and there are going to be times where it's going to be hard but that's part of it.

But I very, very rarely work on weekends. Daniel is really intense, but he's in a phase of his life where he knows that there's kind of a closing window on his ability to be as intense as he's been. And he really, really cares and I really, really care.

So I tend to just be really intense. Because him and I have the most skin in the game and so we don't expect everybody else to be as intense as we are, although some people are.

And so I just start my day earlier, but then at 4:30 to 7:30, 8 o'clock, it's family time. And so I try to really protect that. And so everybody else. There's so many people that are in that invested phase of life.

And I think because we're also remote first, I think there's even more flexibility to adapt to your life outside of work to make sure it's a healthy... You feel good about both sides.

**Jacob Cutter:** Yeah, for sure. And just for context on my side, some people think maybe big company is more laid back or something like that. But I will say doing the voice thing at Salesforce, since the startup I was in got acquired, which was 10x, we've been operating like a high paced startup within Salesforce ever since we were acquired.

So it's definitely been almost a sprint for the last year. So I'm definitely used to maybe high intensity work. But I think it would be refreshing to kind of in some ways get back to that true startup mentality which is building something cool.

**Marcel Santilli:** What's cool about us? Obviously I'm super biased. But I'm very fiscally conservative but also decently ambitious and I want to win and I feel like I have a lot to prove overall. I've always had that chip on my shoulder.

And Daniel is honestly one of the smartest, hardest working people I've ever met in my life. And we would not be here if it wasn't for him. And we complement each other very, very well and we challenge each other but we also have our lanes.

And so I think that kind of reflects in the company and the culture but also because I'm fairly fiscally conservative. We operate the business in a very de risked way. Like our financial model, everything else.

How many startups have you heard of that have been profitable and then after being profitable raise money and then after that went from burning a little bit of money to then turning cash flow positive? So we manage because I don't want to be in a situation where it's just like, we're in trouble, we gotta raise money.

And so I'm taking a fairly like... I'm all in. So I'm taking a fairly approach to make sure this company's here for the long term but also not leaving opportunity on the table.

And I think you do that better when you pick the right primitives and the right domain and you are building it for yourself because the pain of experience and it's so much better. It's not like I don't know what we should do next, let's go talk to 100 random people and ask them.

So anyways, I would love to... We're open book. And I think there's already very high trust and signals because we worked together too. And so but I also know how big of a decision is, so love to continue the process.

But feel free to text me or we can grab more time because this is such a critical role but also really hard to find the right profile. So I think it would be really awesome if we somehow get to work together again.

And I think the last thing I'll say also is because we didn't raise any money before when we did our Series A, we only have one investor, which is Karan, which I have an insanely good relationship with. And so there's not a lot of external voices. We control the whole company. It's fully within our control.

We also didn't hype up the valuation, so our exercise cost is fairly low. And our valuation multiple was also pretty low. We kept everything fairly conservative so that there's way more upsides for employees as well.

And so we've also are barely... I try to be very employee friendly because I've been screwed over in equity multiple times. And so we do a one year exercise window after if someone decides to leave. And then our intent is to do one year for every year of tenure after that.

And so there's a lot of situations, including what's happening with Deepgram right now. It's like if you try to exercise your shares right now, you're going to owe a stupid amount of taxes. If you do an exercise early and things like that.

And so it becomes really prohibitive for most employees to exercise their shares after a while also if you pump valuations too fast and things like that.

And so there's a lot of those considerations of try to do the right thing for employees and make sure there's a lot of upsides for everybody.

And when you're not having to hire like crazy, you have good unit economics and you've been smart about fundraising, then there's a lot of optionality on the table and it benefits everyone as well.

**Jacob Cutter:** No, that's great. That's good to hear. Cool. Yeah, I mean, I'm honestly, I'm happy to continue the conversation. And I saw that there was a, the next interview was with someone named Katya who I guess is a consultant or an advisor.

**Marcel Santilli:** Yeah, yeah. So Katya is a data scientist at Mercury and so she's been a consultant advisor and she's actually Daniel's wife. And as we're going through this process as well and several months back, we really needed help, didn't have the time to go find the right person and hire and things like that.

And so she's been doing consulting and helping and pretty hands on. But she's also intimately familiar, obviously with the business because there's very little separation on that front. But she's awesome. I think you're really gonna enjoy her. And she's super insanely smart as well.

**Jacob Cutter:** Cool. Yeah, yeah, I'll probably, I think I'd be good to schedule with her, but I mean, I think based on this conversation, I feel pretty good about proceeding with the interview pipeline. So I'll probably set up a thing with her, but I'll let you know if I have other questions and hopefully I can send those your way if something...

**Marcel Santilli:** Please, please do. Yeah, and text me anytime too, and then we'll go from there.

**Jacob Cutter:** Awesome. Yeah, appreciate it.

**Marcel Santilli:** See ya.

**Jacob Cutter:** Talk to you later.
