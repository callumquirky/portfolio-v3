import React from "react";
import "../Footer/footer.css"

const Footer = () => {
    return(
        <footer className="text-center">
            <div className="container">
                <section className="mt-5">
                    <div className="row text-center d-flex justify-content-center">
                        <div className="col-4">
                                <a href="/">
                                    <h4 className="font-weight-bold">Home</h4>
                                </a>
                        </div>
                        <div className="col-4">
                                <a href="/projects">
                                    <h4 className="font-weight-bold">Projects</h4>
                                </a>
                        </div>
                        <div className="col-4">
                        <a href="/contact">
                            <h4 className="font-weight-bold">Contact</h4>
                        </a>
                        </div>
                    </div>
                </section>
                <section className="socials mb-5">
                    <a href="linkedin.com/in/callum-quirk-ba6269150">
                        <img className="footer-social" alt="Callum Quirk LinkedIn" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
                    </a>
                    <a href="https://github.com/callumquirky">
                        <img className="footer-social" alt="Callum Quirk Github" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                    </a>
                </section>
            </div>
        </footer>
    )
}

export default Footer;