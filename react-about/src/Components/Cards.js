import React, { Component } from 'react';
import {Card, CardBody, CardTitle, CardImg, CardText} from 'reactstrap';



class Cards extends Component{
    render(){
    return (
<div className = "Cards">

  <div id="crush">

<Card style={{ width: '18rem' }}>
  <CardBody>
  <CardImg  src='../Images/atl.png' alt=''/>  
    <CardTitle></CardTitle>
    <CardText>
    
    </CardText>
    
  </CardBody>
</Card>
</div>

  <div id="batch">

<Card style={{ width: '18rem' }}>
  <CardBody>
  <CardImg  src='../Images/apple.png' alt=''/>  
    <CardTitle></CardTitle>
    <CardText>
     
    </CardText>
    
  </CardBody>
</Card>

  </div>


<div id="nice">
<Card style={{ width: '18rem' }}>
  <CardBody>
  <CardImg  src='../Images/chakra.jpg' alt=''/>  
    <CardTitle></CardTitle>
    <CardText>
     
    </CardText>
    
  </CardBody>
</Card>

</div>



 <div id="wrong">
 <Card style={{ width: '18rem' }}>
  <CardBody>
   <CardImg  src='../Images/miamiheat.jpg' alt=''/>  
    <CardTitle></CardTitle>
    <CardText>
     
    </CardText>
    
  </CardBody>
 </Card>

 </div> 








</div>









  

 )
    }
}

export default Cards;