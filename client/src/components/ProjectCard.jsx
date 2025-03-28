import '../styles/ProjectCard.css'

const ProjectCard = ({project}) => {
    return ( 
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="projectCard-link">
            <div className="projectCard">
                <img src={project.image} alt="Project image" />
                <h4>{project.name}</h4>
                <p>{project.description}</p>
            </div>
        </a>
     );
}
 
export default ProjectCard;