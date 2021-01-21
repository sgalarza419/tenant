import React from "react";
import Hero from "../Components/Hero";
import Container from "../Components/Container";
// import Container from "react-bootstrap/Container";
import Row from "../Components/Row";
import Col from "react-bootstrap/Col";
// Line 8 is neccessary to get animation on text at page load
import styled, { keyframes } from "animate.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
// import { faSms } from "@fortawesome/free-solid-svg-icons";
// import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
// import Image from "react-bootstrap/Image";
import "../Components/FlipCardHome/style.css";
import { Link } from "react-router-dom";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";


function Home() {

  return (
    <div>
      <Hero backgroundImage="https://wsptldr.files.wordpress.com/2020/07/2020_07kmartapart.jpg?w=1024">
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <div className="animate__animated animate__bounceInDown">
              <h1 className="text-center" style={{ color: "teal", fontSize: "100px", }}>CDMS<FontAwesomeIcon icon={faConnectdevelop} />CONNECT</h1>
            </div>
            <br />
            <br />

            <h3 className="text-center" style={{ color: "teal", fontSize: "35px", }}>It's easier than ever to be a landlord!!</h3>
            <br/>
            <h4 className="text-center" style={{ color: "teal", fontSize: "20px", }}>We provide a safe and convienient place for landlords and tenants to connect and more!!</h4>
            <br />
            <br />
          </Col>
        </Row>
      </Container>
        <Row>
          <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front text-white">
              {/* <Image src={Img5} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/> */}
              <h5 style={{ marginTop: "140px" }}><FontAwesomeIcon icon={faMoneyBillWave} size="5x" color="white"/></h5>
              <h4>Make Payments</h4>
            </div>
            <div className="flip-card-back text-white">
              <br />
              <br />
              <br />
              <h1>Make Payments</h1>
              <p>Convenient way for landlords to get paid. Rent, utilities, move-in fees and more are deposited straight into your bank account — at no cost to you.</p>
              <FontAwesomeIcon icon={faMoneyBillWave} size="5x" color="white"/>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front text-white">
              {/* <Image src={Img5} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/> */}
              <h5 style={{ marginTop: "140px" }}><FontAwesomeIcon icon={faComments} size="5x" color="white"/></h5>
              <h4>Chat with Landlord/Tenants</h4>
            </div>
            <div className="flip-card-back text-white">
              <br />
              <br />
              <br />
              <h1>Chat with Landlord/Tenants</h1>
              <p>Communication is seamless!! Landlords can keep in contact with their tenants and tenants can chat with other tenants!!</p>
             <FontAwesomeIcon icon={faComments} size="5x" color="white"/>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front text-white">
              {/* <Image src={Img5} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/> */}
              <h5 style={{ marginTop: "140px" }}><FontAwesomeIcon icon={faUserPlus} size="5x" color="white"/></h5>
              <h4>Sign Up</h4>
            </div>
            <div className="flip-card-back text-white">
              <br />
              <br />
              <br />
              <h1>Sign Up</h1>
              <p>Registering is a breeze and you'll be up and running in no time!! Just click on the icon below!!</p>
              <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}>
              <FontAwesomeIcon icon={faUserPlus} size="5x" color="white"/>
            </Link>
            </div>
          </div>
        </div>
        </Row>
    </div>
  );
}

export default Home; 