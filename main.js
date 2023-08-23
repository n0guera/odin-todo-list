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
              .tasks.push(
                ((e, t, n) => ({ taskName: e, dueDate: t, checked: !1 }))(n, o)
              ),
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
        checkTask: (t, n) => {
          c(),
            (e
              .find((e) => e.projectName === t)
              .tasks.find((e) => e.taskName === n).checked = !0),
            localStorage.setItem('projects', JSON.stringify(e));
        },
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
        t = (e, t, n) => {
          const o = document.createElement('button');
          o.classList.add('task', 'flex', 'align-center', 'font-20px');
          const c = document.createElement('div');
          c.classList.add('task-left-panel', 'flex'), o.appendChild(c);
          const a = document.createElement('div');
          a.classList.add('task-right-panel', 'flex'), o.appendChild(a);
          const d = document.createElement('span');
          t && (d.textContent = 'check_box'),
            t || (d.textContent = 'check_box_outline_blank'),
            d.classList.add('material-icons', 'task-status'),
            (d.dataset.taskName = e),
            c.appendChild(d);
          const s = document.createElement('p');
          (s.textContent = e), c.appendChild(s);
          const l = document.createElement('span');
          (l.textContent = 'delete'),
            l.classList.add('material-icons', 'delete-task'),
            a.appendChild(l),
            n.appendChild(o);
        },
        o = () => {
          const e = document.querySelector('.note-container'),
            t = n.getNoteList();
          (e.innerHTML = ''),
            0 === t.length && (e.style.display = 'none'),
            t.length > 0 && (e.style.display = 'grid'),
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
          const e = document.querySelector('.task-container'),
            o = document.querySelector('#page-title').textContent,
            c = n.getTaskList(o);
          (e.innerHTML = ''),
            0 === c.length && (e.style.display = 'none'),
            c.length > 0 && (e.style.display = 'grid'),
            c.forEach((n) => {
              t(n.taskName, n.checked, e);
            }),
            document.querySelectorAll('.task-status').forEach((e) => {
              e.addEventListener('click', (e) => {
                ((e, t) => {
                  const o = e.target.dataset.taskName.toString();
                  (e.target.textContent = 'check_box'), n.checkTask(t, o);
                })(e, o);
              });
            });
        },
        a = () => {
          const e = document.querySelector('#element-container'),
            t = document.querySelector('#new-task-btn');
          t.style.display = 'none';
          const o = document.createElement('form');
          (o.method = 'post'), (o.id = 'new-task-popup');
          const a = document.createElement('input');
          a.classList.add('font-20px'),
            (a.type = 'text'),
            (a.id = 'task-name'),
            (a.name = 'taskName'),
            (a.required = !0),
            (a.autocomplete = 'off'),
            o.appendChild(a);
          const d = document.createElement('input');
          (d.type = 'date'), (d.id = 'new-task-date'), o.appendChild(d);
          const s = document.createElement('div');
          (s.id = 'new-task-popup-buttons'),
            s.classList.add('flex', 'font-20px'),
            o.appendChild(s);
          const l = document.createElement('button');
          (l.type = 'submit'),
            (l.id = 'accept-new-task-btn'),
            (l.textContent = 'Ok'),
            l.classList.add('flex', 'font-20px', 'justify-center'),
            s.appendChild(l);
          const i = document.createElement('button');
          (i.id = 'cancel-new-task-btn'),
            (i.textContent = 'Cancel'),
            i.classList.add('flex', 'font-20px', 'justify-center'),
            s.appendChild(i),
            l.addEventListener('click', (e) => {
              e.preventDefault();
              const s = document.querySelector('#page-title').textContent;
              n.storeNewTask(s, a.value, d.value),
                o.remove(),
                c(),
                (t.style.display = 'flex');
            }),
            i.addEventListener('click', () => {
              o.remove(), (t.style.display = 'flex');
            }),
            e.appendChild(o);
        },
        d = (t) => {
          const o = document.querySelector('#element-container');
          o.innerHTML = '';
          const d = document.createElement('h2');
          (d.id = 'page-title'), o.appendChild(d);
          const s = t.target.textContent.split('folder')[1];
          d.textContent = s;
          const l = document.createElement('div');
          (l.id = 'container'),
            l.classList.add('task-container'),
            o.appendChild(l),
            0 === n.getTaskList(s).length && (l.style.display = 'none'),
            c(),
            e('add_circle', 'New task', o, 'new-task-btn'),
            document
              .querySelector('#new-task-btn')
              .addEventListener('click', a);
        },
        s = () => {
          const t = document.querySelector('#nav-list-projects'),
            o = n.getProjectList();
          (t.innerHTML = ''),
            o.forEach((n) => {
              e('folder', `${n.projectName}`, t, '', 'project');
            }),
            document.querySelectorAll('.project').forEach((e) => {
              e.addEventListener('click', d);
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
        createTaskElement: t,
        updateNavProjectList: s,
        updateNoteList: o,
        updateTaskContainer: c,
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
          const d = document.createElement('button');
          (d.type = 'submit'),
            (d.id = 'accept-new-project-btn'),
            (d.textContent = 'Ok'),
            d.classList.add('flex', 'font-20px', 'justify-center'),
            a.appendChild(d);
          const l = document.createElement('button');
          (l.id = 'cancel-new-project-btn'),
            (l.textContent = 'Cancel'),
            l.classList.add('flex', 'font-20px', 'justify-center'),
            a.appendChild(l),
            d.addEventListener('click', (e) => {
              e.preventDefault(),
                n.validateProjectName(c.value) &&
                  (o.remove(),
                  n.storeNewProject(c.value),
                  s(),
                  (t.style.display = 'flex'));
            }),
            l.addEventListener('click', () => {
              o.remove(), (t.style.display = 'flex');
            }),
            e.appendChild(o);
        },
        addNewNotePopup: () => {
          const e = document.querySelector('#element-container'),
            t = document.querySelector('#new-note-btn');
          t.style.display = 'none';
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
          const l = document.createElement('button');
          (l.type = 'submit'),
            (l.id = 'accept-new-note-btn'),
            (l.textContent = 'Ok'),
            l.classList.add('flex', 'font-20px', 'justify-center'),
            s.appendChild(l);
          const i = document.createElement('button');
          (i.id = 'cancel-new-note-btn'),
            (i.textContent = 'Cancel'),
            i.classList.add('flex', 'font-20px', 'justify-center'),
            s.appendChild(i),
            l.addEventListener('click', (e) => {
              e.preventDefault(),
                n.storeNewNote(a.value, d.value),
                c.remove(),
                o(),
                (t.style.display = 'flex');
            }),
            i.addEventListener('click', () => {
              c.remove(), (t.style.display = 'flex');
            }),
            e.appendChild(c);
        },
        addNewTaskPopup: a,
        viewProject: d,
      };
    })(),
    c = () => {
      const e = document.querySelector('#element-container');
      e.innerHTML = '';
      const t = document.createElement('h2');
      (t.id = 'page-title'), (t.textContent = 'Home'), e.appendChild(t);
      const c = document.createElement('div');
      (c.id = 'container'),
        c.classList.add('note-container'),
        e.appendChild(c),
        0 === n.getNoteList().length && (c.style.display = 'none'),
        o.updateNoteList(),
        o.createNavListItem('add_circle', 'New note', e, 'new-note-btn'),
        document
          .querySelector('#new-note-btn')
          .addEventListener('click', o.addNewNotePopup);
    },
    a = () => {
      const e = document.querySelector('#element-container');
      e.innerHTML = '';
      const t = document.createElement('h2');
      (t.id = 'page-title'), (t.textContent = 'Today'), e.appendChild(t);
      const o = document.createElement('div');
      (o.id = 'task-container'),
        e.appendChild(o),
        0 === n.getTodayTasks().length && (o.style.display = 'none');
    },
    d = () => {
      const e = document.querySelector('#element-container');
      e.innerHTML = '';
      const t = document.createElement('h2');
      (t.id = 'page-title'), (t.textContent = 'Week'), e.appendChild(t);
      const o = document.createElement('div');
      (o.id = 'task-container'),
        e.appendChild(o),
        0 === n.getWeekTasks().length && (o.style.display = 'none');
    },
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
          const n = document.createElement('div');
          (n.id = 'element-container'),
            t.appendChild(n),
            c(),
            o.updateNoteList();
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
