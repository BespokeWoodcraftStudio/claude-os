# Lovable Workflow Demo

**Date:** 2025-11-19

---

[33] Id: 01KAD0KP97WH7XP6X7TF8M8DH6
Title: Lovable Workflow Demo
DateString: 2025-11-19T02:55:28.039Z
Duration: 52.29999923706055
Organizer Email: george@growthx.ai
Meeting Link: https://growthx-ai.zoom.us/j/84613116229?pwd=B1n7p4WG7wymhTkkUy3yDtbLKOn10e.1
Summary: Short Summary: The team has created an automated pipeline that generates website templates and content specs, optimizing the process for users like photographers. This system consists of two pipelines: one for application templates and another for generating SEO metadata and content. Key improvements include enhanced image handling and automation of brief generation to reduce manual input. The build process involves cloning projects and executing phases with validation checks to ensure quality, requiring only minimal manual refinement before delivery. Current builds take approximately 30 minutes to an hour, reflecting the iterative development of Lovable's AI, which has shown significant improvement. The integration of agentic AI workflows allows dynamic error handling and multi-turn dialogues to enhance build accuracy and maintain standards. Additionally, separate workflows for content generation and SEO metadata ensure flexibility and adaptability in the output., Keywords: Lovable, Pipeline, Product Specification, Agentic Validator, Template Generation, SEO Metadata, Action Items: 
**Nicolas**
Share the Lovable chat project URL with George for review (31:58)

**George Haikal**
Review shared Lovable chat links to understand stepwise operation and outputs (31:58)

Meeting Attendees: No meeting attendees
Meeting Info: Fred Joined: true, Silent Meeting: false, Summary Status: processed
Participants: No participants


---

## Raw Transcript

**Speakers:** Nicolas, George Haikal
**Duration:** ~45 minutes
**Date:** 2025-11-19

**Nicolas:** Workspace lives in this meeting is being recorded. This is the lower workspace. And then you have the templates project which has these two pipelines. One is for generating the template, the actual application in loadable and then there is another one to generate the content that goes into the template page in lovable.dev. The one that gets to talk to the lovable builder and builds the whole thing is this one and this one. If you create a new one, it can take some images. We are still working around this to make it understand images a little bit better. But for now it takes a project name. So say I don't know, you like can come up with a name like I don't know, Veronica Sample Photography. And then the request which in here you can just try to like, I don't know, inspect the kind of sites you. You want to build and get some structure from those, some ideas, whatever.

**Nicolas:** What we are building right now is a pipeline that basically you will tell to build a site for a photography portfolio and maybe give it some examples and generate this brief automatically. Right now the way this one works is you need to come up with a brief and the more detailed you are, the better. If you're not detailed, you will try to come up with it best. It doesn't work great right now. That's what. That's why we are working on that second. But in this case let's use one of the briefs George main generator and let me find that.

**George Haikal:** And did he do this with the brief generator workflow?

**Nicolas:** No, this was just George main like building them manually. So for example, I think this one is. Is the most. Come on complete one. No, maybe it was 02. Let's actually use this. This one has a problem with a component. So let's try like this. So you copy this, you put it in here. Actually let's choose this. So it takes markdown and then you just create, press, play like any other workflow. And this will first from that initial prompt you gave it, it will create a full spec and then using that full spec it will start talking to lovable and created the template.

**George Haikal:** This will take full spec for how to create the actual thing in lovable from the brief.

**Nicolas:** Yes. It will add like a brand. It will go analyze the Personas we're building for and give it like basically the brand and an intention and everything. So it ends up being a product that a Persona from lovable Will want.

**George Haikal:** Can you see those steps if you click in?

**Nicolas:** Yeah. For example, this one that's built in Atlas. You only get to see the brief it generated, which is the inputs. The inputs was basically the request.

**George Haikal:** And then the Personas.

**Nicolas:** Yeah, and then all the Personas from the workspace. And then the output of the brief was a spec that contains an overview, the key features, the mock data. It needs to have all the visual requirements. Like, it adds a lot of. A lot of things. So Lovable can go.

*(Full 45 minute technical demo of the template generation workflow in Atlas, covering: spec generation, Lovable chat integration, agentic validator for accessibility/image quality/styling, Unsplash curator for images, final polish step, and Temporal workflow monitoring)*
