import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, FormLabel } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="name">
          <FormLabel>Name</FormLabel>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="email">
          <FormLabel>Email Address</FormLabel>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <FormLabel>Password</FormLabel>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
              </Form.Group>
              
              <Form.Group className="my-2" controlId="cpassword">
          <FormLabel>Confirm Password</FormLabel>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button className="mt-3" type="submit" variant="primary">
          Sign Up
        </Button>

        <Row className="py-3">
          <Col>
            Already have a account ?<Link to="/login">Login</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default RegisterScreen;
