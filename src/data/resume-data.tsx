import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Alkush Pipania",
  initials: "BJ",
  location: "Ghaziabad, India",
  locationLink: "https://maps.app.goo.gl/nF9TYTKPUnoTQSba9",
  about:
    "Full Stack Engineer and aspiring DevOps Engineer focused on learning through experimentation and product development.",
  summary:
    "As a third-year Computer Science student specializing in AI and Machine Learning at RKGIT (Raj Kumar Goel Institute of Technology), I have a strong foundation in software development and a passion for building dynamic web applications. My work primarily involves TypeScript, React, and Node.js, and I enjoy the creative process of development from start to finish.",
  avatarUrl: "https://firebasestorage.googleapis.com/v0/b/my-new-app-888e3.appspot.com/o/1.jpg?alt=media&token=315d43e7-0968-4a55-af9a-e48994fe84eb",

  contact: {
    email: "Workofalkushpipania@gmail.com",
    // tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Alkush-Pipania",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alkush-pipania-49269929b/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/logic_l00m",
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
    "Drizzle",
    "DataStructures/Algorithms",
    "Touch Typing -> 100wpm"
  ],
  projects: [
    {
      title: "Carter",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Prisma",
        "Aiven",
        "Shadcn",

      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://carter-three.vercel.app/",
      },
    },
    {
      title: "Nex-Linker",
      techStack: ["Side Project", "React.js", "firebase", "Framer Motion"],
      description:
        "A platform to build Resume and made resume template for user's ",
      logo: MonitoLogo,
      link: {
        label: "nex-linker.vercel.app",
        href: "https://nex-linker.vercel.app/",
      },
    },
    {
      title: "Banking Transaction Backend",
      techStack: ["Side Project", "Node.js", "Express","Prisma"],
      description:
        "Realtime , Banking Trasaction",
     
      link: {
        label: "github.com",
       
      },
    },
    {
      title: "Haveli",
      techStack: ["First react project", "firebase", "framer motion","tailwind css"],
      description:
        "Real esstate platform , to buy and sell property",
        logo: MonitoLogo,
     
      link: {
        label: "github.com",
        href: "https://haveli-366o.vercel.app/",
       
      },
    },
    
  ],
} as const;