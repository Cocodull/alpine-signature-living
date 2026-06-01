// ── Scroll reveal ──
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
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

// ── Translations ──
const T = {
  en: {
    'nav.about':    'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.process':  'Process',
    'nav.contact':  'Contact',
    'nav.cta':      'Enquire',

    'hero.tag':      'Valais, Switzerland',
    'hero.title':    'Consulting, Planning<br>&amp; Coordination<br>for Residential Property<br>Projects in <em>Switzerland</em>',
    'hero.subtitle': 'Expert representation for discerning owners who are not on site. Every phase handled with precision — in French and in English — from the first planning submission to the final handover.',
    'hero.cta1':     'Request a Consultation',
    'hero.cta2':     'Our Services',

    'about.label':  'About',
    'about.title':  'A trusted presence<br><em>in Valais</em>',
    'about.quote':  '"Owning a residence in Valais should be a source of pleasure — not a burden of complexity. I exist to ensure it remains exactly that."',
    'about.body1':  'I am Corinne Dulles, founder of Alpine Signature Living. My professional background spans senior roles in global companies — advising Fortune 500 clients on strategic consulting, business transformation, and data-driven decision-making. I bring that same rigour to every property project: structured coordination, precise budget management, and a trusted network of architects, contractors, and financial professionals built through years of local relationships.',
    'about.body2':  'Whether you are in London, Geneva, or Singapore, I act as your eyes, your voice, and your advocate on the ground — from the first planning submission to the final handover. My approach is personal, meticulous, and entirely confidential.',
    'stat.bilingual': 'Bilingual — French & English',
    'stat.local':     'An intimate Valais network',
    'stat.endtoend':  'From acquisition to handover',
    'stat.discreet':  'Trusted by discerning owners worldwide',

    'services.label': 'Services',
    'services.title': 'A single point of coordination<br>for every stage of your <em>project</em>',
    'svc1.title': 'Acquisition Advisory',
    'svc1.desc':  'Sourcing and evaluating properties that match your exact criteria — from alpine chalets to investment residences — through a carefully cultivated network of local agents, notaries, and private contacts inaccessible to the open market.',
    'svc2.title': 'Construction & Renovation',
    'svc2.desc':  'End-to-end coordination of new builds and full renovations — from contractor selection and permit applications to site supervision and final handover. Your project delivered on schedule and within budget, without surprises.',
    'svc3.title': 'Administrative & Permit Coordination',
    'svc3.desc':  'All correspondence, permit applications, notarial procedures, and local authority requirements handled with precision — in French and in English. Every deadline met, every document correct.',
    'svc4.title': 'Budget Management & Negotiation',
    'svc4.desc':  'Detailed project budgeting, supplier price negotiations, and rigorous cost control — with clear, periodic reporting so you retain full financial visibility and peace of mind at every stage.',
    'svc5.title': 'Financing Coordination',
    'svc5.desc':  'Structuring and coordinating the financing of your property project — liaising with Swiss banks and financial institutions on your behalf, in the language and format they require.',
    'svc6.title': 'Interior Design & Furnishing',
    'svc6.desc':  'Specification of interior finishes, material selections, and furnishing — from tile and flooring choices to full kitchen design and final staging. An interior that reflects the quality of the project and the precision of your vision.',

    'lang.bilingual': 'Seamlessly bilingual',
    'lang.sub':       'French and English, without compromise',
    'lang.native':    'Native fluency',
    'lang.fluent':    'Full professional fluency',

    'gallery.label':       'Case Studies',
    'gallery.title':       '<em>Selected</em> Works',
    'gallery.tab.reno':    'Renovation',
    'gallery.tab.new':     'New Built sur Plans',
    'gallery.newbuild.sub':'Two residential projects developed from plan — each shaped in close collaboration with the project team and architect to reflect the client\'s precise vision.',

    'nb1.type':   'Penthouse · Canton of Bern',
    'nb1.title':  'Baechtelenweg<br><em>Vegetal Tower</em>',
    'nb1.desc':   'A penthouse residence within the Garden Tower at Baechtelenweg, Wabern — one of Switzerland\'s most celebrated contemporary buildings. Engaged by the owners during the fit-out phase, Corinne advised on and coordinated the complete interior specification: the selection of tiles, flooring materials, and the full design of the kitchen. The building architecture is the work of the project\'s architects.',
    'nb1.credit': 'Interior specification &amp; finish selection — tiles, flooring, kitchen design',
    'nb2.type':   'Chalet · La Tzoumaz, Verbier',
    'nb2.title':  'La Tzoumaz<br><em>Private Chalet</em>',
    'nb2.desc':   'A private chalet at the foot of the Verbier ski domain, developed in close collaboration with architect Thomas De Witt of Home Partners. The project united two distinct creative visions into a single, cohesive alpine residence — refined at every stage until both architect and client were fully satisfied.',
    'nb2.credit': 'In collaboration with Thomas De Witt — Home Partners',
    'nb2.photos': 'Photography to follow',

    'process.label': 'How it works',
    'process.title': 'A measured approach<br><em>from first contact to completion</em>',
    'step1.title': 'Private Consultation',
    'step1.desc':  'A confidential discussion at your convenience — to understand your project, your expectations, and the level of representation you require. No obligation.',
    'step2.title': 'Written Proposal',
    'step2.desc':  'A clear, detailed proposal setting out scope, timeline, and fees. Every element is agreed in writing before any work commences.',
    'step3.title': 'On-the-Ground Representation',
    'step3.desc':  'I become your presence in Valais — attending site meetings, overseeing works, liaising with authorities, and resolving matters before they need to reach you.',
    'step4.title': 'Structured Reporting',
    'step4.desc':  'Regular, written updates in your language of choice. You retain full visibility and control without the weight of daily involvement.',

    'contact.label': 'Contact',
    'contact.title': 'Entrust your alpine project<br>to someone who <em>knows Valais</em>',
    'contact.sub':   'I welcome a private introductory conversation at your convenience — in English or in French.',
    'form.name':     'Full Name',
    'form.email':    'Email Address',
    'form.phone':    'Phone (optional)',
    'form.language': 'Preferred Language',
    'form.message':  'Your Enquiry',
    'form.submit':   'Submit Enquiry',
    'form.call':     'Schedule a Call',
    'contact.note':  'Valais, Switzerland &nbsp;·&nbsp; Serving international owners worldwide',
    'footer.copy':   '© 2026 Alpine Signature Living. All rights reserved.',
  },
  fr: {
    'nav.about':    'À propos',
    'nav.services': 'Services',
    'nav.projects': 'Réalisations',
    'nav.process':  'Démarche',
    'nav.contact':  'Contact',
    'nav.cta':      'Nous contacter',

    'hero.tag':      'Valais, Suisse',
    'hero.title':    'Consulting, Planification<br>&amp; Coordination<br>pour vos projets immobiliers<br>résidentiels en <em>Suisse</em>',
    'hero.subtitle': 'Une représentation experte pour les propriétaires exigeants ne résidant pas sur place. Chaque phase gérée avec précision — en français et en anglais — du premier dépôt de permis à la remise finale.',
    'hero.cta1':     'Demander une consultation',
    'hero.cta2':     'Nos services',

    'about.label':  'À propos',
    'about.title':  'Une présence de confiance<br><em>en Valais</em>',
    'about.quote':  '« Posséder une résidence en Valais devrait être une source de plaisir — et non un fardeau administratif. Je suis là pour qu\'il en soit toujours ainsi. »',
    'about.body1':  'Je suis Corinne Dulles, fondatrice d\'Alpine Signature Living. Mon parcours professionnel comprend des fonctions de direction dans des entreprises internationales — accompagnant des clients Fortune 500 en matière de conseil stratégique, de transformation d\'entreprise et d\'analytique décisionnelle. J\'apporte cette même rigueur à chaque projet immobilier : une coordination structurée, une gestion précise des budgets et un réseau de confiance d\'architectes, d\'entrepreneurs et de professionnels financiers, construit au fil d\'années de relations locales.',
    'about.body2':  'Que vous soyez à Londres, Genève ou Singapour, j\'agis en tant que vos yeux, votre voix et votre porte-parole sur le terrain — du premier dépôt de permis à la remise finale. Mon approche est personnelle, méticuleuse et entièrement confidentielle.',
    'stat.bilingual': 'Bilingue — Français & Anglais',
    'stat.local':     'Un réseau privilégié en Valais',
    'stat.endtoend':  'De l\'acquisition à la livraison',
    'stat.discreet':  'Discret, personnel, à la hauteur',

    'services.label': 'Services',
    'services.title': 'Un interlocuteur unique<br>à chaque étape de votre <em>projet</em>',
    'svc1.title': 'Conseil à l\'acquisition',
    'svc1.desc':  'Recherche et évaluation de biens correspondant précisément à vos critères — des chalets alpins aux résidences d\'investissement — grâce à un réseau soigneusement cultivé d\'agents locaux, de notaires et de contacts privés inaccessibles au marché ouvert.',
    'svc2.title': 'Construction & Rénovation',
    'svc2.desc':  'Coordination complète de constructions neuves et de rénovations — de la sélection des entrepreneurs aux demandes de permis, en passant par la supervision du chantier et la remise finale. Votre projet livré dans les délais et dans le budget, sans mauvaises surprises.',
    'svc3.title': 'Coordination administrative & permis',
    'svc3.desc':  'Toute la correspondance, les demandes de permis, les procédures notariales et les exigences des autorités locales, gérées avec précision — en français et en anglais. Chaque délai respecté, chaque document conforme.',
    'svc4.title': 'Gestion budgétaire & négociation',
    'svc4.desc':  'Budgétisation détaillée du projet, négociation des prix fournisseurs et contrôle rigoureux des coûts — avec un reporting clair et périodique pour que vous conserviez une visibilité financière totale et une tranquillité d\'esprit à chaque étape.',
    'svc5.title': 'Coordination du financement',
    'svc5.desc':  'Structuration et coordination du financement de votre projet immobilier — liaison avec les banques suisses et les institutions financières en votre nom, dans la langue et le format qu\'elles requièrent.',
    'svc6.title': 'Design intérieur & ameublement',
    'svc6.desc':  'Spécification des finitions intérieures, sélection des matériaux et ameublement — des choix de carrelage et de revêtements de sol à la conception complète de la cuisine et à la mise en scène finale. Un intérieur qui reflète la qualité du projet et la précision de votre vision.',

    'lang.bilingual': 'Parfaitement bilingue',
    'lang.sub':       'Français et anglais, sans compromis',
    'lang.native':    'Langue maternelle',
    'lang.fluent':    'Anglais courant',

    'gallery.label':        'Réalisations',
    'gallery.title':        'Projets <em>sélectionnés</em>',
    'gallery.tab.reno':     'Rénovation',
    'gallery.tab.new':      'Construction sur Plans',
    'gallery.newbuild.sub': 'Deux projets résidentiels développés sur plans — chacun façonné en étroite collaboration avec l\'équipe du projet et l\'architecte pour refléter la vision précise du client.',

    'nb1.type':   'Attique · Canton de Berne',
    'nb1.title':  'Baechtelenweg<br><em>Vegetal Tower</em>',
    'nb1.desc':   'Une résidence en attique au sein du Garden Tower à Baechtelenweg, Wabern — l\'un des immeubles contemporains les plus célébrés de Suisse. Mandatée par les propriétaires durant la phase de finition, Corinne a conseillé et coordonné l\'intégralité de la spécification intérieure : choix des carrelages, revêtements de sol et conception complète de la cuisine. L\'architecture du bâtiment est l\'œuvre des architectes du projet.',
    'nb1.credit': 'Spécification intérieure &amp; sélection des finitions — carrelages, sols, cuisine',
    'nb2.type':   'Chalet · La Tzoumaz, Verbier',
    'nb2.title':  'La Tzoumaz<br><em>Chalet privé</em>',
    'nb2.desc':   'Un chalet privé au pied du domaine skiable de Verbier, développé en étroite collaboration avec l\'architecte Thomas De Witt de Home Partners. Le projet a réuni deux visions créatives distinctes en une résidence alpine cohérente et raffinée — affinée à chaque étape jusqu\'à la pleine satisfaction de l\'architecte et du client.',
    'nb2.credit': 'En collaboration avec Thomas De Witt — Home Partners',
    'nb2.photos': 'Photos à venir',

    'process.label': 'Notre démarche',
    'process.title': 'Une approche structurée<br><em>du premier contact à la livraison</em>',
    'step1.title': 'Consultation privée',
    'step1.desc':  'Un entretien confidentiel à votre convenance — pour comprendre votre projet, vos attentes et le niveau de représentation souhaité. Sans engagement.',
    'step2.title': 'Proposition écrite',
    'step2.desc':  'Une proposition claire et détaillée définissant le périmètre, le calendrier et les honoraires. Chaque élément est convenu par écrit avant le début de tout travail.',
    'step3.title': 'Représentation sur place',
    'step3.desc':  'Je deviens votre présence en Valais — en assistant aux réunions de chantier, en supervisant les travaux, en assurant la liaison avec les autorités et en résolvant les problèmes avant qu\'ils ne vous parviennent.',
    'step4.title': 'Reporting structuré',
    'step4.desc':  'Des comptes rendus écrits réguliers dans la langue de votre choix. Vous conservez une visibilité et un contrôle complets, sans la charge d\'une implication quotidienne.',

    'contact.label': 'Contact',
    'contact.title': 'Confiez votre projet alpin<br>à quelqu\'un qui <em>connaît le Valais</em>',
    'contact.sub':   'Je vous invite à un premier entretien confidentiel, à votre convenance — en français ou en anglais.',
    'form.name':     'Nom complet',
    'form.email':    'Adresse e-mail',
    'form.phone':    'Téléphone (facultatif)',
    'form.language': 'Langue préférée',
    'form.message':  'Votre message',
    'form.submit':   'Envoyer',
    'form.call':     'Planifier un appel',
    'contact.note':  'Valais, Suisse &nbsp;·&nbsp; Au service de propriétaires internationaux dans le monde entier',
    'footer.copy':   '© 2026 Alpine Signature Living. Tous droits réservés.',
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = T[lang][el.dataset.i18n];
    if (val === undefined) return;
    if (/<[a-z]/i.test(val)) el.innerHTML = val;
    else el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const val = T[lang][el.dataset.i18nPh];
    if (val) el.placeholder = val;
  });

  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang)
  );

  buildRenovationCards();
}

