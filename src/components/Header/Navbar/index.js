import React from "react";
import "../Navbar/navbar.css"

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Callum Quirk
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBurger" aria-controls="navBurger" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navBurger">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                            Home
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/projects">
                            Projects
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar