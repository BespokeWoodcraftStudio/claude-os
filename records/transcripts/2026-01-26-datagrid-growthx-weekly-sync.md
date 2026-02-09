# Datagrid <> GrowthX - Weekly Sync

---
meeting_id: 01KFKHA4R9T07ZDTP67VW5J8RK
date: 2026-01-26
duration: 37 minutes
organizer: team@growthxlabs.com
participants:
  - Marcel Santilli (GrowthX)
  - Vivek Shankar (GrowthX)
  - Liz Kushnereit (GrowthX)
  - Kaitlin Quimby (Datagrid)
  - Thiago da Costa (Datagrid)
transcript_url: https://app.fireflies.ai/view/01KFKHA4R9T07ZDTP67VW5J8RK
---

## Summary

Strategic planning session to align GrowthX's engagement with Datagrid's new priorities post-Procore acquisition. The team discussed evolving from blog-focused content to tighter product integration, specifically around Datagrid's agents marketplace and connectors pages. Key outcome: GrowthX will deliver a priority roadmap by end of week, followed by a one-hour strategic session.

## Context

Datagrid (formerly Toric) was recently acquired by Procore. This creates new opportunities to cross-link content with Procore's high-ranking pages and capture overlapping customer segments. The team is in transition: Vivek is leaving GrowthX, Liz is taking over the account, and Datagrid is hiring marketing/product marketing roles.

## Relevance to GrowthX

This engagement represents an opportunity to expand beyond blog content into programmatic product page creation—similar to what we did for Lovable (templates) and Ramp (vendor hubs). The API infrastructure exists. The strategic bet: turn Datagrid's website into a "store of use cases" where visitors can fork pre-built AI agents directly into their accounts.

## Overview

- **Product and Marketing Integration:** Connect blog content to product features (agents, connectors) to drive engagement and organic growth in the built world sector.
- **Website Improvements:** Transform product pages into template-driven hubs with SEO optimization and clear conversion paths.
- **Procore Strategy:** Focus on Procore-adjacent segments for the next two quarters to capture awareness and reduce churn risk.
- **Team Expansion:** Datagrid is hiring marketing and product marketing roles to improve coordination.
- **Leadership Transition:** Liz takes over from Vivek; fresh start with renewed focus on strategic priorities.

## Key Topics

### 1. Current State Problems

The website has three disconnected surface areas:
- **Blog/articles:** Strong momentum, good traffic, but no links back to product
- **Agents section:** Brand new (launched ~8 days ago), minimal content, no videos, poor SEO
- **Connectors pages:** Outdated (some still say "Toric"), lacks documentation

No cross-linking between content and product. No clear path from blog readers to product sign-ups.

### 2. The Opportunity

Replicate the Lovable model: use Datagrid's API to programmatically create agent templates that users can "fork" into their own workspaces. The API supports:
- Listing and creating agents
- Copying knowledge bases to new workspaces
- Streaming chat responses for live demos on the site

The vision: website as a "store of use cases" with pre-configured agents (e.g., OSHA compliance for California) that include manuals, knowledge bases, and system instructions.

### 3. Market Focus

- **Built world:** Construction, manufacturing, insurance—not just Procore's project-based construction
- **Procore overlap priority:** ~40% of Datagrid revenue comes from non-Procore customers, but focusing on Procore-adjacent segments reduces churn and maximizes ROI
- **Autodesk customers:** Expect churn—Autodesk is now a competitor

### 4. Website Ownership

Currently fragmented:
- External team (Wonderup) handles some website work
- Updates are slow due to bandwidth constraints
- No dedicated product marketing to coordinate between product and marketing teams

GrowthX can own end-to-end: strategy, execution, and integration—but needs clear handoffs for product marketing scope.

## Action Items

### Kaitlin Quimby
- Confirm with Thiago whether Smart Lead software is still in use or can be turned off
- Coordinate with marketing and product marketing to clarify messaging and resource allocation
- Work on product videos for agent cards to enhance website content

### Liz Kushnereit
- Take over the Datagrid account from Vivek
- Connect with Marcel to align on priorities

