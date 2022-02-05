import React, {useState} from 'react';
// import SideBar from '../Components/SideBar';
import NavBar from '../Components/NavBar';
import Hero from '../Components/Hero';
// import About from '../Components/About';


function Home() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
      <>
      {/* <SideBar isOpen={isOpen} toggle={toggle}/> */}
      <NavBar toggle={toggle}/>
      <Hero/>
      {/* <About/> */}
      </>
  );
}

export default Home;
