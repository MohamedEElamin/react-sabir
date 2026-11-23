import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./locales/i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HelmetProvider } from "react-helmet-async";

function reportWebVitals(metric) {
  console.log(metric);
}

const rootElement = document.getElementById("root");
const app = (
  <HelmetProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HelmetProvider>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app, {
    onRecoverableError(error, info) {
      console.error(
        `React hydration recovered from an error: ${error.message}\n${info.componentStack}`,
      );
    },
  });
} else {
  createRoot(rootElement).render(app);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
