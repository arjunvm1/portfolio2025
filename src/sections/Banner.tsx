import BackgroundPaths from "../components/FloatingPaths"
import Navbar from "../components/Navbar"


type Props = {
  title?: string
}

function Banner({ title = "Arjun V M" }: Props) {
  return (
    <section id="about" className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <BackgroundPaths title={title} />

      {/* Navbar */}
      <Navbar />
    </section>
  )
}

export default Banner
