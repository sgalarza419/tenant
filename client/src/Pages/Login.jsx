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
            <Container className="col-md-4">
            <Card style={{ backgroundColor: "teal", fontSize: "100px", padding: "50px 50px 0px 50px"}}>
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
              {/* <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
              <FormBtn
                // disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
            </Card>
            </Container>
          {/* </Col>
        </Row> */}
      {/* </Container> */}
    </div>
  );
}

export default Login; 