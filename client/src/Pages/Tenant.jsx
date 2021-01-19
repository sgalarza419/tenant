import React, { useState } from "react";
import Hero from "../Components/Hero";
import Row from "../Components/Row";
import Button from 'react-bootstrap/Button';
import Modal from '../Components/Modal';
import Card from 'react-bootstrap/Card';


// Needs function to populate rental data

function Tenant() {
  // setting modal open and close
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <container style={{ paddingTop: "30px" }}>
        <Hero backgroundImage="images/TenantHero.jpg"></Hero>

        <h1 style={{ fontSize: "100px", textAlign: "center", color: "teal" }}>Welcome Tenant!</h1>
        <h4 style={{ textAlign: "center", color: "teal" }}>Message Landlords, Pay Bills, and Rent SMARTER with Tenant.</h4>
          <br></br>
        <h2 style={{ textAlign: "center", color: "teal" }}>Here are your Current Rentals...</h2>
        
        <Row>
          {/* Button for car pop up populated with rental information */}
          <Button variant="info" onClick={() => setIsOpen(true)}>Click Here!</Button>
        </Row>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>

          <Card style={{ width: '500px', backgroundColor: "teal"}}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center", color: "white"}}>Here is your current Rentals</Card.Title>
                <Card.Text style={{ textAlign: "center", color: "white"}}>
                  populated data goes here
                </Card.Text>
                <Row>
                <Button variant="info" style={{padding: "5px"}}>Pay Bills</Button>
                <Button variant="info" style={{padding: "5px"}}>Open Discussion</Button>
                <Button variant="info" style={{padding: "5px"}}>Manage Rentals</Button>
                </Row>
            </Card.Body>
          </Card>

        </Modal>

      </container>
    </div>
  );
}

export default Tenant; 