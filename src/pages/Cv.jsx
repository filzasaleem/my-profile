// Cv.jsx
import React from 'react';
import '../Css/Cv.css'; // Import custom CSS for the CV layout

function Cv() {
  return (
    <>
    <div className="cv-container pt-5 mt-5 "
   >
      <div className="cv-header">
        <h1>Filza Saleem</h1>
        <p>Fullstack Developer</p>
        
      </div>

      <div className="cv-body">
        <section className="cv-section">
          <h2>Summary</h2>
          <p>
          I am a Full Stack Developer with previous academic background in embedded systems. The coding logic comes easy for me and I can easily learn new tech stacks. I’m ready to take on greater responsibilities in web development at a company that values dedication and fosters professional development.
          </p>
        </section>

        <section className="cv-section">
          <h2>Skills</h2>
          <ul className='mx-3'>
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
            <p>September 2024 - March 2025</p>
            <ul className='mx-3'>
              <li>Contributed to the development of three e-commerce platforms, focusing on performance marketing data, user interactions, and dynamic analytics.</li>
              <li>Integrated and utilized Amazon APIs to fetch and process real-time data.</li>
              <li>Designed and implemented multiple custom dashboards featuring visualisations such as pie charts, bar charts, and KPI metrics using tools like Highcharts.</li>
              <li> Made different tables using yajra datatables.</li>
              <li>Created many forms using formsData.</li>
              <li>Developed and maintained web applications using Jquery and Laravel.</li>
              <li>Developed various client-requested features under tight deadlines, ensuring high-quality and timely delivery.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>FullStack developer - Spirri.com</h3>
            <p>March 2024 - May 2024</p>
            <ul className='mx-3'>
                <li>Collaborated with another developer to integrate Stripe for secure payment processing.</li>
                <li>Developed and refined the login and registration pages to ensure a smooth user authentication experience.</li>
                <li>Implemented the retreat booking functionality, enabling users to schedule and confirm their bookings.</li>
                <li>Contributed to various smaller features across the site based on evolving project requirements.</li>
                <li> Gained a solid understanding of the website’s backend architecture to effectively support and extend its functionality.</li>
                <li>Build new features and improved existing.</li>
                <li>Worked closely with the founders to resolve bugs and improve performance.</li>
            </ul>
          </div>
        </section>
        <section className="cv-section">
          <h2>Academic Projects</h2>
          <div className="education-item">
            <h3>Final Project-ReShare</h3>
            <p>Technigo's boot camp(Javscript & React) <br></br>
            September 2023 - December 2023</p>
            <p>Final front end group project created in three weeks during technogo bootcamp javascript and react course.The Aim was to provide a technical solution for sustainable lifstyle. </p>
            <ul className='mx-3'>
              <li>Building Redux part of the project</li>
              <li>Routing of the project.</li>
              <li>worked on different features like search bar and filtering</li>
              <li>Designing of the project along with the team</li>
            </ul>
          </div>
          
        </section>

        <section className="cv-section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Javascript & React (Technigo bootcamp YH)</h3>
            <p>sept 2023 -  Dec 2023</p>
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
