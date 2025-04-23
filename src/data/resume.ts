import { Github, Linkedin, XIcon } from "lucide-react";


export const RESUME_DATA = {
  name: "Alkush Pipania",
  initials: "Alkush",
  location: "Ghaziabad, India",
  locationLink: "https://maps.app.goo.gl/nF9TYTKPUnoTQSba9",
  resumelink: "https://firebasestorage.googleapis.com/v0/b/resume-builder-2024-3d12f.appspot.com/o/carter%2Falkushcv.pdf?alt=media&token=3cff9092-8e5b-404e-bca1-1ac43baa479c",
  about:
    "Full Stack web Gen ai developer ",
  summary:
    "As a third-year Computer Science student specializing in AI and Machine Learning at RKGIT (Raj Kumar Goel Institute of Technology), I have a strong foundation in software development and a passion for building dynamic web applications. My work primarily involves TypeScript, React, and Node.js, and I enjoy the creative process of development from start to finish.",
  avatarUrl: "https://firebasestorage.googleapis.com/v0/b/my-new-app-888e3.appspot.com/o/aizen1.jpg?alt=media&token=b8700785-acd8-443a-ab32-e7149f3ba825",
  contact: {
    email: "Workofalkushpipania@gmail.com",
    // tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Alkush-Pipania",
        icon: Github,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alkush-pipania-49269929b/",
        icon: Linkedin,
      },
      {
        name: "X",
        url: "https://x.com/alkushx",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Raj Kumar Goel Institute of Technology",
      degree: "Bachelor's Degree in Artificial Intelligence & Machine Learning",
      start: "2022",
      end: "2026",
    },
  ],
  work: [

  ],
  skills: [
    "TypeScript",
    "React/Next.js",
    "Node.js/Express.js",
    "Hono",
    "Prisma",
    "langchain js",
    "Python",
    "Touch Typing -> 100wpm"
  ],
  projects: [
    {
      title: "Carter",
      techStack: [
        "Next.js",
        "TypeScript",
        "RAG",
        "langchain",
        "Anthrophic",
        "vector db",
        "embeddings",
        "Prisma",
        "Aiven",
        "chrome extension"
      ],
      description: "A platform to SAVE AND SHARE LINKS , PDF , OTHER DOCUMENT",
      logo: "",
      link: {
        label: "carter.fun",
        href: "https://www.carter.fun/",
      },
    },
    {
      title: "GOOG prompt ai",
      techStack: [
        "Next.js",
        "TypeScript",
        "langchain js",
        "gemini embedding model",
        "upstash vector",
        "Prisma",
        "neon db",
        "Shadcn",
        "context-full chats conversation"
      ],
      description: "goog provide chatgbt like interface . to build prompts which is context-full and the prompt is well defined and easily to understandable",
      logo: "",
      link: {
        label: "goog-sage.vercel.app/",
        href: "https://goog-sage.vercel.app/",
      },
    },
    {
      title: "Website Builder",
      techStack: [
        "React",
        "Node.js",
        "Web Container",
        "Antrophic Api",
        "Tailwind CSS"
      ],
      description: "Only need Prompt to build website with file structure and live preview",
      logo: "",
      link: {
        label: "github.com/Alkush-Pipania/G1",
        href: "https://github.com/Alkush-Pipania/G1",
      },
    },
    {
      title: "FairFi",
      techStack: [
        "Next.js",
        "TypeScript",
        "Clerk",
        "neon db",
        "Shadcn",
        "Stripe"
      ],
      description: "Aadaptive pricing based on country-specific purchasing power parity (PPP)",
      logo: "",
      link: {
        label: "github.com/Alkush-Pipania/FairFi",
        href: "https://github.com/Alkush-Pipania/FairFi",
      },
    },
    {
      title: "AI RAG Domain Generator",
      techStack: [
        "LangChain.js",
        "Node.js",
        "Gemini",
        "RAG",
        "Vector Search",
        "PDF Processing"
      ],
      description: "Users provide a detailed prompt of their business. An array of domain name suggestions is generated. Uses RAG PDF for vector search to provide the best domain name suggestions.",
      logo: "",
      link: {
        label: "github.com/ai-rag",
        href: "https://github.com/ai-rag",
      },
    },
    {
      title: "Real Estate Place - Haveli",
      techStack: [
        "React.js",
        "Firebase",
        "Tailwind CSS",
        "Authentication",
        "Cloud Storage"
      ],
      description: "Create compelling listings, detailing property types, precise locations, amenities, and pricing.",
      logo: "",
      link: {
        label: "haveli-366o.vercel.app",
        href: "https://haveli-366o.vercel.app/",
      },
    },
    {
      title: "Nex-Linker",
      techStack: [
        "React.js",
        "Firebase",
        "Framer Motion",
        "PDF Generation"
      ],
      description:
        "A platform to build Resume and made resume template for user's ",
      logo: "",
      link: {
        label: "nex-linker.vercel.app",
        href: "https://nex-linker.vercel.app/",
      },
    }
  ],
};
