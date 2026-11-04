# C Labeling Solutions — sitio web

Sitio web corporativo estático, adaptable a móviles y listo para publicar con **GitHub Pages**.

## 1. Estructura del proyecto

```text
c_labeling_solutions_web/
├── index.html                 # Página principal y secciones de navegación
├── README.md                  # Esta guía
├── css/
│   └── styles.css             # Colores, tipografías, diseño y versión móvil
├── js/
│   ├── config.js              # PERSONALIZA textos, colores, imágenes y contacto
│   └── main.js                # Funciones del menú, tarjetas y formulario
└── assets/
    ├── images/                # Logotipo, hero, imágenes y favicon
    └── icons/                 # Carpeta disponible para iconos adicionales
```

## 2. Personalización rápida

Abre `js/config.js`. Es el archivo principal para modificar:

- **Textos:** título principal, descripción y texto de Nosotros.
- **Colores:** modifica los valores de `colors` en formato HEX.
- **Contacto:** agrega correo, teléfono y ubicación reales.
- **Soluciones:** cambia, agrega o elimina elementos del arreglo `solutions`.
- **Industrias:** cambia, agrega o elimina elementos del arreglo `industries`.
- **Imágenes:** actualiza las rutas en el objeto `images`.

También puedes editar directamente `css/styles.css` para cambiar tipografías, tamaños, espacios, bordes, sombras y comportamiento visual.

### Cambiar fotografías

1. Coloca tus imágenes en `assets/images/`.
2. Actualiza la ruta correspondiente en `js/config.js`.
3. Para la imagen principal utiliza `images.hero`; para Nosotros, `images.about`.
4. Para el logotipo utiliza `images.logo`.

Los archivos SVG incluidos son **marcadores visuales temporales**, no fotografías ni el logotipo oficial de la empresa.

## 3. Publicar en GitHub Pages

1. Inicia sesión en GitHub y crea un repositorio nuevo, por ejemplo `c-labeling-solutions`.
2. Sube el contenido de esta carpeta al nivel raíz del repositorio. `index.html` debe quedar en la raíz.
3. En el repositorio entra a **Settings → Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`, y guarda.
6. Espera a que GitHub publique el sitio. La dirección aparecerá en la misma sección de Pages.

Cada vez que edites y subas cambios a los archivos, GitHub Pages actualizará la página.

## 4. Antes de publicar

- Reemplaza el correo `info@example.com` y el teléfono de ejemplo.
- Verifica que los servicios e industrias descritos correspondan realmente a C Labeling Solutions.
- Sustituye el logotipo y las imágenes temporales por material autorizado de la empresa.
- Agrega enlaces a redes sociales si se necesitan.
- Revisa el contenido en teléfono y computadora.

## 5. Formulario de contacto

El formulario actual prepara un mensaje usando la aplicación de correo del visitante (`mailto:`). No almacena ni envía información por sí solo. Para recibir formularios directamente desde la página, conecta un proveedor de formularios o implementa un backend y actualiza la función en `js/main.js`.

## 6. Notas técnicas

- No requiere instalación, compilación ni dependencias.
- Es HTML, CSS y JavaScript estándar.
- Los estilos son responsivos y el menú se adapta a pantallas pequeñas.
- Los textos de tarjetas se insertan con escape de HTML para evitar interpretar contenido como marcado.
- Google Fonts se carga desde internet; si prefieres no depender de ese servicio, elimina el `@import` de `css/styles.css` y usa fuentes del sistema.
