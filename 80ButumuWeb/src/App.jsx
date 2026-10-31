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
import Product from './pages/Product'

function App() {
  
  return(
    <div>
        <Tab/>
        <Routes>
<<<<<<< HEAD
        <Route path='/Room1.jsx' element={<Room1 />} />
        <Route path='/' element={<Home />} />
        <Route path='/Room2.jsx' element={<Room2 />} />
        <Route path='/About.jsx' element={<About />} />
        <Route path='/Home.jsx' element={<Home />} />
        </Routes>
    </div>
=======
          <Route path={PATH.HOME} element={<Home/>}/>
          <Route path={PATH.ROOM1} element={<Room1/>}/>
          <Route path={PATH.ROOM2} element={<Room2/>}/>
          <Route path={PATH.PRODUCT} element={<Product/>}/>
          <Route path={PATH.ABOUT} element={<About/>}/>
        </Routes>
      </HashRouter>
    </>
>>>>>>> 2077ae7749f9fc92cd76b08a2f85c3fd678d1897
  )
}

export default App