import React from 'react'
import IndianGraniteimage from './Images/IG1.png'
import './IndianGranite.css'
import BrazilBrown from './Images/brazilbrowngranite.jpg'
import FishBlack from './Images/fishblack.jpg'
import Lakhared from './Images/lakhared.jpg'
import Lapatra from './Images/lapatrakotada.jpeg'
import MajesticBlack from './Images/MajesticBlack.jpg'
import Pwhite from './Images/pwhite.jpeg'
import Header from './Header'
import Footer from './Footer'


export default function IndianGranite() {
  return (
    <div>
      <Header/>
      <div className="IndianGranite">
        <div className="indianGraniteBanner">
        <img src={IndianGraniteimage} alt="" />
         
        </div>
        <p className='IndianGraniteIntro'>
        Discover the allure of Indian granite at Pagaria Marble. Our exquisite collection showcases the beauty and durability of Indian granite. With a wide range of mesmerizing patterns and rich colors, our Indian granite is perfect for creating stunning designs in residential and commercial spaces. Trust Pagaria Marble for top-quality products sourced directly from reputable quarries in India. Transform your space with the timeless elegance of Indian granite from Pagaria Marble.
        </p>
        <div className="images_IndianGranite">
          <div classNaame="image-item">
            <img src={BrazilBrown} alt="Image1"/>
            <p>Brazil Brown</p>
          </div>
          <div classNaame="image-item">
            <img src={FishBlack}  height="300" width="300" alt="Image1"/>
            <p>FishBlack</p>
          </div>
          <div classNaame="image-item">
            <img src={Lakhared} alt="Image1"/>
            <p>Lakhared</p>
          </div>
          <div classNaame="image-item">
            <img src={Lapatra} height="300" width="300"  alt="Image1"/>
            <p>Lapatra Granite</p>
          </div>
          <div classNaame="image-item">
            <img src={MajesticBlack} height="300" width="300"  alt="Image1"/>
            <p>Majestic Black</p>
          </div>
          <div classNaame="image-item">
            <img src={Pwhite} height="300" width="300"  alt="Image1"/>
            <p>P White</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
