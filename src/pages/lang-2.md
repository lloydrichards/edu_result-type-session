---
transition: slide-up
layout: center
---

# Rust

<div class="py-16">

```rust
  fn divide(a: i32, b: i32) -> Result<i32, String> {
    if b == 0 {
      Err("division by zero".to_string())
    } else {
      Ok(a / b)
    }
  }
```
</div>