import React from 'react'
import './Footer.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
        <div className="footer">
            <div className="footer_main_container">
              <div className="part1">
               <h2 className="aboutus_heading">
                About us
               </h2>
               <p className="aboutus_content">
               Welcome to Pagaria Marble Granite And Minerals: A Legacy of Excellence.
               With a rich history spanning over three decades, Pagaria Marble Granite And Minerals has been a trusted name in the marble and granite industry since its inception in 1991<Link to='/about'> <span style={{color:'yellow'}} className='Readmore'>Read More..</span></Link>
               </p>
                
              </div>
              <div className="part2">
                <h2 className="product_list_heading">
                    Our Products   
                </h2>
                <div className="product_list_content">
                <ul>
                       <Link to='/indianmarble'><li style={{color:'yellow'}}>Marbel</li> </Link> 
                       <Link to='/indiangranite'> <li style={{color:'yellow'}}>Granite</li></Link> 
                       <Link to='/quartz'><li style={{color:'yellow'}}>Quartz</li> </Link> 
                       <Link to='/pebbles' ><li style={ {color:'yellow'} }>Pebbels</li></Link>
                    </ul>
                </div>

              </div>
              <div className="part3">
                <div className="quicklinks">
                    <h2 className="quicklink_heading">
                        Quick Link
                    </h2>
                    <div className="quicklink_content">
                        <ul>
                       <Link to='/'><li style={{color:'yellow'}}>Home</li></Link>
                       <Link to='/about'><li style={{color:'yellow'}}>About us</li></Link>
                       <Link to='/contacts'><li style={{color:'yellow'}}>Contact</li></Link>
                        </ul>
                    </div>
                </div>
              </div>
              <div className="part4">
                <div className="address_container">
                    <h2 className="address_heading">
                     Address
                    </h2>
                  <div className="address">
                    <div className="address_part1">
                    <div className="address_symbol">
                    <LocationOnIcon/>
                    </div>
                    <div className="address_content">
                    <p>Pagaria Marble Granite &  Minerals, Piparda, Rajsamand </p>
                    </div>
                    </div>
                    <div className="address_part2">
                    <div className="call_icon">
                    <CallIcon/>
                    </div>
                    <div className="call_number">
                        <p>+91-9166764900</p>
                    </div>
                    </div>
                    <div className="address_part3">
                    <div className="email_icon">
                    <EmailIcon/>
                    </div>
                    <div className="email_co">
                        <p>info@pagariamarble.com</p>
                    </div>
                    </div>
            
                  </div>
                </div>
                <div className="socialMeadia_account">
                    <h2 className="socialMedia_heading">
                        Social Media Links
                    </h2>
                    <div className="socialMedia_icons">
                    <FacebookIcon style={ {color:'yellow'} } />
                    <InstagramIcon style={ {color:'yellow'} }/>
                    <YouTubeIcon style={ {color:'yellow'} }/>
                    <TwitterIcon style={ {color:'yellow'} }/>
                    </div>
                </div>



              </div>
             
            </div>    
            <div className="footer_end">
                <p>All rights reserved ©️ Pagaria Marble Granite And Minerals</p>
              </div>    
        </div> 
       
    </div>
  )
}
