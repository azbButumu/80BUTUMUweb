import { useState } from 'react'
import './Tab.css'
import { useNavigate } from 'react-router-dom';
import { PATH } from './assets/path.js';
import { motion } from 'framer-motion';
import Icon from '../public/Icon.png';
import R1 from './pages/Room1.jsx';

export default function Tab() {

  const navigation = useNavigate();

  const [menu, setmenu] = useState(false);

  const openMenu = () => {
    setmenu(!menu);
  }

  const Home = () => {
    console.log("山");
    navigation('/Home.jsx');
    setmenu(false);
  }

  const Room1 = () => {
    console.log("蓬");
    navigation('/Room1.jsx');
    console.log("来");

    setmenu(false);
  }

  const Room2 = () => {
    navigation('/Room2.jsx');
    setmenu(false);
  }

  const About = () => {
    navigation('/About.jsx');
    setmenu(false);
  }

  return (
    <main className='Tab'>
          <div className ='Head'>
        <div className='Top'>
          <div className='Blur'/>
          <img src={Icon}/>
          <h2>物理部展</h2>
          </div>
        </div>
        <div className={menu ? "Button ButtonOpen" : "Button"} onClick={openMenu}>
          <div id='b1'/>
          <div id='b2'/>
          <div id='b3'/>
        </div>
        <div className={menu? "mainback" : ""}></div>
        <ul className={menu ? "TabOpen" : ""}>
            <motion.li
            initial={{x:30, opacity:0}}
            whileInView={{x:0, opacity:1, transition:{duration:0.3, delay:0.3}}}
            transition={{duration:0, delay:0}}
            onClick={Home}>
              <h3>Home</h3>
              <p>ホームに戻る</p>
            </motion.li>
            <motion.li
            initial={{x:30, opacity:0}}
            whileInView={{x:0, opacity:1, transition:{duration:0.3, delay:0.4}}}
            transition={{duration:0, delay:0}} 
            onClick={Room1}>
              <h3>Room350</h3>
              <p>350教室</p>
            </motion.li>
            <motion.li
            initial={{x:30, opacity:0}}
            whileInView={{x:0, opacity:1, transition:{duration:0.3, delay:0.5}}}
            transition={{duration:0, delay:0}}
            onClick={Room2}>
              <h3>Room333</h3>
              <p>333教室</p>
            </motion.li>
            <motion.li
            initial={{x:30, opacity:0}}
            whileInView={{x:0, opacity:1, transition:{duration:0.3, delay:0.6}}}
            transition={{duration:0, delay:0}}
            onClick={About}>
              <h3>About</h3>
              <p>物理部展とは</p>
            </motion.li>
        </ul>
    </main>
  )
}