### Marcel Santilli
- Prepare and share a high-level priorities document with Thiago by end of week
- Connect with Liz and a forward deploy engineer (Nico) to plan agent/connector integration
- Organize a one-hour follow-up meeting next week for detailed strategic session

### Thiago da Costa
- Support GrowthX in enabling programmatic creation and "forking" of agents via APIs
- Provide technical insights on API capabilities (streaming, knowledge base copying)
- Collaborate on aligning content and product linkages for better UX and SEO

---

## Full Transcript

**Kaitlin Quimby:** This meeting is being recorded.

**Vivek Shankar:** Hey, Caitlin.

**Kaitlin Quimby:** Hi.

**Vivek Shankar:** How are you?

**Kaitlin Quimby:** I'm good. How are you?

**Vivek Shankar:** Good, good. I think we're gonna have a pretty full call today.

**Kaitlin Quimby:** Yeah, Sorry, there's someone. The maintenance guy was at my door. My dog was freaking out. No worries.

**Vivek Shankar:** Wanted to ask you real quick. We noticed that there was a software called Smart Lead that is in Thiago's name that for some reason was being built to us. I think it's a remnant from back when you were doing Outbound. I just want to confirm with you, are you using that or can we turn that off?

**Kaitlin Quimby:** I don't know if we use that anymore. Let me double check. One second. Yeah, let me see. I don't see anything about us using it. I can triple confirm with Tiago.

**Vivek Shankar:** Sure. That sounds good. Before. Sorry, go ahead.

**Kaitlin Quimby:** No, go for it.

**Vivek Shankar:** Before Thiago and Marcel jump on, just wanted to quickly introduce Liz. So I. As I mentioned, I will be leaving Growthx end of this week. Liz will be taking over Data grid. So. Yeah, I'll toss it over to Liz for a weekend trip.

**Liz Kushnereit:** Hi, Caitlin. It's nice to meet you. Super excited to take over. Yeah, I've been doing a lot of research into the account background, and so I'm actually feeling kind of excited for today's conversation. So. Yeah, it's great to meet you and I'm excited to work together.

**Kaitlin Quimby:** Yeah. Nice meeting you as well.

**Vivek Shankar:** We should have let off with this, but congratulations, by the way.

**Kaitlin Quimby:** Thank you. Yeah, it's been. Been a busy few weeks.

**Vivek Shankar:** Sure.

**Vivek Shankar:** Hey, Marcel.

**Kaitlin Quimby:** Hey, Marcel.

**Marcel Santilli:** Hey. I'm get a little bit more. More coffee.

**Kaitlin Quimby:** Yeah.

**Marcel Santilli:** Also, have you found an office yet?

**Kaitlin Quimby:** We are working for one. Well, that's not. I'm not looking for it anymore.

**Marcel Santilli:** Okay.

**Kaitlin Quimby:** There's a team to do that.

**Marcel Santilli:** I'm just curious.

**Kaitlin Quimby:** Yeah. Yeah.

**Liz Kushnereit:** Hello, by the way. I've just been in here in the background, but I know, like, you got kind of a lot of us on this call, but I know part of the reason we moved this was to talk a little bit more about, like, path forward. Are you taking the lead on that? Are we waiting for Thiago?

**Kaitlin Quimby:** Yeah, I know Tiago wants to join it. He. He'll be off. He's on another call. It's running a few minutes late. He said he'll be here in two minutes. Yeah. And just kind of, you know, rework. Obviously some things have changed on our side, as I know things are shifting from Vivek to Liz's too. It just feels like a good time to kind of Just, you know, reset a bit. Yeah. But I know he wants to be involved in that conversation. And I don't know if we've actually met.

**Marcel Santilli:** Andy, conversations I've had with Thiago Sweet so far. I think. The main thing is just really looking at some of the work we've done for Lovable and a few others where there's a tighter integration with. Kind of like the product and having more aggressive programmatic place and creating new. Sections of the site and really kind of putting forward more of that is really the. The goal where it's like, kind of. Evolving from just continuing to pump blogs and essentially really evolving that. That strategy. And. And part of it is kind of just understanding a little bit of like, like, the priorities. What I heard was there's really a. There's more resources, but there's also aggressive targets for this year. And so really understand kind of like the, like, the team and. And kind of like how you all are thinking about hitting those goals. Right? And. And also, like, how you'll see, like. What has worked so far. I have some sense, but just like, understanding, like, so that we can then take back and. And kind of like, rework the plan but move super, super fast as well. Yeah, like. Like, for instance, like, is there any. Integration with Procore or. There are other things that we should take into consideration. Is it still okay to try to, like, you know, cover topics around, like, let's say Autodesk. Right. Like, there's someone who wants to do that. That's not super crystal clear yet, you know.

