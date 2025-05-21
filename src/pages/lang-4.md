---
transition: slide-left
layout: center
---

# Haskell

<div class="py-16">

```haskell
  divide :: Int -> Int -> Either String Int
  divide a b = if b == 0
    then Left "division by zero"
    else Right (a `div` b)

  main :: IO ()
  main = do
    let result = divide 10 0
    case result of
      Left err -> putStrLn $ "Error: " ++ err
      Right val -> putStrLn $ "Result: " ++ show val
```
</div>