function ProjectCard({title, description,link,techStacks}){
    return (
        <>
            <div className="projects-card p-4">
                <div>
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <div className="my-3">
                        {(techStacks || []).map((teckstack, index) => (
                            <div key={index} className="tech-stack py-1">{teckstack}</div>
                        ))}
                    </div>
                    <a href={link} rel="noopener noreferrer" className="btn mt-auto custom-links">
                        View Project
                    </a>
                   
                   
                </div>
            </div>
        </>
    );
}
export default ProjectCard;