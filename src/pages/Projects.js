import React from 'react';
import './projects.css';

function Projects() {
  return (
  

    <>
          <section id="projects" className="container mt-5">
           <h2>Projects</h2>
          <ul>
              <li>Full-Stack Tours & Travel Website (Java + MySQL + JFrame)</li>
            <li>Jovian Careers Website (Python, Flask, MySQL)</li>
             <li>Automated Puzzle Solver (Arduino + Mechanical Systems)</li>
            <li>Automated Fish Tank Temperature Controller (Arduino)</li>
            </ul>
         </section>
          <section id="certifications" className="container mt-5">
              <h2>Certifications</h2>
              <ul className="list-group mb-3">
                  <li className="list-group-item">Google Digital Marketing (2020)</li>
                  <li className="list-group-item">ACSM Certified Personal Trainer (2022)</li>
                  <li className="list-group-item">Udemy Power BI (2025)</li>
              </ul>
          </section><section id="skills" className="container mt-5">
              <h2>Technical & Analytical Skills</h2>
              <div className="card mb-3">
                  <div className="card-body">
                      <h5 className="card-title">Business Analysis & Data</h5>
                      <p className="card-text">Requirement gathering, process mapping, data validation, reporting</p>
                      <h5 className="card-title mt-3">Programming & BI Tools</h5>
                      <p className="card-text">SQL, Python, Java, Power BI, WordPress, Excel</p>
                      <h5 className="card-title mt-3">Project & Collaboration Tools</h5>
                      <p className="card-text">JIRA, GitHub, Confluence, Azure DevOps</p>
                      <h5 className="card-title mt-3">Networking & Security</h5>
                      <p className="card-text">Wireshark, Zenmap (Nmap GUI), TCP/IP fundamentals</p>
                      <h5 className="card-title mt-3">Concepts</h5>
                      <p className="card-text">Agile (Scrum, Kanban), statistical analysis, dashboarding</p>
                  </div>
              </div>
          </section><section id="projects" className="container mt-5">
              <h2>Project Experience</h2>
              <div className="accordion" id="projectsAccordion">

                  <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#projectOne" aria-expanded="false" aria-controls="projectOne">
                              Business Process Improvement – Coursework Project
                          </button>
                      </h2>
                      <div id="projectOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#projectsAccordion">
                          <div className="accordion-body">
                              <ul>
                                  <li>Documented workflows and created process maps to identify inefficiencies.</li>
                                  <li>Gathered requirements from team members and translated them into actionable improvements.</li>
                                  <li>Designed mock dashboards in Power BI to visualize KPIs and support decision-making.</li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#projectTwo" aria-expanded="false" aria-controls="projectTwo">
                              Machine Learning Football Prediction Model
                          </button>
                      </h2>
                      <div id="projectTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#projectsAccordion">
                          <div className="accordion-body">
                              <ul>
                                  <li>Built a Python-based ML model for EPL outcome predictions using Pandas, NumPy, and Matplotlib.</li>
                                  <li>Documented system requirements and results for both technical and non-technical stakeholders.</li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#projectThree" aria-expanded="false" aria-controls="projectThree">
                              ESCOM Wiki (React, PHP, MySQL)
                          </button>
                      </h2>
                      <div id="projectThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#projectsAccordion">
                          <div className="accordion-body">
                              <ul>
                                  <li>Developed a role-based academic platform with authentication and optimized SQL queries.</li>
                                  <li>Collaborated with peers using Agile sprints and tracked requirements via JIRA.</li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#projectFour" aria-expanded="false" aria-controls="projectFour">
                              DDoS Attack Simulation – Intro to InfoSec Project
                          </button>
                      </h2>
                      <div id="projectFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#projectsAccordion">
                          <div className="accordion-body">
                              <ul>
                                  <li>Simulated and analyzed DDoS scenarios with Wireshark and Zenmap, focusing on IP/TCP traffic.</li>
                                  <li>Translated technical findings into clear documentation for team reports.</li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFive">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#projectFive" aria-expanded="false" aria-controls="projectFive">
                              PHP Forum
                          </button>
                      </h2>
                      <div id="projectFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#projectsAccordion">
                          <div className="accordion-body">
                              <ul>
                                  <li>Created a forum with authentication, responsive UI, and a structured database schema.</li>
                                  <li>Practiced requirement gathering and testing for usability.</li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  <div className="accordion-item">
                      <h2 className="accordion-header" id="headingSix">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#projectSix" aria-expanded="false" aria-controls="projectSix">
                              Football Database – SQL Project
                          </button>
                      </h2>
                      <div id="projectSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#projectsAccordion">
                          <div className="accordion-body">
                              <ul>
                                  <li>Designed schema for major football leagues and optimized SQL queries for reporting.</li>
                                  <li>Applied data validation and business logic checks to ensure data accuracy.</li>
                              </ul>
                          </div>
                      </div>
                  </div>

              </div>
          </section></>
  );
}

export default Projects;
