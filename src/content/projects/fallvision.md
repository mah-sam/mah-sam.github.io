---
title: "Real-Time Fall Detection with Light Transformers"
description: "Real-time human fall detection from video, pairing YOLOv11 pose estimation with a lightweight transformer classifier for high accuracy at low latency. Published in IEEE Access, with the full training pipeline on Kaggle."
date: 2025-12-01
tags: ["Computer Vision", "AI & Deep Learning"]
image: "/images/projects/fallvision.png"
link: "https://doi.org/10.1109/ACCESS.2026.3674843"
linkLabel: "Paper"
link2: "https://www.kaggle.com/code/mah01sam/fallvision-light-transformer-v2"
link2Label: "Kaggle"
featured: false
order: 4
---

A system that detects human falls from video in real time, trained on the FallVision dataset. YOLOv11 extracts pose keypoints from each frame, and a lightweight transformer classifies the motion sequence, achieving high detection accuracy at latencies suitable for live clinical and home monitoring, a clear step up from prior CNN-based approaches.

The work was published in **IEEE Access** (2026). The complete training and evaluation pipeline is available as an open Kaggle notebook.
