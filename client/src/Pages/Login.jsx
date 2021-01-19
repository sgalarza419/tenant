import React from "react";
import TenantCard from "../Components/Card/Tenant"
import Jumbotron from 'react-bootstrap/Jumbotron'
// import Container from "../Components/Container"
import Card from "react-bootstrap/Card"

function Login() {
  return (
    <div>
      {/* <Container style={{ marginTop: 30 }}> */}
        {/* <Row>
          <Col size="md-12"> */}
          <Jumbotron style={{
              display:"flex",
              justifyContent:"center",
              alignItem:"center"
              }}> 
            <h1 className="text-center" style={{
              float:"left",
              color: "teal",
              fontSize: "50px"
              }}>Use your Gmail account to sign up Today!</h1> 
            </Jumbotron>
            <main style={{ 
                maxWidth: "960px",
                margin: "30px auto",
                padding: "0 10px",
                color: "#333",
                textAlign: "center"}}>
            <a class="google-btn" href="/auth/google" style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "18px",
                padding: "10px",
                background: "#ff5353",
                }}>Gmail</a>
            </main>
          {/* </Col>
        </Row> */}
      {/* </Container> */}
    </div>
  );
}

export default Login; 