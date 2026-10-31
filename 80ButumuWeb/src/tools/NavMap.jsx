import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './NavMap.css'

export default function NavMap({PropsNav}) {

  const [MapFlag, setMapFlag] = useState(false);

  useEffect(() => {
    setMapFlag(true);
    const timer = setTimeout(() => setMapFlag(false), 4000);
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
          <div className={PropsNav === 8 ? "right" : PropsNav === 7 ? "left" : ""} />  
        </div>
        <div id='t4'>
          <div className={PropsNav === 6 ? "right" : PropsNav === 5 ? "left" : ""} />  
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
        <div className='MapButton'>
          <h4>Map</h4>
          <div id='m1'/>
          <div id='m2'/>
        </div>
        <div id='t1' className={PropsNav === 1 ? "right" : PropsNav === 2 ? "left" : ""}/>
        <div id='t2' className={PropsNav === 3 ? "right" : PropsNav === 4 ? "left" : ""}/>
        <div id='t3' className={PropsNav === 8 ? "right" : PropsNav === 7 ? "left" : ""} />
        <div id='t4' className={PropsNav === 6 ? "right" : PropsNav === 5 ? "left" : ""}/>
        <div id='t5' className={PropsNav === 9 ? "right" : PropsNav === 10 ? "left" : ""}/>
        <div id='t6' className={PropsNav === 11 ? "all" : ""}/>
        <div id='t7' className={PropsNav === 11 ? "all" : ""}/>
        <div id='t8' className={PropsNav === 11 ? "all" : ""}/>
      </div>
    </div>
  )
}
