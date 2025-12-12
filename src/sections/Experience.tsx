"use client"

import { motion } from "framer-motion"

type Props = {}

const experiences = [
  {
    year: "2024 — Present",
    role: "Junior Software Developer",
    company: "Cygnoz Private Limited",
    description:
      "Developing scalable web applications with a focus on clean architecture, reusable components, and smooth user interactions across modern frontend stacks.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Framer Motion"],
  },
  {
    year: "2023 — 2024",
    role: "Junior Software Developer",
    company: "Luminar Technohub",
    description:
      "Built and maintained full-stack web applications, collaborating closely with designers and backend teams to deliver performant, production-ready solutions.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  {
    year: "2023",
    role: "MERN Stack Intern",
    company: "Luminar Technolab",
    description:
      "Completed an intensive eight-month internship working on full-stack projects, REST APIs, and responsive UI development using the MERN stack.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
]

function Experience({}: Props) {
  return (
    <section
      id="experience"
      className="relative min-h-screen py-20 sm:py-32
                 bg-neutral-950 text-white"
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
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight">Selected Work</h2>
          <div className="text-sm text-neutral-400 font-mono">2023 — Present</div>
        </div>

        {/* Experience List */}
        <div className="space-y-8 sm:space-y-12">
          {experiences.map((job, index) => (
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
              className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8
                         border-b border-neutral-800
                         hover:border-neutral-600
                         transition-colors duration-500"
            >
              {/* Year */}
              <div className="lg:col-span-2">
                <div
                  className="text-xl sm:text-2xl font-light text-neutral-500
                             group-hover:text-neutral-300 transition-colors duration-500"
                >
                  {job.year}
                </div>
              </div>

              {/* Role & Description */}
              <div className="lg:col-span-6 space-y-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-white">{job.role}</h3>
                  <div className="text-neutral-400">{job.company}</div>
                </div>

                <p className="text-neutral-400 leading-relaxed max-w-lg">{job.description}</p>
              </div>

              {/* Tech Stack */}
              <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-2 lg:justify-end mt-2 lg:mt-0">
                {job.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs text-neutral-400
                 border border-neutral-800 rounded
                 group-hover:border-neutral-600
                 transition-colors duration-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
