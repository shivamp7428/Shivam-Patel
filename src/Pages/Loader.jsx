// Loader.jsx
import React from "react";
import "./Loader.css"; // We'll style the spinner here

function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  );
}

export default Loader;
