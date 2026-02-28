import IntroBanner from "./components/intro_banner"
import TechIcons from "./components/tech_icons"
import FeaturedProjects from "./components/featured_projects"
import { useState } from 'react'

function App() {
  return (
    <div>
      <IntroBanner />
      <TechIcons />
      <FeaturedProjects />
    </div>
  )
}

export default App;
