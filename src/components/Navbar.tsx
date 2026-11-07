import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Glass } from "glisse"
import { Menu, X, User, Briefcase, FolderGit2, Mail, Layers, Sun, Moon } from "lucide-react"

const navItems = [
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Services", href: "#services", icon: Layers },
  { label: "Contact", href: "#contact", icon: Mail },
]

export default function Navbar({ isDark, onToggleTheme }: { isDark: boolean; onToggleTheme: () => void }) {
  const [open, setOpen] = useState(false)

  const glassStyle = {
    width: "100%",
    maxWidth: "80rem",
    margin: "0 auto",
    borderRadius: 0,
    background: "rgba(255,255,255,0.02)",
    "--lg-glass-bend": 0.28,
    "--lg-glass-dispersion": 0.65,
    "--lg-blur": "1px",
    "--lg-rim-shine": 0.84,
  } as React.CSSProperties & Record<`--${string}`, string | number>

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glass Navbar Container */}

      <Glass style={glassStyle}>
        <div
          className="mx-auto max-w-7xl px-4 md:px-6 py-4 flex items-center justify-between
                     bg-white/60 dark:bg-neutral-950/60
                     border-b border-black/10 dark:border-white/10"
        >
          {/* Logo / Brand */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg font-semibold tracking-tight
                       text-neutral-900 dark:text-white"
          >
            Arjun<span className="text-neutral-500">.dev</span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => {
              const Icon = item.icon

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="group relative text-sm font-medium
                             text-neutral-700 dark:text-neutral-300
                             hover:text-neutral-900 dark:hover:text-white
                             transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Icon
                      size={16}
                      className="opacity-70 group-hover:opacity-100"
                    />
                    {item.label}
                  </span>

                  {/* Underline */}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-px
                               bg-neutral-900 dark:bg-white
                               group-hover:w-full transition-all duration-300"
                  />
                </motion.a>
              )
            })}
          </nav>

          <button
            type="button"
            onClick={onToggleTheme}
            className="ml-auto md:ml-0 mr-4 md:mr-0 inline-flex items-center gap-2 rounded-full border border-neutral-300/70 dark:border-white/15 px-3 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
            <span className="hidden sm:inline">{isDark ? "Light" : "Dark"} mode</span>
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-neutral-900 dark:text-white"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </Glass>

      {/* Mobile Menu Overlay - Original Design */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40
                       bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl"
          >
            <nav className="flex flex-col items-center justify-center gap-6 h-full">
              {navItems.map((item, i) => {
                const Icon = item.icon

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="flex items-center gap-4 text-xl font-medium
                               text-neutral-800 dark:text-neutral-200
                               hover:text-neutral-900 dark:hover:text-white"
                  >
                    <Icon size={22} />
                    {item.label}
                  </motion.a>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
