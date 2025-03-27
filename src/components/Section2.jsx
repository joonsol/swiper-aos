import React,{useEffect} from 'react'
import './Section2.scss'
import Aos from 'aos';
import 'aos/'
const Section2 = () => {
  useEffect(()=>{
    Aos.init({
      duration:1000
    })
  },[])
  return (
    <section className='s2'>
        <div className="rel">
            <div className="tit-wrap">

            <h2 data-aos="fade-right">section2 title</h2>
            <p data-aos="fade-right" data-aos-delay="100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iusto tempora quisquam est, nam ipsum labore numquam quas sed repellendus voluptas adipisci velit at eaque, libero accusantium! Quo, non similique.
            </p>
            </div>
            <div className="img-wrap" data-aos="fade-left" data-aos-delay="200"></div>
        </div>
    </section>
  )
}

export default Section2