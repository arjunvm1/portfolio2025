"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import porfolio from "../assets/images/portfolio.png"
import netflix from "../assets/images/netflix.png"
import mernestate from "../assets/images/mernestate.png"
import vana from "../assets/images/van-resort.png"

type Project = {
  title: string
  description: string
  image?: any
  tech: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: "Real estate Platform",
    description:
      "A full-stack real-estate platform built with React, Node, and Stripe integration.",
    image: mernestate,
    tech: ["React", "Framer Motion", "Tailwind CSS", "node", "Redux", "JWT", "Stripe"],
    link: "https://github.com/arjunvm1/mern-estate",
  },
  {
    title: "vana Resort booking website",
    description:
      "A full-stack Resort booking website  built with React, Node",
    image: vana,
    tech: ["React", "Framer Motion", "Tailwind CSS", "node", "Redux", "JWT",],
    link: "https://github.com/arjunvm1/resort-booking",
  },
  {
    title: "Portfolio Website",
    description:
      "A highly animated portfolio built with Framer Motion, Tailwind CSS, and modern UI patterns.",
    image: porfolio,
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    link: "https://github.com/arjunvm1/portfolio2025",
  },
  {
    title: "Netflix clone",
    description: "A clean, responsive Netflix landling page clone using MoviesAPI.",
    image: netflix,
    tech: ["React", "Redux", "Public API"],
    link: "https://github.com/arjunvm1/React-netflix-clone",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 sm:py-32 bg-neutral-950 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 md:px-6 space-y-12 sm:space-y-16"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight">Projects</h2>
          <div className="text-sm text-neutral-400 font-mono">Selected Work</div>
        </div>

        {/* Project List */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="group grid lg:grid-cols-12 gap-6 sm:gap-10 py-6 sm:py-10
                         border-b border-neutral-800
                         hover:border-neutral-600
                         transition-colors duration-500"
            >
              {/* Image */}
              <div className="lg:col-span-4">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-neutral-900 border border-neutral-800">
                  <img
                    src={project.image || "/placeholder-project.png"}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="lg:col-span-5 space-y-3">
                <h3 className="text-lg sm:text-xl font-medium text-white">{project.title}</h3>

                <p className="text-neutral-400 leading-relaxed max-w-lg">{project.description}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs
                                 text-neutral-400
                                 border border-neutral-800 rounded
                                 group-hover:border-neutral-600
                                 transition-colors duration-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              <div className="lg:col-span-3 flex lg:justify-end items-end mt-4 lg:mt-0">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                  >
                    <Github />
                    View on GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
