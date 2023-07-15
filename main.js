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
        var c = n.getElementsByTagName('script');
        if (c.length) for (var o = c.length - 1; o > -1 && !t; ) t = c[o--].src;
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
  const t = e.p + '4f0f495b2f256748749f.png',
    n = (e, t, n, c) => {
      const o = document.createElement('li');
      o.classList.add('nav-item'),
        ((e, t, n, c) => {
          const o = document.createElement('button');
          o.classList.add('nav-btn', 'font-20px', 'flex', 'align-center'),
            c && (o.id = c);
          const d = document.createElement('span');
          (d.textContent = e),
            d.classList.add('material-icons'),
            o.appendChild(d),
            (o.innerHTML += t),
            n.appendChild(o);
        })(e, t, o, c),
        n.appendChild(o);
    },
    c = (e) => {
      const t = document.createElement('article');
      e.appendChild(t);
    },
    o = () => {
      document.querySelector('#new-project-btn').style.display = 'none';
      const e = document.querySelector('#nav-list-projects'),
        t = document.createElement('div');
      (t.id = 'new-project-popup'), e.appendChild(t);
      const n = document.createElement('input');
      n.classList.add('font-20px'),
        (n.type = 'text'),
        (n.id = 'projectName'),
        (n.name = 'projectName'),
        (n.required = !0),
        t.appendChild(n);
      const c = document.createElement('div');
      (c.id = 'new-project-popup-buttons'),
        c.classList.add('flex', 'font-20px'),
        t.appendChild(c);
      const o = document.createElement('button');
      (o.textContent = 'Ok'),
        o.classList.add('accept-btn', 'flex', 'font-20px'),
        c.appendChild(o);
      const d = document.createElement('button');
      (d.textContent = 'Cancel'),
        d.classList.add('cancel-btn', 'flex', 'font-20px'),
        c.appendChild(d),
        e.appendChild(t);
    };
  (() => {
    const e = document.createElement('header'),
      n = document.createElement('div');
    n.setAttribute('id', 'logo-container'), e.appendChild(n);
    const c = new Image();
    (c.src = t),
      (c.alt = 'The Odin Project logo'),
      c.setAttribute('id', 'odin-logo'),
      n.appendChild(c);
    const o = document.createElement('p');
    o.setAttribute('id', 'logo-text'),
      (o.textContent = 'The Odin Project'),
      n.appendChild(o);
    const d = document.createElement('h1');
    (d.textContent = 'Todo List'),
      d.classList.add('font-48px'),
      e.appendChild(d),
      document.body.appendChild(e);
  })(),
    (() => {
      const e = document.createElement('main');
      ((e) => {
        const t = document.createElement('nav'),
          c = document.createElement('ul');
        c.setAttribute('id', 'nav-list-tasks'),
          t.appendChild(c),
          n('home', 'Home', c),
          n('today', 'Today', c),
          n('date_range', 'Week', c);
        const o = document.createElement('h2');
        (o.textContent = 'Projects'), t.appendChild(o);
        const d = document.createElement('ul');
        d.setAttribute('id', 'nav-list-projects'),
          t.appendChild(d),
          n('add_circle', 'New project', d, 'new-project-btn'),
          e.appendChild(t);
      })(e),
        ((e) => {
          const t = document.createElement('section');
          c(t), e.appendChild(t);
        })(e),
        document.body.appendChild(e);
    })(),
    (() => {
      const e = document.createElement('footer'),
        t = document.createElement('p');
      (t.textContent = 'Made with <3 for The Odin Project curriculum'),
        t.classList.add('flex', 'font-20px', 'justify-center'),
        e.appendChild(t),
        document.body.appendChild(e);
    })(),
    document.querySelector('#new-project-btn').addEventListener('click', o);
})();
