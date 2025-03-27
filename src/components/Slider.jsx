import React ,{useEffect}from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // 추가
import { Pagination, Navigation } from 'swiper/modules';
import Aos from 'aos';
import 'aos/'
import './Slider.scss'
const Slider = () => {
useEffect(()=>{
  Aos.init({
    duration:1000
  })
},[])

  const slides = [
    { className: 'slide1', title: 'Welcome to Slide 1' },
    { className: 'slide2', title: 'Explore Slide 2' },
    { className: 'slide3', title: 'Enjoy Slide 3' },
  ];

  return (
    <section className="slider-container">
      <div className="rel">

        <h2 data-aos="fade-up">Hello React</h2>
        <Swiper
          spaceBetween={30}
          data-aos="fade-up" 
           data-aos-delay="300"
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className={`slide-bg ${slide.className}`}>
                <div className="slide-content">
                  <h3>{slide.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Slider