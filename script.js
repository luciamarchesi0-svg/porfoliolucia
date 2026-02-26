// ====== Year ======
document.getElementById("year").textContent = new Date().getFullYear();

// ====== Active nav link on scroll ======
const sections = ["work", "practice", "about", "contact"]
  .map(id => document.getElementById(id))
  .filter(Boolean);

const navLinks = Array.from(document.querySelectorAll(".nav__link"));

const setActive = () => {
  const y = window.scrollY + 120;
  let current = null;

  for (const sec of sections) {
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    if (y >= top && y < bottom) current = sec.id;
  }

  navLinks.forEach(a => {
    a.classList.toggle("is-active", current && a.getAttribute("href") === `#${current}`);
  });
};

window.addEventListener("scroll", setActive, { passive: true });
setActive();

// ====== Simple i18n (EN/ES) ======
const dict = {
  en: {
    nav_work: "Work",
    nav_practice: "Practice",
    nav_about: "About",
    nav_contact: "Contact",
    role: "Product Designer",
    tagline: "MATERIAL INNOVATION & STRATEGIC SYSTEMS",
    cta_work: "View Work",
    cta_contact: "Contact",
    based_in: "BASED IN MADRID",
    selected_work: "SELECTED WORK",
    work_desc: "A curated set of projects focused on material-driven innovation, product systems and prototyping.",
    practice_title: "Material & Craft\nPractice",
    practice_subtitle: "Exploring the intersection of traditional craft techniques and contemporary material innovation.",
    practice_desc: "Through hands-on experimentation with goldsmithing, composite materials, and 3D printing, this practice develops a deeper understanding of material behavior, production constraints, and craft methodologies that inform product design work.",
    cta_practice: "Explore Practice",
    about_title: "ABOUT",
    about_desc: "I’m a product designer focused on material innovation and strategic systems, bridging craft, engineering and narrative.",
    contact_title: "CONTACT",
    contact_desc: "For collaborations, internships or freelance work, reach out.",
    contact_email: "Email me",
    contact_linkedin: "LinkedIn",
    name_line1: "Lucía",
    name_line2: "Marchesi",
    name_line3: "Zorzi"
  },
  es: {
    nav_work: "Work",
    nav_practice: "Práctica",
    nav_about: "Sobre mí",
    nav_contact: "Contacto",
    role: "Diseñadora de Producto",
    tagline: "INNOVACIÓN EN MATERIALES & SISTEMAS ESTRATÉGICOS",
    cta_work: "Ver trabajos",
    cta_contact: "Contacto",
    based_in: "BASADA EN MADRID",
    selected_work: "TRABAJOS SELECCIONADOS",
    work_desc: "Una selección de proyectos centrados en innovación material, sistemas de producto y prototipado.",
    practice_title: "Práctica de Materiales\ny Oficios",
    practice_subtitle: "Explorando la intersección entre técnicas artesanales tradicionales y la innovación material contemporánea.",
    practice_desc: "A través de la experimentación práctica con orfebrería, materiales compuestos e impresión 3D, esta práctica desarrolla una comprensión más profunda del comportamiento de los materiales, las limitaciones de producción y las metodologías artesanales que informan el trabajo de diseño de producto.",
    cta_practice: "Explorar Práctica",
    about_title: "SOBRE MÍ",
    about_desc: "Soy diseñadora de producto enfocada en innovación material y sistemas estratégicos, conectando oficio, ingeniería y narrativa.",
    contact_title: "CONTACTO",
    contact_desc: "Para colaboraciones, prácticas o proyectos freelance, escribime.",
    contact_email: "Escribime",
    contact_linkedin: "LinkedIn",
    name_line1: "Lucía",
    name_line2: "Marchesi",
    name_line3: "Zorzi"
  }
};

function applyLang(lang){
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.dataset.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[lang] && dict[lang][key]) {
      // Handle newlines in translations
      el.innerHTML = dict[lang][key].replace(/\n/g, '<br>');
    }
  });

  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.langBtn === lang);
  });
}

document.querySelectorAll("[data-lang-btn]").forEach(btn => {
  btn.addEventListener("click", () => applyLang(btn.dataset.langBtn));
});

// default
applyLang("en");

// ====== Scroll Reveal Animation ======
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.projectCard').forEach(card => {
  observer.observe(card);
});