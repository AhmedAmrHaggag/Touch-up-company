/* =========================================================
   3AG — Service Details page
   Data-driven: one template, six services, smooth in-page
   navigation between them via the "related services" cards.
   ========================================================= */

const SERVICES = {

  'civil-construction': {
    index: '01',
    title: 'Civil Construction',
    tagline: 'Foundations, structural concrete & full-build civil works.',
        heroVideo: './videos/construction video1.mp4',
    heroImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop',
    heroAlt: 'Civil construction site with concrete structure',
    intro: [
      "From the first excavation to the final structural pour, our civil teams run the build to spec and schedule — with our own site supervision on every stage, not a subcontractor's.",
      "We handle foundations, structural concrete, shell & core, and the coordination between trades that usually causes the delays."
    ],
    features: [
      { label: 'Scope', text: 'Excavation, foundations, structural concrete, shell & core.' },
      { label: 'Team', text: 'In-house site engineers and supervision, not outsourced.' },
      { label: 'Timeline', text: 'Phased schedules with weekly progress reporting.' },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=900&auto=format&fit=crop', alt: 'Concrete structure under construction' },
      { src: 'https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=900&auto=format&fit=crop', alt: 'Steel reinforcement on a civil site' },
      { src: 'https://images.unsplash.com/photo-1590644365607-1c5a0d0b9d7f?q=80&w=900&auto=format&fit=crop', alt: 'Concrete pour on a foundation slab' },
      { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=900&auto=format&fit=crop', alt: 'Construction crane on a civil site' },
      { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=900&auto=format&fit=crop', alt: 'Engineers reviewing structural plans on site' },
    ],
    projects: [
      { tag: 'Industrial Zone', title: 'Warehouse shell & core', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=800&auto=format&fit=crop' },
      { tag: 'Commercial', title: 'Retail block foundations', img: 'https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=800&auto=format&fit=crop' },
      { tag: 'Mixed-use', title: 'Structural concrete frame', img: 'https://images.unsplash.com/photo-1461695008884-244cb4543d74?q=80&w=800&auto=format&fit=crop' },
    ],
  },

  'touch-up-construction': {
    index: '02',
    title: 'Touch-Up Construction',
    tagline: 'Finishing, repairs & renovation that protect the build.',
    heroVideo: './videos/WhatsApp Video 2026-09-23 at 10.34.55 AM.mp4',
    //  heroImage: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1200&auto=format&fit=crop',
    heroAlt: 'Finishing and touch-up construction work on a wall',
    intro: [
      "The finishing pass is what a client actually sees, so we treat it as its own discipline — plastering, painting, patching and the snag-list work that gets a site handed over clean.",
      "Once you're in, our touch-up crews keep coming back for the small repairs that keep a finished space looking finished."
    ],
    features: [
      { label: 'Scope', text: 'Plastering, painting, patching, snag-list repairs.' },
      { label: 'Approach', text: 'Handover-ready finishing, then scheduled upkeep after.' },
      { label: 'Response', text: 'Fast turnaround on small repair call-outs.' },
    ],
    gallery: [
      { src: './images/touch up details 1.jpeg', alt: 'Wall plastering and finishing work' },
      { src: './images/touch up 3.jpeg', alt: 'Interior painting in progress' },
      { src: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=900&auto=format&fit=crop', alt: 'Finished interior wall detail' },
      { src: './images/touch up 4.jpeg', alt: 'Touch-up repair work on a wall corner' },
      { src: './images/touch up 5.jpeg', alt: 'Finishing crew reviewing a snag list' },
    ],
    projects: [
      { tag: 'Residential', title: 'Full interior finishing pass', img: './videos/touch up video 3 .mp4' },
      // { tag: 'Office Fit-out', title: 'Snag-list repair programme', img: './videos/touch up video 4 .mp4' },
      { tag: 'Retail', title: 'Post-handover maintenance', img: './videos/vidio 4.mp4' },
    ],
  },

  'transportation': {
    index: '03',
    title: 'Transportation',
    tagline: 'Car & vehicle transport for people, sites and materials.',
    heroVideo: './videos/transportain video 1.mp4',
     heroImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop',
    heroAlt: 'Fleet of transport vehicles on a road',
    intro: [
      "A managed car fleet for site staff, client transfers and material runs — dispatched and tracked so your people and cargo arrive on schedule, every time.",
      "Because we run the fleet ourselves, transport is never the reason a project slips."
    ],
    features: [
      { label: 'Fleet', text: 'Staff transfers, client transport, material runs.' },
      { label: 'Dispatch', text: 'Centrally scheduled and tracked, not ad-hoc.' },
      { label: 'Coverage', text: 'Site-to-site and city routes, day or night.' },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=900&auto=format&fit=crop', alt: 'Transport vehicles parked in a row' },
      { src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=900&auto=format&fit=crop', alt: 'Car driving on a highway' },
      { src: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=900&auto=format&fit=crop', alt: 'Fleet vehicle interior dashboard' },
      { src: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=900&auto=format&fit=crop', alt: 'Vehicles queued at a dispatch yard' },
      { src: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=900&auto=format&fit=crop', alt: 'Driver checking a transport vehicle' },
    ],
    projects: [
      { tag: 'Staff Transfer', title: 'Daily site-to-site shuttle', img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop' },
      { tag: 'Materials', title: 'Cross-city supply runs', img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop' },
      { tag: 'Client Transport', title: 'Scheduled transfer service', img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop' },
    ],
  },

  'gis-services': {
    index: '04',
    title: 'GIS Services',
    tagline: 'Land surveying, mapping & spatial data for planning.',
        heroVideo: './videos/gis video1.mp4',
     heroImage: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?q=80&w=1200&auto=format&fit=crop',
    heroAlt: 'Topographic map and land surveying equipment',
    intro: [
      "Site surveys, topographic mapping and GIS data layers that feed directly into design and permitting — so ground truth shapes every decision before we break ground.",
      "Our survey data becomes the reference layer every other team on the project builds from."
    ],
    features: [
      { label: 'Survey', text: 'Topographic and boundary surveys, GPS-based.' },
      { label: 'Mapping', text: 'GIS data layers for planning and permitting.' },
      { label: 'Output', text: 'Deliverables ready for design and civil teams.' },
    ],
    gallery: [
      { src: './gif/gis 1.gif', alt: 'Land surveying with GPS equipment' },
      { src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=900&auto=format&fit=crop', alt: 'Topographic map spread on a table' },
      { src: './gif/gis 2.gif', alt: 'Surveyor using a total station on site' },
      { src: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=900&auto=format&fit=crop', alt: 'Aerial view of surveyed land plots' },
      { src: 'https://images.unsplash.com/photo-1454165833767-027f8636c8ff?q=80&w=900&auto=format&fit=crop', alt: 'Engineer analysing spatial data on a laptop' },
    ],
    projects: [
      { tag: 'Pre-construction', title: 'Full site topographic survey', img: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?q=80&w=800&auto=format&fit=crop' },
      { tag: 'Planning', title: 'GIS layer set for permitting', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop' },
      { tag: 'Infrastructure', title: 'Boundary & utility mapping', img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop' },
    ],
  },

  'road-construction': {
    index: '05',
    title: 'Road Construction',
    tagline: 'Grading, base-work & asphalt paving for roads & access.',
        heroVideo: './videos/construction video1.mp4',
    heroAlt: 'Road construction with asphalt paving',
    intro: [
      "Earthworks, sub-base preparation and asphalt or concrete paving for access roads, site roads and public works — built to load spec and drainage requirements.",
      "Our road crews work alongside our own transport fleet, so material supply is never the bottleneck."
    ],
    features: [
      { label: 'Earthworks', text: 'Grading, cut and fill, sub-base preparation.' },
      { label: 'Paving', text: 'Asphalt and concrete, to load and drainage spec.' },
      { label: 'Access', text: 'Site roads and public works alike.' },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=900&auto=format&fit=crop', alt: 'Asphalt road paving equipment' },
      { src: 'https://images.unsplash.com/photo-1592928038288-9a9e78e91159?q=80&w=900&auto=format&fit=crop', alt: 'Road paving in progress' },
      { src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=900&auto=format&fit=crop', alt: 'Heavy machinery grading a road base' },
      { src: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=900&auto=format&fit=crop', alt: 'Freshly paved asphalt road' },
      { src: 'https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=900&auto=format&fit=crop', alt: 'Road construction crew at work' },
    ],
    projects: [
      // { tag: 'Access Road', title: 'Industrial zone paving', img: './videos/construction road 2.mp4' },
      { tag: 'Public Works', title: 'District road resurfacing', img: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=800&auto=format&fit=crop' },
      { tag: 'Earthworks', title: 'Site road grading & base', img: 'https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=800&auto=format&fit=crop' },
    ],
  },

  'fleet-maintenance': {
    index: '06',
    title: 'Jumbo & Mini Vehicle Maintenance',
    tagline: 'Scheduled upkeep for heavy jumbo units & light vehicles.',
    heroImage: 'https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?q=80&w=1200&auto=format&fit=crop',
    heroAlt: 'Mechanic servicing a heavy vehicle in a workshop',
    intro: [
      "In-house servicing for jumbo trucks and mini vehicles alike — routine maintenance, breakdown response and parts management to keep every unit road-ready.",
      "Because the workshop is ours, a maintenance schedule is never held up waiting on a third party."
    ],
    features: [
      { label: 'Coverage', text: 'Jumbo trucks and mini/light vehicles, one workshop.' },
      { label: 'Schedule', text: 'Routine servicing plus 24/7 breakdown response.' },
      { label: 'Parts', text: 'Managed inventory to minimise downtime.' },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?q=80&w=900&auto=format&fit=crop', alt: 'Mechanic servicing a heavy vehicle' },
      { src: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=900&auto=format&fit=crop', alt: 'Truck fleet maintenance workshop' },
      { src: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=900&auto=format&fit=crop', alt: 'Engine maintenance close-up' },
      { src: 'https://images.unsplash.com/photo-1580983561371-7f4b242d8ec0?q=80&w=900&auto=format&fit=crop', alt: 'Workshop tools laid out for vehicle service' },
      { src: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=900&auto=format&fit=crop', alt: 'Technician inspecting a vehicle underside' },
    ],
    projects: [
      { tag: 'Heavy Fleet', title: 'Jumbo truck service programme', img: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=800&auto=format&fit=crop' },
      { tag: 'Light Fleet', title: 'Mini vehicle routine upkeep', img: 'https://images.unsplash.com/photo-1580983561371-7f4b242d8ec0?q=80&w=800&auto=format&fit=crop' },
      { tag: 'Breakdown', title: '24/7 response & recovery', img: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=800&auto=format&fit=crop' },
    ],
  },
};

const SERVICE_ORDER = [
  'civil-construction',
  'touch-up-construction',
  'transportation',
  'gis-services',
  'road-construction',
  'fleet-maintenance',
];

/* ---------- helpers ---------- */
function getSlugFromURL() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('service');
  return SERVICES[slug] ? slug : SERVICE_ORDER[0];
}

function buildFeatureRows(features) {
  return features.map(f => `
    <div class="detail-feature">
      <span class="num">${String(features.indexOf(f) + 1).padStart(2, '0')}</span>
      <div>
        <p class="font-display font-600 text-sm text-charcoal">${f.label}</p>
        <p class="text-sm text-ink/60 mt-0.5">${f.text}</p>
      </div>
    </div>`).join('');
}

// function buildGallerySlides(gallery) {
//   return gallery.map(g => `
//     <div class="carousel-slide">
//       <img src="${g.src}" alt="${g.alt}" loading="lazy">
//     </div>`).join('');
// }


function isVideoSource(src) {
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(src);
}

function buildGallerySlides(gallery) {
  return gallery.map(g => `
    <div class="carousel-slide">
      ${
        isVideoSource(g.src)
          ? `
            <video
              src="${g.src}"
              autoplay
              muted
              loop
              controls
              playsinline
              preload="metadata"
              aria-label="${g.alt}"
            ></video>
          `
          : `
            <img
              src="${g.src}"
              alt="${g.alt}"
              loading="lazy"
            >
          `
      }
    </div>
  `).join('');
}

function buildDots(count) {
  let dots = '';
  for (let i = 0; i < count; i++) {
    dots += `<span class="carousel-dot${i === 0 ? ' active' : ''}" data-dot="${i}"></span>`;
  }
  return dots;
}

// function buildProjects(projects) {
//   return projects.map(p => `
//     <div class="project-card">
//       <span class="project-tag">${p.tag}</span>
//       <img src="${p.img}" alt="${p.title}" loading="lazy">
//       <p class="font-display font-600 text-sm text-charcoal mt-3">${p.title}</p>
//     </div>`).join('');
// }


function buildProjects(projects) {
  return projects.map(p => `
    <div class="project-card">
      <span class="project-tag">${p.tag}</span>

      ${
        isVideoSource(p.img)
          ? `
            <video
              src="${p.img}"
              autoplay
              muted
              loop
              controls
              playsinline
              preload="metadata"
              aria-label="${p.title}"
            ></video>
          `
          : `
            <img
              src="${p.img}"
              alt="${p.title}"
              loading="lazy"
            >
          `
      }

      <p class="font-display font-600 text-sm text-charcoal mt-3">
        ${p.title}
      </p>
    </div>
  `).join('');
}

function buildRelated(currentSlug) {
  return SERVICE_ORDER
    .filter(s => s !== currentSlug)
    .map(slug => {
      const s = SERVICES[slug];
      return `
      <a href="service-details.html?service=${slug}" data-slug="${slug}" class="related-card">
        <div class="related-media">
          <img src="${s.heroImage}" alt="${s.heroAlt}" loading="lazy">
        </div>
        <div class="p-4">
          <span class="text-tandark text-xs font-display tracking-widest">${s.index}</span>
          <p class="font-display font-600 text-base text-charcoal mt-1">${s.title}</p>
          <p class="text-xs text-ink/55 mt-1.5">${s.tagline}</p>
        </div>
      </a>`;
    }).join('');
}

/* ---------- main render ---------- */
function renderService(slug) {
  const s = SERVICES[slug];
  if (!s) return;

  document.title = `${s.title} — 3AG`;
  const crumb = document.getElementById('breadcrumbCurrent');
  if (crumb) crumb.textContent = s.title;

  const main = document.getElementById('pageContent');
  main.innerHTML = `
    <!-- hero -->
    <section class="bg-cream pb-4">
      <div class="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center detail-enter">

       

        <div class="details-hero-media relative order-1">
  ${s.heroVideo
      ? `<video
          src="${s.heroVideo}"
          // autoplay
          // muted
          controls
          playsinline
          class="w-full h-full object-cover"
        ></video>`
      : `<img src="${s.heroImage}" alt="${s.heroAlt}">`
    }

  <span class="corner corner-tl border-tandark"></span>
  <span class="corner corner-br border-tandark"></span>
</div>


        <div class="order-2">
          <span class="text-tandark text-xs font-display tracking-widest">${s.index}</span>
          <h1 class="font-display font-700 text-3xl md:text-5xl text-charcoal mt-2 leading-tight">${s.title}</h1>
          <p class="text-ink/60 mt-4 leading-relaxed max-w-md">${s.tagline}</p>
          ${s.intro.map(p => `<p class="text-ink/65 mt-4 leading-relaxed max-w-md">${p}</p>`).join('')}
          <a href="index.html#contact" class="inline-flex items-center justify-center bg-charcoal text-cream font-display font-600 px-7 py-3.5 hover:bg-tandark hover:text-charcoal transition-colors duration-200 mt-7">
            Request this service
          </a>
        </div>
      </div>
    </section>

    <!-- gallery + description -->
    <section class="bg-cream py-14 md:py-20">
      <div class="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-start">
        <div class="detail-enter">
          <div class="flex items-center justify-between mb-5">
            <h2 class="font-display font-700 text-2xl md:text-3xl text-charcoal">Gallery</h2>
            <div class="hidden sm:flex gap-2">
              <button class="carousel-btn-inline prev-inline" aria-label="Previous image">&larr;</button>
              <button class="carousel-btn-inline next-inline" aria-label="Next image">&rarr;</button>
            </div>
          </div>
          <div class="carousel-wrap">
            <button class="carousel-btn prev" aria-label="Previous image">&larr;</button>
            <div class="carousel-track" id="galleryTrack">
              ${buildGallerySlides(s.gallery)}
            </div>
            <button class="carousel-btn next" aria-label="Next image">&rarr;</button>
          </div>
          <div class="carousel-dots" id="galleryDots">
            ${buildDots(s.gallery.length)}
          </div>
        </div>

        <div class="detail-enter">
          <h2 class="font-display font-700 text-2xl md:text-3xl text-charcoal mb-2">What's included</h2>
          <p class="text-sm text-ink/55 mb-1">A closer look at how we run this service on site.</p>
          <div class="mt-4">
            ${buildFeatureRows(s.features)}
          </div>
        </div>
      </div>
    </section>

    <!-- projects done in this service -->
    <section class="bg-cream pb-14 md:pb-20">
      <div class="max-w-7xl mx-auto px-5 md:px-10 detail-enter">
        <div class="border-t border-ink/10 pt-10 md:pt-14">
          <span class="text-tandark font-display font-600 text-sm">Track record</span>
          <h2 class="font-display font-700 text-2xl md:text-4xl text-charcoal mt-2 mb-8 leading-tight">Projects done in this service</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            ${buildProjects(s.projects)}
          </div>
        </div>
      </div>
    </section>

    <!-- related services -->
    <section class="bg-cream pb-16 md:pb-24">
      <div class="max-w-7xl mx-auto px-5 md:px-10 detail-enter">
        <div class="border-t border-ink/10 pt-10 md:pt-14">
          <span class="text-tandark font-display font-600 text-sm">Keep exploring</span>
          <h2 class="font-display font-700 text-2xl md:text-4xl text-charcoal mt-2 mb-8 leading-tight">You may be interested in this service too</h2>
          <div class="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5" id="relatedGrid">
            ${buildRelated(slug)}
          </div>
        </div>
      </div>
    </section>
  `;

  // Keep dynamically rendered service copy in sync with the shared page language.
  if (typeof window.apply3AGLanguage === 'function') {
    window.apply3AGLanguage();
  }

  // staggered entrance
  const enterEls = main.querySelectorAll('.detail-enter');
  enterEls.forEach((el, i) => {
    el.style.transitionDelay = `${i * 90}ms`;
  });
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      enterEls.forEach(el => el.classList.add('detail-enter-active'));
    });
  });

  initCarousel(s.gallery.length);
  bindRelatedCards();
}

/* ---------- carousel: automatic + manual ---------- */
function initCarousel(slideCount) {
  const track = document.getElementById('galleryTrack');
  const dotsWrap = document.getElementById('galleryDots');
  if (!track) return;

  const prevBtns = document.querySelectorAll('.carousel-btn.prev, .prev-inline');
  const nextBtns = document.querySelectorAll('.carousel-btn.next, .next-inline');
  const dots = dotsWrap ? dotsWrap.querySelectorAll('.carousel-dot') : [];

  let current = 0;
  let autoplayId = null;
  const AUTOPLAY_MS = 10000;

  const slideMetrics = () => {
    const slide = track.querySelector('.carousel-slide');
    if (!slide) return { width: 0, gap: 0 };
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap || '0');
    return { width: slide.getBoundingClientRect().width, gap };
  };

  const goTo = (index, smooth = true) => {
    const count = slideCount;
    current = (index + count) % count;
    const { width, gap } = slideMetrics();
    track.scrollTo({ left: current * (width + gap), behavior: smooth ? 'smooth' : 'auto' });
    updateDots();
  };

  const updateDots = () => {
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayId = setInterval(next, AUTOPLAY_MS);
  };
  const stopAutoplay = () => {
    if (autoplayId) clearInterval(autoplayId);
    autoplayId = null;
  };
  let resumeTimer = null;
  const pauseThenResume = () => {
    stopAutoplay();
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(startAutoplay, 6000);
  };

  prevBtns.forEach(btn => btn.addEventListener('click', () => { prev(); pauseThenResume(); }));
  nextBtns.forEach(btn => btn.addEventListener('click', () => { next(); pauseThenResume(); }));

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goTo(parseInt(dot.getAttribute('data-dot'), 10));
      pauseThenResume();
    });
  });

  // manual touch/drag scroll: keep dots in sync, and pause autoplay while interacting
  let scrollTimeout = null;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const { width, gap } = slideMetrics();
      if (width) {
        current = Math.round(track.scrollLeft / (width + gap));
        updateDots();
      }
    }, 100);
  }, { passive: true });

  track.addEventListener('pointerdown', pauseThenResume, { passive: true });
  track.addEventListener('touchstart', pauseThenResume, { passive: true });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion && slideCount > 1) {
    startAutoplay();
  }

  window.addEventListener('resize', () => goTo(current, false));
}

/* ---------- related card navigation (smooth in-page swap) ---------- */
function bindRelatedCards() {
  const grid = document.getElementById('relatedGrid');
  if (!grid) return;

  grid.querySelectorAll('.related-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const slug = card.getAttribute('data-slug');
      if (!slug || !SERVICES[slug]) return;

      const main = document.getElementById('pageContent');
      main.classList.add('fading');

      setTimeout(() => {
        const nextUrl = new URL(`service-details.html?service=${slug}`, window.location.href);
        nextUrl.searchParams.set('lang', window.current3AGLanguage?.() || 'en');
        history.pushState({ slug }, '', nextUrl);
        renderService(slug);
        main.classList.remove('fading');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 320);
    });
  });
}

/* ---------- browser back/forward ---------- */
window.addEventListener('popstate', () => {
  const slug = getSlugFromURL();
  const main = document.getElementById('pageContent');
  main.classList.add('fading');
  setTimeout(() => {
    renderService(slug);
    main.classList.remove('fading');
  }, 200);
});

/* ---------- init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('pageContent');
  if (!main) return; // not on the details page
  renderService(getSlugFromURL());
});
