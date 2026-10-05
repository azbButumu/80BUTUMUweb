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
        <Routes>
          <Route path={PATH.HOME} element={<Home/>} />
          <Route path={PATH.ROOM1} element={<Room1/>} />
          <Route path={PATH.ROOM2} element={<Room2/>} />
          <Route path={PATH.ABOUT} element={<About/>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
