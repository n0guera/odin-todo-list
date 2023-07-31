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
        d = () => {
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
          d();
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
        updateNoteList: d,
      };
    })(),
    o = (() => {
      const e = (e, t, n, o, c) => {
          const d = document.createElement('li');
          d.classList.add('nav-item'),
            ((e, t, n, o, c) => {
              const d = document.createElement('button');
              d.classList.add('nav-btn', 'font-20px', 'flex', 'align-center'),
                c && d.classList.add(c),
                o && (d.id = o);
              const a = document.createElement('span');
              (a.textContent = e),
                a.classList.add('material-icons'),
                d.appendChild(a),
                (d.innerHTML += t),
                n.appendChild(d);
            })(e, t, d, o, c),
            n.appendChild(d);
        },
        t = (e) => {
          const t = document.querySelector('#page-title'),
            n = e.target.textContent;
          t.textContent = n.split('folder')[1];
        },
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
        },
        c = () => {
          const e = document.querySelector('#task-container'),
            t = n.getNotesList();
          (e.innerHTML = ''),
            t.forEach((t) => {
              const n = document.createElement('div');
              n.classList.add('note'), e.appendChild(n);
              const o = document.createElement('h3');
              o.classList.add('note-title'),
                (n.textContent = t.noteName),
                n.appendChild(o);
              const c = document.createElement('p');
              c.classList.add('note-desc'),
                (c.textContent = t.noteDesc),
                n.appendChild(c);
            });
        };
      return {
        createButton: (e, t, n, o, c) => {
          const d = document.createElement('button');
          d.classList.add('font-20px', 'flex', 'align-center'),
            c && d.classList.add(c),
            o && (d.id = o);
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
        updateNavProjectList: o,
        updateNoteList: c,
        addNewProjectPopup: () => {
          const e = document.querySelector('nav'),
            t = document.querySelector('#new-project-btn');
          t.style.display = 'none';
          const c = document.createElement('div');
          c.id = 'new-project-popup';
          const d = document.createElement('input');
          d.classList.add('font-20px'),
            (d.type = 'text'),
            (d.id = 'project-name'),
            (d.name = 'projectName'),
            (d.required = !0),
            c.appendChild(d);
          const a = document.createElement('div');
          (a.id = 'new-project-popup-buttons'),
            a.classList.add('flex', 'font-20px'),
            c.appendChild(a);
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
              c.remove(),
                n.storeNewProject(d.value),
                o(),
                (t.style.display = 'flex');
            }),
            i.addEventListener('click', () => {
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
          const d = document.createElement('input');
          d.classList.add('font-20px'),
            (d.type = 'text'),
            (d.id = 'note-name'),
            (d.name = 'noteName'),
            (d.required = !0),
            o.appendChild(d);
          const a = document.createElement('input');
          a.classList.add('font-20px'),
            (a.type = 'text'),
            (a.id = 'note-desc'),
            (a.name = 'noteDesc'),
            (a.required = !0),
            o.appendChild(a);
          const s = document.createElement('div');
          (s.id = 'new-note-popup-buttons'),
            s.classList.add('flex', 'font-20px'),
            o.appendChild(s);
          const i = document.createElement('button');
          (i.id = 'accept-new-note-btn'),
            (i.textContent = 'Ok'),
            i.classList.add('flex', 'font-20px', 'justify-center'),
            s.appendChild(i);
          const r = document.createElement('button');
          (r.id = 'cancel-new-note-btn'),
            (r.textContent = 'Cancel'),
            r.classList.add('flex', 'font-20px', 'justify-center'),
            s.appendChild(r),
            i.addEventListener('click', () => {
              o.remove(),
                n.storeNewNote(d.value, a.value),
                c(),
                (t.style.display = 'flex');
            }),
            r.addEventListener('click', () => {
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
          const d = document.createElement('button');
          (d.id = 'accept-new-task-btn'),
            (d.textContent = 'Ok'),
            d.classList.add('flex', 'font-20px', 'justify-center'),
            c.appendChild(d);
          const a = document.createElement('button');
          (a.id = 'cancel-new-task-btn'),
            (a.textContent = 'Cancel'),
            a.classList.add('flex', 'font-20px', 'justify-center'),
            c.appendChild(a),
            a.addEventListener('click', () => {
              n.remove(), (t.style.display = 'flex');
            }),
            e.appendChild(n);
        },
        viewProject: t,
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
    d = () => {},
    a = () => {},
    s = () => {
      document.querySelector('#home-tab').addEventListener('click', c),
        document.querySelector('#today-tab').addEventListener('click', d),
        document.querySelector('#week-tab').addEventListener('click', a),
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
          const c = document.createElement('ul');
          c.setAttribute('id', 'nav-list-tasks'),
            t.appendChild(c),
            o.createNavListItem('home', 'Home', c, 'home-tab'),
            o.createNavListItem('today', 'Today', c, 'today-tab'),
            o.createNavListItem('date_range', 'Week', c, 'week-tab');
          const d = document.createElement('h2');
          (d.textContent = 'Projects'),
            (d.id = 'projects-title'),
            t.appendChild(d);
          const a = document.createElement('ul');
          a.setAttribute('id', 'nav-list-projects'),
            t.appendChild(a),
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
          const d = document.createElement('div');
          (d.id = 'element-container'), t.appendChild(d), c();
          const a = document.createElement('div');
          (a.id = 'task-container'),
            d.appendChild(a),
            0 === n.getNotesList().length && (a.style.display = 'none'),
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
