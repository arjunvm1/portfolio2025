"use client"

import BackgroundPaths from "../components/FloatingPaths"
import Navbar from "../components/Navbar"
import { motion } from "framer-motion"

type Props = {
  title?: string
}

function Banner({ title = "Arjun V M" }: Props) {
  return (
    <section id="about" className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <BackgroundPaths title={title} />

      {/* Navbar */}
      <Navbar />

      {/* Resume Button */}
      <div className="absolute bottom-10 sm:bottom-20 left-1/2 -translate-x-1/2 z-20 px-4">
        <motion.a
          href="/ArjunVM2025.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
          className="
      inline-flex items-center justify-center
      whitespace-nowrap
      px-5 sm:px-6 py-3
      rounded-lg
      bg-black text-white text-sm
      border border-white/10 shadow-lg
      hover:bg-neutral-900 hover:border-white/20
      transition-all cursor-pointer
    "
        >
          Download Resume
        </motion.a>
      </div>
    </section>
  )
}

export default Banner
