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
      const e = [];
      return {
        projects: e,
        storeNewProject: (t) => {
          const n = ((e, t) => ({ projectName: e, tasks: [] }))(t);
          e.push(n), localStorage.setItem('projects', JSON.stringify(e));
        },
        getProjectList: () => JSON.parse(localStorage.getItem('projects')),
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
            const r = document.createElement('span');
            (r.textContent = e),
              r.classList.add('material-icons'),
              o.appendChild(r),
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
        updateProjectList: () => {
          const t = document.querySelector('#nav-list-projects');
          (t.innerHTML = ''),
            n.projects.forEach((n) => {
              e('folder', `${n.projectName}`, t);
            });
        },
      };
    })(),
    o = (() => {
      const e = () => {
        const e = document.querySelector('#new-project-btn');
        e.style.display = 'none';
        const t = document.querySelector('#nav-list-projects'),
          o = document.createElement('div');
        (o.id = 'new-project-popup'), t.appendChild(o);
        const r = document.createElement('input');
        r.classList.add('font-20px'),
          (r.type = 'text'),
          (r.id = 'projectName'),
          (r.name = 'projectName'),
          (r.required = !0),
          o.appendChild(r);
        const a = document.createElement('div');
        (a.id = 'new-project-popup-buttons'),
          a.classList.add('flex', 'font-20px'),
          o.appendChild(a);
        const d = document.createElement('button');
        (d.id = 'accept-new-project-btn'),
          (d.textContent = 'Ok'),
          d.classList.add('flex', 'font-20px', 'justify-center'),
          a.appendChild(d);
        const s = document.createElement('button');
        (s.id = 'cancel-new-project-btn'),
          (s.textContent = 'Cancel'),
          s.classList.add('flex', 'font-20px', 'justify-center'),
          a.appendChild(s),
          d.addEventListener('click', () => {
            const t = document.querySelector('#nav-list-projects');
            n.storeNewProject(r.value),
              (o.style.display = 'none'),
              (e.style.display = 'flex'),
              c.updateProjectList(),
              c.createNavListItem(
                'add_circle',
                'New project',
                t,
                'new-project-btn'
              );
          }),
          t.appendChild(o);
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
    const r = document.createElement('h1');
    (r.textContent = 'Todo List'),
      r.classList.add('font-48px'),
      e.appendChild(r),
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
        const r = document.createElement('h2');
        (r.textContent = 'Projects'),
          (r.id = 'projects-title'),
          t.appendChild(r);
        const a = document.createElement('ul');
        a.setAttribute('id', 'nav-list-projects'),
          t.appendChild(a),
          c.createNavListItem(
            'add_circle',
            'New project',
            a,
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
