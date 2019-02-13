import React, { Component } from 'react';




class Tabs extends Component{
    render(){
    return (

<div>
         <center>  <div id = "banner">🛒</div></center> 
<div class="topnav" id="myTopnav">
 
 <center> <a href="#news">Login</a>
  <a href="#contact">Grocery History</a>
  <a href="#about">New List</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a> </center>
</div>


   

    </div>



 );
}
}

export default Tabs;