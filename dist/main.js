(() => {
  'use strict';
  var t = {};
  (t.g = (function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this || new Function('return this')();
    } catch (t) {
      if ('object' == typeof window) return window;
    }
  })()),
    (() => {
      var e;
      t.g.importScripts && (e = t.g.location + '');
      var r = t.g.document;
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var n = r.getElementsByTagName('script');
        if (n.length) for (var o = n.length - 1; o > -1 && !e; ) e = n[o--].src;
      }
      if (!e)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (t.p = e);
    })();
  const e = t.p + '4f0f495b2f256748749f.png';
  (() => {
    const t = document.createElement('header'),
      r = new Image();
    (r.src = e),
      (r.alt = 'The Odin Project logo'),
      r.setAttribute('id', 'odin-logo'),
      t.appendChild(r);
    const n = document.createElement('p');
    n.setAttribute('id', 'logo-text'),
      (n.textContent = 'The Odin Project'),
      t.appendChild(n);
    const o = document.createElement('p');
    (o.textContent = 'Todo List'),
      t.appendChild(o),
      document.body.appendChild(t);
  })();
})();
