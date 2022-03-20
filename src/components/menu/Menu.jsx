
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Menu.css'

const Menu = () => {
    return (
        <div>
            {/* food menu */}
           <div className='nav-menu'>
               <h1>Our Menu</h1>
               <ul>
                   <span>All</span>
                   <span>Breakfast</span>
                   <span>Lunch</span>
                   <span>Shakes</span>
               </ul>

           </div>
           {/* card item */}
            <div className='menu-item'>
                <div className='menu-wrapper'>      
                  <div className='card-img'>
                  <img src='https://react-projects-5-menu.netlify.app/images/item-1.jpeg'/>
                  </div>
                  <div className='card-body'>
                      <div>
                          <div className='card-title-wrap'>
                              <h4 className='card-title'>Buttermilk Pancakes</h4>
                              <span className='food-price'>$15</span>
                          </div>
                          <p className='card-description'>I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed</p>
                      </div>
                  </div>

                </div>
           </div>
        </div>
    );
};

export default Menu;