// ── Projects data ──
const PROJECTS = [
  {
    name: "Ovronnaz",
    desc: {
      en: "A complete transformation of a dated alpine apartment in Ovronnaz — every room reimagined, every surface reconsidered, and every detail resolved with precision.",
      fr: "Une transformation complète d'un appartement alpin vieillissant à Ovronnaz — chaque pièce repensée, chaque surface reconsidérée, chaque détail résolu avec précision."
    },
    pairs: [
      {
        label: { en: "Entrance", fr: "Entrée" },
        note: {
          en: "The entrance hall was reconfigured entirely — eliminating wasted circulation space and creating a proper sense of arrival, with new built-in storage that defines the threshold between outside and in.",
          fr: "Le couloir d'entrée a été entièrement reconfiguré — supprimant l'espace de circulation perdu et créant une véritable sensation d'arrivée, avec un nouveau rangement intégré qui délimite le seuil entre l'extérieur et l'intérieur."
        },
        before: "images/ovronnaz/entrance-before.jpg",
        after:  "images/ovronnaz/entrance-after.jpg"
      },
      {
        label: { en: "Entrance — Cupboards", fr: "Entrée — Rangements" },
        note: {
          en: "Looking in from the main door: the new built-in cupboards replaced a cluttered wall and gave the entrance its sense of order and calm. The view through the apartment opens immediately.",
          fr: "Depuis la porte d'entrée : les nouveaux placards intégrés ont remplacé un mur encombré et apporté ordre et sérénité à l'entrée. La perspective sur l'appartement s'ouvre immédiatement."
        },
        before: "images/ovronnaz/entrance-2-before.jpg",
        after:  "images/ovronnaz/entrance-2-after.jpg"
      },
      {
        label: { en: "Living Room", fr: "Séjour" },
        note: {
          en: "The living space was stripped back and rethought — a lighter, more considered palette replacing the dated heavy finishes. The room now breathes.",
          fr: "Le séjour a été dépouillé et repensé — une palette plus claire et plus réfléchie remplaçant les finitions lourdes d'époque. La pièce respire désormais."
        },
        before: "images/ovronnaz/living-room-before.jpg",
        after:  "images/ovronnaz/living-room-after.jpg"
      },
      {
        label: { en: "Kitchen", fr: "Cuisine" },
        note: {
          en: "A full kitchen redesign — new layout, new materials, the worktop and cabinetry rebuilt from scratch. The kitchen now connects naturally with the living area rather than feeling like a separate box.",
          fr: "Une refonte complète de la cuisine — nouveau plan, nouveaux matériaux, plan de travail et rangements entièrement reconstruits. La cuisine s'articule désormais naturellement avec le séjour plutôt que d'en être isolée."
        },
        before: "images/ovronnaz/kitchen-before-2.jpg",
        after:  "images/ovronnaz/kitchen-after-2.jpg"
      },
      {
        label: { en: "Bedroom", fr: "Chambre" },
        note: {
          en: "The bedroom was stripped back and rethought — calm, considered, and properly proportioned. The new layout maximises the sense of space and light.",
          fr: "La chambre a été dépouillée et repensée — calme, réfléchie et correctement proportionnée. Le nouvel agencement maximise la sensation d'espace et de lumière."
        },
        before: "images/ovronnaz/bedroom-before-1.jpg",
        after:  "images/ovronnaz/bedroom-after-1.jpg"
      },
      {
        label: { en: "Bedroom — Second View", fr: "Chambre — Deuxième vue" },
        note: { en: "", fr: "" },
        before: "images/ovronnaz/bedroom-before-2.jpg",
        after:  "images/ovronnaz/bedroom-after-2.jpg"
      },
      {
        label: { en: "Corridor & Bathroom", fr: "Couloir & Salle de bain" },
        note: {
          en: "The corridor held significant lost space, and the original bathroom was too small. By pushing back the walls, we created a generous bathroom volume with dedicated built-in storage and a separate column for the washer-dryer.",
          fr: "Le couloir recélait un espace important perdu, et la salle de bain d'origine était trop petite. En repoussant les murs, nous avons créé un volume généreux avec des rangements intégrés dédiés et un espace séparé pour la colonne lavante-séchante."
        },
        before: "images/ovronnaz/corridor-bathroom-before.jpg",
        after:  "images/ovronnaz/corridor-bathroom-after.jpg"
      },
      {
        label: { en: "Bathroom", fr: "Salle de bain" },
        note: {
          en: "A window onto the corridor was removed entirely — freeing the wall, eliminating visual clutter, and adding a bespoke reclaimed-wood shelf in its place. A small intervention that transformed the atmosphere of the room.",
          fr: "Une fenêtre donnant sur le couloir a été supprimée — libérant le mur, éliminant la confusion visuelle et laissant place à une étagère sur mesure en bois ancien. Une petite intervention qui a transformé l'atmosphère de la pièce."
        },
        before: "images/ovronnaz/bathroom-before.jpg",
        after:  "images/ovronnaz/bathroom-after.jpg"
      }
    ]
  }
];

