---
transition: slide-down
layout: default
---


|Feature|*try/catch Block*|*Discriminate Union*|*Either Type*|
|---|---|---|---|
|**Pattern Style**|Imperative|Declarative|Functional|
|**Error Handling**|Implicit (can forget to catch)|Explicit and enforced by types|Explicit and functional|
|**Type Safety**|❌ Inconsistent return types|✅ Strongly typed|✅ Strongly typed|
|**Composability**|❌ Difficult to compose|✅ Easy to chain and compose|✅ Excellent for functional composition|
|**Pattern Matching**|❌ Not supported|✅ Via discriminated union|✅ With `_tag` matching|
|**Example Use**|Small scripts, fallback logic|General-purpose, app-safe async calls|Functional pipelines, FP-heavy codebases|