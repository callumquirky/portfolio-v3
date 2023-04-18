import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faEnvelope, faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import "../About/about.css"

const About = () => {
    return(
        <div className="about-container">
            <div className="row">
                <div className="col">
                    <img className="about-container-img" alt ="Portrait of me" src="images/me-pic.jpg"></img>
                </div>
                <div className="col about-container-text">
                    <h2>Callum Quirk</h2>
                    <h3>UK based front-end developer. Passionate about responsive design, creative interactivity, and efficient solutions.</h3>
                    <div className="about-container-links">
                        <button><h4>Download CV</h4></button>
                        <a href="linkedin.com/in/callum-quirk-ba6269150">
                            <img className="about-container-icon" alt="Callum Quirk LinkedIn" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
                        </a>
                        <a href="https://github.com/callumquirky">
                            <img className="about-container-icon" alt="Callum Quirk Github" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;