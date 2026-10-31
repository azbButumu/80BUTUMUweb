import { HashRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Tab from './Tab'
import  './pages/Room1.jsx'
import React from "react";
import { PATH } from './assets/path'
import Home from './pages/Home'
import Room1 from './pages/Room1.jsx'
import Room2 from './pages/Room2'
import About from './pages/About'

function App() {
  return(
    <div>
        <Tab/>
        <Routes>
        <Route path='/Room1.jsx' element={<Room1 />} />
        <Route path='/' element={<Home />} />
        <Route path='/Room2.jsx' element={<Room2 />} />
        <Route path='/About.jsx' element={<About />} />
        <Route path='/Home.jsx' element={<Home />} />
        </Routes>
    </div>
  )
}

export default App