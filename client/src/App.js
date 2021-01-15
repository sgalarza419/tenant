import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Landlord from "./Pages/Landlord";
import Tenant from "./Pages/Tenant";
import Wrapper from "./Components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path={["/landlord"]}>
            <Landlord />
          </Route>
          <Route exact path={["/tenant"]}>
            <Tenant />
          </Route>
        </Wrapper>
      </div>
    </Router>

  );
}

export default App;
