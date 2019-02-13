import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';

class Navigation extends Component{
    render(){
    return (
<div className = "Navbar">

<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Top 10</Nav.Link>
    
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Movies</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Food</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Drink Beer</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Music</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Laugh</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Life Skills</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Sports</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Smile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Singing When I Can't</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Meditate</NavDropdown.Item>
      
       </NavDropdown>
    </Nav>
    <Form inline>
    </Form>
  </Navbar.Collapse>
</Navbar>

<div id ="chile">

< a href ='https://www.linkedin.com/feed/' >
<i class="fab fa-linkedin" style={{background:'white',color:'blue', fontSize:'2em'}}></i>
</a>

< a href ='https://twitter.com/' >
<i class="fab fa-twitter" style= {{background:'white',color:'blue',fontSize:'2em'}}></i>
</a>
</div>

</div>
  

 )
    }
}

export default Navigation;