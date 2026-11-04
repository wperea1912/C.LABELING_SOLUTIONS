/*
  ==============================================================
  PANEL DE PERSONALIZACIÓN — C LABELING SOLUTIONS
  ==============================================================
  Este es el archivo principal que debes editar para personalizar
  el contenido. Los comentarios explican cada grupo de opciones.

  1. BRAND: nombre, correo, teléfono y ubicación.
  2. COLORS: colores principales en formato HEX.
  3. IMAGES: rutas de las imágenes dentro de assets/images/.
  4. TEXTS: titulares y descripciones.
  5. SOLUTIONS / INDUSTRIES: tarjetas que aparecen en la página.

  CONSEJO: conserva las comillas y las comas para evitar errores.
  ==============================================================
*/
window.SITE_CONFIG = {
  // DATOS GENERALES DE LA EMPRESA
  brand: {
    name: "C Labeling Solutions",
    email: "info@example.com",       // CAMBIAR por el correo oficial
    phoneDisplay: "+52 (000) 000 0000", // CAMBIAR por el teléfono oficial
    phoneLink: "+520000000000",      // Formato internacional sin espacios
    location: "México",              // CAMBIAR por ciudad / país
    whatsapp: "",                    // Número internacional, sin + ni espacios. Ej: 525512345678
    emailSubject: "Solicitud de información desde el sitio web"
  },

  // PALETA DE COLOR — modifica estos valores y se actualiza el sitio
  colors: {
    teal: "#20b2a8",
    tealDark: "#087f7a",
    gold: "#e9ad48",
    ink: "#10283f",
    inkDeep: "#091c2c",
    paper: "#f5f7f6"
  },

  // IMÁGENES — reemplaza los archivos o cambia estas rutas
  images: {
    logo: "assets/images/logo.svg",
    logoWhite: "assets/images/logo-white.svg",
    hero: "assets/images/hero-labeling.svg",
    about: "assets/images/about-labeling.svg"
  },

  // TEXTOS DE PORTADA
  heroEyebrow: "SOLUCIONES DE ETIQUETADO E IDENTIFICACIÓN",
  heroTitle: "La precisión de tu producto comienza con su etiqueta.",
  heroText: "Impulsamos la presentación, identificación y trazabilidad de tus productos con soluciones de etiquetado diseñadas para tu operación.",

  // TEXTOS DE NOSOTROS
  aboutIntro: "Somos un aliado estratégico para empresas que buscan soluciones confiables de etiquetado e identificación.",
  aboutText: "Acompañamos a nuestros clientes en la selección de soluciones que fortalecen la presentación de sus productos y contribuyen a la eficiencia de sus procesos. Escuchamos cada necesidad para proponer opciones prácticas, consistentes y adaptadas a cada operación.",

  // SOLUCIONES — agrega, elimina o modifica tarjetas según tu catálogo real
  // icon puede ser un carácter simple o símbolo. Evita emojis si buscas estética corporativa.
  solutions: [
    { icon: "▤", title: "Etiquetas y materiales", description: "Opciones de materiales, adhesivos y acabados que se adaptan a las características de cada producto." },
    { icon: "▣", title: "Identificación de productos", description: "Soluciones para identificar productos, organizar información y facilitar su seguimiento." },
    { icon: "⌁", title: "Impresión y codificación", description: "Alternativas para integrar información variable, códigos y datos relevantes en tus productos." },
    { icon: "◈", title: "Etiquetado especializado", description: "Propuestas para necesidades particulares de aplicación, presentación y desempeño." },
    { icon: "◎", title: "Asesoría técnica", description: "Acompañamiento para evaluar requerimientos y seleccionar la solución más conveniente." },
    { icon: "↗", title: "Proyectos a la medida", description: "Desarrollo de propuestas que responden a las especificaciones de tu operación." }
  ],

  // INDUSTRIAS — confirma y adapta estos sectores a los mercados de la empresa
  industries: [
    { icon: "▦", title: "Alimentos y bebidas", description: "Etiquetado para productos y presentaciones de consumo." },
    { icon: "✚", title: "Farmacéutica y salud", description: "Identificación clara para productos y empaques especializados." },
    { icon: "⚙", title: "Manufactura", description: "Identificación de componentes, productos y procesos." },
    { icon: "▱", title: "Logística y retail", description: "Etiquetas para distribución, inventario y punto de venta." }
  ]
};
