import React from "react";
import Hero from "../Components/Hero";
import Container from "../Components/Container"
import Row from "../Components/Row";
import Col from "../Components/Col";
// import styled, { keyframes } from "animate.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";

function Landlord() {
  return (
    <div>
       <Hero backgroundImage="https://static1.squarespace.com/static/58fa0759ebbd1a8dd14ebdf8/t/5cf58d68e15d7f0001b003f1/1559596404951/Landlord-bloglead.gif?format=1500w">
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1 className="text-center" style={{color: "teal", fontSize: "100px", }}>Welcome To Landlord!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
             IT FINALLY WORKS !!!!!!!
            </p>
            <p>
              Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
              malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi
              ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
              nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
              Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel
              porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
            </p>
            <p>
              Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
              tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh
              sit amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis.
              Mauris et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim
              congue at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc
              vehicula, erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam
              nisi eget nisi. Cras arcu lacus, tristique in bibendum vitae, elementum eget lorem.
              Maecenas vestibulum volutpat orci eu pharetra. Praesent vel blandit ante, nec faucibus
              libero. Sed ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id dapibus
              eros. Nullam tempor sem rhoncus porta semper. Proin bibendum vulputate nisl, fringilla
              interdum elit pulvinar eu. Quisque vitae quam dapibus, vestibulum mauris quis, laoreet
              massa.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Landlord; 