# Reggie Edwards - Virtual Onsite | Data Scientist

---
title: Reggie Edwards - Virtual Onsite | Data Scientist
date: 2026-01-20
participants: Marcel Santilli, Reggie Edwards
meeting_type: Virtual Onsite Interview
duration: 43 minutes
organizer: marcel@growthxlabs.com
fireflies_id: 01KF9PN6FJZZA4WWT7FDQD3HCB
---

## Summary

Virtual onsite interview with Reggie Edwards, a full-stack data scientist with experience at Netflix and Integral Ad Science (IAS). Marcel and Reggie explored his background in ML engineering, content understanding, and generative AI. The conversation covered GrowthX's approach to content optimization, the parallels between Netflix's content analysis and website page performance, and the advantages of building an AI-native startup.

## Context

This was a leadership interview as part of the hiring process for a data scientist role. Reggie had already gone through earlier interview stages and demonstrated technical capabilities. This conversation focused on cultural fit, strategic thinking, and mutual exploration of how his background aligns with GrowthX's mission.

## Relevance to GrowthX

**High relevance.** Reggie's experience directly maps to GrowthX's core challenges:
- Content understanding across modalities (text, images, video) at IAS
- User engagement analysis and content optimization at Netflix
- Production ML deployment with Kubernetes, Docker, TensorFlow
- Balancing inference costs with model performance
- Deep interest in text analysis and what makes content "readable" and engaging

His background in NLP, literary understanding, and content measurement aligns with GrowthX's need to understand page-level performance signals and optimize content for AI visibility, search, and conversion.

## Overview

- **Candidate Profile:** Full-stack data scientist with PhD background, experience spanning startups, Redfin, Netflix, and IAS
- **Technical Depth:** Hands-on with Kubernetes, Docker, TensorFlow, fine-tuning LLMs, multi-modal content understanding
- **Content Focus:** Strong interest in what makes content engaging, rewatchable, and readable
- **Business Awareness:** Understands inference costs, build vs. buy decisions, and operational efficiency
- **Cultural Fit:** Aligns with GrowthX's AI-native, lean, founder-driven approach

## Key Topics

### Reggie's Professional Journey
- Started in quant risk at a bank, then PhD, then early-stage computer vision startup
- Transitioned from data scientist to "full-stack data scientist" bridging ML engineering
- Netflix: statistical analysis, experimentation, generative AI projects, content understanding
- IAS: Multi-modal content understanding for brand safety and suitability across YouTube, Snapchat, Facebook

### Content Understanding Parallels
- At Netflix, proposed research on what makes TV shows rewatchable by analyzing drop-off graphs and text features
- Drew connection between Netflix's content engagement analysis and GrowthX's page performance optimization
- Key insight: Text is cheaper to modify than images or video, making it the optimal playground for personalized generation

### GrowthX Business Model Explained
- Pages are the atomic unit of value, like movies/episodes are for Netflix
- Canva example: 100k pages generating 280M monthly organic visitors worth $800M in equivalent ad spend
- Reward function: AI visibility → search visibility → traffic → engagement → conversion
- External signals available via APIs: backlinks (Semrush, Ahrefs), indexing status, keyword volume, competitor analysis
- CheckThat AI launching next week for AI citation tracking

### AI-Native Startup Advantages
- GrowthX incorporated just over a year ago, giving advantages in how fast they can build
- Marcel submitted 18,000 lines of code on a Sunday (without being a traditional coder)
- Founders are domain experts who can do almost any job themselves better than most hires
- Trade-off: Finding people who are both craft masters AND AI-native is rare
- Company went from $1M to $12M ARR last year, burned only $3.5M
- Three of last five months cash flow positive, ~70% gross margin

### Brand Safety Context
- Reggie builds models for "fashion negative" detection at IAS (avoiding ads next to fast fashion criticism)
- Understands the importance of content alignment and risk mitigation
- Curious about visibility into AI-generated prompts and conversations for targeting

## Action Items

**Marcel Santilli:**
- [ ] Provide Reggie access to the AI.com community for additional context on the business
- [ ] Continue engagement to explore potential collaboration

