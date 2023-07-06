(() => {
  'use strict';
  var e = {};
  (e.g = (function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this || new Function('return this')();
    } catch (e) {
      if ('object' == typeof window) return window;
    }
  })()),
    (() => {
      var t;
      e.g.importScripts && (t = e.g.location + '');
      var n = e.g.document;
      if (!t && n && (n.currentScript && (t = n.currentScript.src), !t)) {
        var o = n.getElementsByTagName('script');
        if (o.length) for (var c = o.length - 1; c > -1 && !t; ) t = o[c--].src;
      }
      if (!t)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (t = t
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (e.p = t);
    })();
  const t = e.p + '4f0f495b2f256748749f.png';
  (() => {
    const e = document.createElement('header'),
      n = document.createElement('div');
    n.setAttribute('id', 'logo-container'), e.appendChild(n);
    const o = new Image();
    (o.src = t),
      (o.alt = 'The Odin Project logo'),
      o.setAttribute('id', 'odin-logo'),
      n.appendChild(o);
    const c = document.createElement('p');
    c.setAttribute('id', 'logo-text'),
      (c.textContent = 'The Odin Project'),
      n.appendChild(c);
    const r = document.createElement('h1');
    (r.textContent = 'Todo List'),
      r.classList.add('font-48px'),
      e.appendChild(r),
      document.body.appendChild(e);
  })(),
    (() => {
      const e = document.createElement('main'),
        t = document.createElement('nav');
      e.appendChild(t);
      const n = document.createElement('section');
      e.appendChild(n), document.body.appendChild(e);
    })(),
    (() => {
      const e = document.createElement('footer'),
        t = document.createElement('p');
      (t.textContent = 'Made with <3 for The Odin Project curriculum'),
        t.classList.add('flex', 'font-20px', 'justify-center'),
        e.appendChild(t),
        document.body.appendChild(e);
    })();
})();
