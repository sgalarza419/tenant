import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Landlord from "./Pages/Landlord";
import Tenant from "./Pages/Tenant";
import Login from "./Pages/Login";
import Payment from "./Pages/Payment";
import Chat from "./Pages/Chat"
import Wrapper from "./Components/Wrapper";



function App() {
 

  return (
    
    <Router>
      <div style={{backgroundImage: `url("https://www.netpremacy.com/wp-content/uploads/2018/09/Background-website-01.jpg")`}}>
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
          <Route exact path={["/login"]}>
            <Login />
          </Route>
          <Route exact path={["/payment"]}>
            <Payment />
          </Route>
          <Route exact path={["/chat"]}>
            <Chat />
          </Route>









        </Wrapper>




      </div>
    </Router>

  );
}

export default App;
