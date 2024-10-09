import React from 'react'
import { HashRouter , Routes ,Route } from 'react-router-dom'
import Home from './Home'
import ProductPage from './ProductPage'
import About from './About'
import Contact from './Contact'
import IndiaMarble from './IndiaMarble'
import IndianGranite from './IndianGranite'
import Pebbles from './Pebbles'  
import Quartz from './Quartz'
import ScrollToTop from './Scroll'; 

export default function App() {
  return (
    <div>
    <HashRouter>
     <ScrollToTop/>
    <Routes>
       <Route path='/'  element={<Home/>}/>
       <Route path='about'  element={<About/>}/>
       <Route path='products'  element={<ProductPage/>}/>
       <Route path='contacts'  element={<Contact/>}/>
       <Route path='indianmarble'  element={<IndiaMarble/>}/>
       <Route path='indiangranite'  element={<IndianGranite/>}/>
       <Route path='pebbles'  element={<Pebbles/>}/>
       <Route path='quartz'  element={<Quartz/>}/>
    </Routes>
    </HashRouter>
    </div>
  )
}
