---
title: "Circuit Component Detection with YOLOv11"
description: "Fine-tuned YOLOv11 detector that identifies and classifies electrical components (resistors, capacitors, sources) in hand-drawn circuit images. Trained on the CGHD handwritten schematics dataset to 0.93 mAP50, it forms the detection front-end of the CircuitVision pipeline."
date: 2024-12-01
tags: ["Computer Vision", "Deep Learning", "Python"]
video: "/videos/component-detection.mp4"
github: "https://github.com/JKc66/CircuitVision/"
featured: false
order: 3
---

This module is the first stage of the larger **CircuitVision** senior design project, which fully automates the analysis of hand-drawn and printed electrical circuits. My focus in this phase was building a robust component detection system around a fine-tuned YOLOv11 model.

The model was trained on the **Handwritten Schematics (CGHD)** dataset to accurately identify and classify electrical components such as resistors, capacitors, and sources, optimized for high precision and recall. It reached **0.93 mAP50** (0.72 mAP50-95). The detected classes and bounding boxes feed every subsequent stage of the CircuitVision pipeline: node detection, value extraction, netlist generation, and circuit simulation.

**Tools:** Python, YOLOv11, PyTorch, OpenCV (image pre-processing and detection post-processing), CGHD dataset.
