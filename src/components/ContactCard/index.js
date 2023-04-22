import React from "react";
import '../Pages/Contact/contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact(props) {
    return(
        <div className="col" href={props.link}>
            <a>
                <FontAwesomeIcon icon={props.icon} />
                <h4 className="contact-text">{props.contactMethod}</h4>
            </a>
        </div>
    )
}

export default Contact;