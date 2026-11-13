---
title: "What happens when a text input forbids deletion?"
date: 2026-02-21
author: "Paul Duan"
categories: "Sketches"
tags:
  - "Writing"
  - "Interaction"
  - "Materiality"
  - "HCI"
  - "English"
---

# Introduction

This idea came from the discussion of how paperwriting compares to typewriting. There are plenty of researches on this topic. One important study on a more generic topic is [**Christina Haas**](https://cla.umn.edu/about/directory/profile/chaas)‘s work “[**WRITING TECHNOLOGY: STUDIES ON THE MATERIAUTY OF LITERACY**](https://dl.acm.org/doi/book/10.5555/525524)“ in 1996. In Chapter 4, with the supporting of various experiments and study, Haas describes how the materiality of writing tools (e.g., pen and paper vs. computer) affects writers’ planning and thinking processes.

> [!quote] WRITING TECHNOLOGY:  STUDIES ON THE MATERIAUTY OF LITERACY
> …planning notes may be difficult to create and manipulate when using standard computer systems for writing. Burtis et al. (1983) found that expert writers used planning notes to keep themselves on task, to keep track of their goals, and to explore ideas. Although many multi-media systems allow for the inclusion of graphics into text files, the creation of the kind of quick, nonlinear, and diagrammatic notes that writers often use to think with may be difficult with many computer writing systems, where arrows, boxes, and added emphasis (e.g., directional arrows, checkmarks, stars) may be cumbersome to produce.

There are lots of differences mentioned in the above quote, and nowadays, with the development of technology, some of these differences are less significant. For example, the ability to create boxes and arrows is no longer a problem with many mordern note taking apps.

# This sketch

This sketch focuses on the ability to delete, which is a fundamental feature of typewriting but not paperwriting. Although one can argue that with pencil and eraser, paperwriting also allows deletion, it is not as easy, seamless and tidy as typewriting. Being able to delete allows people to easily correct mistakes, iterate on their thoughts, and still retain a clean and tidy writing space unlike paperwriting. Therefore, when we disable this feature, at least one thing will happen: the writing process will become more messy and unprofessional, which is more like a draft.

Digital writing is often characterized by its reversibility — the ability to delete, undo, and rewrite without leaving traces. This sketch isolates deletion as a minimal unit of reversibility and asks: how much does this single affordance shape writing behavior?  
In other words, how significant is the ability to delete in the typewriting process? Does it change the way we write and think? Centainly, as we mentioned above, there are many other significant differences between then. Therefore, I would like to further narrow down the scope of writing behaviour to focus on **linear** writing(no arrows, boxes, etc.). As for the writing context, I would like to focus on **planning/drafting/reflection** as it is more similar to daily quick linear paperwriting than other contexts such as coding or creative writing.

## Demo

[Open in new tab](/blog/sketches/no-deletion.html)

## Implementation

As a simple implemeation we listen for keydown events and prevent the default behavior when the Backspace or Delete keys are pressed. To imitate the experience of paperwriting, to “delete” a character, instead of actually removing it, we insert a special character `\u0336` (Combining Long Stroke Overlay) before the character to be “deleted” as a naive implementation without overcomplicating logic.

## Experiments & Observations

![Screenshot of Experiment 2](https://blog.xianzhaoduan.com/No_deletion_e2.png)

I performed three simple experiments on myself that correspond to three different writing contexts:

1. A simple story opening with the prompt “Once upon a time…”
2. A planning of a blog post about this sketch.
3. A reflection on a recent event in my life.

Briefly, I found that this “no-deletion” feature **does not** change the way I write and think significantly. In my initial conception，I was expecting that without the perfect and tidy writing space, I would be more likely to explore different ideas and write more freely, maybe even write down my thinking process. However, in practice, I still write in a similar way as I do with a normal text input, I was still overly cautious about what I write though I told myself to write down anything for idea tracing purpose. And most of the “deletions” are just typos or minor mistakes. I think this is may reveal that writing habits may be more stable than the affordances of writing tools.

I did the third experiment in my mother tongue, Mandarin, and I found that the whole writing process is more fluid and natural, I believe this is just because I am more used to thinking and writing in Mandarin than English, and I am more used to writing in a “draft” style in Mandarin than in English. Moreover, I found that here is the “deleted” texts really kicks in. When I review the “deleted” texts after the writing process, I can see how my thoughts evolved over time, also more important here is that the **“deletion” behaviour itself also becomes a part of reflection now**. “Why I delete this sentence?”, “Why I perfer this way to describle my feeling than other ways?”, these could be something to reflect on later. In this context, “deletion” is not only about correcting mistakes or improving, it also exposes yourself more than other.

The other two experiments are tasks with professional nature. I realized later that this is not new to me at all, as a CS student, I have been using version control systems like Git for a long time, which also allows me to see the history of changes and the “deleted” code.

# Open Questions

- Since the “deletion” behaviour itself becomes a part of reflection under some contexts, does it help for a text editor to collect and visualize these “deletion” behaviours to help people reflect on their thinking process?
- Since we say that the “no-deletion” feature will make the writing process more like a draft. If we start writing with a “drafting”/“exploring” mindset, do we really need these crossed-out “deletions”?
- Is reversibility a technological comfort or a cognitive necessity?
