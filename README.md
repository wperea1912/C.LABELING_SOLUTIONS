# C Labeling Solutions — plantilla web editable

Plantilla corporativa estática con diseño responsive, navegación por secciones, tarjetas editables, formulario de contacto y gráficos de muestra. Lista para abrir localmente y publicar en GitHub Pages.

## Vista previa local

1. Descarga y descomprime el ZIP.
2. Abre `index.html` en Chrome, Edge o Firefox.
3. Para una vista previa más fiable, abre la carpeta en Visual Studio Code y utiliza la extensión **Live Server**.

No requiere Node.js, instalación ni compilación. La página funciona con HTML, CSS y JavaScript estándar.

## Personalización en 5 minutos

Abre `js/config.js`. Desde ahí puedes editar:
- Nombre, correo, teléfono, ubicación y WhatsApp.
- Colores corporativos.
- Imagen del encabezado y de Nosotros.
- Titulares y descripciones.
- Servicios y sectores que aparecen como tarjetas.

Para cambios visuales más profundos, abre `css/styles.css`. Las variables de color, tipografías, ancho y espaciados están al principio del archivo.

## Estructura

```text
c_labeling_solutions_web/
├── index.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   ├── config.js
│   └── main.js
└── assets/
    ├── images/
    │   ├── logo.svg
    │   ├── logo-white.svg
    │   ├── favicon.svg
    │   ├── hero-labeling.svg
    │   ├── about-labeling.svg
    │   └── quality-pattern.svg
    └── icons/
```

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube todos los archivos y carpetas a la raíz del repositorio (debe quedar `index.html` en la raíz).
3. Abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`.
6. Guarda. GitHub mostrará la URL pública cuando termine el despliegue.

## Antes de hacer pública la página

Este diseño está desarrollado como una propuesta visual cercana a un sitio corporativo terminado. Hay datos de ejemplo que debes confirmar:
- Cambia `info@example.com`, teléfono y ubicación.
- Confirma que los servicios e industrias descritos correspondan a la empresa.
- Reemplaza el logotipo de muestra por el logotipo oficial.
- Sustituye los gráficos temporales por fotografías reales de productos, materiales, maquinaria y aplicaciones.
- Añade aviso de privacidad y textos legales que correspondan.

## Formulario

El formulario prepara un correo mediante `mailto:`; no guarda ni envía información a una base de datos. Para recibir solicitudes directamente en la web, se debe conectar un servicio de formularios o backend.

## Importante sobre el contenido

Los textos de servicios e industrias son contenido inicial editable y deben validarse con la empresa antes de publicar. No se han inventado certificaciones, clientes, cifras, direcciones ni promesas de cumplimiento.