let currentProject = 0;

// ── Build project tabs (hidden when single project) ──
function buildProjectTabs() {
  const container = document.getElementById('projectTabs');
  if (!container) return;
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

// ── Editorial renovation cards ──
function buildRenovationCards() {
  const proj = PROJECTS[currentProject];
  const descEl = document.getElementById('renovationDesc');
  if (descEl) descEl.textContent = proj.desc[currentLang] || proj.desc.en;

  const container = document.getElementById('renovationCards');
  if (!container) return;
  container.innerHTML = '';

  proj.pairs.forEach((pair, i) => {
    const label = pair.label[currentLang] || pair.label.en;
    const note  = (pair.note[currentLang] || pair.note.en || '').trim();

    const card = document.createElement('div');
    card.className = 'room-card';
    card.innerHTML = `
      <div class="room-photos">
        <div class="room-photo-col">
          <img src="${pair.before}" alt="${label} — Avant" loading="lazy">
          <span class="photo-tag avant-tag">Avant</span>
        </div>
        <div class="room-photo-col">
          <img src="${pair.after}" alt="${label} — Après" loading="lazy">
          <span class="photo-tag apres-tag">Après</span>
        </div>
      </div>
      <div class="room-info">
        <span class="room-num">${String(i + 1).padStart(2, '0')}</span>
        <div class="room-info-text">
          <h3 class="room-name">${label}</h3>
          ${note ? `<p class="room-note">${note}</p>` : ''}
        </div>
      </div>
    `;

    // Lightbox on click
    card.querySelectorAll('.room-photo-col img').forEach(img => {
      img.addEventListener('click', () => openLightbox(img.src));
    });

    container.appendChild(card);
  });
}

// ── Category tabs ──
document.querySelectorAll('.cat-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    document.getElementById('cat-renovation').style.display = cat === 'renovation' ? '' : 'none';
    document.getElementById('cat-newbuild').style.display   = cat === 'newbuild'   ? '' : 'none';
  });
});

