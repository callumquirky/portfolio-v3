import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faEnvelope, faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css"

const Sidebar = () => {
    return(
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <FontAwesomeIcon icon={faHouse} className="navbar-icon"/>
                        <span className="nav-link-text">Home</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/projects">
                    <FontAwesomeIcon icon={faDiagramProject} className="navbar-icon"/>
                        <span className="nav-link-text">Projects</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact">
                        <FontAwesomeIcon icon={faEnvelope} className="navbar-icon"/>
                        <span className="nav-link-text">Contact</span>
                    </a>
                </li>
                <li className="nav-item social">
                    <a className="nav-link" href="linkedin.com/in/callum-quirk-ba6269150">
                        <img className="navbar-icon" alt="Callum Quirk LinkedIn" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"/>
                        <span className="nav-link-text">LinkedIn</span>
                    </a>
                </li>
                <li className="nav-item social">
                    <a className="nav-link" href="https://github.com/callumquirky">
                        <img className="navbar-icon" alt="Callum Quirk Github" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"/>
                        <span className="nav-link-text">GitHub</span>                        
                    </a>
                </li>
                
            </ul>
        </nav>
    )
}

export default Sidebar