import React from 'react'   
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation, Pagination, Scrollbar,A11y} from 'swiper';
import './Slider.css'
// import 'swiper/css';
import 'swiper/swiper-bundle.min.css';

// import 'swiper/css/autoplay';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import pwhite from './Images/pwhite.jpeg';
import pinkmarble from './Images/pinkmarble.jpeg';
import nizarna from './Images/MajesticBlack.jpg';
import bannimarble from './Images/jhanjhar.jpg';
import Morwadwhite from './Images/greenmarble.jpg';

// Swipercore.use(Navigation,Pagination,Scrollbar ,A11y)

const videos = [
    { id: 1, img: pwhite ,name:"P White Granite" },
    { id: 2, img: pinkmarble ,name:"Pink Marble" },
    { id: 3, img: nizarna ,name:"Majestic Black" },
    { id: 4, img: bannimarble ,name:"Jhanjhar Marble" },
    { id: 5, img: Morwadwhite ,name:"Green Marble" }
];
export default function Slider() {
    const isMobile = window.innerWidth <= 384;

    return (


        <Swiper className='Swiper'
            modules={[Autoplay,Navigation, Pagination, Scrollbar]}
            spaceBetween={0}
            slidesPerView={isMobile?1:3}
            autoplay={{ delay:1000} }
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            
        >
            {videos.map(link => (
                <SwiperSlide key={link.id}>
        
                    <div className="container">
                        <div className="slider_image">
                        <img src={link.img} alt={`Image ${link.id}`} />
                        </div>
                        <div className="nameofpic">
                            <p>{link.name}</p>
                        </div>

                    </div>
                    
                    
                  
                </SwiperSlide>
            ))}
        </Swiper>

    )
}
