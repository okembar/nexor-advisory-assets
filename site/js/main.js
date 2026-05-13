// NEXOR Advisory — main.js

// ── Mobile menu ──────────────────────────────────────────────
(function() {
  const btn = document.querySelector('.nav-mobile-btn');
  const links = document.querySelector('.nav-links');
  const cta = document.querySelector('.nav-cta');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    if (open) {
      links && (links.style.cssText = 'display:flex;flex-direction:column;position:fixed;top:64px;left:0;right:0;background:rgba(6,4,17,.97);padding:24px 20px;gap:8px;border-bottom:1px solid rgba(124,58,237,.2);z-index:99;backdrop-filter:blur(20px)');
      cta && (cta.style.cssText = 'display:block;margin:12px 20px 0;text-align:center');
      // Animate bars
      const bars = btn.querySelectorAll('span');
      if (bars[0]) bars[0].style.transform = 'rotate(45deg) translate(5px,5px)';
      if (bars[1]) bars[1].style.opacity = '0';
      if (bars[2]) bars[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
    } else {
      links && (links.style.cssText = '');
      cta && (cta.style.cssText = '');
      const bars = btn.querySelectorAll('span');
      bars.forEach(b => b.style.cssText = '');
    }
  });
})();

// ── Scroll reveal ─────────────────────────────────────────────
(function() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
})();

// ── Nav scroll effect ─────────────────────────────────────────
(function() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const update = () => {
    if (window.scrollY > 20) {
      nav.style.background = 'rgba(6,4,17,.95)';
      nav.style.borderBottomColor = 'rgba(124,58,237,.25)';
    } else {
      nav.style.background = 'rgba(6,4,17,.85)';
      nav.style.borderBottomColor = 'rgba(124,58,237,.18)';
    }
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// ── Contact form submission ────────────────────────────────────
(function() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const msg = document.getElementById('form-msg');
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Envoi en cours…';
    btn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        msg && (msg.style.cssText = 'display:block;padding:14px 18px;background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.3);border-radius:10px;color:#10B981;font-size:12px;margin-top:16px;');
        msg && (msg.textContent = '✓ Message envoyé — nous vous répondons sous 24h.');
        form.reset();
        btn.textContent = 'Message envoyé ✓';
      } else {
        throw new Error();
      }
    } catch {
      btn.textContent = 'Envoyer le message';
      btn.disabled = false;
      msg && (msg.style.cssText = 'display:block;padding:14px 18px;background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.2);border-radius:10px;color:#EF4444;font-size:12px;margin-top:16px;');
      msg && (msg.textContent = 'Erreur d\'envoi. Contactez-nous directement à contact@nexoradvisory.fr');
    }
  });
})();

// ── Smooth number counter ──────────────────────────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1400;
  const start = performance.now();
  const frame = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target) + (el.dataset.suffix || '');
    if (progress < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}
(function() {
  const counters = document.querySelectorAll('[data-target]');
  if (!counters.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
})();
