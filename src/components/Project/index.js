import React from "react";



function Project(props){
    return(
        <div className="col-md-">
            <div className="img-container">
                <img alt={props.name} src={props.image}/>
            </div>
            <div className="project-content">
                <h4>
                    {props.name}
                </h4>
                <p>
                    {props.description}
                </p>
            <a className="btn" href={props.deployedLink}>
                View Deployed Link
            </a>
            <a className ="btn" href={props.repoLink}>
                View Repo
            </a>
            </div>

        </div>
    )
}

export default Project