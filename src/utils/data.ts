import taskforgeImg from "../assets/projects/taskforge.png";
import schemesnapImg from "../assets/projects/schemesnap.png";

export const TEAM_MEMBERS = [
  {
    name: "KANDHAL SHAKIL",
    role: "Full Stack Developer",
    skills: ["Python", "Django", "Rest API", "React", "PostgreSQL", "MongoDB", "Docker"],
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kandhal",
  },
  {
    name: "HET PATEL",
    role: "Full Stack Developer",
    skills: ["React", "Python", "Vercel", "Cursor", "Render", "REST APIs", "UI/UX Design"],
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Het",
  },
];

export const STATS = [
  { label: "Projects Completed", value: "2" },
  { label: "Technologies Used", value: "10+" },
  { label: "Happy Clients", value: "0" },
  { label: "Years Experience", value: "1" },
];

export const SERVICES = [
  {
    title: "Full Stack Web Development",
    description: "End-to-end web applications built with Python, Django, and React.",
    icon: "Layout",
  },
  {
    title: "SaaS Development",
    description: "Specialized in building scalable platforms with robust billing and user management.",
    icon: "Cloud",
  },
  {
    title: "API Development",
    description: "High-performance RESTful APIs designed for security and speed using Django Rest Framework.",
    icon: "Server",
  },
  {
    title: "Dashboard Systems",
    description: "Data-driven administrative panels with real-time analytics and intuitive visualizations.",
    icon: "BarChart3",
  },
  {
    title: "Deployment & Hosting",
    description: "Cloud infrastructure setup on Vercel, Render, and Dockerized environments.",
    icon: "Globe",
  },
];

export const PORTFOLIO = [
  {
    id: 1,
    title: "TaskForge",
    description: "A professional-grade project management platform for engineering teams featuring isolated company workspaces and role-based access control.",
    tech: ["React", "Python", "Django", "PostgreSQL", "Docker"],
    image: taskforgeImg,
    github: "https://github.com/KandhalShakil/TaskForge",
    demo: "https://www.task-forge.kandhal.tech/",
  },
  {
    id: 2,
    title: "SchemeSnap AI",
    description: "AI-powered government scheme navigator that leverages LLMs to parse complex documentation and provide instant eligibility analysis.",
    tech: ["Next.js", "AI/LLM", "Python", "Django", "MongoDB"],
    image: schemesnapImg,
    github: "#",
    demo: "https://www.schemesnap-ai.kandhal.tech",
  },
];

export const TECH_STACK = [
  "Python", "Django", "Rest API", "React", "MongoDB", 
  "PostgreSQL", "Docker", "Vercel", "Cursor", "Render"
];

export const WHY_CHOOSE_US = [
  {
    title: "Clean Scalable Code",
    description: "We follow industry best practices to ensure your codebase grows with your business.",
  },
  {
    title: "Fast Communication",
    description: "Transparency is key. We keep you updated at every stage of the development cycle.",
  },
  {
    title: "Secure Backend Systems",
    description: "Security is baked in from day one, protecting your data and your users.",
  },
  {
    title: "Modern Workflow",
    description: "Using AI-powered tools like Cursor to accelerate development speed.",
  },
];


export const CONTACT_INFO = {
  emails: ["kandhalshakil@gmail.com", "hetp40440@gmail.com"],
  phones: ["+91 97258 45511", "+91 76004 99896"],
  address: "Gujarat, India",
};
