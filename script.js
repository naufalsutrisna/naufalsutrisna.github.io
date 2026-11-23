// ============================================
// Year
// ============================================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================
// Dark mode toggle
// ============================================
(function themeToggle() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

// ============================================
// Resume links (nav + hero) -> open RESUME_URL directly
// See RESUME_URL in projects-data.js
// ============================================
(function setResumeLinks() {
  if (typeof RESUME_URL === 'undefined' || !RESUME_URL || RESUME_URL.startsWith('PASTE_YOUR_')) return;
  document.querySelectorAll('[data-resume]').forEach(a => {
    a.href = RESUME_URL;
  });
})();

// ============================================
// Render Featured Projects
// ============================================
function renderFeaturedProjects() {
  const grid = document.getElementById('featuredGrid');
  if (!grid || typeof FEATURED_PROJECTS === 'undefined') return;

  grid.innerHTML = FEATURED_PROJECTS.map(p => `
    <article class="project-card">
      <div class="project-card__top">
        <h3>${p.title}</h3>
      </div>
      <p class="project-card__desc">${p.shortDescription}</p>
      <div class="project-card__actions">
        <button class="case-study-btn" data-project="${p.id}">View Project →</button>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.case-study-btn').forEach(btn => {
    btn.addEventListener('click', () => openCaseStudy(btn.dataset.project));
  });
}

// ============================================
// Case Study Modal
// ============================================
const caseStudyModal = document.getElementById('caseStudyModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function section(title, bodyHtml) {
  return `<div class="modal-section"><h4>${title}</h4>${bodyHtml}</div>`;
}

function openCaseStudy(id) {
  const p = FEATURED_PROJECTS.find(proj => proj.id === id);
  if (!p) return;

  const paras = (arr) => `<p>${(arr || []).join('<br><br>')}</p>`;

  let html = `
    <p class="modal-meta">${p.date}</p>
    <h3 class="modal-title" id="modalTitle">${p.title}</h3>
    <p class="modal-sub">${p.shortDescription}</p>
  `;

  if (p.metric) html += section('Outcome', `<p class="modal-result">${p.metric}</p>`);

  if (p.techStack && p.techStack.length) {
    html += section('Tech Stack', `<div class="tags">${p.techStack.map(t => `<span class="tag">${t}</span>`).join('')}</div>`);
  }

  if (p.problem && p.problem.length) html += section('The Problem', paras(p.problem));

  if ((p.built && p.built.length) || p.builtIntro) {
    const intro = p.builtIntro ? `<p>${p.builtIntro}</p><br>` : '';
    const items = (p.built && p.built.length)
      ? `<ul>${p.built.map(b => `<li><strong>${b.lead}</strong> ${b.text}</li>`).join('')}</ul>`
      : '';
    html += section('What I Built', intro + items);
  }

  if (p.result && p.result.length) html += section('Result', paras(p.result));

  const links = [];
  if (p.links.github) links.push(`<a href="${p.links.github}" target="_blank" rel="noopener" class="btn btn--ghost">GitHub ↗</a>`);
  if (p.links.demo) links.push(`<a href="${p.links.demo}" target="_blank" rel="noopener" class="btn btn--ghost">Demo ↗</a>`);
  if (p.links.publication) links.push(`<a href="${p.links.publication}" target="_blank" rel="noopener" class="btn btn--ghost">Publication ↗</a>`);
  if (links.length) html += section('Links', `<div class="modal-links">${links.join('')}</div>`);

  showInModal(html);
}

function showInModal(html) {
  modalContent.innerHTML = html;
  caseStudyModal.showModal();
}

// ============================================
// Research (cards + pop-up)
// ============================================
function renderResearch() {
  const grid = document.getElementById('researchGrid');
  if (!grid || typeof RESEARCH === 'undefined') return;

  grid.innerHTML = RESEARCH.map(r => `
    <article class="project-card">
      <div class="project-card__top">
        <h3>${r.title}</h3>
      </div>
      <p class="project-card__meta">${r.venueShort} · ${r.date}</p>
      <p class="project-card__desc">${r.shortDescription}</p>
      <div class="project-card__actions">
        <button class="case-study-btn" data-research="${r.id}">View Research →</button>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('[data-research]').forEach(btn => {
    btn.addEventListener('click', () => openResearch(btn.dataset.research));
  });
}

function openResearch(id) {
  const r = RESEARCH.find(item => item.id === id);
  if (!r) return;

  const paras = (arr) => `<p>${(arr || []).join('<br><br>')}</p>`;

  let html = `
    <p class="modal-meta">Research · ${r.date}</p>
    <h3 class="modal-title" id="modalTitle">${r.title}</h3>
    <p class="modal-sub">${r.venue}</p>
  `;

  if (r.metric) html += section('Outcome', `<p class="modal-result">${r.metric}</p>`);
  if (r.problem && r.problem.length) html += section('The Problem', paras(r.problem));
  if (r.approach && r.approach.length) {
    html += section('Approach', `<ul>${r.approach.map(a => `<li><strong>${a.lead}</strong> ${a.text}</li>`).join('')}</ul>`);
  }
  if (r.result && r.result.length) html += section('Result', paras(r.result));

  const links = [];
  if (r.links.paper) links.push(`<a href="${r.links.paper}" target="_blank" rel="noopener" class="btn btn--ghost">Paper ↗</a>`);
  if (r.links.github) links.push(`<a href="${r.links.github}" target="_blank" rel="noopener" class="btn btn--ghost">GitHub ↗</a>`);
  if (links.length) html += section('Links', `<div class="modal-links">${links.join('')}</div>`);

  showInModal(html);
}

if (modalClose) {
  modalClose.addEventListener('click', () => caseStudyModal.close());
}
if (caseStudyModal) {
  caseStudyModal.addEventListener('click', (e) => {
    const rect = caseStudyModal.getBoundingClientRect();
    const inDialog = rect.top <= e.clientY && e.clientY <= rect.bottom && rect.left <= e.clientX && e.clientX <= rect.right;
    if (!inDialog) caseStudyModal.close();
  });
}

renderFeaturedProjects();
renderResearch();

// ============================================
// Nav scroll state + active link
// ============================================
const nav = document.getElementById('nav');
const navLinks = document.getElementById('navLinks');
const navToggle = document.getElementById('navToggle');
const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.nav__links a');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const link = document.querySelector(`.nav__links a[href="#${entry.target.id}"]`);
    if (!link) return;
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(s => navObserver.observe(s));

// ============================================
// Mobile menu toggle
// ============================================
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============================================
// Scroll reveal
// ============================================
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// ============================================
// Back to top
// ============================================
document.getElementById('toTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================
// Hero signature: drifting node network
// (represents the "graph" at the heart of ML/AI work)
// ============================================
(function heroNetwork() {
  const container = document.getElementById('heroNet');
  if (!container) return;

  const canvas = document.createElement('canvas');
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let w, h, nodes;
  const NODE_COUNT = 46;
  const LINK_DIST = 130;
  const BLUE = '47, 93, 168';
  const NAVY = '11, 31, 61';

  function resize() {
    w = canvas.width = container.offsetWidth;
    h = canvas.height = container.offsetHeight;
  }

  function makeNodes() {
    nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1.6 + 0.8
    }));
  }

  function step() {
    ctx.clearRect(0, 0, w, h);

    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          const alpha = (1 - dist / LINK_DIST) * 0.22;
          ctx.strokeStyle = `rgba(${BLUE}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach(n => {
      ctx.fillStyle = `rgba(${NAVY}, 0.35)`;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    });

    if (!prefersReduced) requestAnimationFrame(step);
  }

  resize();
  makeNodes();
  step();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resize();
      makeNodes();
      if (prefersReduced) step();
    }, 200);
  });
})();
