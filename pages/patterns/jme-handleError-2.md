---
transition: slide-up
layout: default
---

### handleError()


```ts {all|18|9-12,17-19|all}
const makeRemoteMetadataRepository = (): MetadataRepository => ({
    getVariants: async (args) => {
      try {
        const results =
          await prisma.metadata.findMany({
            // ...
          });
        if (results.length == 0) {
          return Either.left(
            new DatabaseEmpty({
              message: `no variants found for step_id ${step_id}`,
            })
          );
        }
        return Schema.decodeUnknownEither(VariantMeta.Array)(results);
      } catch (err) {
        return Either.left(
          handlePrismaError(err)
        );
      }
    },
  });
```