**Kaitlin Quimby:** And I think some of that is also not super crystal clear on our end either, as I'm just now starting to meet with marketing and product marketing. Like, I mean, with the product marketing team leader, you know, yes, we have more resources, but we don't have them yet. Like, we are still very much operating independently of Procore and, you know, again, it's like, what, day five for us. So we're still figuring out, like, yeah, what is that? What is. Are we allowed to talk? I mean, obviously we're allowed to talk a little bit about Autodesk, but, like, to what extent and what's the threshold there? And we are open to other things, but I think there's just like, alignment that's still happening on that. We are going to be opening up a lot of marketing roles to fill our team so this can, like, be managed better as well in this, like, partnership and other things. But, yeah, I know, like, Hugh does want to see more of, like, the product stuff put onto our Website and you know, getting a dedicated product marketing person that could also like work with you guys versus having to ping miles on like product updates and things like that, that's just going to make this go smoother. But we also don't have that team in place yet here.

**Marcel Santilli:** Perfect. And so I guess like.

**Kaitlin Quimby:** Oh, yeah, sorry.

**Marcel Santilli:** Yeah. Just. Just as we're waiting for. For Tiago, like any. Anything that you have as context right now as far as like, if you. Kind of had a magic one as. Far as like especially like top of. Funnel and, and kind of like traffic growth, are there any areas that you. Feel like are really focused for AKA like when we started the engagement, there was a lot of things we did that was like broader than construction. So like, is the goal now to. Really narrow in within like construction or is it still to go broader than what Procore does, for example? Right. Like there's some of those that I. Don't know if you have any context so far.

**Kaitlin Quimby:** Yeah, I mean, my thinking is obviously we have to hit this goal and again, within the built world. So it's not just construction. That could be manufacturing, that could be insurance, that can be those things too. So I think. But I think the built world is still where we're focusing and we just. I got off a call with Diana who's been working on like putting together like a phase two of our messaging for our website. And it still talks, I would say, with broad terms. So it doesn't sound like you're just targeting this one very specific industry. But the examples tend to be again, very much related to the built world. But I think just like kind of steering away from too many like words that just make it. When you read it, it's like, oh, this doesn't involve me at all. But even the other thing too of like your company, like when I'm like out there at events and like talking to some smaller GCs and stuff like that. One thing that they do like about this is that it's not just for their people that are on site. They can use this throughout the whole company as well. Right. There's other use cases that can be used for other team members that just aren't the ones that are like out on the field. But obviously that is like our main bread and butter.

**Marcel Santilli:** Got it. Okay. Just taking notes.

**Kaitlin Quimby:** And then I know, like, sorry, I was looking. Did he give example examples or I guess what do you guys do? All of the lovable site or what did. What was done there? That's just like something I don't have as much.

**Marcel Santilli:** Yeah. So essentially like for Lovable, we've done. Their entire templates library and so using. Their API, we programmatically created entire websites. Templates with the designer in the loop. And also like this, this page, the content of the pages and things like. That as well as like the guides. Which the guides are very similar to, I guess. Like how we do articles for. For you all and then just pull up. So. So we're seeing like really strong results. Obviously they have a lot more like domain authority, but. But still like. Pretty. Pretty good upward momentum there. Yeah, you can kind of see like. So like we're averaging like 4 or 500 clicks a day already. That's there. We did work on their vendors catalog. As well, so it's kind of like more as well. We're also like, there are different kind of like hubs as well. So there's one that we did for. Ramp which is more of kind of like a. Yeah.

**Kaitlin Quimby:** Like for example, like our connectors, like I know our connectors page. Like a lot of these say toric and not data grid. If you like click into the cards and like needs probably a revamp or like an audit.

