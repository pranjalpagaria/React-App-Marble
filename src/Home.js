import React from 'react'
import './Home.css'
import Header from './Header'
import Slider from './Slider'
import Product from './Product'
import Blog from './Blog'
import Youtubevideo from './Youtubevideo'
import Footer from './Footer'
import HomeBanner from './HomeBanner'
// import IndiaMarble from './IndiaMarble'
// import IndianGranite from './IndianGranite'
// import Quartz from './Quartz'
// import Pebbles from './Pebbles'

export default function Home() {
  return (
    <div>
      <Header/>
      <Slider/>  
      <HomeBanner/>
      <Product/>
      <Blog/>
      <Youtubevideo/>
      <Footer/>
     
    </div>
  )
}
