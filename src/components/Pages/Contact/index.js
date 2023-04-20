import Contact from "../../ContactCard";
import contactInformation from "../../ContactCard/contactInformation.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLinkedIn } from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {
    return(
        <div className="container">
            <h2>Let's get in touch:</h2>
            <div className="row">
                {/* <Contact 
                contactMethod={contactInformation[1].contactMethod}
                icon={contactInformation[1].icon}
                link={contactInformation[1].link}
                />
                <Contact 
                contactMethod={contactInformation[2].contactMethod}
                icon={contactInformation[2].icon}
                link={contactInformation[2].link}
                />
                <Contact 
                contactMethod={contactInformation[3].contactMethod}
                icon={contactInformation[3].icon}
                link={contactInformation[3].link}
                /> */}
                <div className="col-4 contact-card" >
                    <a href="tel:+447365913482">
                        <FontAwesomeIcon icon={faPhone} className="contact-icon"/>
                        <h4 className="contact-text">Phone</h4>
                    </a>
                </div>
                <div className="col-4 contact-card" >                 
                    <a href="mailto:callumbquirk@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon"/>
                        <h4 className="contact-text">Email</h4>
                    </a>
                </div>
                <div className="col-4 contact-card" >
                    <a href="linkedin.com/in/callum-quirk-ba6269150">
                        <img className="contact-icon" alt="Callum Quirk LinkedIn" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"/>
                        <h4 className="contact-text">LinkedIn</h4>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Contacts;