**Reggie Edwards:**
- [ ] Contact Tucker to request access to the AI.com community

---

## Full Transcript

**Marcel Santilli:** Hey Reggie.

**Reggie:** Hey. How's it going?

**Marcel Santilli:** Really good. How are you?

**Reggie:** Good. Can you hear me and see me okay?

**Marcel Santilli:** Yeah, yeah, now I can. How's that? How's the beginning of the year treating you?

**Reggie:** It's been, it's been going. I can't believe it's only like not even three weeks in. That's wild.

**Marcel Santilli:** I know. Yeah, it's like, man, this year already started kind of wild, you know, like so much going on. But how has the interview process been so far? Like everyone you talk to, what's your overall feeling assessment about the company and the role?

**Reggie:** It's been good so far. I feel like this early in I usually don't get as much insight into actually how the business is running with the technical challenges and the spaces. It's usually so much upfront, just like me being evaluated, which is fine, you come to expect that, but actually get to dive into the platform a little bit and see you guys tech stack and workflow. That was really cool. That usually doesn't happen until maybe the first week you start somewhere, not in the interview stage.

**Marcel Santilli:** That's awesome. And love to also maybe before jumping in as much as like I can look your profile when it's always nice to hear a little bit of like how you tell your journey story, you know. And then happy to kind of jump in after that.

**Reggie:** Yeah. So I'd say, you know, I've held roles we call data science machine learning like across the full stack most of my career. My background was more on the econ math stat side. So I spent some time at a bank doing quant risk data stuff for a bit before grad school. Somehow after I finished my PhD, I ended up at a startup doing early computer vision work as thoroughly unqualified for. But I was a pretty decent coder at that point. As much as anybody coming out of academia is, I had some pretty good data engineering skills. I was honestly more on the NLP side but it was a really early group. I was one of the first 12 employees, one of the first three data scientists, machine learning folks. And it was really more of a machine learning engineering role. And so it was great because it helped me cross that divide from being a data science type person to being also a somewhat capable, maybe half dangerous machine learning engineer as well.

**Reggie:** We started using a lot of the tools in the modern ML Stack that were just coming online like Kubernetes and Docker, dockerizing everything. Early TensorFlow, our main job was basically some big AI lab like Facebook AI Research Fair at the time would put out a computer vision paper and then we would try and get it implemented in TensorFlow so we could actually deploy it in production. I think a lot about Claude code now and I'm like, my God, if we'd had that when I was at this startup because we just kind of crank out code all the time, it would have been incredible.

**Reggie:** So I did that for a few years, that was a great experience. Ultimately that startup was kind of the worst kind of failure because it was this very slow failure. So after that I went back a little bit more towards the data science side. So doing more actual modeling, statistical analysis, more classic machine learning work, some forecasting stuff. I was doing that at Redfin for a while. Redfin in its own way, maybe on bad luck, was also kind of a slow failure. That company, hopefully you're familiar with just real estate company, has never ever turned a profit and it was IPO'd and then just got taken private like two years ago, never having once turned a profit.

**Reggie:** But while I was there, nobody was growing, no equity was getting refreshed. They'd actually done some kind of voluntary attrition strategy. They were like, okay, we're not going to give anybody raises or equity refreshers and just wait for people to leave enough to lower our operating costs. But I got reached out to by somebody at Netflix for an amazing opportunity there. It was kind of like the culmination of me becoming more what I like to say is a full stack data scientist. Because Netflix involved the classic statistical analysis and experimentation, machine learning like tabular ML data analysis. But also the time I joined generative AI was becoming a thing. So I had some projects that were in the NLP and computer vision space. ChatGPT gets launched and everybody's project just pivots to using generative AI. It was an incredible time.

**Reggie:** Netflix was all in on not doing things themselves, but really investing in getting people up to speed on how to use the tools that were coming online. So early fine tuning models, thinking a lot about evals and when a new model is dropped on Hugging Face, how suitable is it for our use case. A lot on build versus buy decisions with the technology. They were adamant about like we're not going to race to put $2 billion into training a big foundation model yet, let's see what these tools can do. Sort of de-risk the technology, which made some business sense. It was kind of frustrating from a technical perspective. A lot of people there, me included, felt Netflix was being too conservative on the generative AI front.

