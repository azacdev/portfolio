import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { SiHtml5, SiCss3, SiBootstrap, SiReact, SiTypescript, SiRedux, SiTailwindcss, SiMui, SiNextdotjs, SiReactquery, SiExpress, SiMongodb, SiFirebase, SiNodedotjs, SiGit, SiJavascript } from "react-icons/si";

import IMG1 from "@public/orion-anime.png";
import IMG2 from "@public/shompts.png";
import IMG3 from "@public/gadgets-dome.png";
import IMG4 from "@public/vega-chat.png";

export const socials = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  {
    name: "Twitter",
    icon: FaTwitter,
  },
];

export const skills = [
  {
    skill_name: "HTML",
    icon: SiHtml5,
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    icon: SiCss3,
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    icon: SiJavascript,
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind",
    icon: SiTailwindcss,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Bootstrap",
    icon: SiBootstrap,
    width: 80,
    height: 80,
  },
  {
    skill_name: "MUI",
    icon: SiMui,
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    icon: SiReact,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    icon: SiRedux,
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    icon: SiReactquery,
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    icon: SiTypescript,
    width: 80,
    height: 80,
  },
  {
    skill_name: "NextJS",
    icon: SiNextdotjs,
    width: 80,
    height: 80,
  },
  {
    skill_name: "NodeJS",
    icon: SiNodedotjs,
    width: 80,
    height: 80,
  },
  {
    skill_name: "ExpressJS",
    icon: SiExpress,
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    icon: SiMongodb,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    icon: SiFirebase,
    width: 55,
    height: 55,
  },
  {
    skill_name: "Git",
    icon: SiGit,
    width: 55,
    height: 55,
  },
];

export const projectsData = [
  {
    id: 1,
    src: IMG1,
    title: "Orion Anime",
    description:
      "An Anime Website project that allows users to explore and discover various anime shows and movies.",
    tools: "React, Redux, React-Router, React-Player, RTK Query, Tailwind, Git",
    github: "https://github.com/azacdev/orion-anime",
    demo: "https://orion-anime.vercel.app/",
  },
  {
    id: 2,
    src: IMG2,
    title: "Shompts",
    description:
      "An AI prompting tool for modern world to discover, create and share creative prompts.",
    tools: "Next JS, Tailwind CSS, App-Router, Next Auth, MongoDB, Git",
    github: "https://github.com/azacdev/shompts.git",
    demo: "https://shompts.vercel.app/",
  },
  {
    id: 3,
    src: IMG3,
    title: "Gadgets Dome",
    description:
      "An e-commerce site that offers a variety of gadgets such as laptops, smartphones, graphics cards, and keyboards.",
    tools: "React, Tailwind CSS, React-Router, Context API, Daisy UI, Git",
    github: "https://github.com/azacdev/gadgets-dome.git",
    demo: "https://gadgets-dome.vercel.app",
  },
  {
    id: 4,
    src: IMG4,
    title: "Vega Chat",
    description:
      "A real-time chat that allows users to authenticate with their Google account and participate in live chat conversations.",
    tools:
      "React, Firebase Tailwind CSS, React-Router, Context API, Daisy UI, Git",
    github: "https://github.com/azacdev/vega-chat.git",
    demo: "https://vega-chat.vercel.app/",
  },
];
