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
        var o = n.getElementsByTagName('script');
        if (o.length) for (var r = o.length - 1; r > -1 && !e; ) e = o[r--].src;
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
    const o = new Image();
    (o.src = e),
      (o.alt = 'The Odin Project logo'),
      o.setAttribute('id', 'odin-logo'),
      n.appendChild(o);
    const r = document.createElement('p');
    r.setAttribute('id', 'logo-text'),
      (r.textContent = 'The Odin Project'),
      n.appendChild(r);
    const c = document.createElement('h1');
    (c.textContent = 'Todo List'),
      c.classList.add('font-48px'),
      t.appendChild(c),
      document.body.appendChild(t);
  })(),
    (() => {
      const t = document.createElement('main');
      document.body.appendChild(t);
    })(),
    (() => {
      const t = document.createElement('footer');
      document.body.appendChild(t);
    })();
})();
