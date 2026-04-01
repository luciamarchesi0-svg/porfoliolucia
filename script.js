// ====== Year ======
document.querySelectorAll(".js-year").forEach(el => {
  el.textContent = new Date().getFullYear();
});
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ====== Hamburger menu ======
const burger = document.querySelector(".burger");
const mobileMenu = document.getElementById("mobileMenu");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!isOpen));
    burger.classList.toggle("is-open", !isOpen);
    mobileMenu.hidden = isOpen;
    document.body.classList.toggle("menu-open", !isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      burger.setAttribute("aria-expanded", "false");
      burger.classList.remove("is-open");
      mobileMenu.hidden = true;
      document.body.classList.remove("menu-open");
    });
  });

  document.addEventListener("click", e => {
    if (!burger.contains(e.target) && !mobileMenu.contains(e.target)) {
      burger.setAttribute("aria-expanded", "false");
      burger.classList.remove("is-open");
      mobileMenu.hidden = true;
      document.body.classList.remove("menu-open");
    }
  });
}

// ====== Active nav link on scroll (index only) ======
const sections = ["work", "practice", "about", "contact"]
  .map(id => document.getElementById(id))
  .filter(Boolean);

const navLinks = Array.from(document.querySelectorAll(".nav__link"));
const hasHashNav = navLinks.some(a => (a.getAttribute("href") || "").startsWith("#"));

if (sections.length > 0 && hasHashNav) {
  const setActive = () => {
    const y = window.scrollY + 120;
    let current = null;
    for (const sec of sections) {
      if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) current = sec.id;
    }
    navLinks.forEach(a => {
      a.classList.toggle("is-active", current && a.getAttribute("href") === "#" + current);
    });
  };
  window.addEventListener("scroll", setActive, { passive: true });
  setActive();
}

