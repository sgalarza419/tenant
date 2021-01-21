import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from '../Components/Container';
import Col from '../Components/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcStripe } from '@fortawesome/free-brands-svg-icons';

function Payment() {
    return (
        <div>
            <Container style={{ marginTop: "50px" }}>
                <Row>
                    <h2 style={{ color: "teal" }}>Here is your current bill</h2>
                </Row>
                <Row></Row>
                <Col size="md-2">
                    <h3 style={{ color: "teal" }}>Bill Amount: </h3>
                </Col>
                <Col size="md-2">
                    <h3>$985.96</h3>
                </Col>
                <Row>
                    <Col size="md-2">
                        <h4 style={{ fontSize: "16px" }}>Name on card</h4>
                        <input className="creditCard" type="form" />
                    </Col>
                    <Col size="md-2">
                        <h4 style={{ fontSize: "16px" }}>Credit card number</h4>
                        <input className="creditCard" type="form" />
                    </Col>
                    <Col size="md-2">
                        <h4 style={{ alignItem: "center", fontSize: "16px" }}>Date</h4>
                        <input className="month" style={{ width: "30px" }} type="form" />
                        <input className="day" style={{ width: "20px" }} type="form" />
                        <input className="year" style={{ width: "35px" }} type="form" />
                    </Col>
                    <Col size="md-2">
                        <h4 style={{ alignItem: "center", fontSize: "16px" }}>CVC</h4>
                        <input style={{ width: "35px" }} type="form" />
                    </Col>
                </Row>
                <br></br>
                <Row>
                        <Button variant="info">Send Payment</Button>
                </Row>
                <br></br>
                <h6>or...</h6>
                <Row style={{marginTop:"10px"}}>
                        <Button href="https://stripe.com/?utm_campaign=paid_brand-US_Search_Brand_Stripe-1803852691&utm_medium=cpc&utm_source=google&ad_content=448938759825&utm_term=stripe&utm_matchtype=e&utm_adposition=&utm_device=c&gclid=CjwKCAiAxp-ABhALEiwAXm6IyY9Q2-FyUYFLot1WJeeWOfRxNUivZUIAWAUNIluSrZyhIEqTbH1gLBoC4JgQAvD_BwE" variant="info" style={{ width: "100px" }}><FontAwesomeIcon icon={faCcStripe} size="3x" color="white" /></Button>
                        <h5>sign up using stripe</h5>
                </Row>
            </Container>
        </div>
    )
}

export default Payment;
