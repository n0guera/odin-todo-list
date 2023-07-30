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
  const t = e.p + '4f0f495b2f256748749f.png',
    n = (() => {
      let e = [],
        t = [];
      const n = () => JSON.parse(localStorage.getItem('projects')) || [],
        o = () => JSON.parse(localStorage.getItem('notes')) || [],
        c = () => {
          e = n();
        },
        a = () => {
          t = o;
        };
      return {
        projects: e,
        notes: t,
        storeNewProject: (t) => {
          c();
          const n = ((e, t) => ({ projectName: e, tasks: [] }))(t);
          e.push(n), localStorage.setItem('projects', JSON.stringify(e));
        },
        storeNewNote: (e, n) => {
          a();
          const o = ((e, t) => ({ noteName: e, noteDesc: t }))(e, n);
          t.push(o), localStorage.setItem('notes', JSON.stringify(t));
        },
        storeNewTask: (e, t) => {
          const n = ((e, t) => ({ taskName: e, taskDesc: t }))(e, t);
          (void 0).tasks.push(n);
        },
        getProjectList: n,
        getNotesList: o,
        updateProjectList: c,
        updateNoteList: a,
      };
    })(),
    o = (() => {
      const e = (e, t, n, o, c) => {
          const a = document.createElement('li');
          a.classList.add('nav-item'),
            ((e, t, n, o, c) => {
              const a = document.createElement('button');
              a.classList.add('nav-btn', 'font-20px', 'flex', 'align-center'),
                c && a.classList.add(c),
                o && (a.id = o);
              const d = document.createElement('span');
              (d.textContent = e),
                d.classList.add('material-icons'),
                a.appendChild(d),
                (a.innerHTML += t),
                n.appendChild(a);
            })(e, t, a, o, c),
            n.appendChild(a);
        },
        t = () => {},
        o = () => {
          const o = document.querySelector('#nav-list-projects'),
            c = n.getProjectList();
          (o.innerHTML = ''),
            c.forEach((t) => {
              e('folder', `${t.projectName}`, o, '', 'project');
            }),
            document.querySelectorAll('.project').forEach((e) => {
              e.addEventListener('click', t);
            });
        };
      return {
        createButton: (e, t, n, o, c) => {
          const a = document.createElement('button');
          a.classList.add('font-20px', 'flex', 'align-center'),
            c && a.classList.add(c),
            o && (a.id = o);
          const d = document.createElement('span');
          (d.textContent = e),
            d.classList.add('material-icons'),
            a.appendChild(d),
            (a.innerHTML += t),
            n.appendChild(a);
        },
        createNavListItem: e,
        createTaskElement: (e) => {
          const t = document.createElement('article');
          e.appendChild(t);
        },
        updateNavProjectList: o,
        addNewProjectPopup: () => {
          const e = document.querySelector('nav'),
            t = document.querySelector('#new-project-btn');
          t.style.display = 'none';
          const c = document.createElement('div');
          c.id = 'new-project-popup';
          const a = document.createElement('input');
          a.classList.add('font-20px'),
            (a.type = 'text'),
            (a.id = 'project-name'),
            (a.name = 'projectName'),
            (a.required = !0),
            c.appendChild(a);
          const d = document.createElement('div');
          (d.id = 'new-project-popup-buttons'),
            d.classList.add('flex', 'font-20px'),
            c.appendChild(d);
          const s = document.createElement('button');
          (s.id = 'accept-new-project-btn'),
            (s.textContent = 'Ok'),
            s.classList.add('flex', 'font-20px', 'justify-center'),
            d.appendChild(s);
          const r = document.createElement('button');
          (r.id = 'cancel-new-project-btn'),
            (r.textContent = 'Cancel'),
            r.classList.add('flex', 'font-20px', 'justify-center'),
            d.appendChild(r),
            s.addEventListener('click', () => {
              c.remove(),
                n.storeNewProject(a.value),
                o(),
                (t.style.display = 'flex');
            }),
            r.addEventListener('click', () => {
              c.remove(), (t.style.display = 'flex');
            }),
            e.appendChild(c);
        },
        addNewNotePopup: () => {
          const e = document.querySelector('#element-container'),
            t = document.querySelector('#new-note-btn');
          t.style.display = 'none';
          const o = document.createElement('div');
          o.id = 'new-note-popup';
          const c = document.createElement('input');
          c.classList.add('font-20px'),
            (c.type = 'text'),
            (c.id = 'note-name'),
            (c.name = 'noteName'),
            (c.required = !0),
            o.appendChild(c);
          const a = document.createElement('div');
          (a.id = 'new-note-popup-buttons'),
            a.classList.add('flex', 'font-20px'),
            o.appendChild(a);
          const d = document.createElement('button');
          (d.id = 'accept-new-note-btn'),
            (d.textContent = 'Ok'),
            d.classList.add('flex', 'font-20px', 'justify-center'),
            a.appendChild(d);
          const s = document.createElement('button');
          (s.id = 'cancel-new-note-btn'),
            (s.textContent = 'Cancel'),
            s.classList.add('flex', 'font-20px', 'justify-center'),
            a.appendChild(s),
            d.addEventListener('click', () => {
              o.remove(),
                n.storeNewNote(c.value),
                (() => {
                  const e = document.querySelector('#task-container'),
                    t = n.getNotesList();
                  (e.innerHTML = ''), t.forEach();
                })(),
                (t.style.display = 'flex');
            }),
            s.addEventListener('click', () => {
              o.remove(), (t.style.display = 'flex');
            }),
            e.appendChild(o);
        },
        addNewTaskPopup: () => {
          const e = document.querySelector('#element-container'),
            t = document.querySelector('#new-task-btn');
          t.style.display = 'none';
          const n = document.createElement('div');
          n.id = 'new-task-popup';
          const o = document.createElement('input');
          o.classList.add('font-20px'),
            (o.type = 'text'),
            (o.id = 'task-name'),
            (o.name = 'taskName'),
            (o.required = !0),
            n.appendChild(o);
          const c = document.createElement('div');
          (c.id = 'new-task-popup-buttons'),
            c.classList.add('flex', 'font-20px'),
            n.appendChild(c);
          const a = document.createElement('button');
          (a.id = 'accept-new-task-btn'),
            (a.textContent = 'Ok'),
            a.classList.add('flex', 'font-20px', 'justify-center'),
            c.appendChild(a);
          const d = document.createElement('button');
          (d.id = 'cancel-new-task-btn'),
            (d.textContent = 'Cancel'),
            d.classList.add('flex', 'font-20px', 'justify-center'),
            c.appendChild(d),
            d.addEventListener('click', () => {
              n.remove(), (t.style.display = 'flex');
            }),
            e.appendChild(n);
        },
        viewProject: t,
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
      };
    })(),
    c = () => {
      const e = document.querySelector('#element-container');
      e.innerHTML = '';
      const t = document.createElement('h2');
      (t.id = 'page-title'),
        (t.textContent = 'Home'),
        e.appendChild(t),
        o.createNavListItem('add_circle', 'New note', e, 'new-note-btn');
    },
    a = () => {},
    d = () => {},
    s = () => {
      document.querySelector('#home-tab').addEventListener('click', c),
        document.querySelector('#today-tab').addEventListener('click', a),
        document.querySelector('#week-tab').addEventListener('click', d),
        document.querySelectorAll('.project').forEach((e) => {
          e.addEventListener('click', o.viewProject);
        }),
        document
          .querySelector('#new-project-btn')
          .addEventListener('click', o.addNewProjectPopup),
        document
          .querySelector('#new-note-btn')
          .addEventListener('click', o.addNewNotePopup);
    };
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
    const a = document.createElement('h1');
    (a.textContent = 'Todo List'),
      a.classList.add('font-48px'),
      e.appendChild(a),
      document.body.appendChild(e);
  })(),
    (() => {
      const e = document.createElement('main');
      document.body.appendChild(e),
        ((e) => {
          const t = document.createElement('nav'),
            n = document.createElement('h2');
          (n.textContent = 'Tasks'), (n.id = 'tasks-title'), t.appendChild(n);
          const c = document.createElement('ul');
          c.setAttribute('id', 'nav-list-tasks'),
            t.appendChild(c),
            o.createNavListItem('home', 'Home', c, 'home-tab'),
            o.createNavListItem('today', 'Today', c, 'today-tab'),
            o.createNavListItem('date_range', 'Week', c, 'week-tab');
          const a = document.createElement('h2');
          (a.textContent = 'Projects'),
            (a.id = 'projects-title'),
            t.appendChild(a);
          const d = document.createElement('ul');
          d.setAttribute('id', 'nav-list-projects'),
            t.appendChild(d),
            o.createNavListItem(
              'add_circle',
              'New project',
              t,
              'new-project-btn'
            ),
            e.appendChild(t);
        })(e),
        ((e) => {
          const t = document.createElement('section');
          e.appendChild(t);
          const o = document.createElement('div');
          (o.id = 'element-container'), t.appendChild(o), c();
          const a = document.createElement('div');
          (a.id = 'task-container'),
            0 === n.getNotesList.length && (a.style.display = 'none'),
            o.appendChild(a);
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
    window.addEventListener('load', o.updateNavProjectList()),
    s();
})();
