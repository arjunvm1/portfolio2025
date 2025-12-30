"use client"

import { motion } from "framer-motion"
import { Code2, MonitorSmartphone, Layers, Palette } from "lucide-react"

type Service = {
  title: string
  description: string
  icon: any
}

const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Modern, responsive, and interactive frontend experiences using React, TypeScript, Tailwind CSS, and Framer Motion.",
    icon: MonitorSmartphone,
  },
  {
    title: "Full-Stack Development",
    description:
      "Robust full-stack applications built using Node.js, Express, and MongoDB with clean architecture and reusable components.",
    icon: Layers,
  },
  {
    title: "UI / UX Implementation",
    description:
      "Pixel-perfect UI implementation with animations, micro-interactions, and clean component-driven design principles.",
    icon: Palette,
  },
  {
    title: "API Development & Integration",
    description:
      "Secure REST APIs, backend services, and seamless integration with third-party tools such as Stripe, email services, and authentication systems.",
    icon: Code2,
  },
]

export default function Services() {
  return (
    <section
      id="services"
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
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight">Services</h2>
          <div className="text-sm text-neutral-400 font-mono">What I Offer</div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="group p-6 rounded-lg border border-neutral-800
                           hover:border-neutral-600 transition-colors duration-500
                           bg-neutral-900/20 backdrop-blur-sm"
              >
                <div className="mb-4">
                  <Icon
                    size={32}
                    className="text-neutral-400 group-hover:text-white transition-colors duration-500"
                  />
                </div>

                <h3 className="text-lg font-medium text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
