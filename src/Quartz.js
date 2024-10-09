import React from 'react'
import './Quartz.css'
import QuartZBanner from './Images/IQ4.png'
import Quartz1 from './Images/quartz1.jpg'
import Quartz2 from './Images/quartz2.jpg'
// import Quartz3 from './Images/quartz2.jpg'
import Quartz4 from './Images/quartz4.jpg'
import Quartz5 from './Images/quartz5.jpg'
import Quartz6 from './Images/quartz6.jpg'
import Header from './Header'
import Footer from './Footer'

export default function Quartz() {
    return (
        <div>
            <Header/>
            <div className="quartz_banner">
                <img src={QuartZBanner} alt="" />
            </div>
            <div className="quartzText">
                <p>
                Experience the elegance and resilience of Indian quartz at Pagaria Marble. Our exceptional collection features a diverse range of Indian quartz, known for its stunning aesthetics and durability. With a variety of captivating colors and patterns, our Indian quartz is perfect for enhancing the beauty of any residential or commercial space. Trust Pagaria Marble for top-quality quartz sourced directly from reliable suppliers in India. Elevate your space with the timeless allure of Indian quartz from Pagaria Marble.
                </p>
                
                </div>
            <div className="Pink_Quartz">
            <div className="Pink_Quartz_Images">
                    <div className="item1">
                        <img src={Quartz1} height="300" width="300" alt="" />
                    </div>
                    <div className="item1">
                        <img src={Quartz2} height="300" width="300"  alt="" />
                    </div>
                    <div className="item1">
                        <img src={Quartz2} height="300" width="300" alt="" />
                    </div>
                    <div className="item1">
                        <img src={Quartz4} height="300" width="300"  alt="" />
                    </div>
                    <div className="item1">
                        <img src={Quartz5}  height="300" width="300" alt="" />
                    </div>
                    <div className="item1">
                        <img src={Quartz6} height="300" width="300"  alt="" />
                    </div>
            </div>
            <div className="Pink_Quartz_Images_Name">
                <p> Pink Quartz</p>
            </div>
                
            </div>
            <Footer/>


        </div>
    )
}
