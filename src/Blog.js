import React from 'react'
import './Blog.css'
import Blog1 from './Images/1.jpg'
import Blog2 from './Images/2.jpg'


export default function Blog() {
  return (
    <div>
      <div className="blog">
        <div className="heading_container">
        <h2>
            Our Blog 
        </h2>
        </div>
        
        <div className="blogPost">
            <div className="blog1">
               <div className="banner">
                <img src={Blog1} height='400px' width='800px' alt="blog1" className="image" />
                {/* <p className="blogContent">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio enim magnam nostrum quas quod repudiandae alias voluptatum maxime, quo corrupti. <span className='spantag' >Read more..</span>
                </p> */}
               </div>
            </div>
            
            <div className="blog2">
            <div className="banner">
                <img src={Blog2}  height='400px' width='800px' alt="blog1" className="image" />
                {/* <p className="blogContent">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio enim magnam nostrum quas quod repudiandae alias voluptatum maxime, quo corrupti.<span className='spantag'>Read more..</span>
                </p> */}
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}
