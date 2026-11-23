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
import { getLocalizedPath, ENGLISH_WAREHOUSE_PATH } from "./utils/localizedRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/founder-profile", element: <FounderProfile /> },
  { path: "/services", element: <Services /> },
  {
    path: "/services/architectural-engineering-consultancy",
    element: <ArchitecturalServicePage />,
  },
  {
    path: "/services/civil-engineering-consultancy",
    element: <CivilEngineeringServicePage />,
  },
  {
    path: "/services/interior-design-consultancy",
    element: <InteriorDesignServicePage />,
  },
  {
    path: "/services/engineering-project-management",
    element: <EngineeringProjectManagementPage />,
  },
  {
    path: "/services/general-building-engineering-consultancy",
    element: <GeneralBuildingEngineeringPage />,
  },
  {
    path: ENGLISH_WAREHOUSE_PATH,
    element: <WarehouseModificationDrawingsPage />,
  },
  { path: "/contact", element: <Contact /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/areas", element: <AreasIndex /> },
  { path: "/areas/sharjah", element: <AreaPage slug="sharjah" /> },
  { path: "/areas/ajman", element: <AreaPage slug="ajman" /> },
  { path: "/areas/khartoum", element: <AreaPage slug="khartoum" /> },
  { path: "/blog", element: <BlogIndex /> },
  {
    path: "/blog/building-approval-stages-sharjah-ajman",
    element: <BlogArticle />,
  },
  {
    path: "/blog/structural-rehabilitation-assessment-khartoum",
    element: <KhartoumRehabilitationArticle />,
  },
  {
    path: "/blog/seismic-environmental-structural-design-middle-east-east-africa",
    element: <ClimateDesignArticle />,
  },
];

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <main>
            <Routes>
              {publicRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
              {publicRoutes.map(({ path, element }) => (
                <Route
                  key={`ar-${path}`}
                  path={getLocalizedPath(path, "ar")}
                  element={element}
                />
              ))}
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
