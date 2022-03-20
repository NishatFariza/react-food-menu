
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Menu.css'

const Menu = (props) => {
    const {strMealThumb} =props.foodItem;
    return (
        <div>
           {/* card item */}
            <div className='menu-item'>
                <div className='menu-wrapper'>      
                  <div className='card-img'>
                  <img src={strMealThumb}/>
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