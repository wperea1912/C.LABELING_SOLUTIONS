/* ==========================================================
   C LABELING SOLUTIONS | JAVASCRIPT
   Todas las funciones interactivas están agrupadas aquí.
   Puedes modificar textos, correos y comportamiento en este archivo.
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // ---------- MENÚ MÓVIL ----------
  // Abre y cierra la navegación en pantallas pequeñas.
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Cierra el menú después de seleccionar una sección.
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---------- AÑO AUTOMÁTICO EN EL FOOTER ----------
  // Evita tener que actualizar manualmente el año del copyright.
  const yearElement = document.getElementById("currentYear");
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  // ---------- FORMULARIO DE CONTACTO ----------
  // CONFIGURACIÓN IMPORTANTE:
  // Cambia este correo por la dirección real de C Labeling Solutions.
  // Esta versión usa mailto: no almacena datos ni envía correos por sí sola.
  const contactEmail = "contacto@clabelingsolutions.com";
  const contactForm = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get("name");
      const email = formData.get("email");
      const company = formData.get("company") || "No especificada";
      const message = formData.get("message");

      // Construye el contenido del correo con los datos capturados.
      const subject = encodeURIComponent("Solicitud de información - C Labeling Solutions");
      const body = encodeURIComponent(
        `Nombre: ${name}\nCorreo: ${email}\nEmpresa: ${company}\n\nMensaje:\n${message}`
      );

      // Abre el cliente de correo predeterminado del visitante.
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

      if (formNote) {
        formNote.textContent = "Si no se abrió tu correo, escríbenos directamente a " + contactEmail;
      }
    });
  }
});
