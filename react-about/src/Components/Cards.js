import React, { Component } from 'react';
import{Card, Button, CardBody, CardTitle, CardImg, CardText} from 'reactstrap';
import atl from '/Images/atl.png';


class Cards extends Component{
    render(){
    return (
<div className = "Cards">
<h1></h1>
  
<Card style={{ width: '18rem' }}>
  <CardImg variant="top" src='atl.png' alt=''/>  
  <CardBody>
    <CardTitle>Card Title</CardTitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </CardText>
    <Button variant="primary">Go somewhere</Button>
  </CardBody>
</Card>;


</div>
  

 )
    }
}

export default Cards;