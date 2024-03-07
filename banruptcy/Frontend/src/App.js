import React from "react";
import TopNav from "./Components/TopNav";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";


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