**Reggie:** Internally, we tried to use it as much as we could. So I worked on a lot of internal use cases for speeding up workflows, like human in the loop tools for looking at Netflix content and lots of tagging we do of series and movies. But externally, I don't know how much you keep tabs on the media industry. There are writer strikes, there's all this going on and they're just like, we're not going to really touch it yet there. They actually lost quite a few people because they were so conservative. A very senior VP level there on the technical side, she left to go to Roblox. Actually a ton of Netflix people went to Roblox. They were just throwing so much investment into generative AI on their platform and it just became a much less technical place.

**Reggie:** Netflix was clear the winner in the streaming wars. It's a very well run company, but also benefits from some of the laziest competition in the tech world. If you think about Amazon, who Amazon competes with versus who Netflix competes with, it's night and day. So that kind of, you could become a victim of your own success. It became less engineering data driven and more PM driven. I talk to people who've been there a decade and they're like, this is so different than how it had been historically. Netflix is in the process of trying to buy HBO Max. That's not a data analytics driven decision. It's like you're going to spend...

**Marcel Santilli:** Oh my God, what is it, 34 billion or something?

**Reggie:** It's more at this point. But essentially that investment decision dwarfs all other low level investment decisions that we would make as data scientists. It's like, okay, over the next 10 years, Netflix will live and die based on whether or not that acquisition is successful, not how we're experimenting with things on the homepage. That said, it was a great company, it was a great time to be there.

**Reggie:** I ended up at where I am now, this company, Integral Ad Science, essentially doing the exact same work I was doing at Netflix. Working on content understanding across modalities, text, images, video, audio, just for a different use case. So applying a lot of the same generative AI tools, looking at modeling capabilities, evaluating models that are coming out every week, fine tuning where appropriate and getting those into production for IAS use case, which is sitting in between advertisers like Ford, Disney, Coca Cola, platforms like YouTube, Snapchat, Facebook and then users who upload user generated content.

**Reggie:** You can imagine there's like, okay, we're trying to advertise next to things that's just being put on the web. And you guys understand how this works very well. You want things that are aligned with your brand. If you're an advertiser, you want to avoid certain things and you want to be shown next to specific things too. Most major platforms and even the open web itself outsources a lot of this to platforms like IAS. If you use something like Brave Browser, DuckDuckGo, you will see it blocked some trackers from IAS and some other services that are doing this on the sites you visit. So we ingest a lot of the open web and mobile app data to do the sort of content filtering.

**Reggie:** And again working for me across the full stack, I have lots of conversations and projects with our ML Ops folks and back end engineers, but also doing statistical analysis on trying to estimate difficult estimation challenges that we face for our services that are running live, evaluating vision foundation models, LLMs, fine tuning those as necessary and even worrying about, because it's a much smaller company than Netflix, inference costs and an eye towards inference efficiency and making sure we don't blow through AWS credits.

**Marcel Santilli:** Yeah, that makes sense. And as you've kind of learned a little bit more about us and our domain and how we're approaching things, what parts of it have energized you so far? Like, oh that looks like a challenge worth working on for me.

**Reggie:** Yeah, so I can answer that with a project I was working on at Netflix that actually got showed by quite a few things. When I joined Netflix there was this notion of creative excellence, basically what makes a TV show or a movie interesting. And so that's a huge thing. The simplest answer is, well, whatever people watch must be the good thing. It's like, okay, sure, I've watched enough bad TV to know that's not true. Even when you're not actively miserable watching a show, sometimes you just put something on or whatever. It's the best available option, not necessarily a good option.

**Reggie:** And me having background in more classic NLP and even literary understanding, content understanding, I thought this is a fascinating challenge. We had a massive quantity of both user interaction data, like who watches what, and also scripts and dialogue and all this information about series and movies. And so we had a huge off site one time and they were like, let's have ideas for how we should go in this direction. I proposed a research program for understanding features of text that make things rewatchable, that make them engaging.

**Reggie:** One thing, if you look at the data for a TV show or a movie is even better. If you look at the time of viewership, we have these drop off graphs so you'll see this percent of people are watching and increase and that at certain points, maybe 20 minutes in, a bunch of people drop. Why? Can we work to understand that? Or why do people even start something?