// ====== i18n ======
const dict = {
  en: {
    nav_work: "Work", nav_practice: "Practice", nav_about: "About", nav_contact: "Contact",
    role: "Product Designer",
    tagline: "MATERIAL INNOVATION & STRATEGIC SYSTEMS",
    cta_work: "View Work", cta_contact: "Contact",
    based_in: "BASED IN MADRID",
    selected_work: "SELECTED WORK",
    practice_title: "Material & Craft\nPractice",
    practice_subtitle: "Exploring the intersection of traditional craft techniques and contemporary material innovation.",
    practice_desc: "Through hands-on experimentation with goldsmithing, composite materials, and 3D printing, this practice develops a deeper understanding of material behavior, production constraints, and craft methodologies that inform product design work.",
    cta_practice: "Explore Practice",
    practice_page_title: "Material & Craft Practice",
    practice_page_subtitle: "Hands-on exploration of materials and processes that inform product design thinking.",
    practice_page_desc: "This ongoing practice develops intuition about material behavior, production constraints, and craft methodologies through direct experimentation with traditional and contemporary techniques.",
    goldsmithing_title: "Goldsmithing", goldsmithing_kicker: "GOLDSMITHING",
    goldsmithing_caption: "Traditional metalworking techniques exploring form through material constraints.",
    composites_title: "Composite Materials", composites_kicker: "COMPOSITE MATERIALS",
    composites_caption: "Experimentation with fiber reinforced composites and lamination processes.",
    "3dprinting_title": "3D Printing", "3dprinting_kicker": "3D PRINTING",
    "3dprinting_caption": "Additive manufacturing for rapid prototyping and complex geometries.",
    conclusion_title: "Practice Informs Design",
    conclusion_desc1: "Working directly with materials—understanding how metal responds to force, how composites cure, how additive processes build layer by layer—creates knowledge that cannot be learned theoretically.",
    conclusion_desc2: "This tactile understanding influences design decisions at every stage, from initial concept sketches to final production specifications. It builds intuition about what is possible, what is efficient, and what compromises are worth making.",
    about_title: "ABOUT",
    about_desc: "I'm a product designer focused on material innovation and strategic systems, bridging craft, engineering and narrative.",
    about_btn: "More about me →",
    about_page_kicker: "ABOUT ME",
    about_page_intro: "I'm Lucía — a product designer who thinks in systems, works with her hands, and finds meaning at the intersection of craft, material, and function.",
    about_page_bio1: "My practice is built around a simple belief: you design better when you understand how things are made. That's why I spend time in the workshop alongside time at the screen — exploring goldsmithing, composite materials, and additive manufacturing not as side hobbies, but as part of how I think.",
    about_page_bio2: "I studied Industrial Design and finished my Master's with a thesis on material-driven product systems. Since then I've worked on lighting families, safety products, multifunctional furniture and brand-aligned design systems — always looking for the detail that makes something feel inevitable.",
    about_page_bio3: "Based in Madrid. Available for product design projects, research collaborations, and strategic design work.",
    about_tools_title: "TOOLS & SKILLS",
    about_tool_1: "Rhino 3D", about_tool_2: "KeyShot", about_tool_3: "SolidWorks",
    about_tool_4: "Adobe CC", about_tool_5: "Vizcom", about_tool_6: "Figma",
    about_tool_7: "3D Printing", about_tool_8: "Composites", about_tool_9: "Goldsmithing",
    about_timeline_title: "JOURNEY",
    about_tl_1_year: "2018", about_tl_1_text: "Started Industrial Design degree",
    about_tl_2_year: "2022", about_tl_2_text: "First product project with a brand — lighting design",
    about_tl_3_year: "2023", about_tl_3_text: "Master's in Advanced Product Design",
    about_tl_4_year: "2024", about_tl_4_text: "Thesis on material-driven product systems (V-Pin)",
    about_tl_5_year: "2025", about_tl_5_text: "Freelance · Aurora for iSiMAR · HoldUp · SafeStep",
    about_tl_6_year: "2026", about_tl_6_text: "Kyrre Shift · Candela for esPattio · open to new projects",
    about_dl_cv: "Download CV", about_dl_portfolio: "Download Portfolio",
    about_cta_contact: "Let's work together →",
    about_gallery_title: "A BIT MORE OF ME",
    contact_page_title: "Let's work\ntogether",
    contact_page_desc: "Currently available for product design projects, material research collaborations, and strategic design work.",
    contact_page_location: "MADRID, SPAIN",
    contact_page_email_label: "Email", contact_page_linkedin_label: "LinkedIn", contact_page_instagram_label: "Instagram",
    footer_cta: "Open to new projects —",
    footer_cta_link: "Let's talk",
    footer_back: "Back to top ↑",
    name_line1: "Lucía", name_line2: "Marchesi", name_line3: "Zorzi",
    // ── AURORA ──────────────────────────────────────────────
    aurora_kicker: "LIGHTING · iSiMAR — 2025",
    aurora_title: "Aurora",
    aurora_hero_alt: "Aurora lighting family — iSiMAR",
    aurora_meta_brand_label: "Brand",
    aurora_meta_brand_val: "iSiMAR · outdoor furniture & lifestyle",
    aurora_meta_focus_label: "Focus",
    aurora_meta_focus_val: "Brand fit · Product family · CMF & detailing",
    aurora_meta_type_label: "Typologies",
    aurora_meta_type_val: "Table · Pendant · Wall",
    aurora_meta_sum_label: "Summary",
    aurora_meta_sum_val: "Lighting family concept developed for iSiMAR, designed to integrate naturally into the brand catalogue through coherent proportions, details and a scalable system logic.",
    aurora_s1_title: "Overview",
    aurora_s1_text: "This project was approached as a catalogue challenge: create something new that still reads instantly as iSiMAR. Aurora is a family-first concept, built on shared geometry and repeatable components, designed to expand over time without losing identity.",
    aurora_s1_alt: "Aurora — overview image",
    aurora_s2_title: "Problem",
    aurora_s2_text: "How can a new lighting line feel fresh while remaining coherent with iSiMAR's outdoor language? The risk is either blending in too much, or breaking the brand's visual and manufacturing logic.",
    aurora_s2_alt: "Aurora — at bar",
    aurora_s3_title: "Solution",
    aurora_s3_text: "A modular family system with a signature silhouette and consistent detailing, adaptable across typologies (table, pendant, wall) through shared components and proportional rules.",
    aurora_s3_alt: "Aurora — render",
    aurora_s4_title: "Why it works",
    aurora_s4_text: "The system is designed around repeatability and brand recognition: consistent joints, controlled variation, and CMF decisions that echo iSiMAR's palette and material durability requirements.",
    aurora_s4_alt: "Aurora — detail",
    aurora_s5_title: "Family strategy",
    aurora_s5_text: "The concept prioritizes a common module and a clear hierarchy of details so new versions can be added (sizes, mounting types, outdoor contexts) while keeping the line cohesive.",
    aurora_s5_alt: "Aurora — product family",
    aurora_gallery_title: "Gallery",
    aurora_g_alt: "Aurora — image",
    // ── SAFESTEP ─────────────────────────────────────────────
    safestep_kicker: "SAFETY PRODUCT — 2025",
    safestep_title: "SafeStep",
    safestep_hero_alt: "SafeStep safety sneaker",
    safestep_meta_focus_label: "Focus",
    safestep_meta_focus_val: "Safety footwear · Materials innovation · Workplace ergonomics",
    safestep_meta_role_label: "Role",
    safestep_meta_role_val: "Product designer — research, concept development, material strategy, 3D modeling.",
    safestep_meta_stat_label: "Status",
    safestep_meta_stat_val: "Case study",
    safestep_meta_sum_label: "Summary",
    safestep_meta_sum_val: "SafeStep is a safety sneaker designed for professionals in industrial environments who need protection without sacrificing comfort or style. It integrates a non-Newtonian fluid toe cap that remains flexible during normal use but hardens instantly upon impact.",
    safestep_s1_title: "Overview",
    safestep_s1_text: "Traditional safety shoes prioritize protection but often neglect comfort and aesthetics. SafeStep explores a new approach by integrating a non-Newtonian fluid protective system within a sneaker-like design — the result is a shoe that maintains industrial protection standards while offering improved comfort and contemporary aesthetics.",
    safestep_s1_alt: "SafeStep — overview",
    safestep_s2_title: "Problem",
    safestep_s2_text: "Safety footwear is typically designed for heavy manual labor, resulting in bulky silhouettes, rigid structures and limited ergonomic comfort. Many workers — designers, technicians, supervisors — are required to wear protective shoes despite performing mostly light tasks.",
    safestep_s2_alt: "SafeStep — problem",
    safestep_s3_title: "Solution",
    safestep_s3_text: "A safety sneaker that combines protection with everyday comfort. The toe protection system replaces traditional steel caps with a non-Newtonian fluid structure in a flexible containment layer — soft during normal movement, instantly rigid on impact.",
    safestep_s3_alt: "SafeStep — solution",
    safestep_s4_title: "Why it works",
    safestep_s4_text: "The concept balances three constraints: safety requirements, ergonomic comfort and visual acceptance. Non-Newtonian materials maintain impact protection while reducing rigidity and weight compared to traditional toe caps.",
    safestep_s4_alt: "SafeStep — why it works",
    safestep_s5_title: "Next steps",
    safestep_s5_text: "Future development includes material testing, impact validation and prototyping of the fluid containment system. Further iterations could explore modular toe cartridges and certified safety standards compliance.",
    safestep_s5_alt: "SafeStep — next steps",
    safestep_gallery_title: "Gallery",
    safestep_g_alt: "SafeStep — image",
    // ── KYRRE SHIFT ──────────────────────────────────────────
    kyrre_kicker: "FURNITURE DESIGN — 2026",
    kyrre_title: "Kyrre Shift",
    kyrre_hero_alt: "Kyrre Shift stacked renders",
    kyrre_meta_sum_label: "Summary",
    kyrre_meta_sum_val: "Stool and side table in one. Designed for flexible, space-saving homes.",
    kyrre_meta_focus_label: "Focus",
    kyrre_meta_focus_val: "Multifunctional furniture · Small space living · Stackable design",
    kyrre_meta_role_label: "Role",
    kyrre_meta_role_val: "Designer",
    kyrre_meta_tools_label: "Tools",
    kyrre_meta_tools_val: "Rhino · KeyShot · Adobe CC · Vizcom",
    kyrre_s1_title: "Overview",
    kyrre_s1_text: "Kyrre Shift is a reinterpretation of IKEA's KYRRE stool designed to expand its everyday functionality. By introducing a reversible geometry, the object works both as a seat and as a small side table while remaining stackable and compact.",
    kyrre_s1_alt: "Kyrre Shift — overview",
    kyrre_s2_title: "Problem",
    kyrre_s2_text: "As living spaces become smaller, furniture must serve multiple purposes without increasing visual or spatial clutter. Traditional stools often fulfill a single function, limiting their usefulness in compact homes.",
    kyrre_s2_alt: "Kyrre Shift — problem",
    kyrre_s3_title: "Solution",
    kyrre_s3_text: "Kyrre Shift transforms the KYRRE stool into a reversible piece that works as both a seat and a side table, while remaining stackable. The design expands functionality without altering the simplicity of the original object.",
    kyrre_s3_alt: "Kyrre Shift — solution",
    kyrre_s4_title: "Next steps",
    kyrre_s4_text: "Further iterations will refine proportions and structural details, followed by manufacturing validation and user testing to evaluate stability, usability and stackability.",
    kyrre_s4_alt: "Kyrre Shift — process",
    kyrre_gallery_title: "Gallery",
    kyrre_g_alt: "Kyrre Shift — image",
    // ── HOLDUP ───────────────────────────────────────────────
    holdup_kicker: "NON-INVASIVE SAFETY SYSTEM — 2025",
    holdup_title: "HoldUp",
    holdup_hero_alt: "HoldUp bathroom safety grip",
    holdup_meta_focus_label: "Focus",
    holdup_meta_focus_val: "Accessibility · Non-invasive anchoring · Product system",
    holdup_meta_users_label: "Users",
    holdup_meta_users_val: "Temporary/permanent mobility needs · Caregivers · Rentals",
    holdup_meta_role_label: "Role",
    holdup_meta_role_val: "Product design · Prototyping · Validation criteria",
    holdup_meta_sum_label: "Summary",
    holdup_meta_sum_val: "A non-invasive bathroom safety grip system that anchors with suction, designed to improve accessibility without drilling or damaging the property.",
    holdup_s1_title: "Overview",
    holdup_s1_text: "Bathrooms often need fast safety upgrades, but drilling into tile is expensive, permanent and frequently not allowed. HoldUp proposes a reversible grip system that prioritizes confidence, quick installation and repeatable checks.",
    holdup_s1_alt: "HoldUp — overview",
    holdup_s2_title: "Problem",
    holdup_s2_text: "Traditional grab bars require invasive installation and long lead times. That friction delays safety improvements and excludes renters or people with temporary needs.",
    holdup_s2_alt: "HoldUp — problem",
    holdup_s3_title: "Solution",
    holdup_s3_text: "A modular grip system using suction anchoring and clear locked/unlocked interaction, designed to be installed, repositioned and removed without tools.",
    holdup_s3_alt: "HoldUp — solution",
    holdup_s4_title: "Why it works",
    holdup_s4_text: "The system is designed around user trust: intuitive feedback, a simple routine to verify adhesion, and modularity to adapt to different bathroom layouts.",
    holdup_s4_alt: "HoldUp — why it works",
    holdup_s5_title: "Next steps",
    holdup_s5_text: "Define load targets and test protocol, validate long-term adhesion on common surfaces, and refine materials for durability and easy cleaning.",
    holdup_s5_alt: "HoldUp — next steps",
    case_back: "← Back", case_back_work: "← Back to projects",
  },
  es: {
    nav_work: "Work", nav_practice: "Práctica", nav_about: "Sobre mí", nav_contact: "Contacto",
    role: "Diseñadora de Producto",
    tagline: "INNOVACIÓN EN MATERIALES & SISTEMAS ESTRATÉGICOS",
    cta_work: "Ver trabajos", cta_contact: "Contacto",
    based_in: "BASADA EN MADRID",
    selected_work: "TRABAJOS SELECCIONADOS",
    practice_title: "Práctica de Materiales\ny Oficios",
    practice_subtitle: "Explorando la intersección entre técnicas artesanales tradicionales y la innovación material contemporánea.",
    practice_desc: "A través de la experimentación práctica con orfebrería, materiales compuestos e impresión 3D, esta práctica desarrolla una comprensión más profunda del comportamiento de los materiales, las limitaciones de producción y las metodologías artesanales.",
    cta_practice: "Explorar Práctica",
    practice_page_title: "Práctica de Materiales y Oficios",
    practice_page_subtitle: "Exploración práctica de materiales y procesos que informan el pensamiento de diseño de producto.",
    practice_page_desc: "Esta práctica continua desarrolla intuición sobre el comportamiento de los materiales mediante la experimentación directa con técnicas tradicionales y contemporáneas.",
    goldsmithing_title: "Orfebrería", goldsmithing_kicker: "ORFEBRERÍA",
    goldsmithing_caption: "Técnicas tradicionales de trabajo del metal que exploran la forma a través de las limitaciones del material.",
    composites_title: "Materiales Compuestos", composites_kicker: "MATERIALES COMPUESTOS",
    composites_caption: "Experimentación con compuestos reforzados con fibra y procesos de laminado.",
    "3dprinting_title": "Impresión 3D", "3dprinting_kicker": "IMPRESIÓN 3D",
    "3dprinting_caption": "Fabricación aditiva para prototipado rápido y geometrías complejas.",
    conclusion_title: "La práctica informa el diseño",
    conclusion_desc1: "Trabajar directamente con materiales—entender cómo el metal responde a la fuerza, cómo curan los compuestos, cómo los procesos aditivos construyen capa a capa—genera conocimiento que no puede aprenderse solo de forma teórica.",
    conclusion_desc2: "Esta comprensión táctil influye en las decisiones de diseño en cada etapa, desde los primeros bocetos hasta las especificaciones finales de producción.",
    about_title: "SOBRE MÍ",
    about_desc: "Soy diseñadora de producto enfocada en innovación material y sistemas estratégicos, conectando oficio, ingeniería y narrativa.",
    about_btn: "Más sobre mí →",
    about_page_kicker: "SOBRE MÍ",
    about_page_intro: "Soy Lucía — diseñadora de producto que piensa en sistemas, trabaja con sus manos, y encuentra sentido en la intersección entre el oficio, el material y la función.",
    about_page_bio1: "Mi práctica se construye sobre una idea simple: diseñás mejor cuando entendés cómo se hacen las cosas. Por eso paso tiempo en el taller además de frente a la pantalla — explorando orfebrería, materiales compuestos y fabricación aditiva no como hobbies paralelos, sino como parte de cómo pienso.",
    about_page_bio2: "Estudié Diseño Industrial y terminé mi Máster con una tesis sobre sistemas de producto basados en materiales. Desde entonces trabajé en familias de iluminación, productos de seguridad, mobiliario multifuncional y sistemas de diseño alineados con marca.",
    about_page_bio3: "Basada en Madrid. Disponible para proyectos de diseño de producto, colaboraciones de investigación y trabajo de diseño estratégico.",
    about_tools_title: "HERRAMIENTAS & HABILIDADES",
    about_tool_1: "Rhino 3D", about_tool_2: "KeyShot", about_tool_3: "SolidWorks",
    about_tool_4: "Adobe CC", about_tool_5: "Vizcom", about_tool_6: "Figma",
    about_tool_7: "Impresión 3D", about_tool_8: "Compuestos", about_tool_9: "Orfebrería",
    about_timeline_title: "RECORRIDO",
    about_tl_1_year: "2018", about_tl_1_text: "Inicio del grado en Diseño Industrial",
    about_tl_2_year: "2022", about_tl_2_text: "Primer proyecto de producto con marca — diseño de iluminación",
    about_tl_3_year: "2023", about_tl_3_text: "Máster en Diseño de Producto Avanzado",
    about_tl_4_year: "2024", about_tl_4_text: "Tesis sobre sistemas de producto basados en materiales (V-Pin)",
    about_tl_5_year: "2025", about_tl_5_text: "Freelance · Aurora para iSiMAR · HoldUp · SafeStep",
    about_tl_6_year: "2026", about_tl_6_text: "Kyrre Shift · Candela para esPattio · abierta a nuevos proyectos",
    about_dl_cv: "Descargar CV", about_dl_portfolio: "Descargar Portfolio",
    about_cta_contact: "Trabajemos juntas →",
    about_gallery_title: "UN POCO MÁS DE MÍ",
    contact_page_title: "Trabajemos\njuntas",
    contact_page_desc: "Actualmente disponible para proyectos de diseño de producto, colaboraciones de investigación en materiales y trabajo de diseño estratégico.",
    contact_page_location: "MADRID, ESPAÑA",
    contact_page_email_label: "Email", contact_page_linkedin_label: "LinkedIn", contact_page_instagram_label: "Instagram",
    footer_cta: "Abierta a nuevos proyectos —",
    footer_cta_link: "Hablemos",
    footer_back: "Volver arriba ↑",
    name_line1: "Lucía", name_line2: "Marchesi", name_line3: "Zorzi",
    // ── AURORA ──────────────────────────────────────────────
    aurora_kicker: "ILUMINACIÓN · iSiMAR — 2025",
    aurora_title: "Aurora",
    aurora_hero_alt: "Familia de iluminación Aurora — iSiMAR",
    aurora_meta_brand_label: "Marca",
    aurora_meta_brand_val: "iSiMAR · mobiliario exterior & lifestyle",
    aurora_meta_focus_label: "Enfoque",
    aurora_meta_focus_val: "Encaje de marca · Familia de producto · CMF & detalle",
    aurora_meta_type_label: "Tipologías",
    aurora_meta_type_val: "Sobremesa · Colgante · Pared",
    aurora_meta_sum_label: "Resumen",
    aurora_meta_sum_val: "Concepto de familia de iluminación desarrollado para iSiMAR, diseñado para integrarse de forma natural en el catálogo de la marca a través de proporciones coherentes, detalles consistentes y una lógica de sistema escalable.",
    aurora_s1_title: "Descripción",
    aurora_s1_text: "Este proyecto se abordó como un reto de catálogo: crear algo nuevo que siga leyéndose como iSiMAR de forma inmediata. Aurora es un concepto centrado en la familia, construido sobre geometría compartida y componentes repetibles, diseñado para crecer en el tiempo sin perder identidad.",
    aurora_s1_alt: "Aurora — imagen general",
    aurora_s2_title: "Problema",
    aurora_s2_text: "¿Cómo puede una nueva línea de iluminación sentirse fresca y al mismo tiempo mantener coherencia con el lenguaje exterior de iSiMAR? El riesgo es mimetizarse demasiado o romper la lógica visual y de fabricación de la marca.",
    aurora_s2_alt: "Aurora — en barra",
    aurora_s3_title: "Solución",
    aurora_s3_text: "Un sistema de familia modular con silueta característica y detallado consistente, adaptable a diferentes tipologías (sobremesa, colgante, pared) mediante componentes compartidos y reglas proporcionales.",
    aurora_s3_alt: "Aurora — render",
    aurora_s4_title: "Por qué funciona",
    aurora_s4_text: "El sistema está diseñado en torno a la repetibilidad y el reconocimiento de marca: uniones consistentes, variación controlada y decisiones de CMF que reflejan la paleta de iSiMAR y sus requisitos de durabilidad.",
    aurora_s4_alt: "Aurora — detalle",
    aurora_s5_title: "Estrategia de familia",
    aurora_s5_text: "El concepto prioriza un módulo común y una jerarquía clara de detalles para que puedan añadirse nuevas versiones (tamaños, tipos de montaje, contextos exteriores) manteniendo la línea cohesionada.",
    aurora_s5_alt: "Aurora — familia de producto",
    aurora_gallery_title: "Galería",
    aurora_g_alt: "Aurora — imagen",
    // ── SAFESTEP ─────────────────────────────────────────────
    safestep_kicker: "PRODUCTO DE SEGURIDAD — 2025",
    safestep_title: "SafeStep",
    safestep_hero_alt: "Zapatilla de seguridad SafeStep",
    safestep_meta_focus_label: "Enfoque",
    safestep_meta_focus_val: "Calzado de seguridad · Innovación en materiales · Ergonomía laboral",
    safestep_meta_role_label: "Rol",
    safestep_meta_role_val: "Diseñadora de producto — investigación, desarrollo de concepto, estrategia de materiales, modelado 3D.",
    safestep_meta_stat_label: "Estado",
    safestep_meta_stat_val: "Caso de estudio",
    safestep_meta_sum_label: "Resumen",
    safestep_meta_sum_val: "SafeStep es una zapatilla de seguridad diseñada para profesionales en entornos industriales que necesitan protección sin sacrificar comodidad ni estética. Integra una puntera de fluido no newtoniano que permanece flexible en uso normal pero se endurece al instante ante un impacto.",
    safestep_s1_title: "Descripción",
    safestep_s1_text: "El calzado de seguridad tradicional prioriza la protección pero descuida la comodidad y la estética. SafeStep explora un nuevo enfoque integrando un sistema de protección de fluido no newtoniano dentro de un diseño tipo zapatilla — el resultado es un calzado que mantiene los estándares de protección industrial con mayor comodidad y estética contemporánea.",
    safestep_s1_alt: "SafeStep — descripción",
    safestep_s2_title: "Problema",
    safestep_s2_text: "El calzado de seguridad suele diseñarse para entornos de trabajo pesado, resultando en siluetas voluminosas y escasa comodidad ergonómica. Muchos trabajadores — diseñadores, técnicos, supervisores — deben llevar calzado protector a pesar de realizar tareas principalmente ligeras.",
    safestep_s2_alt: "SafeStep — problema",
    safestep_s3_title: "Solución",
    safestep_s3_text: "Una zapatilla de seguridad que combina protección con comodidad cotidiana. El sistema de puntera reemplaza los capuchones de acero por una estructura de fluido no newtoniano en una capa de contención flexible — blanda en movimiento normal, rígida al instante ante un impacto.",
    safestep_s3_alt: "SafeStep — solución",
    safestep_s4_title: "Por qué funciona",
    safestep_s4_text: "El concepto equilibra tres restricciones: requisitos de seguridad, comodidad ergonómica y aceptación visual. Los materiales no newtonianos mantienen la protección ante impactos reduciendo la rigidez y el peso respecto a las punteras tradicionales.",
    safestep_s4_alt: "SafeStep — por qué funciona",
    safestep_s5_title: "Próximos pasos",
    safestep_s5_text: "El desarrollo futuro incluye pruebas de material, validación de impacto y prototipado del sistema de contención. Iteraciones adicionales podrían explorar cartuchos de puntera modulares y cumplimiento de normativas de seguridad certificadas.",
    safestep_s5_alt: "SafeStep — próximos pasos",
    safestep_gallery_title: "Galería",
    safestep_g_alt: "SafeStep — imagen",
    // ── KYRRE SHIFT ──────────────────────────────────────────
    kyrre_kicker: "DISEÑO DE MOBILIARIO — 2026",
    kyrre_title: "Kyrre Shift",
    kyrre_hero_alt: "Kyrre Shift apilados — renders",
    kyrre_meta_sum_label: "Resumen",
    kyrre_meta_sum_val: "Taburete y mesita auxiliar en uno. Diseñado para hogares flexibles y con poco espacio.",
    kyrre_meta_focus_label: "Enfoque",
    kyrre_meta_focus_val: "Mobiliario multifuncional · Vivienda en poco espacio · Diseño apilable",
    kyrre_meta_role_label: "Rol",
    kyrre_meta_role_val: "Diseñadora",
    kyrre_meta_tools_label: "Herramientas",
    kyrre_meta_tools_val: "Rhino · KeyShot · Adobe CC · Vizcom",
    kyrre_s1_title: "Descripción",
    kyrre_s1_text: "Kyrre Shift es una reinterpretación del taburete KYRRE de IKEA diseñada para ampliar su funcionalidad cotidiana. Mediante una geometría reversible, el objeto funciona tanto como asiento como mesita auxiliar, manteniéndose apilable y compacto.",
    kyrre_s1_alt: "Kyrre Shift — descripción",
    kyrre_s2_title: "Problema",
    kyrre_s2_text: "A medida que los espacios habitables se reducen, el mobiliario debe cumplir múltiples funciones sin aumentar el desorden visual o espacial. Los taburetes tradicionales tienen una única función, limitando su utilidad en hogares compactos.",
    kyrre_s2_alt: "Kyrre Shift — problema",
    kyrre_s3_title: "Solución",
    kyrre_s3_text: "Kyrre Shift transforma el taburete KYRRE en una pieza reversible que funciona tanto como asiento como mesita auxiliar, manteniéndose apilable. El diseño amplía la funcionalidad sin alterar la simplicidad del objeto original.",
    kyrre_s3_alt: "Kyrre Shift — solución",
    kyrre_s4_title: "Próximos pasos",
    kyrre_s4_text: "Las siguientes iteraciones refinarán las proporciones y los detalles estructurales, seguidas de validación de fabricación y pruebas de usuario para evaluar estabilidad, usabilidad y apilabilidad.",
    kyrre_s4_alt: "Kyrre Shift — proceso",
    kyrre_gallery_title: "Galería",
    kyrre_g_alt: "Kyrre Shift — imagen",
    // ── HOLDUP ───────────────────────────────────────────────
    holdup_kicker: "SISTEMA DE SEGURIDAD NO INVASIVO — 2025",
    holdup_title: "HoldUp",
    holdup_hero_alt: "Sistema de agarre de baño HoldUp",
    holdup_meta_focus_label: "Enfoque",
    holdup_meta_focus_val: "Accesibilidad · Anclaje no invasivo · Sistema de producto",
    holdup_meta_users_label: "Usuarios",
    holdup_meta_users_val: "Necesidades de movilidad temporales/permanentes · Cuidadores · Alquileres",
    holdup_meta_role_label: "Rol",
    holdup_meta_role_val: "Diseño de producto · Prototipado · Criterios de validación",
    holdup_meta_sum_label: "Resumen",
    holdup_meta_sum_val: "Sistema de agarre de seguridad para baño no invasivo que ancla mediante ventosa, diseñado para mejorar la accesibilidad sin taladrar ni dañar la propiedad.",
    holdup_s1_title: "Descripción",
    holdup_s1_text: "Los baños a menudo necesitan mejoras de seguridad rápidas, pero taladrar el azulejo es caro, permanente y frecuentemente no está permitido. HoldUp propone un sistema de agarre reversible que prioriza la confianza, la instalación rápida y las comprobaciones repetibles.",
    holdup_s1_alt: "HoldUp — descripción",
    holdup_s2_title: "Problema",
    holdup_s2_text: "Las barras de apoyo tradicionales requieren instalación invasiva y largos tiempos de espera. Esa fricción retrasa las mejoras de seguridad y excluye a inquilinos o personas con necesidades temporales.",
    holdup_s2_alt: "HoldUp — problema",
    holdup_s3_title: "Solución",
    holdup_s3_text: "Un sistema de agarre modular que utiliza anclaje por ventosa e interacción clara de bloqueado/desbloqueado, diseñado para instalarse, reposicionarse y retirarse sin herramientas.",
    holdup_s3_alt: "HoldUp — solución",
    holdup_s4_title: "Por qué funciona",
    holdup_s4_text: "El sistema está diseñado en torno a la confianza del usuario: retroalimentación intuitiva, una rutina sencilla para verificar la adhesión y modularidad para adaptarse a diferentes distribuciones de baño.",
    holdup_s4_alt: "HoldUp — por qué funciona",
    holdup_s5_title: "Próximos pasos",
    holdup_s5_text: "Definir objetivos de carga y protocolo de prueba, validar la adhesión a largo plazo en superficies comunes y refinar los materiales para durabilidad y fácil limpieza.",
    holdup_s5_alt: "HoldUp — próximos pasos",
    case_back: "← Volver", case_back_work: "← Volver a proyectos",
  }
};

