/*
  CONFIGURACIÓN DEL SITIO — C LABELING SOLUTIONS
  ------------------------------------------------
  Este es el archivo principal para personalizar textos, datos, imágenes y colores.
  No necesitas modificar main.js para cambiar el contenido habitual.

  COLORES: edita los códigos HEX de "colors".
  IMÁGENES: reemplaza los archivos en assets/images/ conservando sus nombres,
  o cambia las rutas indicadas en "images".
  CONTACTO: sustituye correo, teléfono, ubicación y redes con datos reales.
  CONTENIDO: modifica los textos, soluciones e industrias de este archivo.
*/

window.SITE_CONFIG = {
  companyName: "C Labeling Solutions",

  // PALETA DEL SITIO — también puedes editar estos valores en css/styles.css
  colors: {
    primary: "#18a6a0",
    primaryDark: "#087d7b",
    secondary: "#f2a900",
    navy: "#10283f",
    navyDeep: "#0a1c2c",
    text: "#263746",
    light: "#f4f7f8"
  },

  // TEXTOS PRINCIPALES
  heroEyebrow: "IDENTIFICACIÓN • ETIQUETADO • SOLUCIONES",
  heroTitle: "Etiquetado inteligente para impulsar tu negocio.",
  heroText: "Soluciones confiables de etiquetado e identificación que ayudan a tus productos a destacar, cumplir y llegar más lejos.",
  aboutText: "En C Labeling Solutions trabajamos para simplificar los retos de identificación y etiquetado de nuestros clientes. Combinamos atención cercana, conocimiento técnico y soluciones adaptables a cada operación.",

  // DATOS DE CONTACTO — reemplaza los ejemplos antes de publicar
  contact: {
    email: "info@example.com",
    phoneDisplay: "Agrega tu teléfono",
    phoneLink: "+0000000000",
    location: "México"
  },

  // RUTAS DE IMÁGENES — utiliza archivos propios con permiso de uso
  images: {
    logo: "assets/images/logo.svg",
    hero: "assets/images/hero-placeholder.svg",
    about: "assets/images/about-placeholder.svg"
  },

  // TARJETAS DE SOLUCIONES — edita, elimina o duplica objetos
  solutions: [
    { icon: "▤", title: "Etiquetas y materiales", description: "Opciones de etiquetas y materiales adaptadas a las características de tus productos y procesos." },
    { icon: "▣", title: "Identificación de productos", description: "Recursos para identificar, organizar y dar seguimiento a tus productos de forma clara." },
    { icon: "⌁", title: "Impresión y codificación", description: "Alternativas para integrar información variable, códigos y datos de producto." },
    { icon: "◎", title: "Asesoría especializada", description: "Acompañamiento para definir especificaciones y seleccionar la solución adecuada." },
    { icon: "◇", title: "Optimización de procesos", description: "Revisión de necesidades para mejorar consistencia, eficiencia y presentación." },
    { icon: "↗", title: "Proyectos personalizados", description: "Soluciones desarrolladas a partir de los requerimientos particulares de cada cliente." }
  ],

  // INDUSTRIAS — ajusta a los sectores que realmente atiende tu empresa
  industries: [
    { icon: "▦", title: "Alimentos y bebidas", description: "Identificación y presentación de productos." },
    { icon: "✚", title: "Farmacéutica y salud", description: "Información clara y trazabilidad." },
    { icon: "⚙", title: "Manufactura", description: "Control e identificación en procesos." },
    { icon: "▱", title: "Logística y retail", description: "Etiquetado para almacenamiento y distribución." }
  ]
};