**Reggie:** This idea of trying to sort of put a taxonomy, analyze, some might say taking the magic out of what makes good written content, especially what makes something readable. Even in grad school, because I was working a lot with company filings and economic data, I was thinking about trying to get a measure of readability. If a company puts out a press release, is that more or less readable than some other press release? If they make some piece of disclosure to the government, are they deliberately trying to make it less readable, obfuscate, whatever.

**Reggie:** But yeah, this notion that we can actually extract, take some of the magic out of what good content is, what good writing is. And personally I like to write a lot, but I'm also a nerd. I intellectualize these things as well. It's like, okay, why does this work? If you even think about a joke, you explain to somebody, we all have that friend. You have to explain every joke. You're like, wait, why is that funny? I'm like, no, no, it's funny.

**Marcel Santilli:** Let me explain to you jokes, you know, like my dad jokes, like, no, no, it's funny. My daughter thinks it's funny. She's cute.

**Reggie:** Yeah, exactly. Or if it's just a really big comedian. And then everybody's like, oh, why does that work? I'm like, well here's why it might work. I'm not going to explain the joke. But this idea that we can try and understand these things at scale is really fascinating to me.

**Marcel Santilli:** Nice. That's really cool. Because are you familiar with Basecamp?

**Reggie:** Yeah, absolutely. I have DHH's books. I'm from Chicago. They're big in the Chicago tech scene.

**Marcel Santilli:** Yeah. Because Daniel, his last startup was a spin off from Basecamp. And we have a few engineers from Basecamp that were at Basecamp at some point. And Ryan Singer, are you familiar with him?

**Reggie:** I don't think so.

**Marcel Santilli:** Like the Shape Up method. He's the co-author, he's the chief product officer there at Basecamp for a while.

**Reggie:** Yeah. Okay.

**Marcel Santilli:** Anyway, we just had a shaping session with him today. He's part consultant advisor for us essentially. But the reason I bring it up is because that's literally the thing that we're really trying to figure out how to shape. Just to give you the mental model here, one of the most valuable assets for a company is their website. If you think about, let's take canva.com, very successful startup. They've been profitable for 10 years. They have something like a hundred thousand pages on their website and they generate about 280 million visitors per month organically.

**Marcel Santilli:** So if next month they say marketing team, I want everyone to go home and not come back for a month and they say sales team, I want everybody, essentially I want everyone to go home, the whole company, keep the infra on and that's it and just keep the lights on. They would still generate 280 million visitors that month. And that 280 million visitors that month is worth about $800 million if you were to try to use advertising, acquire them to come to your site.

**Reggie:** That's crazy.

**Marcel Santilli:** So every month they generate $800 million worth of traffic for free. So how did they get there? And they're one of the few startups that are profitable for the last 10 years and are worth $30, $40 billion today. Arguably they done something right. Potentially could be worth even more if they went public, but there's no need to. They're generating billions of dollars of free cash flow every year.

**Marcel Santilli:** And so it's because they created pages. Visitors come to pages, just like people come to Netflix because of the content. The pages is the unit of output, just like a movie or an episode or a thing you watch on Netflix is the unit of output. Pages on a website are the unit of output in content. You can think of content as the atomic unit that goes on those pages.

**Marcel Santilli:** But then if you're a company, you have context of the company and then you have the competitive landscape. And at the end of the day you're trying to prioritize what pages to either create, modify or delete, to optimize for this reward function, which is the outcomes you care about. AI visibility, like you show up in answers, search visibility, show up in search results that then lead to traffic, that then lead to engagement and conversion. That's your kind of reward function of your outcomes you care about.

**Marcel Santilli:** So everything we do for clients is trying to figure out what is the right engine that can identify the right opportunities to create new pages or improve existing pages within the context of that company and their whole overall space in order to achieve this outcome. AI visibility, search visibility, traffic engagement and conversion. And what is the right combination of priority picking the right opportunities and then working on it with workflows plus human inputs in order to achieve this thing?

