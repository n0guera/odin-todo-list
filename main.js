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
      var n = t.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var r = n.getElementsByTagName('script');
        if (r.length) for (var o = r.length - 1; o > -1 && !e; ) e = r[o--].src;
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
      n = document.createElement('div');
    n.setAttribute('id', 'logo-container'), t.appendChild(n);
    const r = new Image();
    (r.src = e),
      (r.alt = 'The Odin Project logo'),
      r.setAttribute('id', 'odin-logo'),
      n.appendChild(r);
    const o = document.createElement('p');
    o.setAttribute('id', 'logo-text'),
      (o.textContent = 'The Odin Project'),
      n.appendChild(o);
    const i = document.createElement('p');
    (i.textContent = 'Todo List'),
      t.appendChild(i),
      document.body.appendChild(t);
  })();
})();
