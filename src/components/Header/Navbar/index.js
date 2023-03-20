import React from "react";
import "../Navbar/navbar.css"

const Navbar = () => {
    return(
        <nav id="top-nav">
            <label className="logo">Callum Quirk</label>
            <ul className="top-nav-ul">
                <li ><a className="top-nav-link" href="/">Home</a></li>
                <li ><a className="top-nav-link" href="/projects">Projects</a></li>
                <li ><a className="top-nav-link" href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar