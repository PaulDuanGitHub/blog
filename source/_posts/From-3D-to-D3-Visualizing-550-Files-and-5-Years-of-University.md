---
title: "From 3D to D3: Visualizing 550 Files and 5 Years of University"
date: 2026-07-23
author: "Paul Duan"
categories: "Build Logs"
tags:
  - "D3"
  - "Data Visualization"
  - "R3F"
  - "Three.js"
---

# Epilogue

[Productivity (2021–2026) — Undergraduate Visualization](https://paulduangithub.github.io/undergrad-vis/)

The idea for this project took shape as my undergraduate journey was drawing to a close. With a break approaching, I wanted to build something—ideally a data visualization project, woven with a few timely threads of reflection and nostalgia. That formed the early blueprint: a visualization of my undergraduate studies.

The data collection phase, however, wasn’t entirely smooth. Initially, I planned to track conventional metrics: assignments, deadlines, grades, and GPA. But as I started gathering information, I realized that some course platforms were no longer accessible, and my local hard drive lacked a complete archive. Then came the breakthrough: I discovered that OneDrive preserves the version history of every file, and luckily, the vast majority of my coursework lived there. With that, I pivoted and began building the project around this dataset.

## Design & Implementation

### The Landing

Since this was my first time creating a scrollytelling piece, I leaned heavily on AI for guidance in the early stages. The overarching structure of “Landing + Detail” was finalized based on its suggestions. From there, I began conceptualizing and designing the Landing page.

Integrating 3D interactions into web experiences has always been an obsession of mine, so it felt only natural to bring in Three.js and React Three Fiber (R3F). The ideation process, however, wasn’t always enjoyable. For me, it involved staring at a blank notepad, racking my brain, and walking in circles through cycles of self-doubt and affirmation. Ideas that seemed brilliant one day would be completely scrapped by the next. Yet, I eventually arrived at a few concepts that I still find compelling today—the current Landing page being one of them. It was inspired by **[Henry Heffernan’s portfolio](https://henryheffernan.com/)**; the desk scene, the report resting on it, the graduation cap, and the mug all work together to establish the tone and atmosphere of the entire site.

I had dabbled in Three.js before, barely scratching the surface through online tutorials. But back then, learning a new tool wasn’t nearly as accessible as it is today. The first major hurdle I had to tackle was rendering. In Blender, my scene looked incredibly realistic and detailed under the Cycles ray-tracing engine. However, loading the exact same models and lighting environment into Three.js resulted in a flat and cheap appearance. To ensure users saw the same visual fidelity that I did, I had to bake the textures onto the models—applying them as a pre-rendered “skin” rather than relying on real-time lighting calculations.

Because I was also learning Blender on the fly, the entire baking process was far from easy, even with AI assistance. Unwrapped UV maps, misaligned coordinates, overlapping textures—issues cropped up one after another. The most agonizing part was the time it took. Using the integrated graphics on my laptop to bake ray-traced textures was excruciatingly slow, forcing me to eventually rent a high-performance cloud server. It was during this painstaking process that I started thinking about the transition between the Landing page and the subsequent narrative sections.

My initial thought was: “Since we have a report sitting on the desk, why not just move the camera closer to the paper to transition?” But that idea evolved into what you see now. Rather than simply moving the camera, I thought it would be far more visually engaging to have a gust of wind blow the paper up to cover the lens. Fortunately, Blender’s turbulence and cloth simulations provided the perfect physics to make it happen.

### The Detail

Dividing the narrative into “Acts” was an AI suggestion, and it provided the framework for my conceptualization. For me, this was the most challenging part of the project, and perhaps the one I’m least satisfied with.

What I needed was to construct an effective and engaging narrative within these three or four Acts. I wanted visitors to find it interesting while simultaneously gaining a unified, structural understanding of my university experience—which was the reflective outcome I originally aimed for. The contradiction lay in the data itself: I only had file version histories. That represents just one facet of a university journey, failing to achieve structural completeness and leaving other aspects of learning impossible to narrate.

So, I compromised. I shifted my focus entirely to making it interesting. The emphasis became making the interactions with the charts engaging, the transitions between them seamless, and the narrative points themselves entertaining.

**I hope you find it interesting, too.**
