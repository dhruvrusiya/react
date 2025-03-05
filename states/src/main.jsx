import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './assets/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <About />
  </StrictMode>,
)
