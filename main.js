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
        var a = n.getElementsByTagName('script');
        if (a.length) for (var o = a.length - 1; o > -1 && !t; ) t = a[o--].src;
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
        a = () => JSON.parse(localStorage.getItem('notes')) || [],
        o = () => {
          e = n();
        },
        c = () => {
          t = a();
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
          c();
          const a = ((e, t) => ({ noteName: e, noteDesc: t }))(e, n);
          t.push(a), localStorage.setItem('notes', JSON.stringify(t));
        },
        storeNewTask: (t, n, a) => {
          o(),
            e
              .find((e) => e.projectName === t)
              .tasks.push(
                ((e, t, n) => ({ taskName: e, dueDate: t, checked: !1 }))(n, a)
              ),
            localStorage.setItem('projects', JSON.stringify(e));
        },
        getProjectList: n,
        getNoteList: a,
        getTodayTasks: () => {},
        getWeekTasks: () => {},
        getTaskList: (e) => n().find((t) => t.projectName === e).tasks,
        updateProjectList: o,
        updateNoteList: c,
        validateProjectName: (e) =>
          void 0 === n().find((t) => t.projectName === e),
        checkTask: (t, n) => {
          o(),
            (e
              .find((e) => e.projectName === t)
              .tasks.find((e) => e.taskName === n).checked = !0),
            localStorage.setItem('projects', JSON.stringify(e));
        },
        deleteTask: (t, n) => {
          o();
          const a = e.find((e) => e.projectName === t).tasks;
          for (let e = 0; e < a.length; e += 1)
            a[e].taskName === n && a.splice(e, 1);
          (e.find((e) => e.projectName === t).tasks = a),
            localStorage.setItem('projects', JSON.stringify(e));
        },
        deleteProject: (t) => {
          o();
          for (let n = 0; n < e.length; n += 1)
            e[n].projectName === t && e.splice(n, 1);
          localStorage.setItem('projects', JSON.stringify(e));
        },
      };
    })(),
    a = (() => {
      const e = (e, t, n, a, o) => {
          const c = document.createElement('li');
          c.classList.add('nav-item'),
            ((e, t, n, a, o) => {
              const c = document.createElement('button');
              c.classList.add('nav-btn', 'font-20px', 'flex', 'align-center'),
                o && c.classList.add(o),
                a && (c.id = a);
              const d = document.createElement('span');
              (d.textContent = e),
                d.classList.add('material-icons'),
                c.appendChild(d),
                (c.innerHTML += t),
                n.appendChild(c);
            })(e, t, c, a, o),
            n.appendChild(c);
        },
        t = (e, t, n, a) => {
          const o = document.createElement('button');
          o.classList.add('task', 'flex', 'align-center', 'font-20px');
          const c = document.createElement('div');
          c.classList.add('task-left-panel', 'flex'), o.appendChild(c);
          const d = document.createElement('div');
          d.classList.add('task-right-panel', 'flex'), o.appendChild(d);
          const s = document.createElement('span');
          n && (s.textContent = 'check_box'),
            n || (s.textContent = 'check_box_outline_blank'),
            s.classList.add('material-icons', 'task-status'),
            (s.dataset.taskName = e),
            c.appendChild(s);
          const l = document.createElement('p');
          (l.textContent = e), c.appendChild(l);
          const i = document.createElement('p');
          (i.textContent = t), d.appendChild(i);
          const r = document.createElement('span');
          (r.textContent = 'delete'),
            r.classList.add('material-icons', 'delete-task'),
            (r.dataset.taskName = e),
            d.appendChild(r),
            a.appendChild(o);
        },
        a = () => {
          const e = document.querySelector('.note-container'),
            t = n.getNoteList();
          (e.innerHTML = ''),
            0 === t.length && (e.style.display = 'none'),
            t.length > 0 && (e.style.display = 'grid'),
            t.forEach((t) => {
              const n = document.createElement('div');
              n.classList.add('note'), e.appendChild(n);
              const a = document.createElement('h3');
              a.classList.add('note-title'),
                (a.textContent = t.noteName),
                n.appendChild(a);
              const o = document.createElement('p');
              o.classList.add('note-desc'),
                (o.textContent = t.noteDesc),
                n.appendChild(o);
            });
        },
        o = () => {
          const e = document.querySelector('.task-container'),
            a = document.querySelector('#page-title').textContent,
            c = n.getTaskList(a);
          (e.innerHTML = ''),
            0 === c.length && (e.style.display = 'none'),
            c.length > 0 && (e.style.display = 'grid'),
            c.forEach((n) => {
              t(n.taskName, n.dueDate, n.checked, e);
            }),
            document.querySelectorAll('.task-status').forEach((e) => {
              e.addEventListener('click', (e) => {
                ((e, t) => {
                  const a = e.target.dataset.taskName.toString();
                  (e.target.textContent = 'check_box'), n.checkTask(t, a);
                })(e, a);
              });
            }),
            document.querySelectorAll('.delete-task').forEach((e) => {
              e.addEventListener('click', (e) => {
                const t = e.target.dataset.taskName.toString();
                n.deleteTask(a, t), o();
              });
            });
        },
        c = () => {
          const e = document.querySelector('#element-container'),
            t = document.querySelector('#new-task-btn');
          t.style.display = 'none';
          const a = document.createElement('form');
          (a.method = 'post'), (a.id = 'new-task-popup');
          const c = document.createElement('input');
          c.classList.add('font-20px'),
            (c.type = 'text'),
            (c.id = 'task-name'),
            (c.name = 'taskName'),
            (c.required = !0),
            (c.autocomplete = 'off'),
            a.appendChild(c);
          const d = document.createElement('input');
          (d.type = 'date'), (d.id = 'new-task-date'), a.appendChild(d);
          const s = document.createElement('div');
          (s.id = 'new-task-popup-buttons'),
            s.classList.add('flex', 'font-20px'),
            a.appendChild(s);
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
              n.storeNewTask(s, c.value, d.value),
                a.remove(),
                o(),
                (t.style.display = 'flex');
            }),
            i.addEventListener('click', () => {
              a.remove(), (t.style.display = 'flex');
            }),
            e.appendChild(a);
        },
        d = (t) => {
          const a = document.querySelector('#element-container');
          a.innerHTML = '';
          const d = t.target.dataset.projectName.toString(),
            s = document.createElement('h2');
          (s.id = 'page-title'), (s.textContent = d), a.appendChild(s);
          const l = document.createElement('div');
          (l.id = 'container'),
            l.classList.add('task-container'),
            a.appendChild(l),
            0 === n.getTaskList(d).length && (l.style.display = 'none'),
            o(),
            e('add_circle', 'New task', a, 'new-task-btn'),
            document
              .querySelector('#new-task-btn')
              .addEventListener('click', c);
        },
        s = () => {
          const e = document.querySelector('#nav-list-projects'),
            t = n.getProjectList();
          (e.innerHTML = ''),
            t.forEach((t) => {
              ((e, t) => {
                const n = document.createElement('button');
                n.classList.add(
                  'project-item',
                  'font-20px',
                  'flex',
                  'align-center'
                ),
                  (n.dataset.projectName = e);
                const a = document.createElement('span');
                (a.textContent = 'folder'),
                  a.classList.add('material-icons'),
                  (a.dataset.projectName = e),
                  n.appendChild(a);
                const o = document.createElement('p');
                (o.textContent = e),
                  o.classList.add('project-name-element'),
                  (o.dataset.projectName = e),
                  n.appendChild(o);
                const c = document.createElement('span');
                (c.textContent = 'delete'),
                  c.classList.add('material-icons', 'delete-project-btn'),
                  (c.dataset.projectName = e),
                  (c.style.display = 'none'),
                  n.appendChild(c),
                  (n.onmouseover = () => {
                    c.style.display = 'inline-block';
                  }),
                  (n.onmouseout = () => {
                    c.style.display = 'none';
                  }),
                  t.appendChild(n);
              })(`${t.projectName}`, e);
            });
          const a = document.querySelectorAll('.project-item');
          a.forEach((e) => {
            e.addEventListener('click', d);
          }),
            document.querySelectorAll('.delete-project-btn').forEach((e) => {
              e.addEventListener('click', (e) => {
                a.forEach((e) => {
                  e.removeEventListener('click', d);
                });
                const t = e.target.dataset.projectName.toString();
                (document.querySelector('#element-container').innerHTML = ''),
                  n.deleteProject(t),
                  s();
              });
            });
        };
      return {
        createButton: (e, t, n, a, o) => {
          const c = document.createElement('button');
          c.classList.add('font-20px', 'flex', 'align-center'),
            o && c.classList.add(o),
            a && (c.id = a);
          const d = document.createElement('span');
          (d.textContent = e),
            d.classList.add('material-icons'),
            c.appendChild(d),
            (c.innerHTML += t),
            n.appendChild(c);
        },
        createNavListItem: e,
        createTaskElement: t,
        updateNavProjectList: s,
        updateNoteList: a,
        updateTaskContainer: o,
        addNewProjectPopup: () => {
          const e = document.querySelector('nav'),
            t = document.querySelector('#new-project-btn');
          t.style.display = 'none';
          const a = document.createElement('form');
          (a.method = 'post'), (a.id = 'new-project-popup');
          const o = document.createElement('input');
          o.classList.add('font-20px'),
            (o.type = 'text'),
            (o.id = 'project-name'),
            (o.name = 'projectName'),
            (o.required = !0),
            (o.autocomplete = 'off'),
            a.appendChild(o);
          const c = document.createElement('div');
          (c.id = 'new-project-popup-buttons'),
            c.classList.add('flex', 'font-20px'),
            a.appendChild(c);
          const d = document.createElement('button');
          (d.type = 'submit'),
            (d.id = 'accept-new-project-btn'),
            (d.textContent = 'Ok'),
            d.classList.add('flex', 'font-20px', 'justify-center'),
            c.appendChild(d);
          const l = document.createElement('button');
          (l.id = 'cancel-new-project-btn'),
            (l.textContent = 'Cancel'),
            l.classList.add('flex', 'font-20px', 'justify-center'),
            c.appendChild(l),
            d.addEventListener('click', (e) => {
              e.preventDefault(),
                n.validateProjectName(o.value) &&
                  (a.remove(),
                  n.storeNewProject(o.value),
                  s(),
                  (t.style.display = 'flex'));
            }),
            l.addEventListener('click', () => {
              a.remove(), (t.style.display = 'flex');
            }),
            e.appendChild(a);
        },
        addNewNotePopup: () => {
          const e = document.querySelector('#element-container'),
            t = document.querySelector('#new-note-btn');
          t.style.display = 'none';
          const o = document.createElement('form');
          (o.method = 'post'), (o.id = 'new-note-popup');
          const c = document.createElement('input');
          c.classList.add('font-20px'),
            (c.type = 'text'),
            (c.id = 'note-name'),
            (c.name = 'noteName'),
            (c.required = !0),
            (c.autocomplete = 'off'),
            o.appendChild(c);
          const d = document.createElement('input');
          d.classList.add('font-20px'),
            (d.type = 'text'),
            (d.id = 'note-desc'),
            (d.name = 'noteDesc'),
            (d.required = !0),
            o.appendChild(d);
          const s = document.createElement('div');
          (s.id = 'new-note-popup-buttons'),
            s.classList.add('flex', 'font-20px'),
            o.appendChild(s);
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
                n.storeNewNote(c.value, d.value),
                o.remove(),
                a(),
                (t.style.display = 'flex');
            }),
            i.addEventListener('click', () => {
              o.remove(), (t.style.display = 'flex');
            }),
            e.appendChild(o);
        },
        addNewTaskPopup: c,
        viewProject: d,
      };
    })(),
    o = () => {
      const e = document.querySelector('#element-container');
      e.innerHTML = '';
      const t = document.createElement('h2');
      (t.id = 'page-title'), (t.textContent = 'Home'), e.appendChild(t);
      const o = document.createElement('div');
      (o.id = 'container'),
        o.classList.add('note-container'),
        e.appendChild(o),
        0 === n.getNoteList().length && (o.style.display = 'none'),
        a.updateNoteList(),
        a.createNavListItem('add_circle', 'New note', e, 'new-note-btn'),
        document
          .querySelector('#new-note-btn')
          .addEventListener('click', a.addNewNotePopup);
    },
    c = () => {
      const e = document.querySelector('#element-container');
      e.innerHTML = '';
      const t = document.createElement('h2');
      (t.id = 'page-title'), (t.textContent = 'Today'), e.appendChild(t);
      const a = document.createElement('div');
      (a.id = 'task-container'),
        e.appendChild(a),
        0 === n.getTodayTasks().length && (a.style.display = 'none');
    },
    d = () => {
      const e = document.querySelector('#element-container');
      e.innerHTML = '';
      const t = document.createElement('h2');
      (t.id = 'page-title'), (t.textContent = 'Week'), e.appendChild(t);
      const a = document.createElement('div');
      (a.id = 'task-container'),
        e.appendChild(a),
        0 === n.getWeekTasks().length && (a.style.display = 'none');
    },
    s = () => {
      document.querySelector('#home-tab').addEventListener('click', o),
        document.querySelector('#today-tab').addEventListener('click', c),
        document.querySelector('#week-tab').addEventListener('click', d),
        document.querySelectorAll('.project-item').forEach((e) => {
          e.addEventListener('click', a.viewProject);
        }),
        document.querySelectorAll('.delete-project-btn').forEach((e) => {
          e.addEventListener('click', (e) => {
            n.deleteProject(e.target.dataset.projectName.toString()),
              a.updateNavProjectList();
          });
        }),
        document
          .querySelector('#new-project-btn')
          .addEventListener('click', a.addNewProjectPopup),
        document
          .querySelector('#new-note-btn')
          .addEventListener('click', a.addNewNotePopup);
    };
  (() => {
    const e = document.createElement('header'),
      n = document.createElement('div');
    n.setAttribute('id', 'logo-container'), e.appendChild(n);
    const a = new Image();
    (a.src = t),
      (a.alt = 'The Odin Project logo'),
      a.setAttribute('id', 'odin-logo'),
      n.appendChild(a);
    const o = document.createElement('p');
    o.setAttribute('id', 'logo-text'),
      (o.textContent = 'The Odin Project'),
      n.appendChild(o);
    const c = document.createElement('h1');
    (c.textContent = 'Todo List'),
      c.classList.add('font-48px'),
      e.appendChild(c),
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
            a.createNavListItem('home', 'Home', o, 'home-tab'),
            a.createNavListItem('today', 'Today', o, 'today-tab'),
            a.createNavListItem('date_range', 'Week', o, 'week-tab');
          const c = document.createElement('h2');
          (c.textContent = 'Projects'),
            (c.id = 'projects-title'),
            t.appendChild(c);
          const d = document.createElement('ul');
          d.setAttribute('id', 'nav-list-projects'),
            t.appendChild(d),
            a.createNavListItem(
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
            o(),
            a.updateNoteList();
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
    window.addEventListener('load', a.updateNavProjectList()),
    s();
})();
