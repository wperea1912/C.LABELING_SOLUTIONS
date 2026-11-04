/*
  FUNCIONES DEL SITIO
  - Carga la configuración de js/config.js.
  - Genera tarjetas de soluciones e industrias.
  - Controla menú móvil y navegación activa.
  - Prepara el correo de contacto (mailto).
*/
document.addEventListener("DOMContentLoaded", () => {
  const cfg = window.SITE_CONFIG || {};

  // Aplicar colores definidos en config.js
  if (cfg.colors) {
    const cssVars = {
      teal: "--teal", tealDark: "--teal-dark", gold: "--gold",
      ink: "--ink", inkDeep: "--ink-deep", paper: "--paper"
    };
    Object.entries(cssVars).forEach(([key, variable]) => {
      if (cfg.colors[key]) document.documentElement.style.setProperty(variable, cfg.colors[key]);
    });
  }

  // Aplicar textos configurables
  ["heroEyebrow", "heroTitle", "heroText", "aboutIntro", "aboutText"].forEach(key => {
    const el = document.querySelector(`[data-config="${key}"]`);
    if (el && cfg[key]) el.textContent = cfg[key];
  });

  // Aplicar rutas de imágenes
  if (cfg.images) {
    const logo = document.getElementById("brand-logo");
    const about = document.getElementById("about-image");
    const hero = document.querySelector(".hero-image");
    const footerLogo = document.querySelector(".brand-footer img");
    if (logo && cfg.images.logo) logo.src = cfg.images.logo;
    if (about && cfg.images.about) about.src = cfg.images.about;
    if (hero && cfg.images.hero) hero.style.backgroundImage = `url("${cfg.images.hero}")`;
    if (footerLogo && cfg.images.logoWhite) footerLogo.src = cfg.images.logoWhite;
  }

  // Generar tarjetas de soluciones
  const solutionGrid = document.getElementById("solution-grid");
  if (solutionGrid && Array.isArray(cfg.solutions)) {
    solutionGrid.innerHTML = cfg.solutions.map((item, i) => `
      <article class="solution-card">
        <div class="solution-icon" aria-hidden="true">${escapeHTML(item.icon || "◇")}</div>
        <h3>${escapeHTML(item.title || "")}</h3>
        <p>${escapeHTML(item.description || "")}</p>
      </article>
    `).join("");
  }

  // Generar tarjetas de industrias
  const industryGrid = document.getElementById("industry-grid");
  if (industryGrid && Array.isArray(cfg.industries)) {
    industryGrid.innerHTML = cfg.industries.map((item, i) => `
      <article class="industry-card">
        <span class="industry-index">0${i + 1}</span>
        <span class="industry-icon" aria-hidden="true">${escapeHTML(item.icon || "◇")}</span>
        <h3>${escapeHTML(item.title || "")}</h3>
        <p>${escapeHTML(item.description || "")}</p>
      </article>
    `).join("");
  }

  // Datos de contacto
  const brand = cfg.brand || {};
  const email = document.getElementById("contact-email");
  const emailLink = document.getElementById("contact-email-link");
  const footerEmail = document.getElementById("footer-email");
  const phone = document.getElementById("contact-phone");
  const phoneLink = document.getElementById("contact-phone-link");
  const location = document.getElementById("contact-location");
  if (brand.email) {
    if (email) email.textContent = brand.email;
    if (emailLink) emailLink.href = `mailto:${brand.email}`;
    if (footerEmail) { footerEmail.textContent = brand.email; footerEmail.href = `mailto:${brand.email}`; }
  }
  if (brand.phoneDisplay && phone) phone.textContent = brand.phoneDisplay;
  if (brand.phoneLink && phoneLink) phoneLink.href = `tel:${brand.phoneLink}`;
  if (brand.location && location) location.textContent = brand.location;

  // Configurar WhatsApp del pie de página; si no hay número, dirigir a contacto.
  const whatsapp = document.getElementById("footer-whatsapp");
  if (whatsapp && brand.whatsapp) {
    whatsapp.href = `https://wa.me/${brand.whatsapp}`;
    whatsapp.target = "_blank";
    whatsapp.rel = "noopener";
  } else if (whatsapp) {
    whatsapp.href = "#contacto";
  }

  // Menú desplegable en móviles
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }));
  }

  // Actualizar pestaña activa según la sección que se está viendo
  if ("IntersectionObserver" in window) {
    const links = document.querySelectorAll(".nav-link");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    document.querySelectorAll("main section[id]").forEach(section => observer.observe(section));
  }

  // Formulario: genera correo con los datos escritos. No almacena datos.
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(form);
      const recipient = brand.email || "info@example.com";
      const subject = encodeURIComponent(brand.emailSubject || "Contacto desde el sitio web");
      const body = encodeURIComponent(
        `Nombre: ${data.get("name")}\nEmpresa: ${data.get("company") || "No especificada"}\nCorreo: ${data.get("email")}\nInterés: ${data.get("interest")}\n\nMensaje:\n${data.get("message")}`
      );
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  }

  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();
});

// Escapa texto para evitar que la configuración se interprete como HTML.
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}
