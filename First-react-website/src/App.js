import React, { Component } from 'react';
import Example from './Components/Example';
import Header from './Components/Header'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className = "App">
   <Header/>
      <h1>Hello World!</h1>
      <Example/>
      
     </div>
    );
  }
}

export default App;
