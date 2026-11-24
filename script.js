/* ==========================================================================
   A Very Serious Question
   --------------------------------------------------------------------------
   ✏️  EVERYTHING YOU MIGHT WANT TO EDIT IS IN `CONFIG` BELOW.
   You shouldn't need to touch anything under the "LOGIC" line.

   Text tips:
   • Wrap words in *asterisks* to make them italic terracotta.
   • Placeholders that get filled in automatically:
       {name} {score} {total} {rating} {ratingComment}
       {days} {weekday} {dateLong} {dateShort} {today}
   ========================================================================== */

const CONFIG = {
  name: 'Jagnoor',

  // WhatsApp: international format, digits only, no "+" or spaces.
  // e.g. UK 07700 900123 -> '447700900123', Italy 340 123 4567 -> '393401234567'.
  // Leave empty and WhatsApp will ask her who to send it to.
  whatsappNumber: '',
  whatsappMessage: "Sì, I'm free on {dateShort} 😏",
  whatsappMessageReluctant: "Fine, yes 🙄 I'm free on {dateShort}",
  // Adds her quiz score + rating to the message so you get the receipts.
  whatsappAddStats: true,
  whatsappStats: '\n\n(P.S. I got {score}/{total} on your quiz and rated you {rating}/10.)',

  // The big date. month is 1–12. time is local 24h "HH:MM" (or '' for all-day).
  date: { year: 2028, month: 2, day: 14, time: '19:30', durationHours: 3 },

  ui: {
    tag: 'A very serious enquiry',
    pill: 'Question {n} of {total}',
  },

  hero: {
    eyebrow: 'No. 001 · Est. 2026',
    lines: [
      'Ciao. 👋',
      'I have a very important, very serious question for you.',
      'But first… a small test.',
    ],
    meta: 'Reading time: ~2 min · Lead time: {days} days',
    scrollHint: 'Scroll',
  },

  quiz: {
    title: 'How well do you know {name}?',
    eyebrow: 'Domanda',
    nextLabel: 'Next question ↓',
    nextLabelWrong: 'Va bene, next ↓',
    lastLabel: 'See my score ↓',
    // Default stickers for answers. src is optional (an image in /stickers/);
    // the emoji is used if there's no image or it fails to load.
    stickers: {
      correct: { src: '', emoji: '😎' },
      wrong: { src: '', emoji: '🥲' },
    },
    questions: [
      {
        question: 'How old is {name}?',
        options: ['22', '25', '29', 'Old enough to plan dates in 2028'],
        answer: '25',
        correctLine: 'Correct. Young, wise, and handsome.',
        wrongLine: "Wow. Okay. I'm 25. I'll recover. Eventually.",
        correctEmoji: '😎',
      },
      {
        // ✏️ Placeholder: swap in a real fact about yourself.
        question: "What would {name} order at a trattoria?",
        options: ['Carbonara', 'Margherita pizza', 'Lasagne', 'Spaghetti with ketchup'],
        answer: 'Carbonara',
        correctLine: 'Correct. And no cream. I know the rules.',
        wrongLine: "It's carbonara. Without cream. I've been studying.",
        correctEmoji: '🤌',
      },
      {
        // ✏️ Placeholder: swap in a real fact about yourself.
        question: 'What would {name} do on a lazy Sunday?',
        options: ['Gym at 7am, obviously', 'Sleep until 1pm', 'Plan dates two years in advance', 'Cook something ambitious and slightly burnt'],
        answer: 'Plan dates two years in advance',
        correctLine: 'Correct. Look at the date on this website. You already knew.',
        wrongLine: "Tempting. But no. I'm busy planning things in 2028.",
        correctEmoji: '📅',
      },
      {
        // ✏️ Placeholder: swap in a real fact about yourself.
        question: "What's {name}'s most annoying habit?",
        options: ["Replying 'haha' to everything", 'Being 10 minutes early. To everything.', "Saying 'trust me' before bad ideas", 'Annoying? Me? Never.'],
        answer: 'Annoying? Me? Never.',
        correctLine: 'See? You get me. No notes.',
        wrongLine: 'Rude. Accurate, maybe. But rude.',
        correctEmoji: '😇',
      },
      {
        question: "What's {name}'s opinion on pineapple on pizza?",
        options: ['Love it', "It's a crime", 'Never tried', 'Whatever you think, I agree'],
        answer: 'Whatever you think, I agree',
        correctLine: 'Smart man, right?',
        wrongLine: "Mamma mia. I'd never betray Italy like that.",
        correctEmoji: '🍕',
      },
    ],
  },

  result: {
    eyebrow: 'Allora · The results',
    label: 'You got',
    perfect: "Okay, have you been stalking me? (I'm flattered.)",
    good: 'Not bad. Room for improvement. Lots of room, actually. Like, a 2028 amount of room.',
    low: 'Wow. We clearly need to spend more time together. Interesting… 👀',
    goodFrom: 3, // scores from here up to (total - 1) get the "good" line
    hint: 'keep scrolling. the next part is also graded.',
  },

  rating: {
    eyebrow: 'Part two · Peer review',
    heading: 'Be honest. Rate {name} out of 10… *so far.*',
    hint: "pre-filled for your convenience. you're welcome.",
    startValue: 10,
    lockLabel: 'Lock it in 🔒',
    lockedLabel: 'Locked in. Va bene. ✓',
    // Reaction stickers, lowest to highest. Put the images in /stickers/.
    // mood: 'sad' = grey screen + rain, 'love' = floating hearts.
    stickers: [
      { min: 0, max: 2, src: 'stickers/crying.png', emoji: '😭', caption: "I'm calling my mum.", mood: 'sad' },
      { min: 3, max: 4, src: 'stickers/sad.png', emoji: '🥲', caption: 'Ouch. Okay. Noted.' },
      { min: 5, max: 6, src: 'stickers/meh.png', emoji: '😐', caption: 'Mid? MID?' },
      { min: 7, max: 8, src: 'stickers/happy.png', emoji: '😊', caption: "Now we're talking." },
      { min: 9, max: 10, src: 'stickers/love.png', emoji: '😍', caption: 'Knew it. 😌', mood: 'love' },
    ],
    // Cheeky comment used in the build-up ("You rated me a 7/10." + comment)
    comments: [
      { min: 0, max: 2, text: 'Bold. Wrong, but bold.' },
      { min: 3, max: 4, text: "I've framed it anyway." },
      { min: 5, max: 6, text: "Mid. I'm choosing to hear 'promising'." },
      { min: 7, max: 8, text: "I'll take it. Framing it, actually." },
      { min: 9, max: 10, text: 'Correct answer. Obviously.' },
    ],
  },

  buildUp: {
    // style: 'big' (huge italic) | 'final' (large) | '' (normal)
    // lowScoreText replaces text when she scored below result.goodFrom.
    lines: [
      { text: 'Allora…', style: 'big' },
      { text: "You've passed the test.", lowScoreText: "You've… *mostly* passed the test." },
      { text: 'You rated me a *{rating}/10*.', note: '{ratingComment}' },
      { text: 'So I have one serious question.' },
      { text: 'Very serious.' },
      { text: 'Clear your schedule.', style: 'final' },
    ],
  },

  finale: {
    eyebrow: 'Sei libera?',
    headline: 'Are you free on *{dateLong}*?',
    subtext: "It's a {weekday}. I checked. I'm a planner.",
    fine: 'No pressure. You have {days} days to think about it.',
    calendarNote: '↑ this one. obviously.',
    weekdays: ['L', 'M', 'M', 'G', 'V', 'S', 'D'], // Italian, Monday first
    stamp: 'Prenotato',
    yes: 'Sì, obviously 💘',
    no: 'No',
    noLabels: ['Are you sure?', 'Really sure?'], // shown after dodge 1, 2…
    noGiveUp: 'Fine, yes 🙄',
    maxDodges: 3,
    success: {
      eyebrow: 'Va bene!',
      title: 'Perfetto. *It’s a date.* 🍝',
      reluctant: '"Fine" counts. I checked the rules.',
      days: 'Only *{days}* days to go.',
      sub: "Plenty of time to pick the restaurant. (It's going to be a good one.)",
      calendarBtn: 'Add to calendar 📅',
      whatsappBtn: 'Tell {name} 💬',
    },
    footer: 'Designed, built and slightly over-engineered by {name}.',
  },

  // Calendar invite (.ics)
  ics: {
    title: 'Date with {name} 🍝',
    location: 'Somewhere with very good pasta',
    description: 'Booked on {today}. Planned {days} days in advance, like a completely normal person.',
    alarm: 'One week to go. Mamma mia.',
    fileName: 'date-with-{name}.ics',
  },

  // Background music. Leave src empty for the built-in gentle music-box loop,
  // or point it at an mp3 in this folder, e.g. 'music.mp3'.
  music: { src: '', volume: 0.5 },

  confettiColors: ['#C65D3B', '#F2B8B5', '#F5EFE6', '#E9A07F', '#FFFFFF'],
};

