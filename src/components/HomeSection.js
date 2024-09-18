// HomeSection.js
import React from "react";
import { motion } from "framer-motion";

export default function HomeSection({ id, isActive }) {
  return (
    <motion.div
      id={id}
      className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center ${
        isActive ? "block" : "hidden"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-4">Home</h1>
      <p className="text-lg text-center">
        Hi, I'm Narendra Choudhary, a Full-stack Software Engineer specializing
        in Node.js and React. I love building interactive web applications that
        scale. Explore my work below!
      </p>
    </motion.div>
  );
}
