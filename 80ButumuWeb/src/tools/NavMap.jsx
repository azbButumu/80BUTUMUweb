import { useEffect, useState } from 'react';
import './NavMap.css'

export default function NavMap({PropsNav}) {

  const [MapFlag, setMapFlag] = useState(false);

  useEffect(() => {
    setMapFlag(true);
    const timer = setTimeout(() => setMapFlag(false), 2000);
    return () => clearTimeout(timer);
  }, [PropsNav])

  return (
    <div className={MapFlag ? "NavMap Flaged" : "NavMap"}>
      <div className='Map'>
        <div id='t1'/>
        <div id='t2'/>
        <div id='t3'/>
        <div id='t4'/>
        <div id='t5'/>
        <div id='t6'/>
        <div id='t7'/>
        <div id='t8'/>
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
