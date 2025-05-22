  fn divide(a: i32, b: i32) -> Result<i32, String> {
    if b == 0 {
      Err("division by zero".to_string())
    } else {
      Ok(a / b)
    }
  }

  fn main() {
    match divide(10, 0) {
        Ok(result) => println!("Result: {}", result),
        Err(e) => println!("Error: {}", e),
    }
  } 