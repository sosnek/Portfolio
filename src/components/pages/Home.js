import React from 'react';
import '../../App.css';
import Background from '../Background';
import Cards from '../Cards';
import Footer from '../Footer';
import About from '../About';
import Resume from '../Resume';


function Home() {
    return (
      <>
        <Background/>
        <About/>
        <Cards/>
        <Resume/>
        <Footer/>
      </>
    );
  }

export default Home;