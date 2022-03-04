import React from 'react';
import './SpecialMenu.css';
import { images, data } from '../../constants';
import SubHeading from '../../components/SubHeading/SubHeading';
import MenuItem from '../../components/MenuItem/MenuItem';

const SpecialMenu = () => {
  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'> 
      <div className="app__specialMenu-title">
        <SubHeading title='Menu That Fites Your Palatte' />
          <h1 className='headtext__cormorant'> Todays Special </h1>
      </div>

      <div className='app__specialMenu-menu'>
        <div className='app__specialMenu-menu_wine flex__center'>
          <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
          <div className='app__specialMenu_menu_items'>
            { data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))};
          </div>
        </div>
            
          <div className='app__specialMenu-menu_img'>
            <img src={ images.menu } alt='menu img' />
          </div>

          <div className='app__specialMenu-menu_cocktails flex__center'>
            <p className='app__specialMenu-menu_heading'>Cocktails</p>
            <div className='app__specialMenu_menu_items'>
              { data.cocktails.map((cocktails, index) => (
              <MenuItem key={cocktails.title + index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags} />
            ))};
            </div>
          </div>
      </div>

      <div style={{ marginTop: "10" }}>
        <button type='button' className='custom__button'>View More</button>
      </div>

    </div>
  )
};

export default SpecialMenu;