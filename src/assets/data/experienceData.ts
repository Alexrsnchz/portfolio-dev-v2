import type { ExperienceProps } from "../../types/types.ts";

const experience: Record<"es" | "en", ExperienceProps[]> = {
  es: [
    {
      startDate: "14/05/2025",
      endDate: "Actualidad",
      position: "Técnico en Marketing Digital",
      company: "Magical Analytics",
      tasks: [
        "Gestiono y edito campañas de marketing, emails, formularios y landing pages utilizando el CRM de HubSpot.",
        "Modifico workflows automatizados para optimizar procesos de comunicación, nutrir leads, y mejorar las tasas de conversión.",
      ],
    },
    {
      startDate: "12/03/2024",
      endDate: "18/06/2024",
      position: "Desarrollador Full Stack",
      company: "Ruano Informática",
      tasks: [
        "Desarrollé una aplicación web interna para la empresa que facilitó la gestión de usuarios, cursos y diplomas de las formaciones que ofrecen, así como la expedición de los mismos.",
        "Implementé tests automatizados con Jest, acortando el tiempo de resolución de errores y mejorando la estabilidad del código.",
      ],
    },
  ],
  en: [
    {
      startDate: "05/14/2025",
      endDate: "Present",
      position: "Digital Marketing Technician",
      company: "Magical Analytics",
      tasks: [
        "I manage and edit marketing campaigns, emails, forms, and landing pages using the HubSpot CRM.",
        "I modify automated workflows to optimize communication processes, nurture leads, and improve conversion rates.",
      ],
    },
    {
      startDate: "03/12/2024",
      endDate: "06/18/2024",
      position: "Full Stack Developer",
      company: "Ruano Informática",
      tasks: [
        "I developed an internal web application for the company to manage users, courses, and training diplomas, as well as their issuance.",
        "I implemented automated tests using Jest, reducing bug resolution time and improving code stability.",
      ],
    },
  ],
};

export default experience;
