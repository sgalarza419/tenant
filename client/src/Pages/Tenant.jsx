import React from "react";
import TenantCard from "../Components/Card/Tenant"
import Jumbotron from 'react-bootstrap/Jumbotron'
// import Container from "../Components/Container"

function Tenant() {
  return (
    <div>
      {/* <Container style={{ marginTop: 30 }}> */}
        {/* <Row>
          <Col size="md-12"> */}
          {/* commment */}
            <Jumbotron> 
            <h1>Welcome Tenant!</h1> 
            <h2>My Rental</h2>
            </Jumbotron>
            <TenantCard />
            <p>
              Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
              tortor, facilisis in nque sit amet, scelerisque elementum tortor. Nullam eget nibh
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
 
          {/* </Col>
        </Row> */}
      {/* </Container> */}
    </div>
  );
}

export default Tenant; 