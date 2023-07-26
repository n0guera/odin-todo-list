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
        if (c.length) for (var a = c.length - 1; a > -1 && !t; ) t = c[a--].src;
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
          const a = document.createElement('li');
          a.classList.add('nav-item'),
            ((e, t, n, c) => {
              const a = document.createElement('button');
              a.classList.add('nav-btn', 'font-20px', 'flex', 'align-center'),
                c && (a.id = c);
              const o = document.createElement('span');
              (o.textContent = e),
                o.classList.add('material-icons'),
                a.appendChild(o),
                (a.innerHTML += t),
                n.appendChild(a);
            })(e, t, a, c),
            n.appendChild(a);
        },
        t = () => {
          const t = document.querySelector('#nav-list-projects'),
            c = n.getProjectList();
          (t.innerHTML = ''),
            c.forEach((n) => {
              e('folder', `${n.projectName}`, t);
            });
        };
      return {
        createNavListItem: e,
        createTaskElement: (e) => {
          const t = document.createElement('article');
          e.appendChild(t);
        },
        updateNavProjectList: t,
        addNewProjectPopup: () => {
          const e = document.querySelector('nav'),
            c = document.querySelector('#new-project-btn');
          c.style.display = 'none';
          const a = document.createElement('div');
          a.id = 'new-project-popup';
          const o = document.createElement('input');
          o.classList.add('font-20px'),
            (o.type = 'text'),
            (o.id = 'project-name'),
            (o.name = 'projectName'),
            (o.required = !0),
            a.appendChild(o);
          const d = document.createElement('div');
          (d.id = 'new-project-popup-buttons'),
            d.classList.add('flex', 'font-20px'),
            a.appendChild(d);
          const i = document.createElement('button');
          (i.id = 'accept-new-project-btn'),
            (i.textContent = 'Ok'),
            i.classList.add('flex', 'font-20px', 'justify-center'),
            d.appendChild(i);
          const r = document.createElement('button');
          (r.id = 'cancel-new-project-btn'),
            (r.textContent = 'Cancel'),
            r.classList.add('flex', 'font-20px', 'justify-center'),
            d.appendChild(r),
            i.addEventListener('click', () => {
              a.remove(),
                n.storeNewProject(o.value),
                t(),
                (c.style.display = 'flex');
            }),
            r.addEventListener('click', () => {
              a.remove(), (c.style.display = 'flex');
            }),
            e.appendChild(a);
        },
        displayPageTitle: (e) => {
          const t = document.querySelector('#page-title');
          switch (e.target.id) {
            case 'home-tab':
              t.textContent = 'Home';
              break;
            case 'today-tab':
              t.textContent = 'Today';
              break;
            case 'week-tab':
              t.textContent = 'Week';
          }
        },
        addNewTaskPopup: () => {
          const e = document.querySelector('#element-container'),
            t = document.querySelector('#new-task-btn');
          t.style.display = 'none';
          const n = document.createElement('div');
          n.id = 'new-task-popup';
          const c = document.createElement('input');
          c.classList.add('font-20px'),
            (c.type = 'text'),
            (c.id = 'task-name'),
            (c.name = 'taskName'),
            (c.required = !0),
            n.appendChild(c);
          const a = document.createElement('div');
          (a.id = 'new-task-popup-buttons'),
            a.classList.add('flex', 'font-20px'),
            n.appendChild(a);
          const o = document.createElement('button');
          (o.id = 'accept-new-task-btn'),
            (o.textContent = 'Ok'),
            o.classList.add('flex', 'font-20px', 'justify-center'),
            a.appendChild(o);
          const d = document.createElement('button');
          (d.id = 'cancel-new-task-btn'),
            (d.textContent = 'Cancel'),
            d.classList.add('flex', 'font-20px', 'justify-center'),
            a.appendChild(d),
            d.addEventListener('click', () => {
              n.remove(), (t.style.display = 'flex');
            }),
            e.appendChild(n);
        },
      };
    })(),
    a = () => {
      document
        .querySelector('#home-tab')
        .addEventListener('click', c.displayPageTitle),
        document
          .querySelector('#today-tab')
          .addEventListener('click', c.displayPageTitle),
        document
          .querySelector('#week-tab')
          .addEventListener('click', c.displayPageTitle),
        document
          .querySelector('#new-project-btn')
          .addEventListener('click', c.addNewProjectPopup),
        document
          .querySelector('#new-task-btn')
          .addEventListener('click', c.addNewTaskPopup);
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
    const a = document.createElement('p');
    a.setAttribute('id', 'logo-text'),
      (a.textContent = 'The Odin Project'),
      n.appendChild(a);
    const o = document.createElement('h1');
    (o.textContent = 'Todo List'),
      o.classList.add('font-48px'),
      e.appendChild(o),
      document.body.appendChild(e);
  })(),
    (() => {
      const e = document.createElement('main');
      document.body.appendChild(e),
        ((e) => {
          const t = document.createElement('nav'),
            n = document.createElement('h2');
          (n.textContent = 'Tasks'), (n.id = 'tasks-title'), t.appendChild(n);
          const a = document.createElement('ul');
          a.setAttribute('id', 'nav-list-tasks'),
            t.appendChild(a),
            c.createNavListItem('home', 'Home', a, 'home-tab'),
            c.createNavListItem('today', 'Today', a, 'today-tab'),
            c.createNavListItem('date_range', 'Week', a, 'week-tab');
          const o = document.createElement('h2');
          (o.textContent = 'Projects'),
            (o.id = 'projects-title'),
            t.appendChild(o);
          const d = document.createElement('ul');
          d.setAttribute('id', 'nav-list-projects'),
            t.appendChild(d),
            c.createNavListItem(
              'add_circle',
              'New project',
              t,
              'new-project-btn'
            ),
            e.appendChild(t);
        })(e),
        ((e) => {
          const t = document.createElement('section'),
            n = document.createElement('div');
          (n.id = 'element-container'), t.appendChild(n);
          const a = document.createElement('h2');
          (a.id = 'page-title'),
            (a.textContent = 'Home'),
            n.appendChild(a),
            c.createNavListItem('add_circle', 'New task', n, 'new-task-btn');
          const o = document.createElement('div');
          (o.id = 'task-container'), n.appendChild(o), e.appendChild(t);
        })(e);
    })(),
    (() => {
      const e = document.createElement('footer'),
        t = document.createElement('p');
      (t.textContent = 'Made with <3 for The Odin Project curriculum'),
        t.classList.add('flex', 'font-20px', 'justify-center'),
        e.appendChild(t),
        document.body.appendChild(e);
    })(),
    window.addEventListener('load', c.updateNavProjectList()),
    a();
})();
