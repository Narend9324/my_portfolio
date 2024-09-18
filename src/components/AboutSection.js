import React from "react";
import { motion } from "framer-motion";

export default function AboutSection({ id, isActive }) {
  return (
    <motion.div
      id={id}
      className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-cen,ter
        ${isActive ? "block" : "hidden"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-4">About</h1>
      <p className="text-lg text-center">
        I'm a software engineer with 3+ years of experience in full-stack
        development. I focus on building scalable, responsive web apps using
        Node.js, React, and modern JavaScript libraries like TailwindCSS and
        Gatsby.
      </p>
    </motion.div>
  );
}
