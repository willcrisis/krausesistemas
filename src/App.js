import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Services from './components/services/Services';
import Portifolio from './components/portifolio/Portifolio';
import CallToAction from './components/call_to_action/CallToAction';
import Contact from './components/contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
          <Header/>
          <About/>
          <Services/>
          <Portifolio/>
          <CallToAction/>
          <Contact/>
      </div>
    );
  }
}

export default App;
