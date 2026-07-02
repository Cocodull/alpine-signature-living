// Alpine Signature Living — Selected Works gallery (ported verbatim from the finished site).
// Exposes window.initAslGallery(), idempotent.
(function () {
  if (window.__aslGalleryLoaded) return;
  window.__aslGalleryLoaded = true;
  let booted = false;

  // ── Projects data ──
  const PROJECTS = [
    {
      name: "Ovronnaz",
      title: { en: "2.5-Room Apartment — Ovronnaz", fr: "Appartement 2.5 pièces — Ovronnaz" },
      desc: {
        en: "A complete transformation of a dated alpine apartment in Ovronnaz — every room reimagined, every surface reconsidered, and every detail resolved with precision.",
        fr: "Une transformation complète d'un appartement alpin vieillissant à Ovronnaz — chaque pièce repensée, chaque surface reconsidérée, chaque détail résolu avec précision."
      },
      pairs: [
        { label: { en: "Living & Kitchen — The Result", fr: "Séjour & Cuisine — Le résultat" },
          note: { en: "With all changes made — and the floors unified with the same natural oak as the bedroom — the space found its harmony. Warm, considered, with an unmistakable sense of comfort and quiet luxury.", fr: "Avec tous ces changements — et les sols unifiés avec le même chêne naturel que dans la chambre — la pièce a trouvé toute son harmonie. Chaleureuse, réfléchie, avec un sentiment indéniable de confort et de luxe discret." },
          before: "images/ovronnaz/s08-before.jpg", after: "images/ovronnaz/s08-after.png" },
        { label: { en: "Living Room", fr: "Séjour" },
          note: { en: "The fireplace and adjacent concrete bench dominated the room and claimed significant space. Their removal — along with the false ceiling beams — opened the volume entirely and made the room feel markedly larger.", fr: "La cheminée et le banc en béton adjacent dominaient la pièce et prenaient beaucoup de place. Leur suppression — ainsi que les fausses poutres au plafond — a ouvert le volume et rendu la pièce bien plus grande." },
          before: "images/ovronnaz/s06-before.jpg", after: "images/ovronnaz/s06-after.png" },
        { label: { en: "Living Room — Furnished", fr: "Séjour — Meublé" },
          note: { en: "The apartment is now for sale, with or without its furnishings. Designed for both beauty and comfort, it is ready to welcome its new owners — and their guests, should they choose to let it.", fr: "L'appartement est aujourd'hui proposé à la vente, meublé ou non. Pensé autant pour l'esthétique que pour le confort, il est prêt à accueillir ses nouveaux propriétaires — comme leurs futurs hôtes, s'ils choisissent de le mettre en location." },
          before: "images/ovronnaz/salon s16 before.jpg", after: "images/ovronnaz/s16 after.jpg" },
        { label: { en: "Kitchen", fr: "Cuisine" },
          note: { en: "The bar was imposing — dominating the kitchen and making an already dark space feel smaller. Its removal opened the room entirely, creating space for a dining table and adding a natural flow between kitchen and living area.", fr: "Le bar était très imposant — il dominait la cuisine et rendait l'espace sombre encore plus petit. Sa suppression a ouvert le volume, créant de la place pour une table de salle à manger, et ajoutant une fluidité naturelle entre cuisine et séjour." },
          before: "images/ovronnaz/s07-before.jpg", after: "images/ovronnaz/s07-after.jpg" },
        { label: { en: "Bedroom — Cabinets", fr: "Chambre — Placards" },
          note: { en: "The solid-wood cabinet doors were sandblasted rather than replaced — creating a textured, three-dimensional surface — then oiled with a Châtaigne N68 finish to highlight the natural grain and harmonise with the reclaimed wood on the walls.", fr: "Les portes de placards en bois massif ont été sablées plutôt que remplacées — créant une surface texturée et tridimensionnelle — puis huilées avec une teinte N68 Châtaigne pour mettre en valeur le veinage naturel et s'harmoniser avec le vieux bois des murs." },
          before: "images/ovronnaz/s04-before.jpg", after: "images/ovronnaz/s04-after.png" },
        { label: { en: "Bedroom — Walls & Floor", fr: "Chambre — Murs & Sol" },
          note: { en: "Reclaimed wood on the walls brings a warmth and sophistication the original panelling could not achieve. The floor was laid with natural oak — rustic and luminous in equal measure.", fr: "Le vieux bois au mur apporte une sophistication et une chaleur que le lambris original ne pouvait offrir. Le sol est recouvert de chêne naturel, dans la continuité d'une esthétique rustique et lumineuse." },
          before: "images/ovronnaz/s05-before.jpg", after: "images/ovronnaz/s05-after.png" },
        { label: { en: "Corridor & Bathroom", fr: "Couloir & Salle de bain" },
          note: { en: "The corridor held significant lost space, and the original bathroom was too small. By pushing back the walls, we created a generous bathroom volume with dedicated built-in storage and a separate column for a washer-dryer within the apartment — a real convenience, as previously the only laundry was the building's shared room.", fr: "Le couloir recélait un espace perdu important, et la salle de bain d'origine était trop petite. En repoussant les murs, nous avons créé un volume généreux avec des rangements dédiés et une colonne séparée pour un lave-linge séchant dans l'appartement — un vrai confort, la seule buanderie disponible étant auparavant la buanderie commune de l'immeuble." },
          before: "images/ovronnaz/s09 before.jpg", after: "images/ovronnaz/s09-after.jpg" },
        { label: { en: "Bathroom", fr: "Salle de bain" },
          note: { en: "The bathroom was reimagined with new tiling and fixtures.", fr: "La salle de bain a été entièrement repensée." },
          before: "images/ovronnaz/s10-before.jpg", after: "images/ovronnaz/s10-after-2.jpg" },
        { label: { en: "Bathroom — Second View", fr: "Salle de bain — Deuxième vue" },
          note: { en: "A second angle of the bathroom transformation, showing the full scope of the renovation. The window above the radiator was removed, clearing the space and adding a bespoke reclaimed-wood shelf in its place.", fr: "Un deuxième angle de la transformation de la salle de bain, montrant l'ampleur complète de la rénovation. La fenêtre au-dessus du radiateur a été supprimée, dégageant l'espace et laissant place à une étagère en vieux bois sur mesure." },
          before: "images/ovronnaz/s11 before.jpg", after: "images/ovronnaz/s11-after-new.jpg" },
        { label: { en: "Shower", fr: "Douche" },
          note: { en: "The shower was cramped and dark. By replacing the solid walls and tray with glass, we gained both space and light — creating a larger shower and a bathroom that finally breathes.", fr: "La douche était étroite et sombre. En remplaçant les murs pleins et le bac par du verre, nous avons gagné espace et lumière — pour une douche plus grande et une salle de bain qui respire enfin." },
          before: "images/ovronnaz/s13-before.png", after: "images/ovronnaz/s13-after.jpg" },
        { label: { en: "Entrance", fr: "Entrée" },
          note: { en: "The wall panelling was painted in a natural, chalky light grey — a quiet but decisive shift. The cupboard doors were refinished to replace the original orange tones with a more harmonious, natural palette.", fr: "Le lambris a été peint avec une peinture naturelle gris clair, très mat et crayeuse. Les portes des placards ont été retravaillées pour remplacer les tons oranges originels par une teinte plus harmonieuse et naturelle." },
          before: "images/ovronnaz/s02-before.jpg", after: "images/ovronnaz/s02-after.jpg" },
        { label: { en: "Entrance — Floor & Light", fr: "Entrée — Sol & Lumière" },
          note: { en: "The floor was laid with textured anthracite black tiles, creating coherence and a sense of quiet luxury. The cold white chandelier was replaced by warm-light spotlights — more welcoming, more considered.", fr: "Le sol est recouvert de carrelage anthracite texturisé, créant une harmonie dans la pièce et une sensation de luxe. La lumière blanche du lustre a été remplacée par des spots de lumière chaude, bien plus accueillants." },
          before: "images/ovronnaz/s03-bbefore.jpg", after: "images/ovronnaz/s03-after.jpg" },
        { label: { en: "Floor Plan", fr: "Plan d'appartement" },
          note: { en: "The renovation scope at a glance — walls removed, the bathroom expanded into the corridor, a new Italian shower added, and every surface reimagined. Total interior surface: 54.8 m².", fr: "Le périmètre de la rénovation en un coup d'œil — murs abattus, salle de bain élargie sur le couloir, douche italienne créée, chaque surface repensée. Surface intérieure totale : 54,8 m²." },
          solo: "images/ovronnaz/lst page.jpg" }
      ]
    }
  ];

  let currentLang = 'en';
  let currentProject = 0;
  let renoNav = null;

  function buildProjectTabs() {
    const container = document.getElementById('projectTabs');
    if (!container) return;
    container.innerHTML = '';
    PROJECTS.forEach((proj, i) => {
      const btn = document.createElement('button');
      btn.className = 'ptab' + (i === 0 ? ' active' : '');
      btn.textContent = proj.name;
      btn.onclick = () => {
        currentProject = i;
        document.querySelectorAll('.ptab').forEach((t, j) => t.classList.toggle('active', j === i));
        buildRenovationCards();
      };
      container.appendChild(btn);
    });
    container.style.display = PROJECTS.length > 1 ? 'flex' : 'none';
  }

  function initCompare(el) {
    function setPos(x) {
      const rect = el.getBoundingClientRect();
      const pct = Math.max(10, Math.min(90, ((x - rect.left) / rect.width) * 100));
      el.style.setProperty('--pos', pct + '%');
    }
    let startX = 0;
    el.addEventListener('mousedown', e => {
      if (e.button !== 0) return;
      startX = e.clientX;
      el.dataset.dragged = '0';
      const move = e => {
        if (Math.abs(e.clientX - startX) > 4) el.dataset.dragged = '1';
        setPos(e.clientX);
      };
      const up = () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseup', up); };
      window.addEventListener('mousemove', move);
      window.addEventListener('mouseup', up);
      e.preventDefault();
    });
    el.addEventListener('touchmove', e => {
      el.dataset.dragged = '1';
      setPos(e.touches[0].clientX);
      e.preventDefault();
    }, { passive: false });
  }

  function buildRenovationCards() {
    const proj = PROJECTS[currentProject];
    const titleEl = document.getElementById('renovationTitle');
    if (titleEl) titleEl.textContent = proj.title[currentLang] || proj.title.en;
    const descEl = document.getElementById('renovationDesc');
    if (descEl) descEl.textContent = proj.desc[currentLang] || proj.desc.en;

    const container = document.getElementById('renovationCards');
    if (!container) return;
    container.innerHTML = '';

    const beforeLabel = currentLang === 'fr' ? 'Avant' : 'Before';
    const afterLabel = currentLang === 'fr' ? 'Après' : 'After';

    container.innerHTML = `
      <div class="reno-carousel-wrap">
        <button class="reno-arrow reno-prev" aria-label="Previous">&#8592;</button>
        <div class="reno-track"></div>
        <button class="reno-arrow reno-next" aria-label="Next">&#8594;</button>
      </div>
      <div class="reno-nav">
        <span class="reno-counter"><span class="reno-current">1</span> / ${proj.pairs.length}</span>
        <div class="reno-dots"></div>
      </div>
      <div class="reno-info-panel"></div>`;

    const track = container.querySelector('.reno-track');
    const dotsEl = container.querySelector('.reno-dots');
    const infoEl = container.querySelector('.reno-info-panel');
    const currEl = container.querySelector('.reno-current');
    let current = 0;

    proj.pairs.forEach((pair, i) => {
      const slide = document.createElement('div');
      slide.className = 'reno-slide';

      if (pair.solo) {
        const label = pair.label[currentLang] || pair.label.en;
        slide.innerHTML = `<div class="room-solo"><img src="${pair.solo}" alt="${label}" loading="lazy"></div>`;
        slide.querySelector('img').addEventListener('click', e => openLightbox(e.target.src));
      } else {
        const afters = Array.isArray(pair.after) ? pair.after : [pair.after];
        const mainAfter = afters[0];
        const extras = afters.slice(1);
        const extrasHTML = extras.length ? `<div class="room-extra-afters">${
          extras.map(s => `<img src="${s}" alt="${afterLabel}" loading="lazy">`).join('')
        }</div>` : '';

        slide.innerHTML = `
          <div class="compare" style="--pos: 30%">
            <div class="compare-before">
              <img src="${pair.before}" alt="${beforeLabel}" loading="lazy">
              <span class="compare-lbl compare-lbl-b">${beforeLabel}</span>
            </div>
            <div class="compare-divider"><span class="compare-knob">&#9668;&nbsp;&#9658;</span></div>
            <div class="compare-after">
              <img src="${mainAfter}" alt="${afterLabel}" loading="lazy">
              <span class="compare-lbl compare-lbl-a">${afterLabel}</span>
            </div>
          </div>
          ${extrasHTML}`;

        const cmp = slide.querySelector('.compare');
        initCompare(cmp);
        cmp.addEventListener('click', e => {
          if (cmp.dataset.dragged === '1') { cmp.dataset.dragged = '0'; return; }
          e.target.closest('.compare-before') ? openLightbox(pair.before) : openLightbox(mainAfter);
        });
        slide.querySelectorAll('.room-extra-afters img').forEach(img =>
          img.addEventListener('click', () => openLightbox(img.src)));
      }

      track.appendChild(slide);

      const dot = document.createElement('button');
      dot.className = 'reno-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(dot);
    });

    function goTo(idx) {
      current = (idx + proj.pairs.length) % proj.pairs.length;
      track.style.transform = `translateX(-${current * 100}%)`;
      currEl.textContent = current + 1;
      dotsEl.querySelectorAll('.reno-dot').forEach((d, j) => d.classList.toggle('active', j === current));
      infoEl.style.opacity = '0';
      setTimeout(() => {
        const pair = proj.pairs[current];
        const label = pair.label[currentLang] || pair.label.en;
        const note = (pair.note?.[currentLang] || pair.note?.en || '').trim();
        infoEl.innerHTML = `
          <div class="room-info">
            <span class="room-num">${String(current + 1).padStart(2, '0')}</span>
            <div class="room-info-text">
              <h3 class="room-name">${label}</h3>
              ${note ? `<p class="room-note">${note}</p>` : ''}
            </div>
          </div>`;
        infoEl.style.opacity = '1';
      }, 180);
    }

    container.querySelector('.reno-prev').addEventListener('click', () => goTo(current - 1));
    container.querySelector('.reno-next').addEventListener('click', () => goTo(current + 1));

    let touchX = 0;
    track.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 50) dx < 0 ? goTo(current + 1) : goTo(current - 1);
    });

    renoNav = { go: goTo, get idx() { return current; } };
    goTo(0);
  }

  // ── Baechtelenweg slider ──
  const NB_PHOTOS = [
    'images/baechtelenweg/baechtelenweg-04.png',
    'images/baechtelenweg/baechtelenweg-05.png',
    'images/baechtelenweg/baechtelenweg-01.png',
    'images/baechtelenweg/baechtelenweg-02.png',
    'images/baechtelenweg/baechtelenweg-03.png',
    'images/baechtelenweg/baechtelenweg-07.png',
    'images/baechtelenweg/baechtelenweg-06.png',
    'images/baechtelenweg/baechtelenweg-08.png',
    'images/baechtelenweg/baechtelenweg-09.png',
    'images/baechtelenweg/baechtelenweg-10.png',
    'images/baechtelenweg/baechtelenweg-11.png',
    'images/baechtelenweg/baechtelenweg-12.jpg',
    'images/baechtelenweg/baechtelenweg-13.jpg',
  ];
  let nbIdx = 0;
  function nbLoad(idx) {
    nbIdx = (idx + NB_PHOTOS.length) % NB_PHOTOS.length;
    document.getElementById('nb-slide-img').src = NB_PHOTOS[nbIdx];
    document.getElementById('nb-current').textContent = nbIdx + 1;
  }

  // ── La Tzoumaz slider ──
  const TZ_PHOTOS = [
    'images/tzoumaz/tzoumaz-29.jpg',
    'images/tzoumaz/tzoumaz-28.jpg',
    'images/tzoumaz/tzoumaz-30.jpg',
    'images/tzoumaz/tzoumaz-27.jpg',
    'images/tzoumaz/tzoumaz-20.jpg',
    'images/tzoumaz/tzoumaz-21.jpg',
    'images/tzoumaz/tzoumaz-15.jpg',
    'images/tzoumaz/tzoumaz-23.jpg',
    'images/tzoumaz/tzoumaz-24.jpg',
    'images/tzoumaz/tzoumaz-25.jpg',
    'images/tzoumaz/tzoumaz-26.jpg',
    'images/tzoumaz/tzoumaz-13.jpg',
    'images/tzoumaz/tzoumaz-14.jpg',
    'images/tzoumaz/tzoumaz-07.jpg',
    'images/tzoumaz/tzoumaz-10.jpg',
    'images/tzoumaz/tzoumaz-11.jpg',
    'images/tzoumaz/tzoumaz-12.jpg',
    'images/tzoumaz/tzoumaz-01.jpg',
    'images/tzoumaz/tzoumaz-02.jpg',
    'images/tzoumaz/tzoumaz-03.jpg',
    'images/tzoumaz/tzoumaz-08.jpg',
    'images/tzoumaz/tzoumaz-09.jpg',
    'images/tzoumaz/tzoumaz-06.jpg',
  ];
  let tzIdx = 0;
  function tzLoad(idx) {
    tzIdx = (idx + TZ_PHOTOS.length) % TZ_PHOTOS.length;
    document.getElementById('nb-tz-img').src = TZ_PHOTOS[tzIdx];
    document.getElementById('nb-tz-current').textContent = tzIdx + 1;
  }

  // ── Lightbox ──
  let lb = null;
  function ensureLightbox() {
    if (lb) return;
    lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = '<button class="lb-close">&times;</button><img id="lbImg" src="" alt="" />';
    document.body.appendChild(lb);
    lb.querySelector('.lb-close').addEventListener('click', () => lb.classList.remove('open'));
    lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });
  }
  function openLightbox(src) {
    ensureLightbox();
    document.getElementById('lbImg').src = src;
    lb.classList.add('open');
  }

  function boot() {
    const root = document.getElementById('projects');
    if (!root || booted) return;
    booted = true;

    // Category tabs
    document.querySelectorAll('.cat-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.cat;
        document.getElementById('cat-renovation').style.display = cat === 'renovation' ? '' : 'none';
        document.getElementById('cat-newbuild').style.display = cat === 'newbuild' ? '' : 'none';
      });
    });

    buildProjectTabs();
    buildRenovationCards();

    // Baechtelenweg slider
    const nbSlider = document.getElementById('nb-baechtelenweg');
    if (nbSlider) {
      document.getElementById('nb-total').textContent = NB_PHOTOS.length;
      document.getElementById('nb-slide-img').addEventListener('click', () => openLightbox(NB_PHOTOS[nbIdx]));
      document.getElementById('nb-prev').addEventListener('click', () => nbLoad(nbIdx - 1));
      document.getElementById('nb-next').addEventListener('click', () => nbLoad(nbIdx + 1));
      let touchStartX = 0;
      nbSlider.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
      nbSlider.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 40) dx < 0 ? nbLoad(nbIdx + 1) : nbLoad(nbIdx - 1);
      });
      nbLoad(0);
    }

    // La Tzoumaz slider
    const tzSlider = document.getElementById('nb-tzoumaz');
    if (tzSlider) {
      document.getElementById('nb-tz-total').textContent = TZ_PHOTOS.length;
      document.getElementById('nb-tz-img').addEventListener('click', () => openLightbox(TZ_PHOTOS[tzIdx]));
      document.getElementById('nb-tz-prev').addEventListener('click', () => tzLoad(tzIdx - 1));
      document.getElementById('nb-tz-next').addEventListener('click', () => tzLoad(tzIdx + 1));
      let tzTouchX = 0;
      tzSlider.addEventListener('touchstart', e => { tzTouchX = e.touches[0].clientX; }, { passive: true });
      tzSlider.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - tzTouchX;
        if (Math.abs(dx) > 40) dx < 0 ? tzLoad(tzIdx + 1) : tzLoad(tzIdx - 1);
      });
      tzLoad(0);
    }

    // Arrow keys
    document.addEventListener('keydown', e => {
      if (renoNav) {
        const section = document.getElementById('renovationCards');
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < window.innerHeight) {
            if (e.key === 'ArrowLeft') { e.preventDefault(); renoNav.go(renoNav.idx - 1); }
            if (e.key === 'ArrowRight') { e.preventDefault(); renoNav.go(renoNav.idx + 1); }
          }
        }
      }
    });
  }

  window.initAslGallery = boot;
  window.aslSetGalleryLang = function (l) {
    currentLang = (l === 'fr') ? 'fr' : 'en';
    if (document.getElementById('renovationCards')) { buildRenovationCards(); }
  };
})();
