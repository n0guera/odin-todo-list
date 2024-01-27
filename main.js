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
        var r = n.getElementsByTagName('script');
        if (r.length) for (var a = r.length - 1; a > -1 && !t; ) t = r[a--].src;
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
  const t = e.p + '4f0f495b2f256748749f.png';
  function n(e) {
    return (
      (n =
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
      n(e)
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
    var t = Object.prototype.toString.call(e);
    return e instanceof Date || ('object' === n(e) && '[object Date]' === t)
      ? new Date(e.getTime())
      : 'number' == typeof e || '[object Number]' === t
      ? new Date(e)
      : (('string' != typeof e && '[object String]' !== t) ||
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
  function u(e, t) {
    var n =
      ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
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
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
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
      u = !0,
      c = !1;
    return {
      s: function () {
        n = n.call(e);
      },
      n: function () {
        var e = n.next();
        return (u = e.done), e;
      },
      e: function (e) {
        (c = !0), (o = e);
      },
      f: function () {
        try {
          u || null == n.return || n.return();
        } finally {
          if (c) throw o;
        }
      },
    };
  }
  var c = {
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
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = t.width ? String(t.width) : e.defaultWidth;
      return e.formats[n] || e.formats[e.defaultWidth];
    };
  }
  var l,
    d = {
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
    },
    f = {
      lastWeek: "'last' eeee 'at' p",
      yesterday: "'yesterday at' p",
      today: "'today at' p",
      tomorrow: "'tomorrow at' p",
      nextWeek: "eeee 'at' p",
      other: 'P',
    };
  function h(e) {
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
          u = null != n && n.width ? String(n.width) : e.defaultWidth;
        r = e.values[u] || e.values[i];
      }
      return r[e.argumentCallback ? e.argumentCallback(t) : t];
    };
  }
  function m(e) {
    return function (t) {
      var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = n.width,
        a = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
        o = t.match(a);
      if (!o) return null;
      var i,
        u = o[0],
        c = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
        s = Array.isArray(c)
          ? (function (e, t) {
              for (var n = 0; n < e.length; n++) if (e[n].test(u)) return n;
            })(c)
          : (function (e, t) {
              for (var n in e)
                if (e.hasOwnProperty(n) && e[n].test(u)) return n;
            })(c);
      return (
        (i = e.valueCallback ? e.valueCallback(s) : s),
        {
          value: (i = n.valueCallback ? n.valueCallback(i) : i),
          rest: t.slice(u.length),
        }
      );
    };
  }
  const p = {
    code: 'en-US',
    formatDistance: function (e, t, n) {
      var r,
        a = c[e];
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
    formatLong: d,
    formatRelative: function (e, t, n, r) {
      return f[e];
    },
    localize: {
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
      era: h({
        values: {
          narrow: ['B', 'A'],
          abbreviated: ['BC', 'AD'],
          wide: ['Before Christ', 'Anno Domini'],
        },
        defaultWidth: 'wide',
      }),
      quarter: h({
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
      month: h({
        values: {
          narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
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
      day: h({
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
      dayPeriod: h({
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
    },
    match: {
      ordinalNumber:
        ((l = {
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
            n = e.match(l.matchPattern);
          if (!n) return null;
          var r = n[0],
            a = e.match(l.parsePattern);
          if (!a) return null;
          var o = l.valueCallback ? l.valueCallback(a[0]) : a[0];
          return {
            value: (o = t.valueCallback ? t.valueCallback(o) : o),
            rest: e.slice(r.length),
          };
        }),
      era: m({
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
      quarter: m({
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
      month: m({
        matchPatterns: {
          narrow: /^[jfmasond]/i,
          abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
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
      day: m({
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
      dayPeriod: m({
        matchPatterns: {
          narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
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
    },
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
  function v(e) {
    if (null === e || !0 === e || !1 === e) return NaN;
    var t = Number(e);
    return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
  }
  function y(e, t) {
    if (null == e)
      throw new TypeError(
        'assign requires that input parameter not be null or undefined'
      );
    for (var n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    return e;
  }
  var w = function (e, t) {
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
    g = function (e, t) {
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
    },
    b = {
      p: g,
      P: function (e, t) {
        var n,
          r = e.match(/(P+)(p+)?/) || [],
          a = r[1],
          o = r[2];
        if (!o) return w(e, t);
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
        return n.replace('{{date}}', w(a, t)).replace('{{time}}', g(o, t));
      },
    };
  const k = b;
  var T = ['D', 'DD'],
    C = ['YY', 'YYYY'];
  function x(e, t, n) {
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
  function E(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function S(e, t) {
    return (
      (S = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          }),
      S(e, t)
    );
  }
  function N(e, t) {
    if ('function' != typeof t && null !== t)
      throw new TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      t && S(e, t);
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
    var t = (function () {
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
      if (t) {
        var o = D(this).constructor;
        r = Reflect.construct(a, arguments, o);
      } else r = a.apply(this, arguments);
      return (function (e, t) {
        if (t && ('object' === n(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return E(e);
      })(this, r);
    };
  }
  function P(e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function');
  }
  function j(e) {
    var t = (function (e, t) {
      if ('object' !== n(e) || null === e) return e;
      var r = e[Symbol.toPrimitive];
      if (void 0 !== r) {
        var a = r.call(e, 'string');
        if ('object' !== n(a)) return a;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return String(e);
    })(e);
    return 'symbol' === n(t) ? t : String(t);
  }
  function M(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, j(r.key), r);
    }
  }
  function U(e, t, n) {
    return (
      t && M(e.prototype, t),
      n && M(e, n),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      e
    );
  }
  function q(e, t, n) {
    return (
      (t = j(t)) in e
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
  var A = (function () {
      function e() {
        P(this, e), q(this, 'priority', void 0), q(this, 'subPriority', 0);
      }
      return (
        U(e, [
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
    O = (function (e) {
      N(n, e);
      var t = L(n);
      function n(e, r, a, o, i) {
        var u;
        return (
          P(this, n),
          ((u = t.call(this)).value = e),
          (u.validateValue = r),
          (u.setValue = a),
          (u.priority = o),
          i && (u.subPriority = i),
          u
        );
      }
      return (
        U(n, [
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
    })(A),
    Y = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 10),
          q(E(e), 'subPriority', -1),
          e
        );
      }
      return (
        U(n, [
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
    })(A),
    H = (function () {
      function e() {
        P(this, e),
          q(this, 'incompatibleTokens', void 0),
          q(this, 'priority', void 0),
          q(this, 'subPriority', void 0);
      }
      return (
        U(e, [
          {
            key: 'run',
            value: function (e, t, n, r) {
              var a = this.parse(e, t, n, r);
              return a
                ? {
                    setter: new O(
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
    W = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 140),
          q(E(e), 'incompatibleTokens', ['R', 'u', 't', 'T']),
          e
        );
      }
      return (
        U(n, [
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
    })(H),
    I = (Math.pow(10, 8), /^(1[0-2]|0?\d)/),
    R = /^(3[0-1]|[0-2]?\d)/,
    F = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    Q = /^(5[0-3]|[0-4]?\d)/,
    X = /^(2[0-3]|[0-1]?\d)/,
    B = /^(2[0-4]|[0-1]?\d)/,
    J = /^(1[0-1]|0?\d)/,
    _ = /^(1[0-2]|0?\d)/,
    G = /^[0-5]?\d/,
    V = /^[0-5]?\d/,
    $ = /^\d/,
    z = /^\d{1,2}/,
    K = /^\d{1,3}/,
    Z = /^\d{1,4}/,
    ee = /^-?\d+/,
    te = /^-?\d/,
    ne = /^-?\d{1,2}/,
    re = /^-?\d{1,3}/,
    ae = /^-?\d{1,4}/,
    oe = /^([+-])(\d{2})(\d{2})?|Z/,
    ie = /^([+-])(\d{2})(\d{2})|Z/,
    ue = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    ce = /^([+-])(\d{2}):(\d{2})|Z/,
    se = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;
  function le(e, t) {
    return e ? { value: t(e.value), rest: e.rest } : e;
  }
  function de(e, t) {
    var n = t.match(e);
    return n ? { value: parseInt(n[0], 10), rest: t.slice(n[0].length) } : null;
  }
  function fe(e, t) {
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
    return de(ee, e);
  }
  function me(e, t) {
    switch (e) {
      case 1:
        return de($, t);
      case 2:
        return de(z, t);
      case 3:
        return de(K, t);
      case 4:
        return de(Z, t);
      default:
        return de(new RegExp('^\\d{1,' + e + '}'), t);
    }
  }
  function pe(e, t) {
    switch (e) {
      case 1:
        return de(te, t);
      case 2:
        return de(ne, t);
      case 3:
        return de(re, t);
      case 4:
        return de(ae, t);
      default:
        return de(new RegExp('^-?\\d{1,' + e + '}'), t);
    }
  }
  function ve(e) {
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
  function ye(e, t) {
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
  function we(e) {
    return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
  }
  var ge = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 130),
          q(E(e), 'incompatibleTokens', [
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
        U(n, [
          {
            key: 'parse',
            value: function (e, t, n) {
              var r = function (e) {
                return { year: e, isTwoDigitYear: 'yy' === t };
              };
              switch (t) {
                case 'y':
                  return le(me(4, e), r);
                case 'yo':
                  return le(n.ordinalNumber(e, { unit: 'year' }), r);
                default:
                  return le(me(t.length, e), r);
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
                var a = ye(n.year, r);
                return e.setUTCFullYear(a, 0, 1), e.setUTCHours(0, 0, 0, 0), e;
              }
              var o = 'era' in t && 1 !== t.era ? 1 - n.year : n.year;
              return e.setUTCFullYear(o, 0, 1), e.setUTCHours(0, 0, 0, 0), e;
            },
          },
        ]),
        n
      );
    })(H),
    be = {};
  function ke() {
    return be;
  }
  function Te(e, t) {
    var n, o, i, u, c, s, l, d;
    r(1, arguments);
    var f = ke(),
      h = v(
        null !==
          (n =
            null !==
              (o =
                null !==
                  (i =
                    null !== (u = null == t ? void 0 : t.weekStartsOn) &&
                    void 0 !== u
                      ? u
                      : null == t ||
                        null === (c = t.locale) ||
                        void 0 === c ||
                        null === (s = c.options) ||
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
    if (!(h >= 0 && h <= 6))
      throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var m = a(e),
      p = m.getUTCDay(),
      y = (p < h ? 7 : 0) + p - h;
    return m.setUTCDate(m.getUTCDate() - y), m.setUTCHours(0, 0, 0, 0), m;
  }
  function Ce(e, t) {
    var n, o, i, u, c, s, l, d;
    r(1, arguments);
    var f = a(e),
      h = f.getUTCFullYear(),
      m = ke(),
      p = v(
        null !==
          (n =
            null !==
              (o =
                null !==
                  (i =
                    null !==
                      (u = null == t ? void 0 : t.firstWeekContainsDate) &&
                    void 0 !== u
                      ? u
                      : null == t ||
                        null === (c = t.locale) ||
                        void 0 === c ||
                        null === (s = c.options) ||
                        void 0 === s
                      ? void 0
                      : s.firstWeekContainsDate) && void 0 !== i
                  ? i
                  : m.firstWeekContainsDate) && void 0 !== o
              ? o
              : null === (l = m.locale) ||
                void 0 === l ||
                null === (d = l.options) ||
                void 0 === d
              ? void 0
              : d.firstWeekContainsDate) && void 0 !== n
          ? n
          : 1
      );
    if (!(p >= 1 && p <= 7))
      throw new RangeError(
        'firstWeekContainsDate must be between 1 and 7 inclusively'
      );
    var y = new Date(0);
    y.setUTCFullYear(h + 1, 0, p), y.setUTCHours(0, 0, 0, 0);
    var w = Te(y, t),
      g = new Date(0);
    g.setUTCFullYear(h, 0, p), g.setUTCHours(0, 0, 0, 0);
    var b = Te(g, t);
    return f.getTime() >= w.getTime()
      ? h + 1
      : f.getTime() >= b.getTime()
      ? h
      : h - 1;
  }
  var xe = (function (e) {
    N(n, e);
    var t = L(n);
    function n() {
      var e;
      P(this, n);
      for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
        a[o] = arguments[o];
      return (
        q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 130),
        q(E(e), 'incompatibleTokens', [
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
      U(n, [
        {
          key: 'parse',
          value: function (e, t, n) {
            var r = function (e) {
              return { year: e, isTwoDigitYear: 'YY' === t };
            };
            switch (t) {
              case 'Y':
                return le(me(4, e), r);
              case 'Yo':
                return le(n.ordinalNumber(e, { unit: 'year' }), r);
              default:
                return le(me(t.length, e), r);
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
              var o = ye(n.year, a);
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
  })(H);
  function Ee(e) {
    r(1, arguments);
    var t = a(e),
      n = t.getUTCDay(),
      o = (n < 1 ? 7 : 0) + n - 1;
    return t.setUTCDate(t.getUTCDate() - o), t.setUTCHours(0, 0, 0, 0), t;
  }
  var Se = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 130),
          q(E(e), 'incompatibleTokens', [
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
        U(n, [
          {
            key: 'parse',
            value: function (e, t) {
              return pe('R' === t ? 4 : t.length, e);
            },
          },
          {
            key: 'set',
            value: function (e, t, n) {
              var r = new Date(0);
              return (
                r.setUTCFullYear(n, 0, 4), r.setUTCHours(0, 0, 0, 0), Ee(r)
              );
            },
          },
        ]),
        n
      );
    })(H),
    Ne = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 130),
          q(E(e), 'incompatibleTokens', [
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
        U(n, [
          {
            key: 'parse',
            value: function (e, t) {
              return pe('u' === t ? 4 : t.length, e);
            },
          },
          {
            key: 'set',
            value: function (e, t, n) {
              return e.setUTCFullYear(n, 0, 1), e.setUTCHours(0, 0, 0, 0), e;
            },
          },
        ]),
        n
      );
    })(H),
    De = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 120),
          q(E(e), 'incompatibleTokens', [
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
        U(n, [
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
                    n.quarter(e, { width: 'wide', context: 'formatting' }) ||
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
    })(H),
    Le = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 120),
          q(E(e), 'incompatibleTokens', [
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
        U(n, [
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
                    n.quarter(e, { width: 'wide', context: 'standalone' }) ||
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
    })(H),
    Pe = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'incompatibleTokens', [
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
          ]),
          q(E(e), 'priority', 110),
          e
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (e, t, n) {
              var r = function (e) {
                return e - 1;
              };
              switch (t) {
                case 'M':
                  return le(de(I, e), r);
                case 'MM':
                  return le(me(2, e), r);
                case 'Mo':
                  return le(n.ordinalNumber(e, { unit: 'month' }), r);
                case 'MMM':
                  return (
                    n.month(e, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) || n.month(e, { width: 'narrow', context: 'formatting' })
                  );
                case 'MMMMM':
                  return n.month(e, { width: 'narrow', context: 'formatting' });
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
    })(H),
    je = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 110),
          q(E(e), 'incompatibleTokens', [
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
        U(n, [
          {
            key: 'parse',
            value: function (e, t, n) {
              var r = function (e) {
                return e - 1;
              };
              switch (t) {
                case 'L':
                  return le(de(I, e), r);
                case 'LL':
                  return le(me(2, e), r);
                case 'Lo':
                  return le(n.ordinalNumber(e, { unit: 'month' }), r);
                case 'LLL':
                  return (
                    n.month(e, {
                      width: 'abbreviated',
                      context: 'standalone',
                    }) || n.month(e, { width: 'narrow', context: 'standalone' })
                  );
                case 'LLLLL':
                  return n.month(e, { width: 'narrow', context: 'standalone' });
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
    })(H);
  var Me = (function (e) {
    N(n, e);
    var t = L(n);
    function n() {
      var e;
      P(this, n);
      for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
        a[o] = arguments[o];
      return (
        q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 100),
        q(E(e), 'incompatibleTokens', [
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
      U(n, [
        {
          key: 'parse',
          value: function (e, t, n) {
            switch (t) {
              case 'w':
                return de(Q, e);
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
                  i = v(t),
                  u =
                    (function (e, t) {
                      r(1, arguments);
                      var n = a(e),
                        o =
                          Te(n, t).getTime() -
                          (function (e, t) {
                            var n, a, o, i, u, c, s, l;
                            r(1, arguments);
                            var d = ke(),
                              f = v(
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
                                                null === (u = t.locale) ||
                                                void 0 === u ||
                                                null === (c = u.options) ||
                                                void 0 === c
                                              ? void 0
                                              : c.firstWeekContainsDate) &&
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
                                      : l.firstWeekContainsDate) && void 0 !== n
                                  ? n
                                  : 1
                              ),
                              h = Ce(e, t),
                              m = new Date(0);
                            return (
                              m.setUTCFullYear(h, 0, f),
                              m.setUTCHours(0, 0, 0, 0),
                              Te(m, t)
                            );
                          })(n, t).getTime();
                      return Math.round(o / 6048e5) + 1;
                    })(o, n) - i;
                return o.setUTCDate(o.getUTCDate() - 7 * u), o;
              })(e, n, o),
              o
            );
          },
        },
      ]),
      n
    );
  })(H);
  function Ue(e, t) {
    r(2, arguments);
    var n = a(e),
      o = v(t),
      i =
        (function (e) {
          r(1, arguments);
          var t = a(e),
            n =
              Ee(t).getTime() -
              (function (e) {
                r(1, arguments);
                var t = (function (e) {
                    r(1, arguments);
                    var t = a(e),
                      n = t.getUTCFullYear(),
                      o = new Date(0);
                    o.setUTCFullYear(n + 1, 0, 4), o.setUTCHours(0, 0, 0, 0);
                    var i = Ee(o),
                      u = new Date(0);
                    u.setUTCFullYear(n, 0, 4), u.setUTCHours(0, 0, 0, 0);
                    var c = Ee(u);
                    return t.getTime() >= i.getTime()
                      ? n + 1
                      : t.getTime() >= c.getTime()
                      ? n
                      : n - 1;
                  })(e),
                  n = new Date(0);
                return (
                  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0), Ee(n)
                );
              })(t).getTime();
          return Math.round(n / 6048e5) + 1;
        })(n) - o;
    return n.setUTCDate(n.getUTCDate() - 7 * i), n;
  }
  var qe = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 100),
          q(E(e), 'incompatibleTokens', [
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
        U(n, [
          {
            key: 'parse',
            value: function (e, t, n) {
              switch (t) {
                case 'I':
                  return de(Q, e);
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
              return Ee(Ue(e, n));
            },
          },
        ]),
        n
      );
    })(H),
    Ae = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    Oe = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    Ye = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 90),
          q(E(e), 'subPriority', 1),
          q(E(e), 'incompatibleTokens', [
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
        U(n, [
          {
            key: 'parse',
            value: function (e, t, n) {
              switch (t) {
                case 'd':
                  return de(R, e);
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
              var n = we(e.getUTCFullYear()),
                r = e.getUTCMonth();
              return n ? t >= 1 && t <= Oe[r] : t >= 1 && t <= Ae[r];
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
    })(H),
    He = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 90),
          q(E(e), 'subpriority', 1),
          q(E(e), 'incompatibleTokens', [
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
        U(n, [
          {
            key: 'parse',
            value: function (e, t, n) {
              switch (t) {
                case 'D':
                case 'DD':
                  return de(F, e);
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
              return we(e.getUTCFullYear())
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
    })(H);
  function We(e, t, n) {
    var o, i, u, c, s, l, d, f;
    r(2, arguments);
    var h = ke(),
      m = v(
        null !==
          (o =
            null !==
              (i =
                null !==
                  (u =
                    null !== (c = null == n ? void 0 : n.weekStartsOn) &&
                    void 0 !== c
                      ? c
                      : null == n ||
                        null === (s = n.locale) ||
                        void 0 === s ||
                        null === (l = s.options) ||
                        void 0 === l
                      ? void 0
                      : l.weekStartsOn) && void 0 !== u
                  ? u
                  : h.weekStartsOn) && void 0 !== i
              ? i
              : null === (d = h.locale) ||
                void 0 === d ||
                null === (f = d.options) ||
                void 0 === f
              ? void 0
              : f.weekStartsOn) && void 0 !== o
          ? o
          : 0
      );
    if (!(m >= 0 && m <= 6))
      throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var p = a(e),
      y = v(t),
      w = (((y % 7) + 7) % 7 < m ? 7 : 0) + y - p.getUTCDay();
    return p.setUTCDate(p.getUTCDate() + w), p;
  }
  var Ie = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 90),
          q(E(e), 'incompatibleTokens', ['D', 'i', 'e', 'c', 't', 'T']),
          e
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (e, t, n) {
              switch (t) {
                case 'E':
                case 'EE':
                case 'EEE':
                  return (
                    n.day(e, { width: 'abbreviated', context: 'formatting' }) ||
                    n.day(e, { width: 'short', context: 'formatting' }) ||
                    n.day(e, { width: 'narrow', context: 'formatting' })
                  );
                case 'EEEEE':
                  return n.day(e, { width: 'narrow', context: 'formatting' });
                case 'EEEEEE':
                  return (
                    n.day(e, { width: 'short', context: 'formatting' }) ||
                    n.day(e, { width: 'narrow', context: 'formatting' })
                  );
                default:
                  return (
                    n.day(e, { width: 'wide', context: 'formatting' }) ||
                    n.day(e, { width: 'abbreviated', context: 'formatting' }) ||
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
              return (e = We(e, n, r)).setUTCHours(0, 0, 0, 0), e;
            },
          },
        ]),
        n
      );
    })(H),
    Re = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 90),
          q(E(e), 'incompatibleTokens', [
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
        U(n, [
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
                  return le(me(t.length, e), a);
                case 'eo':
                  return le(n.ordinalNumber(e, { unit: 'day' }), a);
                case 'eee':
                  return (
                    n.day(e, { width: 'abbreviated', context: 'formatting' }) ||
                    n.day(e, { width: 'short', context: 'formatting' }) ||
                    n.day(e, { width: 'narrow', context: 'formatting' })
                  );
                case 'eeeee':
                  return n.day(e, { width: 'narrow', context: 'formatting' });
                case 'eeeeee':
                  return (
                    n.day(e, { width: 'short', context: 'formatting' }) ||
                    n.day(e, { width: 'narrow', context: 'formatting' })
                  );
                default:
                  return (
                    n.day(e, { width: 'wide', context: 'formatting' }) ||
                    n.day(e, { width: 'abbreviated', context: 'formatting' }) ||
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
              return (e = We(e, n, r)).setUTCHours(0, 0, 0, 0), e;
            },
          },
        ]),
        n
      );
    })(H),
    Fe = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 90),
          q(E(e), 'incompatibleTokens', [
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
        U(n, [
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
                  return le(me(t.length, e), a);
                case 'co':
                  return le(n.ordinalNumber(e, { unit: 'day' }), a);
                case 'ccc':
                  return (
                    n.day(e, { width: 'abbreviated', context: 'standalone' }) ||
                    n.day(e, { width: 'short', context: 'standalone' }) ||
                    n.day(e, { width: 'narrow', context: 'standalone' })
                  );
                case 'ccccc':
                  return n.day(e, { width: 'narrow', context: 'standalone' });
                case 'cccccc':
                  return (
                    n.day(e, { width: 'short', context: 'standalone' }) ||
                    n.day(e, { width: 'narrow', context: 'standalone' })
                  );
                default:
                  return (
                    n.day(e, { width: 'wide', context: 'standalone' }) ||
                    n.day(e, { width: 'abbreviated', context: 'standalone' }) ||
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
              return (e = We(e, n, r)).setUTCHours(0, 0, 0, 0), e;
            },
          },
        ]),
        n
      );
    })(H),
    Qe = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 90),
          q(E(e), 'incompatibleTokens', [
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
        U(n, [
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
                  return le(
                    n.day(e, { width: 'abbreviated', context: 'formatting' }) ||
                      n.day(e, { width: 'short', context: 'formatting' }) ||
                      n.day(e, { width: 'narrow', context: 'formatting' }),
                    r
                  );
                case 'iiiii':
                  return le(
                    n.day(e, { width: 'narrow', context: 'formatting' }),
                    r
                  );
                case 'iiiiii':
                  return le(
                    n.day(e, { width: 'short', context: 'formatting' }) ||
                      n.day(e, { width: 'narrow', context: 'formatting' }),
                    r
                  );
                default:
                  return le(
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
                  var n = v(t);
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
    })(H),
    Xe = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 80),
          q(E(e), 'incompatibleTokens', ['b', 'B', 'H', 'k', 't', 'T']),
          e
        );
      }
      return (
        U(n, [
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
                    n.dayPeriod(e, { width: 'narrow', context: 'formatting' })
                  );
                case 'aaaaa':
                  return n.dayPeriod(e, {
                    width: 'narrow',
                    context: 'formatting',
                  });
                default:
                  return (
                    n.dayPeriod(e, { width: 'wide', context: 'formatting' }) ||
                    n.dayPeriod(e, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) ||
                    n.dayPeriod(e, { width: 'narrow', context: 'formatting' })
                  );
              }
            },
          },
          {
            key: 'set',
            value: function (e, t, n) {
              return e.setUTCHours(ve(n), 0, 0, 0), e;
            },
          },
        ]),
        n
      );
    })(H),
    Be = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 80),
          q(E(e), 'incompatibleTokens', ['a', 'B', 'H', 'k', 't', 'T']),
          e
        );
      }
      return (
        U(n, [
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
                    n.dayPeriod(e, { width: 'narrow', context: 'formatting' })
                  );
                case 'bbbbb':
                  return n.dayPeriod(e, {
                    width: 'narrow',
                    context: 'formatting',
                  });
                default:
                  return (
                    n.dayPeriod(e, { width: 'wide', context: 'formatting' }) ||
                    n.dayPeriod(e, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) ||
                    n.dayPeriod(e, { width: 'narrow', context: 'formatting' })
                  );
              }
            },
          },
          {
            key: 'set',
            value: function (e, t, n) {
              return e.setUTCHours(ve(n), 0, 0, 0), e;
            },
          },
        ]),
        n
      );
    })(H),
    Je = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 80),
          q(E(e), 'incompatibleTokens', ['a', 'b', 't', 'T']),
          e
        );
      }
      return (
        U(n, [
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
                    n.dayPeriod(e, { width: 'narrow', context: 'formatting' })
                  );
                case 'BBBBB':
                  return n.dayPeriod(e, {
                    width: 'narrow',
                    context: 'formatting',
                  });
                default:
                  return (
                    n.dayPeriod(e, { width: 'wide', context: 'formatting' }) ||
                    n.dayPeriod(e, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) ||
                    n.dayPeriod(e, { width: 'narrow', context: 'formatting' })
                  );
              }
            },
          },
          {
            key: 'set',
            value: function (e, t, n) {
              return e.setUTCHours(ve(n), 0, 0, 0), e;
            },
          },
        ]),
        n
      );
    })(H),
    _e = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 70),
          q(E(e), 'incompatibleTokens', ['H', 'K', 'k', 't', 'T']),
          e
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (e, t, n) {
              switch (t) {
                case 'h':
                  return de(_, e);
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
    })(H),
    Ge = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 70),
          q(E(e), 'incompatibleTokens', ['a', 'b', 'h', 'K', 'k', 't', 'T']),
          e
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (e, t, n) {
              switch (t) {
                case 'H':
                  return de(X, e);
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
    })(H),
    Ve = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 70),
          q(E(e), 'incompatibleTokens', ['h', 'H', 'k', 't', 'T']),
          e
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (e, t, n) {
              switch (t) {
                case 'K':
                  return de(J, e);
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
    })(H),
    $e = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 70),
          q(E(e), 'incompatibleTokens', ['a', 'b', 'h', 'H', 'K', 't', 'T']),
          e
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (e, t, n) {
              switch (t) {
                case 'k':
                  return de(B, e);
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
    })(H),
    ze = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 60),
          q(E(e), 'incompatibleTokens', ['t', 'T']),
          e
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (e, t, n) {
              switch (t) {
                case 'm':
                  return de(G, e);
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
    })(H),
    Ke = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 50),
          q(E(e), 'incompatibleTokens', ['t', 'T']),
          e
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (e, t, n) {
              switch (t) {
                case 's':
                  return de(V, e);
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
    })(H),
    Ze = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 30),
          q(E(e), 'incompatibleTokens', ['t', 'T']),
          e
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (e, t) {
              return le(me(t.length, e), function (e) {
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
    })(H),
    et = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 10),
          q(E(e), 'incompatibleTokens', ['t', 'T', 'x']),
          e
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (e, t) {
              switch (t) {
                case 'X':
                  return fe(oe, e);
                case 'XX':
                  return fe(ie, e);
                case 'XXXX':
                  return fe(ue, e);
                case 'XXXXX':
                  return fe(se, e);
                default:
                  return fe(ce, e);
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
    })(H),
    tt = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 10),
          q(E(e), 'incompatibleTokens', ['t', 'T', 'X']),
          e
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (e, t) {
              switch (t) {
                case 'x':
                  return fe(oe, e);
                case 'xx':
                  return fe(ie, e);
                case 'xxxx':
                  return fe(ue, e);
                case 'xxxxx':
                  return fe(se, e);
                default:
                  return fe(ce, e);
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
    })(H),
    nt = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 40),
          q(E(e), 'incompatibleTokens', '*'),
          e
        );
      }
      return (
        U(n, [
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
    })(H),
    rt = (function (e) {
      N(n, e);
      var t = L(n);
      function n() {
        var e;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((e = t.call.apply(t, [this].concat(a)))), 'priority', 20),
          q(E(e), 'incompatibleTokens', '*'),
          e
        );
      }
      return (
        U(n, [
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
    })(H),
    at = {
      G: new W(),
      y: new ge(),
      Y: new xe(),
      R: new Se(),
      u: new Ne(),
      Q: new De(),
      q: new Le(),
      M: new Pe(),
      L: new je(),
      w: new Me(),
      I: new qe(),
      d: new Ye(),
      D: new He(),
      E: new Ie(),
      e: new Re(),
      c: new Fe(),
      i: new Qe(),
      a: new Xe(),
      b: new Be(),
      B: new Je(),
      h: new _e(),
      H: new Ge(),
      K: new Ve(),
      k: new $e(),
      m: new ze(),
      s: new Ke(),
      S: new Ze(),
      X: new et(),
      x: new tt(),
      t: new nt(),
      T: new rt(),
    },
    ot = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    it = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    ut = /^'([^]*?)'?$/,
    ct = /''/g,
    st = /\S/,
    lt = /[a-zA-Z]/;
  function dt(e, t, o, i) {
    var c, s, l, d, f, h, m, w, g, b, E, S, N, D, L, P, j, M;
    r(3, arguments);
    var U = String(e),
      q = String(t),
      A = ke(),
      O =
        null !==
          (c =
            null !== (s = null == i ? void 0 : i.locale) && void 0 !== s
              ? s
              : A.locale) && void 0 !== c
          ? c
          : p;
    if (!O.match) throw new RangeError('locale must contain match property');
    var H = v(
      null !==
        (l =
          null !==
            (d =
              null !==
                (f =
                  null !== (h = null == i ? void 0 : i.firstWeekContainsDate) &&
                  void 0 !== h
                    ? h
                    : null == i ||
                      null === (m = i.locale) ||
                      void 0 === m ||
                      null === (w = m.options) ||
                      void 0 === w
                    ? void 0
                    : w.firstWeekContainsDate) && void 0 !== f
                ? f
                : A.firstWeekContainsDate) && void 0 !== d
            ? d
            : null === (g = A.locale) ||
              void 0 === g ||
              null === (b = g.options) ||
              void 0 === b
            ? void 0
            : b.firstWeekContainsDate) && void 0 !== l
        ? l
        : 1
    );
    if (!(H >= 1 && H <= 7))
      throw new RangeError(
        'firstWeekContainsDate must be between 1 and 7 inclusively'
      );
    var W = v(
      null !==
        (E =
          null !==
            (S =
              null !==
                (N =
                  null !== (D = null == i ? void 0 : i.weekStartsOn) &&
                  void 0 !== D
                    ? D
                    : null == i ||
                      null === (L = i.locale) ||
                      void 0 === L ||
                      null === (P = L.options) ||
                      void 0 === P
                    ? void 0
                    : P.weekStartsOn) && void 0 !== N
                ? N
                : A.weekStartsOn) && void 0 !== S
            ? S
            : null === (j = A.locale) ||
              void 0 === j ||
              null === (M = j.options) ||
              void 0 === M
            ? void 0
            : M.weekStartsOn) && void 0 !== E
        ? E
        : 0
    );
    if (!(W >= 0 && W <= 6))
      throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    if ('' === q) return '' === U ? a(o) : new Date(NaN);
    var I,
      R = { firstWeekContainsDate: H, weekStartsOn: W, locale: O },
      F = [new Y()],
      Q = q
        .match(it)
        .map(function (e) {
          var t = e[0];
          return t in k ? (0, k[t])(e, O.formatLong) : e;
        })
        .join('')
        .match(ot),
      X = [],
      B = u(Q);
    try {
      var J = function () {
        var t = I.value;
        (null != i && i.useAdditionalWeekYearTokens) ||
          !(function (e) {
            return -1 !== C.indexOf(e);
          })(t) ||
          x(t, q, e),
          (null != i && i.useAdditionalDayOfYearTokens) ||
            !(function (e) {
              return -1 !== T.indexOf(e);
            })(t) ||
            x(t, q, e);
        var n = t[0],
          r = at[n];
        if (r) {
          var a = r.incompatibleTokens;
          if (Array.isArray(a)) {
            var o = X.find(function (e) {
              return a.includes(e.token) || e.token === n;
            });
            if (o)
              throw new RangeError(
                "The format string mustn't contain `"
                  .concat(o.fullToken, '` and `')
                  .concat(t, '` at the same time')
              );
          } else if ('*' === r.incompatibleTokens && X.length > 0)
            throw new RangeError(
              "The format string mustn't contain `".concat(
                t,
                '` and any other token at the same time'
              )
            );
          X.push({ token: n, fullToken: t });
          var u = r.run(U, t, O.match, R);
          if (!u) return { v: new Date(NaN) };
          F.push(u.setter), (U = u.rest);
        } else {
          if (n.match(lt))
            throw new RangeError(
              'Format string contains an unescaped latin alphabet character `' +
                n +
                '`'
            );
          if (
            ("''" === t
              ? (t = "'")
              : "'" === n && (t = t.match(ut)[1].replace(ct, "'")),
            0 !== U.indexOf(t))
          )
            return { v: new Date(NaN) };
          U = U.slice(t.length);
        }
      };
      for (B.s(); !(I = B.n()).done; ) {
        var _ = J();
        if ('object' === n(_)) return _.v;
      }
    } catch (e) {
      B.e(e);
    } finally {
      B.f();
    }
    if (U.length > 0 && st.test(U)) return new Date(NaN);
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
      V = a(o);
    if (isNaN(V.getTime())) return new Date(NaN);
    var $,
      z = (function (e, t) {
        return (
          r(2, arguments),
          (function (e, t) {
            r(2, arguments);
            var n = a(e).getTime(),
              o = v(t);
            return new Date(n + o);
          })(e, -v(t))
        );
      })(
        V,
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
          return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
        })(V)
      ),
      K = {},
      Z = u(G);
    try {
      for (Z.s(); !($ = Z.n()).done; ) {
        var ee = $.value;
        if (!ee.validate(z, R)) return new Date(NaN);
        var te = ee.set(z, K, R);
        Array.isArray(te) ? ((z = te[0]), y(K, te[1])) : (z = te);
      }
    } catch (e) {
      Z.e(e);
    } finally {
      Z.f();
    }
    return z;
  }
  function ft(e, t) {
    var n, o, i, u, c, s, l, d;
    r(1, arguments);
    var f = ke(),
      h = v(
        null !==
          (n =
            null !==
              (o =
                null !==
                  (i =
                    null !== (u = null == t ? void 0 : t.weekStartsOn) &&
                    void 0 !== u
                      ? u
                      : null == t ||
                        null === (c = t.locale) ||
                        void 0 === c ||
                        null === (s = c.options) ||
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
    if (!(h >= 0 && h <= 6))
      throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var m = a(e),
      p = m.getDay(),
      y = (p < h ? 7 : 0) + p - h;
    return m.setDate(m.getDate() - y), m.setHours(0, 0, 0, 0), m;
  }
  const ht = (() => {
      let e = [],
        t = [];
      const n = () => JSON.parse(localStorage.getItem('projects')) || [],
        a = () => JSON.parse(localStorage.getItem('notes')) || [],
        i = () => {
          e = n();
        },
        u = () => {
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
          u();
          const r = ((e, t) => ({ noteName: e, noteDesc: t }))(e, n);
          t.push(r), localStorage.setItem('notes', JSON.stringify(t));
        },
        storeNewTask: (t, n, r) => {
          i(),
            e
              .find((e) => e.projectName === t)
              .tasks.push(
                ((e, t, n) => ({ taskName: e, dueDate: t, checked: !1 }))(n, r)
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
                })(dt(e.dueDate, 'yyyy-MM-dd', new Date())) && t.push(e);
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
                      var a = ft(e, n),
                        o = ft(t, n);
                      return a.getTime() === o.getTime();
                    })(e, Date.now(), t)
                  );
                })(dt(e.dueDate, 'yyyy-MM-dd', new Date()), {
                  weekStartsOn: 1,
                }) && t.push(e);
              });
            }),
            t
          );
        },
        getTaskList: (e) => n().find((t) => t.projectName === e).tasks,
        updateProjectList: i,
        updateNoteList: u,
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
          u();
          for (let n = 0; n < t.length; n += 1)
            t[n].noteName === e && t.splice(n, 1);
          localStorage.setItem('notes', JSON.stringify(t));
        },
      };
    })(),
    mt = (() => {
      const e = (e, t, n, r, a) => {
          const o = document.createElement('li');
          o.classList.add('nav-item'),
            ((e, t, n, r, a) => {
              const o = document.createElement('button');
              o.classList.add('nav-btn', 'font-20px', 'flex', 'align-center'),
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
          const u = document.createElement('span');
          n && (u.textContent = 'check_box'),
            n || (u.textContent = 'check_box_outline_blank'),
            u.classList.add('material-icons', 'task-status'),
            (u.dataset.taskName = e),
            o.appendChild(u);
          const c = document.createElement('p');
          (c.textContent = e), o.appendChild(c);
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
            t = ht.getNoteList();
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
                ht.deleteNote(t), n();
              });
            });
        },
        r = () => {
          const e = document.querySelector('.task-container'),
            n = document.querySelector('#page-title').textContent,
            a = ht.getTaskList(n);
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
                  (e.target.textContent = 'check_box'), ht.checkTask(t, n);
                })(e, n);
              });
            }),
            document.querySelectorAll('.delete-task').forEach((e) => {
              e.addEventListener('click', (e) => {
                const t = e.target.dataset.taskName.toString();
                ht.deleteTask(n, t), r();
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
          const u = document.createElement('button');
          (u.type = 'submit'),
            (u.id = 'accept-new-task-btn'),
            (u.textContent = 'Ok'),
            u.classList.add('flex', 'font-20px', 'justify-center'),
            i.appendChild(u);
          const c = document.createElement('button');
          (c.id = 'cancel-new-task-btn'),
            (c.textContent = 'Cancel'),
            c.classList.add('flex', 'font-20px', 'justify-center'),
            i.appendChild(c),
            u.addEventListener('click', (e) => {
              e.preventDefault();
              const i = document.querySelector('#page-title').textContent;
              ht.storeNewTask(i, a.value, o.value),
                n.remove(),
                r(),
                (t.style.display = 'flex');
            }),
            c.addEventListener('click', (e) => {
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
          const u = document.createElement('div');
          (u.id = 'container'),
            u.classList.add('task-container'),
            n.appendChild(u),
            0 === ht.getTaskList(o).length && (u.style.display = 'none'),
            r(),
            e('add_circle', 'New task', n, 'new-task-btn'),
            document
              .querySelector('#new-task-btn')
              .addEventListener('click', a);
        },
        i = () => {
          const e = document.querySelector('#nav-list-projects'),
            t = ht.getProjectList();
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
            document.querySelectorAll('.delete-project-btn').forEach((e) => {
              e.addEventListener('click', (e) => {
                n.forEach((e) => {
                  e.removeEventListener('click', o);
                });
                const t = e.target.dataset.projectName.toString();
                (document.querySelector('#element-container').innerHTML = ''),
                  ht.deleteProject(t),
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
          const u = document.createElement('button');
          (u.id = 'cancel-new-project-btn'),
            (u.textContent = 'Cancel'),
            u.classList.add('flex', 'font-20px', 'justify-center'),
            a.appendChild(u),
            o.addEventListener('click', (e) => {
              e.preventDefault(),
                ht.validateProjectName(r.value) &&
                  (n.remove(),
                  ht.storeNewProject(r.value),
                  i(),
                  (t.style.display = 'flex'));
            }),
            u.addEventListener('click', (e) => {
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
          const u = document.createElement('button');
          (u.type = 'submit'),
            (u.id = 'accept-new-note-btn'),
            (u.textContent = 'Ok'),
            u.classList.add('flex', 'font-20px', 'justify-center'),
            i.appendChild(u);
          const c = document.createElement('button');
          (c.id = 'cancel-new-note-btn'),
            (c.textContent = 'Cancel'),
            c.classList.add('flex', 'font-20px', 'justify-center'),
            i.appendChild(c),
            u.addEventListener('click', (e) => {
              e.preventDefault(),
                ht.storeNewNote(a.value, o.value),
                r.remove(),
                n(),
                (t.style.display = 'flex');
            }),
            c.addEventListener('click', (e) => {
              e.preventDefault(), r.remove(), (t.style.display = 'flex');
            }),
            e.appendChild(r);
        },
        addNewTaskPopup: a,
        viewProject: o,
      };
    })(),
    pt = () => {
      const e = document.querySelector('#element-container');
      e.innerHTML = '';
      const t = document.createElement('h2');
      (t.id = 'page-title'), (t.textContent = 'Home'), e.appendChild(t);
      const n = document.createElement('div');
      (n.id = 'container'),
        n.classList.add('note-container'),
        e.appendChild(n),
        0 === ht.getNoteList().length && (n.style.display = 'none'),
        mt.updateNoteList(),
        mt.createNavListItem('add_circle', 'New note', e, 'new-note-btn'),
        document
          .querySelector('#new-note-btn')
          .addEventListener('click', mt.addNewNotePopup);
    },
    vt = () => {
      const e = document.querySelector('#element-container');
      e.innerHTML = '';
      const t = document.createElement('h2');
      (t.id = 'page-title'), (t.textContent = 'Today'), e.appendChild(t);
      const n = document.createElement('div');
      (n.id = 'container'),
        n.classList.add('task-container'),
        e.appendChild(n),
        0 === ht.getTodayTasks().length && (n.style.display = 'none'),
        ht.getTodayTasks().forEach((e) => {
          mt.createTaskElement(e.taskName, e.dueDate, e.checked, n);
        });
    },
    yt = () => {
      const e = document.querySelector('#element-container');
      e.innerHTML = '';
      const t = document.createElement('h2');
      (t.id = 'page-title'), (t.textContent = 'Week'), e.appendChild(t);
      const n = document.createElement('div');
      (n.id = 'container'),
        n.classList.add('task-container'),
        e.appendChild(n),
        0 === ht.getWeekTasks().length && (n.style.display = 'none'),
        ht.getWeekTasks().forEach((e) => {
          mt.createTaskElement(e.taskName, e.dueDate, e.checked, n);
        });
    },
    wt = () => {
      document.querySelector('#home-tab').addEventListener('click', pt),
        document.querySelector('#today-tab').addEventListener('click', vt),
        document.querySelector('#week-tab').addEventListener('click', yt),
        document.querySelectorAll('.project-item').forEach((e) => {
          e.addEventListener('click', mt.viewProject);
        }),
        document.querySelectorAll('.delete-project-btn').forEach((e) => {
          e.addEventListener('click', (e) => {
            ht.deleteProject(e.target.dataset.projectName.toString()),
              mt.updateNavProjectList();
          });
        }),
        document
          .querySelector('#new-project-btn')
          .addEventListener('click', mt.addNewProjectPopup),
        document
          .querySelector('#new-note-btn')
          .addEventListener('click', mt.addNewNotePopup);
    };
  (() => {
    const e = document.createElement('header'),
      n = document.createElement('div');
    n.setAttribute('id', 'logo-container'), e.appendChild(n);
    const r = new Image();
    (r.src = t),
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
          const r = document.createElement('ul');
          r.setAttribute('id', 'nav-list-tasks'),
            t.appendChild(r),
            mt.createNavListItem('home', 'Home', r, 'home-tab'),
            mt.createNavListItem('today', 'Today', r, 'today-tab'),
            mt.createNavListItem('date_range', 'Week', r, 'week-tab');
          const a = document.createElement('h2');
          (a.textContent = 'Projects'),
            (a.id = 'projects-title'),
            t.appendChild(a);
          const o = document.createElement('ul');
          o.setAttribute('id', 'nav-list-projects'),
            t.appendChild(o),
            mt.createNavListItem(
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
            pt(),
            mt.updateNoteList();
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
    window.addEventListener('load', mt.updateNavProjectList()),
    wt();
})();
