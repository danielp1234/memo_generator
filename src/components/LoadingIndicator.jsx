// src/components/LoadingIndicator.jsx
import React from "react";

function LoadingIndicator() {
  return (
    <div className="loading-indicator">
      <div className="spinner"></div>
      <p>Generating memorandum... This may take 3 to 10 minutes.</p>
    </div>
  );
}

export default LoadingIndicator;
