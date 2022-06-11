import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import { homeObjOne } from '../Components/Data';
import Services from '../Components/Services';
import Quote from '../Components/Quote';
import Testimonials from '../Components/Testimonials';


function Home() {

  return (
      <>
      <Hero/>
      <About {...homeObjOne}/>
      <Services/>
      <Quote/>
      <Testimonials/>
      </>
  );
}

export default Home;
