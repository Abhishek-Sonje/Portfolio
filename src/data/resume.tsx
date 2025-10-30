import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abhishek Sonje",
  initials: "AS",
  url: "https://abhishek-sonje.vercel.app",
  location: "Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/maharashtra",
  description:
    "Computer Science undergraduate skilled in full-stack development, real-time communication, and cloud deployment. Seeking an internship to apply MERN, Next.js, and problem-solving skills to build impactful software.",
  summary:
    "I'm a Computer Science and Design student passionate about building scalable web applications. I specialize in the **MERN stack** and **Next.js**, with experience in real-time features, cloud deployment, and secure authentication. I've built projects ranging from cloud file management platforms to skill-exchange communities with real-time chat. Currently solving **110+ DSA problems on LeetCode** while seeking opportunities to contribute to impactful software.",
  avatarUrl: "me.png", // Add your profile photo to public folder as "me.png"
  skills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Socket.IO",
    "REST APIs",
    "Tailwind CSS",
    "JavaScript",
    "Java",
    "C",
    "Git",
    "Vercel",
    "JWT",
    "Clerk",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "work.abhishek036@gmail.com",
    tel: "+919665643242",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abhishek-sonje",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhishek-sonje-83a333209/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Abhi_SDev", // Update with your X/Twitter handle
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:work.abhishek036@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  education: [
    {
      school: "MET Bhujbal Knowledge City",
      href: "https://met.edu",
      degree: "B.Tech in Computer Science and Design",
      logoUrl: "/met-logo.png", // Add your college logo to public folder
      start: "2023",
      end: "2027",
    },
  ],

  projects: [
    {
      title: "Droply – Cloud File Management",
      href: "https://droply-gamma.vercel.app/", // Update with your live demo link
      dates: "2024",
      active: true,
      description:
        "Cloud platform with secure authentication, drag-and-drop uploads, and trash recovery. Built with Clerk for auth, Drizzle ORM with Neon Postgres, and ImageKit for file storage.",
      technologies: [
        "Next.js",
        "Clerk",
        "PostgreSQL",
        "Drizzle ORM",
        "ImageKit",
        "Vercel",
        "TypeScript",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://droply-gamma.vercel.app/", // Update with your live demo
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abhishek-sonje/droply", // Update with your repo
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "", // Add project screenshot
      video: "", // Or add demo video
    },
    {
      title: "Skill Swap Platform",
      href: "https://skill-swap-one-ruby.vercel.app/", // Update with your live demo
      dates: "2024",
      active: true,
      description:
        "Skill-based exchange platform with JWT authentication, role filters, and secure user matching. Features real-time private chat using Socket.IO with typing indicators.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "JWT",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://skill-swap-one-ruby.vercel.app/", // Update with your live demo
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Abhishek-Sonje/Skill_Swap", // Update with your repo
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Airbnb Clone",
      href: "https://github.com/abhishek-sonje/airbnb-clone", // Update with your repo
      dates: "2024",
      active: true,
      description:
        "Full-featured booking platform with authentication, property listings, and location-based search. Integrated Geoapify Maps API and responsive UI with React and Tailwind CSS.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Geoapify API",
        "JWT",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abhishek-sonje/airbnb-clone", // Update with your repo
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],

  achievements: [
    {
      title: "MERN Stack Mastery",
      description:
        "Completed full MERN stack course with multiple project deployments on Vercel and cloud platforms.",
    },
    {
      title: "LeetCode Problem Solver",
      description:
        "Solved 110+ Data Structures and Algorithms problems with a 24-day solving streak.",
    },
    {
      title: "Full-Stack Projects",
      description:
        "Built scalable applications with authentication, real-time features, and cloud deployment.",
    },
  ],
} as const;
