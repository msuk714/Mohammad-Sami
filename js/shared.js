/* ═══════════════════════════════
   SHARED JS — Mohammad Sami SEO
═══════════════════════════════ */

// Google font
(function(){
  const l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap';
  document.head.appendChild(l);
})();

// Nav hamburger
document.addEventListener('DOMContentLoaded', () => {
  const hb = document.getElementById('hamburger');
  const nl = document.getElementById('navLinks');
  if (hb && nl) hb.addEventListener('click', () => nl.classList.toggle('open'));

  // Active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Reveal on scroll
  const ro = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        ro.unobserve(e.target);
      }
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

  // Counter animation
  const co = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      let n = 0;
      const step = Math.ceil(target / 60);
      const t = setInterval(() => {
        n = Math.min(n + step, target);
        el.textContent = n.toLocaleString() + suffix;
        if (n >= target) clearInterval(t);
      }, 20);
      co.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => co.observe(el));
});

/* ─ GSC MODAL ─
   ─────────────────────────────────────────────
   HOW TO ADD GSC SCREENSHOTS:
   Option A — Google Drive image link:
     1. Upload screenshot to Google Drive
     2. Share → Anyone with link
     3. Copy link: drive.google.com/file/d/FILE_ID/view
     4. Convert to: drive.google.com/uc?export=view&id=FILE_ID
     5. Paste into url field below

   Option B — Direct HTML embed link:
     Set type: 'iframe' and url to the embed URL
     (e.g. from your Google Sheet)
   ─────────────────────────────────────────────*/

const GSC_SCREENSHOTS = {
  // ── CURRENT PROJECTS (GSC verified) ──
  'roman': {
    title: 'Roman Electric Co., Inc. — GSC Data',
    sub: 'Aug–Dec 2025 (Before) vs Dec 2025–Apr 2026 (After) · Impressions +105.3% · Clicks +10%',
    type: 'img',   // 'img' or 'iframe'
    url: 'https://github.com/msuk714/Mohammad-Sami/blob/main/images/RomanElectricsPerformance.png'        // ← PASTE YOUR GOOGLE DRIVE DIRECT URL HERE
  },
  'signarama': {
    title: 'Milwaukee Signarama — GSC Data',
    sub: 'Aug–Dec 2025 (Before) vs Dec 2025–Apr 2026 (After) · Impressions +95.8% · Clicks +83.8%',
    type: 'img',
    url: ''        // ← PASTE YOUR GOOGLE DRIVE DIRECT URL HERE
  },
  'p2ezpay': {
    title: 'P2EzPay — GSC Data',
    sub: 'Aug–Dec 2025 (Before) vs Dec 2025–Apr 2026 (After) · Impressions +954% · Clicks +800%',
    type: 'img',
    url: ''        // ← PASTE YOUR GOOGLE DRIVE DIRECT URL HERE
  },
};

const WA_LINK = 'https://wa.me/923126540714';

function openGSC(key) {
  const d = GSC_SCREENSHOTS[key];
  if (!d) return;
  document.getElementById('gscModalTitle').textContent = d.title;
  document.getElementById('gscModalSub').textContent = d.sub;
  const body = document.getElementById('gscModalBody');

  let contentHTML = '';
  if (d.url && d.url.trim()) {
    if (d.type === 'iframe') {
      contentHTML = `<div class="modal-img-wrap" style="position:relative;">
        <iframe src="${d.url}" style="width:100%;height:80vh;border:none;border-radius:12px;display:block;" loading="lazy" title="${d.title}"></iframe>
        <div class="modal-watermark"><span>Mohammad Sami — Senior SEO Strategist</span></div>
      </div>`;
    } else {
      contentHTML = `<div class="modal-img-wrap">
        <img src="${d.url}" alt="${d.title}" loading="lazy" style="width:100%;display:block;border-radius:12px;"/>
        <div class="modal-watermark"><span>Mohammad Sami — Senior SEO Strategist</span></div>
      </div>`;
    }
  } else {
    contentHTML = `<div class="modal-placeholder">
      <div class="modal-ph-icon">📊</div>
      <div class="modal-ph-title">${d.title}</div>
      <div class="modal-ph-sub">GSC screenshot will appear here once the Drive link is added.<br/>Open <strong>shared.js</strong>, find key <strong style="color:var(--accent)">'${key}'</strong> and set the <code>url</code> field.</div>
      <div class="modal-ph-code">GSC_SCREENSHOTS['${key}'].url = 'YOUR_LINK_HERE';</div>
    </div>`;
  }

  // Append WhatsApp CTA below screenshot
  contentHTML += `<div class="modal-wa-cta">
    <span class="modal-wa-icon">💬</span>
    <div>
      <div class="modal-wa-title">Want results like this for your website?</div>
      <div class="modal-wa-sub">Let's discuss your SEO strategy — free consultation, no commitment.</div>
    </div>
    <a href="${WA_LINK}" target="_blank" class="modal-wa-btn">
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.05 1.5C6.19 1.5 1.5 6.19 1.5 12.05c0 1.85.49 3.59 1.35 5.09L1.5 22.5l5.53-1.3A10.54 10.54 0 0012.05 22.6C17.91 22.6 22.6 17.91 22.6 12.05S17.91 1.5 12.05 1.5zm0 19.14a8.6 8.6 0 01-4.45-1.23l-.32-.19-3.28.77.82-3.19-.21-.33A8.62 8.62 0 0112.05 3.44c4.75 0 8.61 3.86 8.61 8.61s-3.86 8.59-8.61 8.59z" fill-rule="evenodd"/></svg>
      Chat on WhatsApp
    </a>
  </div>`;

  body.innerHTML = contentHTML;
  document.getElementById('gscModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeGSC() {
  document.getElementById('gscModal').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeGSC(); });
