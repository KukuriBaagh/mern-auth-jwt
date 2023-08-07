import React from 'react'
import { Container, Card, Button } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'

const Hero = () => {
  return (
    <div>
      <div className='py-5'>
          <Container>
              <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
              <h1 className='text-center mb-4'>MERN Authentication</h1>
              <p className='text-center mb-4'>
                  This is a boilerplate for MERN authentication that sotres a JWT in anHTTP-Only cookie. It also uses Redux Toolkit and the React Bootstrap Library
                  </p>
                      <div className="d-flex">
                      
                         <LinkContainer to='/login'><Button variant='primary' className='me-3'>Sign In</Button></LinkContainer>
                      
                         <LinkContainer to='/register'><Button variant='secondary'>Sign Up</Button></LinkContainer>
                  </div>
      </Card>
          </Container>
    </div>
    </div>
  )
}



export default Hero
