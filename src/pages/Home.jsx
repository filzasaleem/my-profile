
import projcts from '../data/projects.json';
import ProjectCard from '../components/ProjectCard';
import TypeWriterLoop from '../components/TypeWriterLoop';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
    
    return (
   
  <>
        {/* Full-screen centered intro section */}
        <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
          <div className="px-4 py-4">
            <h1>Filza Saleem</h1>
            <p>fullstack developer.</p>
          </div>
          <TypeWriterLoop />
          <div className="animated-arrow position-absolute bottom-0 mb-4">
                <i className="bi bi-chevron-double-down move-down" ></i>
           </div>
        </div>
  
        {/* Projects Section */}
        <div className="projects-container container mt-4 pb-5">
          <div className="row justify-content-center">
            {projcts.map((project, index) => (
              <div
                className="col-md-5 mb-4 border border-light mx-2 p-4 rounded-4 bg-secondary"
                key={index}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </div>
        </>
   
    );
  }
  


export default Home;