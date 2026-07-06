---
title: "Autonomous Robot for WRO RoboSport 2023"
description: "Autonomous two-wheeled robot built for the WRO RoboSport tennis competition. A Raspberry Pi 4 drives DC motors and a rack-and-pinion striker, while a Pi Camera detects the tennis ball in real time by color and sphericity, all controlled in Python."
date: 2023-12-01
tags: ["Image Processing", "Computer Vision", "Control & Electrical Engineering", "Embedded Systems"]
video: "/videos/tennis-robot.mp4"
link: "/reports/tennis-robot-report.pdf"
linkLabel: "Technical Report"
featured: false
order: 5
---

A three-person team project (with Albara Abbad and Jawad Khan) for the Microprocessors course at the Islamic University of Madinah, targeting the WRO RoboSport tennis competition. We designed an autonomous two-wheeled mobile robot capable of finding and striking a tennis ball without human control.

The robot runs on a Raspberry Pi 4 driving DC motors through motor drivers, with a rack-and-pinion mechanism for the striking motion and a Pi Camera for vision. The detection pipeline, written in Python, isolates the tennis ball by its color and sphericity, and a search over the detection parameters tunes the algorithm for reliable recognition. The result is a robot that can move, locate the ball, and interact with it autonomously, with reinforcement learning proposed as the next step.
