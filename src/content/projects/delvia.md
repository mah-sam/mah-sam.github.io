---
title: "Delvia: The AI That Knows Your Health Story"
description: "An AI health app that reads lab reports, remembers a person's symptoms, medications and treatments, and answers based on their whole history. Live on Google Play and the web, with the iPhone app on the way."
date: 2026-09-01
tags: ["AI & Deep Learning", "Full Stack"]
image: "/images/projects/delvia-desktop.png"
live: "https://delvia.health"
link: "https://play.google.com/store/apps/details?id=ai.simak.delvia"
linkLabel: "Google Play"
featured: false
order: 0
---

Delvia Health keeps one health record for a person, whichever labs and hospitals their results come from. People upload lab reports and talk naturally about their symptoms, medications, diet and activity. An AI agent explains the reports in plain language and builds the record as the conversation goes, sorting what it hears into seven categories, from tests and symptoms to medications and interventions. One account can follow several people, such as parents and children, with each person's data kept apart from the context of the conversation, and the agent sets up medication schedules and reminders straight from the chat.

Every biomarker gets a single timeline across labs, answers draw on the person's full history, and the app suggests follow-up tests and prepares a PDF health summary for the next doctor's visit. Reference ranges come from published medical tables and critical values are flagged; Delvia explains and tracks, and never prescribes or replaces a doctor. It runs in seven languages, Arabic among them.

One Expo React Native and TypeScript codebase ships the Android app, the iPhone app and the web app, backed by a Laravel API with a Filament admin. Releases go through GitHub Actions with separate staging and production, over-the-air updates for the phone apps, and subscriptions across Google Play, the App Store and Stripe kept in step through RevenueCat.
