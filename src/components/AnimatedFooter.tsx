"use client"

import { motion } from "framer-motion"

function FloatingPathsFooter({ position }: { position: number }) {
  const paths = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 4 * position} -${189 + i * 5}C-${380 - i * 4 * position} -${
      189 + i * 5
    } -${312 - i * 4 * position} ${216 - i * 5} ${152 - i * 4 * position} ${
      343 - i * 5
    }C${616 - i * 4 * position} ${470 - i * 5} ${684 - i * 4 * position} ${
      875 - i * 5
    } ${684 - i * 4 * position} ${875 - i * 5}`,
    width: 0.5 + i * 0.025,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
      <svg
        className="w-full h-full text-neutral-700/40 dark:text-white/20"
        viewBox="0 0 696 316"
        fill="none"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.15 + path.id * 0.02}
            initial={{ pathLength: 0.3 }}
            animate={{
              pathLength: 1,
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 18 + Math.random() * 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function AnimatedFooter() {
  return (
    <footer className="relative w-full bg-neutral-950 text-neutral-400 pt-20 pb-10 overflow-hidden">

      {/* Animated Background Paths */}
      <FloatingPathsFooter position={1} />
      <FloatingPathsFooter position={-1} />

      {/* Gradient overlay */}
      <div
        className="absolute top-0 left-0 right-0 h-40
                   bg-linear-to-b from-transparent to-neutral-950 pointer-events-none"
      />

      {/* Footer content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 container mx-auto px-6 text-center space-y-6"
      >
        <h3 className="text-xl sm:text-2xl tracking-tight text-white">
          Thanks for visiting.
        </h3>

        <p className="text-sm text-neutral-500 max-w-lg mx-auto leading-relaxed">
          Crafting clean, animated, and scalable digital experiences — one component at a time.
        </p>

        {/* Footer bottom */}
        <div className="pt-10 text-xs text-neutral-600">
          © {new Date().getFullYear()} Arjun. All rights reserved.
        </div>
      </motion.div>
    </footer>
  )
}
