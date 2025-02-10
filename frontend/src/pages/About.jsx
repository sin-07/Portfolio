import React from "react";
import { motion } from "framer-motion";


export default function About() {
    return (
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="mt-4">I am a Computer Science graduate with a passion for full-stack development.</p>
      </motion.div>
    );
  }