import React from 'react';
import './Footer.css';
import FooterOverlay from '../../components/Footer/FooterOverlay';
import Newsletter from '../../components/Footer/Newsletter';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';


const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <FooterOverlay />
      <Newsletter />

      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans'>212/A, wireless, Moghbazar, Dhaka </p>
          <p className='p__opensans'> +8801729 932837 </p>
          <p className='p__opensans'> +8801841 932837 </p>
        </div>

        <div className='app__footer-links_logo'>
          <img src={images.gericht} alt="footer_logo" />
          <p className='p__opensans'>"The bet way to find yourself is to lose your self in the service of others."</p>
          <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop: 15}} />
          <div className='app__footer-links_icons'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Working Hour</h1>
          <p className='p__opensans'> Monday - Friday </p>
          <p className='p__opensans'> 8:00 am - 12:00 pm </p>
          <p className='p__opensans'> Saturday - Sunday </p>
          <p className='p__opensans'> 07:00 am - 11:00 pm </p>
        </div>
      </div>
      <div className='app__copyright'>
        <p className='p__cormorant'>2022 Gericht! All right reserved! </p> 
      </div>
    </div>
  )
}

export default Footer;