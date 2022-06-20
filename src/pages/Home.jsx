import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import { homeObjOne } from '../Components/Data';
import Services from '../Components/Services';
import Quote from '../Components/Quote';


function Home() {

  return (
      <>
      <Hero/>
      <About {...homeObjOne}/>
      <Services/>
      <Quote/>
      </>
  );
}

export default Home;
