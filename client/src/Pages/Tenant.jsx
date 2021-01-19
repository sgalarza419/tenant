import React from "react";
import Hero from "../Components/Hero"
import Row from "../Components/Row"
import Button from 'react-bootstrap/Button'


// function to return the modal for rental
const handleClick = () => {
  console.log('Hello')
}
// Needs function to populate rental data

function Tenant() {
  return (
    <div>
      <container style={{ paddingTop:"30px" }}>
        <Hero backgroundImage="images/TenantHero.jpg">
        </Hero>
        <h1 style={{fontSize:"100px", textAlign: "center", color: "teal" }}>Welcome Tenant!</h1>
        <h4 style={{textAlign: "center", color: "teal"}}>Message Landlords, Pay Bills, and Rent SMARTER with Tenant.</h4>
        <br></br>
        <h2 style={{ textAlign: "center", color: "teal" }}>Here are your Current Rentals...</h2>
        <Row>
          {/* Button should return a modal with rental data */}
          <Button variant="info" onClick={handleClick}>Click Here!</Button>
        </Row>
      </container>
    </div>
  );
}

export default Tenant; 