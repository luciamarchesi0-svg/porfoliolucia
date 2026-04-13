// ====== Year ======
document.querySelectorAll(".js-year").forEach(el => {
  el.textContent = new Date().getFullYear();
});

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ====== Burger Menu (Mobile) ======
const burger = document.querySelector(".burger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll(".mobileMenu__link");
const page = document.querySelector(".page");

if (burger && mobileMenu && page) {
  let scrollY = 0;
  let isMenuOpen = false;

  const openMenu = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (isMenuOpen) return;

    scrollY = window.scrollY || window.pageYOffset;

    document.body.classList.add("menu-open");
    page.style.top = `-${scrollY}px`;

    mobileMenu.hidden = false;
    burger.classList.add("is-active");
    burger.setAttribute("aria-expanded", "true");

    isMenuOpen = true;
  };

  const closeMenu = () => {
    if (!isMenuOpen) return;

    mobileMenu.hidden = true;
    burger.classList.remove("is-active");
    burger.setAttribute("aria-expanded", "false");

    document.body.classList.remove("menu-open");
    page.style.top = "";

    window.scrollTo(0, scrollY);

    isMenuOpen = false;
  };

  const toggleMenu = (e) => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu(e);
    }
  };

  burger.addEventListener("click", toggleMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("click", (e) => {
    if (!isMenuOpen) return;

    const clickedBurger = burger.contains(e.target);
    const clickedInsideMenu = mobileMenu.contains(e.target);

    if (!clickedBurger && !clickedInsideMenu) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820 && isMenuOpen) {
      closeMenu();
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
      if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
        current = sec.id;
      }
    }

    navLinks.forEach(a => {
      a.classList.toggle("is-active", !!current && a.getAttribute("href") === "#" + current);
    });
  };

  window.addEventListener("scroll", setActive, { passive: true });
  setActive();
}

