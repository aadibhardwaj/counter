import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from './todo/Main.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
