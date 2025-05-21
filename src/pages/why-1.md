---
transition: slide-left
layout: two-cols
---

# The Problem with the "Happy Path"

### What could go wrong?

<div class="py-12">
<v-clicks>

- 🕵️‍♂️ The user doesn't exist 
- 🔥 The network is down 
- 🚨 The server returns an error 
- 🤷‍♂️ The server returns a different type 

</v-clicks>
</div>

::right::
<div class="py-32">

```ts
type User = {
  id: string;
  name: string;
};

const getUser = async(id: string): Promise<User> =>{
  const res = await fetch(`/api/users/${id}`);
  return res.json();
}
```

</div>