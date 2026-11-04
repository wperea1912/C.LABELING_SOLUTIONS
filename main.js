/*
  FUNCIONALIDAD DEL SITIO
  - Carga textos y datos desde js/config.js
  - Genera tarjetas de soluciones e industrias
  - Menú adaptable a móviles
  - Navegación con indicador de sección
  - Formulario de contacto mediante correo (mailto)
*/
document.addEventListener("DOMContentLoaded", () => {
  const config = window.SITE_CONFIG || {};

  // Aplicar paleta de colores configurada
  if (config.colors) {
    const root = document.documentElement;
    const map = {
      primary: "--color-primary",
      primaryDark: "--color-primary-dark",
      secondary: "--color-secondary",
      navy: "--color-navy",
      navyDeep: "--color-navy-deep",
      text: "--color-text",
      light: "--color-light"
    };
    Object.entries(map).forEach(([key, variable]) => {
      if (config.colors[key]) root.style.setProperty(variable, config.colors[key]);
    });
  }

  // Aplicar textos editables
  ["heroEyebrow", "heroTitle", "heroText", "aboutText"].forEach((key) => {
    const element = document.querySelector(`[data-config="${key}"]`);
    if (element && config[key]) element.textContent = config[key];
  });

  // Aplicar imágenes configuradas
  if (config.images) {
    const logo = document.getElementById("brand-logo");
    const hero = document.querySelector(".hero");
    const about = document.querySelector(".section-image img");
    if (logo && config.images.logo) logo.src = config.images.logo;
    if (hero && config.images.hero) hero.style.backgroundImage = `url("${config.images.hero}")`;
    if (about && config.images.about) about.src = config.images.about;
  }

  // Crear tarjetas de soluciones
  const solutionGrid = document.getElementById("solution-grid");
  if (solutionGrid && Array.isArray(config.solutions)) {
    solutionGrid.innerHTML = config.solutions.map(item => `
      <article class="solution-card">
        <div class="card-icon" aria-hidden="true">${escapeHTML(item.icon || "◇")}</div>
        <h3>${escapeHTML(item.title || "")}</h3>
        <p>${escapeHTML(item.description || "")}</p>
      </article>
    `).join("");
  }

  // Crear tarjetas de industrias
  const industryGrid = document.getElementById("industry-grid");
  if (industryGrid && Array.isArray(config.industries)) {
    industryGrid.innerHTML = config.industries.map(item => `
      <article class="industry-card">
        <span aria-hidden="true">${escapeHTML(item.icon || "◇")}</span>
        <h3>${escapeHTML(item.title || "")}</h3>
        <p>${escapeHTML(item.description || "")}</p>
      </article>
    `).join("");
  }

  // Datos de contacto
  if (config.contact) {
    const email = document.getElementById("contact-email");
    const phone = document.getElementById("contact-phone");
    const location = document.getElementById("contact-location");
    if (email && config.contact.email) {
      email.textContent = config.contact.email;
      email.href = `mailto:${config.contact.email}`;
    }
    if (phone && config.contact.phoneDisplay) {
      phone.textContent = config.contact.phoneDisplay;
      phone.href = `tel:${config.contact.phoneLink || ""}`;
    }
    if (location && config.contact.location) location.textContent = config.contact.location;
  }

  // Menú móvil
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
      menuToggle.textContent = isOpen ? "×" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    }));
  }

  // Marcar la pestaña/sección visible
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach(section => observer.observe(section));
  }

  // Formulario: prepara un correo con la información capturada
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(form);
      const recipient = config.contact?.email || "info@example.com";
      const subject = encodeURIComponent(`Consulta web de ${data.get("name")}`);
      const body = encodeURIComponent(
        `Nombre: ${data.get("name")}\nCorreo: ${data.get("email")}\nEmpresa: ${data.get("company") || "No especificada"}\n\nMensaje:\n${data.get("message")}`
      );
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  }

  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();
});

// Evita insertar HTML no confiable en las tarjetas creadas desde la configuración.
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}
