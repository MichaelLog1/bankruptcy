import React from "react";
import './App.css';
import TopNav from "./Components/TopNav";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import "./App.css"
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div>
      <Router>
        <TopNav></TopNav>
            <Routes>
                <Route exact path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Signup" element={<Signup />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
