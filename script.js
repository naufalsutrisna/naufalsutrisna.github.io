// ============================================
// Year
// ============================================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================
// Resume & Portfolio document links (resume.html)
// See RESUME_URL / PORTFOLIO_URL in projects-data.js
// ============================================
function driveDownloadUrl(viewUrl) {
  if (!viewUrl) return '';
  const match = viewUrl.match(/\/file\/d\/([^/]+)/);
  if (match) return `https://drive.google.com/uc?export=download&id=${match[1]}`;
  return viewUrl;
}

(function setDocumentLinks() {
  const isPlaceholder = (url) => !url || url.startsWith('PASTE_YOUR_');

  const cvView = document.getElementById('cvView');
  const cvDownload = document.getElementById('cvDownload');
  if (cvView && cvDownload && typeof RESUME_URL !== 'undefined' && !isPlaceholder(RESUME_URL)) {
    cvView.href = RESUME_URL;
    cvDownload.href = driveDownloadUrl(RESUME_URL);
  }

  const portfolioView = document.getElementById('portfolioView');
  const portfolioDownload = document.getElementById('portfolioDownload');
  if (portfolioView && portfolioDownload && typeof PORTFOLIO_URL !== 'undefined' && !isPlaceholder(PORTFOLIO_URL)) {
    portfolioView.href = PORTFOLIO_URL;
    portfolioDownload.href = driveDownloadUrl(PORTFOLIO_URL);
  }
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
        <span class="project-card__type">${p.type}</span>
      </div>
      <p class="project-card__desc">${p.shortDescription}</p>
      <div class="project-card__actions">
        <button class="case-study-btn" data-project="${p.id}">Case Study →</button>
        ${p.links.github ? `<a href="${p.links.github}" target="_blank" rel="noopener">GitHub ↗</a>` : ''}
        ${p.links.demo ? `<a href="${p.links.demo}" target="_blank" rel="noopener">Demo ↗</a>` : ''}
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

  let html = `
    <p class="modal-meta">${p.type} · ${p.date}</p>
    <h3 class="modal-title" id="modalTitle">${p.title}</h3>
    <p class="modal-sub">${p.shortDescription}</p>
  `;

  html += section('Overview', `<p>${p.overview}</p>`);

  if (p.problem) html += section('Problem', `<p>${p.problem}</p>`);
  if (p.approach) html += section('Approach', `<p>${p.approach}</p>`);

  if (p.architecture && p.architecture.length) {
    html += `<div class="modal-section modal-section--arch"><h4>Architecture</h4><ol>${p.architecture.map(step => `<li>${step}</li>`).join('')}</ol></div>`;
  }

  if (p.keyFeatures && p.keyFeatures.length) {
    html += section('Key Features', `<ul>${p.keyFeatures.map(f => `<li>${f}</li>`).join('')}</ul>`);
  }

  if (p.technicalImplementation) html += section('Technical Implementation', `<p>${p.technicalImplementation}</p>`);
  if (p.challenges) html += section('Challenges', `<p>${p.challenges}</p>`);
  if (p.results) html += section('Results', `<p class="modal-result">${p.results}</p>`);

  html += section('Tech Stack', `<div class="tags">${p.techStack.map(t => `<span class="tag">${t}</span>`).join('')}</div>`);

  const links = [];
  if (p.links.github) links.push(`<a href="${p.links.github}" target="_blank" rel="noopener" class="btn btn--ghost">GitHub ↗</a>`);
  if (p.links.demo) links.push(`<a href="${p.links.demo}" target="_blank" rel="noopener" class="btn btn--ghost">Demo ↗</a>`);
  if (p.links.publication) links.push(`<a href="${p.links.publication}" target="_blank" rel="noopener" class="btn btn--ghost">Publication ↗</a>`);
  if (links.length) html += section('Links', `<div class="modal-links">${links.join('')}</div>`);

  modalContent.innerHTML = html;
  caseStudyModal.showModal();
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
