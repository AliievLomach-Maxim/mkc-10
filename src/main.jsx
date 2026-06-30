import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './store/store'

// StrictMode App > mount > good > unmount > mount > render

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Toaster position='top-right' />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
