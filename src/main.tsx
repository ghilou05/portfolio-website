import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/Navbar.scss'
import './components/intro_banner.scss'
import './components/intro_block.scss'
import './components/tech_icons.scss'
import './components/featured_projects.scss'
import './components/Variables.scss'
import './components/Main.scss'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />    
    </BrowserRouter>
  </StrictMode>,
)
