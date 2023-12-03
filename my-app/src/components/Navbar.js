import React, {useState, useEffect} from 'react'; 
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'
import Container from 'react-bootstrap/container';  
import Login from './Login';
import Logout from './Logout';
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar';


const AppNavbar = () => {
    const [user, setUser] = useState(null);
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    // const clientId = "357711018945-8ef1v6dqlh9uudc148t8tbhfdi4avvac.apps.googleusercontent.com"
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
      
    return(
        <GoogleOAuthProvider clientId={clientId}>
            <div>
                <Navbar bg="#428CB8" expand="lg" sticky="top" variant="dark">
                <Container className="container-fluid">
                <Navbar.Brand className="brand" href="/">
                    <img src="/images/cropped.png" alt="brand logo" className="brandLogo" />
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
        </div>
    </GoogleOAuthProvider>
    )
}

export default AppNavbar;