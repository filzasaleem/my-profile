function ProjectCard({title, description,link}){
    return (
        <>
            <div>
                <div>
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <a href="{link}" rel="noopener noreferrer" className="btn btn-primary mt-auto">
                        View Project
                    </a>
                </div>
            </div>
        </>
    );
}
export default ProjectCard;