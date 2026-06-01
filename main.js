// ── Scroll reveal ──
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => revealObserver.observe(el));

// ── Nav scroll shadow ──
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 40
    ? '0 2px 24px rgba(28,28,28,0.08)'
    : 'none';
});

// ── Mobile hamburger ──
const hamburger = document.querySelector('.nav-hamburger');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  nav.classList.toggle('mobile-open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    nav.classList.remove('mobile-open');
  });
});

// ── Gallery projects data ──
// Each project has a name and an array of before/after pairs.
// Add more projects here as { name, pairs: [{label, before, after}] }
const PROJECTS = [
  {
    name: "Ovronnaz",
    desc: "A complete transformation of a dated alpine apartment in Ovronnaz — every room reimagined, every surface reconsidered.",
    pairs: [
      {
        label: "Entrance",
        note: "The entrance was reconfigured to maximise the sense of arrival and eliminate wasted circulation space.",
        before: "images/ovronnaz/entrance-before.jpg",
        after:  "images/ovronnaz/entrance-after.jpg"
      },
      {
        label: "Living Room",
        note: "The living space was opened and refined — a lighter palette replacing the original heavy finishes.",
        before: "images/ovronnaz/living-room-before.jpg",
        after:  "images/ovronnaz/living-room-after.jpg"
      },
      {
        label: "Kitchen",
        note: "A full kitchen redesign — new layout, new materials, the worktop and cabinetry rebuilt from scratch.",
        before: "images/ovronnaz/kitchen-before-2.jpg",
        after:  "images/ovronnaz/kitchen-after-2.jpg"
      },
      {
        label: "Kitchen — Detail",
        note: "",
        before: "images/ovronnaz/kitchen-before-1.jpg",
        after:  "images/ovronnaz/kitchen-after-1.jpg"
      },
      {
        label: "Bedroom",
        note: "The bedroom was stripped back and rethought — calm, considered, and properly proportioned.",
        before: "images/ovronnaz/bedroom-before-1.jpg",
        after:  "images/ovronnaz/bedroom-after-1.jpg"
      },
      {
        label: "Bedroom — Second View",
        note: "",
        before: "images/ovronnaz/bedroom-before-2.jpg",
        after:  "images/ovronnaz/bedroom-after-2.jpg"
      },
      {
        label: "Corridor & Bathroom",
        note: "The corridor had significant lost space, and the bathroom was undersized. By pushing the walls, we created generous storage and a proper bathroom volume.",
        before: "images/ovronnaz/corridor-bathroom-before.jpg",
        after:  "images/ovronnaz/corridor-bathroom-after.jpg"
      },
      {
        label: "Bathroom",
        note: "A window onto the corridor was removed entirely — freeing the wall, clearing the space, and adding a bespoke reclaimed-wood shelf in its place.",
        before: "images/ovronnaz/bathroom-before.jpg",
        after:  "images/ovronnaz/bathroom-after.jpg"
      }
    ]
  }
];

let currentProject = 0;
let currentPair = 0;
let isDragging = false;

function loadProject(idx) {
  currentProject = idx;
  currentPair = 0;

  // Update project tab highlight
  document.querySelectorAll('.ptab').forEach((t, i) => t.classList.toggle('active', i === idx));

  // Update gallery subtitle
  const proj = PROJECTS[idx];
  document.getElementById('galleryDesc').textContent = proj.desc;

  // Rebuild pair dots
  buildDots();

  // Load first pair
  loadPair(0);

  // Rebuild grid
  buildGrid(document.querySelector('.grid-tab.active')?.dataset.set || 'after');
}

function loadPair(idx) {
  currentPair = idx;
  const pair = PROJECTS[currentProject].pairs[idx];
  document.getElementById('beforeImg').src = pair.before;
  document.getElementById('afterImg').src  = pair.after;
  document.getElementById('pairLabel').textContent = pair.label;
  const noteEl = document.getElementById('pairNote');
  if (noteEl) { noteEl.textContent = pair.note || ''; noteEl.style.display = pair.note ? '' : 'none'; }
  setSliderPos(50);
  document.querySelectorAll('.pair-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
}

function setSliderPos(pct) {
  document.getElementById('sliderAfter').style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
  document.getElementById('sliderHandle').style.left = pct + '%';
}

function buildDots() {
  const c = document.getElementById('pairDots');
  c.innerHTML = '';
  PROJECTS[currentProject].pairs.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'pair-dot' + (i === 0 ? ' active' : '');
    d.onclick = () => loadPair(i);
    c.appendChild(d);
  });
}

function buildGrid(set) {
  const grid = document.getElementById('photoGrid');
  grid.innerHTML = '';
  PROJECTS[currentProject].pairs.forEach((pair) => {
    const img = document.createElement('img');
    img.src = pair[set];
    img.alt = pair.label;
    img.loading = 'lazy';
    img.onclick = () => openLightbox(pair[set]);
    grid.appendChild(img);
  });
}

