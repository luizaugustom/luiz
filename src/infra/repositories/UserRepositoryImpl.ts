import { User, Technology, Project } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";

export class UserRepositoryImpl implements UserRepository {
  async getUser(): Promise<User> {
    return {
      name: "Luiz Augusto Monteiro",
      photoUrl: "https://github.com/luizaugustom.png",
      description: "Eae Bro!🤙🏼 Welcome to my portfolio! I'm Luiz and I'm 22 years old!, a software engineer passionate about technology and innovation. Here you'll find my projects, skills, and contact information. Feel free to explore and learn more about my work!",
      technologies: [
        { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Node.Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "React.Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Nest.js", icon: "https://nestjs.com/img/logo-small.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "N8N", icon: "https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png" },
      ],
      email: "luizlamdv@gmail.com",
      phone: "(48)998482590",
      linkedin: "https://www.linkedin.com/in/luiz-augusto-monteiro-528385292/",
      github: "https://github.com/luizaugustom",
      projects: [],
      extraText: "I am currently a developer at Laev Software Desenvolvimento and I am also a member of the Rockeseat community, the largest developer community in Latin America.",
    };
  }
}
