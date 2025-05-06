function ProjectCard({title, description,link,techStacks,gitLink}){
    return (
        <>
            <div className="projects-card p-4">
                <div>
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <div className="my-3">
                        {techStacks?.map((teckstack, index) => (
                            <div key={index} className="tech-stack py-1">{teckstack}</div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-between mt-auto w-100 flex-wrap">
  <a 
    href={link} 
    rel="noopener noreferrer" 
    className="btn custom-links btn-sm btn-md"
  >
    <i className="bi bi-globe me-2"></i>Live demo
  </a>
  <a 
    href={gitLink} 
    rel="noopener noreferrer" 
    className="btn custom-links btn-sm btn-md"
  >
    <i className="bi bi-github me-2"></i>View the code
  </a>
</div>

                   
                </div>
            </div>
        </>
    );
}
export default ProjectCard;