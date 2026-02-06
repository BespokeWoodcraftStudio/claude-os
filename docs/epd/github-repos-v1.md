# GitHub Repos

*Source: Notion - https://www.notion.so/17a2ba60bc7480969505daedc79d52ae*

---

## Flow

AI Workflow framework and runtime used to power all of our AI/LLM and regular API needs. This repository is both the API + workflow runtime and all the code for the workflows itself and the necessary framework to create new workflows (generators, meta-prompts, etc).

*Note: Codebase is Typescript + Next.js on top of Temporal using our proprietary style of writing workflows. The readme is always up-to-date to help Cursor (and new members).*

---

## Flow Studio

GUI for Flow.

---

## Atlas

This is our web app platform, this is still in early development but we already have the foundation for our web platform using Rails + React with Inertia.js. This is where we'll trigger the workflows in Flow, host the database with client's data, etc (this will replace AirOps grid and Airtable).

---

## Website

Our website uses Strapi as the CMS, which is Headless, so what our visitors see is a Next.js app that consumes Strapi API.

**Next.js Frontend:**  
The public-facing website built in Next.js.

**Strapi API:**  
We use Strapi Cloud (password in 1Pass) to host the dynamic content, but Strapi still requires a Github repo for creating the components that define their API.

---

## Tech Stack Summary

| Repository | Tech Stack | Purpose |
|------------|------------|---------|
| **Flow** | TypeScript, Next.js, Temporal | AI workflow framework & runtime |
| **Flow Studio** | - | GUI for Flow |
| **Atlas** | Rails, React, Inertia.js | Web app platform (ContentOS) |
| **Website** | Next.js + Strapi | Public website |
