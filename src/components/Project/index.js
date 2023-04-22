import React from "react";
import '../Project/project.css'


function Project(props){
    return(
        <div className="col">
            <div className="project-container">
                <img className="card-img-top" alt={props.name} src={props.image}/>
                <div className="project-content">
                    <h4 className="project-text">
                        {props.name}
                    </h4>
                    <p className="project-text">
                        {props.description}
                    </p>
                <a className="btn" href={props.deployedLink} target="_blank" rel="noopener noreferrer">
                    Deployed Link
                </a>
                <a className="btn" href={props.repoLink}>
                    View Repo
                </a>
                </div>
            </div>
        </div>
    )
}

export default Project