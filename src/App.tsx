import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import IntroBanner from "./components/intro_banner"
import TechIcons from "./components/tech_icons"
import ProjectCards from "./components/ProjectCards"
import Experiences from "./components/Experiences"

function App() {
  return (
    <div>
      <Navbar />
      <IntroBanner />
      <ProjectCards />
      <Experiences />
    </div>
  )
}

export default App;
