import { useState, useEffect } from 'react';
import '../styles/Projects.css'
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([])

    const testProjects = [
        {name: "HCA Google Cloud Portal", description: "This is a description of the project. It will likely be several lines long and give a short summary of the project", link: 'https://github.com/UA-MIS/HCA-S25', image: './src/assets/projects/HCAImg.PNG'},
        {name: "ForzaTrack", description: "This is a description of the project. It will likely be several lines long and give a short summary of the project", link: 'https://forzatrack.vercel.app/', image: './src/assets/projects/ForzaTrackImg.PNG'},
        {name: "Squared Icon Theme", description: "This is a description of the project. It will likely be several lines long and give a short summary of the project", link: 'https://marketplace.visualstudio.com/items?itemName=glsaacke.squared-icon-theme', image: './src/assets/projects/SquaredImg2.PNG'},  
    ]

    useEffect(() => {
        setProjects(testProjects)
    }, [])

    return ( 
        <div className="projects-container">
            <div className="projects-content container">
                <h2 className='col-12'>Projects</h2>
                <div className="projects-projects row">
                    {projects.map((project) => (
                            <div className="projectCard-container col-12 col-md-4">
                                <ProjectCard project={project}/> 
                            </div>
                            ))}
                </div>
            </div>
            <div className="projects-bg"></div>
        </div>
     );
}
 
export default Projects;