---
title: "《Interactive Digital Narrative》阅读笔记（一）"
subtitle: "纯文本交互轨迹中的经典"
date: 2025-12-27
author: "Paul Duan"
categories: "Notes"
tags:
  - "IDN (Interactive Digital Narrative)"
  - "IF (Interactive Fiction)"
  - "HF (Hypertext Fiction)"
  - "互动叙事"
  - "阅读笔记"
  - "Chinese"
---

这是系列阅读笔记的第一篇，主要探索《[Interactive Digital Narrative](https://www.routledge.com/Interactive-Digital-Narrative-History-Theory-and-Practice/Koenitz-Ferri-Haahr-Sezen-Sezen/p/book/9781138575714)》一书中关于互动数字叙事（IDN）发展的三条历史轨迹中列出的**经典作品**。希望通过探索这些经典作品，能够更好地理解互动数字叙事的发展历程和重要里程碑并初步形成在这个领域内的整体认知框架。

书中指出，互动数字叙事的发展可以从以下三条**非互斥的（not mutually exclusive）**、以**视觉和物理表现形式**区分的轨迹来理解：

1. 基于文字的（Text-based）
2. 互动电影/表演（Cinematic/performative）
3. 游戏及实验（Ludic/experimental）

# 纯文本交互

## 《[Eliza](https://en.wikipedia.org/wiki/ELIZA)》1966

Eliza 是最早的基于文本的互动叙事系统之一。它模拟了一个心理治疗师，通过简单的模式匹配（pattern matching）和替换方法与用户进行对话。

在线体验 Eliza：

- <https://sites.google.com/view/elizaarchaeology/try-eliza>
- <https://web.njit.edu/~ronkowit/eliza.html>
- <https://www.masswerk.at/elizabot/eliza.html>

![Eliza Conversation](https://blog.xianzhaoduan.com/ELIZA_conversation.png)

> [!note] Note
> - 感觉**交互和反馈方式**和现代的由神经网络驱动的早期大语言模型聊天机器人感觉很像。
> - 不过在设计惯例上，现在我们习惯把代表用户的输入放在一侧，代表系统的输出放在另一侧。

## 《[Adventure](https://en.wikipedia.org/wiki/Colossal_Cave_Adventure)》1976

Adventure或Colossal Cave Adventure，译作《巨洞冒险》，非常经典的早期文字冒险游戏。是 IF（Interactive Fiction，互动小说）这个游戏类型的开山之作。玩家通过输入文本命令来探索一个虚构的洞穴系统，解决谜题并收集宝藏。

在线体验 Adventure：

- <https://rickadams.org/adventure/>
- <https://grack.com/demos/adventure/>

![Adventure Screenshot](https://blog.xianzhaoduan.com/Adventure.png)

> [!quote] Help from Adventure
> …To move, try words like **forest, building, downstream, enter, east, west, north, south, up or down**. I know about a few special objects, like a black rod hidden in the cave. These objects can be manipulated using some of the action words I know…

> [!note] Note
> - 这里的人称代词“I”指的是游戏中的叙事者/游戏引擎/电脑系统，而“You”则是指玩家自己，属于第二人称叙述。
> - Adventure 是用 `FORTRAN` 编写的。

## 《[Zork I](https://en.wikipedia.org/wiki/Zork)》1980

Zork I 是 [Infocom](https://en.wikipedia.org/wiki/Infocom) 公司开发的经典文字冒险游戏（交互式小说）系列的第一部，启发自 Colossal Cave Adventure。玩家通过输入文本命令来探索一个虚构的地下世界，解决谜题并收集宝藏。

在线体验 Zork I：

- <https://www.pcjs.org/software/pcx86/game/infocom/zork1/>

![Zork I Screenshot](https://blog.xianzhaoduan.com/Zork1.png)

> [!note] Note
> - Zork I 和 Adventure 的交互方式类似，都是通过文本输入命令进行交互。
> - 同样使用第二人称叙述方式。
> - 游戏方式让人想到 RPG 类的桌游，DM 的角色由电脑系统扮演，玩家则通过输入命令来控制角色的行动。在这个类比上延申感觉可以发展到可供多人参与的 IF 游戏。

## 《[afternoon, a story](https://en.wikipedia.org/wiki/Afternoon,_a_story)》1987

afternoon, a story 是由美国作家 Michael Joyce 创作的超文本小说，被认为是超文本文学的开创性作品之一。它通过超链接的方式让读者可以选择不同的路径来阅读故事，从而体验不同的叙事线索和结局。HF（超文本小说），在诞生的时候是被看作**严肃文学**的一种新形式的。区别于 IF 作为游戏的娱乐性质。

相关链接：

- <https://www.eastgate.com/catalog/Afternoon.html>
- <https://www.eastgate.com/storyspace/>

> [!quote] Hypertext and creative writing, Bolter and Joyce, 1987
> Interactive fiction has already existed for some time in the form of computerized adventure games. … Admittedly the text of the current games is simple-minded, but the method of presentation is not. … This method of presentation can now be applied to **serious fiction**.

> [!quote] Interactive Digital Narrative, Koenitz et al., 2015
> The interactor of HF as envisioned by Bolter and Joyce is no longer the passive consumer of a finished work **but instead is given an active role in constructing meaning**.

> [!note] Note
> - afternoon, a story，制作并运行在 Storyspace 软件上，应该是有图形界面的。
> - Storyspace 是由 Michael Joyce 和 Jay David Bolter 共同开发的超文本创作和阅读工具。似乎与 HyperCard 有些类似。万维网和 HTML 则是后来出现的更通用的超文本标记语言标准。
> - 这里的“互动”更多是指读者通过选择不同的超链接来影响故事的阅读路径，而不是像 IF 那样通过输入命令来控制角色的行动。
> - Bolter 和 Joyce 希望 HF 的交互者（interactor）成为构建意义的积极参与者，而不是被动的消费者。
> - 感觉很适合悬疑或者推理类的故事，读者通过选择不同的线索和路径来揭示故事的真相。
> - 也会想到网上的那些互联网兔子洞，也蛮适合恐怖故事。毕竟也不知道链接后面会发生什么。

## 《[Patchwork Girl](https://en.wikipedia.org/wiki/Patchwork_Girl_(hypertext))》1995

Patchwork Girl 是美国作家 Shelley Jackson 创作的超文本小说，被认为是超文本文学的重要作品之一。它通过超链接的方式让读者可以选择不同的路径来阅读故事，从而体验不同的叙事线索和结局。故事灵感来源于玛丽·雪莱的《弗兰肯斯坦》，讲述了一个由不同身体部位拼接而成的女性怪物的故事。

相关链接：

- <https://www.eastgate.com/catalog/PatchworkGirl.html>

> [!quote] Interactive Digital Narrative, Koenitz et al., 2015
> - Another design strategy in HF is in the equivalence between content and structure: for example, a fragmented narrative like Afternoon is presented in fragmented pieces and the associative connections as links. In Shelly Jackson’s Patchwork Girl (1995), the protagonist herself is literally patched together from body parts of deceased women.

> [!note] Note
> 超文本的特点是**不同的**文本片段通过超链接相互**链接**。所以自然而然，创作者会想以这种结构特点来构建故事内容本身，从而实现内容和结构的等价性（equivalence between content and structure）。

## 《[Versu](https://versu.com/)》2013

Versu 是一个互动叙事平台，专注于创建复杂的角色驱动故事。它允许玩家与虚拟角色进行互动，通过选择不同的对话选项和行动来影响故事的发展和结局。不过现在好像停止开发了，所有内容都下线了。

相关链接：

- <https://emshort.blog/2017/05/18/mailbag-writing-for-versu/>
- <https://versu.com/>

<!--
## 《[Photopia](https://en.wikipedia.org/wiki/Photopia)》1998

Photopia 是由 Adam Cadre 创作的互动小说，被认为是 IF（互动小说）领域的重要作品之一。被认为是 IF 和 HF 的交叉流派。

> [!quote] Interactive Digital Narrative, Koenitz et al., 2015
> ...this IF presents spatial and textual exploration and emerges as a segmented narrative with hyperlinks substituting standard IF commands and creates an interesting hybrid between IF and HF.

## 《[The Intruder](https://en.wikipedia.org/wiki/The_Intruder_(interactive_fiction))》1999

## 《[Device 6](https://en.wikipedia.org/wiki/Device_6)》2013

## 《[Save the Date]()》2013
-->
