---
title: Markdown Rendering Tests
date: 2025-12-15 11:20:26
author: Paul Duan
categories: 项目记录
tags:
  - test
  - markdown
  - latex
  - hexo
---

# Markdown Rendering Tests
## 1. Paragraphs & Inline Formatting

This is a normal paragraph with **bold**, *italic*, ~~strikethrough~~, `inline code`, and a [link](https://example.com).

Subscript H~2~O and superscript x^2^ (may need extension).

---

## 2. Blockquote

> This is a normal blockquote.
>
> — Someone Famous

### Obsidian-style Callout

> [!quote] “Don't Make Me Think”
> Note that these things are always on a continuum somewhere between  
> “Obvious to everybody” and “Truly obscure,” and there are always tradeoffs involved.

---

## 3. Lists

### Unordered List

- Item A
  - Sub item A.1
  - Sub item A.2
- Item B

### Ordered List

1. First
2. Second
   1. Nested One
   2. Nested Two

### Task List

- [x] Completed task
- [ ] Pending task

---

## 4. Code Blocks

### JavaScript

```js
(function () {
  const msg = 'Hello, world!';
  console.log(msg);
})();
```

### Python

```python
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)
```

### Inline HTML

```html
<div class="test">
  <span>Hello</span>
</div>
```

---

## 5. Tables

| Feature | Supported | Notes           |
| ------- | :-------: | --------------- |
| Tables  |    Yes    | Basic table     |
| Code    |    Yes    | Syntax highlighted |

### Alignment Test

| Left | Center | Right |
| :--- | :----: | ----: |
| a    |    b   |     c |
| 1    |    2   |     3 |

---

## 6. Images

Inline image:

![Placeholder Image](https://picsum.photos/300/200)

---

## 7. Horizontal Rule

---

## 8. LaTeX Math

### Inline Math

The famous equation $E = mc^2$.

### Block Math

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

### Matrix

$$
A =
\begin{pmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{pmatrix}
$$

---

## 9. HTML inside Markdown

<div class="alert alert-info">
This is raw HTML inside Markdown.
</div>

---

## 10. Escaping & Edge Cases

\*This text is not italic\*

Backticks: \`code\`

HTML entities: \<div\>

---

## 11. Nested Content Stress Test

> ### Nested Quote Heading
>
> * List inside quote
> * Another item
>
> ```js
> console.log('Code inside blockquote');
> ```

---

## 12. Long Text (Typography Test)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

---

## 13. Multilingual Support
这是一些中文文本，用于测试多语言支持。
Voici un texte en français pour tester le support multilingue.
Dies ist ein deutscher Text, um die mehrsprachige Unterstützung zu testen.


