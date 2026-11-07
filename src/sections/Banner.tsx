"use client"

import { Button, Glass } from "glisse"
import BackgroundPaths from "../components/FloatingPaths"
import Navbar from "../components/Navbar"
import { motion } from "framer-motion"
import type { CSSProperties } from "react"

type Props = {
  title?: string
}

const glassStyle = {
  width: "fit-content",
  height: "fit-content",
  borderRadius: 16,
  background: "none",
  "--lg-glass-bend": 0.45,
  "--lg-glass-dispersion": 0.4,
  "--lg-blur": "0px",
  "--lg-rim-shine": 0.13,
} as CSSProperties

function Banner({ title = "Arjun V M" }: Props) {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background */}
      <BackgroundPaths title={title} />

      {/* Navbar */}
      <Navbar />

      {/* Resume Button */}
      <div className="absolute bottom-10 sm:bottom-20 left-1/2 -translate-x-1/2 z-20 px-4">
        <Glass style={glassStyle}>
          <Button>
            <motion.a
              href="/Arjuncv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
              className=""
            >
              Open Resume
            </motion.a>
          </Button>
        </Glass>
      </div>
    </section>
  )
}

export default Banner
