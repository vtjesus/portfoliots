import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import agritecintImg from "@/public/agritecint.png"
import zoomclone from "@/public/zoomclone.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Marganets Licey #10",
    location: "Dnipro, UA",
    description:
      "I graduated after 6 months of intensive studying in web development and programming fundamentals. This foundation allowed me to quickly start my career as a developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer at AgritecInt",
    location: "WS, USA",
    description:
      "I worked as a front-end developer for 2.5 years at AgritecInt, where I developed scalable and responsive web applications for the agricultural technology sector. My responsibilities included creating user-friendly interfaces, optimizing performance, and collaborating with backend developers to integrate RESTful APIs.",
    icon: React.createElement(CgWorkAlt),
    date: "2022-03-16 – 2024-04-26",
  },
  {
    title: "Full-Stack Developer at ModelSoft Solutions",
    location: "",
    description:
      "As a full-stack developer at ModelSoft Solutions, an outsourcing company, I gained experience working on various client projects across multiple industries. My core responsibilities included developing and maintaining applications using React, Next.js, Node.js, and MongoDB. I also worked with cloud services such as AWS and Azure to ensure scalability and reliability.",
    icon: React.createElement(FaReact),
    date: "08.08.2024 - 11.11.2024",
  },
  {
    title: "Front-end Developer at ???",
    location: "??? , ???",
    description:
      "Maybe your company will be next?",
    icon: React.createElement(FaReact),
    date: "2025 - ?",
  },
] as const;


export const projectsData = [
  {
    title: "Agritecint.com",
    description:
      "I worked as a front-end developer on this  project for 2.5+ years. Users can buy agricultural supplies throughout America",
    tags: ["React","TypeScript", "Next.js", "MongoDB", "Tailwind","Node.js", "Nest.js"],
    imageUrl: agritecintImg,
  },

  {
    title: "CorpComment",
    description:
      "I worked as a front-end developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Yoom",
    description:
      "I worked as a front-end developer on this  project for 2.5+ years. Users can buy agricultural supplies throughout America",
    tags: ["React","TypeScript", "Next.js", "getstream", "Tailwind","shadcn", "Nest.js"],
    imageUrl: zoomclone,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Nest.js",
  "React",
  "Next.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Git",
  "Tailwind",
  "Prisma",
  "Bootstrap",
  "Redux/Redux Toolkit",
  "SASS/SCSS",
  "C/C++",
  "React Native",
  "GraphQL",
  "Rest API"
] as const;
