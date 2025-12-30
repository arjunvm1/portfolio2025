import toast from "react-hot-toast"
import { motion } from "framer-motion"

export const animatedToast = (message: string) => {
  toast.custom(() => (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="px-4 py-3 rounded-lg shadow-lg border border-neutral-700
                bg-neutral-900 text-white text-sm"
    >
      {message}
    </motion.div>
  ))
}
