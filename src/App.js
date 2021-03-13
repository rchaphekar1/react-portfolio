import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Wrapper from './components/Wrapper';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  return (
   <Router>
     <div>
       <Navbar />
       <Header />
       <Wrapper>
         <Route exact path="/" component={About} />
         <Route exact path="/about" component={About} />
         <Route exact path="/contact" component={Contact} />
         <Route exact path="/portfolio" component={Portfolio} />
       </Wrapper>
       <Footer />
     </div>
   </Router>
  );
}

export default App;
