import React from 'react';
import '../../App.css';
import Background from '../Background';
import Cards from '../Cards';
import Footer from '../Footer';
import About from '../About';


function Home() {
    return (
      <>
        <Background/>
        <About/>
        <Cards/>
        <Footer/>
      </>
    );
  }

export default Home;