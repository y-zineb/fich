import react from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import About from './pages/About';
import Activities from './pages/Activities';
import Contact from './pages/Contact';
import Galerie from './pages/Galerie';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App (){ 
    return (
      <div className="App">
        <Nav/>
        <Accueil/>
        <About/>
        <Activities/>
        <Gallery/>
        <Contact/>
        <Footer/>
      </div>
    );
  }

export default App;