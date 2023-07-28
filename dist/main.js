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
      let e = [],
        t = [];
      const n = () => JSON.parse(localStorage.getItem('projects')) || [],
        c = () => JSON.parse(localStorage.getItem('notes')) || [],
        o = () => {
          e = n();
        },
        d = () => {
          t = c;
        };
      return {
        projects: e,
        notes: t,
        storeNewProject: (t) => {
          o();
          const n = ((e, t) => ({ projectName: e, tasks: [] }))(t);
          e.push(n), localStorage.setItem('projects', JSON.stringify(e));
        },
        storeNewNote: (e, n) => {
          d();
          const c = ((e, t) => ({ noteName: e, noteDesc: t }))(e, n);
          t.push(c), localStorage.setItem('notes', JSON.stringify(t));
        },
        storeNewTask: (e, t) => {
          const n = ((e, t) => ({ taskName: e, taskDesc: t }))(e, t);
          (void 0).tasks.push(n);
        },
        getProjectList: n,
        getNotesList: c,
        updateProjectList: o,
        updateNoteList: d,
      };
    })(),
    c = (() => {
      const e = (e, t, n, c, o) => {
          const d = document.createElement('li');
          d.classList.add('nav-item'),
            ((e, t, n, c, o) => {
              const d = document.createElement('button');
              d.classList.add('nav-btn', 'font-20px', 'flex', 'align-center'),
                o && d.classList.add(o),
                c && (d.id = c);
              const a = document.createElement('span');
              (a.textContent = e),
                a.classList.add('material-icons'),
                d.appendChild(a),
                (d.innerHTML += t),
                n.appendChild(d);
            })(e, t, d, c, o),
            n.appendChild(d);
        },
        t = () => {},
        c = () => {
          const c = document.querySelector('#nav-list-projects'),
            o = n.getProjectList();
          (c.innerHTML = ''),
            o.forEach((t) => {
              e('folder', `${t.projectName}`, c, '', 'project');
            }),
            document.querySelectorAll('.project').forEach((e) => {
              e.addEventListener('click', t);
            });
        };
      return {
        createButton: (e, t, n, c, o) => {
          const d = document.createElement('button');
          d.classList.add('font-20px', 'flex', 'align-center'),
            o && d.classList.add(o),
            c && (d.id = c);
          const a = document.createElement('span');
          (a.textContent = e),
            a.classList.add('material-icons'),
            d.appendChild(a),
            (d.innerHTML += t),
            n.appendChild(d);
        },
        createNavListItem: e,
        createTaskElement: (e) => {
          const t = document.createElement('article');
          e.appendChild(t);
        },
        updateNavProjectList: c,
        addNewProjectPopup: () => {
          const e = document.querySelector('nav'),
            t = document.querySelector('#new-project-btn');
          t.style.display = 'none';
          const o = document.createElement('div');
          o.id = 'new-project-popup';
          const d = document.createElement('input');
          d.classList.add('font-20px'),
            (d.type = 'text'),
            (d.id = 'project-name'),
            (d.name = 'projectName'),
            (d.required = !0),
            o.appendChild(d);
          const a = document.createElement('div');
          (a.id = 'new-project-popup-buttons'),
            a.classList.add('flex', 'font-20px'),
            o.appendChild(a);
          const s = document.createElement('button');
          (s.id = 'accept-new-project-btn'),
            (s.textContent = 'Ok'),
            s.classList.add('flex', 'font-20px', 'justify-center'),
            a.appendChild(s);
          const i = document.createElement('button');
          (i.id = 'cancel-new-project-btn'),
            (i.textContent = 'Cancel'),
            i.classList.add('flex', 'font-20px', 'justify-center'),
            a.appendChild(i),
            s.addEventListener('click', () => {
              o.remove(),
                n.storeNewProject(d.value),
                c(),
                (t.style.display = 'flex');
            }),
            i.addEventListener('click', () => {
              o.remove(), (t.style.display = 'flex');
            }),
            e.appendChild(o);
        },
        addNewNotePopup: () => {
          const e = document.querySelector('#element-container'),
            t = document.querySelector('#new-note-btn');
          t.style.display = 'none';
          const n = document.createElement('div');
          n.id = 'new-note-popup';
          const c = document.createElement('input');
          c.classList.add('font-20px'),
            (c.type = 'text'),
            (c.id = 'note-name'),
            (c.name = 'noteName'),
            (c.required = !0),
            n.appendChild(c);
          const o = document.createElement('div');
          (o.id = 'new-note-popup-buttons'),
            o.classList.add('flex', 'font-20px'),
            n.appendChild(o);
          const d = document.createElement('button');
          (d.id = 'accept-new-note-btn'),
            (d.textContent = 'Ok'),
            d.classList.add('flex', 'font-20px', 'justify-center'),
            o.appendChild(d);
          const a = document.createElement('button');
          (a.id = 'cancel-new-note-btn'),
            (a.textContent = 'Cancel'),
            a.classList.add('flex', 'font-20px', 'justify-center'),
            o.appendChild(a),
            a.addEventListener('click', () => {
              n.remove(), (t.style.display = 'flex');
            }),
            e.appendChild(n);
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
          const o = document.createElement('div');
          (o.id = 'new-task-popup-buttons'),
            o.classList.add('flex', 'font-20px'),
            n.appendChild(o);
          const d = document.createElement('button');
          (d.id = 'accept-new-task-btn'),
            (d.textContent = 'Ok'),
            d.classList.add('flex', 'font-20px', 'justify-center'),
            o.appendChild(d);
          const a = document.createElement('button');
          (a.id = 'cancel-new-task-btn'),
            (a.textContent = 'Cancel'),
            a.classList.add('flex', 'font-20px', 'justify-center'),
            o.appendChild(a),
            a.addEventListener('click', () => {
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
    o = () => {
      const e = document.querySelector('#element-container');
      e.innerHTML = '';
      const t = document.createElement('h2');
      (t.id = 'page-title'),
        (t.textContent = 'Home'),
        e.appendChild(t),
        c.createNavListItem('add_circle', 'New note', e, 'new-note-btn');
    },
    d = () => {},
    a = () => {},
    s = () => {
      document.querySelector('#home-tab').addEventListener('click', o),
        document.querySelector('#today-tab').addEventListener('click', d),
        document.querySelector('#week-tab').addEventListener('click', a),
        document.querySelectorAll('.project').forEach((e) => {
          e.addEventListener('click', c.viewProject);
        }),
        document
          .querySelector('#new-project-btn')
          .addEventListener('click', c.addNewProjectPopup),
        document
          .querySelector('#new-note-btn')
          .addEventListener('click', c.addNewNotePopup);
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
      document.body.appendChild(e),
        ((e) => {
          const t = document.createElement('nav'),
            n = document.createElement('h2');
          (n.textContent = 'Tasks'), (n.id = 'tasks-title'), t.appendChild(n);
          const o = document.createElement('ul');
          o.setAttribute('id', 'nav-list-tasks'),
            t.appendChild(o),
            c.createNavListItem('home', 'Home', o, 'home-tab'),
            c.createNavListItem('today', 'Today', o, 'today-tab'),
            c.createNavListItem('date_range', 'Week', o, 'week-tab');
          const d = document.createElement('h2');
          (d.textContent = 'Projects'),
            (d.id = 'projects-title'),
            t.appendChild(d);
          const a = document.createElement('ul');
          a.setAttribute('id', 'nav-list-projects'),
            t.appendChild(a),
            c.createNavListItem(
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
          const c = document.createElement('div');
          (c.id = 'element-container'), t.appendChild(c), o();
          const d = document.createElement('div');
          (d.id = 'task-container'),
            0 === n.getNotesList.length && (d.style.display = 'none'),
            c.appendChild(d);
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
    s();
})();
