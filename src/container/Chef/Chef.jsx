import React from 'react';
import './Chef.css';
import { images } from '../../constants';
import SubHeading from '../../components/SubHeading/SubHeading';

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt="chef" />
      </div>

      <div className='app__wrapper_info'>
        <SubHeading title="Chef's Word" />
        <h1 className='headtext__cormorant'>What we believe in</h1>
        <div className='app__cehf-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt="quote" />
              <p className='p__opensans'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe earum quas quia similique. Praesentium quisquam officiis ab voluptatem!</p>
          </div>
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quibusdam delectus, veritatis natus minima soluta voluptas. Sequi, eius. Quis aperiam minus saepe praesentium? Dicta.</p>
        </div>
        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  )
}

export default Chef;