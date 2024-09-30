import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-5 p-3">
        <h1>Technology</h1>
        <h5 className="text-muted mt-2">
          Sleek, modern, and intuitive trading platforms
        </h5>
        <p className="mt-4">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings <span>→</span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
