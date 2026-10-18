import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./locales/i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./locales/i18n";
// import i18n (needs to be bundled ;))
import "./locales/i18n";
import { HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";

function reportWebVitals(metric) {
  console.log(metric);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,<React.StrictMode></React.StrictMode>
  </HelmetProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
