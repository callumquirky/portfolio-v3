import Contact from "../../ContactCard";
import contactInformation from "../../ContactCard/contactInformation.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLinkedIn } from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {
    return(
        <div className="container pt-4 contact-head">
            <h2 id="contact-title">Let's get in touch</h2>
            <div class="col-lg-6">
                <form name="contact" netlify>
                    <input type="text" class="form-control form-control-lg" placeholder="Name"/>
                    <input type="email" class="form-control mt-3" placeholder="Email"/>
                    <input type="text" class="form-control mt-3" placeholder="Subject"/>
                    <div class="mb-3 mt-3">
                        <textarea class="form-control" rows="5" id="comment" name="text" placeholder="Project Details"></textarea>
                    </div>
                </form>
                <button type="button" class="btn btn-success mt-3">Contact Me</button>
            </div>

            <div className="row contact-column">
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