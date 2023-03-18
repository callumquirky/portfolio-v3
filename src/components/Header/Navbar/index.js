import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faEnvelope, faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import "../Navbar/navbar.css"

const Navbar = () => {
    return(
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <FontAwesomeIcon icon={faHouse} className="navbar-icon"/>
                        <span className="nav-link-text">Home</span>
                    </a>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/projects">
                    <FontAwesomeIcon icon={faDiagramProject} className="navbar-icon"/>
                        <span className="nav-link-text">Projects</span>
                    </a>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/contact">
                        <FontAwesomeIcon icon={faEnvelope} className="navbar-icon"/>
                        <span className="nav-link-text">contact</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar