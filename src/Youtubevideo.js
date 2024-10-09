import React from 'react'
import './Youtubevideo.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation, Pagination, Scrollbar} from 'swiper';
// import 'swiper/css';
import 'swiper/swiper-bundle.min.css';
// import 'swiper/css/autoplay';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import Myvideo from "./Myvideo";
// import YouTube from 'react-youtube';



export default function Youtubevideo() {
  const isMobile = window.innerWidth <= 384;

  return (
    <div>
        <div className="first_heading">
            <h3 className="heading_title">Our Youtube Videos</h3>
        </div>
     
        <Swiper className="Swiper_container"
            modules={[Autoplay,Navigation, Pagination, Scrollbar]}
            spaceBetween={0}
            slidesPerView={isMobile?1:3}
            // autoplay={{ delay:1000 }}
            navigation
            
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
    
                <SwiperSlide  className="swiperSlide_container">
                 <Myvideo videoId="0Yv6M67IggU"/> 
                </SwiperSlide>
                <SwiperSlide className="swiperSlide_container" >
                 <Myvideo videoId="ekmNvvaz2fU"/> 
                </SwiperSlide>
                <SwiperSlide className="swiperSlide_container" >
                 <Myvideo videoId="rZ-gcyHOa9E"/> 
                </SwiperSlide>
                <SwiperSlide className="swiperSlide_container" >
                 <Myvideo videoId="FSsGarkyApc"/> 
                </SwiperSlide>
                <SwiperSlide className="swiperSlide_container" >
                 <Myvideo videoId="-_e86mII4vw"/> 
                </SwiperSlide>
                <SwiperSlide className="swiperSlide_container" >
                 <Myvideo videoId="xBa9r_KsjWg"/> 
                </SwiperSlide>
      
            
        </Swiper>



    </div>
  )
}
