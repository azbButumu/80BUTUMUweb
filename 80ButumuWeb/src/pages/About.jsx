import { useEffect, useState } from 'react';
import './About.css'
import  '/Icon.png'
import { AnimatePresence, degrees, motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import { image, linearGradient } from 'framer-motion/client';

export default function About() {
  const {scrollYProgress} = useScroll();

  const color = useTransform(scrollYProgress,[0,1], ["#000000","#ffffff"]);
  const color2 = useTransform( scrollYProgress,[0,1],["#000000","#ffffff"]);
  const color3 = useTransform( scrollYProgress,[0,1],["#ffffff","#000000"]);
  const gradienter = useMotionTemplate`linear-gradient(120deg, ${color} 0%, ${color3} 50%,${color2} 100%)`;
  

  return (
    <div className='about'>
      <div className='image'>
           <img alt="画像" src = "image1.jpeg" className='imageA'></img>
           <img alt="仮画像" src = "IMG_2014.jpeg" className='imageB'></img>
           <img alt="画像" src = "image1.jpeg" className='imageC'></img>
           <img alt="仮画像" src = "IMG_2014.jpeg" className='imageD'></img>
          </div>
          <h1>物理部無線班</h1>
           <AnimatePresence>
           <motion.h2
             /*  className='titlemotion'
               style={{
                background:gradienter,
                WebkitTextFillColor:'transparent',
                color:'transparent',      
               }}  */
            initial={{opacity:0.0}}
            animate={{opacity:1.0}}
            >物理部無線班とは</motion.h2>
           </AnimatePresence>
           <p>あああああああああああああああああ</p>
           <p>あああああああああああああああああ</p>
           <p>あああああああああああああああああ</p>
           <p>あああああああああああああああああ</p>
           <p>あああああああああああああああああ</p>
           <p>あああああああああああああああああ</p>
           <p>あああああああああああああああああ</p>
           <p>あああああああああああああああああ</p>
           <p>あああああああああああああああああ</p>
           <p>あああああああああああああああああ</p>
           <p>あああああああああああああああああ</p>
           <p>あああああああああああああああああ</p>
           <p>あああああああああああああああああ</p>
    </div>
  )
}
