import IMG1 from "@/public/talents-sphere.webp";
import IMG2 from "@/public/oryon.webp";
import IMG3 from "@/public/oryon-admin.webp";
import IMG4 from "@/public/shompts.png";
import IMG5 from "@/public/luminix.webp";
import IMG6 from "@/public/ay-adado.webp";
import IMG7 from "@/public/el-bako.png";
import IMG8 from "@/public/sovereign-air.webp";

export const projectsData = [
  {
    id: 1,
    src: IMG1,
    title: "Talents Sphere Africa",
    description:
      "I participated in engineering and optimizing authentication systems for Talent Sphere Africa, significantly enhancing user experience throughout account creation, form submissions, and platform interactions. Additionally, I transformed Figma designs into responsive interfaces using modern web technologies, amplifying user engagement and fostering seamless connections across diverse African regions.",
    tools: "Undisclosed",
    github: "https://github.com/azacdev/talents-sphere.git",
    demo: "https://talentsphereafrica.com/",
  },
  {
    id: 2,
    src: IMG2,
    title: "Oryon",
    description:
      "Redefining online shopping with a state-of-the-art platform. We use the latest technologies to create a seamless and enjoyable experience. Our innovative approach ensures your shopping journey is smooth and secure, providing you with a modern and stylish e-commerce destination.",
    tools:
      "NextJS, App-Router, TypeScript, Zustand, Zod, Shadcn, Tailwind, Paystack, Git",
    github: "https://github.com/azacdev/oryon.git",
    demo: "https://oryon.vercel.app/",
  },
  {
    id: 3,
    src: IMG3,
    title: "Oryon Admin",
    description:
      "Experience a sophisticated full-stack e-commerce admin dashboard, where you can effortlessly view and manage orders, handle products, gain insights with an overview, and seamlessly integrate Paystack for secure payments.",
    tools:
      "NextJS, Next-API-Route, App-Router, Typescript, Tailwind CSS, Prisma, Planet Scale, Shadcn UI, Zod, Clerk Auth, Paystack, Next Cloudinary",
    github: "https://github.com/azacdev/oryon-admin.git",
    demo: "https://oryon-admin.vercel.app/",
  },
  {
    id: 4,
    src: IMG4,
    title: "Shompts",
    description:
      "An AI prompting tool for modern world to discover, create and share creative prompts.",
    tools:
      "Next JS, Tailwind CSS, App-Router, Framer Motion Next Auth, MongoDB, Git",
    github: "https://github.com/azacdev/shompts.git",
    demo: "https://shompts.vercel.app/",
  },
  {
    id: 5,
    src: IMG5,
    title: "Luminix",
    description:
      "Luminix, a beacon of digital innovation, is your gateway to exceptional online experiences. As a cutting-edge digital marketing agency, we specialize in creating captivating websites, dynamic web applications, and striking graphics that redefine the digital landscape. ",
    tools: "Next JS, TypeScript, Framer-Motion, Tailwind CSS, Git",
    github: "https://github.com/azacdev/luminix",
    demo: "https://Luminix.vercel.app",
  },
  {
    id: 6,
    src: IMG6,
    title: "AY Adado Estate",
    description:
      "Discover unparalleled elegance and unmatched living at AY Adado Real Estate. Our commitment to luxury, integrity, and personalized service sets us apart in the world of real estate. Embrace a life of opulence with Luminix.",
    tools: "Next JS, TypeScript, Framer-Motion, Tailwind CSS, Git",
    github: "https://github.com/azacdev/ay-adado.git",
    demo: "https://ay-adado.vercel.app",
  },
  {
    id: 7,
    src: IMG7,
    title: "El-Bako",
    description:
      "El-Bako Clothing, a premier luxury brand with a prominent presence in Northern Nigeria.",
    tools: "NextJS, TypeScript, Tailwind CSS, React-Slick, Git",
    github: "https://github.com/azacdev/el-bako",
    demo: "https://el-bako.vercel.app",
  },
  {
    id: 8,
    src: IMG8,
    title: "Sovereign-Air",
    description:
      "Embark on a seamless journey with Sovereign-Air, where luxury meets innovation. This sophisticated travel platform redefines the way you experience air travel, ensuring every moment is marked by comfort and convenience.",
    tools: "React, TypeScript, Tailwind CSS, React-Icons, Git",
    github: "https://github.com/azacdev/sovereign-air",
    demo: "https://sovereign-air.vercel.app",
  },
];

export const projects = [
  {
    id: 1,
    title: "Oryon",
    des: "Redefining online shopping with a state-of-the-art platform. We use the latest technologies to create a seamless and enjoyable experience.",
    img: IMG2,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://oryon.vercel.app/",
  },
  {
    id: 2,
    title: "Oryon Admin",
    des: "Experience a sophisticated full-stack e-commerce admin dashboard, where you can effortlessly view and manage orders, handle products, gain insights with an overview, and seamlessly integrate Paystack for secure payments.",
    img: IMG3,
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://oryon-admin.vercel.app/",
  },
  {
    id: 3,
    title: "Shompts",
    des: "An AI prompting tool for modern world to discover, create and share creative prompts.",
    img: IMG4,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://shompts.vercel.app/",
  },
  {
    id: 4,
    title: "Luminix",
    des: "Luminix, a beacon of digital innovation, is your gateway to exceptional online experiences. As a cutting-edge digital marketing agency, we specialize in creating captivating websites, dynamic web applications, and striking graphics that redefine the digital landscape. ",
    img: IMG5,
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://Luminix.vercel.app",
  },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];
