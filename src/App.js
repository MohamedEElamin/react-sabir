import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import BlogArticle from "./components/BlogArticle";
import BlogIndex from "./components/BlogIndex";
import KhartoumRehabilitationArticle from "./components/KhartoumRehabilitationArticle";
import ClimateDesignArticle from "./components/ClimateDesignArticle";
import VideoWatchPage from "./components/VideoWatchPage";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

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
              <Route exact path="/faq" element={<FAQ />} />
              <Route
                exact
                path="/videos/modern-villa-design"
                element={<VideoWatchPage />}
              />
              <Route exact path="/blog" element={<BlogIndex />} />
              <Route
                exact
                path="/blog/building-approval-stages-sharjah-ajman"
                element={<BlogArticle />}
              />
              <Route
                exact
                path="/blog/structural-rehabilitation-assessment-khartoum"
                element={<KhartoumRehabilitationArticle />}
              />
              <Route
                exact
                path="/blog/seismic-environmental-structural-design-middle-east-east-africa"
                element={<ClimateDesignArticle />}
              />
            </Routes>
          </main>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
