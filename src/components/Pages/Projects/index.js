import React from "react";
import Project from "../../Project";
import projectData from "./projectData.json"

const Projects = () => {
    return(
        <div className="container">
            <div className="row">
                <Project 
                name={projectData[0].name}
                image={projectData[0].image}
                description={projectData[0].description}
                deployed-link={projectData[0].deployedLink}
                repo-link={projectData[0].repoLink}
                />
                <Project 
                name={projectData[1].name}
                image={projectData[1].image}
                description={projectData[1].description}
                deployed-link={projectData[1].deployedLink}
                repo-link={projectData[1].repoLink}
                />
                <Project 
                name={projectData[2].name}
                image={projectData[2].image}
                description={projectData[2].description}
                deployed-link={projectData[2].deployedLink}
                repo-link={projectData[2].repoLink}
                />
                <Project 
                name={projectData[3].name}
                image={projectData[3].image}
                description={projectData[3].description}
                deployed-link={projectData[3].deployedLink}
                repo-link={projectData[3].repoLink}
                />
                <Project 
                name={projectData[4].name}
                image={projectData[4].image}
                description={projectData[4].description}
                deployed-link={projectData[4].deployedLink}
                repo-link={projectData[4].repoLink}
                />
                <Project 
                name={projectData[5].name}
                image={projectData[5].image}
                description={projectData[5].description}
                deployed-link={projectData[5].deployedLink}
                repo-link={projectData[5].repoLink}
                />
            </div>
        </div>
    )
}


export default Projects;