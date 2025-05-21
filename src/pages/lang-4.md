---
transition: slide-up
layout: center
---

# Haskell

<div class="py-16">

```haskell
  divide :: Int -> Int -> Either String Int
  divide a b = if b == 0
    then Left "division by zero"
    else Right (a `div` b)
```
</div>