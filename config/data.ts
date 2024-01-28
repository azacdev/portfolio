import IMG1 from "@/public/oryon.webp";
import IMG2 from "@/public/oryon-admin.png";
import IMG3 from "@/public/shompts.png";
import IMG4 from "@/public/el-bako.png";

export const projectsData = [
  {
    id: 1,
    src: IMG1,
    title: "Oryon",
    description:
      "Redefining online shopping with a state-of-the-art platform. We use the latest technologies to create a seamless and enjoyable experience. Our innovative approach ensures your shopping journey is smooth and secure, providing you with a modern and stylish e-commerce destination.",
    tools:
      "NextJS, App-Router, TypeScript, Zustand, Zod, Shadcn, Tailwind, Paystack, Git",
    github: "https://github.com/azacdev/oryon.git",
    demo: "https://oryon.vercel.app/",
  },
  {
    id: 2,
    src: IMG2,
    title: "Oryon Admin",
    description:
      "Experience a sophisticated full-stack e-commerce admin dashboard, where you can effortlessly view and manage orders, handle products, gain insights with an overview, and seamlessly integrate Paystack for secure payments.",
    tools:
      "NextJS, Next-API-Route, App-Router, Typescript, Tailwind CSS, Prisma, Planet Scale, Shadcn UI, Zod, Clerk Auth, Paystack, Next Cloudinary",
    github: "https://github.com/azacdev/oryon-admin.git",
    demo: "https://oryon-admin.vercel.app/",
  },
  {
    id: 3,
    src: IMG3,
    title: "Shompts",
    description:
      "An AI prompting tool for modern world to discover, create and share creative prompts.",
    tools: "Next JS, Tailwind CSS, App-Router, Next Auth, MongoDB, Git",
    github: "https://github.com/azacdev/shompts.git",
    demo: "https://shompts.vercel.app/",
  },
  {
    id: 4,
    src: IMG4,
    title: "El-Bako",
    description:
      "El-Bako Clothing, a premier luxury brand with a prominent presence in Northern Nigeria.",
    tools: "NextJS, TypeScript, Tailwind CSS, React-Slick, Git",
    github: "https://github.com/azacdev/el-bako",
    demo: "https://el-bako.vercel.app",
  },
];
