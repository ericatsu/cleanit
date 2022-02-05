import React from 'react'
// import SideBar from '../Components/SideBar'
//import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Works from '../Components/Works';
import Services from '../Components/Services';
// import Footer from '../Components/Footer';
import { homeObjOne, homeObjTwo, homeObjThree } from '../Components/Data';
import Faqs from '../Components/Faqs';

const Home = () => {
    // const [isOpen, setIsOpen] = useState(false)

    // const toggle = () => {
        // setIsOpen(!isOpen)
    // }


    return (
        <>
        {/* <SideBar isOpen={isOpen} toggle={toggle}/> */}
        {/* <NavBar toggle={toggle}/> */}
        <Hero/>
        <About {...homeObjOne}/>
        <Skills {...homeObjTwo} />
        <Services/>
        <Works {...homeObjThree} />
        <Faqs/>
        {/* <Footer/> */}
        </>
    )
}

export default Home
