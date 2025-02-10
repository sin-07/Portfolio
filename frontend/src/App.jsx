import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <nav className="bg-gray-900 p-4 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between">
            <h1 className="text-xl font-bold">Aniket</h1>
            <div className="space-x-4">
              <Link to="/" className="hover:text-yellow-500">Home</Link>
              <Link to="/about" className="hover:text-yellow-500">About</Link>
              <Link to="/project" className="hover:text-yellow-500">Projects</Link>
              <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
            </div>
          </div>
        </nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex-grow container mx-auto p-8"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>

        <footer className="bg-gray-900 text-center py-4">
          <p>&copy; {new Date().getFullYear()} Aniket Singh. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}