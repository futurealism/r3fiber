import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
// Note: in order to export without the curl braces, must use the default keyword

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
