import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Container from "./Components/Container";
// import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Landlord from "./Pages/Landlord";
import Tenant from "./Pages/Tenant";


function App() {
  return (
    <Router>
    <div>
    {/* <Navbar /> */}
    <Route exact path={["/", "/home"]}>
      <Home />
    </Route>
    <Route exact path={["/landlord"]}>
      <Landlord />
    </Route>
    <Route exact path={["/tenant"]}>
      <Tenant />
    </Route>
    {/* <Container /> */}
    </div>
    </Router>
  );
}

export default App;
