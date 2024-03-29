import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import "react-router-dom";
import { Button } from "./Button";

function Cards() {
  function redirectFileScan() {
    window.location.href = 'https://github.com/sosnek/CapstoneProject';
  }
  
  function redirectCapStone() {
    window.location.href = 'https://github.com/sosnek/FileScanner';
  }

  function redirectLeagly() {
    window.location.href = 'https://github.com/sosnek/Leagly';
  }

  return (
    <div className="cards" id="cards-id">
      <h1>My Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              onClick={redirectFileScan}
            >
              <CardItem
                src="images/GrowthWatch.png"
                text="GrowthWatch measures + saves canopy plant data with near complete automation"
                label="GrowthWatch"
              />
            </Button>
            &nbsp;
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              onClick={redirectCapStone}
            >
              <CardItem
                src="images/Filescan.png"
                text="Filescanner uses the Virus Total API to retrieve virus scan analytics using REST API"
                label="FileScanner"
              />
            </Button>
            &nbsp;
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize=".btn--large"
              onClick={redirectLeagly}
            >
              <CardItem
                src="images/leagly.png"
                text="a League of Legends Discord bot aimed at providing real time player data."
                label="Leagly"
              />
            </Button>
          </ul>
          <ul className="cards__items"></ul>
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
