import React, { useState } from "react";
import Hero from "../Components/Hero";
import Row from "../Components/Row";
import Button from 'react-bootstrap/Button';
import Modal from '../Components/Modal';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// Needs function to populate rental data

function Tenant() {
  // setting modal open and close
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <container style={{ paddingTop: "30px" }}>
        <Hero backgroundImage="images/TenantHero.jpg"></Hero>
        <br></br>
        <h1 style={{ fontSize: "100px", textAlign: "center", color: "teal" }}>Welcome Tenant!</h1>
        <h4 style={{ textAlign: "center", color: "teal" }}>Message Landlords, Pay Bills, and Rent SMARTER with Tenant.</h4>
        <Row>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front text-white">
                {/* <Image src={Img5} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/> */}
                <h5 style={{ marginTop: "140px" }}><FontAwesomeIcon icon={faMoneyBillWave} size="5x" color="white" /></h5>
                <h4>Make Payments</h4>
              </div>
              <div className="flip-card-back text-white">
                <br />
                <br />
                <br />
                <h1>Make Payments</h1>
                <p>Convenient way for landlords to get paid. Rent, utilities, move-in fees and more are deposited straight into your bank account — at no cost to you.</p>
                <FontAwesomeIcon icon={faMoneyBillWave} size="5x" color="white" />
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front text-white">
                {/* <Image src={Img5} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/> */}
                <h5 style={{ marginTop: "140px" }}><FontAwesomeIcon icon={faComments} size="5x" color="white" /></h5>
                <h4>Chat with Landlord/Tenants</h4>
              </div>
              <div className="flip-card-back text-white">
                <br />
                <br />
                <br />
                <h1>Chat with Landlord/Tenants</h1>
                <p>Communication is seamless!! Landlords can keep in contact with their tenants and tenants can chat with other tenants!!</p>
                <FontAwesomeIcon icon={faComments} size="5x" color="white" />
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front text-white">
                {/* <Image src={Img5} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/> */}
                <h5 style={{ marginTop: "140px" }}><FontAwesomeIcon icon={faUserPlus} size="5x" color="white" /></h5>
                <h4>Sign Up</h4>
              </div>
              <div className="flip-card-back text-white">
                <br />
                <br />
                <br />
                <h1>Sign Up</h1>
                <p>Registering is a breeze and you'll be up and running in no time!! Just click on the icon below!!</p>
                <FontAwesomeIcon icon={faUserPlus} size="5x" color="white" />
              </div>
            </div>
          </div>
        </Row>
        <br></br>
        <h2 style={{ textAlign: "center", color: "teal" }}>Here are your Current Rentals...</h2>

        <Row>
          {/* Button for car pop up populated with rental information */}
          <Button variant="info" onClick={() => setIsOpen(true)}>Click Here!</Button>
        </Row>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>

          <Card style={{ width: '500px', backgroundColor: "teal" }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center", color: "white" }}>Here is your current Rentals</Card.Title>
              <Card.Text style={{ textAlign: "center", color: "white" }}>
                populated data goes here
                </Card.Text>
              <Row>
                <Button variant="info" href="/payment">Pay Bills</Button>
                <Button variant="info" href="/chat">Open Discussion</Button>
                <Button variant="info">Manage Rentals</Button>
              </Row>
            </Card.Body>
          </Card>

        </Modal>

      </container>
    </div>
  );
}

export default Tenant; 