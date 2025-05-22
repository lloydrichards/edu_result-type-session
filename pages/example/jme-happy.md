---
transition: fade-out
layout: default
---

## Expectation

<div class="mt-40 w-220 h-40">

```mermaid
flowchart LR
    S((_))
subgraph Search

    E1(parseContext)
    E2(allStorefronts)
    E3(parseJourney)
    E4(searchSequence)
    
end

    Data{{"JMEData"}}

    S ==>  E1 ==> E2 ==> E3 ==> E4 ==> Data
```

</div>