**Marcel Santilli:** There's a lot of parallels to Netflix and others because of that. But then there's all these signals. When traffic is going down on a page, is it because the page is broken? Is it because a certain thing on the page is off? Is because competitive pressures? Because Google made a change in their algorithm. There's all kinds of things to measure, like page health, the quality of the page, the traffic and reach score of the page, the engagement of the page and the conversion of the page. Those are some of the things that have been really shaping this.

**Marcel Santilli:** Because it's a combination of legit signals. Like has this page been indexed? Yes or no. Is the speed slow on mobile or desktop, all the way to contextual things that before without LLMs was impossible. And then it's combining that. But what is the right combination and what is the right level of abstraction so that you don't over complicate things because our customers, the operators are the forward deployed delivery people. They don't want to look at 300 signals and then make a decision on what to do. They want to look at maybe a score or just like, tell me what to do here.

**Reggie:** Yeah.

**Marcel Santilli:** And what is the correlation between the context and inputs, the work itself that happens, the output and the outcome? And how do you prioritize the right work and then execute that work the right way so that the output gives you the best shot at having a positive impact on the outcomes you care about?

**Reggie:** I wanted to go back to something you touched on, which is, we have the page, which is our fundamental unit of analysis, but then the competitive pressure. If something's happening across a company's suite of pages, where do you look for signals to figure out how to attribute because of stuff that's on the page versus stuff that's outside of the content itself?

**Marcel Santilli:** Yeah, that's a good question. Luckily it's a very well defined thing in search. And so there's a lot of signals and APIs available to ingest those signals that give you information. Like backlinks. You don't need to go build an engine to figure out external backlinks. You can know who links to that page externally in the world. There's Semrush, Ahrefs, there's a bunch of different APIs. There's things around whether or not this page is indexed by Google or by Bing. There's no chance you will ever get cited or show up in a search result if you don't get indexed. So that's like a table stake thing.

**Marcel Santilli:** But then there's things like keyword volume or the intent of those keywords. And then you can also go and look at all your competitor sites and look at what pages are on their sites and how authoritative those pages are and what content exists in those pages and what keywords those pages rank for and even estimate how much traffic they get organically.

**Marcel Santilli:** So by doing that, you can figure out all the lookalike pages to the page you're creating or that you've already created and figure out if there's any changes here in terms of estimated search traffic. However, for AI, ChatGPT doesn't open up that data, so it's all estimated. So you have to probe ChatGPT on a simplified version of a prompt to know whether the brand that is our client is getting cited and mentioned and whether how often their competitors get mentioned too.

**Marcel Santilli:** Which is one of the products we're launching next week that's fully built, called Check that AI. But then we can ingest that data too. So the good news here is there's no, this doesn't exist, let's ingest something that has never been ingested before. As far as external signals, the part that no one is doing is scraping the page and understanding the pages, having really good context, the context engineering of that and then ingesting all the analytics, all the external signals and then correlating all those things into taking actions, but in a way that doesn't boil the ocean either. You can't spend two years trying to make this perfect either.

**Reggie:** Yeah. So is this real? I briefly saw a tweet about this. I think that OpenAI is finally trialing ads in ChatGPT. Somehow it has to come at some point. I don't know how real that is.

**Marcel Santilli:** Yeah, it's real. They've hired people. But them making ads available and them making their fundamental data available are two very different things. Because for you to estimate volume of a prompt would be really hard. So you could say, hey, you can estimate 10 million people this month interacted with ChatGPT around shopping for shoes. At that level you could do it. But how actionable is that to a brand? Not very. It's actionable in terms of you saying, hey, I'm Nike, can you please show my shit when people are in this bucket.

**Marcel Santilli:** But it's mostly for consuming for brands, B2B brands and things like that. It's like you need, how many people are querying or using, interacting with ChatGPT around application security platforms and also live in the US. That's the level you need. And whether they're going to do that or not, TBD.

**Marcel Santilli:** But also regardless, they don't have a monopoly. They're just a very big player. Gemini has gained market share and search continues to grow. So it's not like ChatGPT is the only game in town. It's just a big game in town now and it's a black box game in town. But all of this is good for our business because it's creating this urgency for brands to create more content in order for them to influence the results in AI answers.

