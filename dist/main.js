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
    o = (e) => {
      localStorage.setItem('projectName', e);
    },
    d = (() => {
      const e = () => {
        const e = document.querySelector('#new-project-btn');
        e.style.display = 'none';
        const t = document.querySelector('#nav-list-projects'),
          n = document.createElement('div');
        (n.id = 'new-project-popup'), t.appendChild(n);
        const c = document.createElement('input');
        c.classList.add('font-20px'),
          (c.type = 'text'),
          (c.id = 'projectName'),
          (c.name = 'projectName'),
          (c.required = !0),
          n.appendChild(c);
        const d = document.createElement('div');
        (d.id = 'new-project-popup-buttons'),
          d.classList.add('flex', 'font-20px'),
          n.appendChild(d);
        const a = document.createElement('button');
        (a.id = 'accept-new-project-btn'),
          (a.textContent = 'Ok'),
          a.classList.add('flex', 'font-20px', 'justify-center'),
          d.appendChild(a);
        const i = document.createElement('button');
        (i.id = 'cancel-new-project-btn'),
          (i.textContent = 'Cancel'),
          i.classList.add('flex', 'font-20px', 'justify-center'),
          d.appendChild(i),
          a.addEventListener('click', () => {
            o(c.value), (n.style.display = 'none'), (e.style.display = 'flex');
          }),
          t.appendChild(n);
      };
      return {
        initButtons: () => {
          document
            .querySelector('#new-project-btn')
            .addEventListener('click', e);
        },
      };
    })();
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
          c = document.createElement('h2');
        (c.textContent = 'Tasks'), (c.id = 'tasks-title'), t.appendChild(c);
        const o = document.createElement('ul');
        o.setAttribute('id', 'nav-list-tasks'),
          t.appendChild(o),
          n('home', 'Home', o),
          n('today', 'Today', o),
          n('date_range', 'Week', o);
        const d = document.createElement('h2');
        (d.textContent = 'Projects'),
          (d.id = 'projects-title'),
          t.appendChild(d);
        const a = document.createElement('ul');
        a.setAttribute('id', 'nav-list-projects'),
          t.appendChild(a),
          n('add_circle', 'New project', a, 'new-project-btn'),
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
    d.initButtons();
})();
