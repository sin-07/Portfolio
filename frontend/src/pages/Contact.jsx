import { motion } from "framer-motion"; 

export default function Contact() {
    return (
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <p className="mt-4">Email: aniket.singh07vs@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/aniket-singhh/" className="text-yellow-500">linkedin.com/in/aniket-singhh</a></p>
        <p>GitHub: <a href="https://github.com/sin-07" className="text-yellow-500">github.com/sin-07</a></p>
      </motion.div>
    );
  }