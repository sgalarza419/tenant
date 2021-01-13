import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Container from "./Components/Container";
// import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Landlord from "./Pages/Landlord";
import Tenant from "./Pages/Tenant";
import Navbar from "./Components/Navbar"


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
    
  );
  
  <div>
    <Navbar />
    <Wrapper>
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/discover" component={Discover} />
      <Route exact path="/search" component={Search} />
    </Wrapper>
    <Footer />
  </div>
</Router>
);
}

export default App;
