import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Tab from './Tab'
import { PATH } from './assets/path'
import Home from './pages/Home'
import Room1 from './pages/Room1'
import Room2 from './pages/Room2'
import About from './pages/About'

function App() {
  return(
    <>
      <HashRouter>
        <Tab/>
      </HashRouter>
    </>
  )
}

export default App