**Marcel Santilli:** Yeah. And so like how are, how are. You all managing like the website for example, right now? Like who's in charge of the website. And managing end to end? Like. Or is it kind of like right. Now a little bit of like whatever is the latest that touched it. I know our team has helped with a few things, but. But is there anyone else currently working on anything related to the website?

**Kaitlin Quimby:** Yeah, we have this team Wonderup who helps a little bit with the website. But sometimes it's like, you know, kind of we have projects and then obviously with everything going on, it's like okay, you know, because a lot of that needs either input from myself or like miles on the product side and things like that. But there's just been a lot going on the last few months. So there's not a ton that's being updated or it's like waiting on our end to get the info together. Right. Like I've been trying to like put together like the webinars and events page for like probably like three weeks, but I've been busy.

**Marcel Santilli:** Yeah. Yeah. Okay. So. So what I'm hearing is like like.

**Kaitlin Quimby:** This agent thing we like put together like that is like our newest update. And. But this is like another thing. Like I'm trying to get the videos from our product and each of those agents would have a video of what the agent does. Like I think one of them has it on there, like the deep dive one, but the rest don't. And so like, that's like something that like, you know, we're trying to work on.

**Marcel Santilli:** Yeah. Like, so. So like this is not very good from a search and visibility perspective, you know.

**Kaitlin Quimby:** Yeah.

**Marcel Santilli:** And like, but the surface area is. Here, so there's ways for us to. Improve it and scale it. As you can see, like, there's pretty much no traffic to it.

**Liz Kushnereit:** Yeah.

**Marcel Santilli:** Whereas, like, I think for the, the blog, there's like really good upward momentum.

**Kaitlin Quimby:** Yeah. And the agenc thing got launched. I think it got launched like right before the announcement. So what, like a week ago, maybe like eight days ago. And that was like something that we just like, didn't have before. And then I'm trying to get the videos set up for each of those agents so they can have the video and the card too. But then there's nothing, like you said that there's nothing that's really making that successful or like searchable.

**Marcel Santilli:** Okay, okay, that sounds like on the.

**Kaitlin Quimby:** Back end, like, how do we do that? And then like, if we want to add more stuff, I think there's just like we need more product shown on here is the big thing and then how us putting it on there is one thing and then how do we make that successful?

**Marcel Santilli:** Okay. Yeah, yeah. Like the, the. Oh, hey Tio, how's it going? I'm going to see you join. I think you're on mute.

**Thiago da Costa:** Can you guys hear me?

**Marcel Santilli:** Yeah. We were just going through, just trying to understand like how we should.

**Thiago da Costa:** Yeah.

**Marcel Santilli:** Overall, like, and essentially like, we can. Help in a lot of different ways. We like, where we're going to do. The best is finding areas like, of. The site where we can truly own end to end. Both the strategy that will drive like AI visibility, organic growth as well as. Like executing day in and day out. And we can help with like the. Experience and everything else and less on like product marketing. Right. Like the, you know, homepage, repositioning the. Homepage, revisiting the homepage, that kind of stuff. Right. And so I was showing Caitlin some. Of the stuff we've done for, for like lovable that I think we talked about. But, but like, so for lovable we did like all their templates. Right. So and we came up with a whole strategy of what templates people were searching for, what categories of templates. So we look at like wix and webflow and a bunch of others. And then we designed this, implemented this, created workflows and, and started executing this and and we're seeing like really, really. Strong like upward momentum, you know, as far as like traffic there for both. Like their guides as well as like their, their templates. So it's like you know, three, four thousand clicks a week. And so we're trying to figure out like for, for you all. Like obviously like we've done a lot of these guides and I think there's still a lot of things we need. To do to continue to like cross link them creating like more topical hubs. And things like that. But then like from your perspective, right, like what are the most critical things? For instance, like there's the agents section. That, that I think you all launch. But like maybe instead of thinking of. Sections of the site, if you had a magic one, right, like at least. From how people are searching and finding. Things and visibility, like how do you. Think about like what will make the. Biggest impact in helping hit the numbers. For this year, you know, for you?

