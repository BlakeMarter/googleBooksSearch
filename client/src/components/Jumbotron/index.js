import React from "react";

function Jumbotron({ style, children }) {
  return (
    <div
      style={{ height: `${style}`, clear: "both", paddingTop: 20, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
