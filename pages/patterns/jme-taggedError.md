---
transition: slide-up
layout: default
---

### Data.taggedError

```ts {all|1,6,10,15|19}
class DatabaseUnavailable extends Data.TaggedError('DatabaseUnavailable')<{
  message: string;
  reason?: unknown;
}> {}

class DatabaseEmpty extends Data.TaggedError('DatabaseEmpty')<{
  message: string;
}> {}

class MetadataException extends Data.TaggedError("MetadataException")<{
  message: string,
  reason?: unknown,
}> {}

class MetadataUninitialized extends Data.TaggedError("MetadataUninitialized")<{
  message: string,
}> {}

type MetadataFailure = MetadataException | DatabaseUnavailable | DatabaseEmpty;
```