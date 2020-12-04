import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
      <div className='cards'>
        <h1>My Projects</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/Filescanner.PNG'
                text='Filescanner uses the virus total API to retrieve virus scan analytics'
                label='FileScanner'
                Click='https://github.com/sosnek/FileScanner'
              />
              <CardItem
                src='images/GrowthWatch.png'
                text='GrowthWatch Measures and saves canopy plant data with near complete automation'
                label='GrowthWatch'
                path='/services'
              />
            </ul>
            <ul className='cards__items'>
              
            </ul>
          </div>
        </div>
      </div>
    );
  }
  /*
<CardItem
                src='images/img-3.jpg'
                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                label='Mystery'
                path='/services'
              />
              <CardItem
                src='images/img-4.jpg'
                text='Experience Football on Top of the Himilayan Mountains'
                label='Adventure'
                path='/products'
              />
              <CardItem
                src='images/img-8.jpg'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='Adrenaline'
                path='/sign-up'
              />
  */

export default Cards;
