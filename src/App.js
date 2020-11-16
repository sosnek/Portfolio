import logo from './logo.svg';
import React, { Component } from 'react';
import Particles from "react-tsparticles";
import ReactTypingEffect from 'react-typing-effect';
import './App.css';

class App extends Component{
  render(){
      return (
        <div>
         <ReactTypingEffect
						className="typewriter"
						staticText="Hey."
						text={["I'm Adam Sosnowski"]}
						speed='100'
						typingDelay='500'
						eraseDelay='1000'
					/>
        
		
		
		
        <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#232432",
            },
          },
          fpsLimit: 144,
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true,
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 900,
              },
              value: 150,
            },
            opacity: {
              value: 0.6,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 3,
            },
          },
          detectRetina: true,
        }}
      />
      </div>
      );
  };

}
export default App;