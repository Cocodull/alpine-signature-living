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
    'contact.note':  'Impasse de la Chapelle 37, 1918 La Tzoumaz &nbsp;·&nbsp; Switzerland',
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
    'contact.note':  'Impasse de la Chapelle 37, 1918 La Tzoumaz &nbsp;·&nbsp; Suisse',
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
    title: {
      en: "Appartement 2.5 pièces — Ovronnaz",
      fr: "Appartement 2.5 pièces — Ovronnaz"
    },
    desc: {
      en: "A complete transformation of a dated alpine apartment in Ovronnaz — every room reimagined, every surface reconsidered, and every detail resolved with precision.",
      fr: "Une transformation complète d'un appartement alpin vieillissant à Ovronnaz — chaque pièce repensée, chaque surface reconsidérée, chaque détail résolu avec précision."
    },
    pairs: [
      {
        label: { en: "Living & Kitchen — The Result", fr: "Séjour & Cuisine — Le résultat" },
        note: {
          en: "With all changes made — and the floors unified with the same natural oak as the bedroom — the space found its harmony. Warm, considered, with an unmistakable sense of comfort and quiet luxury.",
          fr: "Avec tous ces changements — et les sols unifiés avec le même chêne naturel que dans la chambre — la pièce a trouvé toute son harmonie. Chaleureuse, réfléchie, avec un sentiment indéniable de confort et de luxe discret."
        },
        before: "images/ovronnaz/s08-before.jpg",
        after:  "images/ovronnaz/s08-after.png"
      },
      {
        label: { en: "Living Room", fr: "Séjour" },
        note: {
          en: "The fireplace and adjacent concrete bench dominated the room and claimed significant space. Their removal — along with the false ceiling beams — opened the volume entirely and made the room feel markedly larger.",
          fr: "La cheminée et le banc en béton adjacent dominaient la pièce et prenaient beaucoup de place. Leur suppression — ainsi que les fausses poutres au plafond — a ouvert le volume et rendu la pièce bien plus grande."
        },
        before: "images/ovronnaz/s06-before.jpg",
        after:  "images/ovronnaz/s06-after.png"
      },
      {
        label: { en: "Living Room — Furnished", fr: "Séjour — Meublé" },
        note: {
          en: "The apartment is now offered as a furnished alpine retreat — designed for both aesthetics and comfort, ready to welcome guests.",
          fr: "L'appartement est maintenant proposé en location meublée — conçu à la fois pour l'esthétique et le confort, prêt à accueillir des hôtes."
        },
        before: "images/ovronnaz/salon s16 before.jpg",
        after:  "images/ovronnaz/s16 after.jpg"
      },
      {
        label: { en: "Kitchen", fr: "Cuisine" },
        note: {
          en: "The bar was imposing — dominating the kitchen and making an already dark space feel smaller. Its removal opened the room entirely, creating space for a proper dining table and a natural flow between kitchen and living area.",
          fr: "Le bar était très imposant — il dominait la cuisine et rendait l'espace sombre encore plus petit. Sa suppression a ouvert le volume, créant de la place pour une grande table et une fluidité naturelle entre cuisine et séjour."
        },
        before: "images/ovronnaz/s07-before.jpg",
        after:  "images/ovronnaz/s07-after.jpg"
      },
      {
        label: { en: "Bedroom — Cabinets", fr: "Chambre — Placards" },
        note: {
          en: "The solid-wood cabinet doors were sandblasted rather than replaced — creating a textured, three-dimensional surface — then oiled with a Châtaigne N68 finish to highlight the natural grain and harmonise with the reclaimed wood on the walls.",
          fr: "Les portes de placards en bois massif ont été sablées plutôt que remplacées — créant une surface texturée et tridimensionnelle — puis huilées avec une teinte N68 Châtaigne pour mettre en valeur le veinage naturel et s'harmoniser avec le vieux bois des murs."
        },
        before: "images/ovronnaz/s04-before.jpg",
        after:  "images/ovronnaz/s04-after.png"
      },
      {
        label: { en: "Bedroom — Walls & Floor", fr: "Chambre — Murs & Sol" },
        note: {
          en: "Reclaimed wood on the walls brings a warmth and sophistication the original panelling could not achieve. The floor was laid with natural oak — rustic and luminous in equal measure.",
          fr: "Le vieux bois au mur apporte une sophistication et une chaleur que le lambris original ne pouvait offrir. Le sol est recouvert de chêne naturel, dans la continuité d'une esthétique rustique et lumineuse."
        },
        before: "images/ovronnaz/s05-before.jpg",
        after:  "images/ovronnaz/s05-after.png"
      },
      {
        label: { en: "Corridor & Bathroom", fr: "Couloir & Salle de bain" },
        note: {
          en: "The corridor held significant lost space, and the original bathroom was too small. By pushing back the walls, we created a generous bathroom volume with dedicated built-in storage and a separate column for the washer-dryer.",
          fr: "Le couloir recélait un espace perdu important, et la salle de bain d'origine était trop petite. En repoussant les murs, nous avons créé un volume généreux avec des rangements dédiés et une colonne séparée pour la machine à laver."
        },
        before: "images/ovronnaz/s09 before.jpg",
        after:  "images/ovronnaz/s09-after.jpg"
      },
      {
        label: { en: "Bathroom", fr: "Salle de bain" },
        note: {
          en: "The bathroom was reimagined with new tiling and fixtures. The window above the radiator was removed, clearing the space and adding a bespoke reclaimed-wood shelf in its place.",
          fr: "La salle de bain a été entièrement repensée. La fenêtre au-dessus du radiateur a été supprimée, dégageant l'espace et laissant place à une étagère en vieux bois sur mesure."
        },
        before: "images/ovronnaz/s10-before.jpg",
        after:  "images/ovronnaz/s10-after-2.jpg"
      },
      {
        label: { en: "Bathroom — Second View", fr: "Salle de bain — Deuxième vue" },
        note: {
          en: "A second angle of the bathroom transformation, showing the full scope of the renovation.",
          fr: "Un deuxième angle de la transformation de la salle de bain, montrant l'ampleur complète de la rénovation."
        },
        before: "images/ovronnaz/s11 before.jpg",
        after:  ["images/ovronnaz/s11-after.jpg", "images/ovronnaz/s11- after.jpg"]
      },
      {
        label: { en: "Shower", fr: "Douche" },
        note: {
          en: "The shower was cramped and dark. By replacing the solid walls and tray with glass, we gained both space and light — creating a larger shower and a bathroom that finally breathes.",
          fr: "La douche était étroite et sombre. En remplaçant les murs pleins et le bac par du verre, nous avons gagné espace et lumière — pour une douche plus grande et une salle de bain qui respire enfin."
        },
        before: "images/ovronnaz/s12-before.jpg",
        after:  "images/ovronnaz/s12after.jpg"
      },
      {
        label: { en: "Entrance", fr: "Entrée" },
        note: {
          en: "The wall panelling was painted in a natural, chalky light grey — a quiet but decisive shift. The cupboard doors were refinished to replace the original orange tones with a more harmonious, natural palette.",
          fr: "Le lambris a été peint avec une peinture naturelle gris clair, très mat et crayeuse. Les portes des placards ont été retravaillées pour remplacer les tons oranges originels par une teinte plus harmonieuse et naturelle."
        },
        before: "images/ovronnaz/s02-before.jpg",
        after:  "images/ovronnaz/s02-after.jpg"
      },
      {
        label: { en: "Entrance — Floor & Light", fr: "Entrée — Sol & Lumière" },
        note: {
          en: "The floor was laid with textured anthracite black tiles, creating coherence and a sense of quiet luxury. The cold white chandelier was replaced by warm-light spotlights — more welcoming, more considered.",
          fr: "Le sol est recouvert de carrelage anthracite texturisé, créant une harmonie dans la pièce et une sensation de luxe. La lumière blanche du lustre a été remplacée par des spots de lumière chaude, bien plus accueillants."
        },
        before: "images/ovronnaz/s03-bbefore.jpg",
        after:  "images/ovronnaz/s03-after.jpg"
      },
      {
        label: { en: "Floor Plan", fr: "Plan d'appartement" },
        note: {
          en: "The renovation scope at a glance — walls removed, the bathroom expanded into the corridor, a new Italian shower added, and every surface reimagined. Total interior surface: 54.8 m².",
          fr: "Le périmètre de la rénovation en un coup d'œil — murs abattus, salle de bain élargie sur le couloir, douche italienne créée, chaque surface repensée. Surface intérieure totale : 54,8 m²."
        },
        solo: "images/ovronnaz/lst page.jpg"
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

// ── Before/After comparison slider ──
function initCompare(el) {
  function setPos(x) {
    const rect = el.getBoundingClientRect();
    const pct  = Math.max(10, Math.min(90, ((x - rect.left) / rect.width) * 100));
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

// ── Editorial renovation cards ──
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
  const afterLabel  = currentLang === 'fr' ? 'Après' : 'After';

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

  const track  = container.querySelector('.reno-track');
  const dotsEl = container.querySelector('.reno-dots');
  const infoEl = container.querySelector('.reno-info-panel');
  const currEl = container.querySelector('.reno-current');
  let current  = 0;

  proj.pairs.forEach((pair, i) => {
    const slide = document.createElement('div');
    slide.className = 'reno-slide';

    if (pair.solo) {
      const label = pair.label[currentLang] || pair.label.en;
      slide.innerHTML = `<div class="room-solo"><img src="${pair.solo}" alt="${label}" loading="lazy"></div>`;
      slide.querySelector('img').addEventListener('click', e => openLightbox(e.target.src));
    } else {
      const afters    = Array.isArray(pair.after) ? pair.after : [pair.after];
      const mainAfter = afters[0];
      const extras    = afters.slice(1);
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
      const pair  = proj.pairs[current];
      const label = pair.label[currentLang] || pair.label.en;
      const note  = (pair.note?.[currentLang] || pair.note?.en || '').trim();
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
  track.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) dx < 0 ? goTo(current + 1) : goTo(current - 1);
  });

  renoNav = { go: goTo, get idx() { return current; } };
  goTo(0);
}

let renoNav = null;
document.addEventListener('keydown', e => {
  if (!renoNav) return;
  const section = document.getElementById('renovationCards');
  if (!section) return;
  const rect = section.getBoundingClientRect();
  if (rect.bottom < 0 || rect.top > window.innerHeight) return;
  if (e.key === 'ArrowLeft')  { e.preventDefault(); renoNav.go(renoNav.idx - 1); }
  if (e.key === 'ArrowRight') { e.preventDefault(); renoNav.go(renoNav.idx + 1); }
});

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
const NB_PHOTOS = [
  // Kitchen
  'images/baechtelenweg/baechtelenweg-04.png',
  'images/baechtelenweg/baechtelenweg-05.png',
  'images/baechtelenweg/baechtelenweg-01.png',
  // Living room
  'images/baechtelenweg/baechtelenweg-02.png',
  'images/baechtelenweg/baechtelenweg-03.png',
  // Office
  'images/baechtelenweg/baechtelenweg-07.png',
  // Bedroom
  'images/baechtelenweg/baechtelenweg-06.png',
  // Bathroom
  'images/baechtelenweg/baechtelenweg-08.png',
  'images/baechtelenweg/baechtelenweg-09.png',
  // Balcony
  'images/baechtelenweg/baechtelenweg-10.png',
  'images/baechtelenweg/baechtelenweg-11.png',
  // Tower exterior
  'images/baechtelenweg/baechtelenweg-12.jpg',
  'images/baechtelenweg/baechtelenweg-13.jpg',
];
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

// ── La Tzoumaz slider ──
const TZ_PHOTOS = [
  // Living room — fireplace hero first (all with fire)
  'images/tzoumaz/tzoumaz-29.jpg',
  'images/tzoumaz/tzoumaz-28.jpg',
  'images/tzoumaz/tzoumaz-30.jpg',
  'images/tzoumaz/tzoumaz-27.jpg',
  // Kitchen
  'images/tzoumaz/tzoumaz-20.jpg',
  'images/tzoumaz/tzoumaz-21.jpg',
  'images/tzoumaz/tzoumaz-15.jpg',
  // Terrace
  'images/tzoumaz/tzoumaz-23.jpg',
  'images/tzoumaz/tzoumaz-24.jpg',
  'images/tzoumaz/tzoumaz-25.jpg',
  'images/tzoumaz/tzoumaz-26.jpg',
  // Bedrooms
  'images/tzoumaz/tzoumaz-13.jpg',
  'images/tzoumaz/tzoumaz-14.jpg',
  'images/tzoumaz/tzoumaz-07.jpg',
  'images/tzoumaz/tzoumaz-10.jpg',
  // Bathrooms
  'images/tzoumaz/tzoumaz-11.jpg',
  'images/tzoumaz/tzoumaz-12.jpg',
  'images/tzoumaz/tzoumaz-01.jpg',
  'images/tzoumaz/tzoumaz-02.jpg',
  'images/tzoumaz/tzoumaz-03.jpg',
  // Corridor last
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

document.addEventListener('keydown', e => {
  const catNb = document.getElementById('cat-newbuild');
  if (!catNb || catNb.style.display === 'none') return;
  if (e.key === 'ArrowLeft')  { nbLoad(nbIdx - 1); tzLoad(tzIdx - 1); }
  if (e.key === 'ArrowRight') { nbLoad(nbIdx + 1); tzLoad(tzIdx + 1); }
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
