import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import { Toaster } from 'react-hot-toast'
import { langContext } from './LangContext'
import LanguageContextProvider from './context/LanguageContextProvider'

// StrictMode App > mount > good > unmount > mount > render

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position='top-right' />
    <langContext.Provider
      value={{
        language: 'ua',
      }}
    >
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </langContext.Provider>
  </StrictMode>,
)