**Thiago da Costa:** Yeah, I think the. There's two parts to this. I think one is the product content, the product communication piece within the website. I think even the blogs are not connected back to our agents. We talk about rfi, whatever in some blog we don't really connect back to. Oh, this is the RFI agent. We have a video that's kind of static but I think there's. That is in reaching all of our blog content and everything else. Especially the high traffic pages with, with more product links, backlinks and the artist developing the, the. The agent marketplace. I think agent marketplace is the place that people have the most questions, they have the most interest. Would like to develop that a lot more. The connectors marketplace too. It's like kind of, you know, crappy but it's a lot of product. Yeah, there's a lot of product documentation that's not there. Like how to install this connector or whatever. Also some says toric, some still say toric is just, you know, it's all kind of like not being like well, well nourished. And I think those are, those are the two areas that I think are the most important that we are certain of. Like we, we also need to continue to build out content. But I think our content should now start aligning with like some procore content. Some like you know, construction oriented content like data center built out. Like there's a lot of materials about data centers, how data centers are being built and, and who's building data centers, like hyperscalers. And so it's just targeting a lot of content around that audience would help us create more Funnel create more visibility. So I really think is these two things. Let's figure out how the content can expect the product and the product content and the actual content itself that has to kind of evolve to this new phase of the company.

**Marcel Santilli:** Okay. And still mostly around the broader built world. Not only what Procore serves because like, or from what I understand, Procore is very project based. Right. Like, so it's mostly around like. Construction projects. Like they, they don't serve manufacturing. Right. Like as an end to end platform. Right?

**Thiago da Costa:** Yeah, but we do, yeah, we do as, as data grid and I think we want to continue to do that but like do that like. We're not going to write about Ford Motors, you know, like it's not going to do anything for us. But like why are we writing about the, you know, the other suppliers of pipings and fittings? Why aren't we writing about, you know, the people that make like electrical equipment that goes into buildings? Why don't we talk about the, you know, the mechanical engineering part that goes into buildings like you know, H Vac and all these other work.

**Marcel Santilli:** Do you have a sense like what percentage of your revenue are customers that. Would never potentially buy from Procore, for example? Do you have a 40%. 40%, yeah. Okay. Okay. So it's still so, still big. And the reason I bring it up is because there's so much opportunity to go try to get like a lot of like the Pro course so much more clear and you now have the. Awareness and so it almost feels a. Little bit like wasteful in some ways to go try this other thing, you know. So maybe for the next like at least two quarters we go, we capture the like awareness by being everywhere and. Really focus on within like overlaps with customers that could be Pro Corp customers essentially.

**Thiago da Costa:** Yes. Yeah, Yeah. I think that's the right strategy. I think, you know, that number, that number being smaller is actually more protective and more helpful. If I could have more customers that are in the Procore ecosystem, they have a lower chance of Churn and all these other things like an Autodesk customer. I'm counting that to be a churn next year.

**Marcel Santilli:** Got it. As a competitor, that makes sense. Just to play back, what I'm hearing is we did a ton of articles pages and there's a lot of work. We need to do to connect that. Back to the product we now have. We have two surface areas besides articles and guides, which is the agents, which is brand new, very little content, needs a lot of help and there's no integration with the product. Right. And then there's connectors, which also. There's a lot of work there that. That we can do. And so for instance, like in the. Agents, there's very little content here. There's no connection with the product. You can go from here to, you. Know, actually going into the product or seeing the value here. These are not cross links. So there's a lot of things we can do with the surface area. And the idea is kind of here, roughly. Right. Like the scaffolding, if you will. And so if I'm hearing correctly, we want to connect all those things while also growing traffic, but do it in a way that's very much like use case based on the agents, then taking the content and connecting the content more to both the connectors and the use case and improve the surface area of the connectors as well. Right. So it's not just like linking to a random doc that has no context that might be outdated. Is that, is that a, is that a good summary? You're on mute. Yeah.

**Thiago da Costa:** And I think, you know, to your point, like the figuring out like, what's the overlap with the procore content, we can also go and tell procore, like, hey, your top ranking blog page, like it needs to link back to Data grid. Like cross, cross linking opportunity. Pro Core is like, just tell us what to do. Like we, we can tell anybody to do anything.

