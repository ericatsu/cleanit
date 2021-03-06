import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import LearnMore from './pages/LearnMore';
import Member from './pages/Member';
import NavBar from './pages/NavBar';
import SideBar from './pages/SideBar';
import Footer from './pages/Footer';
import BookNow from './pages/BookNow';


function App() {
  const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

   

  return (
    <Router>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
       <Switch>
          <Route  exact path="/" component={Home} />
          <Route exact path="/LearnMore"  component={LearnMore} />
          <Route exact path="/Member"  component={Member} />
          <Route exact path="/BookNow"  component={BookNow} />
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
