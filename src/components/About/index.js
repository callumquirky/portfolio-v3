import React from "react";

import "../About/about.css"

const About = () => {
    return(
        <div className="row about-container">
            <div className="col">
                <img className="about-container-img" alt ="Portrait of me" src="images/me-pic.jpg"></img>
            </div>
            <div className="col about-container-text">
                <h2>Callum Quirk</h2>
                <h3>UK based front-end developer. Passionate about responsive design, creative interactivity, and efficient solutions.</h3>
                <div className="about-container-links">
                    <a href="https://docs.google.com/document/d/1qEh_jq1Gcpof595ilw02Mf3mQodTddDDIx3u0GoPk6s/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <button className="btn form-btn">View CV</button>
                    </a>
                    <a href="https://linkedin.com/in/callum-quirk-ba6269150" target="_blank" rel="noopener noreferrer">
                        <img className="about-container-icon" alt="Callum Quirk LinkedIn" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
                    </a>
                    <a href="https://github.com/callumquirky" target="_blank" rel="noopener noreferrer">
                        <img className="about-container-icon" alt="Callum Quirk Github" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;