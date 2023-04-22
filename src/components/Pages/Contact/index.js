import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import "../Contact/contact.css"

const Contacts = () => {
    return(
        <div className="container pt-4 contact-head">
            <h2 id="contact-title">Let's get in touch</h2>
            <div class="col-lg-6 text-center contact-form">
                <form  name="contact" netlify>
                    <input type="text" name="name" className="form-control form-control-lg" placeholder="Name"/>
                    <input type="email" name="email" className="form-control mt-3" placeholder="Email"/>
                    <input type="text" name="subject" className="form-control mt-3" placeholder="Subject"/>
                    <div class="mb-3 mt-3">
                        <textarea class="form-control" rows="5" id="comment" name="text" placeholder="Your message"></textarea>
                    </div>
                </form>
                <button type="button" className="btn mt-3 form-btn">Contact Me</button>
            </div>

            <div className="row contact-column">
                <div className="col-4 contact-card" >
                    <a href="tel:+447365913482">
                        <FontAwesomeIcon icon={icon({name: 'phone'})} className="contact-icon"/>
                        <h4 className="contact-text">Phone</h4>
                    </a>
                </div>
                <div className="col-4 contact-card" >                 
                    <a href="mailto:callumbquirk@gmail.com">
                        <FontAwesomeIcon icon={icon({name: 'envelope'})} className="contact-icon"/>
                        <h4 className="contact-text">Email</h4>
                    </a>
                </div>
                <div className="col-4 contact-card" >
                    <a href="linkedin.com/in/callum-quirk-ba6269150">
                        <FontAwesomeIcon icon={icon({name: 'linkedin', style: 'brands'})} className="contact-icon"/>
                        <h4 className="contact-text">LinkedIn</h4>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Contacts;