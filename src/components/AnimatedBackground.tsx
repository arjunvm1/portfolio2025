"use client"

import BackgroundPaths from "./FloatingPaths"


export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <BackgroundPaths />
    </div>
  )
}
