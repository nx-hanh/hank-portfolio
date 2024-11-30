declare type Project = {
  _id: string;
  name: string;
  description: string;
  technologies: string[];
  type: string;
  image: string;
  images: string[];
  core: {
    frontEnd: string;
    backEnd: string;
    database: string;
  };
  base: string[];
  link: {
    github: string;
    deploy?: string;
    design?: string;
    docs?: string;
  };
  platform: string;
  features: string[];
};

declare type Profile = {
  name: string;
  date_of_birth: string; // format: YYYY-MM-DD
  nationality: string;
  contact: {
    phone: string;
    email: string;
  };
  portfolio: string;
  cv: string;
  social: {
    github: string;
    linkedin: string;
    facebook: string;
  };
  current_learning: {
    profession: string;
    proficiency: string;
    additional_languages: string[];
  };
  career: {
    study: {
      title: string;
      company: string;
      position: string;
      responsibilities: string[];
      date: string; // format: YYYY - YYYY
      logo: string;
    };
  };
  projects: Project[];
};
