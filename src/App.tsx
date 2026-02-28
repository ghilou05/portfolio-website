import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import IntroBanner from "./components/intro_banner"
import TechIcons from "./components/tech_icons"
import FeaturedProjects from "./components/featured_projects"
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <IntroBanner />
      <TechIcons />
      <FeaturedProjects />
    </div>
  )
}

export default App;
