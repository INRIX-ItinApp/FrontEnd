import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SavedTasks from "./components/SavedTasks";
import "./App.css";
import About from "./components/About";
import AppNavbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Mapbox from "./components/Mapbox";
import LocationContextProvider from "./context/positionContext";

function App() {
  const [content, setContent] = useState("");

  return (
    <div className="App">
      <AppNavbar />
      <LocationContextProvider>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Mapbox" element={<Mapbox />} />
      </Routes>
      </LocationContextProvider>
      <Footer />
    </div>
  );
}

export default App;
