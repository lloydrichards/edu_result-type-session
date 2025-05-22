---
transition: slide-up
layout: default
---

### handleError()


```ts {all|5-8,11-14,17-20|16|all}
  const handlePrismaError = (error: unknown) => {
  if (error && typeof error == "object" && "code" in error) {

    if (error.code === "P2028") {
      return new DatabaseUnavailable({
        message: `failed to execute transaction over prisma, `,
        reason: "meta" in error ? error.meta : error,
      });
    }

    return new DatabaseUnavailable({
      message: `failed to connect to prisma: code ${error.code}`,
      reason: "meta" in error ? error.meta : error,
    });
  }
  Sentry.captureException(error)
  return new MetadataException({
    message: "[RemoteMetadata] unhandled prisma error",
    reason: error,
  });
};
```