import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './scss/Navbar.scss'
import './scss/intro_banner.scss'
import './scss/tech_icons.scss'
import './scss/featured_projects.scss'
import './scss/experiences.scss'
import './scss/contact.scss'
import './scss/Variables.scss'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
