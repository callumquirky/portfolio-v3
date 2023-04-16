import React from "react";
import Project from "../../Project";
import projectData from "./projectData.json"
import "../Projects/projects.css"

const Projects = () => {
    return(
        <div className="container pt-4">
            <div className="row">
                <h2>My work</h2>
                    <div className="col">
                    <h3 className="float-right">Featured project:</h3>
                        <div className="row">
                        <div className="col featured-project-text">
                                <h4>Web application that utilises JavaScript, jQuery, and Bootstrap to assist with meal planning. Search for dishes by ingredients, or search for ingredients by dishes! Add them to your mealplan (local storage functionality) to plan your week ahead.</h4>
                            </div>
                            <div className="col">
                                <h3 className="text-center">What's For Tea!?</h3>
                                <img className="featured-project-img" alt="What's For Tea?" src="images/whats-for-tea.PNG"></img>
                            </div>
                        </div>
                    </div>
                    <div className="row project-row">
                        <Project
                        name={projectData[1].name}
                        image={projectData[1].image}
                        description={projectData[1].description}
                        deployedLink={projectData[1].deployedLink}
                        repoLink={projectData[1].repoLink}
                        />
                        <Project
                        name={projectData[2].name}
                        image={projectData[2].image}
                        description={projectData[2].description}
                        deployedLink={projectData[2].deployedLink}
                        repoLink={projectData[2].repoLink}
                        />
                        <Project
                        name={projectData[3].name}
                        image={projectData[3].image}
                        description={projectData[3].description}
                        deployedLink={projectData[3].deployedLink}
                        repoLink={projectData[3].repoLink}
                        />
                    </div>
            </div>
        </div>
    )
}


export default Projects;