---
title: "Shannah: Arabic-First On-Demand Marketplace"
description: "HungerStation-style on-demand marketplace for licensed Saudi home producers (أسر منتجة) and small commercial kitchens. A full platform: Laravel 12 backend with a Vue admin panel, three React Native apps (customer, vendor, driver), and realtime order tracking over WebSockets."
date: 2026-06-01
tags: ["Full Stack", "React Native", "Laravel"]
live: "https://shnah.com"
video: "/videos/shannah-desktop.mp4"
featured: false
order: 4
---

Shannah (شنّة) is an Arabic-first on-demand marketplace built for the Saudi market, modeled on the HungerStation experience but with a different supply side: licensed home producers (أسر منتجة), typically women-led home kitchens, and small commercial kitchens rather than restaurants. It spans five roles (client, vendor, driver, admin, and B2B supplier) across four apps and one backend.

The stack is a Laravel 12 API and Vue 3 admin panel, three React Native apps for customers, vendors, and drivers, and Laravel Reverb websockets for live order tracking. The domain model reflects the home-kitchen reality: capacity is capped per product per day (not per vendor), banquet (family-size group meals) is a first-class cart primitive, and store hours accommodate Ramadan-shifted schedules. Payments cover Cash on Delivery and Mada, financial totals are server-authoritative and immutable at order creation, and VAT is handled ZATCA-style (inclusive, extracted at checkout).
