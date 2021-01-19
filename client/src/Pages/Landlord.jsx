import React from "react";
// import React, { Component } from 'react'
import Hero from "../Components/Hero";
import Container from "../Components/Container"
import Row from "../Components/Row";
import Col from "../Components/Col";
import "../Components/FlipCardHome/style.css";
import styled, { keyframes } from "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import render from "react";
// import ReactDOM from "react"
import Modal from 'react-bootstrap/Modal'
import "bootstrap/dist/css/bootstrap.min.css";
// import { faConnectdevelop } from "@import { Link } from "react-router-dom";fortawesome/free-brands-svg-icons";

// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// render(<App />);

function Landlord() {
  return (
    <div>
      <Hero backgroundImage="https://static1.squarespace.com/static/58fa0759ebbd1a8dd14ebdf8/t/5cf58d68e15d7f0001b003f1/1559596404951/Landlord-bloglead.gif?format=1500w">
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1 className="text-center" style={{ color: "teal", fontSize: "100px", }}>Welcome to the Landlord page!</h1>
            <p className="text-center" style={{ color: "black", fontSize: "30px", }} >Down below are a few cards too explain it all! Pay rent, communicate with me and even direct message others around the complex !</p>
            <p className="text-center" style={{ color: "black", fontSize: "30px", }} >All you have too do is add me to a room where we can communicate any problem or issue that is going on. There will also be a link to where you can send payments. </p>
          </Col>
        </Row>
        </Container>
        <Row>
          <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front text-white">
              {/* <Image src={Img5} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/> */}
              <h5 style={{ marginTop: "140px" }}><FontAwesomeIcon icon={faMoneyBillWave} size="5x" color="white"/></h5>
              <h4>Pay Here</h4>
            </div>
            <div className="flip-card-back text-white">
              <br />
              <br />
              <br />
              <h1>Make Payments</h1>
              <p>Link here is too pay rent when due. Make it nice an simple for all!</p>
              <a rel="alternate, noreferrer" target="_blank" href=""><FontAwesomeIcon icon={faMoneyBillWave} size="5x" color="white"/></a>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front text-white">
              {/* <Image src={Img5} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/> */}
              <h5 style={{ marginTop: "140px" }}><FontAwesomeIcon icon={faComments} size="5x" color="white"/></h5>
              <h4>Message Me</h4>
            </div>
            <div className="flip-card-back text-white">
              <br />
              <br />
              <br />
              <h1>Talk with me Directly !!</h1>
              <p>If there are any issues you can send me a message at any time and I will respond ASAP</p>
              <a rel="alternate, noreferrer" target="_blank" href=""><FontAwesomeIcon icon={faComments} size="5x" color="white"/></a>
            </div>
          </div>
        </div>
        

       
          
   
        </Row>
      
    </div>
  );
}

export default Landlord; 