import React from "react";
// import TenantCard from "../Components/Card/Tenant"
import Jumbotron from "react-bootstrap/Jumbotron"
import Row from "../Components/Row"
import BuildingRed from '../Components/BuildingRed'
// import Container from "../Components/Container"

function Tenant() {
  return (
    <div>
      <container style={{ paddingTop:"30px" }}>
        <Jumbotron style={{backgroundImage: "https://media.istockphoto.com/photos/estate-agent-giving-house-keys-to-woman-and-sign-agreement-in-office-picture-id1130829500?k=6&m=1130829500&s=612x612&w=0&h=MHR5K8GvILOjSKOLKdgPeav1DPpQPqEbxEr1FTrEpiU=", backgroundSize: "cover"}}>
          <br></br>
          <h1 style={{ textAlign: "center", color: "teal" }}>Welcome Tenant!</h1>
        </Jumbotron>
        <h2 style={{ textAlign: "center", color: "teal" }}>Here are your Current Rentals...</h2>
        <Row>
          <BuildingRed />
        </Row>
      </container>
    </div>
  );
}

export default Tenant; 