import React from 'react'
import { Button } from 'react-bootstrap';
import { googleLogout } from '@react-oauth/google';


// const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Logout({ setUser }) {

  const onSuccess = () => {
    googleLogout();  // helper for logging out
    setUser(null);
    localStorage.setItem("login", null);  // clearing local storage
    console.log('Logout made successfully');
  };

  return (       
    <div>
      <Button variant='success' onClick={onSuccess}>Logout</Button>
    </div>
  );
}

export default Logout;