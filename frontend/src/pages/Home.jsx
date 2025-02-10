import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4">I'm Aniket Singh, a Full Stack Developer.</p>
    </motion.div>
  );
}