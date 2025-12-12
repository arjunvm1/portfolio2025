import "./App.css"
import useLenis from "./hooks/useLenis"
import Banner from "./sections/Banner"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
function App() {
  useLenis()
  return (
    <>
      <Banner />
      <Experience/>
      <Projects/>
    </>
  )
}

export default App
