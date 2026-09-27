export type ProjectCategory = "MERN" | "Data Science" | "AI";

export interface Project {
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Blood Donation Portal",
    category: "MERN",
    description:
      "A web application for managing blood donors and donation-related information with authentication, database operations and email notifications.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Jamsheer4581/blood-donation-portal",
    live: "",
    featured: true,
  },
  {
    title: "Attendance Management App",
    category: "MERN",
    description:
      "A teacher attendance management application for selecting classes, viewing students and recording attendance through REST APIs.",
    technologies: ["React Native", "Expo", "Redux", "REST API"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "OneTabPost",
    category: "MERN",
    description:
      "A unified social media management concept designed to manage, schedule and automate social media content from a single platform.",
    technologies: ["Next.js", "React", "Tailwind CSS", "APIs"],
    github: "https://github.com/karthihub/SocialMediaAutomation",
    live: "https://onetabpost.com/",
    featured: true,
  },
  {
    title: "Reception Display",
    category: "MERN",
    description:
      "A unified social media management concept designed to manage, schedule and automate social media content from a single platform.",
    technologies: ["Next.js", "React", "Tailwind CSS", "APIs"],
    github: "https://github.com/Jamsheer4581/Reception_Display",
    live: "",
    featured: true,
  },
  {
    title: "Super Market Sales Analysis",
    category: "Data Science",
    description:
      "A sales data analysis project using Excel and SQL to analyze sales, profit, products, customers and business performance.",
    technologies: ["Python", "Excel", "SQL", "Data Analysis"],
    github: "#",
    live: "#",
    featured: true,
  },
];
