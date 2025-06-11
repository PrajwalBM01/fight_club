import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ReactLenis from 'lenis/react'

createRoot(document.getElementById('root')!).render(
  <ReactLenis root>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </ReactLenis>
  
)
