import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import useTitle from '../../../hoks/UseTitle';

const Register = () => {

  const {createUser} = useContext(AuthContext);

  const [accepted, setAccepted]=useState(false);

  const handleRegister = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
    .then(result=>{
      const currentUser = result.user;
      console.log(currentUser);
    })
    .catch(error=>{
      console.log(error);
    })
  }

  const handleAccept = event=>{
    setAccepted(event.target.checked);
  }

  useTitle('Register')


    return (
        <Container className="w-50 mx-auto my-5 p-5 rounded shadow-lg">
      <h3>Please Register Now</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"

            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter email"
            required
          />
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={handleAccept} type="checkbox" name='accept' label={<>Accept <Link to='/terms'>Terms & Conditions</Link></>} />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary">Already Have an account?<Link to='/login'>Login</Link></Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-warning"></Form.Text>
      </Form>
    </Container>
    );
};

export default Register;
