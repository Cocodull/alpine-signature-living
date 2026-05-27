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
    desc: "Complete renovation of a dated alpine apartment into a contemporary mountain residence.",
    pairs: [
      { label: "Living Room",   before: "images/ovronnaz-living-room-before.jpg",   after: "images/ovronnaz-living-room-after.jpg"   },
      { label: "Bathroom",      before: "images/ovronnaz-bathroom-before.jpg",      after: "images/ovronnaz-bathroom-after.jpg"      },
      { label: "Bedroom",       before: "images/ovronnaz-bedroom-before.jpg",       after: "images/ovronnaz-bedroom-after.jpg"       },
      { label: "Entrance Hall", before: "images/ovronnaz-entrance-hall-before.jpg", after: "images/ovronnaz-entrance-hall-after.jpg" },
      { label: "Shower Room",   before: "images/ovronnaz-shower-room-before.jpg",   after: "images/ovronnaz-shower-room-after.jpg"   },
      { label: "Kitchen",       before: "images/ovronnaz-kitchen-before.jpg",       after: "images/ovronnaz-kitchen-after.jpg"       }
    ]
  }
  // To add a new project, copy the block above and fill in your image paths:
  // {
  //   name: "Project Name",
  //   desc: "Short description of the project.",
  //   pairs: [
  //     { label: "Room Name", before: "images/project-room-before.jpg", after: "images/project-room-after.jpg" }
  //   ]
  // }
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

// ── Init ──
buildProjectTabs();
buildDots();
loadPair(0);
buildGrid('after');
