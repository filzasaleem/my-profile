
import projcts from '../data/projects.json';
import ProjectCard from '../components/ProjectCard';
import TypeWriterLoop from '../components/TypeWriterLoop';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-scroll';

function Home() {
    
    return (
   
  <div className='home-container'>
        {/* Full-screen centered intro section */}
        <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100 text-white"
        style={{backgroundColor: '#2D3250 '}}>
          <div className="px-4 py-4">
            <h1>Filza Saleem</h1>
            <p>fullstack developer.</p>
          </div>
          <TypeWriterLoop />
          <div className="animated-arrow position-absolute bottom-0 mb-4">
            <Link to="projects-section" smooth={true} duration={500}>
                <i className="bi bi-chevron-double-down"></i>
            </Link>
           </div>
        </div>
  
        {/* Projects Section */}
        <div id="projects-section" className="projects-container container mt-4 pb-5">
        <div className='text-center m-5 pb-2'><h2>My Projects</h2></div>
        <div className="middle-line mt-5"></div> 
        {projcts.map((project, index) => (
            <div className="row my-4" key={index}>
            {index % 2 === 0 ? (
                <>
                <div className=" col-md-6">
                    <ProjectCard 
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    techStacks={project.techStacks}
                    />
                </div>
                <div className="col-md-6"></div>
                </>
            ) : (
                <>
                <div className="col-md-6"></div>
                <div className="col-md-6">
                    <ProjectCard 
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    />
                </div>
             </>
      )}
    </div>
  ))}
</div>

        </div>
   
    );
  }
  


export default Home;