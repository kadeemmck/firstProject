import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,Button } from 'reactstrap';






class Cards extends Component{
    render(){
    return (
<div className = "Cards">

<div id="crush">

<div>
      <Card 
      style={{ width: '18rem' }}>
        <CardImg src={require("../Components/Images/vegetablesXSmall.jpg")} alt="" />
        <CardBody>
          <CardTitle>Vegetables</CardTitle>
          
          <CardText></CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>


      
    </div>
</div>



<div id="rock">


<div>
      <Card>
        <CardImg id='card'  src={require("../Components/Images/dairy.jpeg")} alt="dairy" />

        <CardBody>
          <CardTitle>Dairy</CardTitle>
          
          <CardText> Got milk? If you're from the Americas, Australia, 
              or any country in Europe, the answer is probably yes. 
              Milk has long been a staple in those parts of the world and the variety continues to expand,
               as does our love for all things rich and creamy made from it.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>





</div>


<div id="block">


<div>
      <Card>
        <CardImg top width="100%" src="   " alt="" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>





</div>








</div>
 );
}
}

export default Cards;