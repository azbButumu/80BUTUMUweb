import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './NavMap.css'

export default function NavMap({PropsNav}) {

  const [MapFlag, setMapFlag] = useState(false);

  useEffect(() => {
    setMapFlag(true);
    const timer = setTimeout(() => setMapFlag(false), 3000);
    return () => clearTimeout(timer);
  }, [PropsNav])

  return (
    <div className={MapFlag ? "NavMap Flaged" : "NavMap"}>
      <div className='Map'>
        <h2>ROOM350 MAP</h2>
        <div id='t0'>
          <div/>
        </div>
        <div id='t1'>
          <div className={PropsNav === 1 ? "right" : PropsNav === 2 ? "left" : ""} />  
        </div>
        <div id='t2'>
          <div className={PropsNav === 3 ? "right" : PropsNav === 4 ? "left" : ""} />  
        </div>
        <div id='t3'>
          <div className={PropsNav === 5 ? "right" : PropsNav === 6 ? "left" : ""} />  
        </div>
        <div id='t4'>
          <div className={PropsNav === 7 ? "right" : PropsNav === 8 ? "left" : ""} />  
        </div>
        <div id='t5'>
          <div className={PropsNav === 9 ? "right" : PropsNav === 10 ? "left" : ""} />  
        </div>
        <div id='t6'>
          <div className={PropsNav === 11 ? "all" : ""} />  
        </div>
        <div id='t7'>
          <div className={PropsNav === 11 ? "all" : ""} />  
        </div>
        <div id='t8'>
          <div className={PropsNav === 11 ? "all" : ""} />  
        </div>
      </div>
      <div className='Number'>
        {PropsNav}
      </div>
      <div className='BottomMap'>
        <div id='t1'/>
        <div id='t2'/>
        <div id='t3'/>
        <div id='t4'/>
        <div id='t5'/>
        <div id='t6'/>
        <div id='t7'/>
        <div id='t8'/>
      </div>
    </div>
  )
}
