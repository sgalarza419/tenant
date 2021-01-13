import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Container from "./Components/Container";
// import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";


function App() {
  return (
    <Router>
    <div>
    {/* <Navbar /> */}
    <Route exact path={["/", "/home"]}>
      <Home />
    </Route>
    {/* <Route exact path="/Home" component={Home}/> */}
    {/* <Container /> */}
    </div>
    </Router>
  );
}

export default App;