**Marcel Santilli:** So that's great. And one more thing. And then we'll connect also to, we'll have one of our engineers connect with your site. But today, like, if I come in here and say like agentic, like agent. Or agentic, like RFP or RFC for construction project, for example, like what exactly happens with this information from here?

**Thiago da Costa:** So right now it's just going to go into like the login. So if, if you log in, you would just try to pass that on. It's not. Yeah, it just goes as a prompt. So if you were logged in, like, the idea is that it actually goes. It does. Takes the prompt, but it doesn't really do that. What we wanted to do is we wanted to create an agent that's like designed for that task. We don't have the UI for that and we've been struggling trying to figure that out. So if you go, you know, like on a create on the left, top left. Yeah, yeah, go AI Agent and then click the right side. Custom agent. Yeah, yeah. We want it to be like if this UI here was sent. So if you type the same thing in here. We wanted it to be like do this, this, like basically create an agent. Like it needs to be a little bit faster, but like just create the agent that you want with the connectors and the questions that the agent's going to be able to answer. It's the easiest way we found for somebody to be like, wow, by what's going to happen next.

**Marcel Santilli:** Got it. And is there any chance that as an in between step, like these are the ones you already created, right. That already have. Like we can programmatically create these so. That when you click on that within a page, it's more like forking, right. Like so for instance, like we went. Through and this is like a project that we did, right? Like it's already pre created using their API. And there's this concept of like public projects, right. Like so for you can be a. Concept of like public agents even if. You don't dispose it anywhere on the web. But if you go here, you can't. You can preview, but when you click create your own and it's going to trigger login, but if you log in, it's going to actually fork that project. And, and this is a project we created programmatically, right? Like so. So if you click like use template and it can say include project history. Or not and then you can just say like remix and then what it's going to do is like fork that. And put it into my account. Right? Like so. Like that's an easier thing than like a blank canvas of just like having to create the agent from scratch because it's going to take time where, you know, and so as long as you have an API to programmatically create agents, we can use our workflows to programmatically. Create these agents, right? Yeah. Go to this project, for example.

**Thiago da Costa:** Yeah, go to developers.datagrid.com. Yeah, on the left side you see. Yeah. Like it's literally and actually the prediction to create a custom agent. If you scroll down, I think there's that not on the left side, there's more APIs there after knowledge tables, I think in the very bottom message. Let's see if that API is already.

**Marcel Santilli:** Live, but nowhere as long as it's there. Like for example with Lovable, their API is not even public. Like they gave only gave us access to their API, if you will.

**Thiago da Costa:** This API is public. We have a ton of people are using it.

**Marcel Santilli:** Yeah. And so today if Workspace one creates an agent, is there a way to like make that public so that somebody could programmatically add the agent back? Or is it one of those Things where it's just like, it's a new create call every time. Like, there's no like concept of public. What would be the easiest way? Like, let's say like you have an agent and they're one workspace. They we programmatically create, we validated that. Agent is perfect, right? Like, just like this.

**Thiago da Costa:** Then you do, you do go back there, you do list agents. So yeah, I think if you. Where's the agents API is up, up, up. Yeah, yeah, you do list agents. You'll list the agent that are in the, in the team space and it'll give you the entire configuration of the agent. All the instructions, system instructions, tools, the corpus of knowledge. All this stuff will come out every time you list it. And then you display the list of agents however you want. And.

**Marcel Santilli:** But that's for like a private workspace, right? Because none of this is public information. Or is it a public.

**Thiago da Costa:** Yeah, go, go back to your Data Grid account. So if you know the agents you have in this account, they would all be available if you go to Settings and then API, API keys. So if you took an API key from here, this API key is going to be able to list all these agents that you have in here. So you can just make them inside of data grid and just list them through the API. It's okay.

**Marcel Santilli:** So then publicly on the pages, it. Could be if a new user that's. Going to create a new workspace wanted. To then fork that agent.

**Thiago da Costa:** Yeah, you just do create with the same settings. You do list all the properties.

**Marcel Santilli:** Like it's not truly like forking in the sense. Like, like here, for example, truly fork the project, right? Like it took every setting because it's not just a call. Like there's like, you know, files. There's like, there's a lot. There's a whole project history that, all of that. And it forked. In this case, what we're trying to create. Like it's truly like it's a pro. It's a setting, right? Like it's an API call, which is kind of similar to what we did with VAPI for these, which is just like it was just a JSON payload, right? Like it was just the JSON that then got ingested and rendered. Here we could.