**Reggie:** Yeah. And then you kind of touched on this. Coming from my work, this idea of brand safety, brand suitability. If you're Nike, I think you definitely need more than are people searching or talking or having conversations around shoes. So a big piece that we look out for and that I've built models around is something called fashion negative. So if you go on TikTok, there are a lot of influencers complaining about the fast fashion industry, the environmental impact of that, the labor conditions where these things are produced. And it's just like okay, Nike doesn't want to advertise next to that.

**Reggie:** And so I'm curious what visibility on these, whether it's Gemini or if Claude ever does it, ChatGPT, to know why, the context around the prompts that are leading people.

**Marcel Santilli:** The way to maybe think about it is a lot of what works for consumers, for businesses mostly, which is not 100% of our business but it's a huge chunk, B2B mostly software technology enabled businesses. It is gaining a deeper understanding. Let's say I'm selling a platform for data scientists. I want to gain deep understanding of that audience and I want to understand that company and the personas they go after.

**Marcel Santilli:** Like a data scientist and what my product and the jobs to be done and the pain points it solves. And then I want to map out all the potential questions or topics a data science within the domain of the company that operates this cares about. And then I just want to systematically create the best resource on the web for that question or that topic.

**Marcel Santilli:** And that's effectively what we do for companies. And if we do that and you do some of the basics and you measure it, from our experience every single day you're publishing new content and you're improving the existing content you have. On average, it dramatically increases your chances of increasing your visibility and traffic and conversion.

**Marcel Santilli:** So we're a lot more worried about, it's kind of like I would imagine a lot more of what Netflix spent time on at least on the product experience was more of how do you create and serve and merchandise the content. And the catalog of content and the discoverability of that content. Way more than what makes people come to Netflix necessarily. Because that's a different domain.

**Marcel Santilli:** And so for us, it's a little bit of a mix, but it's still a lot of understanding when we take an action like publish a page, and then you see things go up or down or do nothing, what does that mean? And how can that inform what we do next, what pages we create or how we change that page? Because that page is not working.

**Marcel Santilli:** It's almost like a movie. You could modify the movie once you had the insight of why people dropped off.

**Reggie:** Yeah, which is, instead of figuring out what else in the catalog can I serve them next?

**Marcel Santilli:** Yeah, more of how can I modify that movie so that they don't drop off in that chapter? Because that's causing people to not come back to Netflix.

**Reggie:** Which is a dream and a nightmare for different people in the industry. Exactly what you just mentioned.

**Marcel Santilli:** It's a crazy long time from the whole thing to I can't change the thing yet. Whereas with content, you can change it really quickly. You just have way less signals. You don't have the same kinds of signals, and you don't have as much of those signals. You don't have 10 million viewers and all this data on the viewers, their likes and whatever and their entire history of watching.

**Marcel Santilli:** You're not going to have as much of that user behavior data to use. It's more of we have a lot of contextual data on the personas, just not on the individual actual people's behavior in relation to that. But then you can also change the content itself pretty easily.

**Reggie:** This idea of personalized generation is something I'm super interested and excited about. And I think text is the optimal playground for this, even if the feedback signals are a little slower moving, lower throughput, because you have fewer interactions compared to something like Netflix, which is a lot of user interactions.

**Reggie:** It's a great playground for technical innovation, because text is just so cheap to modify as well. And if an image is worth a thousand words, then that's just way too much data at this point, given the capabilities of models and inference costs or whatever to both understand what somebody is responding to in imagery and video and then change it on the fly. But text, we could figure a lot of this out very early. So again your question, what interests me about this space, this is definitely one of them.

**Marcel Santilli:** That's awesome, man. Unfortunately, gotta run. But anything before I do that would be helpful to give you as far as context? We're obviously super excited about you and potentially working together. But are there any, anything that from being a founder CEO that would help you clarify anything for you in your mind?

**Reggie:** Yeah. So this isn't about what we've been talking about specifically in the role, but I am curious because you are a founder and getting something off in the AI space, how are you guys thinking about building an AI native startup? I can think about so many businesses and places I've worked. If I started this company from scratch today, I wouldn't do this, I wouldn't have this whole department, you'd say so much leaner.

