import React from 'react'
import Marble from './Images/wonderwhitemarble.jpg'
import Quartz from './Images/quartz6.jpeg'
import Granite from './Images/fishblack.jpg'
import Pebble from './Images/pebbles_1.jpg'
import './Product.css'
import Header from './Header'
import Footer from './Footer'

import { Link } from 'react-router-dom';


export default function Product() {
    return (
        <div>
            <div className="main_container">
                <div className="product_heading">
                 <h2>Our Products</h2>
                </div>
                <div className="row">
                   <Link to='/indianmarble'>  
                   <div className="marble_box">
                        <div className="image">
                            <img src={Marble} alt="Marble image" />
                        </div>
                        <div className="text">
                            <p>Indian Marble</p>
                        </div>
                    </div>
                   </Link>

                   <Link to = '/quartz'>
                   <div className="quartz_box">
                        <div className="image">
                            <img src={Quartz} alt="Rose Quartz" />
                        </div>
                        <div className="text">
                            <p>Rose quartz</p>
                        </div>
                    </div>
                  
                  </Link>  

                </div>

                <div className="row">
                   <Link to='/indiangranite'>
                   <div className="granite_box">
                        <div className="image">
                            <img src={Granite} alt="Granite image" />
                        </div>
                        <div className="text">
                            <p>Indian Granite</p>
                        </div>
                    </div>
                   </Link>

                   <Link to='/pebbles'>
                   <div className="pebbles_box">
                        <div className="image">
                            <img src={Pebble} alt="Pebbles image" />
                        </div>
                        <div className="text">
                            <p>Indian Marble</p>
                        </div>
                    </div>
                   </Link>
                </div>
            </div>
        </div>
    )
}
