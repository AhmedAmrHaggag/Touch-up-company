(() => {
  const translations = {
    "Engineering & Maintenance": "الهندسة والصيانه",
    "Home": "الرئيسية",
    "Open menu": "فتح القائمة",
    "3AG — Civil, Road & Maintenance Engineering": "3AG — الإنشاءات المدنية والطرق والصيانه",
    "3AG. All rights reserved.": "3AG. جميع الحقوق محفوظة.",
    "03 *new service*": "03 *خدمة جديدة*",
    "Services": "الخدمات",
    "About": "من نحن",
    "Work": "أعمالنا",
    "Process": "خطوات العمل",
    "Contact": "تواصل معنا",
    "Request a quote": "اطلب عرض سعر",
    "Cairo, Egypt": "القاهرة، مصر",
    "Civil · Road · GIS · Maintenance": "الإنشاءات · الطرق · نظم المعلومات الجغرافية · الصيانه",
    "Ground work,": "أعمال الأساسات،",
    "road work,": "أعمال الطرق،",
    "Maintenance work.": "وأعمال الصيانه.",
    "3AG plans, builds and maintains the infrastructure your operations run on — from foundations to finishing, from mapping the ground to keeping every vehicle moving.": "تخطط 3AG للبنية التحتية التي تعتمد عليها أعمالك وتنفذها بأفضل جوده؛ من الأساسات والتشطيبات إلى المسح الجغرافي وصيانة المركبات.",
    "See our services": "اكتشف خدماتنا",
    "Start a project": "ابدأ مشروعك",
    "Years on site": "سنوات من الخبرة الميدانية",
    "Projects delivered": "مشروعاً تم إنجازه",
    "Vehicles & Maintenance units": "مركبة تم صيانتها",
    "Maintenance support": "دعم الصيانة",
    "What we do": "ما نقدمه",
    "Six disciplines, one site team.": "ستة تخصصات، وفريق واحد في الموقع.",
    "Tap a service to see how we run it end to end — we scope, staff and deliver every discipline in‑house.": "اختر إحدى الخدمات لمعرفة طريقة تنفيذها من البداية إلى النهاية؛ فنحن نخطط ونوفر الفرق ونسلّم العمل ضمن فريقنا.",
    "Foundations, structural concrete & full-build civil works.": "أعمال الأساسات والخرسانة الإنشائية والتنفيذ المدني المتكامل.",
    "Civil Construction": "الإنشاءات المدنية",
    "Touch-Up Construction": "أعمال التشطيب والترميم",
    "Finishing, repairs & renovation that protect the build.": "تشطيبات وإصلاحات وتجديدات تحافظ على جودة المباني.",
    "Transportation": "النقل والمواصلات",
    "Car & vehicle transport for people, sites and materials.": "نقل الأفراد والمركبات والمواد إلى مواقع العمل.",
    "Land surveying, mapping & spatial data for planning.": "مسح الأراضي والخرائط والبيانات المكانية للتخطيط.",
    "GIS Services": "خدمات نظم المعلومات الجغرافية",
    "Grading, base-work & asphalt paving for roads & access.": "تسوية الأراضي وتجهيز طبقات الأساس ورصف الطرق ومداخل المواقع.",
    "Road Construction": "إنشاء الطرق",
    "Jumbo & Mini Vehicle Maintenance": "صيانة المركبات الكبيرة والصغيرة",
    "Scheduled upkeep for heavy jumbo units & light vehicles.": "صيانة دورية للمركبات الثقيلة والخفيفة.",
    "Foundations, structural concrete & full-build civil works.": "أعمال الأساسات والخرسانة الإنشائية والتنفيذ المدني المتكامل.",
    "From site excavation and foundations through structural concrete and shell & core, our civil teams run the build to spec and schedule, with our own supervision on every pour.": "من الحفر والأساسات إلى الخرسانة الإنشائية والهيكل الأساسي، تنفذ فرقنا الأعمال وفق المواصفات والجدول الزمني، مع إشراف مباشر في كل مرحلة.",
    "Finishing, repairs and improvements that sharpen the quality of every built space.": "تشطيبات وإصلاحات وتحسينات ترتقي بجودة كل مساحة مبنية.",
    "Plastering, painting, patching and snag-list repairs — the finishing pass that gets a site handed over clean, and the maintenance touch-ups that keep it that way.": "أعمال المحارة والدهان والترميم ومعالجة الملاحظات؛ لضمان تسليم الموقع بجودة عالية والحفاظ عليها من خلال الصيانة.",
    "Dependable transportation with cars and equipment that arrive ready for the job.": "خدمات نقل موثوقة بمركبات ومعدات تصل جاهزة للعمل.",
    "A managed car Maintenance for site staff, client transfers and material runs, dispatched and tracked so your people and cargo arrive on schedule.": "إدارة أسطول لنقل فرق العمل والعملاء والمواد، مع تنظيم الرحلات ومتابعتها لضمان الوصول في الموعد.",
    "Clear spatial data and mapping insights that help teams plan with confidence.": "بيانات مكانية وخرائط واضحة تساعد الفرق على التخطيط بثقة.",
    "Site surveys, topographic mapping and GIS data layers that feed directly into design and permitting, so ground truth informs every decision before we break ground.": "مسوحات ميدانية وخرائط طبوغرافية وطبقات بيانات جغرافية تدعم التصميم والتصاريح، ليعتمد كل قرار على بيانات دقيقة قبل بدء التنفيذ.",
    "Reliable routes built for daily use, changing conditions and long-term performance.": "طرق موثوقة للاستخدام اليومي والظروف المتغيرة والأداء طويل الأمد.",
    "Earthworks, sub-base preparation and asphalt or concrete paving for access roads, site roads and public works, built to load spec and drainage requirements.": "أعمال ترابية وتجهيز طبقات التأسيس ورصف الأسفلت أو الخرسانة لطرق الوصول والمواقع والمشروعات العامة، وفق متطلبات الأحمال وتصريف المياه.",
    "Maintenance that keeps big and small vehicles safe, efficient and ready to move.": "صيانة تحافظ على سلامة المركبات الكبيرة والصغيرة وكفاءتها وجاهزيتها.",
    "In-house servicing for jumbo trucks and mini vehicles alike — routine maintenance, breakdown response and parts management to keep every unit road-ready.": "صيانة داخلية للشاحنات الكبيرة والمركبات الصغيرة، تشمل الصيانة الدورية والاستجابة للأعطال وإدارة قطع الغيار للحفاظ على جاهزية كل مركبة.",
    "View civil construction details": "عرض تفاصيل الإنشاءات المدنية",
    "View touch up construction details": "عرض تفاصيل أعمال التشطيب والترميم",
    "View transportation details": "عرض تفاصيل خدمات النقل",
    "View gis services details": "عرض تفاصيل خدمات نظم المعلومات الجغرافية",
    "View road construction details": "عرض تفاصيل إنشاء الطرق",
    "View Maintenance maintenance details": "عرض تفاصيل صيانة المركبات",
    "Expand details": "عرض التفاصيل",
    "View full details": "عرض التفاصيل كاملة",
    "About 3AG": "عن 3AG",
    "Every discipline stays under one roof — on purpose.": "كل التخصصات تحت سقف واحد — عن قصد.",
    "Most projects fail at the handoffs — between the survey team and the builder, between the road crew and the Maintenance that serves it. 3AG keeps civil, road, GIS, transport and maintenance inside one company, so nothing gets lost between contractors.": "تتعثر مشروعات كثيرة عند انتقال العمل بين الفرق؛ من المسح إلى التنفيذ، ومن إنشاء الطريق إلى تشغيل الأسطول. تجمع 3AG الإنشاءات والطرق ونظم المعلومات الجغرافية والنقل والصيانة ضمن شركة واحدة، لتنسيق العمل بسلاسة.",
    "In-house crews": "فرق عمل داخلية",
    "— no subcontractor guesswork on core disciplines.": "— دون الاعتماد على مقاولين فرعيين في التخصصات الأساسية.",
    "Own Maintenance & workshop": "أسطول وورشة خاصان",
    "— maintenance is never someone else's delay.": "— لتفادي تأخر الصيانة لدى جهات خارجية.",
    "Survey-first planning": "التخطيط يبدأ بالمسح",
    "— GIS data shapes the build before it starts.": "— بيانات نظم المعلومات الجغرافية توجه التنفيذ قبل بدايته.",
    "Recent work": "أعمالنا الأخيرة",
    "On the ground.": "من قلب مواقع العمل.",
    "Foundations — Industrial Zone": "الأساسات — المنطقة الصناعية",
    "Access Road Paving": "رصف طريق وصول",
    "GIS Site Survey": "مسح الموقع الجغرافي",
    "Maintenance Workshop": "ورشة الأسطول",
    "Excavation and foundation work": "أعمال الحفر والأساسات",
    "Asphalt road paving in progress": "أعمال رصف طريق بالأسفلت",
    "Land surveying with GPS equipment": "مسح الأراضي بأجهزة تحديد المواقع",
    "Truck Maintenance maintenance workshop": "ورشة صيانة أسطول الشاحنات",
    "How we work": "كيف نعمل",
    "From survey to hand-over.": "من المسح إلى التسليم.",
    "Survey & plan": "المسح والتخطيط",
    "GIS mapping and site survey define the ground conditions before a single design line is drawn.": "تحدد الخرائط الجغرافية والمسح الميداني طبيعة الموقع قبل إعداد أي مخطط.",
    "Build & pave": "الإنشاء والرصف",
    "Civil, road and touch-up crews execute in sequence, with our own transport keeping materials moving.": "تنفذ فرق الإنشاءات والطرق والتشطيبات أعمالها بالتتابع، ويضمن أسطولنا استمرار نقل المواد.",
    "Maintain": "الصيانة",
    "Our workshop keeps jumbo and mini units serviced long after hand-over, on a standing schedule.": "تواصل ورشتنا صيانة المركبات الكبيرة والصغيرة وفق جدول منتظم بعد تسليم المشروع.",
    "Get in touch": "تواصل معنا",
    "Tell us what you're building.": "أخبرنا عن مشروعك.",
    "Share a few details about your site or Maintenance and our team will come back with next steps within one business day.": "شاركنا بعض التفاصيل عن موقعك أو معداتك، وسيتواصل فريقنا معك بالخطوات التالية خلال يوم عمل واحد.",
    "Office": "المكتب",
    "Phone": "الهاتف",
    "Email": "البريد الإلكتروني",
    "Full name": "الاسم الكامل",
    "Your name": "اسمك",
    "Service needed": "الخدمة المطلوبة",
    "Project details": "تفاصيل المشروع",
    "Tell us about the site, scope, or timeline": "أخبرنا عن الموقع أو نطاق العمل أو الجدول الزمني",
    "Send request": "إرسال الطلب",
    "Thanks — we'll get back to you within one business day.": "شكراً — سنتواصل معك خلال يوم عمل واحد.",
    "Civil construction, road works, GIS and Maintenance maintenance — one team, ground to road.": "إنشاءات مدنية وطرق ونظم معلومات جغرافية وصيانة المعدات — فريق واحد من الأرض إلى الطريق.",
    "Civil Construction": "الإنشاءات المدنية",
    "Road Construction": "إنشاء الطرق",
    "Maintenance Maintenance": "صيانة المععدات",
    "Built for mobile-first, works everywhere.": "مصمم للهواتف ويعمل على جميع الأجهزة.",
    "Switch language to Arabic": "التبديل إلى العربية",
    "Switch language to English": "التبديل إلى الإنجليزية",
    "Back to top": "العودة إلى أعلى الصفحة",
    "Previous image": "الصورة السابقة",
    "Next image": "الصورة التالية",
    "Gallery": "معرض الصور",
    "What's included": "ماذا تشمل الخدمة",
    "A closer look at how we run this service on site.": "تفاصيل أكثر عن طريقة تنفيذ هذه الخدمة في الموقع.",
    "Track record": "سجل الأعمال",
    "Projects done in this service": "مشروعات نفذناها في هذه الخدمة",
    "Keep exploring": "اكتشف المزيد",
    "You may be interested in this service too": "قد تهمك هذه الخدمة أيضاً",
    "Request this service": "اطلب هذه الخدمة",
    "Ready to start this service?": "هل أنت مستعد لبدء هذه الخدمة؟",
    "Tell us about your site or Maintenance and we'll come back with next steps within one business day.": "أخبرنا عن موقعك أو معداتك، وسنوافيك بالخطوات التالية خلال يوم عمل واحد.",
    "Services": "الخدمات",
    "Company": "الشركة",
    "Civil construction, road works, GIS and Maintenance maintenance — one team, ground to road.": "إنشاءات مدنية وطرق ونظم معلومات جغرافية وصيانة المعدات — فريق واحد من الأرض إلى الطريق.",
    "Built for mobile-first, works everywhere.": "مصمم للهواتف ويعمل على جميع الأجهزة.",
    "From the first excavation to the final structural pour, our civil teams run the build to spec and schedule — with our own site supervision on every stage, not a subcontractor's.": "من أول أعمال الحفر إلى صبّ الخرسانة الإنشائية الأخير، تنفذ فرقنا الأعمال وفق المواصفات والجدول الزمني، بإشراف ميداني من فريقنا في كل مرحلة.",
    "We handle foundations, structural concrete, shell & core, and the coordination between trades that usually causes the delays.": "نتولى الأساسات والخرسانة الإنشائية والهيكل الأساسي، إلى جانب تنسيق التخصصات المختلفة لتفادي التأخير.",
    "The finishing pass is what a client actually sees, so we treat it as its own discipline — plastering, painting, patching and the snag-list work that gets a site handed over clean.": "التشطيبات هي ما يراه العميل، لذلك نتعامل معها كتخصص مستقل يشمل المحارة والدهان والترميم ومعالجة الملاحظات لتسليم الموقع بأفضل صورة.",
    "Plastering, painting, patching, snag-list repairs.": "المحارة والدهان والترميم ومعالجة ملاحظات التسليم.",
    "Once you're in, our touch-up crews keep coming back for the small repairs that keep a finished space looking finished.": "بعد التسليم، تتابع فرق الترميم الإصلاحات البسيطة للحفاظ على جودة المساحات المكتملة.",
    "A managed car Maintenance for site staff, client transfers and material runs — dispatched and tracked so your people and cargo arrive on schedule, every time.": "إدارة أسطول لنقل فرق العمل والعملاء والمواد، مع تنظيم الرحلات ومتابعتها لضمان وصول الأفراد والحمولات في الموعد.",
    "Because we run the Maintenance ourselves, transport is never the reason a project slips.": "ندير أسطولنا بأنفسنا، لذلك لا يكون النقل سبباً في تأخر المشروع.",
    "Because the workshop is ours, a maintenance schedule is never held up waiting on a third party.": "بما أن الورشة تابعة لنا، لا تتعطل مواعيد الصيانة بسبب انتظار جهة خارجية.",
    "Our survey data becomes the reference layer every other team on the project builds from.": "تصبح بيانات المسح المرجع الذي تعتمد عليه جميع الفرق الأخرى في المشروع.",
    "Site surveys, topographic mapping and GIS data layers that feed directly into design and permitting — so ground truth shapes every decision before we break ground.": "مسوحات ميدانية وخرائط طبوغرافية وطبقات بيانات جغرافية تدعم التصميم والتصاريح، لتستند القرارات إلى بيانات دقيقة قبل بدء التنفيذ.",
    "Earthworks, sub-base preparation and asphalt or concrete paving for access roads, site roads and public works — built to load spec and drainage requirements.": "أعمال ترابية وتجهيز طبقات التأسيس ورصف الأسفلت أو الخرسانة لطرق الوصول والمواقع والمشروعات العامة، وفق متطلبات الأحمال وتصريف المياه.",
    "Our road crews work alongside our own transport Maintenance, so material supply is never the bottleneck.": "تعمل فرق الطرق بالتوازي مع أسطول النقل التابع لنا، لضمان استمرار توريد المواد دون تعطيل.",
    "Jumbo trucks and mini/light vehicles, one workshop.": "صيانة الشاحنات الكبيرة والمركبات الصغيرة والخفيفة في ورشة واحدة.",

    "Scope": "نطاق العمل",
    "Excavation, foundations, structural concrete, shell & core.": "الحفر والأساسات والخرسانة الإنشائية والهيكل الأساسي.",
    "Team": "الفريق",
    "In-house site engineers and supervision, not outsourced.": "مهندسو موقع وإشراف من فريقنا، دون إسناد خارجي.",
    "Timeline": "الجدول الزمني",
    "Phased schedules with weekly progress reporting.": "جداول تنفيذ مرحلية وتقارير أسبوعية عن التقدم.",
    "Approach": "منهجية العمل",
    "Handover-ready finishing, then scheduled upkeep after.": "تشطيبات جاهزة للتسليم، تليها صيانة مجدولة.",
    "Response": "سرعة الاستجابة",
    "Fast turnaround on small repair call-outs.": "استجابة سريعة لطلبات الإصلاحات البسيطة.",
    "Maintenance": "الأسطول",
    "Staff transfers, client transport, material runs.": "نقل الموظفين والعملاء والمواد.",
    "Dispatch": "تنظيم الرحلات",
    "Centrally scheduled and tracked, not ad-hoc.": "جدولة مركزية ومتابعة دقيقة للرحلات.",
    "Coverage": "التغطية",
    "Site-to-site and city routes, day or night.": "تنقل بين المواقع وداخل المدن، ليلاً ونهاراً.",
    "Survey": "المسح",
    "Topographic and boundary surveys, GPS-based.": "مسوحات طبوغرافية وحدودية باستخدام GPS.",
    "Mapping": "الخرائط",
    "GIS data layers for planning and permitting.": "طبقات بيانات جغرافية للتخطيط والتصاريح.",
    "Output": "المخرجات",
    "Deliverables ready for design and civil teams.": "مخرجات جاهزة لفرق التصميم والإنشاءات.",
    "Earthworks": "الأعمال الترابية",
    "Grading, cut and fill, sub-base preparation.": "التسوية والقطع والردم وتجهيز طبقة التأسيس.",
    "Paving": "الرصف",
    "Asphalt and concrete, to load and drainage spec.": "رصف بالأسفلت والخرسانة وفق مواصفات الأحمال والتصريف.",
    "Access": "طرق الوصول",
    "Site roads and public works alike.": "طرق المواقع والمشروعات العامة.",
    "Schedule": "الجدول",
    "Routine servicing plus 24/7 breakdown response.": "صيانة دورية واستجابة للأعطال على مدار الساعة.",
    "Parts": "قطع الغيار",
    "Managed inventory to minimise downtime.": "إدارة المخزون للحد من فترات التوقف.",

    "Civil construction site with concrete structure": "موقع إنشاءات مدنية بهيكل خرساني",
    "Finishing and touch-up construction work on a wall": "أعمال تشطيب وترميم لجدار",
    "Maintenance of transport vehicles on a road": "أسطول مركبات نقل على الطريق",
    "Topographic map and land surveying equipment": "خريطة طبوغرافية ومعدات مسح الأراضي",
    "Road construction with asphalt paving": "إنشاء طريق ورصفه بالأسفلت",
    "Mechanic servicing a heavy vehicle in a workshop": "فني يصون مركبة ثقيلة داخل ورشة",
    "Construction engineers reviewing plans on site": "مهندسو إنشاءات يراجعون المخططات في الموقع",
    "Concrete structure under construction": "هيكل خرساني قيد الإنشاء",
    "Steel reinforcement on a civil site": "حديد تسليح في موقع إنشاءات مدنية",
    "Concrete pour on a foundation slab": "صب الخرسانة في بلاطة أساس",
    "Construction crane on a civil site": "رافعة إنشاءات في موقع مدني",
    "Engineers reviewing structural plans on site": "مهندسون يراجعون المخططات الإنشائية في الموقع",
    "Wall plastering and finishing work": "أعمال محارة وتشطيب جدار",
    "Interior painting in progress": "أعمال دهان داخلي",
    "Finished interior wall detail": "تفاصيل جدار داخلي مكتمل التشطيب",
    "Touch-up repair work on a wall corner": "ترميم موضعي لزاوية جدار",
    "Finishing crew reviewing a snag list": "فريق تشطيب يراجع قائمة الملاحظات",
    "Transport vehicles parked in a row": "مركبات نقل مصطفة",
    "Car driving on a highway": "سيارة تسير على طريق سريع",
    "Maintenance vehicle interior dashboard": "لوحة قيادة مركبة من الأسطول",
    "Vehicles queued at a dispatch yard": "مركبات مصطفة في ساحة الانطلاق",
    "Driver checking a transport vehicle": "سائق يفحص مركبة نقل",
    "Land surveying with GPS equipment": "مسح الأراضي بمعدات GPS",
    "Topographic map spread on a table": "خريطة طبوغرافية على طاولة",
    "Surveyor using a total station on site": "مسّاح يستخدم جهاز المحطة المتكاملة في الموقع",
    "Aerial view of surveyed land plots": "منظر جوي لقطع أراضٍ تم مسحها",
    "Engineer analysing spatial data on a laptop": "مهندس يحلل بيانات مكانية على حاسوب محمول",
    "Asphalt road paving equipment": "معدات رصف الطرق بالأسفلت",
    "Road paving in progress": "أعمال رصف طريق جارية",
    "Heavy machinery grading a road base": "معدات ثقيلة تسوي طبقة أساس الطريق",
    "Freshly paved asphalt road": "طريق أسفلتي حديث الرصف",
    "Road construction crew at work": "فريق يعمل في إنشاء طريق",
    "Mechanic servicing a heavy vehicle": "فني يصون مركبة ثقيلة",
    "Truck Maintenance maintenance workshop": "ورشة صيانة أسطول الشاحنات",
    "Engine maintenance close-up": "لقطة مقربة لصيانة محرك",
    "Workshop tools laid out for vehicle service": "أدوات ورشة مرتبة لصيانة المركبات",
    "Technician inspecting a vehicle underside": "فني يفحص الجزء السفلي من مركبة",

    "Warehouse shell & core": "الهيكل الأساسي لمستودع",
    "Retail block foundations": "أساسات مبنى تجاري",
    "Structural concrete frame": "هيكل من الخرسانة الإنشائية",
    "Industrial Zone": "المنطقة الصناعية",
    "Commercial": "تجاري",
    "Mixed-use": "متعدد الاستخدامات",
    "Residential": "سكني",
    "Full interior finishing pass": "تنفيذ التشطيبات الداخلية بالكامل",
    "Office Fit-out": "تجهيز مكتب",
    "Snag-list repair programme": "برنامج معالجة ملاحظات التسليم",
    "Retail": "تجزئة",
    "Post-handover maintenance": "صيانة ما بعد التسليم",
    "Daily site-to-site shuttle": "نقل يومي بين المواقع",
    "Staff Transfer": "نقل الموظفين",
    "Cross-city supply runs": "نقل الإمدادات بين المدن",
    "Materials": "المواد",
    "Scheduled transfer service": "خدمة نقل مجدولة",
    "Client Transport": "نقل العملاء",
    "Full site topographic survey": "مسح طبوغرافي كامل للموقع",
    "Pre-construction": "ما قبل الإنشاء",
    "GIS layer set for permitting": "طبقات نظم معلومات جغرافية للتصاريح",
    "Planning": "التخطيط",
    "Boundary & utility mapping": "خرائط الحدود والمرافق",
    "Infrastructure": "البنية التحتية",
    "Industrial zone paving": "رصف المنطقة الصناعية",
    "Access Road": "طريق وصول",
    "District road resurfacing": "إعادة رصف طريق المنطقة",
    "Public Works": "أعمال عامة",
    "Site road grading & base": "تسوية طريق الموقع وتجهيز طبقاته",
    "Site road grading and base": "تسوية طريق الموقع وتجهيز طبقاته",
    "Jumbo truck service programme": "برنامج صيانة الشاحنات الثقيلة",
    "Heavy Maintenance": "أسطول المركبات الثقيلة",
    "Mini vehicle routine upkeep": "الصيانة الدورية للمركبات الصغيرة",
    "Light Maintenance": "أسطول المركبات الخفيفة",
    "24/7 response & recovery": "الاستجابة والإنقاذ على مدار الساعة",
    "Breakdown": "الأعطال",

    "Civil Construction — 3AG": "الإنشاءات المدنية — 3AG",
    "Touch-Up Construction — 3AG": "أعمال التشطيب والترميم — 3AG",
    "Transportation — 3AG": "النقل والمواصلات — 3AG",
    "GIS Services — 3AG": "خدمات نظم المعلومات الجغرافية — 3AG",
    "Road Construction — 3AG": "إنشاء الطرق — 3AG",
    "Jumbo & Mini Vehicle Maintenance — 3AG": "صيانة المركبات الكبيرة والصغيرة — 3AG",
    "Service Details — 3AG": "تفاصيل الخدمات — 3AG",
  };

  const normalize = (value) => value.replace(/\s+/g, " ").trim();
  const originalTextNodes = new WeakMap();
  const readInitialLanguage = () => {
    try {
      const saved = localStorage.getItem("3ag-language");
      if (saved === "ar" || saved === "en") return saved;
    } catch {
      // Query-string fallback supports local file previews where storage can be restricted.
    }
    return new URLSearchParams(window.location.search).get("lang") === "ar" ? "ar" : "en";
  };
  let activeLanguage = readInitialLanguage();
  const currentLanguage = () => activeLanguage;

  function persistLanguage(language) {
    activeLanguage = language;
    try {
      localStorage.setItem("3ag-language", language);
    } catch {
      // The page links also carry the selected language for local-file previews.
    }
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", language);
      history.replaceState(history.state, "", url);
    } catch {
      // Local-file browsers may restrict History API access; language remains active in memory.
    }
  }

  function translateValue(value, language) {
    if (language !== "ar") return value;
    const key = normalize(value);
    const translated = translations[key];
    if (!translated) return value;
    const leading = value.match(/^\s*/)?.[0] || "";
    const trailing = value.match(/\s*$/)?.[0] || "";
    return `${leading}${translated}${trailing}`;
  }

  function applyLanguage(language = currentLanguage()) {
    const html = document.documentElement;
    html.lang = language === "ar" ? "ar" : "en";
    html.dir = language === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("arabic", language === "ar");

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.parentElement?.closest("script, style, .language-toggle, .back-to-top")) continue;
      textNodes.push(node);
    }
    textNodes.forEach((node) => {
      const english = originalTextNodes.has(node) ? originalTextNodes.get(node) : node.textContent;
      originalTextNodes.set(node, english);
      node.textContent = translateValue(english, language);
    });

    document.querySelectorAll("[aria-label], [placeholder], [title], img[alt]").forEach((element) => {
      ["aria-label", "placeholder", "title", "alt"].forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return;
        const english = element.dataset[`english${attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())}`] ?? element.getAttribute(attribute);
        const dataKey = `english${attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())}`;
        element.dataset[dataKey] = english;
        element.setAttribute(attribute, translateValue(english, language));
      });
    });

    const switchButton = document.getElementById("languageToggle");
    if (switchButton) {
      switchButton.textContent = language === "ar" ? "English" : "العربية";
      switchButton.setAttribute("aria-label", language === "ar" ? translations["Switch language to English"] : translations["Switch language to Arabic"]);
      switchButton.title = switchButton.getAttribute("aria-label");
      switchButton.setAttribute("aria-pressed", String(language === "ar"));
    }

    const toTop = document.getElementById("backToTop");
    if (toTop) {
      const label = language === "ar" ? translations["Back to top"] : "Back to top";
      toTop.setAttribute("aria-label", label);
      toTop.title = label;
    }

    if (document.title) {
      const baseTitle = document.title;
      const translatedTitle = translateValue(baseTitle, language);
      if (language === "ar" || !document.documentElement.dataset.arabicTitle) {
        document.title = translatedTitle;
      }
      if (language === "ar") document.documentElement.dataset.arabicTitle = "true";
      else {
        const englishTitle = document.title;
        const knownEnglish = Object.keys(translations).find((key) => translations[key] === normalize(baseTitle));
        if (knownEnglish) document.title = knownEnglish;
        else if (document.documentElement.dataset.originalTitle) document.title = document.documentElement.dataset.originalTitle;
        document.documentElement.dataset.arabicTitle = "";
      }
    }
  }

  const languageButton = document.getElementById("languageToggle");
  languageButton?.addEventListener("click", () => {
    const nextLanguage = currentLanguage() === "ar" ? "en" : "ar";
    persistLanguage(nextLanguage);
    applyLanguage(nextLanguage);
  });

  // Pass the current locale across full-page links, including file:// previews.
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link || link.target === "_blank" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    try {
      const destination = new URL(link.href, window.location.href);
      const current = new URL(window.location.href);
      if (destination.protocol !== current.protocol || destination.pathname === current.pathname) return;
      destination.searchParams.set("lang", currentLanguage());
      link.href = destination.href;
    } catch {
      // Leave non-standard or malformed links untouched.
    }
  });

  const backToTop = document.createElement("button");
  backToTop.id = "backToTop";
  backToTop.type = "button";
  backToTop.className = "back-to-top";
  backToTop.innerHTML = '<span aria-hidden="true">↑</span>';
  backToTop.setAttribute("aria-label", "Back to top");
  backToTop.title = "Back to top";
  document.body.appendChild(backToTop);

  const updateBackToTop = () => backToTop.classList.toggle("visible", window.scrollY > 320);
  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();
  backToTop.addEventListener("click", () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  });

  window.apply3AGLanguage = applyLanguage;
  window.current3AGLanguage = currentLanguage;
  applyLanguage();
})();
