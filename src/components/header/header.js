import React from "react";

function Header() {
  return (
    <header className="bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="display-4 fw-bold">Hi, I'm Rohan Shinde</h1>
        <p className="lead">Developer • Personal Trainer • Fitness Coach • Engineer</p>
        <a href="#projects" className="btn btn-light btn-lg mt-3">View My Work</a>
      </div>
    </header>
  );
}

export default Header;
