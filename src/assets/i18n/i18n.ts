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
    contact: {
      subtitle: "¿Te gusta lo que ves?",
      title: "Contacta conmigo",
      message:
        "Ponte en contacto conmigo a través de de mi dirección de email o mándame un mensaje vía la red social de LinkedIn.",
      copyButton: "¡Copiado!",
      locationTitle: "Ubicación",
      locationCountry: "España",
      locationSubtext: "Disponible para trabajo remoto o reubicación.",
      availabilityTitle: "Disponibilidad",
      availabilityHours: "Disponible",
      availabilitySubtext: "Respondo mensajes en 24 - 48 horas.",
      formTitle: "Envíame un correo",
      formSubject: "Asunto",
      formMessage: "Mensaje",
      formAreaPlaceholder: "Escribe aquí tu mensaje...",
      formButton: "Enviar correo",
    },
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
    contact: {
      subtitle: "¿Like what you see?",
      title: "Get in touch",
      message:
        "Contact me through my email address or send me a message through LikedIn social media.",
      copyButton: "Copied!",
      locationTitle: "Location",
      locationCountry: "Spain",
      locationSubtext: "Available for remote work or relocation.",
      availabilityTitle: "Availability",
      availabilityHours: "Available",
      availabilitySubtext: "I reply to messages in 24 - 48 hours.",
      formTitle: "Send me a message",
      formSubject: "Subject",
      formMessage: "Message",
      formAreaPlaceholder: "Write here your message...",
      formButton: "Send email",
    },
  },
} as const;

export type Lang = keyof typeof translations;
