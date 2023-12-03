import { Routes, Route, Link } from "react-router-dom"; 
import { useState, useEffect, useCallback } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; 
import SavedTasks from './components/SavedTasks';
import './App.css';
import About from "./components/About";
import AppNavbar from "./components/Navbar";
import Home from "./components/Home"
 

function App() {
  const [content, setContent] = useState("");
  
  
  return (
  
    <div className="App">
      <AppNavbar/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
