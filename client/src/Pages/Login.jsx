import React, { useState, useEffect } from "react";
import DeleteBtn from "../Components/DeleteBtn";
import TenantCard from "../Components/Card/Tenant"
import Jumbotron from 'react-bootstrap/Jumbotron'
// import Container from "../Components/Container"
import Card from "react-bootstrap/Card";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../Components/Form";
// import { Container } from "react-bootstrap/lib/Tab";
import Container from "react-bootstrap/Container";
import Row from "../Components/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function Login() {
//Setting our component's initial state
const [users, setUsers] = useState([])
const [formObject, setFormObject] = useState({})

//Load all users and store them with setUsers
useEffect(() => {
  loadUsers()
}, [])

//Loads all users and sets them to users
function loadUsers() {
  API.getUsers()
  .then(res =>
    setUsers(res.data))
    .catch(err => console.log(err));
}

//Deletes a user from the database with a give id, then reloads books from the db
function deleteUser(id) {
  API.deleteUser(id)
  .then(res => loadUsers())
  .catch(err => console.log(err));
}

//Handles updating compnent state when the user types into the input field
function handleInputChange(event) {
  const {address, value} = event.target;
  setFormObject({...formObject, [address]: value})
}

// When the form is submitted, use the API.
// saveUser method to save the user data
// Then reload users from the database
function handleFormSubmit(event) {
  event.preventDefault();
  if(formObject.username && formObject.googleId) {
    API.saveUser({
      address: String,
      room: String,
      resident: Boolean,
      landlord: Boolean
    })
    .then(res => loadUsers())
    .catch(err => console.log(err));
  }
};


  return (
    <div>
      {/* <Container style={{ marginTop: 30 }}> */}
        {/* <Row>
          <Col size="md-12"> */}
          <Jumbotron style={{
              backgroundColor: "teal",
              display:"flex",
              justifyContent:"center",
              alignItem:"center"
              }}> 
            <h1 className="text-center" style={{
              float:"left",
              color: "white",
              fontSize: "50px"
              }}>Use your Gmail account or Email to Sign Up Today!!</h1> 
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
                borderRadius: "6px"
                }}>Gmail</a>
            </main>
            <Container className="col-md-4">
            <Card style={{ backgroundColor: "teal", fontSize: "100px", padding: "50px 50px 0px 50px"}}>
            <form>
              <h3 className="text-white">Sign Up <FontAwesomeIcon icon={faUserPlus} size="1x" color="white"/></h3>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Email (required)"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Password (required)"
              />
              <FormBtn
                // disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit <FontAwesomeIcon icon={faUserPlus} size="1x" color="white"/>
              </FormBtn>
            </form>
            </Card>
            <br/>
            <Card style={{ backgroundColor: "teal", fontSize: "100px", padding: "50px 50px 0px 50px"}}>
            <form>
              <h3 className="text-white">Login <FontAwesomeIcon icon={faSignInAlt} size="1x" color="white"/></h3>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Email (required)"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Password (required)"
              />
              <FormBtn
                // disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Login <FontAwesomeIcon icon={faSignInAlt} size="1x" color="white"/>
              </FormBtn>
            </form>
            </Card>
            </Container>
          {/* </Col>
        </Row> */}
      {/* </Container> */}
      <Container>
        <Row>
      <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front text-white">
              {/* <Image src={Img5} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/> */}
              <h5 style={{ marginTop: "140px" }}><FontAwesomeIcon icon={faSignInAlt} size="5x" color="white"/></h5>
              <h2>Login</h2>
            </div>
            <div className="flip-card-back text-white">
              <br />
              <br />
              <br />
              <h1>Login <FontAwesomeIcon icon={faSignInAlt} size="1x" color="white"/></h1>
              <Card style={{ backgroundColor: "teal", fontSize: "100px", padding: "50px 50px 0px 50px", border: "transparent"}}>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Email (required)"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Password (required)"
              />
              <FormBtn
                // disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Login <FontAwesomeIcon icon={faSignInAlt} size="1x" color="white"/>
              </FormBtn>
            </form>
            </Card>
              </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front text-white">
              {/* <Image src={Img5} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/> */}
              <h5 style={{ marginTop: "140px" }}><FontAwesomeIcon icon={faUserPlus} size="5x" color="white"/></h5>
              <h2>Sign Up</h2>
            </div>
            <div className="flip-card-back text-white">
              <br />
              <br />
              <br />
              <h1>Sign Up <FontAwesomeIcon icon={faUserPlus} size="1x" color="white"/></h1>
              <Card style={{ backgroundColor: "teal", fontSize: "100px", padding: "50px 50px 0px 50px", border: "transparent"}}>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Email (required)"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Password (required)"
              />
              <FormBtn
                // disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit <FontAwesomeIcon icon={faUserPlus} size="1x" color="white"/>
              </FormBtn>
            </form>
            </Card>
              </div>
          </div>
        </div>
        
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front text-white">
              {/* <Image src={Img5} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/> */}
              <h5 style={{ marginTop: "140px" }}><FontAwesomeIcon icon={faGoogle} size="5x" color="white"/></h5>
            </div>
            <div className="flip-card-back text-white">
              <br />
              <br />
              <br />
              <Card style={{ backgroundColor: "teal", fontSize: "100px", padding: "30px 50px 0px 50px", border: "transparent"}}>
              <main style={{ 
                maxWidth: "960px",
                padding: "0 10px",
                color: "#333",
                textAlign: "center"}}>
            <a className="google-btn" href="/auth/google" style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "50px",
                padding: "10px",
                background: "#ff5353",
                borderRadius: "6px"
                }}>Gmail</a>
            </main>
            </Card>
              </div>
          </div>
        </div>

        </Row>
        </Container>
    </div>
  );
}

export default Login; 