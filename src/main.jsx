import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import { Toaster } from 'react-hot-toast'

// StrictMode App > mount > good > unmount > mount > render

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position='top-right' />
    <App />
  </StrictMode>,
)
