(() => {
  'use strict';
  var e = {
      424: (e, t, n) => {
        n.d(t, { Z: () => h });
        var r = n(81),
          a = n.n(r),
          o = n(645),
          i = n.n(o),
          c = n(667),
          u = n.n(c),
          s = new URL(n(390), n.b),
          l = new URL(n(680), n.b),
          d = i()(a()),
          f = u()(s),
          p = u()(l);
        d.push([
          e.id,
          `@font-face {\n  font-family: Norse-Bold;\n  src: url(${f}), format('otf');\n}\n\n@font-face {\n  font-family: Rubik;\n  src: url(${p}), format('woff2');\n}\n\n*,\nhtml {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  height: 100vh;\n}\n\nbody {\n  font-family: Rubik, sans-serif;\n}\n\nheader,\nfooter {\n  color: white;\n  background-color: #1f244b;\n  padding: 8px;\n}\n\n#logo-container {\n  display: flex;\n  align-items: center;\n}\n\n#odin-logo {\n  height: 44px;\n  width: auto;\n}\n\n#logo-text {\n  color: white;\n  font-family: Norse-Bold;\n  font-size: 24px;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  width: 100%;\n  min-height: calc(100vh - 117px - 40px);\n}\n\nnav {\n  padding: 8px;\n}\n\nul {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.nav-item {\n  list-style-type: none;\n}\n\n.nav-btn,\n.project-item {\n  cursor: pointer;\n  padding: 5px;\n  width: 100%;\n  border-radius: 4px;\n  background-color: white;\n  gap: 4px;\n}\n\n.nav-btn:hover,\n.project-item:hover {\n  background-color: rgb(220, 220, 220);\n}\n\n#tasks-title,\n#nav-list-tasks,\n#nav-list-projects,\n#projects-title {\n  margin: 8px;\n}\n\n#project-name,\n#note-name,\n#note-desc,\n#task-name {\n  border: black 2px solid;\n  border-radius: 4px;\n  width: 100%;\n}\n\n#new-note-popup,\n#new-task-popup,\n#new-project-popup {\n  margin: 8px;\n}\n\n#new-project-popup-buttons,\n#new-note-popup-buttons,\n#new-task-popup-buttons {\n  justify-content: space-around;\n  gap: 8px;\n}\n\n#accept-new-project-btn,\n#cancel-new-project-btn,\n#accept-new-note-btn,\n#cancel-new-note-btn,\n#accept-new-task-btn,\n#cancel-new-task-btn {\n  color: white;\n  padding: 8px;\n  margin-top: 8px;\n  border: black 2px solid;\n  border-radius: 4px;\n  font-weight: bold;\n  width: 100%;\n  cursor: pointer;\n}\n\n#accept-new-project-btn,\n#accept-new-note-btn,\n#accept-new-task-btn {\n  background-color: #8ab060;\n}\n\n#cancel-new-project-btn,\n#cancel-new-note-btn,\n#cancel-new-task-btn {\n  background-color: #b45252;\n}\n\nsection {\n  background-color: #b8b5b9;\n}\n\n#element-container {\n  background-color: white;\n  border-radius: 8px;\n  margin: 32px;\n  padding: 32px;\n}\n\n.note-container {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));\n  padding: 32px;\n}\n\n.task-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  gap: 8px;\n  margin: 16px;\n}\n\n#page-title {\n  font-size: 38px;\n  margin: 16px;\n}\n\n.task {\n  background-color: white;\n  border: 1px solid black;\n  border-radius: 4px;\n  padding: 4px;\n}\n\n.task:hover {\n  background-color: rgb(220, 220, 220);\n}\n\n.task-left-panel {\n  margin-right: auto;\n}\n\n.delete-task,\n.delete-project-btn,\n.delete-note {\n  margin-left: auto;\n}\n\n.delete-note {\n  margin-top: auto;\n}\n\n.delete-project-btn:hover {\n  display: inline-block;\n}\n\n.delete-task:hover,\n.delete-note:hover {\n  cursor: pointer;\n}\n\n#new-task-btn,\n#new-note-btn,\n#new-task-btn {\n  width: max-content;\n  padding: 8px;\n  margin: 8px;\n}\n\n#new-note-popup,\n#new-task-popup {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 200px;\n  height: auto;\n}\n\n#note-name,\n#note-desc,\n#task-name,\n#project-name {\n  font-family: Rubik;\n  padding: 2px;\n}\n\n.note {\n  height: 200px;\n  width: 200px;\n  background-color: #f2f0e5;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n}\n\nfooter {\n  width: 100%;\n}\n\n.flex {\n  display: flex;\n}\n\n.align-center {\n  align-items: center;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.font-48px {\n  font-size: 48px;\n}\n\n.font-20px {\n  font-size: 20px;\n}\n`,
          '',
        ]);
        const h = d;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = '',
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += '@supports ('.concat(t[4], ') {')),
                  t[2] && (n += '@media '.concat(t[2], ' {')),
                  r &&
                    (n += '@layer'.concat(
                      t[5].length > 0 ? ' '.concat(t[5]) : '',
                      ' {'
                    )),
                  (n += e(t)),
                  r && (n += '}'),
                  t[2] && (n += '}'),
                  t[4] && (n += '}'),
                  n
                );
              }).join('');
            }),
            (t.i = function (e, n, r, a, o) {
              'string' == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var u = this[c][0];
                  null != u && (i[u] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var l = [].concat(e[s]);
                (r && i[l[0]]) ||
                  (void 0 !== o &&
                    (void 0 === l[5] ||
                      (l[1] = '@layer'
                        .concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {')
                        .concat(l[1], '}')),
                    (l[5] = o)),
                  n &&
                    (l[2]
                      ? ((l[1] = '@media '
                          .concat(l[2], ' {')
                          .concat(l[1], '}')),
                        (l[2] = n))
                      : (l[2] = n)),
                  a &&
                    (l[4]
                      ? ((l[1] = '@supports ('
                          .concat(l[4], ') {')
                          .concat(l[1], '}')),
                        (l[4] = a))
                      : (l[4] = ''.concat(a))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      667: (e) => {
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                t.hash && (e += t.hash),
                /["'() \t\n]|(%20)/.test(e) || t.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, '\\n'),
                      '"'
                    )
                  : e)
              : e
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var o = {}, i = [], c = 0; c < e.length; c++) {
            var u = e[c],
              s = r.base ? u[0] + r.base : u[0],
              l = o[s] || 0,
              d = ''.concat(s, ' ').concat(l);
            o[s] = l + 1;
            var f = n(d),
              p = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== f) t[f].references++, t[f].updater(p);
            else {
              var h = a(p, r);
              (r.byIndex = c),
                t.splice(c, 0, { identifier: d, updater: h, references: 1 });
            }
            i.push(d);
          }
          return i;
        }
        function a(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, a) {
          var o = r((e = e || []), (a = a || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < o.length; i++) {
              var c = n(o[i]);
              t[c].references--;
            }
            for (var u = r(e, a), s = 0; s < o.length; s++) {
              var l = n(o[s]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            o = u;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement('style');
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute('nonce', t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = '';
                n.supports && (r += '@supports ('.concat(n.supports, ') {')),
                  n.media && (r += '@media '.concat(n.media, ' {'));
                var a = void 0 !== n.layer;
                a &&
                  (r += '@layer'.concat(
                    n.layer.length > 0 ? ' '.concat(n.layer) : '',
                    ' {'
                  )),
                  (r += n.css),
                  a && (r += '}'),
                  n.media && (r += '}'),
                  n.supports && (r += '}');
                var o = n.sourceMap;
                o &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      ' */'
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      390: (e, t, n) => {
        e.exports = n.p + '5efe60ef5042faec1224.otf';
      },
      680: (e, t, n) => {
        e.exports = n.p + 'd99519627863392d2f0c.woff2';
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { id: r, exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + '');
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName('script');
        if (r.length) for (var a = r.length - 1; a > -1 && !e; ) e = r[a--].src;
      }
      if (!e)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (n.p = e);
    })(),
    (n.b = document.baseURI || self.location.href),
    (n.nc = void 0),
    (() => {
      const e = n.p + '4f0f495b2f256748749f.png';
      function t(e) {
        return (
          (t =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          t(e)
        );
      }
      function r(e, t) {
        if (t.length < e)
          throw new TypeError(
            e +
              ' argument' +
              (e > 1 ? 's' : '') +
              ' required, but only ' +
              t.length +
              ' present'
          );
      }
      function a(e) {
        r(1, arguments);
        var n = Object.prototype.toString.call(e);
        return e instanceof Date || ('object' === t(e) && '[object Date]' === n)
          ? new Date(e.getTime())
          : 'number' == typeof e || '[object Number]' === n
          ? new Date(e)
          : (('string' != typeof e && '[object String]' !== n) ||
              'undefined' == typeof console ||
              (console.warn(
                "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
              ),
              console.warn(new Error().stack)),
            new Date(NaN));
      }
      function o(e) {
        r(1, arguments);
        var t = a(e);
        return t.setHours(0, 0, 0, 0), t;
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function c(e, t) {
        var n =
          ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator'];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ('string' == typeof e) return i(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  'Object' === n && e.constructor && (n = e.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(e)
                    : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? i(e, t)
                    : void 0
                );
              }
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var o,
          c = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (c = e.done), e;
          },
          e: function (e) {
            (u = !0), (o = e);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (u) throw o;
            }
          },
        };
      }
      var u = {
        lessThanXSeconds: {
          one: 'less than a second',
          other: 'less than {{count}} seconds',
        },
        xSeconds: { one: '1 second', other: '{{count}} seconds' },
        halfAMinute: 'half a minute',
        lessThanXMinutes: {
          one: 'less than a minute',
          other: 'less than {{count}} minutes',
        },
        xMinutes: { one: '1 minute', other: '{{count}} minutes' },
        aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
        xHours: { one: '1 hour', other: '{{count}} hours' },
        xDays: { one: '1 day', other: '{{count}} days' },
        aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
        xWeeks: { one: '1 week', other: '{{count}} weeks' },
        aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
        xMonths: { one: '1 month', other: '{{count}} months' },
        aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
        xYears: { one: '1 year', other: '{{count}} years' },
        overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
        almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
      };
      function s(e) {
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.width ? String(t.width) : e.defaultWidth;
          return e.formats[n] || e.formats[e.defaultWidth];
        };
      }
      const l = {
        date: s({
          formats: {
            full: 'EEEE, MMMM do, y',
            long: 'MMMM do, y',
            medium: 'MMM d, y',
            short: 'MM/dd/yyyy',
          },
          defaultWidth: 'full',
        }),
        time: s({
          formats: {
            full: 'h:mm:ss a zzzz',
            long: 'h:mm:ss a z',
            medium: 'h:mm:ss a',
            short: 'h:mm a',
          },
          defaultWidth: 'full',
        }),
        dateTime: s({
          formats: {
            full: "{{date}} 'at' {{time}}",
            long: "{{date}} 'at' {{time}}",
            medium: '{{date}}, {{time}}',
            short: '{{date}}, {{time}}',
          },
          defaultWidth: 'full',
        }),
      };
      var d = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: 'P',
      };
      function f(e) {
        return function (t, n) {
          var r;
          if (
            'formatting' ===
              (null != n && n.context ? String(n.context) : 'standalone') &&
            e.formattingValues
          ) {
            var a = e.defaultFormattingWidth || e.defaultWidth,
              o = null != n && n.width ? String(n.width) : a;
            r = e.formattingValues[o] || e.formattingValues[a];
          } else {
            var i = e.defaultWidth,
              c = null != n && n.width ? String(n.width) : e.defaultWidth;
            r = e.values[c] || e.values[i];
          }
          return r[e.argumentCallback ? e.argumentCallback(t) : t];
        };
      }
      const p = {
        ordinalNumber: function (e, t) {
          var n = Number(e),
            r = n % 100;
          if (r > 20 || r < 10)
            switch (r % 10) {
              case 1:
                return n + 'st';
              case 2:
                return n + 'nd';
              case 3:
                return n + 'rd';
            }
          return n + 'th';
        },
        era: f({
          values: {
            narrow: ['B', 'A'],
            abbreviated: ['BC', 'AD'],
            wide: ['Before Christ', 'Anno Domini'],
          },
          defaultWidth: 'wide',
        }),
        quarter: f({
          values: {
            narrow: ['1', '2', '3', '4'],
            abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
            wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
          },
          defaultWidth: 'wide',
          argumentCallback: function (e) {
            return e - 1;
          },
        }),
        month: f({
          values: {
            narrow: [
              'J',
              'F',
              'M',
              'A',
              'M',
              'J',
              'J',
              'A',
              'S',
              'O',
              'N',
              'D',
            ],
            abbreviated: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
            wide: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ],
          },
          defaultWidth: 'wide',
        }),
        day: f({
          values: {
            narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            wide: [
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
          },
          defaultWidth: 'wide',
        }),
        dayPeriod: f({
          values: {
            narrow: {
              am: 'a',
              pm: 'p',
              midnight: 'mi',
              noon: 'n',
              morning: 'morning',
              afternoon: 'afternoon',
              evening: 'evening',
              night: 'night',
            },
            abbreviated: {
              am: 'AM',
              pm: 'PM',
              midnight: 'midnight',
              noon: 'noon',
              morning: 'morning',
              afternoon: 'afternoon',
              evening: 'evening',
              night: 'night',
            },
            wide: {
              am: 'a.m.',
              pm: 'p.m.',
              midnight: 'midnight',
              noon: 'noon',
              morning: 'morning',
              afternoon: 'afternoon',
              evening: 'evening',
              night: 'night',
            },
          },
          defaultWidth: 'wide',
          formattingValues: {
            narrow: {
              am: 'a',
              pm: 'p',
              midnight: 'mi',
              noon: 'n',
              morning: 'in the morning',
              afternoon: 'in the afternoon',
              evening: 'in the evening',
              night: 'at night',
            },
            abbreviated: {
              am: 'AM',
              pm: 'PM',
              midnight: 'midnight',
              noon: 'noon',
              morning: 'in the morning',
              afternoon: 'in the afternoon',
              evening: 'in the evening',
              night: 'at night',
            },
            wide: {
              am: 'a.m.',
              pm: 'p.m.',
              midnight: 'midnight',
              noon: 'noon',
              morning: 'in the morning',
              afternoon: 'in the afternoon',
              evening: 'in the evening',
              night: 'at night',
            },
          },
          defaultFormattingWidth: 'wide',
        }),
      };
      function h(e) {
        return function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = n.width,
            a =
              (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
            o = t.match(a);
          if (!o) return null;
          var i,
            c = o[0],
            u =
              (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
            s = Array.isArray(u)
              ? (function (e, t) {
                  for (var n = 0; n < e.length; n++) if (e[n].test(c)) return n;
                })(u)
              : (function (e, t) {
                  for (var n in e)
                    if (e.hasOwnProperty(n) && e[n].test(c)) return n;
                })(u);
          return (
            (i = e.valueCallback ? e.valueCallback(s) : s),
            {
              value: (i = n.valueCallback ? n.valueCallback(i) : i),
              rest: t.slice(c.length),
            }
          );
        };
      }
      var m,
        v = {
          ordinalNumber:
            ((m = {
              matchPattern: /^(\d+)(th|st|nd|rd)?/i,
              parsePattern: /\d+/i,
              valueCallback: function (e) {
                return parseInt(e, 10);
              },
            }),
            function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = e.match(m.matchPattern);
              if (!n) return null;
              var r = n[0],
                a = e.match(m.parsePattern);
              if (!a) return null;
              var o = m.valueCallback ? m.valueCallback(a[0]) : a[0];
              return {
                value: (o = t.valueCallback ? t.valueCallback(o) : o),
                rest: e.slice(r.length),
              };
            }),
          era: h({
            matchPatterns: {
              narrow: /^(b|a)/i,
              abbreviated:
                /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              wide: /^(before christ|before common era|anno domini|common era)/i,
            },
            defaultMatchWidth: 'wide',
            parsePatterns: { any: [/^b/i, /^(a|c)/i] },
            defaultParseWidth: 'any',
          }),
          quarter: h({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234](th|st|nd|rd)? quarter/i,
            },
            defaultMatchWidth: 'wide',
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: 'any',
            valueCallback: function (e) {
              return e + 1;
            },
          }),
          month: h({
            matchPatterns: {
              narrow: /^[jfmasond]/i,
              abbreviated:
                /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
              wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
            },
            defaultMatchWidth: 'wide',
            parsePatterns: {
              narrow: [
                /^j/i,
                /^f/i,
                /^m/i,
                /^a/i,
                /^m/i,
                /^j/i,
                /^j/i,
                /^a/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
              any: [
                /^ja/i,
                /^f/i,
                /^mar/i,
                /^ap/i,
                /^may/i,
                /^jun/i,
                /^jul/i,
                /^au/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
            },
            defaultParseWidth: 'any',
          }),
          day: h({
            matchPatterns: {
              narrow: /^[smtwf]/i,
              short: /^(su|mo|tu|we|th|fr|sa)/i,
              abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
              wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
            },
            defaultMatchWidth: 'wide',
            parsePatterns: {
              narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
              any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
            },
            defaultParseWidth: 'any',
          }),
          dayPeriod: h({
            matchPatterns: {
              narrow:
                /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
              any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
            },
            defaultMatchWidth: 'any',
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mi/i,
                noon: /^no/i,
                morning: /morning/i,
                afternoon: /afternoon/i,
                evening: /evening/i,
                night: /night/i,
              },
            },
            defaultParseWidth: 'any',
          }),
        };
      const y = {
        code: 'en-US',
        formatDistance: function (e, t, n) {
          var r,
            a = u[e];
          return (
            (r =
              'string' == typeof a
                ? a
                : 1 === t
                ? a.one
                : a.other.replace('{{count}}', t.toString())),
            null != n && n.addSuffix
              ? n.comparison && n.comparison > 0
                ? 'in ' + r
                : r + ' ago'
              : r
          );
        },
        formatLong: l,
        formatRelative: function (e, t, n, r) {
          return d[e];
        },
        localize: p,
        match: v,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      };
      function w(e) {
        if (null === e || !0 === e || !1 === e) return NaN;
        var t = Number(e);
        return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
      }
      function g(e, t) {
        if (null == e)
          throw new TypeError(
            'assign requires that input parameter not be null or undefined'
          );
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
      }
      var b = function (e, t) {
          switch (e) {
            case 'P':
              return t.date({ width: 'short' });
            case 'PP':
              return t.date({ width: 'medium' });
            case 'PPP':
              return t.date({ width: 'long' });
            default:
              return t.date({ width: 'full' });
          }
        },
        k = function (e, t) {
          switch (e) {
            case 'p':
              return t.time({ width: 'short' });
            case 'pp':
              return t.time({ width: 'medium' });
            case 'ppp':
              return t.time({ width: 'long' });
            default:
              return t.time({ width: 'full' });
          }
        };
      const x = {
        p: k,
        P: function (e, t) {
          var n,
            r = e.match(/(P+)(p+)?/) || [],
            a = r[1],
            o = r[2];
          if (!o) return b(e, t);
          switch (a) {
            case 'P':
              n = t.dateTime({ width: 'short' });
              break;
            case 'PP':
              n = t.dateTime({ width: 'medium' });
              break;
            case 'PPP':
              n = t.dateTime({ width: 'long' });
              break;
            default:
              n = t.dateTime({ width: 'full' });
          }
          return n.replace('{{date}}', b(a, t)).replace('{{time}}', k(o, t));
        },
      };
      var T = ['D', 'DD'],
        C = ['YY', 'YYYY'];
      function E(e, t, n) {
        if ('YYYY' === e)
          throw new RangeError(
            'Use `yyyy` instead of `YYYY` (in `'
              .concat(t, '`) for formatting years to the input `')
              .concat(
                n,
                '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'
              )
          );
        if ('YY' === e)
          throw new RangeError(
            'Use `yy` instead of `YY` (in `'
              .concat(t, '`) for formatting years to the input `')
              .concat(
                n,
                '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'
              )
          );
        if ('D' === e)
          throw new RangeError(
            'Use `d` instead of `D` (in `'
              .concat(t, '`) for formatting days of the month to the input `')
              .concat(
                n,
                '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'
              )
          );
        if ('DD' === e)
          throw new RangeError(
            'Use `dd` instead of `DD` (in `'
              .concat(t, '`) for formatting days of the month to the input `')
              .concat(
                n,
                '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'
              )
          );
      }
      function S(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function N(e, t) {
        return (
          (N = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          N(e, t)
        );
      }
      function j(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && N(e, t);
      }
      function D(e) {
        return (
          (D = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          D(e)
        );
      }
      function L(e) {
        var n = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            a = D(e);
          if (n) {
            var o = D(this).constructor;
            r = Reflect.construct(a, arguments, o);
          } else r = a.apply(this, arguments);
          return (function (e, n) {
            if (n && ('object' === t(n) || 'function' == typeof n)) return n;
            if (void 0 !== n)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return S(e);
          })(this, r);
        };
      }
      function P(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function M(e) {
        var n = (function (e, n) {
          if ('object' !== t(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, 'string');
            if ('object' !== t(a)) return a;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === t(n) ? n : String(n);
      }
      function U(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, M(r.key), r);
        }
      }
      function q(e, t, n) {
        return (
          t && U(e.prototype, t),
          n && U(e, n),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
      function A(e, t, n) {
        return (
          (t = M(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var O = (function () {
          function e() {
            P(this, e), A(this, 'priority', void 0), A(this, 'subPriority', 0);
          }
          return (
            q(e, [
              {
                key: 'validate',
                value: function (e, t) {
                  return !0;
                },
              },
            ]),
            e
          );
        })(),
        Y = (function (e) {
          j(n, e);
          var t = L(n);
          function n(e, r, a, o, i) {
            var c;
            return (
              P(this, n),
              ((c = t.call(this)).value = e),
              (c.validateValue = r),
              (c.setValue = a),
              (c.priority = o),
              i && (c.subPriority = i),
              c
            );
          }
          return (
            q(n, [
              {
                key: 'validate',
                value: function (e, t) {
                  return this.validateValue(e, this.value, t);
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return this.setValue(e, t, this.value, n);
                },
              },
            ]),
            n
          );
        })(O),
        H = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 10),
              A(S(e), 'subPriority', -1),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'set',
                value: function (e, t) {
                  if (t.timestampIsSet) return e;
                  var n = new Date(0);
                  return (
                    n.setFullYear(
                      e.getUTCFullYear(),
                      e.getUTCMonth(),
                      e.getUTCDate()
                    ),
                    n.setHours(
                      e.getUTCHours(),
                      e.getUTCMinutes(),
                      e.getUTCSeconds(),
                      e.getUTCMilliseconds()
                    ),
                    n
                  );
                },
              },
            ]),
            n
          );
        })(O),
        W = (function () {
          function e() {
            P(this, e),
              A(this, 'incompatibleTokens', void 0),
              A(this, 'priority', void 0),
              A(this, 'subPriority', void 0);
          }
          return (
            q(e, [
              {
                key: 'run',
                value: function (e, t, n, r) {
                  var a = this.parse(e, t, n, r);
                  return a
                    ? {
                        setter: new Y(
                          a.value,
                          this.validate,
                          this.set,
                          this.priority,
                          this.subPriority
                        ),
                        rest: a.rest,
                      }
                    : null;
                },
              },
              {
                key: 'validate',
                value: function (e, t, n) {
                  return !0;
                },
              },
            ]),
            e
          );
        })(),
        I = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 140),
              A(S(e), 'incompatibleTokens', ['R', 'u', 't', 'T']),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t, n) {
                  switch (t) {
                    case 'G':
                    case 'GG':
                    case 'GGG':
                      return (
                        n.era(e, { width: 'abbreviated' }) ||
                        n.era(e, { width: 'narrow' })
                      );
                    case 'GGGGG':
                      return n.era(e, { width: 'narrow' });
                    default:
                      return (
                        n.era(e, { width: 'wide' }) ||
                        n.era(e, { width: 'abbreviated' }) ||
                        n.era(e, { width: 'narrow' })
                      );
                  }
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return (
                    (t.era = n),
                    e.setUTCFullYear(n, 0, 1),
                    e.setUTCHours(0, 0, 0, 0),
                    e
                  );
                },
              },
            ]),
            n
          );
        })(W),
        R = (Math.pow(10, 8), /^(1[0-2]|0?\d)/),
        F = /^(3[0-1]|[0-2]?\d)/,
        Q = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
        B = /^(5[0-3]|[0-4]?\d)/,
        X = /^(2[0-3]|[0-1]?\d)/,
        _ = /^(2[0-4]|[0-1]?\d)/,
        J = /^(1[0-1]|0?\d)/,
        G = /^(1[0-2]|0?\d)/,
        z = /^[0-5]?\d/,
        Z = /^[0-5]?\d/,
        $ = /^\d/,
        V = /^\d{1,2}/,
        K = /^\d{1,3}/,
        ee = /^\d{1,4}/,
        te = /^-?\d+/,
        ne = /^-?\d/,
        re = /^-?\d{1,2}/,
        ae = /^-?\d{1,3}/,
        oe = /^-?\d{1,4}/,
        ie = /^([+-])(\d{2})(\d{2})?|Z/,
        ce = /^([+-])(\d{2})(\d{2})|Z/,
        ue = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
        se = /^([+-])(\d{2}):(\d{2})|Z/,
        le = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;
      function de(e, t) {
        return e ? { value: t(e.value), rest: e.rest } : e;
      }
      function fe(e, t) {
        var n = t.match(e);
        return n
          ? { value: parseInt(n[0], 10), rest: t.slice(n[0].length) }
          : null;
      }
      function pe(e, t) {
        var n = t.match(e);
        return n
          ? 'Z' === n[0]
            ? { value: 0, rest: t.slice(1) }
            : {
                value:
                  ('+' === n[1] ? 1 : -1) *
                  (36e5 * (n[2] ? parseInt(n[2], 10) : 0) +
                    6e4 * (n[3] ? parseInt(n[3], 10) : 0) +
                    1e3 * (n[5] ? parseInt(n[5], 10) : 0)),
                rest: t.slice(n[0].length),
              }
          : null;
      }
      function he(e) {
        return fe(te, e);
      }
      function me(e, t) {
        switch (e) {
          case 1:
            return fe($, t);
          case 2:
            return fe(V, t);
          case 3:
            return fe(K, t);
          case 4:
            return fe(ee, t);
          default:
            return fe(new RegExp('^\\d{1,' + e + '}'), t);
        }
      }
      function ve(e, t) {
        switch (e) {
          case 1:
            return fe(ne, t);
          case 2:
            return fe(re, t);
          case 3:
            return fe(ae, t);
          case 4:
            return fe(oe, t);
          default:
            return fe(new RegExp('^-?\\d{1,' + e + '}'), t);
        }
      }
      function ye(e) {
        switch (e) {
          case 'morning':
            return 4;
          case 'evening':
            return 17;
          case 'pm':
          case 'noon':
          case 'afternoon':
            return 12;
          default:
            return 0;
        }
      }
      function we(e, t) {
        var n,
          r = t > 0,
          a = r ? t : 1 - t;
        if (a <= 50) n = e || 100;
        else {
          var o = a + 50;
          n = e + 100 * Math.floor(o / 100) - (e >= o % 100 ? 100 : 0);
        }
        return r ? n : 1 - n;
      }
      function ge(e) {
        return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
      }
      var be = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 130),
              A(S(e), 'incompatibleTokens', [
                'Y',
                'R',
                'u',
                'w',
                'I',
                'i',
                'e',
                'c',
                't',
                'T',
              ]),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t, n) {
                  var r = function (e) {
                    return { year: e, isTwoDigitYear: 'yy' === t };
                  };
                  switch (t) {
                    case 'y':
                      return de(me(4, e), r);
                    case 'yo':
                      return de(n.ordinalNumber(e, { unit: 'year' }), r);
                    default:
                      return de(me(t.length, e), r);
                  }
                },
              },
              {
                key: 'validate',
                value: function (e, t) {
                  return t.isTwoDigitYear || t.year > 0;
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  var r = e.getUTCFullYear();
                  if (n.isTwoDigitYear) {
                    var a = we(n.year, r);
                    return (
                      e.setUTCFullYear(a, 0, 1), e.setUTCHours(0, 0, 0, 0), e
                    );
                  }
                  var o = 'era' in t && 1 !== t.era ? 1 - n.year : n.year;
                  return (
                    e.setUTCFullYear(o, 0, 1), e.setUTCHours(0, 0, 0, 0), e
                  );
                },
              },
            ]),
            n
          );
        })(W),
        ke = {};
      function xe() {
        return ke;
      }
      function Te(e, t) {
        var n, o, i, c, u, s, l, d;
        r(1, arguments);
        var f = xe(),
          p = w(
            null !==
              (n =
                null !==
                  (o =
                    null !==
                      (i =
                        null !== (c = null == t ? void 0 : t.weekStartsOn) &&
                        void 0 !== c
                          ? c
                          : null == t ||
                            null === (u = t.locale) ||
                            void 0 === u ||
                            null === (s = u.options) ||
                            void 0 === s
                          ? void 0
                          : s.weekStartsOn) && void 0 !== i
                      ? i
                      : f.weekStartsOn) && void 0 !== o
                  ? o
                  : null === (l = f.locale) ||
                    void 0 === l ||
                    null === (d = l.options) ||
                    void 0 === d
                  ? void 0
                  : d.weekStartsOn) && void 0 !== n
              ? n
              : 0
          );
        if (!(p >= 0 && p <= 6))
          throw new RangeError(
            'weekStartsOn must be between 0 and 6 inclusively'
          );
        var h = a(e),
          m = h.getUTCDay(),
          v = (m < p ? 7 : 0) + m - p;
        return h.setUTCDate(h.getUTCDate() - v), h.setUTCHours(0, 0, 0, 0), h;
      }
      function Ce(e, t) {
        var n, o, i, c, u, s, l, d;
        r(1, arguments);
        var f = a(e),
          p = f.getUTCFullYear(),
          h = xe(),
          m = w(
            null !==
              (n =
                null !==
                  (o =
                    null !==
                      (i =
                        null !==
                          (c = null == t ? void 0 : t.firstWeekContainsDate) &&
                        void 0 !== c
                          ? c
                          : null == t ||
                            null === (u = t.locale) ||
                            void 0 === u ||
                            null === (s = u.options) ||
                            void 0 === s
                          ? void 0
                          : s.firstWeekContainsDate) && void 0 !== i
                      ? i
                      : h.firstWeekContainsDate) && void 0 !== o
                  ? o
                  : null === (l = h.locale) ||
                    void 0 === l ||
                    null === (d = l.options) ||
                    void 0 === d
                  ? void 0
                  : d.firstWeekContainsDate) && void 0 !== n
              ? n
              : 1
          );
        if (!(m >= 1 && m <= 7))
          throw new RangeError(
            'firstWeekContainsDate must be between 1 and 7 inclusively'
          );
        var v = new Date(0);
        v.setUTCFullYear(p + 1, 0, m), v.setUTCHours(0, 0, 0, 0);
        var y = Te(v, t),
          g = new Date(0);
        g.setUTCFullYear(p, 0, m), g.setUTCHours(0, 0, 0, 0);
        var b = Te(g, t);
        return f.getTime() >= y.getTime()
          ? p + 1
          : f.getTime() >= b.getTime()
          ? p
          : p - 1;
      }
      var Ee = (function (e) {
        j(n, e);
        var t = L(n);
        function n() {
          var e;
          P(this, n);
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
            a[o] = arguments[o];
          return (
            A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 130),
            A(S(e), 'incompatibleTokens', [
              'y',
              'R',
              'u',
              'Q',
              'q',
              'M',
              'L',
              'I',
              'd',
              'D',
              'i',
              't',
              'T',
            ]),
            e
          );
        }
        return (
          q(n, [
            {
              key: 'parse',
              value: function (e, t, n) {
                var r = function (e) {
                  return { year: e, isTwoDigitYear: 'YY' === t };
                };
                switch (t) {
                  case 'Y':
                    return de(me(4, e), r);
                  case 'Yo':
                    return de(n.ordinalNumber(e, { unit: 'year' }), r);
                  default:
                    return de(me(t.length, e), r);
                }
              },
            },
            {
              key: 'validate',
              value: function (e, t) {
                return t.isTwoDigitYear || t.year > 0;
              },
            },
            {
              key: 'set',
              value: function (e, t, n, r) {
                var a = Ce(e, r);
                if (n.isTwoDigitYear) {
                  var o = we(n.year, a);
                  return (
                    e.setUTCFullYear(o, 0, r.firstWeekContainsDate),
                    e.setUTCHours(0, 0, 0, 0),
                    Te(e, r)
                  );
                }
                var i = 'era' in t && 1 !== t.era ? 1 - n.year : n.year;
                return (
                  e.setUTCFullYear(i, 0, r.firstWeekContainsDate),
                  e.setUTCHours(0, 0, 0, 0),
                  Te(e, r)
                );
              },
            },
          ]),
          n
        );
      })(W);
      function Se(e) {
        r(1, arguments);
        var t = a(e),
          n = t.getUTCDay(),
          o = (n < 1 ? 7 : 0) + n - 1;
        return t.setUTCDate(t.getUTCDate() - o), t.setUTCHours(0, 0, 0, 0), t;
      }
      var Ne = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 130),
              A(S(e), 'incompatibleTokens', [
                'G',
                'y',
                'Y',
                'u',
                'Q',
                'q',
                'M',
                'L',
                'w',
                'd',
                'D',
                'e',
                'c',
                't',
                'T',
              ]),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t) {
                  return ve('R' === t ? 4 : t.length, e);
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  var r = new Date(0);
                  return (
                    r.setUTCFullYear(n, 0, 4), r.setUTCHours(0, 0, 0, 0), Se(r)
                  );
                },
              },
            ]),
            n
          );
        })(W),
        je = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 130),
              A(S(e), 'incompatibleTokens', [
                'G',
                'y',
                'Y',
                'R',
                'w',
                'I',
                'i',
                'e',
                'c',
                't',
                'T',
              ]),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t) {
                  return ve('u' === t ? 4 : t.length, e);
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return (
                    e.setUTCFullYear(n, 0, 1), e.setUTCHours(0, 0, 0, 0), e
                  );
                },
              },
            ]),
            n
          );
        })(W),
        De = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 120),
              A(S(e), 'incompatibleTokens', [
                'Y',
                'R',
                'q',
                'M',
                'L',
                'w',
                'I',
                'd',
                'D',
                'i',
                'e',
                'c',
                't',
                'T',
              ]),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t, n) {
                  switch (t) {
                    case 'Q':
                    case 'QQ':
                      return me(t.length, e);
                    case 'Qo':
                      return n.ordinalNumber(e, { unit: 'quarter' });
                    case 'QQQ':
                      return (
                        n.quarter(e, {
                          width: 'abbreviated',
                          context: 'formatting',
                        }) ||
                        n.quarter(e, { width: 'narrow', context: 'formatting' })
                      );
                    case 'QQQQQ':
                      return n.quarter(e, {
                        width: 'narrow',
                        context: 'formatting',
                      });
                    default:
                      return (
                        n.quarter(e, {
                          width: 'wide',
                          context: 'formatting',
                        }) ||
                        n.quarter(e, {
                          width: 'abbreviated',
                          context: 'formatting',
                        }) ||
                        n.quarter(e, { width: 'narrow', context: 'formatting' })
                      );
                  }
                },
              },
              {
                key: 'validate',
                value: function (e, t) {
                  return t >= 1 && t <= 4;
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return (
                    e.setUTCMonth(3 * (n - 1), 1), e.setUTCHours(0, 0, 0, 0), e
                  );
                },
              },
            ]),
            n
          );
        })(W),
        Le = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 120),
              A(S(e), 'incompatibleTokens', [
                'Y',
                'R',
                'Q',
                'M',
                'L',
                'w',
                'I',
                'd',
                'D',
                'i',
                'e',
                'c',
                't',
                'T',
              ]),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t, n) {
                  switch (t) {
                    case 'q':
                    case 'qq':
                      return me(t.length, e);
                    case 'qo':
                      return n.ordinalNumber(e, { unit: 'quarter' });
                    case 'qqq':
                      return (
                        n.quarter(e, {
                          width: 'abbreviated',
                          context: 'standalone',
                        }) ||
                        n.quarter(e, { width: 'narrow', context: 'standalone' })
                      );
                    case 'qqqqq':
                      return n.quarter(e, {
                        width: 'narrow',
                        context: 'standalone',
                      });
                    default:
                      return (
                        n.quarter(e, {
                          width: 'wide',
                          context: 'standalone',
                        }) ||
                        n.quarter(e, {
                          width: 'abbreviated',
                          context: 'standalone',
                        }) ||
                        n.quarter(e, { width: 'narrow', context: 'standalone' })
                      );
                  }
                },
              },
              {
                key: 'validate',
                value: function (e, t) {
                  return t >= 1 && t <= 4;
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return (
                    e.setUTCMonth(3 * (n - 1), 1), e.setUTCHours(0, 0, 0, 0), e
                  );
                },
              },
            ]),
            n
          );
        })(W),
        Pe = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(
                S((e = t.call.apply(t, [this].concat(a)))),
                'incompatibleTokens',
                [
                  'Y',
                  'R',
                  'q',
                  'Q',
                  'L',
                  'w',
                  'I',
                  'D',
                  'i',
                  'e',
                  'c',
                  't',
                  'T',
                ]
              ),
              A(S(e), 'priority', 110),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t, n) {
                  var r = function (e) {
                    return e - 1;
                  };
                  switch (t) {
                    case 'M':
                      return de(fe(R, e), r);
                    case 'MM':
                      return de(me(2, e), r);
                    case 'Mo':
                      return de(n.ordinalNumber(e, { unit: 'month' }), r);
                    case 'MMM':
                      return (
                        n.month(e, {
                          width: 'abbreviated',
                          context: 'formatting',
                        }) ||
                        n.month(e, { width: 'narrow', context: 'formatting' })
                      );
                    case 'MMMMM':
                      return n.month(e, {
                        width: 'narrow',
                        context: 'formatting',
                      });
                    default:
                      return (
                        n.month(e, { width: 'wide', context: 'formatting' }) ||
                        n.month(e, {
                          width: 'abbreviated',
                          context: 'formatting',
                        }) ||
                        n.month(e, { width: 'narrow', context: 'formatting' })
                      );
                  }
                },
              },
              {
                key: 'validate',
                value: function (e, t) {
                  return t >= 0 && t <= 11;
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return e.setUTCMonth(n, 1), e.setUTCHours(0, 0, 0, 0), e;
                },
              },
            ]),
            n
          );
        })(W),
        Me = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 110),
              A(S(e), 'incompatibleTokens', [
                'Y',
                'R',
                'q',
                'Q',
                'M',
                'w',
                'I',
                'D',
                'i',
                'e',
                'c',
                't',
                'T',
              ]),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t, n) {
                  var r = function (e) {
                    return e - 1;
                  };
                  switch (t) {
                    case 'L':
                      return de(fe(R, e), r);
                    case 'LL':
                      return de(me(2, e), r);
                    case 'Lo':
                      return de(n.ordinalNumber(e, { unit: 'month' }), r);
                    case 'LLL':
                      return (
                        n.month(e, {
                          width: 'abbreviated',
                          context: 'standalone',
                        }) ||
                        n.month(e, { width: 'narrow', context: 'standalone' })
                      );
                    case 'LLLLL':
                      return n.month(e, {
                        width: 'narrow',
                        context: 'standalone',
                      });
                    default:
                      return (
                        n.month(e, { width: 'wide', context: 'standalone' }) ||
                        n.month(e, {
                          width: 'abbreviated',
                          context: 'standalone',
                        }) ||
                        n.month(e, { width: 'narrow', context: 'standalone' })
                      );
                  }
                },
              },
              {
                key: 'validate',
                value: function (e, t) {
                  return t >= 0 && t <= 11;
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return e.setUTCMonth(n, 1), e.setUTCHours(0, 0, 0, 0), e;
                },
              },
            ]),
            n
          );
        })(W);
      var Ue = (function (e) {
        j(n, e);
        var t = L(n);
        function n() {
          var e;
          P(this, n);
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
            a[o] = arguments[o];
          return (
            A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 100),
            A(S(e), 'incompatibleTokens', [
              'y',
              'R',
              'u',
              'q',
              'Q',
              'M',
              'L',
              'I',
              'd',
              'D',
              'i',
              't',
              'T',
            ]),
            e
          );
        }
        return (
          q(n, [
            {
              key: 'parse',
              value: function (e, t, n) {
                switch (t) {
                  case 'w':
                    return fe(B, e);
                  case 'wo':
                    return n.ordinalNumber(e, { unit: 'week' });
                  default:
                    return me(t.length, e);
                }
              },
            },
            {
              key: 'validate',
              value: function (e, t) {
                return t >= 1 && t <= 53;
              },
            },
            {
              key: 'set',
              value: function (e, t, n, o) {
                return Te(
                  (function (e, t, n) {
                    r(2, arguments);
                    var o = a(e),
                      i = w(t),
                      c =
                        (function (e, t) {
                          r(1, arguments);
                          var n = a(e),
                            o =
                              Te(n, t).getTime() -
                              (function (e, t) {
                                var n, a, o, i, c, u, s, l;
                                r(1, arguments);
                                var d = xe(),
                                  f = w(
                                    null !==
                                      (n =
                                        null !==
                                          (a =
                                            null !==
                                              (o =
                                                null !==
                                                  (i =
                                                    null == t
                                                      ? void 0
                                                      : t.firstWeekContainsDate) &&
                                                void 0 !== i
                                                  ? i
                                                  : null == t ||
                                                    null === (c = t.locale) ||
                                                    void 0 === c ||
                                                    null === (u = c.options) ||
                                                    void 0 === u
                                                  ? void 0
                                                  : u.firstWeekContainsDate) &&
                                            void 0 !== o
                                              ? o
                                              : d.firstWeekContainsDate) &&
                                        void 0 !== a
                                          ? a
                                          : null === (s = d.locale) ||
                                            void 0 === s ||
                                            null === (l = s.options) ||
                                            void 0 === l
                                          ? void 0
                                          : l.firstWeekContainsDate) &&
                                      void 0 !== n
                                      ? n
                                      : 1
                                  ),
                                  p = Ce(e, t),
                                  h = new Date(0);
                                return (
                                  h.setUTCFullYear(p, 0, f),
                                  h.setUTCHours(0, 0, 0, 0),
                                  Te(h, t)
                                );
                              })(n, t).getTime();
                          return Math.round(o / 6048e5) + 1;
                        })(o, n) - i;
                    return o.setUTCDate(o.getUTCDate() - 7 * c), o;
                  })(e, n, o),
                  o
                );
              },
            },
          ]),
          n
        );
      })(W);
      function qe(e, t) {
        r(2, arguments);
        var n = a(e),
          o = w(t),
          i =
            (function (e) {
              r(1, arguments);
              var t = a(e),
                n =
                  Se(t).getTime() -
                  (function (e) {
                    r(1, arguments);
                    var t = (function (e) {
                        r(1, arguments);
                        var t = a(e),
                          n = t.getUTCFullYear(),
                          o = new Date(0);
                        o.setUTCFullYear(n + 1, 0, 4),
                          o.setUTCHours(0, 0, 0, 0);
                        var i = Se(o),
                          c = new Date(0);
                        c.setUTCFullYear(n, 0, 4), c.setUTCHours(0, 0, 0, 0);
                        var u = Se(c);
                        return t.getTime() >= i.getTime()
                          ? n + 1
                          : t.getTime() >= u.getTime()
                          ? n
                          : n - 1;
                      })(e),
                      n = new Date(0);
                    return (
                      n.setUTCFullYear(t, 0, 4),
                      n.setUTCHours(0, 0, 0, 0),
                      Se(n)
                    );
                  })(t).getTime();
              return Math.round(n / 6048e5) + 1;
            })(n) - o;
        return n.setUTCDate(n.getUTCDate() - 7 * i), n;
      }
      var Ae = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 100),
              A(S(e), 'incompatibleTokens', [
                'y',
                'Y',
                'u',
                'q',
                'Q',
                'M',
                'L',
                'w',
                'd',
                'D',
                'e',
                'c',
                't',
                'T',
              ]),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t, n) {
                  switch (t) {
                    case 'I':
                      return fe(B, e);
                    case 'Io':
                      return n.ordinalNumber(e, { unit: 'week' });
                    default:
                      return me(t.length, e);
                  }
                },
              },
              {
                key: 'validate',
                value: function (e, t) {
                  return t >= 1 && t <= 53;
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return Se(qe(e, n));
                },
              },
            ]),
            n
          );
        })(W),
        Oe = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        Ye = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        He = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 90),
              A(S(e), 'subPriority', 1),
              A(S(e), 'incompatibleTokens', [
                'Y',
                'R',
                'q',
                'Q',
                'w',
                'I',
                'D',
                'i',
                'e',
                'c',
                't',
                'T',
              ]),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t, n) {
                  switch (t) {
                    case 'd':
                      return fe(F, e);
                    case 'do':
                      return n.ordinalNumber(e, { unit: 'date' });
                    default:
                      return me(t.length, e);
                  }
                },
              },
              {
                key: 'validate',
                value: function (e, t) {
                  var n = ge(e.getUTCFullYear()),
                    r = e.getUTCMonth();
                  return n ? t >= 1 && t <= Ye[r] : t >= 1 && t <= Oe[r];
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return e.setUTCDate(n), e.setUTCHours(0, 0, 0, 0), e;
                },
              },
            ]),
            n
          );
        })(W),
        We = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 90),
              A(S(e), 'subpriority', 1),
              A(S(e), 'incompatibleTokens', [
                'Y',
                'R',
                'q',
                'Q',
                'M',
                'L',
                'w',
                'I',
                'd',
                'E',
                'i',
                'e',
                'c',
                't',
                'T',
              ]),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t, n) {
                  switch (t) {
                    case 'D':
                    case 'DD':
                      return fe(Q, e);
                    case 'Do':
                      return n.ordinalNumber(e, { unit: 'date' });
                    default:
                      return me(t.length, e);
                  }
                },
              },
              {
                key: 'validate',
                value: function (e, t) {
                  return ge(e.getUTCFullYear())
                    ? t >= 1 && t <= 366
                    : t >= 1 && t <= 365;
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return e.setUTCMonth(0, n), e.setUTCHours(0, 0, 0, 0), e;
                },
              },
            ]),
            n
          );
        })(W);
      function Ie(e, t, n) {
        var o, i, c, u, s, l, d, f;
        r(2, arguments);
        var p = xe(),
          h = w(
            null !==
              (o =
                null !==
                  (i =
                    null !==
                      (c =
                        null !== (u = null == n ? void 0 : n.weekStartsOn) &&
                        void 0 !== u
                          ? u
                          : null == n ||
                            null === (s = n.locale) ||
                            void 0 === s ||
                            null === (l = s.options) ||
                            void 0 === l
                          ? void 0
                          : l.weekStartsOn) && void 0 !== c
                      ? c
                      : p.weekStartsOn) && void 0 !== i
                  ? i
                  : null === (d = p.locale) ||
                    void 0 === d ||
                    null === (f = d.options) ||
                    void 0 === f
                  ? void 0
                  : f.weekStartsOn) && void 0 !== o
              ? o
              : 0
          );
        if (!(h >= 0 && h <= 6))
          throw new RangeError(
            'weekStartsOn must be between 0 and 6 inclusively'
          );
        var m = a(e),
          v = w(t),
          y = (((v % 7) + 7) % 7 < h ? 7 : 0) + v - m.getUTCDay();
        return m.setUTCDate(m.getUTCDate() + y), m;
      }
      var Re = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 90),
              A(S(e), 'incompatibleTokens', ['D', 'i', 'e', 'c', 't', 'T']),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t, n) {
                  switch (t) {
                    case 'E':
                    case 'EE':
                    case 'EEE':
                      return (
                        n.day(e, {
                          width: 'abbreviated',
                          context: 'formatting',
                        }) ||
                        n.day(e, { width: 'short', context: 'formatting' }) ||
                        n.day(e, { width: 'narrow', context: 'formatting' })
                      );
                    case 'EEEEE':
                      return n.day(e, {
                        width: 'narrow',
                        context: 'formatting',
                      });
                    case 'EEEEEE':
                      return (
                        n.day(e, { width: 'short', context: 'formatting' }) ||
                        n.day(e, { width: 'narrow', context: 'formatting' })
                      );
                    default:
                      return (
                        n.day(e, { width: 'wide', context: 'formatting' }) ||
                        n.day(e, {
                          width: 'abbreviated',
                          context: 'formatting',
                        }) ||
                        n.day(e, { width: 'short', context: 'formatting' }) ||
                        n.day(e, { width: 'narrow', context: 'formatting' })
                      );
                  }
                },
              },
              {
                key: 'validate',
                value: function (e, t) {
                  return t >= 0 && t <= 6;
                },
              },
              {
                key: 'set',
                value: function (e, t, n, r) {
                  return (e = Ie(e, n, r)).setUTCHours(0, 0, 0, 0), e;
                },
              },
            ]),
            n
          );
        })(W),
        Fe = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 90),
              A(S(e), 'incompatibleTokens', [
                'y',
                'R',
                'u',
                'q',
                'Q',
                'M',
                'L',
                'I',
                'd',
                'D',
                'E',
                'i',
                'c',
                't',
                'T',
              ]),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t, n, r) {
                  var a = function (e) {
                    var t = 7 * Math.floor((e - 1) / 7);
                    return ((e + r.weekStartsOn + 6) % 7) + t;
                  };
                  switch (t) {
                    case 'e':
                    case 'ee':
                      return de(me(t.length, e), a);
                    case 'eo':
                      return de(n.ordinalNumber(e, { unit: 'day' }), a);
                    case 'eee':
                      return (
                        n.day(e, {
                          width: 'abbreviated',
                          context: 'formatting',
                        }) ||
                        n.day(e, { width: 'short', context: 'formatting' }) ||
                        n.day(e, { width: 'narrow', context: 'formatting' })
                      );
                    case 'eeeee':
                      return n.day(e, {
                        width: 'narrow',
                        context: 'formatting',
                      });
                    case 'eeeeee':
                      return (
                        n.day(e, { width: 'short', context: 'formatting' }) ||
                        n.day(e, { width: 'narrow', context: 'formatting' })
                      );
                    default:
                      return (
                        n.day(e, { width: 'wide', context: 'formatting' }) ||
                        n.day(e, {
                          width: 'abbreviated',
                          context: 'formatting',
                        }) ||
                        n.day(e, { width: 'short', context: 'formatting' }) ||
                        n.day(e, { width: 'narrow', context: 'formatting' })
                      );
                  }
                },
              },
              {
                key: 'validate',
                value: function (e, t) {
                  return t >= 0 && t <= 6;
                },
              },
              {
                key: 'set',
                value: function (e, t, n, r) {
                  return (e = Ie(e, n, r)).setUTCHours(0, 0, 0, 0), e;
                },
              },
            ]),
            n
          );
        })(W),
        Qe = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 90),
              A(S(e), 'incompatibleTokens', [
                'y',
                'R',
                'u',
                'q',
                'Q',
                'M',
                'L',
                'I',
                'd',
                'D',
                'E',
                'i',
                'e',
                't',
                'T',
              ]),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t, n, r) {
                  var a = function (e) {
                    var t = 7 * Math.floor((e - 1) / 7);
                    return ((e + r.weekStartsOn + 6) % 7) + t;
                  };
                  switch (t) {
                    case 'c':
                    case 'cc':
                      return de(me(t.length, e), a);
                    case 'co':
                      return de(n.ordinalNumber(e, { unit: 'day' }), a);
                    case 'ccc':
                      return (
                        n.day(e, {
                          width: 'abbreviated',
                          context: 'standalone',
                        }) ||
                        n.day(e, { width: 'short', context: 'standalone' }) ||
                        n.day(e, { width: 'narrow', context: 'standalone' })
                      );
                    case 'ccccc':
                      return n.day(e, {
                        width: 'narrow',
                        context: 'standalone',
                      });
                    case 'cccccc':
                      return (
                        n.day(e, { width: 'short', context: 'standalone' }) ||
                        n.day(e, { width: 'narrow', context: 'standalone' })
                      );
                    default:
                      return (
                        n.day(e, { width: 'wide', context: 'standalone' }) ||
                        n.day(e, {
                          width: 'abbreviated',
                          context: 'standalone',
                        }) ||
                        n.day(e, { width: 'short', context: 'standalone' }) ||
                        n.day(e, { width: 'narrow', context: 'standalone' })
                      );
                  }
                },
              },
              {
                key: 'validate',
                value: function (e, t) {
                  return t >= 0 && t <= 6;
                },
              },
              {
                key: 'set',
                value: function (e, t, n, r) {
                  return (e = Ie(e, n, r)).setUTCHours(0, 0, 0, 0), e;
                },
              },
            ]),
            n
          );
        })(W),
        Be = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 90),
              A(S(e), 'incompatibleTokens', [
                'y',
                'Y',
                'u',
                'q',
                'Q',
                'M',
                'L',
                'w',
                'd',
                'D',
                'E',
                'e',
                'c',
                't',
                'T',
              ]),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t, n) {
                  var r = function (e) {
                    return 0 === e ? 7 : e;
                  };
                  switch (t) {
                    case 'i':
                    case 'ii':
                      return me(t.length, e);
                    case 'io':
                      return n.ordinalNumber(e, { unit: 'day' });
                    case 'iii':
                      return de(
                        n.day(e, {
                          width: 'abbreviated',
                          context: 'formatting',
                        }) ||
                          n.day(e, { width: 'short', context: 'formatting' }) ||
                          n.day(e, { width: 'narrow', context: 'formatting' }),
                        r
                      );
                    case 'iiiii':
                      return de(
                        n.day(e, { width: 'narrow', context: 'formatting' }),
                        r
                      );
                    case 'iiiiii':
                      return de(
                        n.day(e, { width: 'short', context: 'formatting' }) ||
                          n.day(e, { width: 'narrow', context: 'formatting' }),
                        r
                      );
                    default:
                      return de(
                        n.day(e, { width: 'wide', context: 'formatting' }) ||
                          n.day(e, {
                            width: 'abbreviated',
                            context: 'formatting',
                          }) ||
                          n.day(e, { width: 'short', context: 'formatting' }) ||
                          n.day(e, { width: 'narrow', context: 'formatting' }),
                        r
                      );
                  }
                },
              },
              {
                key: 'validate',
                value: function (e, t) {
                  return t >= 1 && t <= 7;
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return (
                    (e = (function (e, t) {
                      r(2, arguments);
                      var n = w(t);
                      n % 7 == 0 && (n -= 7);
                      var o = a(e),
                        i = (((n % 7) + 7) % 7 < 1 ? 7 : 0) + n - o.getUTCDay();
                      return o.setUTCDate(o.getUTCDate() + i), o;
                    })(e, n)),
                    e.setUTCHours(0, 0, 0, 0),
                    e
                  );
                },
              },
            ]),
            n
          );
        })(W),
        Xe = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 80),
              A(S(e), 'incompatibleTokens', ['b', 'B', 'H', 'k', 't', 'T']),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t, n) {
                  switch (t) {
                    case 'a':
                    case 'aa':
                    case 'aaa':
                      return (
                        n.dayPeriod(e, {
                          width: 'abbreviated',
                          context: 'formatting',
                        }) ||
                        n.dayPeriod(e, {
                          width: 'narrow',
                          context: 'formatting',
                        })
                      );
                    case 'aaaaa':
                      return n.dayPeriod(e, {
                        width: 'narrow',
                        context: 'formatting',
                      });
                    default:
                      return (
                        n.dayPeriod(e, {
                          width: 'wide',
                          context: 'formatting',
                        }) ||
                        n.dayPeriod(e, {
                          width: 'abbreviated',
                          context: 'formatting',
                        }) ||
                        n.dayPeriod(e, {
                          width: 'narrow',
                          context: 'formatting',
                        })
                      );
                  }
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return e.setUTCHours(ye(n), 0, 0, 0), e;
                },
              },
            ]),
            n
          );
        })(W),
        _e = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 80),
              A(S(e), 'incompatibleTokens', ['a', 'B', 'H', 'k', 't', 'T']),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t, n) {
                  switch (t) {
                    case 'b':
                    case 'bb':
                    case 'bbb':
                      return (
                        n.dayPeriod(e, {
                          width: 'abbreviated',
                          context: 'formatting',
                        }) ||
                        n.dayPeriod(e, {
                          width: 'narrow',
                          context: 'formatting',
                        })
                      );
                    case 'bbbbb':
                      return n.dayPeriod(e, {
                        width: 'narrow',
                        context: 'formatting',
                      });
                    default:
                      return (
                        n.dayPeriod(e, {
                          width: 'wide',
                          context: 'formatting',
                        }) ||
                        n.dayPeriod(e, {
                          width: 'abbreviated',
                          context: 'formatting',
                        }) ||
                        n.dayPeriod(e, {
                          width: 'narrow',
                          context: 'formatting',
                        })
                      );
                  }
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return e.setUTCHours(ye(n), 0, 0, 0), e;
                },
              },
            ]),
            n
          );
        })(W),
        Je = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 80),
              A(S(e), 'incompatibleTokens', ['a', 'b', 't', 'T']),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t, n) {
                  switch (t) {
                    case 'B':
                    case 'BB':
                    case 'BBB':
                      return (
                        n.dayPeriod(e, {
                          width: 'abbreviated',
                          context: 'formatting',
                        }) ||
                        n.dayPeriod(e, {
                          width: 'narrow',
                          context: 'formatting',
                        })
                      );
                    case 'BBBBB':
                      return n.dayPeriod(e, {
                        width: 'narrow',
                        context: 'formatting',
                      });
                    default:
                      return (
                        n.dayPeriod(e, {
                          width: 'wide',
                          context: 'formatting',
                        }) ||
                        n.dayPeriod(e, {
                          width: 'abbreviated',
                          context: 'formatting',
                        }) ||
                        n.dayPeriod(e, {
                          width: 'narrow',
                          context: 'formatting',
                        })
                      );
                  }
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return e.setUTCHours(ye(n), 0, 0, 0), e;
                },
              },
            ]),
            n
          );
        })(W),
        Ge = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 70),
              A(S(e), 'incompatibleTokens', ['H', 'K', 'k', 't', 'T']),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t, n) {
                  switch (t) {
                    case 'h':
                      return fe(G, e);
                    case 'ho':
                      return n.ordinalNumber(e, { unit: 'hour' });
                    default:
                      return me(t.length, e);
                  }
                },
              },
              {
                key: 'validate',
                value: function (e, t) {
                  return t >= 1 && t <= 12;
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  var r = e.getUTCHours() >= 12;
                  return (
                    r && n < 12
                      ? e.setUTCHours(n + 12, 0, 0, 0)
                      : r || 12 !== n
                      ? e.setUTCHours(n, 0, 0, 0)
                      : e.setUTCHours(0, 0, 0, 0),
                    e
                  );
                },
              },
            ]),
            n
          );
        })(W),
        ze = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 70),
              A(S(e), 'incompatibleTokens', [
                'a',
                'b',
                'h',
                'K',
                'k',
                't',
                'T',
              ]),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t, n) {
                  switch (t) {
                    case 'H':
                      return fe(X, e);
                    case 'Ho':
                      return n.ordinalNumber(e, { unit: 'hour' });
                    default:
                      return me(t.length, e);
                  }
                },
              },
              {
                key: 'validate',
                value: function (e, t) {
                  return t >= 0 && t <= 23;
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return e.setUTCHours(n, 0, 0, 0), e;
                },
              },
            ]),
            n
          );
        })(W),
        Ze = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 70),
              A(S(e), 'incompatibleTokens', ['h', 'H', 'k', 't', 'T']),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t, n) {
                  switch (t) {
                    case 'K':
                      return fe(J, e);
                    case 'Ko':
                      return n.ordinalNumber(e, { unit: 'hour' });
                    default:
                      return me(t.length, e);
                  }
                },
              },
              {
                key: 'validate',
                value: function (e, t) {
                  return t >= 0 && t <= 11;
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return (
                    e.getUTCHours() >= 12 && n < 12
                      ? e.setUTCHours(n + 12, 0, 0, 0)
                      : e.setUTCHours(n, 0, 0, 0),
                    e
                  );
                },
              },
            ]),
            n
          );
        })(W),
        $e = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 70),
              A(S(e), 'incompatibleTokens', [
                'a',
                'b',
                'h',
                'H',
                'K',
                't',
                'T',
              ]),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t, n) {
                  switch (t) {
                    case 'k':
                      return fe(_, e);
                    case 'ko':
                      return n.ordinalNumber(e, { unit: 'hour' });
                    default:
                      return me(t.length, e);
                  }
                },
              },
              {
                key: 'validate',
                value: function (e, t) {
                  return t >= 1 && t <= 24;
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  var r = n <= 24 ? n % 24 : n;
                  return e.setUTCHours(r, 0, 0, 0), e;
                },
              },
            ]),
            n
          );
        })(W),
        Ve = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 60),
              A(S(e), 'incompatibleTokens', ['t', 'T']),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t, n) {
                  switch (t) {
                    case 'm':
                      return fe(z, e);
                    case 'mo':
                      return n.ordinalNumber(e, { unit: 'minute' });
                    default:
                      return me(t.length, e);
                  }
                },
              },
              {
                key: 'validate',
                value: function (e, t) {
                  return t >= 0 && t <= 59;
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return e.setUTCMinutes(n, 0, 0), e;
                },
              },
            ]),
            n
          );
        })(W),
        Ke = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 50),
              A(S(e), 'incompatibleTokens', ['t', 'T']),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t, n) {
                  switch (t) {
                    case 's':
                      return fe(Z, e);
                    case 'so':
                      return n.ordinalNumber(e, { unit: 'second' });
                    default:
                      return me(t.length, e);
                  }
                },
              },
              {
                key: 'validate',
                value: function (e, t) {
                  return t >= 0 && t <= 59;
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return e.setUTCSeconds(n, 0), e;
                },
              },
            ]),
            n
          );
        })(W),
        et = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 30),
              A(S(e), 'incompatibleTokens', ['t', 'T']),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t) {
                  return de(me(t.length, e), function (e) {
                    return Math.floor(e * Math.pow(10, 3 - t.length));
                  });
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return e.setUTCMilliseconds(n), e;
                },
              },
            ]),
            n
          );
        })(W),
        tt = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 10),
              A(S(e), 'incompatibleTokens', ['t', 'T', 'x']),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t) {
                  switch (t) {
                    case 'X':
                      return pe(ie, e);
                    case 'XX':
                      return pe(ce, e);
                    case 'XXXX':
                      return pe(ue, e);
                    case 'XXXXX':
                      return pe(le, e);
                    default:
                      return pe(se, e);
                  }
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return t.timestampIsSet ? e : new Date(e.getTime() - n);
                },
              },
            ]),
            n
          );
        })(W),
        nt = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 10),
              A(S(e), 'incompatibleTokens', ['t', 'T', 'X']),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e, t) {
                  switch (t) {
                    case 'x':
                      return pe(ie, e);
                    case 'xx':
                      return pe(ce, e);
                    case 'xxxx':
                      return pe(ue, e);
                    case 'xxxxx':
                      return pe(le, e);
                    default:
                      return pe(se, e);
                  }
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return t.timestampIsSet ? e : new Date(e.getTime() - n);
                },
              },
            ]),
            n
          );
        })(W),
        rt = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 40),
              A(S(e), 'incompatibleTokens', '*'),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e) {
                  return he(e);
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return [new Date(1e3 * n), { timestampIsSet: !0 }];
                },
              },
            ]),
            n
          );
        })(W),
        at = (function (e) {
          j(n, e);
          var t = L(n);
          function n() {
            var e;
            P(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              A(S((e = t.call.apply(t, [this].concat(a)))), 'priority', 20),
              A(S(e), 'incompatibleTokens', '*'),
              e
            );
          }
          return (
            q(n, [
              {
                key: 'parse',
                value: function (e) {
                  return he(e);
                },
              },
              {
                key: 'set',
                value: function (e, t, n) {
                  return [new Date(n), { timestampIsSet: !0 }];
                },
              },
            ]),
            n
          );
        })(W),
        ot = {
          G: new I(),
          y: new be(),
          Y: new Ee(),
          R: new Ne(),
          u: new je(),
          Q: new De(),
          q: new Le(),
          M: new Pe(),
          L: new Me(),
          w: new Ue(),
          I: new Ae(),
          d: new He(),
          D: new We(),
          E: new Re(),
          e: new Fe(),
          c: new Qe(),
          i: new Be(),
          a: new Xe(),
          b: new _e(),
          B: new Je(),
          h: new Ge(),
          H: new ze(),
          K: new Ze(),
          k: new $e(),
          m: new Ve(),
          s: new Ke(),
          S: new et(),
          X: new tt(),
          x: new nt(),
          t: new rt(),
          T: new at(),
        },
        it = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        ct = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        ut = /^'([^]*?)'?$/,
        st = /''/g,
        lt = /\S/,
        dt = /[a-zA-Z]/;
      function ft(e, n, o, i) {
        var u, s, l, d, f, p, h, m, v, b, k, S, N, j, D, L, P, M;
        r(3, arguments);
        var U = String(e),
          q = String(n),
          A = xe(),
          O =
            null !==
              (u =
                null !== (s = null == i ? void 0 : i.locale) && void 0 !== s
                  ? s
                  : A.locale) && void 0 !== u
              ? u
              : y;
        if (!O.match)
          throw new RangeError('locale must contain match property');
        var Y = w(
          null !==
            (l =
              null !==
                (d =
                  null !==
                    (f =
                      null !==
                        (p = null == i ? void 0 : i.firstWeekContainsDate) &&
                      void 0 !== p
                        ? p
                        : null == i ||
                          null === (h = i.locale) ||
                          void 0 === h ||
                          null === (m = h.options) ||
                          void 0 === m
                        ? void 0
                        : m.firstWeekContainsDate) && void 0 !== f
                    ? f
                    : A.firstWeekContainsDate) && void 0 !== d
                ? d
                : null === (v = A.locale) ||
                  void 0 === v ||
                  null === (b = v.options) ||
                  void 0 === b
                ? void 0
                : b.firstWeekContainsDate) && void 0 !== l
            ? l
            : 1
        );
        if (!(Y >= 1 && Y <= 7))
          throw new RangeError(
            'firstWeekContainsDate must be between 1 and 7 inclusively'
          );
        var W = w(
          null !==
            (k =
              null !==
                (S =
                  null !==
                    (N =
                      null !== (j = null == i ? void 0 : i.weekStartsOn) &&
                      void 0 !== j
                        ? j
                        : null == i ||
                          null === (D = i.locale) ||
                          void 0 === D ||
                          null === (L = D.options) ||
                          void 0 === L
                        ? void 0
                        : L.weekStartsOn) && void 0 !== N
                    ? N
                    : A.weekStartsOn) && void 0 !== S
                ? S
                : null === (P = A.locale) ||
                  void 0 === P ||
                  null === (M = P.options) ||
                  void 0 === M
                ? void 0
                : M.weekStartsOn) && void 0 !== k
            ? k
            : 0
        );
        if (!(W >= 0 && W <= 6))
          throw new RangeError(
            'weekStartsOn must be between 0 and 6 inclusively'
          );
        if ('' === q) return '' === U ? a(o) : new Date(NaN);
        var I,
          R = { firstWeekContainsDate: Y, weekStartsOn: W, locale: O },
          F = [new H()],
          Q = q
            .match(ct)
            .map(function (e) {
              var t = e[0];
              return t in x ? (0, x[t])(e, O.formatLong) : e;
            })
            .join('')
            .match(it),
          B = [],
          X = c(Q);
        try {
          var _ = function () {
            var t = I.value;
            (null != i && i.useAdditionalWeekYearTokens) ||
              !(function (e) {
                return -1 !== C.indexOf(e);
              })(t) ||
              E(t, q, e),
              (null != i && i.useAdditionalDayOfYearTokens) ||
                !(function (e) {
                  return -1 !== T.indexOf(e);
                })(t) ||
                E(t, q, e);
            var n = t[0],
              r = ot[n];
            if (r) {
              var a = r.incompatibleTokens;
              if (Array.isArray(a)) {
                var o = B.find(function (e) {
                  return a.includes(e.token) || e.token === n;
                });
                if (o)
                  throw new RangeError(
                    "The format string mustn't contain `"
                      .concat(o.fullToken, '` and `')
                      .concat(t, '` at the same time')
                  );
              } else if ('*' === r.incompatibleTokens && B.length > 0)
                throw new RangeError(
                  "The format string mustn't contain `".concat(
                    t,
                    '` and any other token at the same time'
                  )
                );
              B.push({ token: n, fullToken: t });
              var c = r.run(U, t, O.match, R);
              if (!c) return { v: new Date(NaN) };
              F.push(c.setter), (U = c.rest);
            } else {
              if (n.match(dt))
                throw new RangeError(
                  'Format string contains an unescaped latin alphabet character `' +
                    n +
                    '`'
                );
              if (
                ("''" === t
                  ? (t = "'")
                  : "'" === n && (t = t.match(ut)[1].replace(st, "'")),
                0 !== U.indexOf(t))
              )
                return { v: new Date(NaN) };
              U = U.slice(t.length);
            }
          };
          for (X.s(); !(I = X.n()).done; ) {
            var J = _();
            if ('object' === t(J)) return J.v;
          }
        } catch (e) {
          X.e(e);
        } finally {
          X.f();
        }
        if (U.length > 0 && lt.test(U)) return new Date(NaN);
        var G = F.map(function (e) {
            return e.priority;
          })
            .sort(function (e, t) {
              return t - e;
            })
            .filter(function (e, t, n) {
              return n.indexOf(e) === t;
            })
            .map(function (e) {
              return F.filter(function (t) {
                return t.priority === e;
              }).sort(function (e, t) {
                return t.subPriority - e.subPriority;
              });
            })
            .map(function (e) {
              return e[0];
            }),
          z = a(o);
        if (isNaN(z.getTime())) return new Date(NaN);
        var Z,
          $ = (function (e, t) {
            return (
              r(2, arguments),
              (function (e, t) {
                r(2, arguments);
                var n = a(e).getTime(),
                  o = w(t);
                return new Date(n + o);
              })(e, -w(t))
            );
          })(
            z,
            (function (e) {
              var t = new Date(
                Date.UTC(
                  e.getFullYear(),
                  e.getMonth(),
                  e.getDate(),
                  e.getHours(),
                  e.getMinutes(),
                  e.getSeconds(),
                  e.getMilliseconds()
                )
              );
              return (
                t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime()
              );
            })(z)
          ),
          V = {},
          K = c(G);
        try {
          for (K.s(); !(Z = K.n()).done; ) {
            var ee = Z.value;
            if (!ee.validate($, R)) return new Date(NaN);
            var te = ee.set($, V, R);
            Array.isArray(te) ? (($ = te[0]), g(V, te[1])) : ($ = te);
          }
        } catch (e) {
          K.e(e);
        } finally {
          K.f();
        }
        return $;
      }
      function pt(e, t) {
        var n, o, i, c, u, s, l, d;
        r(1, arguments);
        var f = xe(),
          p = w(
            null !==
              (n =
                null !==
                  (o =
                    null !==
                      (i =
                        null !== (c = null == t ? void 0 : t.weekStartsOn) &&
                        void 0 !== c
                          ? c
                          : null == t ||
                            null === (u = t.locale) ||
                            void 0 === u ||
                            null === (s = u.options) ||
                            void 0 === s
                          ? void 0
                          : s.weekStartsOn) && void 0 !== i
                      ? i
                      : f.weekStartsOn) && void 0 !== o
                  ? o
                  : null === (l = f.locale) ||
                    void 0 === l ||
                    null === (d = l.options) ||
                    void 0 === d
                  ? void 0
                  : d.weekStartsOn) && void 0 !== n
              ? n
              : 0
          );
        if (!(p >= 0 && p <= 6))
          throw new RangeError(
            'weekStartsOn must be between 0 and 6 inclusively'
          );
        var h = a(e),
          m = h.getDay(),
          v = (m < p ? 7 : 0) + m - p;
        return h.setDate(h.getDate() - v), h.setHours(0, 0, 0, 0), h;
      }
      const ht = (() => {
          let e = [],
            t = [];
          const n = () => JSON.parse(localStorage.getItem('projects')) || [],
            a = () => JSON.parse(localStorage.getItem('notes')) || [],
            i = () => {
              e = n();
            },
            c = () => {
              t = a();
            };
          return {
            projects: e,
            notes: t,
            storeNewProject: (t) => {
              i();
              const n = ((e, t) => ({ projectName: e, tasks: [] }))(t);
              e.push(n), localStorage.setItem('projects', JSON.stringify(e));
            },
            storeNewNote: (e, n) => {
              c();
              const r = ((e, t) => ({ noteName: e, noteDesc: t }))(e, n);
              t.push(r), localStorage.setItem('notes', JSON.stringify(t));
            },
            storeNewTask: (t, n, r) => {
              i(),
                e
                  .find((e) => e.projectName === t)
                  .tasks.push(
                    ((e, t, n) => ({ taskName: e, dueDate: t, checked: !1 }))(
                      n,
                      r
                    )
                  ),
                localStorage.setItem('projects', JSON.stringify(e));
            },
            getProjectList: n,
            getNoteList: a,
            getTodayTasks: () => {
              const t = [];
              return (
                i(),
                e.forEach((e) => {
                  e.tasks.forEach((e) => {
                    (function (e) {
                      return (
                        r(1, arguments),
                        (function (e, t) {
                          r(2, arguments);
                          var n = o(e),
                            a = o(t);
                          return n.getTime() === a.getTime();
                        })(e, Date.now())
                      );
                    })(ft(e.dueDate, 'yyyy-MM-dd', new Date())) && t.push(e);
                  });
                }),
                t
              );
            },
            getWeekTasks: () => {
              const t = [];
              return (
                i(),
                e.forEach((e) => {
                  e.tasks.forEach((e) => {
                    (function (e, t) {
                      return (
                        r(1, arguments),
                        (function (e, t, n) {
                          r(2, arguments);
                          var a = pt(e, n),
                            o = pt(t, n);
                          return a.getTime() === o.getTime();
                        })(e, Date.now(), t)
                      );
                    })(ft(e.dueDate, 'yyyy-MM-dd', new Date()), {
                      weekStartsOn: 1,
                    }) && t.push(e);
                  });
                }),
                t
              );
            },
            getTaskList: (e) => n().find((t) => t.projectName === e).tasks,
            updateProjectList: i,
            updateNoteList: c,
            validateProjectName: (e) =>
              void 0 === n().find((t) => t.projectName === e),
            checkTask: (t, n) => {
              i(),
                (e
                  .find((e) => e.projectName === t)
                  .tasks.find((e) => e.taskName === n).checked = !0),
                localStorage.setItem('projects', JSON.stringify(e));
            },
            deleteTask: (t, n) => {
              i();
              const r = e.find((e) => e.projectName === t).tasks;
              for (let e = 0; e < r.length; e += 1)
                r[e].taskName === n && r.splice(e, 1);
              (e.find((e) => e.projectName === t).tasks = r),
                localStorage.setItem('projects', JSON.stringify(e));
            },
            deleteProject: (t) => {
              i();
              for (let n = 0; n < e.length; n += 1)
                e[n].projectName === t && e.splice(n, 1);
              localStorage.setItem('projects', JSON.stringify(e));
            },
            deleteNote: (e) => {
              c();
              for (let n = 0; n < t.length; n += 1)
                t[n].noteName === e && t.splice(n, 1);
              localStorage.setItem('notes', JSON.stringify(t));
            },
          };
        })(),
        mt = ht,
        vt = (() => {
          const e = (e, t, n, r, a) => {
              const o = document.createElement('li');
              o.classList.add('nav-item'),
                ((e, t, n, r, a) => {
                  const o = document.createElement('button');
                  o.classList.add(
                    'nav-btn',
                    'font-20px',
                    'flex',
                    'align-center'
                  ),
                    a && o.classList.add(a),
                    r && (o.id = r);
                  const i = document.createElement('span');
                  (i.textContent = e),
                    i.classList.add('material-icons'),
                    o.appendChild(i),
                    (o.innerHTML += t),
                    n.appendChild(o);
                })(e, t, o, r, a),
                n.appendChild(o);
            },
            t = (e, t, n, r) => {
              const a = document.createElement('button');
              a.classList.add('task', 'flex', 'align-center', 'font-20px');
              const o = document.createElement('div');
              o.classList.add('task-left-panel', 'flex'), a.appendChild(o);
              const i = document.createElement('div');
              i.classList.add('task-right-panel', 'flex'), a.appendChild(i);
              const c = document.createElement('span');
              n && (c.textContent = 'check_box'),
                n || (c.textContent = 'check_box_outline_blank'),
                c.classList.add('material-icons', 'task-status'),
                (c.dataset.taskName = e),
                o.appendChild(c);
              const u = document.createElement('p');
              (u.textContent = e), o.appendChild(u);
              const s = document.createElement('p');
              (s.textContent = t), i.appendChild(s);
              const l = document.createElement('span');
              (l.textContent = 'delete'),
                l.classList.add('material-icons', 'delete-task'),
                (l.dataset.taskName = e),
                i.appendChild(l),
                r.appendChild(a);
            },
            n = () => {
              const e = document.querySelector('.note-container'),
                t = mt.getNoteList();
              (e.innerHTML = ''),
                0 === t.length && (e.style.display = 'none'),
                t.length > 0 && (e.style.display = 'grid'),
                t.forEach((t) => {
                  const n = document.createElement('div');
                  n.classList.add('note'), e.appendChild(n);
                  const r = document.createElement('h3');
                  r.classList.add('note-title'),
                    (r.textContent = t.noteName),
                    n.appendChild(r);
                  const a = document.createElement('p');
                  a.classList.add('note-desc'),
                    (a.textContent = t.noteDesc),
                    n.appendChild(a);
                  const o = document.createElement('span');
                  o.classList.add('material-icons', 'delete-note'),
                    (o.textContent = 'delete'),
                    (o.dataset.noteName = t.noteName),
                    n.appendChild(o);
                }),
                document.querySelectorAll('.delete-note').forEach((e) => {
                  e.addEventListener('click', (e) => {
                    const t = e.target.dataset.noteName.toString();
                    mt.deleteNote(t), n();
                  });
                });
            },
            r = () => {
              const e = document.querySelector('.task-container'),
                n = document.querySelector('#page-title').textContent,
                a = mt.getTaskList(n);
              (e.innerHTML = ''),
                0 === a.length && (e.style.display = 'none'),
                a.length > 0 && (e.style.display = 'grid'),
                a.forEach((n) => {
                  t(n.taskName, n.dueDate, n.checked, e);
                }),
                document.querySelectorAll('.task-status').forEach((e) => {
                  e.addEventListener('click', (e) => {
                    ((e, t) => {
                      const n = e.target.dataset.taskName.toString();
                      (e.target.textContent = 'check_box'), mt.checkTask(t, n);
                    })(e, n);
                  });
                }),
                document.querySelectorAll('.delete-task').forEach((e) => {
                  e.addEventListener('click', (e) => {
                    const t = e.target.dataset.taskName.toString();
                    mt.deleteTask(n, t), r();
                  });
                });
            },
            a = () => {
              const e = document.querySelector('#element-container'),
                t = document.querySelector('#new-task-btn');
              t.style.display = 'none';
              const n = document.createElement('form');
              (n.method = 'post'), (n.id = 'new-task-popup');
              const a = document.createElement('input');
              a.classList.add('font-20px'),
                (a.type = 'text'),
                (a.id = 'task-name'),
                (a.name = 'taskName'),
                (a.placeholder = 'Title'),
                (a.required = !0),
                (a.autocomplete = 'off'),
                n.appendChild(a);
              const o = document.createElement('input');
              (o.type = 'date'), (o.id = 'new-task-date'), n.appendChild(o);
              const i = document.createElement('div');
              (i.id = 'new-task-popup-buttons'),
                i.classList.add('flex', 'font-20px'),
                n.appendChild(i);
              const c = document.createElement('button');
              (c.type = 'submit'),
                (c.id = 'accept-new-task-btn'),
                (c.textContent = 'Ok'),
                c.classList.add('flex', 'font-20px', 'justify-center'),
                i.appendChild(c);
              const u = document.createElement('button');
              (u.id = 'cancel-new-task-btn'),
                (u.textContent = 'Cancel'),
                u.classList.add('flex', 'font-20px', 'justify-center'),
                i.appendChild(u),
                c.addEventListener('click', (e) => {
                  e.preventDefault();
                  const i = document.querySelector('#page-title').textContent;
                  mt.storeNewTask(i, a.value, o.value),
                    n.remove(),
                    r(),
                    (t.style.display = 'flex');
                }),
                u.addEventListener('click', (e) => {
                  e.preventDefault(), n.remove(), (t.style.display = 'flex');
                }),
                e.appendChild(n);
            },
            o = (t) => {
              const n = document.querySelector('#element-container');
              n.innerHTML = '';
              const o = t.target.dataset.projectName.toString(),
                i = document.createElement('h2');
              (i.id = 'page-title'), (i.textContent = o), n.appendChild(i);
              const c = document.createElement('div');
              (c.id = 'container'),
                c.classList.add('task-container'),
                n.appendChild(c),
                0 === mt.getTaskList(o).length && (c.style.display = 'none'),
                r(),
                e('add_circle', 'New task', n, 'new-task-btn'),
                document
                  .querySelector('#new-task-btn')
                  .addEventListener('click', a);
            },
            i = () => {
              const e = document.querySelector('#nav-list-projects'),
                t = mt.getProjectList();
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
                    const r = document.createElement('span');
                    (r.textContent = 'folder'),
                      r.classList.add('material-icons'),
                      (r.dataset.projectName = e),
                      n.appendChild(r);
                    const a = document.createElement('p');
                    (a.textContent = e),
                      a.classList.add('project-name-element'),
                      (a.dataset.projectName = e),
                      n.appendChild(a);
                    const o = document.createElement('span');
                    (o.textContent = 'delete'),
                      o.classList.add('material-icons', 'delete-project-btn'),
                      (o.dataset.projectName = e),
                      (o.style.display = 'none'),
                      n.appendChild(o),
                      (n.onmouseover = () => {
                        o.style.display = 'inline-block';
                      }),
                      (n.onmouseout = () => {
                        o.style.display = 'none';
                      }),
                      t.appendChild(n);
                  })(`${t.projectName}`, e);
                });
              const n = document.querySelectorAll('.project-item');
              n.forEach((e) => {
                e.addEventListener('click', o);
              }),
                document
                  .querySelectorAll('.delete-project-btn')
                  .forEach((e) => {
                    e.addEventListener('click', (e) => {
                      n.forEach((e) => {
                        e.removeEventListener('click', o);
                      });
                      const t = e.target.dataset.projectName.toString();
                      (document.querySelector('#element-container').innerHTML =
                        ''),
                        mt.deleteProject(t),
                        i();
                    });
                  });
            };
          return {
            createButton: (e, t, n, r, a) => {
              const o = document.createElement('button');
              o.classList.add('font-20px', 'flex', 'align-center'),
                a && o.classList.add(a),
                r && (o.id = r);
              const i = document.createElement('span');
              (i.textContent = e),
                i.classList.add('material-icons'),
                o.appendChild(i),
                (o.innerHTML += t),
                n.appendChild(o);
            },
            createNavListItem: e,
            createTaskElement: t,
            updateNavProjectList: i,
            updateNoteList: n,
            updateTaskContainer: r,
            addNewProjectPopup: () => {
              const e = document.querySelector('nav'),
                t = document.querySelector('#new-project-btn');
              t.style.display = 'none';
              const n = document.createElement('form');
              (n.method = 'post'), (n.id = 'new-project-popup');
              const r = document.createElement('input');
              r.classList.add('font-20px'),
                (r.type = 'text'),
                (r.id = 'project-name'),
                (r.name = 'projectName'),
                (r.placeholder = 'Title'),
                (r.required = !0),
                (r.autocomplete = 'off'),
                n.appendChild(r);
              const a = document.createElement('div');
              (a.id = 'new-project-popup-buttons'),
                a.classList.add('flex', 'font-20px'),
                n.appendChild(a);
              const o = document.createElement('button');
              (o.type = 'submit'),
                (o.id = 'accept-new-project-btn'),
                (o.textContent = 'Ok'),
                o.classList.add('flex', 'font-20px', 'justify-center'),
                a.appendChild(o);
              const c = document.createElement('button');
              (c.id = 'cancel-new-project-btn'),
                (c.textContent = 'Cancel'),
                c.classList.add('flex', 'font-20px', 'justify-center'),
                a.appendChild(c),
                o.addEventListener('click', (e) => {
                  e.preventDefault(),
                    mt.validateProjectName(r.value) &&
                      (n.remove(),
                      mt.storeNewProject(r.value),
                      i(),
                      (t.style.display = 'flex'));
                }),
                c.addEventListener('click', (e) => {
                  e.preventDefault(), n.remove(), (t.style.display = 'flex');
                }),
                e.appendChild(n);
            },
            addNewNotePopup: () => {
              const e = document.querySelector('#element-container'),
                t = document.querySelector('#new-note-btn');
              t.style.display = 'none';
              const r = document.createElement('form');
              (r.method = 'post'), (r.id = 'new-note-popup');
              const a = document.createElement('input');
              a.classList.add('font-20px'),
                (a.type = 'text'),
                (a.id = 'note-name'),
                (a.name = 'noteName'),
                (a.placeholder = 'Title'),
                (a.required = !0),
                (a.autocomplete = 'off'),
                r.appendChild(a);
              const o = document.createElement('input');
              o.classList.add('font-20px'),
                (o.type = 'text'),
                (o.id = 'note-desc'),
                (o.name = 'noteDesc'),
                (o.placeholder = 'Description'),
                (o.required = !0),
                r.appendChild(o);
              const i = document.createElement('div');
              (i.id = 'new-note-popup-buttons'),
                i.classList.add('flex', 'font-20px'),
                r.appendChild(i);
              const c = document.createElement('button');
              (c.type = 'submit'),
                (c.id = 'accept-new-note-btn'),
                (c.textContent = 'Ok'),
                c.classList.add('flex', 'font-20px', 'justify-center'),
                i.appendChild(c);
              const u = document.createElement('button');
              (u.id = 'cancel-new-note-btn'),
                (u.textContent = 'Cancel'),
                u.classList.add('flex', 'font-20px', 'justify-center'),
                i.appendChild(u),
                c.addEventListener('click', (e) => {
                  e.preventDefault(),
                    mt.storeNewNote(a.value, o.value),
                    r.remove(),
                    n(),
                    (t.style.display = 'flex');
                }),
                u.addEventListener('click', (e) => {
                  e.preventDefault(), r.remove(), (t.style.display = 'flex');
                }),
                e.appendChild(r);
            },
            addNewTaskPopup: a,
            viewProject: o,
          };
        })(),
        yt = () => {
          const e = document.querySelector('#element-container');
          e.innerHTML = '';
          const t = document.createElement('h2');
          (t.id = 'page-title'), (t.textContent = 'Home'), e.appendChild(t);
          const n = document.createElement('div');
          (n.id = 'container'),
            n.classList.add('note-container'),
            e.appendChild(n),
            0 === mt.getNoteList().length && (n.style.display = 'none'),
            vt.updateNoteList(),
            vt.createNavListItem('add_circle', 'New note', e, 'new-note-btn'),
            document
              .querySelector('#new-note-btn')
              .addEventListener('click', vt.addNewNotePopup);
        },
        wt = () => {
          const e = document.querySelector('#element-container');
          e.innerHTML = '';
          const t = document.createElement('h2');
          (t.id = 'page-title'), (t.textContent = 'Today'), e.appendChild(t);
          const n = document.createElement('div');
          (n.id = 'container'),
            n.classList.add('task-container'),
            e.appendChild(n),
            0 === mt.getTodayTasks().length && (n.style.display = 'none'),
            mt.getTodayTasks().forEach((e) => {
              vt.createTaskElement(e.taskName, e.dueDate, e.checked, n);
            });
        },
        gt = () => {
          const e = document.querySelector('#element-container');
          e.innerHTML = '';
          const t = document.createElement('h2');
          (t.id = 'page-title'), (t.textContent = 'Week'), e.appendChild(t);
          const n = document.createElement('div');
          (n.id = 'container'),
            n.classList.add('task-container'),
            e.appendChild(n),
            0 === mt.getWeekTasks().length && (n.style.display = 'none'),
            mt.getWeekTasks().forEach((e) => {
              vt.createTaskElement(e.taskName, e.dueDate, e.checked, n);
            });
        },
        bt = () => {
          document.querySelector('#home-tab').addEventListener('click', yt),
            document.querySelector('#today-tab').addEventListener('click', wt),
            document.querySelector('#week-tab').addEventListener('click', gt),
            document.querySelectorAll('.project-item').forEach((e) => {
              e.addEventListener('click', vt.viewProject);
            }),
            document.querySelectorAll('.delete-project-btn').forEach((e) => {
              e.addEventListener('click', (e) => {
                mt.deleteProject(e.target.dataset.projectName.toString()),
                  vt.updateNavProjectList();
              });
            }),
            document
              .querySelector('#new-project-btn')
              .addEventListener('click', vt.addNewProjectPopup),
            document
              .querySelector('#new-note-btn')
              .addEventListener('click', vt.addNewNotePopup);
        };
      var kt = n(379),
        xt = n.n(kt),
        Tt = n(795),
        Ct = n.n(Tt),
        Et = n(569),
        St = n.n(Et),
        Nt = n(565),
        jt = n.n(Nt),
        Dt = n(216),
        Lt = n.n(Dt),
        Pt = n(589),
        Mt = n.n(Pt),
        Ut = n(424),
        qt = {};
      (qt.styleTagTransform = Mt()),
        (qt.setAttributes = jt()),
        (qt.insert = St().bind(null, 'head')),
        (qt.domAPI = Ct()),
        (qt.insertStyleElement = Lt()),
        xt()(Ut.Z, qt),
        Ut.Z && Ut.Z.locals && Ut.Z.locals,
        (() => {
          const t = document.createElement('header'),
            n = document.createElement('div');
          n.setAttribute('id', 'logo-container'), t.appendChild(n);
          const r = new Image();
          (r.src = e),
            (r.alt = 'The Odin Project logo'),
            r.setAttribute('id', 'odin-logo'),
            n.appendChild(r);
          const a = document.createElement('p');
          a.setAttribute('id', 'logo-text'),
            (a.textContent = 'The Odin Project'),
            n.appendChild(a);
          const o = document.createElement('h1');
          (o.textContent = 'Todo List'),
            o.classList.add('font-48px'),
            t.appendChild(o),
            document.body.appendChild(t);
        })(),
        (() => {
          const e = document.createElement('main');
          document.body.appendChild(e),
            ((e) => {
              const t = document.createElement('nav'),
                n = document.createElement('h2');
              (n.textContent = 'Tasks'),
                (n.id = 'tasks-title'),
                t.appendChild(n);
              const r = document.createElement('ul');
              r.setAttribute('id', 'nav-list-tasks'),
                t.appendChild(r),
                vt.createNavListItem('home', 'Home', r, 'home-tab'),
                vt.createNavListItem('today', 'Today', r, 'today-tab'),
                vt.createNavListItem('date_range', 'Week', r, 'week-tab');
              const a = document.createElement('h2');
              (a.textContent = 'Projects'),
                (a.id = 'projects-title'),
                t.appendChild(a);
              const o = document.createElement('ul');
              o.setAttribute('id', 'nav-list-projects'),
                t.appendChild(o),
                vt.createNavListItem(
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
                yt(),
                vt.updateNoteList();
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
        window.addEventListener('load', vt.updateNavProjectList()),
        bt();
    })();
})();
