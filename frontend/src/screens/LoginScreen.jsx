import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { Form, Button, Row, Col, FormLabel } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useLoginMutation } from "../slices/userApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify"
import Loader from "../components/Loader";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation();

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userInfo) {
            navigate('/');
        }
    }, [navigate, userInfo])

  const submitHandler = async (e) => {
      e.preventDefault();
      try {
          const res = await login({ email, password }).unwrap();
          dispatch(setCredentials({...res}))
          navigate('/')
      } catch (err) {
          toast.error(err.data.message || err.error);
      }
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>

      <Form onSubmit={submitHandler}>
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
        
        { isLoading && <Loader /> }
              <Button className="mt-3" type='submit' variant="primary">Sign In</Button>

              <Row className="py-3">
                  <Col>
                  New Customer ?<Link to='/register'>Regsiter</Link></Col>
              </Row>
      </Form>
    </FormContainer>
  );
};

export default LoginScreen;