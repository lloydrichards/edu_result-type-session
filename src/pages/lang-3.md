---
transition: slide-up
layout: center
---

# Go

<div class="py-16">

```go
  func divide(a, b int) (int, error) {
    if b == 0 {
      return 0, errors.New("division by zero")
    }
    return a / b, nil
  }
```

</div>