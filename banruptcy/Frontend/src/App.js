import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import "./App.css"

// import all of the pages for the routes
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard"
import Form from "./pages/Form/Form"

function App() {
  return (
    <div>
      <Router>
            <Routes>
                {/* Define routes with endpoints */}
                <Route exact path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Signup" element={<Signup />}/>
                <Route path ="/Dashboard/User" element={<Dashboard />}/>
                <Route path ="/Dashboard/Form" element={<Form />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