// ── Build project tabs ──
function buildProjectTabs() {
  const container = document.getElementById('projectTabs');
  PROJECTS.forEach((proj, i) => {
    const btn = document.createElement('button');
    btn.className = 'ptab' + (i === 0 ? ' active' : '');
    btn.textContent = proj.name;
    btn.onclick = () => loadProject(i);
    container.appendChild(btn);
  });
  // Show project tabs only if multiple projects
  container.style.display = PROJECTS.length > 1 ? 'flex' : 'none';
}

// ── Category tabs (Renovation / New Built) ──
document.querySelectorAll('.cat-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    document.getElementById('cat-renovation').style.display = cat === 'renovation' ? '' : 'none';
    document.getElementById('cat-newbuild').style.display   = cat === 'newbuild'   ? '' : 'none';
  });
});

// ── Gallery mode tabs ──
document.querySelectorAll('.gtab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.gtab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const mode = btn.dataset.mode;
    document.getElementById('slider-view').style.display = mode === 'slider' ? '' : 'none';
    document.getElementById('grid-view').style.display   = mode === 'grid'   ? '' : 'none';
  });
});

// ── Grid before/after tabs ──
document.querySelectorAll('.grid-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.grid-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    buildGrid(btn.dataset.set);
  });
});

// ── Slider drag ──
function getX(e) { return e.touches ? e.touches[0].clientX : e.clientX; }

const wrap = document.getElementById('sliderWrap');
wrap.addEventListener('mousedown',  () => { isDragging = true; });
wrap.addEventListener('touchstart', () => { isDragging = true; }, { passive: true });

window.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const r = wrap.getBoundingClientRect();
  const pct = Math.min(100, Math.max(0, (getX(e) - r.left) / r.width * 100));
  setSliderPos(pct);
});

window.addEventListener('touchmove', e => {
  if (!isDragging) return;
  const r = wrap.getBoundingClientRect();
  const pct = Math.min(100, Math.max(0, (getX(e) - r.left) / r.width * 100));
  setSliderPos(pct);
}, { passive: true });

window.addEventListener('mouseup',  () => { isDragging = false; });
window.addEventListener('touchend', () => { isDragging = false; });

document.getElementById('prevPair').onclick = () => {
  const len = PROJECTS[currentProject].pairs.length;
  loadPair((currentPair - 1 + len) % len);
};
document.getElementById('nextPair').onclick = () => {
  const len = PROJECTS[currentProject].pairs.length;
  loadPair((currentPair + 1) % len);
};

// ── Lightbox ──
const lb = document.createElement('div');
lb.className = 'lightbox';
lb.innerHTML = '<button class="lb-close">&times;</button><img id="lbImg" src="" alt="" />';
document.body.appendChild(lb);
lb.querySelector('.lb-close').onclick = () => lb.classList.remove('open');
lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });

function openLightbox(src) {
  document.getElementById('lbImg').src = src;
  lb.classList.add('open');
}

// ── Baechtelenweg slider ──
// All photos — owner will curate and replace folder with final selection
const NB_PHOTOS = Array.from({length: 41}, (_, i) =>
  `images/baechtelenweg/baechtelenweg-${String(i+1).padStart(2,'0')}.jpg`
);

let nbIdx = 0;

function nbLoad(idx) {
  nbIdx = (idx + NB_PHOTOS.length) % NB_PHOTOS.length;
  const img = document.getElementById('nb-slide-img');
  img.src = NB_PHOTOS[nbIdx];
  document.getElementById('nb-current').textContent = nbIdx + 1;
}

const nbSlider = document.getElementById('nb-baechtelenweg');
if (nbSlider) {
  document.getElementById('nb-total').textContent = NB_PHOTOS.length;
  document.getElementById('nb-slide-img').onclick = () => openLightbox(NB_PHOTOS[nbIdx]);
  document.getElementById('nb-prev').onclick = () => nbLoad(nbIdx - 1);
  document.getElementById('nb-next').onclick = () => nbLoad(nbIdx + 1);

  // Swipe support
  let touchStartX = 0;
  nbSlider.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  nbSlider.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) dx < 0 ? nbLoad(nbIdx + 1) : nbLoad(nbIdx - 1);
  });

  nbLoad(0);
}

// Keyboard nav for nb slider when new-built tab is active
document.addEventListener('keydown', e => {
  const catNewbuild = document.getElementById('cat-newbuild');
  if (!catNewbuild || catNewbuild.style.display === 'none') return;
  if (e.key === 'ArrowLeft')  nbLoad(nbIdx - 1);
  if (e.key === 'ArrowRight') nbLoad(nbIdx + 1);
});

// ── Init ──
buildProjectTabs();
buildDots();
loadPair(0);
buildGrid('after');
