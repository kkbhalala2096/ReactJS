import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarC from './NavbarC';
import action from '../Actions/action';
import { useDispatch } from 'react-redux';

const Registration = () => {

  let [rname, setRname] = useState("");
  let [rlname, setRlname] = useState("");
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [image, setImage] = useState("");

  let dispatch = useDispatch();

  let concat = rname.concat(' ', rlname)

  const addUser = () => {
    if (rname === "" || rlname === "" || email === "" || pass === "" || image === "") {
      console.log("Please Enter All The data");
    }
    else {
      console.log(concat);
      dispatch(action.createUser({
        name: concat,
        email: email,
        password: pass,
        Image: image,
      }))
      setRname("");
      setRlname("");
      setEmail("");
      setPass("");
      setImage("");
    }
  }

  return (
    <>
      <NavbarC />
      <Container>
        <div className="d-flex justify-content-center align-items-center my-2" style={{ height: "90vh" }}>
          <Form className='bg-light rounded p-4 shadow-lg border border-dark' style={{ width: "450px" }}>
            <div className="text-bg-primary rounded-3">
              <h1 className='text-center mb-4 p-2'>Registration</h1>
            </div>
            <div className="d-flex justify-content-between">
              <Form.Group >
                <Form.Control type='text' placeholder='First Name' value={rname} onChange={(e) => setRname(e.target.value)} className='border-dark' style={{ width: "190px" }} required></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control type='text' placeholder='Last Name' value={rlname} onChange={(e) => setRlname(e.target.value)} className='border-dark' style={{ width: "190px" }} required></Form.Control>
              </Form.Group>
            </div>
            <Form.Group className="my-3">
              <Form.Control type='Email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='border-dark' required></Form.Control>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Control type='password' placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} className='border-dark' required></Form.Control>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Control type='text' placeholder='Image URL' value={image} onChange={(e) => setImage(e.target.value)} className='border-dark' required></Form.Control>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" className='fw-bold my-3 rounded py-1 px-5' onClick={() => addUser()}>Registration</Button>
            </div>
            <Link to="/Login" className="nav-link text-center text-primary">
              <u className='fw-semibold' style={{ textDecoration: "none" }}>Already have an account?</u>
            </Link>
          </Form>
        </div>
      </Container>
    </>
  )
}

export default Registration