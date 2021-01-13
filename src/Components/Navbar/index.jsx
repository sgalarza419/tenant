import React from "react";

const { Navbar, NavDropdown, Nav, MenueItem } = ReactBootstrap;
class TopNavbar extends React.Component {
	render() {
		return (
			<div>
				<Navbar collapseOnSelect expand="lg" className="top-nav">
          <div className="container">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="menu-list">
            <Nav >
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          </div>
        </Navbar>
			</div>
			
		);
	}
}

ReactDOM.render(
	<TopNavbar />,
	document.getElementById('root')
);


export default Navbar;