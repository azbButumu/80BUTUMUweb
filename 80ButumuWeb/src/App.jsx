import './App.css'
import Tab from './Tab'
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
        <Route path={PATH.ROOM1} element={<Room1/>} />
        <Route path={PATH.HOME} element={<Home/>} />
        <Route path={PATH.ROOM2} element={<Room2/>} />
        <Route path={PATH.ABOUT} element={<About/>} />
      </Routes>
    </div>
  )
}

export default App