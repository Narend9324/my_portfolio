import React from "react";
import { motion } from "framer-motion";

export default function ContactSection({ id, isActive }) {
  return (
    <motion.div
      id={id}
      className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center
        ${isActive ? "block" : "hidden"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-lg text-center">
        Let's work together! You can reach me at narendradeveloper02@gmail.com
        or find me on
        <a
          href="https://linkedin.com/in/narendrachoudhary"
          className="underline"
        >
          LinkedIn
        </a>{" "}
        and
        <a href="https://github.com/narendrachoudhary" className="underline">
          GitHub
        </a>
        .
      </p>
    </motion.div>
  );
}