let currentLang = sessionStorage.getItem("lmz-lang") || "en";

function applyLang(lang) {
  currentLang = lang;
  sessionStorage.setItem("lmz-lang", lang);
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.dataset.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[lang] && dict[lang][key] !== undefined) {
      el.innerHTML = dict[lang][key].replace(/\n/g, "<br>");
    }
  });
  // Also update image alt attributes
  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.dataset.i18nAlt;
    if (dict[lang] && dict[lang][key] !== undefined) {
      el.alt = dict[lang][key];
    }
  });
  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.langBtn === lang);
  });
}

document.querySelectorAll("[data-lang-btn]").forEach(btn => {
  btn.addEventListener("click", () => applyLang(btn.dataset.langBtn));
});

applyLang(currentLang);

// ====== Scroll Reveal ======
const revealItems = document.querySelectorAll(".projectCard, .js-reveal");
if (revealItems.length > 0) {
  revealItems.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = "opacity 0.55s ease, transform 0.55s var(--ease)";
  });
  const ro = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        ro.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(el => ro.observe(el));
}

// ====== Custom cursor (desktop only) ======
if (window.matchMedia("(pointer: fine)").matches) {
  const cursorEl = document.createElement("div");
  cursorEl.className = "cursor";
  cursorEl.innerHTML = '<div class="cursor__dot"></div><div class="cursor__ring"></div>';
  document.body.appendChild(cursorEl);

  const dot  = cursorEl.querySelector(".cursor__dot");
  const ring = cursorEl.querySelector(".cursor__ring");

  let mx = -100, my = -100;
  let rx = -100, ry = -100;

  document.addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left  = mx + "px";
    dot.style.top   = my + "px";
  });

  // Ring follows with lag
  (function lerp() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + "px";
    ring.style.top  = ry + "px";
    requestAnimationFrame(lerp);
  })();

  // Hover detection
  const hoverTargets = "a, button, .projectCard, .about-tool, .nav__link";
  document.addEventListener("mouseover", e => {
    if (e.target.closest(hoverTargets)) document.body.classList.add("cursor-hover");
  });
  document.addEventListener("mouseout", e => {
    if (e.target.closest(hoverTargets)) document.body.classList.remove("cursor-hover");
  });
}

