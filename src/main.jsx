import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ✅ Initialize Alpine.js before rendering React
import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

// ✅ Then render your React app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
