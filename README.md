# C Labeling Solutions — Sitio web

Plantilla corporativa estática desarrollada con **HTML5, CSS3 y JavaScript**. Está preparada para publicarse con GitHub Pages.

## 1. Estructura de carpetas

```text
c-labeling-solutions/
├── index.html
├── README.md
├── .nojekyll
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    ├── images/
    │   ├── about-industrial.jpg   (agrega tu fotografía)
    │   ├── hero-maquinaria.jpg    (opcional: foto principal)
    │   └── README.txt
    └── documents/
        └── README.txt
```

## 2. Cómo personalizar

1. Abre `index.html` para modificar textos, títulos, enlaces y secciones.
2. Abre `assets/css/styles.css` para cambiar colores, tipografías, tamaños y diseño.
3. Abre `assets/js/main.js` para modificar el menú, el formulario y otras interacciones.
4. Coloca fotografías propias en `assets/images/`.
5. Cambia el correo `contacto@clabelingsolutions.com` por el correo real en `index.html` y `assets/js/main.js`.
6. Actualiza ubicación, horario, teléfonos, redes sociales, marcas, modelos y fichas técnicas antes de publicar.

## 3. Colocar fotografías

- Guarda la imagen de la sección Nosotros como `assets/images/about-industrial.jpg`.
- Para la portada, puedes modificar el diseño CSS de `.hero-visual` y usar `hero-maquinaria.jpg`.
- Se recomiendan fotografías propias o con licencia de uso. No uses imágenes de marcas sin autorización.

## 4. Publicar en GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo `c-labeling-solutions`.
2. Sube **todo el contenido** de esta carpeta al directorio raíz del repositorio.
3. En GitHub abre **Settings → Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`, y guarda.
6. Espera a que GitHub Pages publique el sitio. La URL aparecerá en esa misma sección.

## 5. Sobre el formulario

La versión inicial usa `mailto:` y abre el programa de correo del visitante. No guarda formularios en un servidor. Para recibir solicitudes sin depender del correo instalado, conecta un servicio de formularios o desarrolla un backend.

## 6. Nota técnica

Para GitHub Pages no necesitas Java. La plantilla usa JavaScript (que es distinto de Java), HTML y CSS. Esto permite alojar el sitio como página estática sin servidor adicional.
