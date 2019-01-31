import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

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
        <NavDropdown.Item href="#action/3.3">Meet New People</NavDropdown.Item>
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




</div>
  

 )
    }
}

export default Navigation;