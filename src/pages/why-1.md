---
transition: slide-up
layout: default
---

# The Problem with the "Happy Path"

What could go wrong?

<div class="pt-3 pb-6">
```ts
async function getUser(id: string): Promise<User> {
  const res = await fetch(`/api/users/${id}`);
  return res.json();
}
```
</div>

<v-clicks>

- 🕵️‍♂️ The user doesn't exist 
- 🔥 The network is down 
- 🚨 The server returns an error 
- 🤷‍♂️ The server returns a different type 

</v-clicks>