// ====== i18n (Diccionario de traducciones) ======
const dict = {
  // ========== INGLÉS ==========
  en: {
    // --- Navegación ---
    nav_work: "Work",
    nav_practice: "Practice",
    nav_about: "About",
    nav_contact: "Contact",

    // --- Hero (index.html) ---
    name_line1: "Lucía",
    name_line2: "Marchesi",
    name_line3: "Zorzi",
    role: "Product Designer",
    tagline: "MATERIAL INNOVATION & STRATEGIC SYSTEMS",
    cta_work: "View Work",
    cta_contact: "Contact",
    based_in: "BASED IN MADRID",

    // --- Work Section (index.html) ---
    selected_work: "SELECTED WORK",
    cta_more_projects: "More projects",

    // --- Practice Section (index.html) ---
    practice_title: "Material & Craft\nPractice",
    practice_subtitle: "Exploring the intersection of traditional craft techniques and contemporary material innovation.",
    practice_desc: "Through hands-on experimentation with goldsmithing, composite materials, and 3D printing, this practice develops a deeper understanding of material behavior, production constraints, and craft methodologies that inform product design work.",
    cta_practice: "Explore Practice",

    // --- About Section (index.html) ---
    about_title: "ABOUT",
    about_desc: "I design physical products with a materials-first approach. My work bridges traditional craft techniques with contemporary manufacturing, creating objects that are both functional and narratively coherent.",
    about_btn: "More about me →",

    // --- Footer (index.html) ---
    footer_cta: "Open to new projects —",
    footer_cta_link: "Let's talk",
    footer_back: "Back to top ↑",

    // --- Practice Page (practice.html) ---
    practice_page_title: "Material & Craft Practice",
    practice_page_subtitle: "Hands-on exploration of materials and processes that inform product design thinking.",
    practice_page_desc: "This ongoing practice develops intuition about material behavior, production constraints, and craft methodologies through direct experimentation with traditional and contemporary techniques.",

    goldsmithing_title: "Goldsmithing",
    goldsmithing_kicker: "GOLDSMITHING",
    goldsmithing_caption: "Traditional metalworking techniques exploring form through material constraints.",

    composites_title: "Composite Materials",
    composites_kicker: "COMPOSITE MATERIALS",
    composites_caption: "Experimentation with fiber reinforced composites and lamination processes.",

    "3dprinting_title": "3D Printing",
    "3dprinting_kicker": "3D PRINTING",
    "3dprinting_caption": "Additive manufacturing for rapid prototyping and complex geometries.",

    conclusion_title: "Practice Informs Design",
    conclusion_desc1: "Working directly with materials—understanding how metal responds to force, how composites cure, how additive processes build layer by layer—creates knowledge that cannot be learned theoretically.",
    conclusion_desc2: "This tactile understanding influences design decisions at every stage, from initial concept sketches to final production specifications. It builds intuition about what is possible, what is efficient, and what compromises are worth making.",

    // --- About Page (about.html) ---
    about_page_kicker: "ABOUT ME",
    about_page_intro: "I'm Lucía — a product designer who thinks in systems, works with her hands, and finds meaning at the intersection of craft, material, and function.",
    about_page_bio1: "My practice is built around a simple belief: you design better when you understand how things are made. That's why I spend time in the workshop alongside time at the screen — exploring goldsmithing, composite materials, and additive manufacturing not as side hobbies, but as part of how I think.",
    about_page_bio2: "I studied Industrial Design and finished my Master's with a thesis on material-driven product systems. Since then I've worked on lighting families, safety products, multifunctional furniture and brand-aligned design systems — always looking for the detail that makes something feel inevitable.",
    about_page_bio3: "Based in Madrid. Available for product design projects, research collaborations, and strategic design work.",

    about_tools_title: "TOOLS & SKILLS",
    about_tool_1: "Rhino 3D",
    about_tool_2: "KeyShot",
    about_tool_3: "SolidWorks",
    about_tool_4: "Adobe CC",
    about_tool_5: "Vizcom",
    about_tool_6: "Figma",
    about_tool_7: "3D Printing",
    about_tool_8: "Composites",
    about_tool_9: "Goldsmithing",

    // ABOUT — METHOD
    about_method_title: "How I work & what sets me apart",
    about_method_p1: "I approach design as a decision-making process, not a purely formal exercise. I start by understanding context, identifying real tensions, and clearly defining the problem.",
    about_method_p2: "I don’t design isolated objects, but coherent systems where use, production, and meaning follow a clear logic.",
    about_method_p3: "My approach combines research, strategic thinking, and material exploration. I care as much about the why as the how: identifying opportunities and translating them into viable, manufacturable, and consistent solutions.",
    about_method_p4: "What sets me apart is synthesis. Reducing the unnecessary, clarifying what matters, and turning it into products that work well, are easy to understand, and integrate naturally into everyday life.",
    about_method_p5: "I aim for a balance between intuition and technical reasoning, between aesthetic sensitivity and production logic.",
    about_method_closing: "I don’t design to impose form, but to build meaning.",
    
    about_timeline_title: "JOURNEY",
    about_tl_1_year: "2018",
    about_tl_1_text: "Started Industrial Design degree",
    about_tl_2_year: "2022",
    about_tl_2_text: "First product project with a brand — lighting design",
    about_tl_3_year: "2023",
    about_tl_3_text: "Master's in Advanced Product Design",
    about_tl_4_year: "2024",
    about_tl_4_text: "Thesis on material-driven product systems (V-Pin)",
    about_tl_5_year: "2025",
    about_tl_5_text: "Freelance · Aurora for iSiMAR · HoldUp · SafeStep",
    about_tl_6_year: "2026",
    about_tl_6_text: "Kyrre Shift · Candela for esPattio · open to new projects",

    about_dl_cv: "Download CV",
    about_dl_portfolio: "Download Portfolio",
    about_cta_contact: "Let's work together →",
    about_gallery_title: "A BIT MORE OF ME",

    // --- Contact Page (contact.html) ---
    contact_page_title: "Let's work\ntogether",
    contact_page_desc: "Currently available for product design projects, material research collaborations, and strategic design work.",
    contact_page_location: "MADRID, SPAIN",
    contact_page_email_label: "Email",
    contact_page_linkedin_label: "LinkedIn",
    contact_page_instagram_label: "Instagram",

    // --- Case Studies (compartidos) ---
    case_back: "Back",
    case_back_work: "← Back to projects",
  },

  // ========== ESPAÑOL ==========
  es: {
    // --- Navegación ---
    nav_work: "Work",
    nav_practice: "Práctica",
    nav_about: "Sobre mí",
    nav_contact: "Contacto",

    // --- Hero (index.html) ---
    name_line1: "Lucía",
    name_line2: "Marchesi",
    name_line3: "Zorzi",
    role: "Diseñadora de Producto",
    tagline: "INNOVACIÓN EN MATERIALES & SISTEMAS ESTRATÉGICOS",
    cta_work: "Ver trabajos",
    cta_contact: "Contacto",
    based_in: "BASADA EN MADRID",

    // --- Work Section (index.html) ---
    selected_work: "TRABAJOS SELECCIONADOS",
    cta_more_projects: "Más proyectos",

    // --- Practice Section (index.html) ---
    practice_title: "Práctica de Materiales\ny Oficios",
    practice_subtitle: "Explorando la intersección entre técnicas artesanales tradicionales y la innovación material contemporánea.",
    practice_desc: "A través de la experimentación práctica con orfebrería, materiales compuestos e impresión 3D, esta práctica desarrolla una comprensión más profunda del comportamiento de los materiales, las limitaciones de producción y las metodologías artesanales que informan el trabajo de diseño de producto.",
    cta_practice: "Explorar Práctica",

    // --- About Section (index.html) ---
    about_title: "SOBRE MÍ",
    about_desc: "Diseño productos físicos con un enfoque centrado en materiales. Mi trabajo conecta técnicas artesanales tradicionales con manufactura contemporánea, creando objetos funcionales y narrativamente coherentes.",
    about_btn: "Más sobre mí →",

    // --- Footer (index.html) ---
    footer_cta: "Abierta a nuevos proyectos —",
    footer_cta_link: "Hablemos",
    footer_back: "Volver arriba ↑",

    // --- Practice Page (practice.html) ---
    practice_page_title: "Práctica de Materiales y Oficios",
    practice_page_subtitle: "Exploración práctica de materiales y procesos que informan el pensamiento de diseño de producto.",
    practice_page_desc: "Esta práctica continua desarrolla intuición sobre el comportamiento de los materiales, las limitaciones de producción y las metodologías artesanales mediante la experimentación directa con técnicas tradicionales y contemporáneas.",

    goldsmithing_title: "Orfebrería",
    goldsmithing_kicker: "ORFEBRERÍA",
    goldsmithing_caption: "Técnicas tradicionales de trabajo del metal que exploran la forma a través de las limitaciones del material.",

    composites_title: "Materiales Compuestos",
    composites_kicker: "MATERIALES COMPUESTOS",
    composites_caption: "Experimentación con compuestos reforzados con fibra y procesos de laminado.",

    "3dprinting_title": "Impresión 3D",
    "3dprinting_kicker": "IMPRESIÓN 3D",
    "3dprinting_caption": "Fabricación aditiva para prototipado rápido y geometrías complejas.",

    conclusion_title: "La Práctica Informa el Diseño",
    conclusion_desc1: "Trabajar directamente con materiales—entender cómo el metal responde a la fuerza, cómo curan los compuestos, cómo los procesos aditivos construyen capa a capa—genera conocimiento que no puede aprenderse solo de forma teórica.",
    conclusion_desc2: "Esta comprensión táctil influye en las decisiones de diseño en cada etapa, desde los primeros bocetos conceptuales hasta las especificaciones finales de producción. Construye intuición sobre qué es posible, qué es eficiente y qué compromisos valen la pena.",

    // --- About Page (about.html) ---
    about_page_kicker: "SOBRE MÍ",
    about_page_intro: "Soy Lucía — diseñadora de producto que piensa en sistemas, trabaja con sus manos, y encuentra sentido en la intersección entre el oficio, el material y la función.",
    about_page_bio1: "Mi práctica se construye sobre una idea simple: diseñás mejor cuando entendés cómo se hacen las cosas. Por eso paso tiempo en el taller además de frente a la pantalla — explorando orfebrería, materiales compuestos y fabricación aditiva no como hobbies paralelos, sino como parte de cómo pienso.",
    about_page_bio2: "Estudié Diseño Industrial y terminé mi Máster con una tesis sobre sistemas de producto basados en materiales. Desde entonces trabajé en familias de iluminación, productos de seguridad, mobiliario multifuncional y sistemas de diseño alineados con marca — siempre buscando el detalle que hace que algo se sienta inevitable.",
    about_page_bio3: "Basada en Madrid. Disponible para proyectos de diseño de producto, colaboraciones de investigación y trabajo de diseño estratégico.",

    about_tools_title: "HERRAMIENTAS & HABILIDADES",
    about_tool_1: "Rhino 3D",
    about_tool_2: "KeyShot",
    about_tool_3: "SolidWorks",
    about_tool_4: "Adobe CC",
    about_tool_5: "Vizcom",
    about_tool_6: "Figma",
    about_tool_7: "Impresión 3D",
    about_tool_8: "Compuestos",
    about_tool_9: "Orfebrería",

    about_method_title: "Cómo trabajo y qué me diferencia",
    about_method_p1: "Trabajo el diseño como un proceso de toma de decisiones, no como un ejercicio formal. Empiezo entendiendo el contexto, detectando tensiones reales y definiendo con precisión el problema.",
    about_method_p2: "No diseño objetos aislados, sino sistemas coherentes, donde uso, producción y significado responden a una misma lógica.",
    about_method_p3: "Mi enfoque combina investigación, pensamiento estratégico y exploración material. Me interesa tanto el por qué como el cómo: identificar oportunidades y traducirlas en soluciones viables, fabricables y consistentes en el tiempo.",
    about_method_p4: "Me diferencio por la síntesis. Reducir lo innecesario, clarificar lo esencial y convertirlo en productos que funcionan bien, se entienden rápido y se integran de forma natural.",
    about_method_p5: "Busco equilibrio entre intuición y criterio técnico, entre sensibilidad estética y lógica productiva.",
    about_method_closing: "No diseño para imponer una forma, sino para construir sentido.",

    about_timeline_title: "RECORRIDO",
    about_tl_1_year: "2018",
    about_tl_1_text: "Inicio del grado en Diseño Industrial",
    about_tl_2_year: "2022",
    about_tl_2_text: "Primer proyecto de producto con marca — diseño de iluminación",
    about_tl_3_year: "2023",
    about_tl_3_text: "Máster en Diseño de Producto Avanzado",
    about_tl_4_year: "2024",
    about_tl_4_text: "Tesis sobre sistemas de producto basados en materiales (V-Pin)",
    about_tl_5_year: "2025",
    about_tl_5_text: "Freelance · Aurora para iSiMAR · HoldUp · SafeStep",
    about_tl_6_year: "2026",
    about_tl_6_text: "Kyrre Shift · Candela para esPattio · abierta a nuevos proyectos",

    about_dl_cv: "Descargar CV",
    about_dl_portfolio: "Descargar Portfolio",
    about_cta_contact: "Trabajemos juntos →",
    about_gallery_title: "UN POCO MÁS DE MÍ",

    // --- Contact Page (contact.html) ---
    contact_page_title: "Trabajemos\njuntos",
    contact_page_desc: "Actualmente disponible para proyectos de diseño de producto, colaboraciones de investigación en materiales y trabajo de diseño estratégico.",
    contact_page_location: "MADRID, ESPAÑA",
    contact_page_email_label: "Email",
    contact_page_linkedin_label: "LinkedIn",
    contact_page_instagram_label: "Instagram",

    // --- Case Studies (compartidos) ---
    case_back: "Volver",
    case_back_work: "← Volver a proyectos",
  }
};

