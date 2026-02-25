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
    practice_title: "PRACTICE",
    practice_desc: "My process balances research, iteration and hands-on making: from early concepts to refined prototypes.",
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
    practice_title: "PRÁCTICA",
    practice_desc: "Mi proceso combina investigación, iteración y hacer con las manos: de conceptos iniciales a prototipos refinados.",
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
    if (dict[lang] && dict[lang][key]) el.textContent = dict[lang][key];
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