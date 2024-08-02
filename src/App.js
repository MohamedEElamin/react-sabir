import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/services" element={<Services />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
