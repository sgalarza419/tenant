import React from "react";
import TenantCard from "../Components/Card/Tenant"
import Jumbotron from 'react-bootstrap/Jumbotron'
// import Container from "../Components/Container"

function Login() {
  return (
    <div>
      {/* <Container style={{ marginTop: 30 }}> */}
        {/* <Row>
          <Col size="md-12"> */}
            <Jumbotron> 
            <h1 className="text-center">Use your Gmail account to sign up</h1> 
            <main style={{ 
              maxWidth: "960px",
                margin: "30px auto",
                padding: "0 10px",
                color: "#333" }}>
            <a class="google-btn" href="/auth/google" style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "18px",
                padding: "10px",
                background: "#ff5353" }}>Gmail</a>
            </main>
            </Jumbotron>
          {/* </Col>
        </Row> */}
      {/* </Container> */}
    </div>
  );
}

export default Login; 