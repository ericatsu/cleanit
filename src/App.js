import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import HireMe from './pages/HireMe';
import Home from './pages/Home';
import LearnMore from './pages/LearnMore';
import SideBar from './pages/SideBar'
import NavBar from './pages/NavBar'
import Footer from './pages/Footer';






function App() {
   const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <Router>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/HireMe" component={HireMe} />
          <Route exact path="/LearnMore" component={LearnMore} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