// ====== Aplicar idioma ======
let currentLang = sessionStorage.getItem("lmz-lang") || "en";

function applyLang(lang) {
  currentLang = lang;
  sessionStorage.setItem("lmz-lang", lang);
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.dataset.lang = lang;

  // Traducir textos con data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[lang] && dict[lang][key] !== undefined) {
      el.innerHTML = dict[lang][key].replace(/\n/g, "<br>");
    }
  });

  // Traducir atributos alt de imágenes con data-i18n-alt
  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.dataset.i18nAlt;
    if (dict[lang] && dict[lang][key] !== undefined) {
      el.alt = dict[lang][key];
    }
  });

  // Actualizar botones de idioma
  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.langBtn === lang);
  });
}

// Event listeners para botones de idioma
document.querySelectorAll("[data-lang-btn]").forEach(btn => {
  btn.addEventListener("click", () => applyLang(btn.dataset.langBtn));
});

// Aplicar idioma al cargar
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

  const dot = cursorEl.querySelector(".cursor__dot");
  const ring = cursorEl.querySelector(".cursor__ring");

  let mx = -100, my = -100;
  let rx = -100, ry = -100;

  document.addEventListener("mousemove", e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + "px";
    dot.style.top = my + "px";
  });

  (function lerp() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
    requestAnimationFrame(lerp);
  })();

  const hoverTargets = "a, button, .projectCard, .about-tool, .nav__link";
  document.addEventListener("mouseover", e => {
    if (e.target.closest(hoverTargets)) document.body.classList.add("cursor-hover");
  });
  document.addEventListener("mouseout", e => {
    if (e.target.closest(hoverTargets)) document.body.classList.remove("cursor-hover");
  });
}

// ====== Page transition on link click ======
(function () {
  function isSameSite(href) {
    if (!href) return false;
    if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return false;

    try {
      const url = new URL(href, location.href);
      return url.hostname === location.hostname;
    } catch {
      return false;
    }
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

    setTimeout(() => {
      location.href = href;
    }, 260);
  });
})();

// ====== Page exit transition ======
(function () {
  const overlay = document.createElement("div");
  overlay.style.cssText = [
    "position:fixed",
    "inset:0",
    "z-index:9999",
    "background:var(--bg)",
    "opacity:0",
    "pointer-events:none",
    "transition:opacity .28s ease"
  ].join(";");

  document.body.appendChild(overlay);

  document.addEventListener("click", e => {
    const link = e.target.closest("a[href]");
    if (!link) return;

    const href = link.getAttribute("href");

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

  window.addEventListener("pageshow", () => {
    overlay.style.transition = "none";
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";

    requestAnimationFrame(() => {
      overlay.style.transition = "opacity .28s ease";
    });
  });
})();
