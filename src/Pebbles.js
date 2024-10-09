import React from 'react'
import './Pebbles.css'
import pebbleBanner from './Images/Pebbles0.png'
import pebble1 from './Images/PEBBLE1.jpg'
import pebble2 from './Images/PEBBLE2.jpg'
import pebble3 from './Images/PEBBLE3.jpg'
import pebble5 from './Images/PEBBLE5.jpg'
// import pebble6 from './Images/PEBBLE6.jpg'
import Header from './Header'
import Footer from './Footer'

export default function Pebbles() {
  return (
    <div>
     <Header/>
      <div className="pebbles_banner">
        <img src={pebbleBanner} alt="" />
      </div>
      <div className="pebbles_text">
        <p>
        Experience the beauty and versatility of pebbles at Pagaria Marble. Our exquisite collection showcases a variety of pebbles, each with its unique charm and elegance. These natural stones are perfect for enhancing both indoor and outdoor spaces with their organic appeal.Our pebbles are sourced directly from trusted suppliers, ensuring their quality and durability. With a range of colors, sizes, and textures available.
        </p>
      </div>
      <div className="pebblesimages">
        <div className="item1">
            <img src={pebble1}  height='300' width='300' alt="" />
        </div>
        <div className="item1">
            <img src={pebble1}  height='300' width='300' alt="" />
        </div>
        <div className="item1">
            <img src={pebble2}  height='300' width='300' alt="" />
        </div>
        <div className="item1">
            <img src={pebble3}  height='300' width='300' alt="" />
        </div>
        <div className="item1">
            <img src={pebble5}   height='300' width='300'alt="" />
        </div>
        <div className="item1">
            <img src={pebble2}   height='300' width='300'alt="" />
        </div>
       
      </div>
      <div className="Pebbles_Images_Name">
                <p> Pebbles</p>
        </div>
      <Footer/>  
    </div>

  )
}
