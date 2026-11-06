import { useEffect, useState } from 'react';
import './About.css'
import  '/Icon.png'
import { motion } from 'framer-motion';

export default function About() {

  

  return (
    <div className='about'>
      <div className='image'>
           <img alt="画像" src = "image1.jpeg" className='imageA'></img>
           <img alt="仮画像" src = "IMG_2014.jpeg" className='imageB'></img>
           <img alt="画像" src = "image1.jpeg" className='imageC'></img>
           <img alt="仮画像" src = "IMG_2014.jpeg" className='imageD'></img>
          </div>
          <h1>物理部無線班</h1>
           <motion.h2
               initial={{opacity:0.0}}
               whileInView={{opacity:1.0}}
               viewport={{once:false}}
               transition={{ease:"easeOut"}}>物理部無線班とは</motion.h2>
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
