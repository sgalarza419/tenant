import React, { useState } from "react";
import Hero from "../Components/Hero"
import Row from "../Components/Row"
import Button from 'react-bootstrap/Button'
import Modal from '../Components/Modal'
import Card from 'react-bootstrap/Card'

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
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
            </Card.Body>
          </Card>
        </Modal>
      </container>
    </div>
  );
}

export default Tenant; 