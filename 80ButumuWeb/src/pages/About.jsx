import './About.css'
import { useInView } from 'react-intersection-observer';
import { abouttext } from '../assets/abouttext'
import { useState } from 'react';
export default function About() {

  const [first, firsttri] = useState(false);
var id= setTimeout(()=>{
  firsttri(true);
},4000);
  const {ref:ref ,inView:inView} = useInView({
      triggerOnce:true,
      rootMargin:'-80% 0px 0% 0px',
  });
  const {ref:ref2 ,inView:inView2} = useInView({
      triggerOnce:true,
      rootMargin:'0% 0px -40% 0px',
  });
  const {ref:refre ,inView:inViewre} = useInView({
      rootMargin:'-65% 0px 0% 0px',
  });
  console.log(inView);
  return (
    <div className={first? 'about':'aboutfirst'}>
      <div className={inViewre ? 'image':'fadeImage' }>
           <img alt="画像" src = "image1.jpeg" className='imageA'></img>
           <img alt="仮画像" src = "IMG_2014.jpeg" className='imageB'></img>
           <img alt="画像" src = "image1.jpeg" className='imageC'></img>
           <img alt="仮画像" src = "IMG_2014.jpeg" className='imageD'></img>
           <div className={inViewre ? '':'whitefilter'} ></div>
          </div>
          <h1 ref={refre} className='h1titl'>物理部無線班</h1>
           <h2 className={inView ? 'h2move':'h2wait' }>物理部無線班とは</h2>{inView&&<div className={inView ? 'backh2move':'backh2' }></div>}
           <div ref={ref} className={inView ? 'text1appeare':'text1' }>
           {inView && (<>
           <p ref={ref2}>{ abouttext.text1 }</p>
           </>)}
           </div>

           <div className={inView2 ? 'text2appeare':'' }>
           {inView2 && (<>
           <img  src = "IMG_2014.jpeg" className='printimage' ></img>
           <img  src = "image1.jpeg" className='printimage1' ></img>
           <img  src = "image1.jpeg" className='printimage2' ></img>
           <img  src = "image1.jpeg" className='printimage3' ></img>
           <p className='text2'>{ abouttext.text2 }</p>
           </>)}
           </div>
           </div>
  )
}
