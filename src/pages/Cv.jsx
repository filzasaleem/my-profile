// Cv.jsx
import React from 'react';
import '../Css/Cv.css'; // Import custom CSS for the CV layout

function Cv() {
  return (
    <>
    <div className="flying-text">
      Welcome to My CV
    </div>
    <div className="cv-container pt-5 mt-5"
   >
      <div className="cv-header">
        <h1>Filza Saleem</h1>
        <p>Fullstack Developer</p>
        
      </div>

      <div className="cv-body">
        <section className="cv-section">
          <h2>Summary</h2>
          <p>
            A highly skilled full-stack developer with experience in web
            development, database and management. Proficient in
            modern front-end technologies and back-end frameworks, committed to
            delivering high-quality software solutions.
          </p>
        </section>

        <section className="cv-section">
          <h2>Skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>API's</li>
            <li>jQuery</li>
            <li>HTML, CSS</li>
            <li>Mysql</li>
            <li>MongoDB</li>
            <li>Git</li>
          </ul>
        </section>

        <section className="cv-section">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Fullstack Developer - 5point12.com</h3>
            <p>september 2024  - March 2025</p>
            <ul>
              <li>Developed and maintained web applications using Jquery and Laravel.</li>
              <li>Collaborated with the design team to improve UI/UX of the application.</li>
              <li>Optimized application performance and ensured cross-browser compatibility.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>FullStack developer - Spirri.com</h3>
            <p>March 2024 - May 2024</p>
            <ul>
              <li>Build new features and improved existing.</li>
              <li>Worked closely with the founders to resolve bugs and improve performance.</li>
            </ul>
          </div>
        </section>
        <section className="cv-section">
          <h2>Acedmic projects</h2>
          <div className="education-item">
            <h3>Final Project-ReShare</h3>
            <p>Technigo's boot camp(Javscript & React) <br></br>
            september 2023 - December 2024</p>
            <p>Final front end group project created in three weeks during technogo bootcamp javascript and react course.The Aim was to provide a technical solution for sustainable lifstyle. </p>
            <ul>
              <li> - Building Redux part of the project</li>
              <li> - Routing of the project.</li>
              <li> -  worked on different features like search bar and filtering</li>
              <li> - Designing of the project along with the team</li>
            </ul>
          </div>
          
        </section>

        <section className="cv-section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Javascript & React (Technigo bootcamp YH)</h3>
            <p>sept 2024 -  Dec 2024</p>
          </div>
          <div className="education-item">
            <h3>Master’s in Embedded System</h3>
            <p>Uppsala University  - 2014-2017</p>
          </div>
        </section>
      </div>

     
    </div>
    </>
  );
}

export default Cv;
