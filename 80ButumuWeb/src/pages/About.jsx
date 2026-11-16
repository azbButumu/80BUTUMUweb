import './About.css'
import { useInView } from 'react-intersection-observer';
import { abouttext } from '../assets/abouttext'
export default function About() {

 
  const {ref:ref ,inView:inView} = useInView({
      triggerOnce:true,
      rootMargin:'-0% 0px -10% 0px',
  });
  const {ref:ref2 ,inView:inView2} = useInView({
      triggerOnce:true,
      rootMargin:'-0% 0px -10% 0px',
  });
  const {ref:refre ,inView:inViewre} = useInView({
      rootMargin:'-0% 0px -25% 0px',
  });
  console.log(inView);
  return (
    <div className='about'>
      <div className={inViewre ? 'fadeImage':'image' }>
           <img alt="画像" src = "image1.jpeg" className='imageA'></img>
           <img alt="仮画像" src = "IMG_2014.jpeg" className='imageB'></img>
           <img alt="画像" src = "image1.jpeg" className='imageC'></img>
           <img alt="仮画像" src = "IMG_2014.jpeg" className='imageD'></img>
          </div>
          <h1 className='h1titl'>物理部無線班</h1>
           <h2 className={inView ? 'h2move':'h2wait' }>物理部無線班とは</h2>{inView&&<div ref={refre} className={inView ? 'backh2move':'backh2' }></div>}
           <div ref={ref} className={inView ? 'text1appeare':'text1' }>
           {inView && (<>
           <p>{ abouttext.text1 }</p>
           </>)}
           </div>
    </div>
  )
}