// ====== Page transition on link click ======
(function() {
  function isSameSite(href) {
    if (!href) return false;
    if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return false;
    try {
      const url = new URL(href, location.href);
      return url.hostname === location.hostname;
    } catch { return false; }
  }

  document.addEventListener("click", e => {
    const link = e.target.closest("a[href]");
    if (!link) return;
    const href = link.getAttribute("href");
    if (!isSameSite(href)) return;
    if (link.hasAttribute("download")) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    e.preventDefault();
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.25s ease";
    setTimeout(() => { location.href = href; }, 260);
  });
})();

// ====== Page exit transition ======
// Adds a soft fade-out before navigating to internal links
(function() {
  // Create overlay element
  const overlay = document.createElement("div");
  overlay.style.cssText = [
    "position:fixed","inset:0","z-index:9999",
    "background:var(--bg)","opacity:0","pointer-events:none",
    "transition:opacity .28s ease"
  ].join(";");
  document.body.appendChild(overlay);

  document.addEventListener("click", e => {
    const link = e.target.closest("a[href]");
    if (!link) return;

    const href = link.getAttribute("href");
    // Only intercept internal non-anchor links
    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("http") ||
      link.hasAttribute("download") ||
      link.target === "_blank"
    ) return;

    e.preventDefault();
    overlay.style.pointerEvents = "all";
    overlay.style.opacity = "1";

    setTimeout(() => {
      window.location.href = href;
    }, 280);
  });

  // Fade overlay out on arrival (bfcache / back-forward)
  window.addEventListener("pageshow", () => {
    overlay.style.transition = "none";
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
    // Re-enable transition after reset
    requestAnimationFrame(() => {
      overlay.style.transition = "opacity .28s ease";
    });
  });
})();
