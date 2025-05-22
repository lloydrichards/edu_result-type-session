---
transition: slide-left
layout: default
---

### Expand Utility

```ts {all|13|9,15,17|21} twoslash
import { Data, Either } from "effect";
import type { ParseError } from "effect/ParseResult";

class DatabaseUnavailable extends Data.TaggedError('DatabaseUnavailable'){}
class DatabaseEmpty extends Data.TaggedError('DatabaseEmpty'){}
class MetadataException extends Data.TaggedError("MetadataException"){}
class ImportException extends Data.TaggedError("ImportException"){}

type MetadataFailure = MetadataException | DatabaseUnavailable | DatabaseEmpty;

// ------------------------------------------------------------ 

type Expand<T> = T extends infer U ? U : never;

type _ImportFailure = ImportException | ParseError | MetadataFailure;

type ImportFailure = Expand<ImportException | ParseError | MetadataFailure>;

// ------------------------------------------------------------ 

type DataResult = Either.Either<Object, ImportFailure>
```