// ── Baechtelenweg slider ──
const NB_PHOTOS = Array.from({length: 41}, (_, i) =>
  `images/baechtelenweg/baechtelenweg-${String(i + 1).padStart(2, '0')}.jpg`
);
let nbIdx = 0;

function nbLoad(idx) {
  nbIdx = (idx + NB_PHOTOS.length) % NB_PHOTOS.length;
  document.getElementById('nb-slide-img').src = NB_PHOTOS[nbIdx];
  document.getElementById('nb-current').textContent = nbIdx + 1;
}

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

document.addEventListener('keydown', e => {
  const catNb = document.getElementById('cat-newbuild');
  if (!catNb || catNb.style.display === 'none') return;
  if (e.key === 'ArrowLeft')  nbLoad(nbIdx - 1);
  if (e.key === 'ArrowRight') nbLoad(nbIdx + 1);
});

// ── Lightbox ──
const lb = document.createElement('div');
lb.className = 'lightbox';
lb.innerHTML = '<button class="lb-close">&times;</button><img id="lbImg" src="" alt="" />';
document.body.appendChild(lb);
lb.querySelector('.lb-close').addEventListener('click', () => lb.classList.remove('open'));
lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });

function openLightbox(src) {
  document.getElementById('lbImg').src = src;
  lb.classList.add('open');
}

// ── Init ──
buildProjectTabs();
buildRenovationCards();
setLang(currentLang);
