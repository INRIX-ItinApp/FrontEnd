import { Routes, Route, Link } from "react-router-dom"; 
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useState, useEffect, useCallback } from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar'; 
import SavedTasks from './components/SavedTasks';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
 



function App() {
  const [user, setUser] = useState(null);
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const [content, setContent] = useState("");
  
  useEffect(() => {
    let loginData = JSON.parse(localStorage.getItem("login"));
    if (loginData) {
      let loginExp = loginData.exp;
      let now = Date.now()/1000;
      if (now < loginExp) {
        // Not expired
        setUser(loginData);
      } else {
        // Expired
        localStorage.setItem("login", null);
      }
    }
  }, []);
  
  return (
    <GoogleOAuthProvider clientId={clientId}>
    <div className="App">
      <Navbar bg="#428CB8" expand="lg" sticky="top" variant="dark">
        <Container className="container-fluid">
        <Navbar.Brand className="brand" href="/">
          <img src="/images/cropped.png" alt="itin logo" className="itinLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ml-auto">
            <Nav.Link as={Link} to={"/home"}>
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to={"/saved"}>
              ABOUT
            </Nav.Link>
            {
              user &&
              <Nav.Link as={Link}  to={"/saved"}>
                Saved
              </Nav.Link>
            }
          </Nav>
          { user ? (
            <Logout setUser={setUser} />
          ) : (
            <Login setUser={setUser} />
          )}
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path={"/"} element={
          <SavedTasks />}
          />
      </Routes>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicTask">
        <Form.Label>Task 1</Form.Label>
        <Form.Control 
              type="task1" 
              placeholder="Enter an Errand"
              required
              value ={ content } />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTask2">
        <Form.Label>Task 2</Form.Label>
        <Form.Control type="task2" placeholder="Enter Another Errand" />
      </Form.Group>
      <Button variant="light" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </GoogleOAuthProvider>
  );
}

export default App;
