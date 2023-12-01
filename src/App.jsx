import React from "react";
import Form from "./Form";
import Signin from "./Signin";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navbar />} />
        <Route exact path="/mw_ass/" element={<Navbar />} />
        <Route exact path="/mw_ass/Home" element={<Home />} />
        <Route exact path="/mw_ass/Form" element={<Form />} />
        <Route exact path="/mw_ass/Signin" element={<Signin />} />
        {/* <Route path="/*" element={<Navbar />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