**Thiago da Costa:** Yeah, yeah, we could. We could create some kind of like fork this, this entire project, but like it's kind of looping through, copying the agent and copying the knowledge and copying some of the other stuff. It's kind of like this kind of the same thing. You actually don't Want the history, you probably just want the knowledge that is associated that agent to come along. Because you don't want your project to actually like your project actual data to be there. So you're going to want your like sop, your standards, your manuals, you know, your recipes, like that you want to come along and that would be knowledge. Right, so that would be these APIs here. Yeah, like create knowledge.

**Marcel Santilli:** You can't really fork a knowledge. So then like if you, if you have an agent that has access to. Like a sample knowledge for, to create. That on somebody else's workspace, you can only do like, you couldn't do that. Right?

**Thiago da Costa:** You would have to do. We can, we can make a create knowledge that is like takes, takes the destination workspace and it just pushes that same knowledge to the other workspace.

**Marcel Santilli:** Okay. So technically it's all possible. We got to find a way to do it without creating, you know, three months of product roadmap or.

**Thiago da Costa:** No, I mean APIs, we, we can augment the APIs quickly. I mean if the goal is because like the tables and data views down here, that's exactly what you're talking about. But this is just for like data directly. So you know, there's, there's a little bit of. But I like this idea of like making the website more like a store of use cases and like, oh, this is a use case for osha, you know, in California. And there's like the OSHA manual is already there and the agent to do OSHA is already there. Like everything is already set up.

**Marcel Santilli:** Yeah, exactly. It's mostly like kind of similar to vapi where you have a widget that already had all the settings for a voice agent. Like this, this button allows you to. Like take this agent and put this. This, you know, voice agent inside of like. But it's an overly simplistic voice agent. But it's truly just the prompts. Just the JSON.

**Thiago da Costa:** Yeah, you know, it's truly just downloading the JSON and just posting the create and like it's, it's a straightforward thing. Like either way, like it's either you do it like on, on whatever your server or we do it like in our server, but like it's the same thing.

**Marcel Santilli:** Okay. Okay, so to me, super clear what. We got to do. Liz, you and I can, can connect. Offline and then bring probably Nico or one of our forward deploy engineers and then we'll like the, the main, the. Main thing here is like I really think that if we're already seeing success with the Blogs, if there's a way to embed some of these use cases more. And also cross link to agents, make the agent pages also more like templates. Right, like agent templates, if you will. Yeah, right. Connect them and make the connection to signing up to the product stronger and then also connect to connectors. Right, because. And make that even stronger and improve those three surface areas and make those three surface areas more actionable. Then I think, like, in the next, like, six months, there's a huge. Like. Like, there's a lot more there. Because the thing here is, like, if. Someone comes from search and then they. Have, like, a prompt, something, and they click on that and go into the product, that's one of the strongest signals you can have is, like, this. This longer session that never goes back. Right. Like, because it's like, see the value quickly. Right. And then one last thing I got. To run, but is there streaming for. Like, if we do have an agent already working in one account and we want to imitate the equivalent of a. Chat response live on the page, is. There streaming in via API responses? Okay, perfect.

**Thiago da Costa:** Yeah, there's, like, tons of.

**Marcel Santilli:** Just a UI thing for us to do. Yeah, okay, perfect.

**Thiago da Costa:** Yeah, there's tons of you. The tons of partners now just building on top of the API, because we have the full indexing and we have the whole streaming thing.

**Marcel Santilli:** Okay. All right. This would be a fun project. Awesome. I got to run the Tiago, like, by end of week, we'll send something with, like, a big picture, like, priorities. Yeah. We'll also work on resource allocation on our end as well so that you feel really good. And then we can review, maybe grab an hour next week so that we have a little bit more time to. Like, take you through what we're thinking.

**Thiago da Costa:** Awesome. Let's do it.

**Marcel Santilli:** Awesome. Thanks.

**Thiago da Costa:** Thank you. Talk soon. Bye.
