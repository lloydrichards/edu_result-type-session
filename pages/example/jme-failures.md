---
transition: slide-left
layout: default
---

|failure|From|description|action|
|---|---|---|---|
|`DatabaseEmpty`|`MetadataRepository` ; `QueryRepository`|No results from the database|try another query|
|`DatabaseUnavailable`|`MetadataRepository` ; `QueryRepository`|Unable to contact database|try again|
|`DatabaseValidation`|`MetadataRepository` ; `QueryRepository`|Invalid query to database|contact support with error|
|`ParseError`|`parseQuery` ; `parseJourney` ; `MetadataRepository` ; `QueryRepository`|Invalid data shape from database or params|contact support with error|
|`SearchNoResults`|`SearchService`|No results from the search|try another query|
