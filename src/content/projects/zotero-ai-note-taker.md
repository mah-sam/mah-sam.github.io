---
title: "Zotero AI Note Taker"
description: "Desktop app that generates structured, AI-powered summary notes for research papers in your Zotero library. A PyQt6 GUI browses Zotero collections and sends papers to Google Gemini, then saves formatted notes with BibLaTeX citations back into Zotero."
date: 2025-01-01
tags: ["AI & Deep Learning", "Software"]
image: "/images/projects/zotero-ai-note-taker.png"
github: "https://github.com/mah-sam/zotero-ai-note-taker"
featured: false
order: 8
---

A desktop tool that automates literature note-taking by bridging a local Zotero library with Google's Gemini models. A multi-pane PyQt6 interface lets you browse Zotero collections and papers, then generates structured summary notes for a single paper or a full collection.

Notes are produced with Gemini (2.5 Pro and 2.5 Flash), fully customizable system prompts for tailored output, and BibLaTeX citations, and are written straight back into Zotero. It integrates with both the Zotero Web API and the local desktop app, and persists settings locally.
