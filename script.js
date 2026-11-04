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
