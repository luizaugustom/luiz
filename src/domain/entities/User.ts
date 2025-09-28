export interface User {
  name: string;
  photoUrl: string;
  description: string;
  technologies: Technology[];
  email: string;
  phone: string;
  linkedin?: string;
  github?: string;
  projects?: Project[];
  extraText?: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  name: string;
  url: string;
}