**Marcel Santilli:** It's yes and, kind of thing. Because I think a lot of it, the fact that we've been in, technically incorporated for just over a year, we've been in business a little more than a year, but incorporated technically a year from today almost to the date, official C Corp incorporation.

**Marcel Santilli:** And because our delivery model at first was service, it's actually a huge benefit because we didn't corner ourselves into a platform that people already bought into that you can't change anymore. And also, even if we did start with a platform that clients operate instead of us operating for them and giving them the outputs, even then we were started recently. So it gives you all these advantages of how you build, how fast you build, how you think about it.

**Marcel Santilli:** And I think what I've seen the biggest unlock here is the fact that on Sunday I submitted 18,000 lines of code myself. And I'm not a coder, without reading. But a lot of it is just me having really good context. And we're building for me, meaning I am the CMO, I am the person that operated this thing for 15 years. So we don't have to go out in the market and be like, let me talk to 18 marketers and see what kind of faster horse they want. It's more like, no, no, this is how we're doing.

**Marcel Santilli:** So me and Daniel being insanely AI native and being domain experts and working on it, but also being masters of our own domains, me on go to market marketing and running the company and him on product and engineering. AI really helps because there's no job in this company that one of us can't do ourselves better than almost anyone else. With some very few exceptions, I probably can't do accounting better than our accountant.

**Reggie:** Yeah.

**Marcel Santilli:** Always hire a CPA. Or I can't be better than our lawyer and don't want to. You don't want me to either.

**Marcel Santilli:** And so that allows us to move faster because of that. And also the combination of AI native and then I think the challenge becomes the trade off between finding someone that's really good at their craft versus someone that's truly AI native. And you try to find and it tends to be a bit of a spectrum in a lot of roles.

**Marcel Santilli:** If you hire only insanely AI native engineers, you might not actually hire the best principal engineers, but they're really AI native and can generate a lot of outputs. But they're not necessary. And when you hire the best possible principal engineers and hopefully they're not averse to AI, but then there's kind of this learning curve. So there's this trade off.

**Marcel Santilli:** In a perfect world, you hire the best of every role and they are all insanely AI native and insanely productive. But the likelihood of you being able to afford and find those people and poach them from places is very unlikely. So you have to pick somewhere here. And I think we've been somewhere between middle and here for some roles, and then for some roles we're here and then others here. And there's pros and cons of all of that.

**Marcel Santilli:** But then the gravity of companies trying to just hire, it takes so much effort to just contain that because everyone's immediate thing is like we need to hire more people. And so it's easier to contain that being a mostly AI native company. But it's still not a given. People still want more people. I just need more headcount. It's like, yeah, you got to just no, no, stop and try to build leverage.

**Marcel Santilli:** But we went from a little over a million dollars to 12 million in ARR last year and we burned three and a half million. So our efficiency is crazy and we've had three of the last five months where we're cash flow positive. So for a series A startup, growth stage, that's pretty amazing, rare. We have close to 70% gross margin. So we're in control of our destiny and that's the most important thing, that we're making decisions and in control of our destiny.

**Reggie:** Yeah, this is great. I know you said you got to go, but I really appreciate this. I feel like I got a good insight into how you think and how you guys are.

**Marcel Santilli:** Yeah. And by the way, if you're curious, we have this community where if there's additional context of the business that you're just curious on, just let me know, just let Tucker know. It's called AI.com, but I can ask, Tucker can ask the team to just add you for free. It's a paid community that we built that has all our content. All the workshops I've done, it's not super technical, it's more for non technical people to learn how to use AI to do the work we do. But there's some two hour workshops there that I've done and things like that, that if you're ever curious, like, hey, I want to see if they're full of shit or not or let's learn a little bit more how they, why so much traction on the business too.

**Reggie:** Awesome. Yeah, I'll ask Tucker about it. Appreciate that.

**Marcel Santilli:** Awesome. Reggie, lovely talking man. Excited to keep this going.

**Reggie:** Yeah, absolutely. All right, have a nice afternoon.

**Marcel Santilli:** You too, man. Take care. See ya.

**Reggie:** Bye.
