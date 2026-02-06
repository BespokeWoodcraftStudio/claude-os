# Lovable <> GrowthX - Weekly Sync

**Date:** 2025-11-19

---

[32] Id: 01K9X5SEE5WSG97R68P7DMYC7B
Title: Lovable <> GrowthX - Weekly Sync
DateString: 2025-11-19T21:00:00.000Z
Duration: 31.440000534057617
Organizer Email: marcel@growthxlabs.com
Meeting Link: https://growthx-ai.zoom.us/j/84179169413?pwd=edhTX1M28aYshdKeyCmWhsLCDlV12q.1
Summary: Short Summary: The meeting addressed Lovable's competitive landscape, noting its second-place status in organic search volume after Replit, which benefits from branded traffic and niche keywords. The team discussed the low competition faced by Base 44, which has recently launched a blog with under 30 monthly visitors. Lovable's automated template generation system, featuring 21 workflows, enhances quality and scalability, while a Looker dashboard tracks key metrics but requires GA4 integration for deeper insights. A new homepage section was proposed to highlight high-intent templates, aligning with user demand. The team aims to double production to 10 guides and templates weekly, pending resource evaluation, and resolved prior redirect issues to boost traffic. The next meeting is canceled for Thanksgiving, with asynchronous updates planned., Keywords: Templates, SEO Strategy, Reporting Dashboard, GA4 Integration, Content Audit, Workflow Automation, Action Items: 
**George Haikal**
Send list of non-branded competitive keywords with rank and volume (11:03)
Break down organic keywords and summarize competitor SEO strategy focused on templates and blogs (13:01)
Follow up with Sebastian on prioritizing high-intent website templates for the main landing page section (23:19)
Scope resource and engineering needs to double guides and templates production to 10 per week (29:13)
Resend Looker dashboard access and recap in Slack to all participants (22:50)
Check with security lead Firkin and push on approval for GrowthX to merge PRs with weekly security reviews (28:16)
Retroactively retrieve signup data for redirected how-to pages for further analysis (27:59)

**Megan Dickey**
Ensure GA4 integration and update Looker dashboards before next update (20:50)

**Rachel Hepworth**
Confirm GA4 access with Igor and Elena, and request adding George Haikal to GA4 access (21:38)
Proceed with coordinating GA4 access and confirm meeting cancellation due to Thanksgiving week (30:45)

Meeting Attendees: carilu@lovable.dev, rachel@lovable.dev, ceci@lovable.dev, erik@growthx.ai, aida@growthx.ai, george@growthx.ai, team@growthxlabs.com, marcel@growthxlabs.com, anton@lovable.dev, fern@lovable.dev, megan@growthx.ai, marcel@growthx.ai
Meeting Info: Fred Joined: true, Silent Meeting: false, Summary Status: processed
Participants: carilu@lovable.dev, rachel@lovable.dev, ceci@lovable.dev, erik@growthx.ai, aida@growthx.ai, george@growthx.ai, team@growthxlabs.com, marcel@growthxlabs.com, anton@lovable.dev, fern@lovable.dev, megan@growthx.ai, marcel@growthx.ai


---

## Raw Transcript

**Speakers:** Rachel Hepworth, Megan Dickey, George Haikal

**Rachel Hepworth:** This meeting is being recorded.
**Megan Dickey:** I just saw that most people declined.
**Rachel Hepworth:** This, like cc.
**Megan Dickey:** Anton Infernal declined.
**George Haikal:** They always do. CC does it this week. It's usually just Rachel and CC on these calls.
**Megan Dickey:** Okay.
**George Haikal:** For sure. Cool. Yeah, no worries.
**Megan Dickey:** How you doing? How's your day?
**George Haikal:** Good, Good. Got a lot done.
**Rachel Hepworth:** Nice.
**George Haikal:** Just. Which is awesome. How was yours?
**Rachel Hepworth:** Good.
**Megan Dickey:** Yeah. Just. Just busy. Yeah. But, you know, still. Still good. All good.

*(Full 31 minute conversation covering competitive audit (Base44, V0, Replit), template workflow demo, Looker dashboard setup, GitHub integration approval, Sebastian's homepage template project, doubling production scope)*

---

## Raw Transcript

**Speakers:** Rachel Hepworth, Megan Dickey, George Haikal
**Duration:** 31 minutes
**Date:** 2025-11-19

**Rachel Hepworth:** This meeting is being recorded.
**Megan Dickey:** I just saw that most people declined.
**Rachel Hepworth:** This, like cc.
**Megan Dickey:** Anton Infernal declined.
**George Haikal:** They always do. CC does it this week. It's usually just Rachel and CC on these calls.
**Megan Dickey:** Okay.
**George Haikal:** For sure. Cool. Yeah, no worries.
**Megan Dickey:** How you doing? How's your day?
**George Haikal:** Good, Good. Got a lot done.
**Rachel Hepworth:** Nice.
**George Haikal:** Just. Which is awesome. How was yours?
**Rachel Hepworth:** Good.
**Megan Dickey:** Yeah. Just. Just busy. Yeah. But, you know, still. Still good. All good.
**George Haikal:** Surviving.
**Rachel Hepworth:** Yeah. Survival.
**Megan Dickey:** Yeah. And, like, my AirPod stopped working, so hopefully I don't sound too, like, echoey.
**George Haikal:** But that's cool. When they stop working that stuff.
**Megan Dickey:** Yeah. It's like they'll connect to my phone but not my laptop. Like. Yeah. I think I might just get, like, the next generation of AirPods, like, just for fun and see if they're any better. But. Yeah. Hey, Rachel, how you doing?
**George Haikal:** You're muted.
**Rachel Hepworth:** I said I'm good. How are you guys? Good, good.
**George Haikal:** Well, Doing well. Are you also over at the hq? Is that just CC this week?
**Rachel Hepworth:** No, it's just cc. No, I refuse to travel in Europe and I would definitely not be on this call if I was in Stockholm. So I think it's going to be just us today probably.
**George Haikal:** Yeah, no problem. We can get into it. How's everything with you before we jump in?
**Rachel Hepworth:** Good. Yeah. Just getting ready for Thanksgiving break next week. I'm going to be in the east coast, so it'll be a good change.
**George Haikal:** Where at?
**Rachel Hepworth:** New Jersey.
**George Haikal:** Nice. Nice. I grew up in Boston, so not for Thanksgiving, but for Christmas I'll be back home. It's been a while, but I love the east coast, especially when it's. I guess it's starting to get wintry, but when it's fall turning to winter, it's pretty cool.
**Rachel Hepworth:** Yeah. Yeah. I think it's getting pretty cold right now. Yeah.
**Megan Dickey:** Yeah. I'll be in the Midwest, so a little older and less interesting, some might say.
**George Haikal:** All right, let's do it. Share my screen. Cool. So a ton to go through. I'll speed through the more routine reporting stuff because I want to show you some insane progress Rachel that we made. I was on the. On the line late last night with our engineers kind of running through end to end the template workflow and where we've gotten it. It's super impressive. So I'll show you that today. But before. Is there anything related here that's top of mind for you?
**Rachel Hepworth:** I think the main thing I want to understand is how to look at the metrics and maybe that'll be a next week thing. But reporting is the main Question for me.

*(Full 31 minute conversation covering site audit, competitor analysis, template workflow demo, Looker dashboard setup, GA4 integration, GitHub integration, and scaling discussion about increasing to 10 guides and 10 templates per week)*
