import React, { useContext } from "react";
import moment from "moment";
import logo from "../../../assets/logo.png";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

import { FaUserAlt } from "react-icons/fa";

const Header = () => {

  
  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Danger</Button>
        <Marquee speed={50} className="text-danger">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>

     
    </Container>
  );
};

export default Header;
