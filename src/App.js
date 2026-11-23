import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import FounderProfile from "./components/FounderProfile";
import Services from "./components/Services";
import ArchitecturalServicePage from "./components/ArchitecturalServicePage";
import CivilEngineeringServicePage from "./components/CivilEngineeringServicePage";
import InteriorDesignServicePage from "./components/InteriorDesignServicePage";
import EngineeringProjectManagementPage from "./components/EngineeringProjectManagementPage";
import GeneralBuildingEngineeringPage from "./components/GeneralBuildingEngineeringPage";
import WarehouseModificationDrawingsPage from "./components/WarehouseModificationDrawingsPage";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import BlogArticle from "./components/BlogArticle";
import BlogIndex from "./components/BlogIndex";
import KhartoumRehabilitationArticle from "./components/KhartoumRehabilitationArticle";
import ClimateDesignArticle from "./components/ClimateDesignArticle";
import AreasIndex from "./components/AreasIndex";
import AreaPage from "./components/AreaPage";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
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
              <Route
                exact
                path="/founder-profile"
                element={<FounderProfile />}
              />
              <Route exact path="/services" element={<Services />} />
              <Route
                exact
                path="/services/architectural-engineering-consultancy"
                element={<ArchitecturalServicePage />}
              />
              <Route
                exact
                path="/services/civil-engineering-consultancy"
                element={<CivilEngineeringServicePage />}
              />
              <Route
                exact
                path="/services/interior-design-consultancy"
                element={<InteriorDesignServicePage />}
              />
              <Route
                exact
                path="/services/engineering-project-management"
                element={<EngineeringProjectManagementPage />}
              />
              <Route
                exact
                path="/services/general-building-engineering-consultancy"
                element={<GeneralBuildingEngineeringPage />}
              />
              <Route
                exact
                path="/ar/warehouse-factory-workshop-modification-drawings-sharjah"
                element={<WarehouseModificationDrawingsPage />}
              />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/faq" element={<FAQ />} />
              <Route exact path="/areas" element={<AreasIndex />} />
              <Route
                exact
                path="/areas/sharjah"
                element={<AreaPage slug="sharjah" />}
              />
              <Route
                exact
                path="/areas/ajman"
                element={<AreaPage slug="ajman" />}
              />
              <Route
                exact
                path="/areas/khartoum"
                element={<AreaPage slug="khartoum" />}
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
        <Footer />
        <WhatsAppFloat />
      </Router>
    </>
  );
}

export default App;
