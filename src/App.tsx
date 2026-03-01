import Navbar from "./components/Navbar"
import IntroBanner from "./components/intro_banner"
import ProjectCards from "./components/ProjectCards"
import Experiences from "./components/Experiences"
import Contact from "./components/Contact"

function App() {
  return (
    <div>
      <Navbar />
      <IntroBanner />
      <ProjectCards />
      <Experiences />
      <Contact />
    </div>
  )
}

export default App;
