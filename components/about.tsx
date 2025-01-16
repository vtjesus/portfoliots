"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am a Frontend/Fullstack Developer based in Kyiv with over 2.5 years of experience in creating high-performance, scalable, and reliable web applications. I specialize in the complete development lifecycle, from designing and building user interfaces to developing server-side logic and integrating cloud services. My primary focus is on frontend development (80%) while also having strong backend skills (20%).{" "}
        <span className="font-medium"></span>, I am proficient in modern programming languages such as JavaScript, TypeScript, and C/C++, and I work confidently with frameworks and libraries like React, Vue.js, Nuxt.js, Next.js, Redux/Redux Toolkit, and others. I also have experience optimizing performance through tools like Code Splitting, server-side rendering (SSR), and advanced styling with SASS/SCSS and Tailwind CSS.{" "}
        <span className="font-medium">On the backend, I develop with Node.js, Express.js, Nest.js, and manage data with PostgreSQL and MongoDB. I am familiar with deploying applications using Netlify, Vercel, AWS, Azure, and Google Cloud.</span>.{" "}
        {" "}
      
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games(Dota2(8k mmr)/cs2(2k elo)/Fortnite/Valorant), watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
