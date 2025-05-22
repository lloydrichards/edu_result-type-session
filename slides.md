---
# config for the whole slides and the first one

addons:
  - slidev-addon-rabbit
rabbit:
  slideNum: true # Show current/total slide numbers next to a rabbit icon

theme: the-unnamed

# some information about your slides (markdown enabled)
title: Result Types
author: Lloyd Richards
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false

# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left

# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true

# show line numbers in code blocks
lineNumbers: True

# controls whether texts in slides are selectable
selectable: true
twoslash: true

layout: cover
---

# Result Types
## Safe and Sound Error Handling

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
src: ./pages/intro.md
---

---
src: ./pages/why/happy-path.md
---

---
src: ./pages/why/two-sets.md
---

---
src: ./pages/lang/title.md
---

---
src: ./pages/lang/go.md
---

---
src: ./pages/lang/haskell.md
---

---
src: ./pages/lang/rust.md
---

---
src: ./pages/what/title.md
---

---
src: ./pages/what/tryCatch-block.md
---

---
src: ./pages/what/tryCatch-union.md
---

---
src: ./pages/what/either.md
---

---
src: ./pages/what/compare.md
---

---
src: ./pages/what/effect.md
---

---
src: ./pages/example/title.md
---

---
src: ./pages/example/jme-sequence.md
---

---
src: ./pages/example/jme-sequence-2.md
---

---
src: ./pages/example/jme-happy.md
---

---
src: ./pages/example/jme-reality.md
---

---
src: ./pages/example/jme-failures.md
---

---
src: ./pages/patterns/title.md
---

---
src: ./pages/patterns/jme-handleError.md
---

---
src: ./pages/patterns/jme-taggedError.md
---

---
src: ./pages/patterns/jme-Expand.md
---

---
src: ./pages/resources.md
---

---
layout: end
class: text-center
---

# Learn More

[Materials](https://sli.dev) · [GitHub](https://github.com/lloydrichards)
<PoweredBySlidev mt-10 />
