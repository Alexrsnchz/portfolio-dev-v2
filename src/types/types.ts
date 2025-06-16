export interface LangProps {
  lang: "es" | "en";
  t: {
    experience: {
      sectionTitle: string;
    };
    projects: {
      sectionTitle: string;
    };
  };
}

export interface ExperienceProps {
  startDate: string;
  endDate: string;
  position: string;
  company: string;
  tasks: string[];
}

export interface ProjectProps {
  image: string;
  title: string;
  description: string;
  stack: string[];
  sourceCode: string;
  preview: string;
  finished: boolean;
  reverse?: boolean;
}
