"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${
      312 - i * 5 * position
    } ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${
      470 - i * 6
    } ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

type Props = {
  title?: string
  text?: string
}

export default function BackgroundPaths({
  title = "Background Paths",
  text = "Building clean, scalable, and animated web experiences.",
}: Props) {
  const words = title.split(" ")

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      {/* Animated background paths */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Bottom dark gradient overlay for smooth section transition */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0
                   h-48 sm:h-64 md:h-80
                   bg-linear-to-t
                   from-neutral-950
                   via-neutral-950/70
                   to-transparent"
      />

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Animated title */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 24,
                    }}
                    className="inline-block text-transparent bg-clip-text
                               bg-linear-to-r from-neutral-900 to-neutral-700/80
                               dark:from-white dark:to-white/80"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 1,
              ease: "easeOut",
            }}
            className="text-base sm:text-lg md:text-xl
             text-neutral-600 dark:text-neutral-400
             max-w-2xl mx-auto leading-relaxed text-center"
          >
            {text}
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.1,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="mt-6 flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/arjunvm1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/arjunvm1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            {/* Optional */}
            <a
              href="mailto:arjunvm628@gmail.com"
              className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>

          {/* Decorative glass pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-10 inline-block group relative
                       bg-linear-to-b from-black/10 to-white/10
                       dark:from-white/10 dark:to-black/10
                       p-px rounded-2xl backdrop-blur-lg
                       overflow-hidden shadow-lg
                       hover:shadow-xl transition-shadow duration-300"
          />
        </motion.div>
      </div>
    </div>
  )
}