/* ==========================================================================
   LOGIC: no need to edit below this line
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- 0. Environment ---------------------------------------------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const root = document.documentElement;

  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Full motion needs GSAP + ScrollTrigger. If a CDN fails we fall back to the
  // calm, fade-only version instead of breaking.
  const MOTION = !REDUCED && !!(window.gsap && window.ScrollTrigger);
  if (!MOTION) { root.classList.remove('motion'); root.classList.add('rm'); }
  const TOUCH = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  const IOS = /iP(hone|ad|od)/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  const QUESTIONS = CONFIG.quiz.questions;
  const TOTAL = QUESTIONS.length;
  const STICKERS = CONFIG.rating.stickers.slice().sort((a, b) => a.min - b.min);

  const state = {
    answers: [],          // true/false per question
    score: 0,
    ratingValue: CONFIG.rating.startValue, // live slider value
    rating: null,         // locked-in value
    resultShown: false,
    finaleShown: false,
    saidYes: false,
    reluctant: false,
    dodges: 0,
  };

  /* ---------- 1. Dates ---------------------------------------------------- */
  const timeParts = String(CONFIG.date.time || '').split(':').map((n) => parseInt(n, 10));
  const HAS_TIME = Number.isFinite(timeParts[0]);
  const EVENT = new Date(
    CONFIG.date.year, CONFIG.date.month - 1, CONFIG.date.day,
    HAS_TIME ? timeParts[0] : 0, HAS_TIME ? (timeParts[1] || 0) : 0
  );
  const ordinal = (n) => {
    const s = n % 100 >= 11 && n % 100 <= 13 ? 'th' : ({ 1: 'st', 2: 'nd', 3: 'rd' })[n % 10] || 'th';
    return n + s;
  };
  const fmtDate = (d, opts, locale = 'en-GB') => {
    try { return d.toLocaleDateString(locale, opts); } catch (e) { return d.toDateString(); }
  };
  function daysToGo() {
    const now = new Date();
    const a = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    const b = Date.UTC(EVENT.getFullYear(), EVENT.getMonth(), EVENT.getDate());
    return Math.max(0, Math.round((b - a) / 864e5));
  }

  /* ---------- 2. Text helpers --------------------------------------------- */
  function ratingComment(v) {
    const c = CONFIG.rating.comments.find((x) => v >= x.min && v <= x.max);
    return c ? c.text : '';
  }
  function vars() {
    const r = state.rating !== null ? state.rating : state.ratingValue;
    return {
      name: CONFIG.name,
      score: state.score,
      total: TOTAL,
      rating: r,
      ratingComment: ratingComment(r),
      days: daysToGo().toLocaleString('en-GB'),
      weekday: fmtDate(EVENT, { weekday: 'long' }),
      dateLong: `${ordinal(EVENT.getDate())} ${fmtDate(EVENT, { month: 'long' })} ${EVENT.getFullYear()}`,
      dateShort: `${ordinal(EVENT.getDate())} ${fmtDate(EVENT, { month: 'short' })} ${EVENT.getFullYear()}`,
      today: fmtDate(new Date(), { day: 'numeric', month: 'long', year: 'numeric' }),
    };
  }
  const tpl = (s) => {
    const v = vars();
    return String(s == null ? '' : s).replace(/\{(\w+)\}/g, (m, k) => (k in v ? v[k] : m));
  };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  /** template + escape + *italic* */
  const fmt = (s) => esc(tpl(s)).replace(/\*(.+?)\*/g, '<em>$1</em>');
  const getPath = (obj, path) => path.split('.').reduce((o, k) => (o ? o[k] : undefined), obj);
  const pad2 = (n) => String(n).padStart(2, '0');
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  /* ---------- 3. Small effects helpers ------------------------------------ */
  const buzz = (p) => { try { if (navigator.vibrate) navigator.vibrate(p); } catch (e) { /* not supported */ } };
  /** Web Animations wrapper: no-op in reduced motion (falls back to a fade). */
  function animate(el, keyframes, opts) {
    if (!el || !el.animate) return null;
    if (REDUCED) return el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, fill: 'forwards' });
    return el.animate(keyframes, opts);
  }
  function fadeUp(el, delay = 0) {
    return animate(el, [
      { opacity: 0, transform: 'translateY(12px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ], { duration: 450, delay, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'both' });
  }
  function confettiBurst(el, count = 46) {
    if (!window.confetti || REDUCED || !el) return;
    const r = el.getBoundingClientRect();
    window.confetti({
      particleCount: count, spread: 70, startVelocity: 30, gravity: 1.1, ticks: 150, scalar: 0.85,
      zIndex: 60, colors: CONFIG.confettiColors, disableForReducedMotion: true,
      origin: { x: (r.left + r.width / 2) / window.innerWidth, y: (r.top + r.height / 2) / window.innerHeight },
    });
  }

  /* ---------- 4. Stickers (preload + render with emoji fallback) ---------- */
  const stickerStatus = new Map(); // src -> 'ok' | 'fail' | 'loading'
  function preloadStickers() {
    const srcs = STICKERS.map((s) => s.src)
      .concat([CONFIG.quiz.stickers.correct.src, CONFIG.quiz.stickers.wrong.src])
      .filter(Boolean);
    srcs.forEach((src) => {
      if (stickerStatus.has(src)) return;
      stickerStatus.set(src, 'loading');
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => {
        stickerStatus.set(src, 'ok');
        if (img.decode) img.decode().catch(() => {});
      };
      img.onerror = () => stickerStatus.set(src, 'fail');
      img.src = src;
    });
  }
  function emojiEl(emoji) {
    const e = document.createElement('span');
    e.className = 'sticker__emoji';
    e.textContent = emoji || '✨';
    return e;
  }
  function makeSticker({ src, emoji }) {
    const wrap = document.createElement('div');
    wrap.className = 'sticker';
    if (src && stickerStatus.get(src) !== 'fail') {
      const img = new Image();
      img.className = 'sticker__img';
      img.alt = '';
      img.decoding = 'async';
      img.onerror = () => { stickerStatus.set(src, 'fail'); img.replaceWith(emojiEl(emoji)); };
      img.src = src;
      wrap.append(img);
    } else {
      wrap.append(emojiEl(emoji));
    }
    return wrap;
  }

  /* ---------- 5. Render ---------------------------------------------------- */
  function renderCopy() {
    $$('[data-copy]').forEach((el) => { el.innerHTML = fmt(getPath(CONFIG, el.dataset.copy)); });
    $('.chrome__monogram').textContent = CONFIG.name.charAt(0).toUpperCase();
  }

  function renderHero() {
    const lines = CONFIG.hero.lines.map((line, i) => {
      const words = tpl(line).split(/\s+/).filter(Boolean).map((w) => {
        const inner = /👋/.test(w) ? `<span class="wave">${esc(w)}</span>` : esc(w);
        return `<span class="word">${inner}</span>`;
      }).join(' ');
      return `<span class="hero__line hero__line--${Math.min(i + 1, 3)}">${words}</span>`;
    });
    $('.hero__lines').innerHTML = lines.join('');
    $('.hero__meta').innerHTML = fmt(CONFIG.hero.meta);
  }

  function renderWorld() {
    // Seeded random so the layout is the same on every visit
    let seed = 7;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };

    const blobs = [
      { c: '#C65D3B', o: 0.26, x: -30, y: -15, s: 95 },
      { c: '#F2B8B5', o: 0.62, x: 45, y: 10, s: 85 },
      { c: '#6B7A4B', o: 0.2, x: -25, y: 60, s: 90 },
      { c: '#F2B8B5', o: 0.5, x: 35, y: 95, s: 100 },
      { c: '#C65D3B', o: 0.2, x: 60, y: 135, s: 80 },
      { c: '#6B7A4B', o: 0.16, x: -10, y: 160, s: 95 },
    ];
    $('.layer--far').innerHTML = blobs.map((b) =>
      `<div class="blob" style="--c:${b.c};--o:${b.o};left:${b.x}vw;top:${b.y}vh;width:${b.s}vmax;height:${b.s}vmax"></div>`
    ).join('');

    const ICONS = {
      heart: '<path d="M32 54S8 40.5 8 24.5A12.5 12.5 0 0 1 32 19a12.5 12.5 0 0 1 24 5.5C56 40.5 32 54 32 54z"/>',
      lemon: '<path d="M10 33c0-12.7 10.3-21 23-21 5 0 9.6 1.4 13.2 4l5.3-2.6-1.2 6c3 3.8 4.7 8.4 4.7 13.6 0 12.7-10.3 21-23 21-5.2 0-10-1.5-13.7-4.2L12.6 52l1.3-5.8C11.4 42.6 10 38 10 33z"/><path d="M33 12c1-4.5 4.6-7.5 9.5-8-1 4.6-4.6 7.6-9.5 8z"/>',
      cup: '<path d="M12 28h32v8c0 8.8-7.2 16-16 16s-16-7.2-16-16z"/><path d="M44 31h3.5a6.5 6.5 0 0 1 0 13H42"/><path d="M8 56h40"/><path d="M22 10c-3 3.5 3 6.5 0 10M31 8c-3 3.5 3 6.5 0 10"/>',
      vespa: '<circle cx="15" cy="46" r="7"/><circle cx="50" cy="46" r="7"/><path d="M8 45c0-9 6.5-15 16-15h11l4 12H22"/><path d="M42 46l-4-26"/><path d="M33 19h11"/><path d="M43 39c3-4.5 9.5-5 13 0"/><path d="M20 30c1.5-3.5 5-5.5 9-5.5"/>',
      pizza: '<path d="M32 58L9 15c15-7 31-7 46 0z"/><path d="M12.5 21c12.5-5.5 26.5-5.5 39 0"/><circle cx="29" cy="29" r="3.2"/><circle cx="38" cy="38" r="2.6"/><circle cx="27" cy="42" r="2.6"/>',
      sparkle: '<path d="M32 6c2 14 6 20 26 26-20 6-24 12-26 26-2-14-6-20-26-26 20-6 24-12 26-26z"/>',
    };
    const deco = (name, { x, y, s, stroke, o, fill }) =>
      `<div class="deco${fill ? ' deco--fill' : ''}" style="left:${x}vw;top:${y}vh;--s:${s}px;--stroke:${stroke};--o:${o}">` +
      `<span class="deco__float" style="--dur:${(7 + rnd() * 6).toFixed(1)}s;--delay:${(-rnd() * 8).toFixed(1)}s;--r0:${(-10 + rnd() * 8).toFixed(0)}deg;--r1:${(4 + rnd() * 10).toFixed(0)}deg;--dx:${(-10 + rnd() * 20).toFixed(0)}px">` +
      `<svg viewBox="0 0 64 64">${ICONS[name]}</svg></span></div>`;

    // Mid layer: small hearts
    let mid = '';
    for (let i = 0; i < 12; i++) {
      const filled = rnd() > 0.45;
      mid += deco('heart', {
        x: 3 + rnd() * 88, y: 5 + i * 16 + rnd() * 8, s: 12 + rnd() * 16,
        stroke: filled ? '#F2B8B5' : '#C65D3B', o: filled ? 0.85 : 0.35, fill: filled,
      });
    }
    $('.layer--mid').innerHTML = mid;

    // Near layer: Italian line icons
    const near = ['lemon', 'cup', 'vespa', 'pizza', 'sparkle', 'lemon', 'cup', 'vespa', 'sparkle', 'pizza', 'heart'];
    const colors = ['#C65D3B', '#6B7A4B', '#2B1D14'];
    $('.layer--near').innerHTML = near.map((n, i) => deco(n, {
      x: (i % 2 ? 62 : 4) + rnd() * 26, y: 8 + i * 24 + rnd() * 10, s: 34 + rnd() * 22,
      stroke: n === 'sparkle' ? '#C65D3B' : colors[i % 3], o: n === 'sparkle' ? 0.5 : 0.32,
      fill: n === 'sparkle',
    })).join('');

    // Rain + rising hearts for the rating moods
    let rain = '';
    for (let i = 0; i < 38; i++) {
      rain += `<i style="left:${(rnd() * 112).toFixed(1)}vw;--d:${(0.55 + rnd() * 0.45).toFixed(2)}s;--delay:${(-rnd() * 2).toFixed(2)}s;--y:${(rnd() * 100).toFixed(0)}"></i>`;
    }
    $('.rain').innerHTML = rain;
    const hearts = ['💗', '💕', '💘', '❤️', '💞'];
    let hs = '';
    for (let i = 0; i < 18; i++) {
      hs += `<i style="left:${(rnd() * 96).toFixed(1)}vw;--fs:${(16 + rnd() * 20).toFixed(0)}px;--d:${(5 + rnd() * 4).toFixed(1)}s;--delay:${(-rnd() * 9).toFixed(1)}s;--dx:${(-30 + rnd() * 60).toFixed(0)}px;--rot:${(-30 + rnd() * 60).toFixed(0)}deg;--y:${(rnd() * 90).toFixed(0)}">${hearts[i % hearts.length]}</i>`;
    }
    $('.hearts-rise').innerHTML = hs;
  }

  function renderQuiz() {
    QUESTIONS.forEach((q) => {
      const i = q.options.findIndex((o) => String(o).trim() === String(q.answer).trim());
      if (i < 0) console.warn('[CONFIG] Answer not found in options for:', q.question);
      q._correct = Math.max(0, i);
    });

    const keys = 'ABCDEF';
    const html = QUESTIONS.map((q, i) => `
      <section class="scene scene--tall scene--q" id="q${i + 1}" data-index="${i}">
        <div class="stage">
          <div class="card-wrap">
            <article class="card card--q" aria-labelledby="q${i + 1}-title">
              <div class="qsticker" aria-hidden="true"></div>
              <p class="eyebrow"><span>${esc(CONFIG.quiz.eyebrow)} ${pad2(i + 1)}</span><span aria-hidden="true">·</span><span>${fmt(CONFIG.quiz.title)}</span></p>
              <h2 class="card__title" id="q${i + 1}-title">${fmt(q.question)}</h2>
              <div class="options" role="group" aria-label="Answers">
                ${q.options.map((o, j) => `
                  <button class="option" type="button" data-j="${j}">
                    <span class="option__key" aria-hidden="true">${keys[j]}</span>
                    <span class="option__label">${fmt(o)}</span>
                  </button>`).join('')}
              </div>
              <div class="feedback">
                <p class="feedback__line" aria-live="polite"></p>
                <button class="btn btn--dark btn--block btn--next" type="button"></button>
              </div>
            </article>
          </div>
        </div>
      </section>`).join('');
    $('#result').insertAdjacentHTML('beforebegin', html);

    $('.pill__dots').innerHTML = QUESTIONS.map(() => '<i></i>').join('');
    $('.result__total').textContent = TOTAL;
  }

  function renderRating() {
    $('.slider__ticks').innerHTML = Array.from({ length: 11 }, () => '<i></i>').join('');
    $('.lock').textContent = CONFIG.rating.lockLabel;
  }

  function renderBuildUp() {
    $('.build__lines').innerHTML = CONFIG.buildUp.lines.map((l) =>
      `<p class="bline${l.style ? ' bline--' + l.style : ''}"><span class="bline__text"></span>${l.note ? '<span class="bline__note"></span>' : ''}</p>`
    ).join('');
    updateBuildUp();
  }
  function updateBuildUp() {
    const low = state.score < CONFIG.result.goodFrom;
    $$('.bline').forEach((el, i) => {
      const l = CONFIG.buildUp.lines[i];
      $('.bline__text', el).innerHTML = fmt(low && l.lowScoreText ? l.lowScoreText : l.text);
      const note = $('.bline__note', el);
      if (note) note.innerHTML = fmt(l.note);
    });
  }

  function renderFinale() {
    const F = CONFIG.finale;
    const y = EVENT.getFullYear(), m = EVENT.getMonth(), target = EVENT.getDate();
    $('.cal__month').textContent = fmtDate(EVENT, { month: 'long' });
    $('.cal__it').textContent = fmtDate(EVENT, { month: 'long' }, 'it-IT');
    $('.cal__year').textContent = y;

    const first = (new Date(y, m, 1).getDay() + 6) % 7; // Monday-first
    const days = new Date(y, m + 1, 0).getDate();
    let g = F.weekdays.map((d) => `<span class="cal__dow" aria-hidden="true">${esc(d)}</span>`).join('');
    for (let i = 0; i < first; i++) g += '<span class="cal__day" aria-hidden="true"></span>';
    for (let d = 1; d <= days; d++) {
      const col = (first + d - 1) % 7;
      const cls = ['cal__day'];
      if (col >= 5) cls.push('is-weekend');
      if (d === target) cls.push('is-target');
      g += `<span class="${cls.join(' ')}">${d}${d === target
        ? '<svg class="cal__circle" viewBox="0 0 100 84" aria-hidden="true"><path d="M72 9C54 1 19 5 9 31c-9 27 21 47 51 44 29-3 41-27 31-48C85 13 69 5 48 8"/></svg>'
        : ''}</span>`;
    }
    $('.cal__grid').innerHTML = g;
    $('.cal').insertAdjacentHTML('beforeend', `<span class="cal__stamp" aria-hidden="true">${esc(F.stamp)}</span>`);
    $('.cal').setAttribute('aria-label', `Calendar: ${fmtDate(EVENT, { month: 'long', year: 'numeric' })}, the ${ordinal(target)} is circled`);

    $('.ask__title').innerHTML = fmt(F.headline);
    $('.ask__sub').innerHTML = fmt(F.subtext);
    $('.ask__fine').innerHTML = fmt(F.fine);
    $('.yes').textContent = F.yes;
    $('.no').textContent = F.no;

    const S = F.success;
    $('.success__title').innerHTML = fmt(S.title);
    $('.success__reluctant').innerHTML = fmt(S.reluctant);
    $('.ics').textContent = S.calendarBtn;
    $('.wa').textContent = tpl(S.whatsappBtn);
    $('.foot p').innerHTML = fmt(F.footer);

    const path = $('.cal__circle path');
    if (path && MOTION) {
      const len = path.getTotalLength ? path.getTotalLength() : 300;
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
    }
  }

  /* ---------- 6. Scroll controller (Lenis or native) + locking ------------ */
  const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  const Scroller = {
    lenis: null,
    locked: false,
    settled: false,
    lockY: 0,
    raf: 0,

    init() {
      if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);

      if (MOTION && typeof window.Lenis === 'function') {
        this.lenis = new window.Lenis({ lerp: 0.1, smoothWheel: true, wheelMultiplier: 0.9 });
        this.lenis.on('scroll', window.ScrollTrigger.update);
        window.gsap.ticker.add((t) => this.lenis.raf(t * 1000));
        window.gsap.ticker.lagSmoothing(0);
      }

      // While locked, block finger and wheel scrolling (except on the slider).
      // These listeners are only attached while locked so normal scrolling
      // stays on the browser's fast path.
      this.blockTouch = (e) => {
        if (!(e.target.closest && e.target.closest('.slider'))) e.preventDefault();
      };
      this.blockWheel = (e) => e.preventDefault();
    },

    y() { return window.pageYOffset || document.documentElement.scrollTop || 0; },

    to(y, { duration = 1.4, force = false, onComplete } = {}) {
      y = Math.max(0, Math.round(y));
      if (this.lenis) {
        this.lenis.scrollTo(y, { duration, force, easing: easeInOutCubic, onComplete });
        return;
      }
      cancelAnimationFrame(this.raf);
      const from = this.y(), dist = y - from, ms = duration * 1000;
      if (!MOTION || Math.abs(dist) < 2) {
        window.scrollTo(0, y);
        if (onComplete) onComplete();
        return;
      }
      const t0 = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - t0) / ms);
        window.scrollTo(0, from + dist * easeInOutCubic(p));
        if (p < 1) this.raf = requestAnimationFrame(step);
        else if (onComplete) onComplete();
      };
      this.raf = requestAnimationFrame(step);
    },

    lock(y) {
      if (this.locked) return;
      this.locked = true;
      this.settled = false;
      this.lockY = y;
      root.classList.add('is-locked');
      document.addEventListener('touchmove', this.blockTouch, { passive: false });
      window.addEventListener('wheel', this.blockWheel, { passive: false });
      if (this.lenis) this.lenis.stop();
      this.to(y, { duration: 0.55, force: true, onComplete: () => { this.settled = true; } });
    },

    unlock() {
      if (!this.locked) return;
      this.locked = false;
      this.settled = false;
      root.classList.remove('is-locked');
      document.removeEventListener('touchmove', this.blockTouch, { passive: false });
      window.removeEventListener('wheel', this.blockWheel, { passive: false });
      if (this.lenis) this.lenis.start();
    },
  };

  /* Gates: scenes she can't scroll past until she's answered */
  const Gates = {
    list: [],
    add(el, isDone) { this.list.push({ el, isDone, top: 0 }); },
    current() { return this.list.find((g) => !g.isDone()); },
    check(y) {
      const g = this.current();
      if (g && y >= g.top - 2) Scroller.lock(g.top);
    },
  };

  /* Cached section positions (re-measured on resize / refresh) */
  const Sections = {
    measure() {
      const y = Scroller.y();
      const box = (el) => { const r = el.getBoundingClientRect(); return { top: r.top + y, bottom: r.bottom + y }; };
      this.q = $$('.scene--q').map(box);
      this.result = box($('#result'));
      this.rating = box($('#rating'));
      this.build = box($('#build'));
      this.finale = box($('#finale'));
      Gates.list.forEach((g) => { g.top = box(g.el).top; });
      if (Scroller.locked) {
        const g = Gates.current();
        if (g) { Scroller.lockY = g.top; window.scrollTo(0, g.top); }
      }
      update();
    },
  };

  /* Fit: scale each scene down so it always fits the screen height
     (short laptop windows, small phones, in-app browsers). */
  const Fit = {
    /** Height a card will need, including the answer feedback that appears later */
    natural(target) {
      const card = target.querySelector('.card--q');
      const fb = card && $('.feedback', card);
      let restore = null;
      if (fb && !fb.classList.contains('is-on')) {
        const line = $('.feedback__line', fb), next = $('.btn--next', fb);
        const q = QUESTIONS[+card.closest('.scene--q').dataset.index];
        const old = [line.innerHTML, next.textContent];
        const a = fmt(q.correctLine), b = fmt(q.wrongLine);
        fb.classList.add('is-on');
        line.innerHTML = a.length > b.length ? a : b;
        next.textContent = CONFIG.quiz.nextLabelWrong;
        restore = () => { fb.classList.remove('is-on'); line.innerHTML = old[0]; next.textContent = old[1]; };
      }
      // The score verdict is filled in later: measure with the longest one
      const verdict = $('.result__verdict', target);
      if (verdict && !verdict.textContent) {
        const R = CONFIG.result;
        verdict.innerHTML = fmt([R.perfect, R.good, R.low].sort((x, y) => y.length - x.length)[0]);
        const prev = restore;
        restore = () => { verdict.innerHTML = ''; if (prev) prev(); };
      }
      const h = target.offsetHeight + (card ? 26 : 0); // room for the sticker poking out
      if (restore) restore();
      return h;
    },

    run() {
      const H = window.innerHeight;
      $$('.stage').forEach((stage) => {
        const target = $('.card-wrap, .hero__inner, .build__inner', stage);
        if (!target) return;
        target.style.scale = '';
        target.style.marginTop = target.style.marginBottom = '';
        const cs = getComputedStyle(stage);
        let avail = Math.min(stage.clientHeight || H, H) - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
        if (target.classList.contains('hero__inner')) avail -= 64;            // scroll hint
        if (target.classList.contains('build__inner') && MOTION) avail /= 1.12; // camera push-in
        const h = this.natural(target);
        const s = h > 0 ? Math.min(1, avail / h) : 1;
        if (s < 0.995) {
          target.style.scale = s.toFixed(3);
          // Shrink the layout box too, so it stays centred and nothing scrolls
          const m = `${(-(h - h * s) / 2).toFixed(1)}px`;
          target.style.marginTop = target.style.marginBottom = m;
        }
      });
    },
  };

  /* Per-frame scroll work: locking, quiz pill, night mode, rating moods */
  let ticking = false;
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  let pillIndex = -1;
  function update() {
    ticking = false;
    if (!Sections.q) return;
    const y = Scroller.y(), H = window.innerHeight, c = y + H / 2;

    if (Scroller.locked) {
      if (Scroller.settled && Math.abs(y - Scroller.lockY) > 2) window.scrollTo(0, Scroller.lockY);
    } else {
      Gates.check(y);
    }

    // Header tag only shows on the opening screen
    root.classList.toggle('is-scrolled', y > H * 0.4);

    // Quiz pill
    const qi = Sections.q.findIndex((b) => c >= b.top && c < b.bottom);
    root.classList.toggle('in-quiz', qi >= 0);
    if (qi >= 0 && qi !== pillIndex) { pillIndex = qi; renderPill(); }

    // Night chrome during the build-up
    root.classList.toggle('is-night', c >= Sections.build.top && c < Sections.finale.top);

    // Rating moods only while the rating scene is on screen
    const inRating = c >= Sections.rating.top && c < Sections.rating.bottom;
    if (inRating !== Rating.inView) { Rating.inView = inRating; Rating.applyMood(); }

    // Progress bar for the no-GSAP version
    if (!MOTION) {
      const max = document.documentElement.scrollHeight - H;
      $('.progress__bar').style.transform = `scaleX(${max > 0 ? clamp(y / max, 0, 1) : 0})`;
    }
  }

  function renderPill() {
    const i = Math.max(0, pillIndex);
    $('.pill__text').textContent = tpl(CONFIG.ui.pill).replace('{n}', i + 1);
    $$('.pill__dots i').forEach((d, k) => {
      d.className = state.answers[k] === true ? 'is-right' : state.answers[k] === false ? 'is-wrong' : k === i ? 'is-now' : '';
    });
  }

  /* ---------- 7. Quiz ----------------------------------------------------- */
  function initQuiz() {
    $$('.scene--q').forEach((s, i) => {
      Gates.add(s, () => state.answers[i] !== undefined);
      $$('.option', s).forEach((b) => b.addEventListener('click', () => answer(i, +b.dataset.j)));
      $('.btn--next', s).addEventListener('click', () => {
        const next = s.nextElementSibling;
        if (next) Scroller.to(next.getBoundingClientRect().top + Scroller.y() + 2, { duration: 1.9 });
      });
    });
  }

  function answer(i, j) {
    if (state.answers[i] !== undefined) return;
    const q = QUESTIONS[i];
    const s = $$('.scene--q')[i];
    const card = $('.card', s);
    const btns = $$('.option', s);
    const correct = q._correct;
    const right = j === correct;

    state.answers[i] = right;
    if (right) state.score++;
    btns.forEach((b) => b.setAttribute('aria-disabled', 'true'));
    btns[j].classList.add(right ? 'is-correct' : 'is-wrong');
    renderPill();

    const holder = $('.qsticker', s);
    const base = right ? CONFIG.quiz.stickers.correct : CONFIG.quiz.stickers.wrong;
    const sticker = makeSticker({ src: base.src, emoji: right ? (q.correctEmoji || base.emoji) : (q.wrongEmoji || base.emoji) });
    holder.append(sticker);

    if (right) {
      btns.forEach((b, k) => { if (k !== j) b.classList.add('is-dim'); });
      animate(sticker, [
        { opacity: 0, transform: 'scale(0) rotate(-30deg)' },
        { opacity: 1, transform: 'scale(1.2) rotate(10deg)', offset: 0.55 },
        { transform: 'scale(.92) rotate(-4deg)', offset: 0.78 },
        { opacity: 1, transform: 'scale(1) rotate(6deg)' },
      ], { duration: 700, easing: 'cubic-bezier(.2,.9,.3,1)', fill: 'forwards' });
      animate(btns[j], [{ transform: 'scale(1)' }, { transform: 'scale(1.04)' }, { transform: 'scale(1)' }], { duration: 360, easing: 'ease-out' });
      confettiBurst(btns[j]);
      buzz(12);
    } else {
      animate(card, [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-11px) rotate(-1deg)' },
        { transform: 'translateX(10px) rotate(1deg)' },
        { transform: 'translateX(-7px) rotate(-.5deg)' },
        { transform: 'translateX(4px)' },
        { transform: 'translateX(0)' },
      ], { duration: 520, easing: 'ease-out' });
      animate(sticker, [
        { opacity: 0, transform: 'translateY(-90px) rotate(-25deg)' },
        { opacity: 1, transform: 'translateY(6px) rotate(10deg)', offset: 0.42 },
        { transform: 'translateY(0) rotate(-9deg)', offset: 0.6 },
        { transform: 'translateY(0) rotate(6deg)', offset: 0.74 },
        { transform: 'translateY(0) rotate(-4deg)', offset: 0.87 },
        { opacity: 1, transform: 'translateY(0) rotate(-6deg)' },
      ], { duration: 1150, easing: 'ease-out', fill: 'forwards' });
      buzz([40, 60, 40]);
      setTimeout(() => {
        btns[correct].classList.add('is-reveal');
        btns.forEach((b, k) => { if (k !== j && k !== correct) b.classList.add('is-dim'); });
        animate(btns[correct], [{ transform: 'scale(1)' }, { transform: 'scale(1.035)' }, { transform: 'scale(1)' }], { duration: 420 });
      }, 650);
    }

    const fb = $('.feedback', s);
    const line = $('.feedback__line', s);
    const next = $('.btn--next', s);
    setTimeout(() => {
      fb.classList.add('is-on');
      line.className = 'feedback__line ' + (right ? 'is-right' : 'is-wrong');
      line.innerHTML = fmt(right ? q.correctLine : q.wrongLine);
      next.textContent = i === TOTAL - 1 ? CONFIG.quiz.lastLabel : (right ? CONFIG.quiz.nextLabel : CONFIG.quiz.nextLabelWrong);
      fadeUp(line);
      fadeUp(next, 160);
      Scroller.unlock();
    }, right ? 420 : 900);
  }

  /* ---------- 8. Result --------------------------------------------------- */
  function runResult() {
    if (state.resultShown) return;
    state.resultShown = true;
    const R = CONFIG.result;
    const score = state.score;
    const verdict = score >= TOTAL ? R.perfect : score >= R.goodFrom ? R.good : R.low;
    $('.result__verdict').innerHTML = fmt(verdict);
    $('.result__dots').innerHTML = QUESTIONS.map((_, i) => {
      const ok = state.answers[i];
      return `<i class="${ok ? 'is-right' : 'is-wrong'}">${ok ? '✓' : '✗'}</i>`;
    }).join('');

    const num = $('.result__num');
    const reveal = () => {
      [$('.result__dots'), $('.result__verdict'), $('.result__hint')].forEach((el, k) => {
        if (MOTION) fadeUp(el, k * 220); else el.style.opacity = 1;
      });
      if (score >= TOTAL) setTimeout(() => confettiBurst(num, 80), 150);
      animate(num, [{ transform: 'scale(1)' }, { transform: 'scale(1.12)' }, { transform: 'scale(1)' }], { duration: 420, easing: 'ease-out' });
    };
    if (!MOTION || score === 0) { num.textContent = score; reveal(); return; }

    const t0 = performance.now(), dur = 1100 + score * 120;
    let last = -1;
    const step = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const v = Math.round((1 - Math.pow(1 - p, 3)) * score);
      if (v !== last) { last = v; num.textContent = v; if (v > 0) buzz(8); }
      if (p < 1) requestAnimationFrame(step); else reveal();
    };
    requestAnimationFrame(step);
  }

  /* ---------- 9. Rating slider -------------------------------------------- */
  const Rating = {
    el: null,
    pos: 1,
    value: 10,
    bucket: null,
    dragging: false,
    inView: false,
    rect: null,

    init() {
      this.el = $('.slider');
      this.value = clamp(Math.round(CONFIG.rating.startValue), 0, 10);
      this.pos = this.value / 10;
      this.el.style.setProperty('--p', this.pos);
      this.showValue(this.value, true);

      const el = this.el;
      el.addEventListener('pointerdown', (e) => {
        if (state.rating !== null) return;
        e.preventDefault();
        try { el.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
        this.dragging = true;
        el.classList.add('is-dragging');
        this.rect = el.getBoundingClientRect();
        this.move(e);
      });
      el.addEventListener('pointermove', (e) => { if (this.dragging) this.move(e); });
      const end = () => {
        if (!this.dragging) return;
        this.dragging = false;
        el.classList.remove('is-dragging');
        this.snap();
      };
      el.addEventListener('pointerup', end);
      el.addEventListener('pointercancel', end);
      el.addEventListener('lostpointercapture', end);

      el.addEventListener('keydown', (e) => {
        if (state.rating !== null) return;
        const map = { ArrowLeft: -1, ArrowDown: -1, ArrowRight: 1, ArrowUp: 1, PageDown: -2, PageUp: 2 };
        let v = this.value;
        if (e.key in map) v += map[e.key];
        else if (e.key === 'Home') v = 0;
        else if (e.key === 'End') v = 10;
        else return;
        e.preventDefault();
        this.setPos(clamp(v, 0, 10) / 10);
      });

      $('.lock').addEventListener('click', () => this.lockIn());
      Gates.add($('#rating'), () => state.rating !== null);
    },

    move(e) {
      const r = this.rect;
      this.setPos((e.clientX - r.left) / r.width);
    },

    setPos(p) {
      this.pos = clamp(p, 0, 1);
      this.el.style.setProperty('--p', this.pos.toFixed(4));
      const v = Math.round(this.pos * 10);
      if (v !== this.value) { this.value = v; this.showValue(v); }
    },

    /** Ease the thumb onto the nearest whole number */
    snap() {
      const from = this.pos, to = this.value / 10, t0 = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - t0) / 180);
        this.pos = from + (to - from) * (1 - Math.pow(1 - p, 3));
        this.el.style.setProperty('--p', this.pos.toFixed(4));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    },

    showValue(v, initial) {
      state.ratingValue = v;
      const valEl = $('.meter__value');
      valEl.textContent = v;
      this.el.setAttribute('aria-valuenow', v);
      if (!initial) {
        animate(valEl, [
          { transform: 'scale(1.3) rotate(-4deg)' },
          { transform: 'scale(.94) rotate(1deg)' },
          { transform: 'scale(1)' },
        ], { duration: 380, easing: 'cubic-bezier(.2,.9,.3,1)' });
        buzz(6);
      }
      const idx = STICKERS.findIndex((s) => v >= s.min && v <= s.max);
      const s = STICKERS[idx];
      if (s && s !== this.bucket) {
        this.bucket = s;
        this.swapSticker(s, idx);
        const cap = $('.meter__caption');
        cap.innerHTML = fmt(s.caption);
        this.el.setAttribute('aria-valuetext', `${v} out of 10. ${tpl(s.caption)}`);
        if (!initial) fadeUp(cap);
        this.applyMood();
      }
    },

    /** Pop the old sticker out and spring the new one in. Sadder = more dramatic. */
    swapSticker(s, idx) {
      const holder = $('.meter__sticker');
      $$('.sticker:not(.is-leaving)', holder).forEach((old) => {
        old.classList.add('is-leaving');
        const a = animate(old, [
          { opacity: 1, transform: old.dataset.t || 'scale(1)' },
          { opacity: 0, transform: 'scale(0) rotate(30deg)' },
        ], { duration: 220, easing: 'ease-in', fill: 'forwards' });
        if (a) a.onfinish = () => old.remove(); else old.remove();
      });

      const el = makeSticker(s);
      holder.append(el);
      const n = Math.max(1, STICKERS.length - 1);
      const drama = 1 - idx / n; // 1 = saddest
      const amp = 12 + drama * 30;
      const rest = (idx % 2 ? 6 : -6);
      el.dataset.t = `scale(1) rotate(${rest}deg)`;
      animate(el, [
        { opacity: 0, transform: `scale(0) rotate(${-amp}deg)` },
        { opacity: 1, transform: `scale(${1.16 + drama * 0.18}) rotate(${amp * 0.5}deg)`, offset: 0.5 },
        { transform: `scale(.93) rotate(${-amp * 0.25}deg)`, offset: 0.75 },
        { opacity: 1, transform: el.dataset.t },
      ], { duration: 620 + drama * 260, easing: 'cubic-bezier(.2,.9,.3,1)', fill: 'forwards' });

      // The saddest sticker keeps trembling
      if (s.mood === 'sad' && !REDUCED && el.animate) {
        el.animate([
          { transform: `rotate(${rest}deg) translateX(0)` },
          { transform: `rotate(${rest - 3}deg) translateX(-2px)` },
          { transform: `rotate(${rest + 3}deg) translateX(2px)` },
          { transform: `rotate(${rest}deg) translateX(0)` },
        ], { duration: 260, delay: 900, iterations: Infinity });
      }
    },

    applyMood() {
      const active = this.inView && state.rating === null;
      const mood = active && this.bucket ? this.bucket.mood || '' : '';
      root.classList.toggle('mood-sad', mood === 'sad');
      root.classList.toggle('mood-love', mood === 'love');
    },

    lockIn() {
      if (state.rating !== null) return;
      state.rating = this.value;
      this.el.setAttribute('aria-disabled', 'true');
      const btn = $('.lock');
      btn.textContent = CONFIG.rating.lockedLabel;
      btn.setAttribute('aria-disabled', 'true');
      this.applyMood();
      updateBuildUp();
      buzz([20, 40, 20]);
      if (state.rating >= 9) confettiBurst(btn, 60);
      Scroller.unlock();
      setTimeout(() => {
        const build = $('#build');
        Scroller.to(build.getBoundingClientRect().top + Scroller.y() + 2, { duration: 2.2 });
      }, 550);
    },
  };

  /* ---------- 10. Finale -------------------------------------------------- */
  const Finale = {
    offset: { x: 0, y: 0 },

    init() {
      const yes = $('.yes'), no = $('.no'), F = CONFIG.finale;
      yes.addEventListener('click', () => this.sayYes(false));

      // Touch: dodge on touchstart (before the tap can land)
      no.addEventListener('touchstart', (e) => {
        if (state.dodges < F.maxDodges) { e.preventDefault(); this.dodge(); }
      }, { passive: false });
      // Mouse: dodge as the cursor arrives (a bonus, not required)
      no.addEventListener('mouseenter', () => {
        if (!TOUCH && state.dodges < F.maxDodges) this.dodge();
      });
      // Keyboard / anything else
      no.addEventListener('click', () => {
        if (state.dodges < F.maxDodges) this.dodge();
        else this.sayYes(true);
      });

      $('.ics').addEventListener('click', downloadICS);
    },

    dodge() {
      const F = CONFIG.finale, no = $('.no');
      state.dodges++;
      buzz(25);
      this.jump();
      if (state.dodges >= F.maxDodges) {
        no.textContent = F.noGiveUp;
        no.classList.add('is-defeated');
      } else {
        no.textContent = F.noLabels[state.dodges - 1] || F.no;
      }
    },

    /** Jump the No button to a random on-screen spot that isn't on top of Yes */
    jump() {
      const no = $('.no'), yes = $('.yes');
      const r = no.getBoundingClientRect();
      const baseX = r.left - this.offset.x, baseY = r.top - this.offset.y;
      const yr = yes.getBoundingClientRect();
      const W = window.innerWidth, H = window.innerHeight, padX = 16;
      const topMin = 90, bottomMax = H - r.height - 24;
      let tx = r.left, ty = r.top;
      for (let k = 0; k < 30; k++) {
        tx = padX + Math.random() * Math.max(1, W - r.width - padX * 2);
        ty = topMin + Math.random() * Math.max(1, bottomMax - topMin);
        const overlapsYes = tx < yr.right + 12 && tx + r.width > yr.left - 12 && ty < yr.bottom + 12 && ty + r.height > yr.top - 12;
        const farEnough = Math.hypot(tx - r.left, ty - r.top) > 110;
        if (!overlapsYes && farEnough) break;
      }
      this.offset = { x: tx - baseX, y: ty - baseY };
      no.style.transform = `translate(${this.offset.x.toFixed(0)}px, ${this.offset.y.toFixed(0)}px) rotate(${(Math.random() * 10 - 5).toFixed(1)}deg)`;
    },

    sayYes(reluctant) {
      if (state.saidYes) return;
      state.saidYes = true;
      state.reluctant = reluctant;
      buzz([30, 50, 30, 50, 120]);
      bigConfetti();

      const S = CONFIG.finale.success;
      $('.success__days').innerHTML = fmt(S.days);
      $('.success__sub').innerHTML = fmt(S.sub);
      $('.success__reluctant').hidden = !reluctant;

      // WhatsApp link with the receipts
      let msg = tpl(reluctant ? CONFIG.whatsappMessageReluctant : CONFIG.whatsappMessage);
      if (CONFIG.whatsappAddStats) msg += tpl(CONFIG.whatsappStats);
      const num = String(CONFIG.whatsappNumber || '').replace(/\D/g, '');
      $('.wa').href = `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;

      // Stamp the calendar
      const stamp = $('.cal__stamp');
      stamp.style.opacity = 1;
      animate(stamp, [
        { opacity: 0, transform: 'translate(-50%, -50%) rotate(-14deg) scale(2.6)' },
        { opacity: 1, transform: 'translate(-50%, -50%) rotate(-14deg) scale(.92)', offset: 0.7 },
        { opacity: 1, transform: 'translate(-50%, -50%) rotate(-14deg) scale(1)' },
      ], { duration: 480, easing: 'cubic-bezier(.3,1.4,.5,1)', fill: 'forwards' });
      animate($('.cal'), [
        { transform: 'translateY(0)' }, { transform: 'translateY(6px) rotate(-.6deg)' }, { transform: 'translateY(0)' },
      ], { duration: 300, delay: 300, easing: 'ease-out' });

      // Swap the question for the celebration
      const ask = $('.ask'), success = $('.success');
      const showSuccess = () => {
        ask.hidden = true;
        success.hidden = false;
        animate(success, [
          { opacity: 0, transform: 'translateY(24px) scale(.97)' },
          { opacity: 1, transform: 'translateY(0) scale(1)' },
        ], { duration: 650, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'both' });
        startCountdown();
        if (MOTION) window.ScrollTrigger.refresh();
        Sections.measure();
        const top = success.getBoundingClientRect().top + Scroller.y();
        const target = top - Math.max(80, (window.innerHeight - success.offsetHeight) / 2);
        Scroller.to(Math.max(Scroller.y(), target), { duration: 1.1 });
      };
      const a = animate(ask, [{ opacity: 1 }, { opacity: 0, transform: 'translateY(-10px)' }], { duration: 280, fill: 'forwards' });
      if (a) a.onfinish = showSuccess; else showSuccess();
    },
  };

  function bigConfetti() {
    if (!window.confetti || REDUCED) return;
    const colors = CONFIG.confettiColors;
    const c = window.confetti;
    c({ particleCount: 170, spread: 100, startVelocity: 55, origin: { y: 0.62 }, colors, scalar: 1.1, zIndex: 80 });
    setTimeout(() => c({ particleCount: 120, spread: 140, startVelocity: 42, decay: 0.92, origin: { y: 0.5 }, colors, scalar: 0.9, zIndex: 80 }), 260);
    const end = Date.now() + 2400;
    (function frame() {
      c({ particleCount: 4, angle: 60, spread: 58, origin: { x: 0, y: 0.75 }, colors, zIndex: 80 });
      c({ particleCount: 4, angle: 120, spread: 58, origin: { x: 1, y: 0.75 }, colors, zIndex: 80 });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
    try {
      if (c.shapeFromText) {
        const heart = c.shapeFromText({ text: '💘', scalar: 2.2 });
        const pasta = c.shapeFromText({ text: '🍝', scalar: 2.2 });
        setTimeout(() => c({ shapes: [heart, pasta], scalar: 2.2, particleCount: 26, spread: 120, startVelocity: 38, origin: { y: 0.55 }, zIndex: 80 }), 450);
      }
    } catch (e) { /* older confetti: skip emoji shapes */ }
  }

  let countdownTimer = 0;
  function startCountdown() {
    const els = { d: $('[data-cd="d"]'), h: $('[data-cd="h"]'), m: $('[data-cd="m"]'), s: $('[data-cd="s"]') };
    const tick = () => {
      const ms = Math.max(0, EVENT.getTime() - Date.now());
      els.d.textContent = Math.floor(ms / 864e5).toLocaleString('en-GB');
      els.h.textContent = pad2(Math.floor(ms / 36e5) % 24);
      els.m.textContent = pad2(Math.floor(ms / 6e4) % 60);
      els.s.textContent = pad2(Math.floor(ms / 1e3) % 60);
    };
    tick();
    clearInterval(countdownTimer);
    countdownTimer = setInterval(tick, 1000);
  }

  /* .ics calendar file */
  function downloadICS() {
    const I = CONFIG.ics;
    const stamp = (d) => `${d.getFullYear()}${pad2(d.getMonth() + 1)}${pad2(d.getDate())}`;
    const local = (d) => `${stamp(d)}T${pad2(d.getHours())}${pad2(d.getMinutes())}00`;
    const icsText = (s) => String(s).replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
    const fold = (line) => {
      // RFC 5545: lines longer than 75 octets get folded
      const out = [];
      let rest = line;
      while (rest.length > 60) { out.push(rest.slice(0, 60)); rest = ' ' + rest.slice(60); }
      out.push(rest);
      return out.join('\r\n');
    };
    let start, end;
    if (HAS_TIME) {
      const e = new Date(EVENT.getTime() + (CONFIG.date.durationHours || 3) * 36e5);
      start = `DTSTART:${local(EVENT)}`;
      end = `DTEND:${local(e)}`;
    } else {
      const e = new Date(EVENT.getFullYear(), EVENT.getMonth(), EVENT.getDate() + 1);
      start = `DTSTART;VALUE=DATE:${stamp(EVENT)}`;
      end = `DTEND;VALUE=DATE:${stamp(e)}`;
    }
    const now = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    const lines = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//A Very Serious Question//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${stamp(EVENT)}-${CONFIG.name.toLowerCase().replace(/\W/g, '')}@a-very-serious-question`,
      `DTSTAMP:${now}`, start, end,
      `SUMMARY:${icsText(tpl(I.title))}`,
      `LOCATION:${icsText(tpl(I.location))}`,
      `DESCRIPTION:${icsText(tpl(I.description))}`,
      'BEGIN:VALARM', 'TRIGGER:-P7D', 'ACTION:DISPLAY', `DESCRIPTION:${icsText(tpl(I.alarm))}`, 'END:VALARM',
      'END:VEVENT', 'END:VCALENDAR',
    ].map(fold);
    const ics = lines.join('\r\n') + '\r\n';
    const fileName = tpl(I.fileName).toLowerCase().replace(/\s+/g, '-');

    // iOS Safari opens the "Add to Calendar" sheet for a calendar data URL
    if (IOS) {
      window.location.href = 'data:text/calendar;charset=utf-8,' + encodeURIComponent(ics);
      return;
    }
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
    buzz(15);
  }

  /* ---------- 11. Music (off by default) ----------------------------------- */
  const Music = {
    on: false,
    ctx: null,
    timer: 0,
    step: 0,
    next: 0,

    ui(on) {
      const b = $('.sound');
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.setAttribute('aria-label', on ? 'Pause background music' : 'Play background music');
    },

    toggle() { if (this.on) this.stop(); else this.start(); },

    start() {
      this.on = true;
      this.ui(true);
      if (CONFIG.music.src) {
        if (!this.audio) {
          this.audio = new Audio(CONFIG.music.src);
          this.audio.loop = true;
          this.audio.volume = CONFIG.music.volume;
        }
        this.audio.play().catch(() => { this.on = false; this.ui(false); });
        return;
      }
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) { this.on = false; this.ui(false); return; }
      if (!this.ctx) this.build(AC);
      this.ctx.resume();
      const t = this.ctx.currentTime;
      const g = this.master.gain;
      g.cancelScheduledValues(t);
      g.setValueAtTime(g.value, t);
      g.linearRampToValueAtTime(CONFIG.music.volume * 0.34, t + 1.4);
      this.next = t + 0.08;
      clearInterval(this.timer);
      this.timer = setInterval(() => this.schedule(), 90);
    },

    stop() {
      this.on = false;
      this.ui(false);
      if (this.audio) { this.audio.pause(); return; }
      if (!this.ctx) return;
      const t = this.ctx.currentTime, g = this.master.gain;
      g.cancelScheduledValues(t);
      g.setValueAtTime(g.value, t);
      g.linearRampToValueAtTime(0, t + 0.6);
      setTimeout(() => { if (!this.on) { clearInterval(this.timer); this.ctx.suspend(); } }, 700);
    },

    /** Soft music box: triangle plucks through a gentle echo and a low-pass */
    build(AC) {
      const ctx = (this.ctx = new AC());
      this.master = ctx.createGain();
      this.master.gain.value = 0;
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 2800;
      this.bus = ctx.createGain();
      const delay = ctx.createDelay();
      delay.delayTime.value = 0.36;
      const fb = ctx.createGain();
      fb.gain.value = 0.3;
      const wet = ctx.createGain();
      wet.gain.value = 0.32;
      this.bus.connect(this.master);
      this.bus.connect(delay);
      delay.connect(fb);
      fb.connect(delay);
      delay.connect(wet);
      wet.connect(this.master);
      this.master.connect(lp);
      lp.connect(ctx.destination);
    },

    schedule() {
      const beat = 0.3; // a slow 3/4 waltz, six eighth-notes per bar
      while (this.next < this.ctx.currentTime + 0.35) {
        this.play(this.step, this.next);
        this.next += beat;
        this.step++;
      }
    },

    play(i, t) {
      const PROG = [[65, 69, 72, 76], [64, 67, 69, 72], [62, 65, 69, 72], [60, 64, 67, 70]]; // Fmaj7 Am7 Dm7 C7
      const BASS = [53, 57, 50, 48];
      const PATTERN = [0, 1, 2, 3, 2, 1];
      const bar = Math.floor(i / 6), k = i % 6, c = Math.floor(bar / 2) % 4;
      const note = PROG[c][PATTERN[k]] + (bar % 2 && k === 3 ? 12 : 0);
      this.pluck(note, t, k === 0 ? 0.2 : 0.12, 1.7, 'triangle');
      if (k === 0) this.pluck(BASS[c], t, 0.18, 2.6, 'sine');
    },

    pluck(midi, t, vel, dur, type) {
      const ctx = this.ctx;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = type;
      o.frequency.value = 440 * Math.pow(2, (midi - 69) / 12);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vel, t + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g);
      g.connect(this.bus);
      o.start(t);
      o.stop(t + dur + 0.05);
    },
  };

  /* ---------- 12. Motion: GSAP + ScrollTrigger ----------------------------- */
  function setupMotion() {
    const gsap = window.gsap, ST = window.ScrollTrigger;
    gsap.registerPlugin(ST);
    ST.config({ ignoreMobileResize: true });
    const H = () => window.innerHeight;

    // Top progress bar
    gsap.to('.progress__bar', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });

    // The camera slowly pushes forward through the background layers
    gsap.to('.world__cam', { scale: 1.28, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 1 } });
    $$('.layer').forEach((layer) => {
      const depth = parseFloat(layer.dataset.depth) || 0.5;
      gsap.to(layer, {
        y: () => -depth * H(), ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 1, invalidateOnRefresh: true },
      });
    });

    // Scene 0: intro, word by word
    const intro = gsap.timeline({ delay: 0.35 });
    $$('.hero__line').forEach((line, i) => {
      intro.fromTo($$('.word', line),
        { opacity: 0, y: 34, rotateX: -50, filter: 'blur(10px)' },
        { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out', stagger: 0.075, clearProps: 'filter' },
        i === 0 ? 0 : '>-0.35');
      if (i === 0) intro.add(() => { const w = $('.wave'); if (w) w.classList.add('is-waving'); }, '>-0.2');
    });
    intro.to('.hero__meta', { opacity: 1, duration: 0.8 }, '>-0.2')
      .to('.hero__hint', { opacity: 1, duration: 0.8 }, '<');

    // Scene 0 → 1: zoom through the hero (scale + blur + depth)
    gsap.timeline({ scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom bottom', scrub: 0.6 } })
      .fromTo('.hero__hint', { opacity: 1 }, { opacity: 0, duration: 0.12, immediateRender: false }, 0)
      .fromTo('.hero__inner',
        { z: 0, opacity: 1, filter: 'blur(0px)' },
        { z: 460, opacity: 0, filter: `blur(${TOUCH ? 6 : 12}px)`, ease: 'power2.in', duration: 1, immediateRender: false }, 0);

    // Scenes 1–7: cards fly in from depth, hold (she answers), then fly past the camera
    $$('.scene--q, #result, #rating').forEach((s, i) => {
      const wrap = $('.card-wrap', s), card = $('.card', s);
      const isQ = s.classList.contains('scene--q');
      const dir = i % 2 ? 1 : -1;
      gsap.timeline({ scrollTrigger: { trigger: s, start: 'top bottom', end: 'bottom bottom', scrub: 0.7 } })
        .fromTo(wrap,
          { z: -1100, rotateX: 30, rotateY: isQ ? 18 * dir : 0, rotateZ: isQ ? -4 * dir : 0, y: 90 },
          { z: 0, rotateX: 0, rotateY: 0, rotateZ: 0, y: 0, ease: 'power3.out', duration: 1 })
        .fromTo(card, { opacity: 0 }, { opacity: 1, ease: 'power1.out', duration: 0.55 }, 0)
        .to({}, { duration: 0.2 })
        .to(wrap, { z: 520, rotateX: -10, y: -30, ease: 'power2.in', duration: 0.8 })
        .to(card, { opacity: 0, ease: 'power1.in', duration: 0.4 }, '-=0.4');
    });

    ST.create({ trigger: '#result', start: 'top 20%', onEnter: runResult });

    // Scene 8: lights go down, lines appear one by one, camera keeps pushing in
    const night = $('.night'), vig = $('.vignette');
    const dark = { trigger: '#build', start: 'top bottom', end: 'top top', scrub: true };
    gsap.fromTo(night, { opacity: 0 }, { opacity: 1, ease: 'none', scrollTrigger: dark });
    gsap.fromTo(vig, { opacity: 0.35 }, { opacity: 0.95, ease: 'none', scrollTrigger: dark });

    const lines = $$('.bline');
    const bt = gsap.timeline({ scrollTrigger: { trigger: '#build', start: 'top top', end: 'bottom bottom', scrub: 0.8 } });
    const total = lines.length + 1.6;
    bt.fromTo('.build__inner', { scale: 0.9 }, { scale: 1.12, ease: 'none', duration: total }, 0);
    lines.forEach((l, i) => {
      const at = 0.3 + i;
      bt.fromTo(l, { opacity: 0, y: 40, filter: 'blur(10px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7, ease: 'power2.out' }, at);
      if (i > 0) bt.to(lines.slice(0, i), { opacity: 0.3, duration: 0.5, ease: 'none' }, at);
    });
    bt.to('.build__inner', { opacity: 0, filter: 'blur(8px)', duration: 0.6, ease: 'power1.in' }, total - 0.6);

    // Scene 9: lights back on, calendar page flips in
    const lightsOn = { trigger: '#finale', start: 'top bottom', end: 'top 30%', scrub: true };
    gsap.fromTo(night, { opacity: 1 }, { opacity: 0, ease: 'none', immediateRender: false, scrollTrigger: lightsOn });
    gsap.fromTo(vig, { opacity: 0.95 }, { opacity: 0.3, ease: 'none', immediateRender: false, scrollTrigger: lightsOn });

    gsap.set('.cal', { rotateX: -105, y: -30, opacity: 0 });
    gsap.set('.cal__note', { y: 10 });
    ST.create({ trigger: '#finale', start: 'top 45%', onEnter: finaleIntro });

    ST.addEventListener('refreshInit', () => Fit.run());
    ST.addEventListener('refresh', () => Sections.measure());
    window.addEventListener('load', () => ST.refresh());
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ST.refresh());
    ST.refresh();
  }

  function finaleIntro() {
    if (state.finaleShown) return;
    state.finaleShown = true;
    const gsap = window.gsap;
    gsap.timeline()
      .to('.cal', { rotateX: 0, y: 0, opacity: 1, duration: 1.5, ease: 'elastic.out(1, 0.75)' })
      .to('.cal__circle path', { strokeDashoffset: 0, duration: 1, ease: 'power2.inOut' }, '-=0.75')
      .to('.cal__note', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')
      .fromTo('.ask > *',
        { opacity: 0, y: 26, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, stagger: 0.14, ease: 'power3.out', clearProps: 'filter,transform' },
        '-=1.1');
  }

  /* ---------- 13. Reduced motion: simple fades ----------------------------- */
  function setupReduced() {
    const targets = $$('.hero__inner, .card, .bline, .cal-wrap, .ask > *');
    targets.forEach((t) => t.classList.add('reveal'));
    if (!('IntersectionObserver' in window)) {
      targets.forEach((t) => t.classList.add('is-in'));
      runResult();
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      });
    }, { threshold: 0.15 });
    targets.forEach((t) => io.observe(t));

    const once = (el, fn, threshold = 0.4) => {
      const o = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) { fn(); o.disconnect(); }
      }, { threshold });
      o.observe(el);
    };
    once($('.card--result'), runResult);

    const refit = () => { Fit.run(); Sections.measure(); };
    let t;
    window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(refit, 150); });
    window.addEventListener('load', refit);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(refit);
  }

  /* ---------- 14. Init ----------------------------------------------------- */
  function init() {
    renderCopy();
    renderHero();
    renderWorld();
    renderQuiz();
    renderRating();
    renderBuildUp();
    renderFinale();

    Scroller.init();
    initQuiz();
    Rating.init();
    Finale.init();

    $('.sound').addEventListener('click', () => Music.toggle());
    document.addEventListener('visibilitychange', () => {
      if (!Music.on) return;
      if (document.hidden) { if (Music.audio) Music.audio.pause(); else if (Music.ctx) Music.ctx.suspend(); }
      else if (Music.audio) Music.audio.play().catch(() => {});
      else if (Music.ctx) Music.ctx.resume();
    });

    window.addEventListener('scroll', onScroll, { passive: true });

    Fit.run();
    if (MOTION) setupMotion(); else setupReduced();
    Sections.measure();

    // Lazy: preload reaction stickers once the page has settled
    const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 1200));
    window.addEventListener('load', () => idle(preloadStickers));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
