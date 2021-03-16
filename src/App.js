import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  return (
   <Router>
     <div>
       <Navbar />
       <Switch>
         <Route exact path="/">
           <About />
          </Route>
         <Route exact path="/about">
           <About />
          </Route>
         <Route exact path="/contact">
           <Contact />
          </Route>
         <Route exact path="/portfolio">
           <Portfolio />
          </Route>
       </Switch>
       <Footer />
     </div>
   </Router>
  );
}

export default App;
