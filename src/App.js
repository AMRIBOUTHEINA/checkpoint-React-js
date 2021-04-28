
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { facebookloginbutton } from "react-social-login-buttons";
  function App() {
  return (
    <Form className="App">
      <h1><span className="font-weight-bold">mywebsite</span>.com</h1>
      <h2>Hello</h2>

      <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
   <Button className="btn-lg btn-dark btn-block">Log in
   </Button> 
   <div className="text-center pt-3">or continue with your social acount</div>
   <Button className="BTN1">FOFGET MY Password</Button>
   <Button className="BTN2">LOGIN UP</Button>
      </Form>
  );
}


export default App;

