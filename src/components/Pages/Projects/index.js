import React from "react";
import Project from "../../Project";
import projectData from "./projectData.json"
import "../Projects/projects.css"

const Projects = () => {
    return(
        <div className="container pt-4">
            <div className="row">
                <h2 className="project-title">My work</h2>
                    <div className="col">
                        <div className="row featured-project">
                            <div className="col featured-project-text">
                                <h4>Web application that utilises JavaScript, jQuery, and Bootstrap to assist with meal planning. Search for dishes by ingredients, or search for ingredients by dishes! Add them to your mealplan (local storage functionality) to plan your week ahead.</h4>
                                <a href="https://docs.google.com/document/d/11_S0ckrd3R5XYFniTrEemF9NpIs1Agi6GJNB5BtYxs0/edit?usp=share_link" target="_blank" rel="noopener noreferrer">
                                    <button className="btn form-btn">Deployed Link</button>
                                </a>
                                <a href="https://github.com/callumquirky/whats-for-tea" target="_blank" rel="noopener noreferrer">
                                    <button className="btn form-btn">View Repo</button>
                                </a>
                            </div>
                            <div className="col">
                                <h3 className="text-center">What's For Tea!?</h3>
                                <img className="featured-project-img" alt="What's For Tea?" src="images/whats-for-tea.PNG"></img>
                            </div>
                        </div>
                    </div>
                    <hr className="rounded-divider"></hr>
                    <div className="col">
                        <div className="row project-row">
                            <Project
                            name={projectData[1].name}
                            image={projectData[1].image}
                            description={projectData[1].description}
                            deployedLink={projectData[1].deployedLink}
                            repoLink={projectData[1].repoLink}
                            />
                            <hr className="rounded-divider hide"></hr>
                            <Project
                            name={projectData[2].name}
                            image={projectData[2].image}
                            description={projectData[2].description}
                            deployedLink={projectData[2].deployedLink}
                            repoLink={projectData[2].repoLink}
                            />
                            <hr className="rounded-divider hide"></hr>
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
        </div>
    )
}


export default Projects;