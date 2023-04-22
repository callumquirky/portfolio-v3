import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./sidebar.css"

const Sidebar = () => {
    return(
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <FontAwesomeIcon icon={icon({name: 'house'})} className="navbar-icon"/>
                        <span className="nav-link-text">Home</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/projects">
                        <FontAwesomeIcon icon={icon({name: 'diagram-project'})} className="navbar-icon"/>
                        <span className="nav-link-text">Projects</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contacts">
                        <FontAwesomeIcon icon={icon({name: 'envelope'})} className="navbar-icon"/>
                        <span className="nav-link-text">Contact</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://linkedin.com/in/callum-quirk-ba6269150" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={icon({name: 'linkedin', style: 'brands'})} className="navbar-icon"/>
                        <span className="nav-link-text">LinkedIn</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/callumquirky" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={icon({name: 'github', style: 'brands'})} className="navbar-icon"/>
                        <span className="nav-link-text">GitHub</span>                        
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar