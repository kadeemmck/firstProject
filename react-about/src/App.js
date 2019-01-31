import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import{Card, Button, CardBody, CardTitle, CardImg, CardText} from 'reactstrap';
import AboutMe from './Components/AboutMe';
import Navigation from './Components/Navbar';
import Cards from './Components/Cards';
import atl from './Images/atl.png';

class App extends Component {
  render() {
    return (
      <div className="app">
          <AboutMe/>
        <Navigation/>
          <Cards/> 
         
           <h1></h1>

          
        



    </div>
    );
  }
}
 
export default App;
