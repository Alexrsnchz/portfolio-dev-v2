export const translations = {
  es: {
    nav: {
      experienceLink: "Experiencia",
      projectsLink: "Proyectos",
      stackLink: "Habilidades",
      certificationsLink: "Certificaciones",
      contactLink: "Contacto",
    },
    hero: {
      subtitle: "Hola, soy Alex",
      title: "Desarrollador Web Full Stack",
      introduction:
        "Creo aplicaciones web funcionales enfocadas en el rendimiento, la estética y la eficiencia, manteniendo un código limpio y fácil de mantener.",
      cvButton: "Mi Currículum",
      projectsButton: "Ver Proyectos",
    },
    experience: {
      sectionTitle: "Experiencia",
    },
    projects: {
      sectionTitle: "Proyectos",
      finished: "En desarrollo...",
      codeButton: "Código Fuente",
      previewButton: "Vista Previa",
    },
    stack: {
      sectionTitle: "Habilidades",
      frontendCardTitle: "Desarrollo Frontend",
      backendCardTitle: "Desarrollo Backend",
      databaseCardTitle: "Gestión Base de Datos",
      cloudCardTitle: "Cloud y DevOps",
      securityCardTitle: "Seguridad y Testeo",
      toolsCardTitle: "Herramientas",
    },
    contact: {},
  },
  en: {
    nav: {
      experienceLink: "Experience",
      projectsLink: "Projects",
      stackLink: "Stack",
      certificationsLink: "Certifications",
      contactLink: "Contact",
    },
    hero: {
      subtitle: "Hi, I'm Alex",
      title: "Full Stack Web Developer",
      introduction:
        "I create functional web applications focused in performance, aesthetics, and efficiency, keeping the code clean and easy to maintain.",
      cvButton: "My Resume",
      projectsButton: "View Projects",
    },
    experience: {
      sectionTitle: "Experience",
    },
    projects: {
      sectionTitle: "Projects",
      finished: "Under development...",
      codeButton: "Source Code",
      previewButton: "Preview",
    },
    stack: {
      sectionTitle: "Tech Stack",
      frontendCardTitle: "Frontend Development",
      backendCardTitle: "Backend Development",
      databaseCardTitle: "Database Management",
      cloudCardTitle: "Cloud & DevOps",
      securityCardTitle: "Security & Testing",
      toolsCardTitle: "Developer Tools",
    },
    contact: {},
  },
} as const;

export type Lang = keyof typeof translations;
