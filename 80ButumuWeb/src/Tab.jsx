import { useState } from 'react'
import './Tab.css'
import { useNavigate } from 'react-router-dom';
import { PATH } from './assets/path';
import { motion } from 'framer-motion';
import Icon from '../public/Icon.png'

export default function Tab() {

  const navigation = useNavigate();

  const [menu, setmenu] = useState(false);

  const openMenu = () => {
    setmenu(!menu);
  }

  const Home = () => {
    navigation(PATH.HOME);
    setmenu(false);
  }

  const Room1 = () => {
    navigation(PATH.ROOM1);
    setmenu(false);
  }

  const Room2 = () => {
    navigation(PATH.ROOM2);
    setmenu(false);
  }

  const About = () => {
    navigation(PATH.ABOUT);
    setmenu(false);
  }

  return (
    /*<main className='Tab'>
        <div className='Top'>
          <div className='Blur'/>
          <img src={Icon}/>
          <h2>物理部展</h2>
        </div>
        <div className={menu ? "Button ButtonOpen" : "Button"} onClick={openMenu}>
          <div id='b1'/>
          <div id='b2'/>
          <div id='b3'/>
        </div>
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
    </main>*/
    <main className='Tab'>
      <h1>いんむカフェ</h1>
      <p>これは<strong>野獣先輩</strong>のカフェです</p>
    </main>
  )
}
