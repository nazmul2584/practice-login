import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css';
import app from './firebase.init';
import {createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from 'react';
const auth = getAuth(app)

function App() {
const [email,setemail] =useState('');
const [password,setpassword] = useState('')

  const handleemail = event=>{
    setemail(event.target.value)
  }

  const handlepassword = event =>{
    setpassword(event.target.value)
  }
 const handlesubmit = event =>{
  createUserWithEmailAndPassword(auth,email,password)
  .then(result=>{
    const user = result.user;
    console.log(user);
  })
  .catch(error=>{
    console.error(error);
  })
  event.preventDefault();
 }
  return (
    <div >
     
     <div className="registration w-50 mx-auto mt-5">
     <h2 className='text-primary'>please ragister</h2>
     <Form onSubmit={handlesubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onBlur={handleemail} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onBlur={handlepassword} type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
     </div>
    </div>
  );
}

export default App;
