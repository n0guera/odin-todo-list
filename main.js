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
          t = o();
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
        storeNewTask: (t, n, o) => {
          c(),
            e
              .find((e) => e.projectName === t)
              .tasks.push(((e, t) => ({ taskName: e, date: t }))(n, o)),
            localStorage.setItem('projects', JSON.stringify(e));
        },
        getProjectList: n,
        getNoteList: o,
        getTodayTasks: () => {},
        getWeekTasks: () => {},
        getTaskList: (e) => n().find((t) => t.projectName === e).tasks,
        updateProjectList: c,
        updateNoteList: a,
        validateProjectName: (e) =>
          void 0 === n().find((t) => t.projectName === e),
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
        t = () => {
          const e = document.querySelector('#task-container'),
            t = n.getNoteList();
          (e.innerHTML = ''),
            t.forEach((t) => {
              const n = document.createElement('div');
              n.classList.add('note'), e.appendChild(n);
              const o = document.createElement('h3');
              o.classList.add('note-title'),
                (o.textContent = t.noteName),
                n.appendChild(o);
              const c = document.createElement('p');
              c.classList.add('note-desc'),
                (c.textContent = t.noteDesc),
                n.appendChild(c);
            });
        },
        c = () => {
          const e = document.querySelector('#element-container'),
            t = document.querySelector('#new-task-btn');
          t.style.display = 'none';
          const o = document.createElement('form');
          (o.method = 'post'), (o.id = 'new-task-popup');
          const c = document.createElement('input');
          c.classList.add('font-20px'),
            (c.type = 'text'),
            (c.id = 'task-name'),
            (c.name = 'taskName'),
            (c.required = !0),
            (c.autocomplete = 'off'),
            o.appendChild(c);
          const a = document.createElement('input');
          (a.type = 'date'), (a.id = 'new-task-date'), o.appendChild(a);
          const d = document.createElement('div');
          (d.id = 'new-task-popup-buttons'),
            d.classList.add('flex', 'font-20px'),
            o.appendChild(d);
          const s = document.createElement('button');
          (s.type = 'submit'),
            (s.id = 'accept-new-task-btn'),
            (s.textContent = 'Ok'),
            s.classList.add('flex', 'font-20px', 'justify-center'),
            d.appendChild(s);
          const i = document.createElement('button');
          (i.id = 'cancel-new-task-btn'),
            (i.textContent = 'Cancel'),
            i.classList.add('flex', 'font-20px', 'justify-center'),
            d.appendChild(i),
            s.addEventListener('click', (e) => {
              e.preventDefault();
              const t = document.querySelector('#page-title').textContent;
              o.remove(), n.storeNewTask(t, c.value, a.value);
            }),
            i.addEventListener('click', () => {
              o.remove(), (t.style.display = 'flex');
            }),
            e.appendChild(o);
        },
        a = (e) => {
          const t = document.querySelector('#element-container');
          t.innerHTML = '';
          const a = document.createElement('h2');
          (a.id = 'page-title'), t.appendChild(a);
          const d = e.target.textContent.split('folder')[1];
          a.textContent = d;
          const s = document.createElement('div');
          (s.id = 'task-container'),
            t.appendChild(s),
            0 === n.getTaskList(d).length && (s.style.display = 'none'),
            o.createNavListItem('add_circle', 'New task', t, 'new-task-btn'),
            document
              .querySelector('#new-task-btn')
              .addEventListener('click', c);
        },
        d = () => {
          const t = document.querySelector('#nav-list-projects'),
            o = n.getProjectList();
          (t.innerHTML = ''),
            o.forEach((n) => {
              e('folder', `${n.projectName}`, t, '', 'project');
            }),
            document.querySelectorAll('.project').forEach((e) => {
              e.addEventListener('click', a);
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
        updateNavProjectList: d,
        updateNoteList: t,
        updateTaskContainer: () => {
          const e = document.querySelector('#task-container'),
            t = document.querySelector('#page-title').textContent;
          0 === n.getTaskList(t).length && (e.style.display = 'none');
        },
        addNewProjectPopup: () => {
          const e = document.querySelector('nav'),
            t = document.querySelector('#new-project-btn');
          t.style.display = 'none';
          const o = document.createElement('form');
          (o.method = 'post'), (o.id = 'new-project-popup');
          const c = document.createElement('input');
          c.classList.add('font-20px'),
            (c.type = 'text'),
            (c.id = 'project-name'),
            (c.name = 'projectName'),
            (c.required = !0),
            (c.autocomplete = 'off'),
            o.appendChild(c);
          const a = document.createElement('div');
          (a.id = 'new-project-popup-buttons'),
            a.classList.add('flex', 'font-20px'),
            o.appendChild(a);
          const s = document.createElement('button');
          (s.type = 'submit'),
            (s.id = 'accept-new-project-btn'),
            (s.textContent = 'Ok'),
            s.classList.add('flex', 'font-20px', 'justify-center'),
            a.appendChild(s);
          const i = document.createElement('button');
          (i.id = 'cancel-new-project-btn'),
            (i.textContent = 'Cancel'),
            i.classList.add('flex', 'font-20px', 'justify-center'),
            a.appendChild(i),
            s.addEventListener('click', (e) => {
              e.preventDefault(),
                n.validateProjectName(c.value) &&
                  (o.remove(),
                  n.storeNewProject(c.value),
                  d(),
                  (t.style.display = 'flex'));
            }),
            i.addEventListener('click', () => {
              o.remove(), (t.style.display = 'flex');
            }),
            e.appendChild(o);
        },
        addNewNotePopup: () => {
          const e = document.querySelector('#element-container'),
            o = document.querySelector('#new-note-btn');
          o.style.display = 'none';
          const c = document.createElement('form');
          (c.method = 'post'), (c.id = 'new-note-popup');
          const a = document.createElement('input');
          a.classList.add('font-20px'),
            (a.type = 'text'),
            (a.id = 'note-name'),
            (a.name = 'noteName'),
            (a.required = !0),
            (a.autocomplete = 'off'),
            c.appendChild(a);
          const d = document.createElement('input');
          d.classList.add('font-20px'),
            (d.type = 'text'),
            (d.id = 'note-desc'),
            (d.name = 'noteDesc'),
            (d.required = !0),
            c.appendChild(d);
          const s = document.createElement('div');
          (s.id = 'new-note-popup-buttons'),
            s.classList.add('flex', 'font-20px'),
            c.appendChild(s);
          const i = document.createElement('button');
          (i.type = 'submit'),
            (i.id = 'accept-new-note-btn'),
            (i.textContent = 'Ok'),
            i.classList.add('flex', 'font-20px', 'justify-center'),
            s.appendChild(i);
          const r = document.createElement('button');
          (r.id = 'cancel-new-note-btn'),
            (r.textContent = 'Cancel'),
            r.classList.add('flex', 'font-20px', 'justify-center'),
            s.appendChild(r),
            i.addEventListener('click', (e) => {
              e.preventDefault(),
                c.remove(),
                n.storeNewNote(a.value, d.value),
                t(),
                (o.style.display = 'flex');
            }),
            r.addEventListener('click', () => {
              c.remove(), (o.style.display = 'flex');
            }),
            e.appendChild(c);
        },
        addNewTaskPopup: c,
        viewProject: a,
      };
    })(),
    c = o,
    a = () => {
      const e = document.querySelector('#element-container');
      e.innerHTML = '';
      const t = document.createElement('h2');
      (t.id = 'page-title'), (t.textContent = 'Home'), e.appendChild(t);
      const o = document.createElement('div');
      (o.id = 'task-container'),
        e.appendChild(o),
        0 === n.getNoteList().length && (o.style.display = 'none'),
        c.updateNoteList(),
        c.createNavListItem('add_circle', 'New note', e, 'new-note-btn'),
        document
          .querySelector('#new-note-btn')
          .addEventListener('click', c.addNewNotePopup);
    },
    d = () => {
      const e = document.querySelector('#element-container');
      e.innerHTML = '';
      const t = document.createElement('h2');
      (t.id = 'page-title'), (t.textContent = 'Today'), e.appendChild(t);
      const o = document.createElement('div');
      (o.id = 'task-container'),
        e.appendChild(o),
        0 === n.getTodayTasks().length && (o.style.display = 'none');
    },
    s = () => {},
    i = () => {
      document.querySelector('#home-tab').addEventListener('click', a),
        document.querySelector('#today-tab').addEventListener('click', d),
        document.querySelector('#week-tab').addEventListener('click', s),
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
          const o = document.createElement('ul');
          o.setAttribute('id', 'nav-list-tasks'),
            t.appendChild(o),
            c.createNavListItem('home', 'Home', o, 'home-tab'),
            c.createNavListItem('today', 'Today', o, 'today-tab'),
            c.createNavListItem('date_range', 'Week', o, 'week-tab');
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
              t,
              'new-project-btn'
            ),
            e.appendChild(t);
        })(e),
        ((e) => {
          const t = document.createElement('section');
          e.appendChild(t);
          const n = document.createElement('div');
          (n.id = 'element-container'),
            t.appendChild(n),
            a(),
            c.updateNoteList();
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
    i();
})();
