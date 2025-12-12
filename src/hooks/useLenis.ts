import { useEffect } from "react"
import Lenis from "lenis"

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,
      smoothWheel: true,
      touchMultiplier: 1.5, // lowers aggressive touch velocity
      wheelMultiplier: 0.8, // reduces jumpiness on mouse wheels

      gestureOrientation: "vertical",
      easing: (t) => 1 - Math.pow(1 - t, 4), // smooth, luxurious easing
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])
}
