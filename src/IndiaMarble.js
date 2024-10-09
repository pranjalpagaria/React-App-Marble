import React from 'react'
import './IndianMarble.css'
import IndianMarble from './Images/IM4.png'
import pinkmarble from './Images/pinkmarble.jpeg';
import jkbrown from './Images/jkbrown.jpg';
import bannimarble from './Images/bannimarble.jpeg';
import Morwadwhite from './Images/Morwadwhite.jpeg';
import jhanjhar from './Images/jhanjhar.jpg';
import greenmarble from './Images/greenmarble.jpg';
import Header from './Header';
import Footer from './Footer';


export default function IndiaMarble() {
    return (
        <div>
            <Header />
            <div className="indianMarble">
                <div className="IndianMarbleBanner">
                    <img src={IndianMarble} alt="" />


                </div>
                <div className="intro_indianMarble">
                    <p>With an established distributor network and years of experience in the field, our business will be publicized through a comprehensive approach. We will utilize online platforms such as our website and social media channels, while also leveraging our distributor network to reach customers effectively.</p>
                </div>
                <div className="images_indianMarble">
                    <div classNaame="image-item">
                        <img src={pinkmarble} alt="Image 1" />
                        <p>Pink Marble</p>
                    </div>
                    <div className="image-item">
                        <img src={jkbrown} height="300PX" width='300PX' alt="Image 1" />
                        <p>Jk Brown Marble</p>
                    </div>
                    <div classNaame="image-item">
                        <img src={bannimarble} alt="Image 1" />
                        <p>Spotted Marble</p>
                    </div>
                    <div classNaame="image-item">
                        <img src={Morwadwhite} alt="Image 1" />
                        <p>Morwad  Marble</p>
                    </div>
                    <div classNaame="image-item">
                        <img src={jhanjhar} alt="Image 1" />
                        <p>Jhanjhar Marble</p>
                    </div>
                    <div classNaame="image-item">
                        <img src={greenmarble} alt="Image 1" />
                        <p>Green Marble</p>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}
