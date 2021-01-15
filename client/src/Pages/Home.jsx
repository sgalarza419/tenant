import React from "react";
import Hero from "../Components/Hero";
import Container from "../Components/Container";
// import Container from "react-bootstrap/Container";
import Row from "../Components/Row";
import Col from "react-bootstrap/Col";
import styled, { keyframes } from "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";
// import Image from "react-bootstrap/Image";
import "../Components/FlipCardHome/style.css";

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
            <br />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="col-4">
          <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front text-white">
              {/* <Image src={Img5} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/> */}
              <h5 style={{ marginTop: "15px" }}>Spice It Up!!</h5>
            </div>
            <div className="flip-card-back text-white">
              <br />
              <br />
              <br />
              <h1>Spice It Up!!</h1>
              <p>Bored?? Having trouble coming up with something to do?? Check out the Spice It Up!! app where we randomly generate an activity for you to do based on the category you select!!</p>
              <br/>
              <br/>
              <br/>
              {/* <a rel="alternate, noreferrer" target="_blank" href="https://github.com/dspark8916/Project1Group2"><FontAwesomeIcon icon={} size="5x" color="white"/></a> */}
            </div>
          </div>
        </div>
        </Col>
        </Row>
        </Container>
    </div>
  );
}

export default Home; 