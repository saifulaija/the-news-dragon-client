import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGooglePlusG, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4>Login with</h4>
      <Button className="mb-2" variant="outline-primary" > <FaGooglePlusG></FaGooglePlusG>Login with Google</Button>
      <Button variant="outline-secondary"> <FaGithub></FaGithub>Login with Github</Button>
      <div>
        <h4>Find us on</h4>
        <ListGroup>
      <ListGroup.Item><FaFacebookF></FaFacebookF>facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter></FaTwitter> twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram></FaInstagram> instagram </ListGroup.Item>
     
    </ListGroup>
    <QZone></QZone>
    <div  style={{ backgroundImage:`url(${bg})` }}>
        <img src={bg} alt="" />

    </div>
      </div>
    </div>
  );
};

export default RightNav;
