import React from "react";
import { motion } from "framer-motion";

export default function ProjectsSection({ id, isActive }) {
  return (
    <motion.div
      id={id}
      className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center
        ${isActive ? "block" : "hidden"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <ul className="text-lg text-center">
        <li>1. **Portfolio Website** – Built with Gatsby and TailwindCSS.</li>
        <li>
          2. **E-commerce Platform** – Full-stack platform using Node.js, React,
          and MongoDB.
        </li>
        <li>
          3. **Task Management App** – Task manager built with React and
          Firebase.
        </li>
      </ul>
    </motion.div>
  );
}
