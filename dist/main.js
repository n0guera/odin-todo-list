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
    n = (() => {
      let e = [];
      const t = () => JSON.parse(localStorage.getItem('projects')) || [],
        n = () => {
          e = t();
        };
      return {
        projects: e,
        storeNewProject: (t) => {
          n();
          const c = ((e, t) => ({ projectName: e, tasks: [] }))(t);
          e.push(c), localStorage.setItem('projects', JSON.stringify(e));
        },
        getProjectList: t,
        updateProjectList: n,
      };
    })(),
    c = (() => {
      const e = (e, t, n, c) => {
        const o = document.createElement('li');
        o.classList.add('nav-item'),
          ((e, t, n, c) => {
            const o = document.createElement('button');
            o.classList.add('nav-btn', 'font-20px', 'flex', 'align-center'),
              c && (o.id = c);
            const a = document.createElement('span');
            (a.textContent = e),
              a.classList.add('material-icons'),
              o.appendChild(a),
              (o.innerHTML += t),
              n.appendChild(o);
          })(e, t, o, c),
          n.appendChild(o);
      };
      return {
        createNavListItem: e,
        createTaskElement: (e) => {
          const t = document.createElement('article');
          e.appendChild(t);
        },
        updateNavProjectList: () => {
          const t = document.querySelector('#nav-list-projects'),
            c = n.getProjectList();
          (t.innerHTML = ''),
            c.forEach((n) => {
              e('folder', `${n.projectName}`, t);
            }),
            e('add_circle', 'New project', t, 'new-project-btn');
        },
      };
    })(),
    o = (() => {
      const e = () => {
        document.querySelector('#new-project-btn').style.display = 'none';
        const e = document.querySelector('#nav-list-projects'),
          t = document.createElement('div');
        (t.id = 'new-project-popup'), e.appendChild(t);
        const o = document.createElement('input');
        o.classList.add('font-20px'),
          (o.type = 'text'),
          (o.id = 'projectName'),
          (o.name = 'projectName'),
          (o.required = !0),
          t.appendChild(o);
        const a = document.createElement('div');
        (a.id = 'new-project-popup-buttons'),
          a.classList.add('flex', 'font-20px'),
          t.appendChild(a);
        const d = document.createElement('button');
        (d.id = 'accept-new-project-btn'),
          (d.textContent = 'Ok'),
          d.classList.add('flex', 'font-20px', 'justify-center'),
          a.appendChild(d);
        const r = document.createElement('button');
        (r.id = 'cancel-new-project-btn'),
          (r.textContent = 'Cancel'),
          r.classList.add('flex', 'font-20px', 'justify-center'),
          a.appendChild(r),
          d.addEventListener('click', () => {
            (t.style.display = 'none'),
              n.storeNewProject(o.value),
              c.updateNavProjectList();
          }),
          e.appendChild(t);
      };
      return {
        initButtons: () => {
          window.addEventListener('load', c.updateNavProjectList()),
            document
              .querySelector('#new-project-btn')
              .addEventListener('click', e);
        },
        addNewProjectPopup: e,
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
    const a = document.createElement('h1');
    (a.textContent = 'Todo List'),
      a.classList.add('font-48px'),
      e.appendChild(a),
      document.body.appendChild(e);
  })(),
    (() => {
      const e = document.createElement('main');
      ((e) => {
        const t = document.createElement('nav'),
          n = document.createElement('h2');
        (n.textContent = 'Tasks'), (n.id = 'tasks-title'), t.appendChild(n);
        const o = document.createElement('ul');
        o.setAttribute('id', 'nav-list-tasks'),
          t.appendChild(o),
          c.createNavListItem('home', 'Home', o),
          c.createNavListItem('today', 'Today', o),
          c.createNavListItem('date_range', 'Week', o);
        const a = document.createElement('h2');
        (a.textContent = 'Projects'),
          (a.id = 'projects-title'),
          t.appendChild(a);
        const d = document.createElement('ul');
        d.setAttribute('id', 'nav-list-projects'),
          t.appendChild(d),
          c.createNavListItem(
            'add_circle',
            'New project',
            d,
            'new-project-btn'
          ),
          e.appendChild(t);
      })(e),
        ((e) => {
          const t = document.createElement('section');
          c.createTaskElement(t), e.appendChild(t);
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
    o.initButtons();
})();
