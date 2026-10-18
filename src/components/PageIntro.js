import React from "react";
import "../styles/PageLayout.css";

function PageIntro({ eyebrow, title, description }) {
  return (
    <header className="site-page-intro">
      <div className="site-page-inner">
        <p className="site-page-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="site-page-lead">{description}</p>}
      </div>
    </header>
  );
}

export default PageIntro;
