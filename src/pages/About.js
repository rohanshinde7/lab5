import React from 'react';
import './about.css';

function About() {
  return (
    <section id="about" className="container mt-5">
  <h2>About Me</h2>
  <div className="card mb-3" >
    
      
     
        <div className="card-body">
          <h5 className="card-title">Rohan Shinde</h5>
          <p className="card-text">
            Hi! I'm Rohan Shinde, a Personal Trainer, Fitness Coach, and Computer Science student.
            I have experience in software development, electrical & mechanical projects, and sports coaching.
            Passionate about full-stack development, automation, and building engaging applications.
          </p>
          <a href="./projects" className="btn btn-success">See My Projects</a>
        </div>
     
    
  
  </div>
</section>
  );
}

export default About;
