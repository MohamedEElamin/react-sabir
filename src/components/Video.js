import React from "react";
import "../styles/Cards.css";

const Video = () => {
  return (
    <div className="service-item">
      <iframe
        className="responsive-iframe"
        src="https://www.youtube-nocookie.com/embed/emfDT0clNzU?si=BvjVS1JD3f-PYnB0"
        title="YouTube video"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
