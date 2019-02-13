import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Content from "./Components/Content";

class App extends Component {

constructor(props){
super(props);
this.state = {
  header: 'Hello World',
  content: "Random Content"
}

this.setState({
  header: "look over here",
  content: "other random content"
})

this.updateState = ({})



}





  render() {
    return (
<div>
<Header headerProp = {this.state.header}/>
<Content contentProp = {this.state.content}/>


<button onClick = {this.onClick}>click me</button>
</div>




    );
     
    
  }
}

export default App;
