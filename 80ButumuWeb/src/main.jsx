import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import  './pages/Room1.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App/>
    </HashRouter>
  </StrictMode>
)


