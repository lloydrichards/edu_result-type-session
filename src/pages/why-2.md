---
transition: slide-left
layout: center
---

### "Every function you write has two sets of inputs and outputs"
~ Kris Jenkins

<div class="h-60 w-full">

<v-click>

```mermaid
%%{ init: { 'flowchart': { 'curve': 'step' } } }%%
flowchart LR
  A1(Inputs) --> B{Function}
  A2(Dependencies) -.-> B
  B --> C1(Expected)
  B -.-> C2(Unexpected)

  style A2 opacity:30%
  style C2 opacity:30%
```
</v-click>

</div>


<div class="absolute right-30px bottom-30px">
  <a href="https://youtu.be/_nG09Z_tdUU?si=eNeByH3ysQ2yvCc3" >Side-Effects Are The Complexity Iceberg • Kris Jenkins • YOW! 2024 </a>
</div>