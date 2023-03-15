import React from "react";

function Project(props){
    return(
        <div className="col-md-">
            <div className="img-container">
                <img alt={props.className} src={props.image}/>
            </div>
            <div className="project-content">
                <h4>
                    {props.name}
                </h4>
                <p>
                    {props.description}
                </p>
            <a href={props.deployedLink}>
                <button className="btn">View Repo</button>
            </a>
            <a href={props.repoLink}>
            <button className="btn">View Deployed Link</button>
            </a>
            </div>

        </div>
    )
}

export default Project