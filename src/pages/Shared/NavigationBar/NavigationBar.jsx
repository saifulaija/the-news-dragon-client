import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogout = ()=>{

      logOut()
      .then()
      .catch(error=>console.log(error))

    }

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">
                <Link to="/category/0" className="text-decoration-none">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && (
               
                  <FaUserAlt></FaUserAlt>
               
              )}
              
                {user ? (
                  <Button onClick={handleLogout} variant="dark">Logout</Button>
                ) : (
                  <Link to="/login">
                    {" "}
                    <Button variant="dark">Login</Button>
                  </Link>
                )}
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
