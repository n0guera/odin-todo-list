(() => {
  'use strict';
  var t = {};
  (t.g = (function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this || new Function('return this')();
    } catch (t) {
      if ('object' == typeof window) return window;
    }
  })()),
    (() => {
      var e;
      t.g.importScripts && (e = t.g.location + '');
      var n = t.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var r = n.getElementsByTagName('script');
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
        (t.p = e);
    })();
  const e = t.p + '4f0f495b2f256748749f.png';
  function n(t) {
    return (
      (n =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
      n(t)
    );
  }
  function r(t, e) {
    if (e.length < t)
      throw new TypeError(
        t +
          ' argument' +
          (t > 1 ? 's' : '') +
          ' required, but only ' +
          e.length +
          ' present'
      );
  }
  function a(t) {
    r(1, arguments);
    var e = Object.prototype.toString.call(t);
    return t instanceof Date || ('object' === n(t) && '[object Date]' === e)
      ? new Date(t.getTime())
      : 'number' == typeof t || '[object Number]' === e
      ? new Date(t)
      : (('string' != typeof t && '[object String]' !== e) ||
          'undefined' == typeof console ||
          (console.warn(
            "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
          ),
          console.warn(new Error().stack)),
        new Date(NaN));
  }
  function o(t) {
    r(1, arguments);
    var e = a(t);
    return e.setHours(0, 0, 0, 0), e;
  }
  function i(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function u(t, e) {
    var n =
      ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
    if (!n) {
      if (
        Array.isArray(t) ||
        (n = (function (t, e) {
          if (t) {
            if ('string' == typeof t) return i(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return (
              'Object' === n && t.constructor && (n = t.constructor.name),
              'Map' === n || 'Set' === n
                ? Array.from(t)
                : 'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? i(t, e)
                : void 0
            );
          }
        })(t)) ||
        (e && t && 'number' == typeof t.length)
      ) {
        n && (t = n);
        var r = 0,
          a = function () {};
        return {
          s: a,
          n: function () {
            return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
          },
          e: function (t) {
            throw t;
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
        n = n.call(t);
      },
      n: function () {
        var t = n.next();
        return (u = t.done), t;
      },
      e: function (t) {
        (c = !0), (o = t);
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
  function s(t) {
    return function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = e.width ? String(e.width) : t.defaultWidth;
      return t.formats[n] || t.formats[t.defaultWidth];
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
  function h(t) {
    return function (e, n) {
      var r;
      if (
        'formatting' ===
          (null != n && n.context ? String(n.context) : 'standalone') &&
        t.formattingValues
      ) {
        var a = t.defaultFormattingWidth || t.defaultWidth,
          o = null != n && n.width ? String(n.width) : a;
        r = t.formattingValues[o] || t.formattingValues[a];
      } else {
        var i = t.defaultWidth,
          u = null != n && n.width ? String(n.width) : t.defaultWidth;
        r = t.values[u] || t.values[i];
      }
      return r[t.argumentCallback ? t.argumentCallback(e) : e];
    };
  }
  function m(t) {
    return function (e) {
      var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = n.width,
        a = (r && t.matchPatterns[r]) || t.matchPatterns[t.defaultMatchWidth],
        o = e.match(a);
      if (!o) return null;
      var i,
        u = o[0],
        c = (r && t.parsePatterns[r]) || t.parsePatterns[t.defaultParseWidth],
        s = Array.isArray(c)
          ? (function (t, e) {
              for (var n = 0; n < t.length; n++) if (t[n].test(u)) return n;
            })(c)
          : (function (t, e) {
              for (var n in t)
                if (t.hasOwnProperty(n) && t[n].test(u)) return n;
            })(c);
      return (
        (i = t.valueCallback ? t.valueCallback(s) : s),
        {
          value: (i = n.valueCallback ? n.valueCallback(i) : i),
          rest: e.slice(u.length),
        }
      );
    };
  }
  const p = {
    code: 'en-US',
    formatDistance: function (t, e, n) {
      var r,
        a = c[t];
      return (
        (r =
          'string' == typeof a
            ? a
            : 1 === e
            ? a.one
            : a.other.replace('{{count}}', e.toString())),
        null != n && n.addSuffix
          ? n.comparison && n.comparison > 0
            ? 'in ' + r
            : r + ' ago'
          : r
      );
    },
    formatLong: d,
    formatRelative: function (t, e, n, r) {
      return f[t];
    },
    localize: {
      ordinalNumber: function (t, e) {
        var n = Number(t),
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
        argumentCallback: function (t) {
          return t - 1;
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
          valueCallback: function (t) {
            return parseInt(t, 10);
          },
        }),
        function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.match(l.matchPattern);
          if (!n) return null;
          var r = n[0],
            a = t.match(l.parsePattern);
          if (!a) return null;
          var o = l.valueCallback ? l.valueCallback(a[0]) : a[0];
          return {
            value: (o = e.valueCallback ? e.valueCallback(o) : o),
            rest: t.slice(r.length),
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
        valueCallback: function (t) {
          return t + 1;
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
  function v(t) {
    if (null === t || !0 === t || !1 === t) return NaN;
    var e = Number(t);
    return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
  }
  function y(t, e) {
    if (null == t)
      throw new TypeError(
        'assign requires that input parameter not be null or undefined'
      );
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t;
  }
  var w = function (t, e) {
      switch (t) {
        case 'P':
          return e.date({ width: 'short' });
        case 'PP':
          return e.date({ width: 'medium' });
        case 'PPP':
          return e.date({ width: 'long' });
        default:
          return e.date({ width: 'full' });
      }
    },
    g = function (t, e) {
      switch (t) {
        case 'p':
          return e.time({ width: 'short' });
        case 'pp':
          return e.time({ width: 'medium' });
        case 'ppp':
          return e.time({ width: 'long' });
        default:
          return e.time({ width: 'full' });
      }
    },
    b = {
      p: g,
      P: function (t, e) {
        var n,
          r = t.match(/(P+)(p+)?/) || [],
          a = r[1],
          o = r[2];
        if (!o) return w(t, e);
        switch (a) {
          case 'P':
            n = e.dateTime({ width: 'short' });
            break;
          case 'PP':
            n = e.dateTime({ width: 'medium' });
            break;
          case 'PPP':
            n = e.dateTime({ width: 'long' });
            break;
          default:
            n = e.dateTime({ width: 'full' });
        }
        return n.replace('{{date}}', w(a, e)).replace('{{time}}', g(o, e));
      },
    };
  const k = b;
  var T = ['D', 'DD'],
    C = ['YY', 'YYYY'];
  function x(t, e, n) {
    if ('YYYY' === t)
      throw new RangeError(
        'Use `yyyy` instead of `YYYY` (in `'
          .concat(e, '`) for formatting years to the input `')
          .concat(
            n,
            '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'
          )
      );
    if ('YY' === t)
      throw new RangeError(
        'Use `yy` instead of `YY` (in `'
          .concat(e, '`) for formatting years to the input `')
          .concat(
            n,
            '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'
          )
      );
    if ('D' === t)
      throw new RangeError(
        'Use `d` instead of `D` (in `'
          .concat(e, '`) for formatting days of the month to the input `')
          .concat(
            n,
            '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'
          )
      );
    if ('DD' === t)
      throw new RangeError(
        'Use `dd` instead of `DD` (in `'
          .concat(e, '`) for formatting days of the month to the input `')
          .concat(
            n,
            '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'
          )
      );
  }
  function E(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function N(t, e) {
    return (
      (N = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          }),
      N(t, e)
    );
  }
  function S(t, e) {
    if ('function' != typeof e && null !== e)
      throw new TypeError('Super expression must either be null or a function');
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, 'prototype', { writable: !1 }),
      e && N(t, e);
  }
  function D(t) {
    return (
      (D = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      D(t)
    );
  }
  function L(t) {
    var e = (function () {
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
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var r,
        a = D(t);
      if (e) {
        var o = D(this).constructor;
        r = Reflect.construct(a, arguments, o);
      } else r = a.apply(this, arguments);
      return (function (t, e) {
        if (e && ('object' === n(e) || 'function' == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return E(t);
      })(this, r);
    };
  }
  function P(t, e) {
    if (!(t instanceof e))
      throw new TypeError('Cannot call a class as a function');
  }
  function j(t) {
    var e = (function (t, e) {
      if ('object' !== n(t) || null === t) return t;
      var r = t[Symbol.toPrimitive];
      if (void 0 !== r) {
        var a = r.call(t, 'string');
        if ('object' !== n(a)) return a;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return String(t);
    })(t);
    return 'symbol' === n(e) ? e : String(e);
  }
  function M(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(t, j(r.key), r);
    }
  }
  function U(t, e, n) {
    return (
      e && M(t.prototype, e),
      n && M(t, n),
      Object.defineProperty(t, 'prototype', { writable: !1 }),
      t
    );
  }
  function q(t, e, n) {
    return (
      (e = j(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  var A = (function () {
      function t() {
        P(this, t), q(this, 'priority', void 0), q(this, 'subPriority', 0);
      }
      return (
        U(t, [
          {
            key: 'validate',
            value: function (t, e) {
              return !0;
            },
          },
        ]),
        t
      );
    })(),
    Y = (function (t) {
      S(n, t);
      var e = L(n);
      function n(t, r, a, o, i) {
        var u;
        return (
          P(this, n),
          ((u = e.call(this)).value = t),
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
            value: function (t, e) {
              return this.validateValue(t, this.value, e);
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return this.setValue(t, e, this.value, n);
            },
          },
        ]),
        n
      );
    })(A),
    O = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 10),
          q(E(t), 'subPriority', -1),
          t
        );
      }
      return (
        U(n, [
          {
            key: 'set',
            value: function (t, e) {
              if (e.timestampIsSet) return t;
              var n = new Date(0);
              return (
                n.setFullYear(
                  t.getUTCFullYear(),
                  t.getUTCMonth(),
                  t.getUTCDate()
                ),
                n.setHours(
                  t.getUTCHours(),
                  t.getUTCMinutes(),
                  t.getUTCSeconds(),
                  t.getUTCMilliseconds()
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
      function t() {
        P(this, t),
          q(this, 'incompatibleTokens', void 0),
          q(this, 'priority', void 0),
          q(this, 'subPriority', void 0);
      }
      return (
        U(t, [
          {
            key: 'run',
            value: function (t, e, n, r) {
              var a = this.parse(t, e, n, r);
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
            value: function (t, e, n) {
              return !0;
            },
          },
        ]),
        t
      );
    })(),
    W = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 140),
          q(E(t), 'incompatibleTokens', ['R', 'u', 't', 'T']),
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e, n) {
              switch (e) {
                case 'G':
                case 'GG':
                case 'GGG':
                  return (
                    n.era(t, { width: 'abbreviated' }) ||
                    n.era(t, { width: 'narrow' })
                  );
                case 'GGGGG':
                  return n.era(t, { width: 'narrow' });
                default:
                  return (
                    n.era(t, { width: 'wide' }) ||
                    n.era(t, { width: 'abbreviated' }) ||
                    n.era(t, { width: 'narrow' })
                  );
              }
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return (
                (e.era = n),
                t.setUTCFullYear(n, 0, 1),
                t.setUTCHours(0, 0, 0, 0),
                t
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
    tt = /^-?\d+/,
    et = /^-?\d/,
    nt = /^-?\d{1,2}/,
    rt = /^-?\d{1,3}/,
    at = /^-?\d{1,4}/,
    ot = /^([+-])(\d{2})(\d{2})?|Z/,
    it = /^([+-])(\d{2})(\d{2})|Z/,
    ut = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    ct = /^([+-])(\d{2}):(\d{2})|Z/,
    st = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;
  function lt(t, e) {
    return t ? { value: e(t.value), rest: t.rest } : t;
  }
  function dt(t, e) {
    var n = e.match(t);
    return n ? { value: parseInt(n[0], 10), rest: e.slice(n[0].length) } : null;
  }
  function ft(t, e) {
    var n = e.match(t);
    return n
      ? 'Z' === n[0]
        ? { value: 0, rest: e.slice(1) }
        : {
            value:
              ('+' === n[1] ? 1 : -1) *
              (36e5 * (n[2] ? parseInt(n[2], 10) : 0) +
                6e4 * (n[3] ? parseInt(n[3], 10) : 0) +
                1e3 * (n[5] ? parseInt(n[5], 10) : 0)),
            rest: e.slice(n[0].length),
          }
      : null;
  }
  function ht(t) {
    return dt(tt, t);
  }
  function mt(t, e) {
    switch (t) {
      case 1:
        return dt($, e);
      case 2:
        return dt(z, e);
      case 3:
        return dt(K, e);
      case 4:
        return dt(Z, e);
      default:
        return dt(new RegExp('^\\d{1,' + t + '}'), e);
    }
  }
  function pt(t, e) {
    switch (t) {
      case 1:
        return dt(et, e);
      case 2:
        return dt(nt, e);
      case 3:
        return dt(rt, e);
      case 4:
        return dt(at, e);
      default:
        return dt(new RegExp('^-?\\d{1,' + t + '}'), e);
    }
  }
  function vt(t) {
    switch (t) {
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
  function yt(t, e) {
    var n,
      r = e > 0,
      a = r ? e : 1 - e;
    if (a <= 50) n = t || 100;
    else {
      var o = a + 50;
      n = t + 100 * Math.floor(o / 100) - (t >= o % 100 ? 100 : 0);
    }
    return r ? n : 1 - n;
  }
  function wt(t) {
    return t % 400 == 0 || (t % 4 == 0 && t % 100 != 0);
  }
  var gt = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 130),
          q(E(t), 'incompatibleTokens', [
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
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e, n) {
              var r = function (t) {
                return { year: t, isTwoDigitYear: 'yy' === e };
              };
              switch (e) {
                case 'y':
                  return lt(mt(4, t), r);
                case 'yo':
                  return lt(n.ordinalNumber(t, { unit: 'year' }), r);
                default:
                  return lt(mt(e.length, t), r);
              }
            },
          },
          {
            key: 'validate',
            value: function (t, e) {
              return e.isTwoDigitYear || e.year > 0;
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              var r = t.getUTCFullYear();
              if (n.isTwoDigitYear) {
                var a = yt(n.year, r);
                return t.setUTCFullYear(a, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
              }
              var o = 'era' in e && 1 !== e.era ? 1 - n.year : n.year;
              return t.setUTCFullYear(o, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(H),
    bt = {};
  function kt() {
    return bt;
  }
  function Tt(t, e) {
    var n, o, i, u, c, s, l, d;
    r(1, arguments);
    var f = kt(),
      h = v(
        null !==
          (n =
            null !==
              (o =
                null !==
                  (i =
                    null !== (u = null == e ? void 0 : e.weekStartsOn) &&
                    void 0 !== u
                      ? u
                      : null == e ||
                        null === (c = e.locale) ||
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
    var m = a(t),
      p = m.getUTCDay(),
      y = (p < h ? 7 : 0) + p - h;
    return m.setUTCDate(m.getUTCDate() - y), m.setUTCHours(0, 0, 0, 0), m;
  }
  function Ct(t, e) {
    var n, o, i, u, c, s, l, d;
    r(1, arguments);
    var f = a(t),
      h = f.getUTCFullYear(),
      m = kt(),
      p = v(
        null !==
          (n =
            null !==
              (o =
                null !==
                  (i =
                    null !==
                      (u = null == e ? void 0 : e.firstWeekContainsDate) &&
                    void 0 !== u
                      ? u
                      : null == e ||
                        null === (c = e.locale) ||
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
    var w = Tt(y, e),
      g = new Date(0);
    g.setUTCFullYear(h, 0, p), g.setUTCHours(0, 0, 0, 0);
    var b = Tt(g, e);
    return f.getTime() >= w.getTime()
      ? h + 1
      : f.getTime() >= b.getTime()
      ? h
      : h - 1;
  }
  var xt = (function (t) {
    S(n, t);
    var e = L(n);
    function n() {
      var t;
      P(this, n);
      for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
        a[o] = arguments[o];
      return (
        q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 130),
        q(E(t), 'incompatibleTokens', [
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
        t
      );
    }
    return (
      U(n, [
        {
          key: 'parse',
          value: function (t, e, n) {
            var r = function (t) {
              return { year: t, isTwoDigitYear: 'YY' === e };
            };
            switch (e) {
              case 'Y':
                return lt(mt(4, t), r);
              case 'Yo':
                return lt(n.ordinalNumber(t, { unit: 'year' }), r);
              default:
                return lt(mt(e.length, t), r);
            }
          },
        },
        {
          key: 'validate',
          value: function (t, e) {
            return e.isTwoDigitYear || e.year > 0;
          },
        },
        {
          key: 'set',
          value: function (t, e, n, r) {
            var a = Ct(t, r);
            if (n.isTwoDigitYear) {
              var o = yt(n.year, a);
              return (
                t.setUTCFullYear(o, 0, r.firstWeekContainsDate),
                t.setUTCHours(0, 0, 0, 0),
                Tt(t, r)
              );
            }
            var i = 'era' in e && 1 !== e.era ? 1 - n.year : n.year;
            return (
              t.setUTCFullYear(i, 0, r.firstWeekContainsDate),
              t.setUTCHours(0, 0, 0, 0),
              Tt(t, r)
            );
          },
        },
      ]),
      n
    );
  })(H);
  function Et(t) {
    r(1, arguments);
    var e = a(t),
      n = e.getUTCDay(),
      o = (n < 1 ? 7 : 0) + n - 1;
    return e.setUTCDate(e.getUTCDate() - o), e.setUTCHours(0, 0, 0, 0), e;
  }
  var Nt = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 130),
          q(E(t), 'incompatibleTokens', [
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
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e) {
              return pt('R' === e ? 4 : e.length, t);
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              var r = new Date(0);
              return (
                r.setUTCFullYear(n, 0, 4), r.setUTCHours(0, 0, 0, 0), Et(r)
              );
            },
          },
        ]),
        n
      );
    })(H),
    St = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 130),
          q(E(t), 'incompatibleTokens', [
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
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e) {
              return pt('u' === e ? 4 : e.length, t);
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return t.setUTCFullYear(n, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(H),
    Dt = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 120),
          q(E(t), 'incompatibleTokens', [
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
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e, n) {
              switch (e) {
                case 'Q':
                case 'QQ':
                  return mt(e.length, t);
                case 'Qo':
                  return n.ordinalNumber(t, { unit: 'quarter' });
                case 'QQQ':
                  return (
                    n.quarter(t, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) ||
                    n.quarter(t, { width: 'narrow', context: 'formatting' })
                  );
                case 'QQQQQ':
                  return n.quarter(t, {
                    width: 'narrow',
                    context: 'formatting',
                  });
                default:
                  return (
                    n.quarter(t, { width: 'wide', context: 'formatting' }) ||
                    n.quarter(t, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) ||
                    n.quarter(t, { width: 'narrow', context: 'formatting' })
                  );
              }
            },
          },
          {
            key: 'validate',
            value: function (t, e) {
              return e >= 1 && e <= 4;
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return (
                t.setUTCMonth(3 * (n - 1), 1), t.setUTCHours(0, 0, 0, 0), t
              );
            },
          },
        ]),
        n
      );
    })(H),
    Lt = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 120),
          q(E(t), 'incompatibleTokens', [
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
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e, n) {
              switch (e) {
                case 'q':
                case 'qq':
                  return mt(e.length, t);
                case 'qo':
                  return n.ordinalNumber(t, { unit: 'quarter' });
                case 'qqq':
                  return (
                    n.quarter(t, {
                      width: 'abbreviated',
                      context: 'standalone',
                    }) ||
                    n.quarter(t, { width: 'narrow', context: 'standalone' })
                  );
                case 'qqqqq':
                  return n.quarter(t, {
                    width: 'narrow',
                    context: 'standalone',
                  });
                default:
                  return (
                    n.quarter(t, { width: 'wide', context: 'standalone' }) ||
                    n.quarter(t, {
                      width: 'abbreviated',
                      context: 'standalone',
                    }) ||
                    n.quarter(t, { width: 'narrow', context: 'standalone' })
                  );
              }
            },
          },
          {
            key: 'validate',
            value: function (t, e) {
              return e >= 1 && e <= 4;
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return (
                t.setUTCMonth(3 * (n - 1), 1), t.setUTCHours(0, 0, 0, 0), t
              );
            },
          },
        ]),
        n
      );
    })(H),
    Pt = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'incompatibleTokens', [
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
          q(E(t), 'priority', 110),
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e, n) {
              var r = function (t) {
                return t - 1;
              };
              switch (e) {
                case 'M':
                  return lt(dt(I, t), r);
                case 'MM':
                  return lt(mt(2, t), r);
                case 'Mo':
                  return lt(n.ordinalNumber(t, { unit: 'month' }), r);
                case 'MMM':
                  return (
                    n.month(t, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) || n.month(t, { width: 'narrow', context: 'formatting' })
                  );
                case 'MMMMM':
                  return n.month(t, { width: 'narrow', context: 'formatting' });
                default:
                  return (
                    n.month(t, { width: 'wide', context: 'formatting' }) ||
                    n.month(t, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) ||
                    n.month(t, { width: 'narrow', context: 'formatting' })
                  );
              }
            },
          },
          {
            key: 'validate',
            value: function (t, e) {
              return e >= 0 && e <= 11;
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return t.setUTCMonth(n, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(H),
    jt = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 110),
          q(E(t), 'incompatibleTokens', [
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
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e, n) {
              var r = function (t) {
                return t - 1;
              };
              switch (e) {
                case 'L':
                  return lt(dt(I, t), r);
                case 'LL':
                  return lt(mt(2, t), r);
                case 'Lo':
                  return lt(n.ordinalNumber(t, { unit: 'month' }), r);
                case 'LLL':
                  return (
                    n.month(t, {
                      width: 'abbreviated',
                      context: 'standalone',
                    }) || n.month(t, { width: 'narrow', context: 'standalone' })
                  );
                case 'LLLLL':
                  return n.month(t, { width: 'narrow', context: 'standalone' });
                default:
                  return (
                    n.month(t, { width: 'wide', context: 'standalone' }) ||
                    n.month(t, {
                      width: 'abbreviated',
                      context: 'standalone',
                    }) ||
                    n.month(t, { width: 'narrow', context: 'standalone' })
                  );
              }
            },
          },
          {
            key: 'validate',
            value: function (t, e) {
              return e >= 0 && e <= 11;
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return t.setUTCMonth(n, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(H);
  var Mt = (function (t) {
    S(n, t);
    var e = L(n);
    function n() {
      var t;
      P(this, n);
      for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
        a[o] = arguments[o];
      return (
        q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 100),
        q(E(t), 'incompatibleTokens', [
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
        t
      );
    }
    return (
      U(n, [
        {
          key: 'parse',
          value: function (t, e, n) {
            switch (e) {
              case 'w':
                return dt(Q, t);
              case 'wo':
                return n.ordinalNumber(t, { unit: 'week' });
              default:
                return mt(e.length, t);
            }
          },
        },
        {
          key: 'validate',
          value: function (t, e) {
            return e >= 1 && e <= 53;
          },
        },
        {
          key: 'set',
          value: function (t, e, n, o) {
            return Tt(
              (function (t, e, n) {
                r(2, arguments);
                var o = a(t),
                  i = v(e),
                  u =
                    (function (t, e) {
                      r(1, arguments);
                      var n = a(t),
                        o =
                          Tt(n, e).getTime() -
                          (function (t, e) {
                            var n, a, o, i, u, c, s, l;
                            r(1, arguments);
                            var d = kt(),
                              f = v(
                                null !==
                                  (n =
                                    null !==
                                      (a =
                                        null !==
                                          (o =
                                            null !==
                                              (i =
                                                null == e
                                                  ? void 0
                                                  : e.firstWeekContainsDate) &&
                                            void 0 !== i
                                              ? i
                                              : null == e ||
                                                null === (u = e.locale) ||
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
                              h = Ct(t, e),
                              m = new Date(0);
                            return (
                              m.setUTCFullYear(h, 0, f),
                              m.setUTCHours(0, 0, 0, 0),
                              Tt(m, e)
                            );
                          })(n, e).getTime();
                      return Math.round(o / 6048e5) + 1;
                    })(o, n) - i;
                return o.setUTCDate(o.getUTCDate() - 7 * u), o;
              })(t, n, o),
              o
            );
          },
        },
      ]),
      n
    );
  })(H);
  function Ut(t, e) {
    r(2, arguments);
    var n = a(t),
      o = v(e),
      i =
        (function (t) {
          r(1, arguments);
          var e = a(t),
            n =
              Et(e).getTime() -
              (function (t) {
                r(1, arguments);
                var e = (function (t) {
                    r(1, arguments);
                    var e = a(t),
                      n = e.getUTCFullYear(),
                      o = new Date(0);
                    o.setUTCFullYear(n + 1, 0, 4), o.setUTCHours(0, 0, 0, 0);
                    var i = Et(o),
                      u = new Date(0);
                    u.setUTCFullYear(n, 0, 4), u.setUTCHours(0, 0, 0, 0);
                    var c = Et(u);
                    return e.getTime() >= i.getTime()
                      ? n + 1
                      : e.getTime() >= c.getTime()
                      ? n
                      : n - 1;
                  })(t),
                  n = new Date(0);
                return (
                  n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0), Et(n)
                );
              })(e).getTime();
          return Math.round(n / 6048e5) + 1;
        })(n) - o;
    return n.setUTCDate(n.getUTCDate() - 7 * i), n;
  }
  var qt = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 100),
          q(E(t), 'incompatibleTokens', [
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
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e, n) {
              switch (e) {
                case 'I':
                  return dt(Q, t);
                case 'Io':
                  return n.ordinalNumber(t, { unit: 'week' });
                default:
                  return mt(e.length, t);
              }
            },
          },
          {
            key: 'validate',
            value: function (t, e) {
              return e >= 1 && e <= 53;
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return Et(Ut(t, n));
            },
          },
        ]),
        n
      );
    })(H),
    At = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    Yt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    Ot = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 90),
          q(E(t), 'subPriority', 1),
          q(E(t), 'incompatibleTokens', [
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
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e, n) {
              switch (e) {
                case 'd':
                  return dt(R, t);
                case 'do':
                  return n.ordinalNumber(t, { unit: 'date' });
                default:
                  return mt(e.length, t);
              }
            },
          },
          {
            key: 'validate',
            value: function (t, e) {
              var n = wt(t.getUTCFullYear()),
                r = t.getUTCMonth();
              return n ? e >= 1 && e <= Yt[r] : e >= 1 && e <= At[r];
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return t.setUTCDate(n), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(H),
    Ht = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 90),
          q(E(t), 'subpriority', 1),
          q(E(t), 'incompatibleTokens', [
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
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e, n) {
              switch (e) {
                case 'D':
                case 'DD':
                  return dt(F, t);
                case 'Do':
                  return n.ordinalNumber(t, { unit: 'date' });
                default:
                  return mt(e.length, t);
              }
            },
          },
          {
            key: 'validate',
            value: function (t, e) {
              return wt(t.getUTCFullYear())
                ? e >= 1 && e <= 366
                : e >= 1 && e <= 365;
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return t.setUTCMonth(0, n), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(H);
  function Wt(t, e, n) {
    var o, i, u, c, s, l, d, f;
    r(2, arguments);
    var h = kt(),
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
    var p = a(t),
      y = v(e),
      w = (((y % 7) + 7) % 7 < m ? 7 : 0) + y - p.getUTCDay();
    return p.setUTCDate(p.getUTCDate() + w), p;
  }
  var It = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 90),
          q(E(t), 'incompatibleTokens', ['D', 'i', 'e', 'c', 't', 'T']),
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e, n) {
              switch (e) {
                case 'E':
                case 'EE':
                case 'EEE':
                  return (
                    n.day(t, { width: 'abbreviated', context: 'formatting' }) ||
                    n.day(t, { width: 'short', context: 'formatting' }) ||
                    n.day(t, { width: 'narrow', context: 'formatting' })
                  );
                case 'EEEEE':
                  return n.day(t, { width: 'narrow', context: 'formatting' });
                case 'EEEEEE':
                  return (
                    n.day(t, { width: 'short', context: 'formatting' }) ||
                    n.day(t, { width: 'narrow', context: 'formatting' })
                  );
                default:
                  return (
                    n.day(t, { width: 'wide', context: 'formatting' }) ||
                    n.day(t, { width: 'abbreviated', context: 'formatting' }) ||
                    n.day(t, { width: 'short', context: 'formatting' }) ||
                    n.day(t, { width: 'narrow', context: 'formatting' })
                  );
              }
            },
          },
          {
            key: 'validate',
            value: function (t, e) {
              return e >= 0 && e <= 6;
            },
          },
          {
            key: 'set',
            value: function (t, e, n, r) {
              return (t = Wt(t, n, r)).setUTCHours(0, 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(H),
    Rt = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 90),
          q(E(t), 'incompatibleTokens', [
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
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e, n, r) {
              var a = function (t) {
                var e = 7 * Math.floor((t - 1) / 7);
                return ((t + r.weekStartsOn + 6) % 7) + e;
              };
              switch (e) {
                case 'e':
                case 'ee':
                  return lt(mt(e.length, t), a);
                case 'eo':
                  return lt(n.ordinalNumber(t, { unit: 'day' }), a);
                case 'eee':
                  return (
                    n.day(t, { width: 'abbreviated', context: 'formatting' }) ||
                    n.day(t, { width: 'short', context: 'formatting' }) ||
                    n.day(t, { width: 'narrow', context: 'formatting' })
                  );
                case 'eeeee':
                  return n.day(t, { width: 'narrow', context: 'formatting' });
                case 'eeeeee':
                  return (
                    n.day(t, { width: 'short', context: 'formatting' }) ||
                    n.day(t, { width: 'narrow', context: 'formatting' })
                  );
                default:
                  return (
                    n.day(t, { width: 'wide', context: 'formatting' }) ||
                    n.day(t, { width: 'abbreviated', context: 'formatting' }) ||
                    n.day(t, { width: 'short', context: 'formatting' }) ||
                    n.day(t, { width: 'narrow', context: 'formatting' })
                  );
              }
            },
          },
          {
            key: 'validate',
            value: function (t, e) {
              return e >= 0 && e <= 6;
            },
          },
          {
            key: 'set',
            value: function (t, e, n, r) {
              return (t = Wt(t, n, r)).setUTCHours(0, 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(H),
    Ft = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 90),
          q(E(t), 'incompatibleTokens', [
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
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e, n, r) {
              var a = function (t) {
                var e = 7 * Math.floor((t - 1) / 7);
                return ((t + r.weekStartsOn + 6) % 7) + e;
              };
              switch (e) {
                case 'c':
                case 'cc':
                  return lt(mt(e.length, t), a);
                case 'co':
                  return lt(n.ordinalNumber(t, { unit: 'day' }), a);
                case 'ccc':
                  return (
                    n.day(t, { width: 'abbreviated', context: 'standalone' }) ||
                    n.day(t, { width: 'short', context: 'standalone' }) ||
                    n.day(t, { width: 'narrow', context: 'standalone' })
                  );
                case 'ccccc':
                  return n.day(t, { width: 'narrow', context: 'standalone' });
                case 'cccccc':
                  return (
                    n.day(t, { width: 'short', context: 'standalone' }) ||
                    n.day(t, { width: 'narrow', context: 'standalone' })
                  );
                default:
                  return (
                    n.day(t, { width: 'wide', context: 'standalone' }) ||
                    n.day(t, { width: 'abbreviated', context: 'standalone' }) ||
                    n.day(t, { width: 'short', context: 'standalone' }) ||
                    n.day(t, { width: 'narrow', context: 'standalone' })
                  );
              }
            },
          },
          {
            key: 'validate',
            value: function (t, e) {
              return e >= 0 && e <= 6;
            },
          },
          {
            key: 'set',
            value: function (t, e, n, r) {
              return (t = Wt(t, n, r)).setUTCHours(0, 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(H),
    Qt = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 90),
          q(E(t), 'incompatibleTokens', [
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
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e, n) {
              var r = function (t) {
                return 0 === t ? 7 : t;
              };
              switch (e) {
                case 'i':
                case 'ii':
                  return mt(e.length, t);
                case 'io':
                  return n.ordinalNumber(t, { unit: 'day' });
                case 'iii':
                  return lt(
                    n.day(t, { width: 'abbreviated', context: 'formatting' }) ||
                      n.day(t, { width: 'short', context: 'formatting' }) ||
                      n.day(t, { width: 'narrow', context: 'formatting' }),
                    r
                  );
                case 'iiiii':
                  return lt(
                    n.day(t, { width: 'narrow', context: 'formatting' }),
                    r
                  );
                case 'iiiiii':
                  return lt(
                    n.day(t, { width: 'short', context: 'formatting' }) ||
                      n.day(t, { width: 'narrow', context: 'formatting' }),
                    r
                  );
                default:
                  return lt(
                    n.day(t, { width: 'wide', context: 'formatting' }) ||
                      n.day(t, {
                        width: 'abbreviated',
                        context: 'formatting',
                      }) ||
                      n.day(t, { width: 'short', context: 'formatting' }) ||
                      n.day(t, { width: 'narrow', context: 'formatting' }),
                    r
                  );
              }
            },
          },
          {
            key: 'validate',
            value: function (t, e) {
              return e >= 1 && e <= 7;
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return (
                (t = (function (t, e) {
                  r(2, arguments);
                  var n = v(e);
                  n % 7 == 0 && (n -= 7);
                  var o = a(t),
                    i = (((n % 7) + 7) % 7 < 1 ? 7 : 0) + n - o.getUTCDay();
                  return o.setUTCDate(o.getUTCDate() + i), o;
                })(t, n)),
                t.setUTCHours(0, 0, 0, 0),
                t
              );
            },
          },
        ]),
        n
      );
    })(H),
    Xt = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 80),
          q(E(t), 'incompatibleTokens', ['b', 'B', 'H', 'k', 't', 'T']),
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e, n) {
              switch (e) {
                case 'a':
                case 'aa':
                case 'aaa':
                  return (
                    n.dayPeriod(t, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) ||
                    n.dayPeriod(t, { width: 'narrow', context: 'formatting' })
                  );
                case 'aaaaa':
                  return n.dayPeriod(t, {
                    width: 'narrow',
                    context: 'formatting',
                  });
                default:
                  return (
                    n.dayPeriod(t, { width: 'wide', context: 'formatting' }) ||
                    n.dayPeriod(t, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) ||
                    n.dayPeriod(t, { width: 'narrow', context: 'formatting' })
                  );
              }
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return t.setUTCHours(vt(n), 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(H),
    Bt = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 80),
          q(E(t), 'incompatibleTokens', ['a', 'B', 'H', 'k', 't', 'T']),
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e, n) {
              switch (e) {
                case 'b':
                case 'bb':
                case 'bbb':
                  return (
                    n.dayPeriod(t, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) ||
                    n.dayPeriod(t, { width: 'narrow', context: 'formatting' })
                  );
                case 'bbbbb':
                  return n.dayPeriod(t, {
                    width: 'narrow',
                    context: 'formatting',
                  });
                default:
                  return (
                    n.dayPeriod(t, { width: 'wide', context: 'formatting' }) ||
                    n.dayPeriod(t, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) ||
                    n.dayPeriod(t, { width: 'narrow', context: 'formatting' })
                  );
              }
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return t.setUTCHours(vt(n), 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(H),
    Jt = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 80),
          q(E(t), 'incompatibleTokens', ['a', 'b', 't', 'T']),
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e, n) {
              switch (e) {
                case 'B':
                case 'BB':
                case 'BBB':
                  return (
                    n.dayPeriod(t, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) ||
                    n.dayPeriod(t, { width: 'narrow', context: 'formatting' })
                  );
                case 'BBBBB':
                  return n.dayPeriod(t, {
                    width: 'narrow',
                    context: 'formatting',
                  });
                default:
                  return (
                    n.dayPeriod(t, { width: 'wide', context: 'formatting' }) ||
                    n.dayPeriod(t, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) ||
                    n.dayPeriod(t, { width: 'narrow', context: 'formatting' })
                  );
              }
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return t.setUTCHours(vt(n), 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(H),
    _t = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 70),
          q(E(t), 'incompatibleTokens', ['H', 'K', 'k', 't', 'T']),
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e, n) {
              switch (e) {
                case 'h':
                  return dt(_, t);
                case 'ho':
                  return n.ordinalNumber(t, { unit: 'hour' });
                default:
                  return mt(e.length, t);
              }
            },
          },
          {
            key: 'validate',
            value: function (t, e) {
              return e >= 1 && e <= 12;
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              var r = t.getUTCHours() >= 12;
              return (
                r && n < 12
                  ? t.setUTCHours(n + 12, 0, 0, 0)
                  : r || 12 !== n
                  ? t.setUTCHours(n, 0, 0, 0)
                  : t.setUTCHours(0, 0, 0, 0),
                t
              );
            },
          },
        ]),
        n
      );
    })(H),
    Gt = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 70),
          q(E(t), 'incompatibleTokens', ['a', 'b', 'h', 'K', 'k', 't', 'T']),
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e, n) {
              switch (e) {
                case 'H':
                  return dt(X, t);
                case 'Ho':
                  return n.ordinalNumber(t, { unit: 'hour' });
                default:
                  return mt(e.length, t);
              }
            },
          },
          {
            key: 'validate',
            value: function (t, e) {
              return e >= 0 && e <= 23;
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return t.setUTCHours(n, 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(H),
    Vt = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 70),
          q(E(t), 'incompatibleTokens', ['h', 'H', 'k', 't', 'T']),
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e, n) {
              switch (e) {
                case 'K':
                  return dt(J, t);
                case 'Ko':
                  return n.ordinalNumber(t, { unit: 'hour' });
                default:
                  return mt(e.length, t);
              }
            },
          },
          {
            key: 'validate',
            value: function (t, e) {
              return e >= 0 && e <= 11;
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return (
                t.getUTCHours() >= 12 && n < 12
                  ? t.setUTCHours(n + 12, 0, 0, 0)
                  : t.setUTCHours(n, 0, 0, 0),
                t
              );
            },
          },
        ]),
        n
      );
    })(H),
    $t = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 70),
          q(E(t), 'incompatibleTokens', ['a', 'b', 'h', 'H', 'K', 't', 'T']),
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e, n) {
              switch (e) {
                case 'k':
                  return dt(B, t);
                case 'ko':
                  return n.ordinalNumber(t, { unit: 'hour' });
                default:
                  return mt(e.length, t);
              }
            },
          },
          {
            key: 'validate',
            value: function (t, e) {
              return e >= 1 && e <= 24;
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              var r = n <= 24 ? n % 24 : n;
              return t.setUTCHours(r, 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(H),
    zt = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 60),
          q(E(t), 'incompatibleTokens', ['t', 'T']),
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e, n) {
              switch (e) {
                case 'm':
                  return dt(G, t);
                case 'mo':
                  return n.ordinalNumber(t, { unit: 'minute' });
                default:
                  return mt(e.length, t);
              }
            },
          },
          {
            key: 'validate',
            value: function (t, e) {
              return e >= 0 && e <= 59;
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return t.setUTCMinutes(n, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(H),
    Kt = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 50),
          q(E(t), 'incompatibleTokens', ['t', 'T']),
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e, n) {
              switch (e) {
                case 's':
                  return dt(V, t);
                case 'so':
                  return n.ordinalNumber(t, { unit: 'second' });
                default:
                  return mt(e.length, t);
              }
            },
          },
          {
            key: 'validate',
            value: function (t, e) {
              return e >= 0 && e <= 59;
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return t.setUTCSeconds(n, 0), t;
            },
          },
        ]),
        n
      );
    })(H),
    Zt = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 30),
          q(E(t), 'incompatibleTokens', ['t', 'T']),
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e) {
              return lt(mt(e.length, t), function (t) {
                return Math.floor(t * Math.pow(10, 3 - e.length));
              });
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return t.setUTCMilliseconds(n), t;
            },
          },
        ]),
        n
      );
    })(H),
    te = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 10),
          q(E(t), 'incompatibleTokens', ['t', 'T', 'x']),
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e) {
              switch (e) {
                case 'X':
                  return ft(ot, t);
                case 'XX':
                  return ft(it, t);
                case 'XXXX':
                  return ft(ut, t);
                case 'XXXXX':
                  return ft(st, t);
                default:
                  return ft(ct, t);
              }
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return e.timestampIsSet ? t : new Date(t.getTime() - n);
            },
          },
        ]),
        n
      );
    })(H),
    ee = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 10),
          q(E(t), 'incompatibleTokens', ['t', 'T', 'X']),
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t, e) {
              switch (e) {
                case 'x':
                  return ft(ot, t);
                case 'xx':
                  return ft(it, t);
                case 'xxxx':
                  return ft(ut, t);
                case 'xxxxx':
                  return ft(st, t);
                default:
                  return ft(ct, t);
              }
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return e.timestampIsSet ? t : new Date(t.getTime() - n);
            },
          },
        ]),
        n
      );
    })(H),
    ne = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 40),
          q(E(t), 'incompatibleTokens', '*'),
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t) {
              return ht(t);
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return [new Date(1e3 * n), { timestampIsSet: !0 }];
            },
          },
        ]),
        n
      );
    })(H),
    re = (function (t) {
      S(n, t);
      var e = L(n);
      function n() {
        var t;
        P(this, n);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          q(E((t = e.call.apply(e, [this].concat(a)))), 'priority', 20),
          q(E(t), 'incompatibleTokens', '*'),
          t
        );
      }
      return (
        U(n, [
          {
            key: 'parse',
            value: function (t) {
              return ht(t);
            },
          },
          {
            key: 'set',
            value: function (t, e, n) {
              return [new Date(n), { timestampIsSet: !0 }];
            },
          },
        ]),
        n
      );
    })(H),
    ae = {
      G: new W(),
      y: new gt(),
      Y: new xt(),
      R: new Nt(),
      u: new St(),
      Q: new Dt(),
      q: new Lt(),
      M: new Pt(),
      L: new jt(),
      w: new Mt(),
      I: new qt(),
      d: new Ot(),
      D: new Ht(),
      E: new It(),
      e: new Rt(),
      c: new Ft(),
      i: new Qt(),
      a: new Xt(),
      b: new Bt(),
      B: new Jt(),
      h: new _t(),
      H: new Gt(),
      K: new Vt(),
      k: new $t(),
      m: new zt(),
      s: new Kt(),
      S: new Zt(),
      X: new te(),
      x: new ee(),
      t: new ne(),
      T: new re(),
    },
    oe = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    ie = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    ue = /^'([^]*?)'?$/,
    ce = /''/g,
    se = /\S/,
    le = /[a-zA-Z]/;
  function de(t, e, o, i) {
    var c, s, l, d, f, h, m, w, g, b, E, N, S, D, L, P, j, M;
    r(3, arguments);
    var U = String(t),
      q = String(e),
      A = kt(),
      Y =
        null !==
          (c =
            null !== (s = null == i ? void 0 : i.locale) && void 0 !== s
              ? s
              : A.locale) && void 0 !== c
          ? c
          : p;
    if (!Y.match) throw new RangeError('locale must contain match property');
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
            (N =
              null !==
                (S =
                  null !== (D = null == i ? void 0 : i.weekStartsOn) &&
                  void 0 !== D
                    ? D
                    : null == i ||
                      null === (L = i.locale) ||
                      void 0 === L ||
                      null === (P = L.options) ||
                      void 0 === P
                    ? void 0
                    : P.weekStartsOn) && void 0 !== S
                ? S
                : A.weekStartsOn) && void 0 !== N
            ? N
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
      R = { firstWeekContainsDate: H, weekStartsOn: W, locale: Y },
      F = [new O()],
      Q = q
        .match(ie)
        .map(function (t) {
          var e = t[0];
          return e in k ? (0, k[e])(t, Y.formatLong) : t;
        })
        .join('')
        .match(oe),
      X = [],
      B = u(Q);
    try {
      var J = function () {
        var e = I.value;
        (null != i && i.useAdditionalWeekYearTokens) ||
          !(function (t) {
            return -1 !== C.indexOf(t);
          })(e) ||
          x(e, q, t),
          (null != i && i.useAdditionalDayOfYearTokens) ||
            !(function (t) {
              return -1 !== T.indexOf(t);
            })(e) ||
            x(e, q, t);
        var n = e[0],
          r = ae[n];
        if (r) {
          var a = r.incompatibleTokens;
          if (Array.isArray(a)) {
            var o = X.find(function (t) {
              return a.includes(t.token) || t.token === n;
            });
            if (o)
              throw new RangeError(
                "The format string mustn't contain `"
                  .concat(o.fullToken, '` and `')
                  .concat(e, '` at the same time')
              );
          } else if ('*' === r.incompatibleTokens && X.length > 0)
            throw new RangeError(
              "The format string mustn't contain `".concat(
                e,
                '` and any other token at the same time'
              )
            );
          X.push({ token: n, fullToken: e });
          var u = r.run(U, e, Y.match, R);
          if (!u) return { v: new Date(NaN) };
          F.push(u.setter), (U = u.rest);
        } else {
          if (n.match(le))
            throw new RangeError(
              'Format string contains an unescaped latin alphabet character `' +
                n +
                '`'
            );
          if (
            ("''" === e
              ? (e = "'")
              : "'" === n && (e = e.match(ue)[1].replace(ce, "'")),
            0 !== U.indexOf(e))
          )
            return { v: new Date(NaN) };
          U = U.slice(e.length);
        }
      };
      for (B.s(); !(I = B.n()).done; ) {
        var _ = J();
        if ('object' === n(_)) return _.v;
      }
    } catch (t) {
      B.e(t);
    } finally {
      B.f();
    }
    if (U.length > 0 && se.test(U)) return new Date(NaN);
    var G = F.map(function (t) {
        return t.priority;
      })
        .sort(function (t, e) {
          return e - t;
        })
        .filter(function (t, e, n) {
          return n.indexOf(t) === e;
        })
        .map(function (t) {
          return F.filter(function (e) {
            return e.priority === t;
          }).sort(function (t, e) {
            return e.subPriority - t.subPriority;
          });
        })
        .map(function (t) {
          return t[0];
        }),
      V = a(o);
    if (isNaN(V.getTime())) return new Date(NaN);
    var $,
      z = (function (t, e) {
        return (
          r(2, arguments),
          (function (t, e) {
            r(2, arguments);
            var n = a(t).getTime(),
              o = v(e);
            return new Date(n + o);
          })(t, -v(e))
        );
      })(
        V,
        (function (t) {
          var e = new Date(
            Date.UTC(
              t.getFullYear(),
              t.getMonth(),
              t.getDate(),
              t.getHours(),
              t.getMinutes(),
              t.getSeconds(),
              t.getMilliseconds()
            )
          );
          return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
        })(V)
      ),
      K = {},
      Z = u(G);
    try {
      for (Z.s(); !($ = Z.n()).done; ) {
        var tt = $.value;
        if (!tt.validate(z, R)) return new Date(NaN);
        var et = tt.set(z, K, R);
        Array.isArray(et) ? ((z = et[0]), y(K, et[1])) : (z = et);
      }
    } catch (t) {
      Z.e(t);
    } finally {
      Z.f();
    }
    return z;
  }
  const fe = (() => {
      let t = [],
        e = [];
      const n = () => JSON.parse(localStorage.getItem('projects')) || [],
        a = () => JSON.parse(localStorage.getItem('notes')) || [],
        i = () => {
          t = n();
        },
        u = () => {
          e = a();
        };
      return {
        projects: t,
        notes: e,
        storeNewProject: (e) => {
          i();
          const n = ((t, e) => ({ projectName: t, tasks: [] }))(e);
          t.push(n), localStorage.setItem('projects', JSON.stringify(t));
        },
        storeNewNote: (t, n) => {
          u();
          const r = ((t, e) => ({ noteName: t, noteDesc: e }))(t, n);
          e.push(r), localStorage.setItem('notes', JSON.stringify(e));
        },
        storeNewTask: (e, n, r) => {
          i(),
            t
              .find((t) => t.projectName === e)
              .tasks.push(
                ((t, e, n) => ({ taskName: t, dueDate: e, checked: !1 }))(n, r)
              ),
            localStorage.setItem('projects', JSON.stringify(t));
        },
        getProjectList: n,
        getNoteList: a,
        getTodayTasks: () => {
          const e = [];
          return (
            i(),
            t.forEach((t) => {
              t.tasks.forEach((t) => {
                (function (t) {
                  return (
                    r(1, arguments),
                    (function (t, e) {
                      r(2, arguments);
                      var n = o(t),
                        a = o(e);
                      return n.getTime() === a.getTime();
                    })(t, Date.now())
                  );
                })(de(t.dueDate, 'yyyy-MM-dd', new Date())) && e.push(t);
              });
            }),
            e
          );
        },
        getWeekTasks: () => {},
        getTaskList: (t) => n().find((e) => e.projectName === t).tasks,
        updateProjectList: i,
        updateNoteList: u,
        validateProjectName: (t) =>
          void 0 === n().find((e) => e.projectName === t),
        checkTask: (e, n) => {
          i(),
            (t
              .find((t) => t.projectName === e)
              .tasks.find((t) => t.taskName === n).checked = !0),
            localStorage.setItem('projects', JSON.stringify(t));
        },
        deleteTask: (e, n) => {
          i();
          const r = t.find((t) => t.projectName === e).tasks;
          for (let t = 0; t < r.length; t += 1)
            r[t].taskName === n && r.splice(t, 1);
          (t.find((t) => t.projectName === e).tasks = r),
            localStorage.setItem('projects', JSON.stringify(t));
        },
        deleteProject: (e) => {
          i();
          for (let n = 0; n < t.length; n += 1)
            t[n].projectName === e && t.splice(n, 1);
          localStorage.setItem('projects', JSON.stringify(t));
        },
        deleteNote: (t) => {
          u();
          for (let n = 0; n < e.length; n += 1)
            e[n].noteName === t && e.splice(n, 1);
          localStorage.setItem('notes', JSON.stringify(e));
        },
      };
    })(),
    he = (() => {
      const t = (t, e, n, r, a) => {
          const o = document.createElement('li');
          o.classList.add('nav-item'),
            ((t, e, n, r, a) => {
              const o = document.createElement('button');
              o.classList.add('nav-btn', 'font-20px', 'flex', 'align-center'),
                a && o.classList.add(a),
                r && (o.id = r);
              const i = document.createElement('span');
              (i.textContent = t),
                i.classList.add('material-icons'),
                o.appendChild(i),
                (o.innerHTML += e),
                n.appendChild(o);
            })(t, e, o, r, a),
            n.appendChild(o);
        },
        e = (t, e, n, r) => {
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
            (u.dataset.taskName = t),
            o.appendChild(u);
          const c = document.createElement('p');
          (c.textContent = t), o.appendChild(c);
          const s = document.createElement('p');
          (s.textContent = e), i.appendChild(s);
          const l = document.createElement('span');
          (l.textContent = 'delete'),
            l.classList.add('material-icons', 'delete-task'),
            (l.dataset.taskName = t),
            i.appendChild(l),
            r.appendChild(a);
        },
        n = () => {
          const t = document.querySelector('.note-container'),
            e = fe.getNoteList();
          (t.innerHTML = ''),
            0 === e.length && (t.style.display = 'none'),
            e.length > 0 && (t.style.display = 'grid'),
            e.forEach((e) => {
              const n = document.createElement('div');
              n.classList.add('note'), t.appendChild(n);
              const r = document.createElement('h3');
              r.classList.add('note-title'),
                (r.textContent = e.noteName),
                n.appendChild(r);
              const a = document.createElement('p');
              a.classList.add('note-desc'),
                (a.textContent = e.noteDesc),
                n.appendChild(a);
              const o = document.createElement('span');
              o.classList.add('material-icons', 'delete-note'),
                (o.textContent = 'delete'),
                (o.dataset.noteName = e.noteName),
                n.appendChild(o);
            }),
            document.querySelectorAll('.delete-note').forEach((t) => {
              t.addEventListener('click', (t) => {
                const e = t.target.dataset.noteName.toString();
                fe.deleteNote(e), n();
              });
            });
        },
        r = () => {
          const t = document.querySelector('.task-container'),
            n = document.querySelector('#page-title').textContent,
            a = fe.getTaskList(n);
          (t.innerHTML = ''),
            0 === a.length && (t.style.display = 'none'),
            a.length > 0 && (t.style.display = 'grid'),
            a.forEach((n) => {
              e(n.taskName, n.dueDate, n.checked, t);
            }),
            document.querySelectorAll('.task-status').forEach((t) => {
              t.addEventListener('click', (t) => {
                ((t, e) => {
                  const n = t.target.dataset.taskName.toString();
                  (t.target.textContent = 'check_box'), fe.checkTask(e, n);
                })(t, n);
              });
            }),
            document.querySelectorAll('.delete-task').forEach((t) => {
              t.addEventListener('click', (t) => {
                const e = t.target.dataset.taskName.toString();
                fe.deleteTask(n, e), r();
              });
            });
        },
        a = () => {
          const t = document.querySelector('#element-container'),
            e = document.querySelector('#new-task-btn');
          e.style.display = 'none';
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
            u.addEventListener('click', (t) => {
              t.preventDefault();
              const i = document.querySelector('#page-title').textContent;
              fe.storeNewTask(i, a.value, o.value),
                n.remove(),
                r(),
                (e.style.display = 'flex');
            }),
            c.addEventListener('click', (t) => {
              t.preventDefault(), n.remove(), (e.style.display = 'flex');
            }),
            t.appendChild(n);
        },
        o = (e) => {
          const n = document.querySelector('#element-container');
          n.innerHTML = '';
          const o = e.target.dataset.projectName.toString(),
            i = document.createElement('h2');
          (i.id = 'page-title'), (i.textContent = o), n.appendChild(i);
          const u = document.createElement('div');
          (u.id = 'container'),
            u.classList.add('task-container'),
            n.appendChild(u),
            0 === fe.getTaskList(o).length && (u.style.display = 'none'),
            r(),
            t('add_circle', 'New task', n, 'new-task-btn'),
            document
              .querySelector('#new-task-btn')
              .addEventListener('click', a);
        },
        i = () => {
          const t = document.querySelector('#nav-list-projects'),
            e = fe.getProjectList();
          (t.innerHTML = ''),
            e.forEach((e) => {
              ((t, e) => {
                const n = document.createElement('button');
                n.classList.add(
                  'project-item',
                  'font-20px',
                  'flex',
                  'align-center'
                ),
                  (n.dataset.projectName = t);
                const r = document.createElement('span');
                (r.textContent = 'folder'),
                  r.classList.add('material-icons'),
                  (r.dataset.projectName = t),
                  n.appendChild(r);
                const a = document.createElement('p');
                (a.textContent = t),
                  a.classList.add('project-name-element'),
                  (a.dataset.projectName = t),
                  n.appendChild(a);
                const o = document.createElement('span');
                (o.textContent = 'delete'),
                  o.classList.add('material-icons', 'delete-project-btn'),
                  (o.dataset.projectName = t),
                  (o.style.display = 'none'),
                  n.appendChild(o),
                  (n.onmouseover = () => {
                    o.style.display = 'inline-block';
                  }),
                  (n.onmouseout = () => {
                    o.style.display = 'none';
                  }),
                  e.appendChild(n);
              })(`${e.projectName}`, t);
            });
          const n = document.querySelectorAll('.project-item');
          n.forEach((t) => {
            t.addEventListener('click', o);
          }),
            document.querySelectorAll('.delete-project-btn').forEach((t) => {
              t.addEventListener('click', (t) => {
                n.forEach((t) => {
                  t.removeEventListener('click', o);
                });
                const e = t.target.dataset.projectName.toString();
                (document.querySelector('#element-container').innerHTML = ''),
                  fe.deleteProject(e),
                  i();
              });
            });
        };
      return {
        createButton: (t, e, n, r, a) => {
          const o = document.createElement('button');
          o.classList.add('font-20px', 'flex', 'align-center'),
            a && o.classList.add(a),
            r && (o.id = r);
          const i = document.createElement('span');
          (i.textContent = t),
            i.classList.add('material-icons'),
            o.appendChild(i),
            (o.innerHTML += e),
            n.appendChild(o);
        },
        createNavListItem: t,
        createTaskElement: e,
        updateNavProjectList: i,
        updateNoteList: n,
        updateTaskContainer: r,
        addNewProjectPopup: () => {
          const t = document.querySelector('nav'),
            e = document.querySelector('#new-project-btn');
          e.style.display = 'none';
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
            o.addEventListener('click', (t) => {
              t.preventDefault(),
                fe.validateProjectName(r.value) &&
                  (n.remove(),
                  fe.storeNewProject(r.value),
                  i(),
                  (e.style.display = 'flex'));
            }),
            u.addEventListener('click', (t) => {
              t.preventDefault(), n.remove(), (e.style.display = 'flex');
            }),
            t.appendChild(n);
        },
        addNewNotePopup: () => {
          const t = document.querySelector('#element-container'),
            e = document.querySelector('#new-note-btn');
          e.style.display = 'none';
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
            u.addEventListener('click', (t) => {
              t.preventDefault(),
                fe.storeNewNote(a.value, o.value),
                r.remove(),
                n(),
                (e.style.display = 'flex');
            }),
            c.addEventListener('click', (t) => {
              t.preventDefault(), r.remove(), (e.style.display = 'flex');
            }),
            t.appendChild(r);
        },
        addNewTaskPopup: a,
        viewProject: o,
      };
    })(),
    me = () => {
      const t = document.querySelector('#element-container');
      t.innerHTML = '';
      const e = document.createElement('h2');
      (e.id = 'page-title'), (e.textContent = 'Home'), t.appendChild(e);
      const n = document.createElement('div');
      (n.id = 'container'),
        n.classList.add('note-container'),
        t.appendChild(n),
        0 === fe.getNoteList().length && (n.style.display = 'none'),
        he.updateNoteList(),
        he.createNavListItem('add_circle', 'New note', t, 'new-note-btn'),
        document
          .querySelector('#new-note-btn')
          .addEventListener('click', he.addNewNotePopup);
    },
    pe = () => {
      const t = document.querySelector('#element-container');
      t.innerHTML = '';
      const e = document.createElement('h2');
      (e.id = 'page-title'), (e.textContent = 'Today'), t.appendChild(e);
      const n = document.createElement('div');
      (n.id = 'task-container'),
        t.appendChild(n),
        0 === fe.getTodayTasks().length && (n.style.display = 'none');
    },
    ve = () => {
      const t = document.querySelector('#element-container');
      t.innerHTML = '';
      const e = document.createElement('h2');
      (e.id = 'page-title'), (e.textContent = 'Week'), t.appendChild(e);
      const n = document.createElement('div');
      (n.id = 'task-container'),
        t.appendChild(n),
        0 === fe.getWeekTasks().length && (n.style.display = 'none');
    },
    ye = () => {
      document.querySelector('#home-tab').addEventListener('click', me),
        document.querySelector('#today-tab').addEventListener('click', pe),
        document.querySelector('#week-tab').addEventListener('click', ve),
        document.querySelectorAll('.project-item').forEach((t) => {
          t.addEventListener('click', he.viewProject);
        }),
        document.querySelectorAll('.delete-project-btn').forEach((t) => {
          t.addEventListener('click', (t) => {
            fe.deleteProject(t.target.dataset.projectName.toString()),
              he.updateNavProjectList();
          });
        }),
        document
          .querySelector('#new-project-btn')
          .addEventListener('click', he.addNewProjectPopup),
        document
          .querySelector('#new-note-btn')
          .addEventListener('click', he.addNewNotePopup);
    };
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
      const t = document.createElement('main');
      document.body.appendChild(t),
        ((t) => {
          const e = document.createElement('nav'),
            n = document.createElement('h2');
          (n.textContent = 'Tasks'), (n.id = 'tasks-title'), e.appendChild(n);
          const r = document.createElement('ul');
          r.setAttribute('id', 'nav-list-tasks'),
            e.appendChild(r),
            he.createNavListItem('home', 'Home', r, 'home-tab'),
            he.createNavListItem('today', 'Today', r, 'today-tab'),
            he.createNavListItem('date_range', 'Week', r, 'week-tab');
          const a = document.createElement('h2');
          (a.textContent = 'Projects'),
            (a.id = 'projects-title'),
            e.appendChild(a);
          const o = document.createElement('ul');
          o.setAttribute('id', 'nav-list-projects'),
            e.appendChild(o),
            he.createNavListItem(
              'add_circle',
              'New project',
              e,
              'new-project-btn'
            ),
            t.appendChild(e);
        })(t),
        ((t) => {
          const e = document.createElement('section');
          t.appendChild(e);
          const n = document.createElement('div');
          (n.id = 'element-container'),
            e.appendChild(n),
            me(),
            he.updateNoteList();
        })(t);
    })(),
    (() => {
      const t = document.createElement('footer'),
        e = document.createElement('p');
      (e.textContent = 'Made with <3 for The Odin Project curriculum'),
        e.classList.add('flex', 'font-20px', 'justify-center'),
        t.appendChild(e),
        document.body.appendChild(t);
    })(),
    window.addEventListener('load', he.updateNavProjectList()),
    ye();
})();
