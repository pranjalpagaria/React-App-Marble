import React from 'react';
import ContactBanner from './Images/contactimage.png';
import { Map,Marker, GoogleApiWrapper } from 'google-maps-react';
import './Contact.css';
import Header from './Header';
import Footer from './Footer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

function Contact(props) {
  return (
    <div>
      <Header />
      <div className="contact_top_container">
      <div className="contact_banner">
        <img src={ContactBanner} alt="contact-banner" />
      </div>
      <div className="contact_main_container">
      <div className="left_box">
                <h1 className='main_name'>Pagaria Marbles Granites & Minerals</h1>
                <div className="address">
                    <div className="address_part1">
                     <div className="address_symbol">
                      <LocationOnIcon/>
                     </div>
                     <div className="address_content_contact">
                      <p>Pagaria Marble Granite & Minerals, Piparda, Rajsamand </p>
                     </div>
                    </div>
                    <div className="address_part2">
                      <div className="call_icon">
                         <CallIcon/>
                      </div>
                      <div className="call_number_contact">
                        <p>+91-9166764900</p>
                      </div>
                    </div>
                    <div className="address_part3">
                      <div className="email_icon">
                      <EmailIcon/>
                      </div>
                      <div className="email_contact">
                        <p>info@pagariamarble.com</p>
                      </div>
                    </div>
            
                </div>
       </div>         
      <div className="right_box">
        <div className="map_container">
        <Map
            google={props.google}
            initialCenter={{ lat:25.025159, lng:73.859311 }}
            zoom={20}
            style = {{
              width: '100%',
              height: '300px',
             overflow: 'hidden'

            }}> 
          <Marker title={'Pagaria Marble Granite And Minerals'}   name={'pagaria marble'} position={{lat:25.025159, lng:73.859311 }} />
          </Map>

        </div>
         

        </div>
      </div>

      <br />
      </div>
    

      <Footer />
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDkfSQ7S2dqeMIkL_dMp1EXUBlpVzthB90 ',
})(Contact);