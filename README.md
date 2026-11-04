# C Labeling Solutions — sitio web inicial

Sitio estático adaptable (HTML, CSS y JavaScript), preparado para publicarse en Cloudflare Pages.

## Archivos
- `index.html`: estructura y contenido.
- `styles.css`: identidad visual y diseño responsive.
- `script.js`: menú móvil, año automático y formulario vía correo.

## Probar localmente
Abre `index.html` en un navegador. Para desarrollo, también puedes abrir la carpeta con Visual Studio Code y usar una extensión de servidor local.

## Publicar gratuitamente en Cloudflare Pages
1. Crea una cuenta gratuita en GitHub y un repositorio nuevo, por ejemplo `cls-website`.
2. Sube los tres archivos (`index.html`, `styles.css`, `script.js`) a la raíz del repositorio.
3. En Cloudflare, entra a Workers & Pages → Create → Pages → Connect to Git.
4. Selecciona el repositorio. Como es un sitio estático, deja el comando de compilación vacío y usa `/` como directorio de salida.
5. Publica. Cloudflare asignará una dirección `*.pages.dev`.

## Conectar clabelingsolutions.com.mx
En Cloudflare Pages abre el proyecto → Custom domains → Set up a custom domain y sigue las instrucciones DNS que te indique Cloudflare. No cambies los nameservers ni registros actuales del dominio sin verificar dónde está alojado el correo y quién administra el DNS. El registro del dominio se sigue pagando al registrador; Pages no incluye el dominio.

## Antes de publicar (importante)
- Confirmar el correo `contacto@clabelingsolutions.com.mx` y sustituirlo en `script.js` y `index.html` si corresponde.
- Añadir teléfono y enlace real de WhatsApp.
- Sustituir ilustraciones gráficas por fotografías propias autorizadas de máquinas, refacciones, taller y proyectos.
- Confirmar nombres de marcas y servicios que CLS puede ofrecer.
- Añadir aviso de privacidad y datos fiscales/comerciales si se capturan datos de clientes.
- El formulario abre el programa de correo del visitante mediante `mailto:`; no almacena ni envía datos automáticamente. Para recepción sin depender del correo del visitante, conectar posteriormente un servicio de formularios.
- El diseño utiliza Google Fonts desde internet; si se desea independencia total de terceros, retirar la importación y usar tipografías del sistema.

## Dominio y correo
El dominio `clabelingsolutions.com.mx` no se registra ni renueva con este paquete. Mantener el proveedor actual del dominio y correo. Cloudflare Pages puede alojar el sitio sin costo en el plan gratuito; el dominio propio tiene costo de registro/renovación.
