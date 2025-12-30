"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { animatedToast } from "../components/animatedToast"

export default function GetInTouch() {
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement | null>(null)

  // Initialize EmailJS once (Vite + StrictMode safe)
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY!)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setLoading(true)

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        formRef.current
      )

      console.log("EmailJS result:", result)
      animatedToast("Message sent successfully!")
      formRef.current.reset()
    } catch (error) {
      console.error("EmailJS error:", error)
      animatedToast("Failed to send message. Try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 sm:py-32 bg-neutral-950 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 md:px-6 space-y-10"
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-4xl sm:text-5xl font-light tracking-tight"
        >
          Get in Touch
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-2xl mx-auto p-8 rounded-2xl
                     border border-neutral-800
                     bg-neutral-900/20 backdrop-blur-md"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
              aria-required
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-neutral-900 text-white
                           border border-neutral-800 focus:border-neutral-600
                           outline-none transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
              aria-required
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-neutral-900 text-white
                           border border-neutral-800 focus:border-neutral-600
                           outline-none transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-neutral-900 text-white
                           border border-neutral-800 focus:border-neutral-600
                           outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-white text-neutral-900 font-medium
                         hover:bg-neutral-200 transition-all
                         disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}
