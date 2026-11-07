import { Toaster } from "react-hot-toast"
import "./App.css"
import useLenis from "./hooks/useLenis"
import Banner from "./sections/Banner"
import Experience from "./sections/Experience"
import GetInTouch from "./sections/GetInTouch"
import Projects from "./sections/Projects"
import Services from "./sections/Services"
import AnimatedFooter from "./components/AnimatedFooter"
import Snowfall from "react-snowfall"
import { useEffect, useState } from "react"

function App() {
  useLenis()
  const [isDark, setIsDark] = useState(() => {
    try {
      return window.localStorage.getItem("portfolio-theme") !== "light"
    } catch {
      return true
    }
  })

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
    document.documentElement.style.colorScheme = isDark ? "dark" : "light"
    try {
      window.localStorage.setItem("portfolio-theme", isDark ? "dark" : "light")
    } catch {
      // Keep the selected theme for this session if storage is unavailable.
    }
  }, [isDark])

  // Month-based check (0 = January, 11 = December)
  const currentMonth = new Date().getMonth()
  const showSnowfall = currentMonth === 11 

  return (
    <>
      {showSnowfall && (
        <Snowfall
          snowflakeCount={50}
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            zIndex: 50,
            pointerEvents: "none",
          }}
        />
      )}

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#111",
            color: "#fff",
            border: "1px solid #333",
            fontSize: "14px",
            padding: "12px 16px",
          },
          success: {
            iconTheme: {
              primary: "#fff",
              secondary: "#111",
            },
          },
        }}
      />

      <Banner isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />
      <Experience />
      <Projects />
      <Services />
      <GetInTouch />
      <AnimatedFooter />
    </>
  )
}

export default App
