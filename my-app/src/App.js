import { Routes, Route, Link } from "react-router-dom"; 
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useState, useEffect, useCallback } from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import FormPage from './components/Form'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar'; 
import SavedTasks from './components/SavedTasks';
import './App.css';

import About from "./components/About";
 



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
            <Nav.Link as={Link} to={"/about"}>
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
      <div className="Intro">
          <h1>Welcome to Ease!</h1>
          <p>With our AI tool, save time on daily errand running and plan your day with Ease.</p>
          <p>We take the guesswork out of your route so you can get your tasks done faster and have more time for you!</p>
          <h2>Your Day, Your Way!</h2>
      </div>
      <FormPage/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    </GoogleOAuthProvider>
  );
}

export default App;
