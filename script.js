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
