import React, { Component } from 'react';
import './App.css';
import AboutMe from './Components/AboutMe';
import Navigation from './Components/Navbar';
import Cards from './Components/Cards';



class App extends Component {
  render() {
    return (
      <div className="app">
          <AboutMe/>
        <Navigation/>
    
          <Cards/> 
         
          

          
        



    </div>
    );
  }
}
 
export default App;
