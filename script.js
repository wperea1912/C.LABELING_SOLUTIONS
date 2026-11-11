const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const recipient = 'contacto@clabelingsolutions.com.mx'; // Reemplazar por el correo real de CLS.
  const subject = encodeURIComponent('Solicitud de información - C Labeling Solutions');
  const body = encodeURIComponent(
    `Nombre: ${data.get('name')}\nEmpresa: ${data.get('company') || 'No especificada'}\nCorreo: ${data.get('email')}\nÁrea de interés: ${data.get('service')}\n\nProyecto:\n${data.get('message')}`
  );
  document.getElementById('form-status').textContent = 'Preparando tu correo. Revisa la aplicación de correo que se abrirá.';
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});



/* ==========================================
   CLS - CARRUSEL DE ESPECIALIDADES
   ========================================== */

// CONFIGURACION
const carouselConfig = {
    interval: 5000,
    autoplay: true,
    pauseOnHover: true
};

// ==========================================
// IMAGENES
// AGREGA AQUI TUS FOTOGRAFIAS
// ==========================================
const images = [

   
    "imagenes/estrellas.jpeg",

    "imagenes/Sinfin.jpeg",

    "imagenes/Instalacion.jpeg",

];
// ==========================================
// ELEMENTOS HTML
// ==========================================

const track = document.getElementById("carouselTrack");
const indicators = document.getElementById(
    "carouselIndicators"
);
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const container = document.querySelector(
    ".carousel-container"
);

// ==========================================
// VARIABLES
// ==========================================
let currentIndex = 0;
let autoplayTimer = null;
let isPaused = false;
// ==========================================
// CREAR CARRUSEL
// ==========================================

function createCarousel() {
    track.innerHTML = "";
    indicators.innerHTML = "";

    images.forEach((src, index) => {

        const slide = document.createElement("div");
        slide.className = "carousel-slide";
        const img = document.createElement("img");

        img.src = src;
        img.alt = `Especialidad CLS ${index + 1}`;
        img.loading = index === 0 ? "eager" : "lazy";

        // Avisar si una imagen no se encuentra
        img.onerror = () => {
            console.error("Imagen no encontrada:", src);
        };
        slide.appendChild(img);
        track.appendChild(slide);
        const dot = document.createElement("button");
        dot.setAttribute(
            "aria-label",
            `Mostrar imagen ${index + 1}`
        );
        dot.addEventListener("click", () => {
            showSlide(index);
            restartAutoplay();
        });
        indicators.appendChild(dot);
    });

    showSlide(0);
}

// ==========================================
// MOSTRAR IMAGEN
// ==========================================

function showSlide(index) {

    const slides = document.querySelectorAll(
        ".carousel-slide"
    );
    const dots = indicators.querySelectorAll("button");
    if (slides.length === 0) return;
    currentIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentIndex);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });

}

// ==========================================
// NAVEGACION
// ==========================================

function nextSlide() {
    showSlide(currentIndex + 1);
}
function prevSlide() {
    showSlide(currentIndex - 1);
}

// ==========================================
// REPRODUCCION AUTOMATICA
// ==========================================

function startAutoplay() {
    stopAutoplay();
    if (!carouselConfig.autoplay || isPaused) return;
    if (images.length < 2) return;
    autoplayTimer = setInterval(() => {
        nextSlide();
    }, carouselConfig.interval);

}
function stopAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
}
function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
}
// ==========================================
// PAUSA AL PASAR EL CURSOR
// ==========================================

if (carouselConfig.pauseOnHover) {
    container.addEventListener("mouseenter", () => {
        isPaused = true;
        stopAutoplay();
    });
    container.addEventListener("mouseleave", () => {
        isPaused = false;
        startAutoplay();
    });
}

// ==========================================
// BOTONES
// ==========================================
nextBtn.addEventListener("click", () => {
    nextSlide();
    restartAutoplay();
});
prevBtn.addEventListener("click", () => {
    prevSlide();
    restartAutoplay();
});
// ==========================================
// INICIAR
// ==========================================
if (images.length > 0) {
    createCarousel();
    startAutoplay();
} else {
    console.warn("CLS: No hay imágenes configuradas.");
}
