/* =========================================================
   3AG — language switcher (EN <-> AR) shared by both pages
   - English text stays in the HTML; AR below maps English -> Arabic
   - Choice is saved in localStorage AND carried in internal links (?lang=)
     so it survives page changes even when opening files directly.
   ========================================================= */
(function () {
  const KEY = '3ag-lang';

  const AR = {
    // header / menu / common
    '3AG — Civil, Road & Fleet Engineering': '3AG — إنشاءات وطرق وأسطول',
    'Engineering & Fleet': 'هندسة وأسطول',
    'Services': 'الخدمات', 'About': 'من نحن', 'Work': 'أعمالنا', 'Process': 'آلية العمل', 'Contact': 'تواصل معنا',
    'Request a quote': 'اطلب عرض سعر',
    'Open menu': 'فتح القائمة', 'Back to top': 'العودة إلى الأعلى', 'Switch language': 'تغيير اللغة',
    'Cairo, Egypt': 'القاهرة، مصر',
    // hero
    'Civil · Road · GIS · Fleet': 'إنشاءات · طرق · GIS · أسطول',
    'Ground work,': 'نبني الأساس،', 'road work,': 'نُعبّد الطريق،', 'fleet work.': 'ونُدير الأسطول.',
    '3AG plans, builds and maintains the infrastructure your operations run on — from foundations to finishing, from mapping the ground to keeping every vehicle moving.':
      'تخطّط 3AG وتبني وتصون البنية التحتية التي تقوم عليها أعمالك — من الأساسات إلى التشطيب، ومن مسح الأرض إلى إبقاء كل مركبة في حركة.',
    'See our services': 'اكتشف خدماتنا', 'Start a project': 'ابدأ مشروعك',
    // stats
    'Years on site': 'سنوات خبرة ميدانية', 'Projects delivered': 'مشروع منجز',
    'Vehicles & fleet units': 'مركبة ووحدة أسطول', 'Maintenance support': 'دعم صيانة متواصل',
    // services
    'What we do': 'ما نقدّمه', 'Six disciplines, one site team.': 'ست تخصصات، فريق ميداني واحد.',
    'Tap a service to see how we run it end to end — we scope, staff and deliver every discipline in-house.':
      'اضغط على أي خدمة لترى كيف ندير تنفيذها من البداية إلى النهاية — نحدد النطاق ونوفّر الفريق ونسلّم كل تخصص بأيدينا.',
    'View full details': 'عرض التفاصيل الكاملة', 'Expand details': 'عرض المزيد',
    'Civil Construction': 'الإنشاءات المدنية',
    'Foundations, structural concrete & full-build civil works.': 'أساسات وخرسانة إنشائية وأعمال مدنية متكاملة.',
    'From site excavation and foundations through structural concrete and shell & core, our civil teams run the build to spec and schedule, with our own supervision on every pour.':
      'من حفر الموقع والأساسات مرورًا بالخرسانة الإنشائية والهيكل الكامل، تدير فرقنا المدنية التنفيذ وفق المواصفات والجدول الزمني، بإشراف مباشر منا على كل صبّة.',
    'Touch-Up Construction': 'التشطيب والترميم',
    'Finishing, repairs & renovation that protect the build.': 'تشطيب وإصلاحات وتجديد تحمي مشروعك.',
    'Plastering, painting, patching and snag-list repairs — the finishing pass that gets a site handed over clean, and the maintenance touch-ups that keep it that way.':
      'بياض ودهان وترقيع وإصلاح ملاحظات الاستلام — مرحلة التشطيب التي تسلّم الموقع نظيفًا، واللمسات الصيانية التي تحافظ عليه كذلك.',
    'Transportation': 'النقل والمواصلات',
    'Car & vehicle transport for people, sites and materials.': 'نقل بالسيارات والمركبات للأفراد والمواقع والمواد.',
    'A managed car fleet for site staff, client transfers and material runs, dispatched and tracked so your people and cargo arrive on schedule.':
      'أسطول سيارات مُدار لموظفي المواقع وتنقلات العملاء ونقل المواد، يُجدوَل ويُتابَع ليصل فريقك وشحناتك في موعدها.',
    'GIS Services': 'خدمات نظم المعلومات الجغرافية',
    'Land surveying, mapping & spatial data for planning.': 'مسح الأراضي والخرائط والبيانات المكانية للتخطيط.',
    'Site surveys, topographic mapping and GIS data layers that feed directly into design and permitting, so ground truth informs every decision before we break ground.':
      'مساحة المواقع والخرائط الطبوغرافية وطبقات بيانات GIS التي تغذّي التصميم والتراخيص مباشرة، فتبني القرارات على واقع الأرض قبل بدء الحفر.',
    'Road Construction': 'إنشاء الطرق',
    'Grading, base-work & asphalt paving for roads & access.': 'تسوية وأعمال طبقات أساس ورصف أسفلتي للطرق والمداخل.',
    'Earthworks, sub-base preparation and asphalt or concrete paving for access roads, site roads and public works, built to load spec and drainage requirements.':
      'أعمال ترابية وتجهيز طبقات التأسيس ورصف أسفلتي أو خرساني لطرق الوصول وطرق المواقع والأعمال العامة، بما يتوافق مع الأحمال ومتطلبات الصرف.',
    'Jumbo & Mini Vehicle Maintenance': 'صيانة المركبات الجامبو والميني',
    'Scheduled upkeep for heavy jumbo units & light vehicles.': 'صيانة دورية للوحدات الجامبو الثقيلة والمركبات الخفيفة.',
    'In-house servicing for jumbo trucks and mini vehicles alike — routine maintenance, breakdown response and parts management to keep every unit road-ready.':
      'صيانة داخلية لشاحنات الجامبو والمركبات الصغيرة — صيانة دورية واستجابة للأعطال وإدارة قطع الغيار لإبقاء كل وحدة جاهزة للطريق.',
    // about
    'About 3AG': 'عن 3AG', 'Every discipline stays under one roof — on purpose.': 'كل التخصصات تحت سقف واحد — عن قصد.',
    'Most projects fail at the handoffs — between the survey team and the builder, between the road crew and the fleet that serves it. 3AG keeps civil, road, GIS, transport and maintenance inside one company, so nothing gets lost between contractors.':
      'تتعثر معظم المشاريع عند التسليم بين الأطراف — بين فريق المساحة والمقاول، وبين فريق الطرق والأسطول الذي يخدمه. تجمع 3AG الإنشاءات والطرق والمساحة والنقل والصيانة داخل شركة واحدة، فلا يضيع شيء بين المقاولين.',
    'In-house crews': 'فرق داخلية', '— no subcontractor guesswork on core disciplines.': '— بلا تخمين من مقاولين من الباطن في التخصصات الأساسية.',
    'Own fleet & workshop': 'أسطول وورشة خاصة', "— maintenance is never someone else's delay.": '— الصيانة لا تتأخر بسبب طرف آخر.',
    'Survey-first planning': 'تخطيط يبدأ بالمساحة', '— GIS data shapes the build before it starts.': '— بيانات GIS ترسم ملامح التنفيذ قبل أن يبدأ.',
    // work
    'Recent work': 'أحدث أعمالنا', 'On the ground.': 'على أرض الواقع.',
    'Foundations — Industrial Zone': 'أساسات — المنطقة الصناعية', 'Access Road Paving': 'رصف طريق وصول',
    'GIS Site Survey': 'مسح موقع بنظم GIS', 'Fleet Workshop': 'ورشة الأسطول',
    // process
    'How we work': 'كيف نعمل', 'From survey to hand-over.': 'من المسح إلى التسليم.',
    'Survey & plan': 'المسح والتخطيط', 'GIS mapping and site survey define the ground conditions before a single design line is drawn.': 'تحدّد خرائط GIS ومسح الموقع ظروف الأرض قبل رسم أي خط في التصميم.',
    'Build & pave': 'التنفيذ والرصف', 'Civil, road and touch-up crews execute in sequence, with our own transport keeping materials moving.': 'تنفّذ فرق الإنشاءات والطرق والتشطيب أعمالها بالتتابع، بينما يُبقي نقلنا الخاص المواد في حركة.',
    'Maintain': 'الصيانة', 'Our workshop keeps jumbo and mini units serviced long after hand-over, on a standing schedule.': 'تواصل ورشتنا صيانة وحدات الجامبو والميني بعد التسليم بوقت طويل وفق جدول ثابت.',
    // contact
    'Get in touch': 'تواصل معنا', "Tell us what you're building.": 'أخبرنا ماذا تبني.',
    'Share a few details about your site or fleet and our team will come back with next steps within one business day.': 'شاركنا بعض التفاصيل عن موقعك أو أسطولك، وسيعود إليك فريقنا بالخطوات التالية خلال يوم عمل واحد.',
    'Office': 'المقر', 'Phone': 'الهاتف', 'Email': 'البريد',
    'Full name': 'الاسم الكامل', 'Your name': 'اسمك', 'Service needed': 'الخدمة المطلوبة', 'Project details': 'تفاصيل المشروع',
    'Tell us about the site, scope, or timeline': 'حدّثنا عن الموقع أو النطاق أو الجدول الزمني',
    'Send request': 'إرسال الطلب', "Thanks — we'll get back to you within one business day.": 'شكرًا لك — سنعود إليك خلال يوم عمل واحد.',
    // footer
    'Civil construction, road works, GIS and fleet maintenance — one team, ground to road.': 'إنشاءات مدنية وأعمال طرق وGIS وصيانة أسطول — فريق واحد من الأرض إلى الطريق.',
    'Fleet Maintenance': 'صيانة الأسطول', 'Company': 'الشركة',
    '3AG. All rights reserved.': '3AG. جميع الحقوق محفوظة.', 'Built for mobile-first, works everywhere.': 'مصمم للجوال أولًا، ويعمل على كل الأجهزة.',
    // details page chrome
    'Service Details — 3AG': 'تفاصيل الخدمة — 3AG', 'Home': 'الرئيسية',
    'Ready to start this service?': 'مستعد لبدء هذه الخدمة؟',
    "Tell us about your site or fleet and we'll come back with next steps within one business day.": 'أخبرنا عن موقعك أو أسطولك وسنعود إليك بالخطوات التالية خلال يوم عمل واحد.',
    'Request this service': 'اطلب هذه الخدمة', 'Gallery': 'معرض الصور', "What's included": 'ما تشمله الخدمة',
    'A closer look at how we run this service on site.': 'نظرة أقرب على كيفية تنفيذنا لهذه الخدمة في الموقع.',
    'Track record': 'سجل الأعمال', 'Projects done in this service': 'مشاريع نُفّذت ضمن هذه الخدمة',
    'Keep exploring': 'واصل الاستكشاف', 'You may be interested in this service too': 'قد تهمّك هذه الخدمات أيضًا',
    'Previous image': 'الصورة السابقة', 'Next image': 'الصورة التالية',
    // details data: civil
    "From the first excavation to the final structural pour, our civil teams run the build to spec and schedule — with our own site supervision on every stage, not a subcontractor's.": 'من أول عملية حفر إلى آخر صبّة إنشائية، تدير فرقنا المدنية التنفيذ وفق المواصفات والجدول الزمني — بإشراف موقعي مباشر منا في كل مرحلة، لا من مقاول من الباطن.',
    'We handle foundations, structural concrete, shell & core, and the coordination between trades that usually causes the delays.': 'نتولى الأساسات والخرسانة الإنشائية والهيكل الكامل، والتنسيق بين المهن الذي يتسبب عادةً في التأخير.',
    'Scope': 'النطاق', 'Excavation, foundations, structural concrete, shell & core.': 'حفر وأساسات وخرسانة إنشائية وهيكل كامل.',
    'Team': 'الفريق', 'In-house site engineers and supervision, not outsourced.': 'مهندسو موقع وإشراف داخلي، دون تعهيد.',
    'Timeline': 'الجدول الزمني', 'Phased schedules with weekly progress reporting.': 'خطط مرحلية مع تقارير تقدم أسبوعية.',
    'Industrial Zone': 'منطقة صناعية', 'Warehouse shell & core': 'الهيكل الإنشائي لمستودع', 'Commercial': 'تجاري',
    'Retail block foundations': 'أساسات مبنى تجاري', 'Mixed-use': 'متعدد الاستخدامات', 'Structural concrete frame': 'هيكل خرساني إنشائي',
    // touch-up
    'The finishing pass is what a client actually sees, so we treat it as its own discipline — plastering, painting, patching and the snag-list work that gets a site handed over clean.': 'مرحلة التشطيب هي ما يراه العميل فعلًا، لذلك نتعامل معها كتخصص مستقل — بياض ودهان وترقيع وإصلاح ملاحظات الاستلام ليُسلَّم الموقع نظيفًا.',
    "Once you're in, our touch-up crews keep coming back for the small repairs that keep a finished space looking finished.": 'وبعد التسليم تعود فرق التشطيب لتنفيذ الإصلاحات الصغيرة التي تُبقي المكان بمظهر مكتمل.',
    'Plastering, painting, patching, snag-list repairs.': 'بياض ودهان وترقيع وإصلاح ملاحظات الاستلام.',
    'Approach': 'الأسلوب', 'Handover-ready finishing, then scheduled upkeep after.': 'تشطيب جاهز للتسليم ثم صيانة دورية بعده.',
    'Response': 'الاستجابة', 'Fast turnaround on small repair call-outs.': 'سرعة في تلبية طلبات الإصلاح الصغيرة.',
    'Residential': 'سكني', 'Full interior finishing pass': 'تشطيب داخلي كامل', 'Office Fit-out': 'تجهيز مكاتب',
    'Snag-list repair programme': 'برنامج إصلاح ملاحظات الاستلام', 'Retail': 'تجاري', 'Post-handover maintenance': 'صيانة ما بعد التسليم',
    // transport
    'A managed car fleet for site staff, client transfers and material runs — dispatched and tracked so your people and cargo arrive on schedule, every time.': 'أسطول سيارات مُدار لموظفي المواقع وتنقلات العملاء ونقل المواد — يُجدوَل ويُتابَع ليصل فريقك وشحناتك في موعدها في كل مرة.',
    'Because we run the fleet ourselves, transport is never the reason a project slips.': 'ولأننا نشغّل الأسطول بأنفسنا، فلن يكون النقل سببًا في تأخر أي مشروع.',
    'Fleet': 'الأسطول', 'Staff transfers, client transport, material runs.': 'نقل موظفين وعملاء ومواد.',
    'Dispatch': 'التوجيه', 'Centrally scheduled and tracked, not ad-hoc.': 'جدولة وتتبع مركزي بدل الترتيب العشوائي.',
    'Coverage': 'التغطية', 'Site-to-site and city routes, day or night.': 'بين المواقع وداخل المدن ليلًا ونهارًا.',
    'Staff Transfer': 'نقل الموظفين', 'Daily site-to-site shuttle': 'خدمة نقل يومية بين المواقع', 'Materials': 'المواد',
    'Cross-city supply runs': 'رحلات توريد بين المدن', 'Client Transport': 'نقل العملاء', 'Scheduled transfer service': 'خدمة توصيل مجدولة',
    // gis
    'Site surveys, topographic mapping and GIS data layers that feed directly into design and permitting — so ground truth shapes every decision before we break ground.': 'مساحة المواقع والخرائط الطبوغرافية وطبقات بيانات GIS التي تغذّي التصميم والتراخيص مباشرة — فتتحكم حقيقة الأرض في كل قرار قبل أن نبدأ الحفر.',
    'Our survey data becomes the reference layer every other team on the project builds from.': 'تصبح بيانات المسح لدينا الطبقة المرجعية التي يبني عليها كل فريق في المشروع.',
    'Survey': 'المسح', 'Topographic and boundary surveys, GPS-based.': 'مساحة طبوغرافية وحدودية بتقنية GPS.',
    'Mapping': 'الخرائط', 'GIS data layers for planning and permitting.': 'طبقات GIS للتخطيط والتراخيص.',
    'Output': 'المخرجات', 'Deliverables ready for design and civil teams.': 'ملفات جاهزة لفرق التصميم والإنشاءات.',
    'Pre-construction': 'قبل الإنشاء', 'Full site topographic survey': 'مسح طبوغرافي كامل للموقع', 'Planning': 'التخطيط',
    'GIS layer set for permitting': 'حزمة طبقات GIS للتراخيص', 'Infrastructure': 'البنية التحتية', 'Boundary & utility mapping': 'رسم الحدود والمرافق',
    // road
    'Earthworks, sub-base preparation and asphalt or concrete paving for access roads, site roads and public works — built to load spec and drainage requirements.': 'أعمال ترابية وتجهيز طبقات التأسيس ورصف أسفلتي أو خرساني لطرق الوصول وطرق المواقع والأعمال العامة — بما يوافق مواصفات الأحمال ومتطلبات الصرف.',
    'Our road crews work alongside our own transport fleet, so material supply is never the bottleneck.': 'تعمل فرق الطرق جنبًا إلى جنب مع أسطول النقل لدينا، فلا يتعطل توريد المواد.',
    'Earthworks': 'الأعمال الترابية', 'Grading, cut and fill, sub-base preparation.': 'تسوية وحفر وردم وتجهيز طبقات التأسيس.',
    'Paving': 'الرصف', 'Asphalt and concrete, to load and drainage spec.': 'أسفلت وخرسانة وفق الأحمال والصرف.',
    'Access': 'الوصول', 'Site roads and public works alike.': 'طرق المواقع والأعمال العامة على حد سواء.',
    'Access Road': 'طريق وصول', 'Industrial zone paving': 'رصف المنطقة الصناعية', 'Public Works': 'أعمال عامة',
    'District road resurfacing': 'إعادة رصف طرق حي', 'Site road grading & base': 'تسوية طريق الموقع وتجهيز الأساس',
    // fleet maintenance
    'Because the workshop is ours, a maintenance schedule is never held up waiting on a third party.': 'ولأن الورشة ملكنا، فلا يتعطل جدول الصيانة بانتظار طرف ثالث.',
    'Jumbo trucks and mini/light vehicles, one workshop.': 'شاحنات جامبو ومركبات صغيرة في ورشة واحدة.',
    'Schedule': 'الجدولة', 'Routine servicing plus 24/7 breakdown response.': 'صيانة دورية واستجابة للأعطال على مدار الساعة.',
    'Parts': 'القطع', 'Managed inventory to minimise downtime.': 'مخزون قطع غيار مُدار لتقليل التوقف.',
    'Heavy Fleet': 'أسطول ثقيل', 'Jumbo truck service programme': 'برنامج صيانة شاحنات الجامبو', 'Light Fleet': 'أسطول خفيف',
    'Mini vehicle routine upkeep': 'صيانة دورية للمركبات الصغيرة', 'Breakdown': 'الأعطال', '24/7 response & recovery': 'استجابة وإنقاذ على مدار الساعة',
  };

  const norm = s => s.replace(/\s+/g, ' ').replace(/\u2011/g, '-').trim();
  const MAP = {};
  Object.keys(AR).forEach(k => { MAP[norm(k)] = AR[k]; });

  // ---- state ----
  const isLang = v => v === 'ar' || v === 'en';
  let lang = 'en';
  const qp = new URLSearchParams(location.search).get('lang');
  if (isLang(qp)) lang = qp;
  else { try { const s = localStorage.getItem(KEY); if (isLang(s)) lang = s; } catch (e) {} }

  const root = document.documentElement;
  const setDir = () => { root.lang = lang; root.dir = lang === 'ar' ? 'rtl' : 'ltr'; };
  setDir(); // runs in <head>, so the page never flashes in the wrong direction

  // ---- text node + attribute translation ----
  const orig = new WeakMap();
  const ATTRS = ['placeholder', 'alt', 'aria-label'];
  let titleEn = null;

  function apply(scope) {
    scope = scope || document.body;
    const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
      acceptNode: n => (n.nodeValue.trim() && !/^(SCRIPT|STYLE)$/.test(n.parentNode.nodeName)) ? 1 : 3
    });
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n => {
      if (!orig.has(n)) orig.set(n, n.nodeValue);
      const o = orig.get(n), ar = MAP[norm(o)];
      if (lang === 'ar' && ar) n.nodeValue = o.match(/^\s*/)[0] + ar + o.match(/\s*$/)[0];
      else n.nodeValue = o;
    });
    scope.querySelectorAll('[placeholder],[alt],[aria-label]').forEach(el => {
      ATTRS.forEach(a => {
        if (!el.hasAttribute(a)) return;
        const k = 'data-o-' + a;
        if (!el.hasAttribute(k)) el.setAttribute(k, el.getAttribute(a));
        const o = el.getAttribute(k), ar = MAP[norm(o)];
        el.setAttribute(a, lang === 'ar' && ar ? ar : o);
      });
    });
    translateTitle();
  }

  function translateTitle() {
    const parts = document.title.split(' — ');
    if (!/[\u0600-\u06FF]/.test(document.title)) titleEn = document.title;
    if (titleEn === null) return;
    if (lang === 'ar') {
      const full = MAP[norm(titleEn)];
      if (full) { document.title = full; return; }
      const p = titleEn.split(' — ');
      document.title = (MAP[norm(p[0])] || p[0]) + (p[1] ? ' — ' + p[1] : '');
    } else document.title = titleEn;
  }

  // ---- links keep the language between pages ----
  function withLang(href) {
    if (!/^(index|service-details)\.html/.test(href)) return href;
    const u = new URL(href, location.href);
    u.searchParams.set('lang', lang);
    return u.pathname.split('/').pop() + u.search + u.hash;
  }
  function decorateLinks(scope) {
    (scope || document).querySelectorAll('a[href]').forEach(a => {
      const h = a.getAttribute('href');
      if (/^(index|service-details)\.html/.test(h)) a.setAttribute('href', withLang(h));
    });
  }

  function label() {
    document.querySelectorAll('.lang-toggle .lang-label').forEach(el => { el.textContent = lang === 'ar' ? 'English' : 'العربية'; });
  }

  function setLanguage(next) {
    if (!isLang(next) || next === lang) return;
    document.body.classList.add('lang-switching');
    setTimeout(() => {
      lang = next;
      try { localStorage.setItem(KEY, lang); } catch (e) {}
      setDir(); apply(); label(); decorateLinks();
      try { history.replaceState(history.state, '', withLang(location.pathname.split('/').pop() + location.search + location.hash)); } catch (e) {}
      document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang } }));
      requestAnimationFrame(() => document.body.classList.remove('lang-switching'));
    }, 180);
  }

  document.addEventListener('DOMContentLoaded', () => {
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    apply(); label(); decorateLinks();
    document.querySelectorAll('.lang-toggle').forEach(b =>
      b.addEventListener('click', () => setLanguage(lang === 'ar' ? 'en' : 'ar')));
  });

  window.I18N = {
    get lang() { return lang; },
    apply: scope => { apply(scope); decorateLinks(scope); },
    withLang, setLanguage
  };
})();
