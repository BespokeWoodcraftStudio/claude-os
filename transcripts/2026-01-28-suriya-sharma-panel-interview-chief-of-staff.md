# Suriya Sharma Panel Interview | Chief of Staff - Ops & Special Projects

---
**Meeting Date:** 2026-01-28  
**Duration:** 46 minutes  
**Participants:** Suriya Sharma (candidate), Bridget McGillivray, Marcel Santilli  
**Organizer:** marcel@growthxlabs.com  
**Transcript ID:** 01KFY02FCX13SEZY2E14TTBXN3  
**Source:** [Fireflies Transcript](https://app.fireflies.ai/view/01KFY02FCX13SEZY2E14TTBXN3)

---

## Summary

Suriya Sharma presented a strategic proposal to shift GrowthX's delivery model from linear headcount growth to a marketplace-style contractor platform. The discussion covered how to validate quality without degrading customer trust, contractor sourcing strategies, and the operational complexity of building payment infrastructure. The team agreed on a phased internal-first pilot approach using real customer data in shadow mode before external rollout.

---

## Context

This was a panel interview with Suriya Sharma for the Chief of Staff - Ops & Special Projects role. Suriya prepared a pre-read document outlining a marketplace delivery model proposal. The interview functioned as a working session where Suriya walked through her thinking and Marcel and Bridget pressure-tested the approach with questions about execution, validation priorities, and operational realities.

---

## Relevance to GrowthX

This meeting directly addresses GrowthX's core scaling challenge: the delivery model relies on linear headcount growth, creating bottlenecks around editor hiring, training, and quality control. The marketplace concept represents a potential structural solution that could unlock scalability while maintaining the quality standards that protect high-value customer contracts.

Key tensions surfaced:
- Quality vs. speed of contractor vetting
- Building internal infrastructure vs. leveraging third-party tools
- Exposing the marketplace to customers vs. keeping it as an internal operational model
- Getting contractor supply without flooding the market

---

## Overview

- **Marketplace Delivery Model:** Proposed shift to algorithmic platform for scalable contractor matching to reduce costs and improve flexibility
- **Internal Pilot Testing:** Real customer data used to compare contractor output with current editors to verify quality without client awareness
- **Quality Assurance Focus:** Multi-step vetting processes including AI tools ensure contractors meet quality standards, requiring ongoing performance monitoring
- **Financial Feasibility Priorities:** Customer needs addressed first, followed by margin improvement and reduced operational overhead as part of pilot testing
- **Contractor Supply Strategies:** Use internal networks and freelance platforms to build contractor pools while ensuring quality, retention, and incentives
- **Prototyping and Scaling Plan:** Launch internal pilot to validate quality, with phased external testing based on successful outcomes and clear metrics

---

## Key Topics

### The Problem
GrowthX has strong demand, healthy margins, and proven customer outcomes. But the delivery model scales through linear headcount growth. High editor turnover compounds the problem. This creates two constraints: low scalability and lack of flexibility.

### The Marketplace Concept
Restructure delivery into a marketplace that:
- Taps into global specialized contractor talent
- Uses tiered skill levels and algorithmic task matching
- Enables rapid capacity scaling without fixed headcount
- Includes rigorous vetting, clear task definitions, and built-in learning loops

### Validation Priorities (in order)
1. Can we maintain quality and customer trust?
2. Can we improve margins with this model?
3. Can we access the right contractors to meet customer needs?

Marcel's framing: "You can always improve margins on something that's working. It doesn't matter if you improve margins on something that's not working."

### Vetting Contractors
- Give contractors access to the internal AI tool
- Have them complete tasks using blinded customer data
- Compare output to existing employee work
- Include an onboarding/test period before full deployment
- Over time, identify signals that predict success to reduce vetting intensity

### Key Risks and Mitigations
| Risk | Mitigation |
|------|------------|
| Quality degradation | Narrow pilot scope, internal QA |
| Cannibalization of core business | Internal-first use, segment products clearly |
| Pricing uncertainty | Iterative testing with prospects and customers |
| Operational complexity | Avoid overbuilding, use third-party tools |

### MVP Platform Features
- Contractor login and authentication
- Task assignment routing
- Third-party payment integration (don't build payments infrastructure)
- QA routing to grade contractor output

### Contractor Sourcing
- Internal employee networks
- Existing recruiters
- Freelance marketplaces (Upwork, Fiverr)
- Former editors who left on good terms
- Data labeling marketplaces as a model (Scale AI, Surge)

Marcel highlighted the cold start problem: contractors won't stay engaged without consistent work volume. Supply acquisition requires treating contractors like customers with acquisition costs and retention strategies.

### Open Questions
- Should the marketplace be customer-facing or internal-only?
- How do we segment managed services vs. marketplace offerings?
- How do we automate vetting at scale without manual bottlenecks?

---

## Action Items

### Suriya Sharma
- Build minimum viable prototype platform: contractor login, task assignment, third-party payment integration
- Develop grading criteria and SLA framework for evaluating contractor output quality and timeliness
- Source initial pool of contractors using internal networks, recruiters, and existing freelance marketplaces
- Design contractor onboarding and training modules including test assignments replicating real customer tasks
- Coordinate internal shadow pilot using real customer data to compare contractor vs. current editor output
- Conduct iterative pricing experiments with prospects and customers after quality validation

### Marcel
- Provide detailed insights into current editor hiring and vetting workflows
- Support identification of sourcing channels and contractor recruitment strategies

### Bridget McGillivray
- Identify potential ex-editors or freelancers for early contractor pilot testing
- Assist in shaping onboarding training modules and validation exercises

---

## Full Transcript

**Suriya Sharma:** Hey, Syria.

**Suriya Sharma:** Hey.

**Suriya Sharma:** How are you?

**Bridget McGillivray:** I'm good.

**Bridget McGillivray:** How are you?

**Suriya Sharma:** Good, thanks.

**Bridget McGillivray:** Awesome.

**Bridget McGillivray:** All right.

**Bridget McGillivray:** I totally thought this was at one o' clock for some reason.

**Bridget McGillivray:** Just like in another world, but at least I saw the.

**Suriya Sharma:** Yeah, no, this definitely happens to be a lot.

**Suriya Sharma:** All right.

**Bridget McGillivray:** Oh, Marcel's in the office.

**Marcel:** What's up?

**Bridget McGillivray:** Hey.

**Marcel:** Hey.

**Marcel:** We're gonna be eating during this.

**Marcel:** Okay.

**Bridget McGillivray:** Me too.

**Bridget McGillivray:** Sorry.

**Suriya Sharma:** No worries.

**Suriya Sharma:** All good.

**Bridget McGillivray:** I totally thought it was at one, so I like just went and got food and I was like, oh crap.

**Marcel:** No, I've been recording.

**Marcel:** We were recording some videos for product launch next week.

**Bridget McGillivray:** Nice.

**Marcel:** That was good.

**Marcel:** But good to see you again.

**Suriya Sharma:** Yeah, you too.

**Marcel:** Thanks for wanting and turning this around so quickly.

**Suriya Sharma:** Of course.

**Suriya Sharma:** Yeah.

**Suriya Sharma:** Happy too.

**Marcel:** Yeah.

**Marcel:** Excited, excited to keep the conversation going.

**Marcel:** The Bridget take it away or I don't know if there's any context before we jump in.

**Bridget McGillivray:** No, I think, I think like I saw your pre read but whatever you want to share would probably be helpful if we're all looking at the same thing and then we'll keep it super interactive and try to ask questions throughout.

**Bridget McGillivray:** So we like more conversational than anything.

**Bridget McGillivray:** But yeah.

**Bridget McGillivray:** Any, any questions from you before we start?

**Bridget McGillivray:** No.

**Bridget McGillivray:** Cool.

**Marcel:** Actually, why don't we just give me like three minutes for me to quick, quickly read it.

**Marcel:** I'll probably be better too for context.

**Marcel:** I didn't get a chance to read it before.

**Suriya Sharma:** Sure.

**Bridget McGillivray:** We'll take a three minute pause.

**Marcel:** It.

**Bridget McGillivray:** I'm just going to go get water.

**Marcel:** That's good.

**Marcel:** This is great.

**Marcel:** Awesome.

**Marcel:** Yeah, let's jump in.

**Marcel:** You can approach it as like we kind of have some familiarity, but it's mostly like, hey, here's what I'm thinking kind of discussion too, you know, so then it's like want to ask questions, discuss things too.

**Marcel:** But also like if you want to just maybe start with like a elevator pitch type of like hey, even though I read it, but it's always good to kind of hear your thought process behind this.

**Suriya Sharma:** Yeah, of course.

**Suriya Sharma:** Sounds good.

**Suriya Sharma:** Yeah.

**Suriya Sharma:** So kind of the elevator pitch is.

**Suriya Sharma:** I do think that this is something Growth X should invest time and limited resources into explore.

**Suriya Sharma:** I think that it could really unlock scalability, build financial leverage with less editors needed per account.

**Suriya Sharma:** And I think we can do it without some sacrificing quality.

**Suriya Sharma:** The risks are manageable with the phased internal first approach and potential upside is significant.

**Suriya Sharma:** So I do think that this is something that's worth pursuing in kind of a limited resources fashion.

**Suriya Sharma:** Just because the problem today is GrowthX has strong demand, healthy margins and proven customer outcomes.

**Suriya Sharma:** But the delivery model still scales primarily through just linear headcount growth.

**Suriya Sharma:** And so.

**Suriya Sharma:** And there's not really a critical automated, dynamic way to match customer tasks with each editor based on their customer knowledge and their expertise.

**Suriya Sharma:** And Bridget had also mentioned there's a lot of high turnover in the role, which also makes this extra tough.

**Suriya Sharma:** And so, yeah, this creates really two main constraints, the low scalability and the lack of flexibility.

**Suriya Sharma:** And so now that customer demand is really growing quickly, it seems like a good time to explore this as either an additional growth lever or a fully new delivery model.

**Marcel:** Yeah, like for example, last week we, I think was last week, right, Bridget, we implemented time doctor.

**Marcel:** So yeah, so there's a lot of things around, like trying to get people to submit or self report on what they're doing, how they're doing it, then have to ask a lot of people about like, hey, if there are there quality issues, why are there quality issues?

**Marcel:** And then figure out, oh, okay, the quality issue is a, you know, a performance issue.

**Marcel:** And, and then even if you arrive at all those conclusions where like, hey, this person's taking four times more to do the same thing and their output quality sucks, then you still have to then go, cool, let's go hire somebody.

**Marcel:** And then it's like now it's like two more months to hire an onboard, right?

**Marcel:** Like, so that becomes pretty, pretty, pretty hard.

**Marcel:** And, and it's either they quit their jobs and come work for us full time or they don't work for us at all.

**Marcel:** Because managing like upwork is pretty hard.

**Marcel:** Like we try to do freelancer stuff in upwork and we still do like one off things.

**Marcel:** But like for these types of roles, it's pretty, pretty difficult, you know, because we have to give them access to notion and a bunch of other things and you know, so like the heart, like there's just like too, too much there, right.

**Marcel:** And so, um, that's a little bit of extra, extra context and the number of times even now that a customer will lose trust in us.

**Marcel:** And because, and the main reason, or one of the main reasons is often slop that a person didn't catch or just like kind of let it go through and like including like major logos.

**Marcel:** Like so you're talking like 2, 300 grand contract that is at risk because some editor decided to not read the damn thing they're supposed to read, you know, or.

**Marcel:** And so that's a little bit of the context of like, and the urgency for it too, you know.

**Suriya Sharma:** Yeah, that makes a lot of sense.

**Suriya Sharma:** Yeah.

**Suriya Sharma:** And so and definitely I think like the learning built in learning loops and quality signals and feedback is definitely something I think that has to be true for success both of growth X in general, but then also for this marketplace.

**Suriya Sharma:** It's one of the things kind of I listed here is like making sure that there are states standards for the production time and the production quality and making sure there's ways to kind of monitor.

**Suriya Sharma:** That definitely makes a lot of sense.

**Suriya Sharma:** Yeah.

**Suriya Sharma:** So a little bit more about the initiative, basically it would involve restructuring the delivery model into a marketplace style entity that taps into global specialized contractor talent, uses tiered skill levels and algorithmic task and account matching and then enables rapid capacity scaling without fixed headcount so that we can really flex flex how much somebody is working based on our needs.

**Suriya Sharma:** And then what must be true for it is we need to have a platform that like you said is way easier to access than having to give them access to notion and like all these other pieces so that there can be really simple onboarding.

**Suriya Sharma:** We need to set clear expectations and have really transport transparent performance feedback.

**Suriya Sharma:** We need to have really rigorous vetting and tiering of these contractors because right now, now that you guys are hiring kind of like full, you do have that process of really vetting people.

**Suriya Sharma:** But for contractors we need to move a lot faster.

**Suriya Sharma:** So how do we do that while not losing that rigorous standard?

**Suriya Sharma:** And then we need clear task definition.

**Suriya Sharma:** So we need to be able to say this is this type of task.

**Suriya Sharma:** So I know Bridget, you mentioned like there's articles, there's newsletters.

**Suriya Sharma:** So we really need to make sure we're distinct about that and what can and should be handled in, in this sort of platform versus what should be more managed services.

**Suriya Sharma:** And then those built in learning loops of really making sure we're improving routing, we're improving our standards and yeah, maintaining that high standard that we have today.

**Bridget McGillivray:** How do you think we could do vetting?

**Suriya Sharma:** Well, yeah, I think a couple of different things.

**Suriya Sharma:** So I think just giving access, I mean I always think like looking at someone's work product is the best way to understand how they're going to perform.

**Suriya Sharma:** So I think giving them access to, to the internal AI tool for the interview and seeing what they produce and comparing it like you could even give them an existing customer just like blinding the kind of customer information and giving them a task and then comparing it to what your existing employees have created and kind of grading them against that.

**Suriya Sharma:** I think that's a really good way to see if the customer is happy with this and we think this is like a really gold standard piece of work.

**Suriya Sharma:** How does the contractor hold up against that?

**Suriya Sharma:** And I bet that's also something that like, you could even help train the AI model to judge itself, like, based on those comparing them.

**Suriya Sharma:** And so I think definitely looking at their work product and then also just looking at kind of experience and past work, if they've worked with similar companies, similar work, you know, making sure that they have that experience.

**Suriya Sharma:** Because I think while it's great that there's a lot more accessibility to talent using this, I think the quality of that talent and the like standards of that talent is going to vary really widely.

**Suriya Sharma:** And then lastly, I think, like, it's really important that even after the contractor is hired that there's like a test period or like an onboarding period where we do get to see their work in real time and validate it against our existing standards, just to make sure that even like when they're creating net new materials, that it's really achieving like the level of customer trust and customer quality that we want.

**Bridget McGillivray:** Yeah, I'm glad you mentioned the third one because as I was thinking about, and I know Marcel has kind of like the vision of.

**Bridget McGillivray:** And there needs like, they're not just going to know how to work our platform either right away.

**Bridget McGillivray:** So it'd be some kind of like training modules.

**Bridget McGillivray:** They have to complete them all and then at the end, I love that idea of, okay, take a fake customer, run some articles, compare it to what are, you know, a good someone who's proven did and keep them in like a holding training pattern before taking the training wheels off.

**Bridget McGillivray:** Yep.

**Suriya Sharma:** Yeah, yeah, definitely.

**Suriya Sharma:** I think, like, just like running little mini pilots, internal pilots with each contractor.

**Suriya Sharma:** Like, it's a heavy, intensive kind of like way to do it.

**Suriya Sharma:** But I think it's really important to ensure we're maintaining quality.

**Suriya Sharma:** And I think as you do that over time you'll probably be able to pick up on some signals and some commonalities between the ones that do really well and the ones that don't.

**Suriya Sharma:** And then that might allow us to kind of like lower the, like, rigor of some of our testing as we're able to identify that.

**Suriya Sharma:** But at the beginning, I think, yeah, it's better to index on over testing and over vetting.

**Bridget McGillivray:** Yeah, I agree.

**Suriya Sharma:** Cool.

**Suriya Sharma:** So some of the key risks here, we want to make sure, like we mentioned, no quality degradation.

**Suriya Sharma:** That would really be a huge disservice to our customers and it could really damage our customer reputation as well, which is the most important thing cannibalization of the core business.

**Suriya Sharma:** And so there's a couple different ways we could go about this, but we do want to make sure that it's.

**Suriya Sharma:** If we're offering this platform as a lower price point piece, we want to make sure we're not cannibalizing kind of our existing managed services.

**Suriya Sharma:** We can figure out if we do want to transition everybody over, how do we maintain kind of that high value white glove impression, but just making sure that as we're testing this out, we're not really affecting our existing customer base and our existing revenue.

**Suriya Sharma:** And then pricing uncertainty, figuring out the right pricing for contractor incentives.

**Suriya Sharma:** Make sure like contractors are incentivized to do a good job.

**Suriya Sharma:** And then we're also protecting our margin because really the goal here is financial leverage.

**Suriya Sharma:** And so if we're able to do that, if we're not able to do that, then this could not be worth pursuing.

**Suriya Sharma:** And then the operational complexity as well.

**Suriya Sharma:** So a lot of kind of payments infrastructure trust that we have to build in these contractors and overhead of managing just a ton of different contractors.

**Suriya Sharma:** And so really finding ways to handle that.

**Suriya Sharma:** And so way to mitigate those for quality degradation is being very specific and having a narrow scope of the pilot and doing internal qa.

**Suriya Sharma:** The way to mitigate the cannibalization is really internal first use and segmenting our products very clearly and customers pricing uncertainty.

**Suriya Sharma:** The best way to mitigate that is really just to approach it iteratively and test different pricing models on our prospects and on our customers to see kind of what, what is the right fit for contractors as well.

**Suriya Sharma:** And then finally, the best way to mitigate the operational complexity is just to avoid overbuilding.

**Suriya Sharma:** And then really make sure we're building things in a very iterative way.

**Suriya Sharma:** And once we get product proof of success and proof of leverage, then we build the next piece just so we don't get too far ahead before validating this bet.

**Marcel:** So just to understand kind of what your idea here is, are you saying, are you suggesting we build the end to end or where do we start here?

**Marcel:** Right.

**Marcel:** Like when you say internal only like what, what exactly do you mean?

**Suriya Sharma:** Yeah, so I'll dig into that a little bit more on the operational plan, but basically just an internal pilot.

**Suriya Sharma:** So a pilot that first starts off internally.

**Suriya Sharma:** So we'll use it kind of side by side to our existing customers.

**Suriya Sharma:** So basically we'll have our editors today, they will create the articles and the newsletters that they would for customers.

**Suriya Sharma:** And at the same time in parallel, we'll have A contractor do that so that we can really compare the quality of the work, the time that the work takes to get done side by side.

**Suriya Sharma:** And the customer themselves won't know that we're kind of doing this dual side testing that'll just be internally, but we'll be real customer information.

**Marcel:** So just to understand.

**Marcel:** So we keep running a customer the way we're running today and then we're creating like a shadow approach here.

**Marcel:** But then is the idea to have the full platform build or to go use people that we already hire or to go source freelancers or something else like who's doing the work over here in this channel?

**Suriya Sharma:** We would source freelancers, so touch on that a little bit here.

**Suriya Sharma:** But we would kind of identify the candidates who would be a good match.

**Suriya Sharma:** We would build out enough an MVP so that contractors could have access.

**Suriya Sharma:** So this wouldn't be our hundred percent.

**Suriya Sharma:** It would just be enough that we could really test this.

**Suriya Sharma:** So making sure that contractors have access to authentication task assignment payments and then really use that to test them out using our shadow version.

**Suriya Sharma:** And then eventually if that goes well and we find that the quality is consistent and is meeting our standards, then from the internal pilot we would move to a really small external pilot with beta customers.

**Marcel:** That's in step just to dig in.

**Marcel:** Okay, so are we like, are you suggesting we build like payments infrastructure first before testing or test first and then build payments infrastructure?

**Suriya Sharma:** So just.

**Suriya Sharma:** We're just building the minimum infrastructure required to test the model internally.

**Suriya Sharma:** So what that looks like depends on a couple of different things.

**Suriya Sharma:** If there is an external third party tool that we can partner with to make the payments, great, then we don't need to build that.

**Suriya Sharma:** I think the goal here is to really build the minimum needed to successfully test this.

**Suriya Sharma:** So we really don't want to over build anything until we get that validation.

**Suriya Sharma:** So payments we could.

**Suriya Sharma:** We need to explore the best way to kind of efficiently and quickly get payments up and running so that we can pay these contractors and kind of so that we can test their skills.

**Suriya Sharma:** In the pilot we need to kind of.

**Suriya Sharma:** So there will be some build, but it will be at whatever the minimum possible.

**Suriya Sharma:** Build could be kind of just thinking like off the cuff.

**Suriya Sharma:** I think like minimum infrastructure would be like login access to our platform, some sort of layer that would allow task assignment to these contractors and then also then just either like partnering with a third party for payments and then some sort of way to route tasks not only to the contractors, but then to the people who will be QA and who will be testing the output to make sure that in grading it.

**Marcel:** Got it.

**Marcel:** Okay.

**Marcel:** And so, like, when we say, like, validate, right.

**Marcel:** I think what's helpful is to understand, like, in your mind what, like, without even, like, looking at what you wrote.

**Marcel:** Right?

**Marcel:** Like, it's kind of like what is assume.

**Marcel:** Like, we just pulled you into our board meeting next week and you're talking to our board member who has context on our business, but not in the level of, you know, nitty gritty that, like, Bridget has, for example.

**Marcel:** Right?

**Marcel:** Like, what exactly are we telling the board you think that are the things we're trying to validate?

**Marcel:** Right?

**Marcel:** Like, it's like, because the marketplace is, like, it's a.

**Marcel:** It's a concept that, you know, you don't need to validate a marketplace.

**Marcel:** Like, you know what I mean?

**Marcel:** Like, you need to validate that you can actually build a marketplace because of the.

**Marcel:** The cold start problem, right.

**Marcel:** Of, like, supplying them in and that you can actually, like, get both sides kind of.

**Marcel:** But.

**Marcel:** But it's like, so what, what is that?

**Marcel:** Validation, you think, in your.

**Marcel:** In your mind?

**Marcel:** Because I don't think there's a way we can scale this thing the way it is.

**Marcel:** Right?

**Marcel:** So it's not like a yes or no.

**Marcel:** You know what I mean?

**Marcel:** So then it's like, if it's not a yes or no, this is a yes.

**Marcel:** It's more of a how.

**Marcel:** Then what are the questions of the how, you know?

**Suriya Sharma:** Yeah, so I think a couple of questions.

**Suriya Sharma:** One is validating that we can maintain our quality of our output.

**Suriya Sharma:** I think that's really important.

**Suriya Sharma:** Maintain customer trust to.

**Marcel:** Sorry, yeah, no, I'm just repeating.

**Marcel:** Yeah, yeah.

**Marcel:** Okay.

**Suriya Sharma:** So then the second question we want to validate is, can we do this in a way that actually is better for our margins?

**Suriya Sharma:** So can we source contractors?

**Suriya Sharma:** Can we route information to them?

**Suriya Sharma:** Can we set up this platform and really run this in a way that is better for our margins?

**Suriya Sharma:** We need to make sure that the operational overhead is not so complex and the cost of sourcing, the cost of onboarding is not so high that we can't.

**Suriya Sharma:** That we are actually getting worse margins than we are today.

**Suriya Sharma:** So.

**Suriya Sharma:** So I think those are two really big, important things.

**Suriya Sharma:** And then I think the third is just making sure that this, we are getting access, this actually does work for our customers so that we are getting access to the right type of contractors, and we're able to tap into that global talent network to provide work that matches what our customers need.

**Suriya Sharma:** And I think those are kind of the three Main things that I would think of that we need to validate both kind of like top line, bottom line and then also just like making sure we're really meeting our customer needs and that building that trust.

**Marcel:** I think how would you rank those three?

**Marcel:** Yeah, I assume you can maybe answer all three at the same time.

**Marcel:** Perfectly.

**Marcel:** You know, in that you might need to prioritize validating one over another.

**Suriya Sharma:** Yeah, I mean I think validating that this can meet our customer needs is going to be the most important just because if it can't do that then this is just like a total hard stop, no go.

**Suriya Sharma:** I think I would probably put the validating the cost benefits towards the bottom simply because intuitively it does seem like it will have cost efficiencies.

**Suriya Sharma:** And so I would say let's validate that it's going to help our top line.

**Suriya Sharma:** Let's validate that it's going to help meet our customers goals and really build that, continue to build that trust with customers and not affect our reputation.

**Suriya Sharma:** So if we can validate those two things, I would probably feel good moving forward.

**Suriya Sharma:** And then I feel like with the last piece especially there's a lot of things that can be done to lower cost.

**Suriya Sharma:** So even if initially it is very operationally complex and we may be at a similar margin or higher margin, there are a lot of things you can do to build in efficiencies and automations to lower that over time.

**Suriya Sharma:** As long as we are really helping with our customer trust and building that topic.

**Marcel:** Yeah, that makes, that makes sense.

**Marcel:** I agree.

**Marcel:** That's the exact order I would do too.

**Marcel:** But yeah, the way to kind of think about it, I think about it is you can always improve margins on something that's working.

**Marcel:** You can, it doesn't matter if you improve margins on something that's not working, you know, so always solve for a fact that first efficient second go in the right direction slow, even if it's slower, but versus going fast in the wrong direction, you know, so effective first, efficient second and okay, so let's assume we, we have great engineers.

**Marcel:** I, I'll prototype some stuff with you and like we, we got like a prototype working.

**Marcel:** We figure out like the, the payment side, you know, find a way to kind of pay without like.

**Marcel:** Yeah, I'll just tell you right now, don't try to build a payment.

**Marcel:** Sure it'll take you a year and, and like you'll be asked but you know, there's like guessing, I'm guessing you.

**Bridget McGillivray:** Have some scars from that.

**Bridget McGillivray:** Syria, isn't that your we built a.

**Suriya Sharma:** Payment engine at Everlance and it was an adventure.

**Marcel:** Yeah, yeah.

**Marcel:** Like at scale AI, they like, it's mostly like, it's the craziest thing, depending on the countries, how you like, your ability to put money in somebody's bank account is like very hard.

**Marcel:** Or them withdrawing the money is like a very difficult thing.

**Marcel:** And then not to mention taxes and liability and, you know, and then safeguards around like money laundering laws in every country.

**Marcel:** Like, it's not fun, you know.

**Marcel:** Okay, so let's just assume we don't build that, we find something there, because I don't think we can do that or build it.

**Marcel:** And let's say you have a prototype that has the things, at least that the mvp.

**Marcel:** Right.

**Marcel:** Like, this is like, what is the next like, thing?

**Marcel:** And where's your head go?

**Marcel:** You know, Assume it's like, hey, we're, we're ready to test it out starting Monday.

**Marcel:** Like, what, what is the first thing you're thinking about or doing?

**Marcel:** And tell me more about how you do it.

**Suriya Sharma:** Yeah.

**Suriya Sharma:** So once we have kind of the mvp, we've solidified everything around, like the guardrails of what we're planning to test.

**Suriya Sharma:** Like, I think we need to be really narrow on the type of tasks that we want to test.

**Suriya Sharma:** We want to be really narrow on the type of, on the subset of contractors we want to test this with the subset of customers or prospects we want to use to test this.

**Suriya Sharma:** And so our customer information for the internal piece, I think the next step is really just like, let's get out there and validate now.

**Suriya Sharma:** And so we need to make sure we have very clear grading structures set up for any of the work that gets turned in.

**Suriya Sharma:** We need to have kind of SLAs and expectations clearly set for how long it's going to take to get these things done.

**Suriya Sharma:** And then that's when we kind of launch it internally with our existing kind of like the shadow piece on existing customer work.

**Suriya Sharma:** We look at really what are they providing and then making sure that we're doing kind of an internal qa, if we plan to deliver any of it, doing an internal QA before, otherwise just grading and comparing and let's see.

**Suriya Sharma:** And then if we see that the quality of work is really good, that's great.

**Suriya Sharma:** Now we can start to.

**Suriya Sharma:** If we see the quality of work is good and the, the time to delivery is good, I think both of those are important.

**Marcel:** Who's doing the work in this, in the shadow example?

**Suriya Sharma:** The contractors.

**Suriya Sharma:** So that's kind of like in Phase one.

**Marcel:** But where did the contracts come from and who found them?

**Suriya Sharma:** Yeah, so for the contractors, like while we're building out kind of the minimum infrastructure as a parallel process, the goal is to find the sourcers who can help us find these contractors.

**Suriya Sharma:** And so using a couple different methods.

**Suriya Sharma:** So one is like leveraging internal employees.

**Suriya Sharma:** I think that's really important because a lot of them will have people who are open to being contractors in their network.

**Suriya Sharma:** Two is just everybody, like kind of leveraging like existing recruiters for contractors and for kind of marketing design work, reaching out to them and kind of letting them know this is an opportunity, it's a contractor opportunity.

**Suriya Sharma:** If you have any people, kind of send them our way.

**Suriya Sharma:** And third would be looking at kind of existing sources or existing marketplaces or similar products where people today, like you said with upwork, like people today are offering their services and reaching out to those people and letting them know of this opportunity.

**Suriya Sharma:** So I think those are all kind of like good ways to start.

**Suriya Sharma:** I think another kind of like less thought of networks happen to is maybe because there is high turnover.

**Suriya Sharma:** If there were any people who we felt had really strong performance in the past, those could be really good people to start off with in this internal, this kind of initial contractor piece just to kind of test our product and test the.

**Suriya Sharma:** Test this model.

**Suriya Sharma:** But I would say we want to also have some diversity of contractors because we want to understand who can we source in a really efficient way and what is the quality of the people that we're sourcing in a very efficient way.

**Suriya Sharma:** And we want to make sure that we're not kind of like biasing ourselves towards people who we already know are good.

**Marcel:** Yeah, like.

**Bridget McGillivray:** Well, I think we probably.

**Bridget McGillivray:** I mean, I just had an ex interview today with an editor who's going to go back and freelance.

**Bridget McGillivray:** So like that could be.

**Suriya Sharma:** Sure.

**Bridget McGillivray:** Maybe they'd want to be a test subject.

**Bridget McGillivray:** But I agree, like limit that and then try to find people who would.

**Bridget McGillivray:** Would be so fresh to all of this to replicate more what it will look like.

**Marcel:** Yeah.

**Marcel:** Are there any like businesses or, or models from Premiere Research are doing this work that, that, that kind of like help or they have similar models, you know, outside of saying like upwork.

**Marcel:** Right.

**Marcel:** Obviously upwork is like a freelancer network or whatever.

**Marcel:** But, but like short of like, let's just go rebuild upwork from scratch?

**Bridget McGillivray:** Yeah.

**Marcel:** Any.

**Marcel:** Anything else you've seen in your research so far?

**Suriya Sharma:** Yeah, I mean, I think there are a couple companies that have a similar model.

**Suriya Sharma:** So like webflow is one that Comes to mind where they have, they have.

**Suriya Sharma:** There are people out there who have webflow certification and they are like people who are good at building in webflow.

**Suriya Sharma:** And then a lot of those people also will like build templates for their marketplace.

**Suriya Sharma:** And so really, like, I think having that kind of external Growth X certification, like that is something that you can add to your resume to show that you are like a really well versed marketer.

**Suriya Sharma:** Like, you really know the top tools, you know, like partially, partially.

**Suriya Sharma:** I think it's like positioning Growth X as a top tool and then also getting kind of that interest and like giving incentives to people to kind of learn it, get certified in it and that way like A, we tap into like this huge network and B, we get also like that has.

**Suriya Sharma:** It'll have kind of like flywheel effects with customers as well.

**Suriya Sharma:** And so I think that's one way, like that's one thing webflow does is just to kind of boost the people that they can use as contractors.

**Suriya Sharma:** They build that certification and they build that kind of like piece in their marketplace to encourage people to join versus having to proactively reach out to them to join.

**Marcel:** That makes sense.

**Marcel:** Any other vendors or any other marketplaces that came up in your research or as your.

**Marcel:** Or it's okay.

**Suriya Sharma:** If not trying to think if there were any others that I saw, I don't think so.

**Suriya Sharma:** I mean, I think like there's like Fiverr, which is kind of similar to Upwork.

**Suriya Sharma:** And so I think generally there are those.

**Suriya Sharma:** But like you said, does it make sense to like just fully rebuild that?

**Suriya Sharma:** I think it's really important to like be very specific about the type of freelancing and the type of people we're attracting.

**Marcel:** Yeah, I think the biggest one that you, you missed, but it's, it's okay.

**Marcel:** But it's like data labeling, right?

**Marcel:** Like, that's literally an insane amount.

**Marcel:** Companies like Surge Scale, AI Handshake, pretty much everyone that was on Marketplace has fit up in data labeling now.

**Marcel:** And then there's like the, in all of those.

**Marcel:** Like, all of them have marketplaces of like hundreds of thousands of, you know, tens of thousands to hundreds of thousands of people.

**Marcel:** But their entire job is like to do tasks in order to create training data for labs to use to train their models.

**Marcel:** And so it's a fully vetted already network.

**Marcel:** And a lot of these people will put in their profiles that they're doing that already.

**Marcel:** Skill has outlier, AI Search has data Annotation Attack.

**Marcel:** You have Merkur, you have all of those people normally Say what kind of work they do and what kind of experts they are in those networks.

**Marcel:** You know, some of them are fractional, but many of them end up being like their main, main source.

**Marcel:** And, and then there's like a huge thing around like also providing like not just the supply but like the, the liquidity in the marketplace.

**Marcel:** Because if you recruit the right person and you do everything right, but then you get one job every six weeks, they're like, what the hell, I can make a living out of this.

**Marcel:** And this is not consistent.

**Marcel:** Like.

**Marcel:** Right.

**Marcel:** So you need to have enough liquidity, enough like demand in the marketplace so that you don't flood it with supply and create a bad experience, you know, for the talent supply side.

**Suriya Sharma:** Yeah, yeah, that makes a lot of sense.

**Suriya Sharma:** Definitely.

**Bridget McGillivray:** I have a question on the previous page and by the way, this is like you answer to the best of your knowledge of how we operate today, because I know you obviously have limited insight on the platform and everything, but in your mind when you say managed service, is that, are you thinking that's like we, we still have this core in house team of editors that's doing like a premium, do it for the client thing and then the future is like a client, the other version would be the client coming in and like being matched to editors through the marketplace.

**Bridget McGillivray:** I just want to make confirmed.

**Bridget McGillivray:** Okay, yeah.

**Suriya Sharma:** I think actually that's like a question that I have at the end is like, how do we want to go about this?

**Suriya Sharma:** And so I think that's what really, like that's once we test out and validate this and see the quality of services that we're giving, I think that's really answer this question of like, do we want to segment out managed services versus this marketplace or do we want everybody to use this?

**Suriya Sharma:** Do we want this to be something that's exposed on the customer side, that they know they're using a marketplace, or is this just our internal working model and we don't want customers to know that?

**Suriya Sharma:** I think that's a really key question that we have to validate after we understand like, what is the quality of work?

**Suriya Sharma:** What is the output throughput?

**Suriya Sharma:** What is like, are we actually able to have a steady supply of contractors here?

**Suriya Sharma:** You know, just once we validated this idea, I think that's what the next question really is.

**Suriya Sharma:** And it comes down to what price point people are willing to pay for our existing services today versus the work quality coming out of the marketplace.

**Suriya Sharma:** Is it something that we can really position the same way we've been positioning our existing services.

**Suriya Sharma:** So I think a lot of that is just validating with customers, validating with prospects, and understanding kind of what their.

**Suriya Sharma:** How they view these kind of different options and how they view the output that they're getting from them.

**Bridget McGillivray:** Cool.

**Bridget McGillivray:** That makes perfect sense.

**Bridget McGillivray:** And that's a good.

**Bridget McGillivray:** I mean, yeah, it is an open question for sure.

**Bridget McGillivray:** Um, I know we only have 10 minutes, so, like, what, we have 10 minutes, right?

**Bridget McGillivray:** Or do we have an hour for this?

**Bridget McGillivray:** I just want to make sure you.

**Marcel:** Are able to get across everything you have for us.

**Suriya Sharma:** Yeah, no, I'd love to understand kind of like where in this process Growth X is today.

**Suriya Sharma:** I know, like, through the interviews we've talked about a lot kind of that this is definitely a move that GrowthX wants to make.

**Suriya Sharma:** And so I'd love to understand, like, where in this process you all are today.

**Marcel:** Yeah, so.

**Marcel:** So a way to kind of think about it is we have.

**Marcel:** We started with an approach of hiring internationally for our editors, and we didn't have like the layer of engagement managers and a bunch of others like strategists or directors or anything like that.

**Marcel:** Like, that last, like, yeah, 18 months ago or so.

**Marcel:** And, and so we had to build like, we were getting thousands of applicants to these rules.

**Marcel:** And there's no way you can just talk to an editor and be like, oh, yeah, I like you, you're going to be great.

**Marcel:** Right.

**Marcel:** So we do have workflows already implemented into our applicant tracking system in processes to where they have to complete an assignment, they have to fill out a question, and our workflows vet through those questions and say yes, strong yes or no, or maybe.

**Marcel:** Then we do have already a system there that people can record themselves answering a question and video that then goes into a workflow that transcribes that video and rates it based on the framework for, for the, for the role.

**Marcel:** Right.

**Marcel:** So we have a lot of that that can be kind of repurposed in, in a lot of ways.

**Marcel:** And there are plenty of APIs out there and things like that around, like, how do you vet everything?

**Marcel:** But that process is very much like reliant on our best editors or our, you know, head of content or, or customer ops interviewing those people at the last stage.

**Marcel:** And that's a massive bottleneck.

**Marcel:** So if we.

**Marcel:** So if that bottleneck is there for this, then it kind of some.

**Marcel:** Not completely defeats the purpose, but kind of defeats the purpose because then that means you just need an army of recruiters then at that point too.

**Marcel:** So then it's like.

**Marcel:** Or vetters and Then it's like, okay, you're just taking 30 people that are forward deployed customers and you're putting 30 people to find 300 people to do the same amount of work.

**Marcel:** So it's just actually like, it's like the question is more of that, of like we, we know how to vet a worker that's going to be full time, but, but the bar is different.

**Marcel:** Not lower.

**Marcel:** In some cases lower, in some cases higher.

**Marcel:** For someone that's only going to do one test.

**Marcel:** Like for instance, we vet for Cultural Fit.

**Marcel:** You're never going to talk to anyone and you're not going to be part of the company.

**Marcel:** Yeah, like Cultural Fit is not necessarily that important.

**Marcel:** It's like, right, we vet for like how AI native they are.

**Marcel:** But honestly, like if you're looking at something and you have good taste and you do it fast and you're good at it, I don't care if you never use any AI tool in your life.

**Marcel:** I mean, maybe a little, but it's like not as important, right.

**Marcel:** And we think about time zones at times.

**Marcel:** There's a lot of things like that that are important in one side, but it might not be important on the other side.

**Marcel:** And so here it's more of like less about necessarily the experience or whatnot.

**Marcel:** It's almost like we do 500 pages a week for clients, right.

**Marcel:** We have plenty to draw from of the before and after.

**Marcel:** We can intentionally create shitty versions of an output, right.

**Marcel:** And then have the ones.

**Marcel:** It's like we have plenty of sample assignments and work for, to, to, to be created.

**Marcel:** So then the, the thing that, the, the real hard thing here is, number one, how do you calibrate, like how do you take any human at all and how do you get them through an entire vetting system that then calibrates like what they're good at and then over time, like you said, and your doctor like promotes them.

**Marcel:** Like that's the hard part.

**Marcel:** Because it's like judging someone on an edit or on an input that they're giving is pretty hard.

**Marcel:** And content quality is a hard thing.

**Marcel:** Content understanding is an entire field of machine learning.

**Marcel:** Right.

**Marcel:** We're literally have an offer out for data scientists that's done content understanding for Netflix.

**Marcel:** That's a hard thing.

**Marcel:** That's not an easy thing.

**Marcel:** And then the other part that I think is the hardest thing to crack here is just supply.

**Marcel:** Like no one's going to wake up one day and magically know to come apply to some other place or whatever.

**Marcel:** So you have to tap into existing supplies or buy that supply with ads or acquisition channels or treat it just like, you know, customer acquisition and that gets pretty expensive really quickly.

**Marcel:** Or tap into you know like recruiting firms or whatever like you said, like.

**Marcel:** But getting a scalable, sustainable supply is hard.

**Marcel:** So then the way a lot of these data labeling companies done in the past is just like they'll use existing marketplaces and they'll post jobs and it's kind of like a bait and switch of like cool, it's a job.

**Marcel:** But then like it's a job to go over here or like, like there's different ways.

**Marcel:** But I think that's the hard thing to crack is like how do you figure out what are the sources like the of supply and how do you get that supply through the vetting process completely self serve while incentivizing them.

**Marcel:** That that's a great, like they should spend an hour going through and being vetted.

**Marcel:** You know, that is I think harder than the ongoing thing because the ongoing thing like you can do and you can, you can manage but if you don't have supply, doesn't matter what you built.

**Marcel:** And if you don't know how to vet people automatically that they're good people, then you also kind of doesn't matter because then you're back to the same problem of meeting humans in the loop to vet everything.

**Suriya Sharma:** Yeah, that makes a lot of sense.

**Suriya Sharma:** Well, yeah, I think that was kind of my main question.

**Suriya Sharma:** It's like super interesting problem.

**Suriya Sharma:** Obviously a lot of unique challenges, but yeah, seems awesome.

**Marcel:** Well, thank you so much.

**Marcel:** Gurja and I will debrief on our end, but I appreciate it and yeah, great job all around.

**Suriya Sharma:** Thank you.

**Bridget McGillivray:** Awesome.

**Bridget McGillivray:** Thank you Siri.

**Bridget McGillivray:** I appreciate the work.

**Marcel:** Awesome taxiing.

**Suriya Sharma:** I'll see you in.

**Suriya Sharma:** Bye.

**Bridget McGillivray:** Bye.
