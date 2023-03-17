import React from "react";
import "../Footer/footer.css"

const Footer = () => {
    return(
        <footer className="text-center">
            <div className="container">
                <section className="mt-5">
                    <div className="row text-center d-flex justify-content-center">
                        <div className="col-4">
                            <h6 className="font-weight-bold">
                                <a href="/">Home</a>
                            </h6>
                        </div>
                        <div className="col-4">
                            <h6 className="font-weight-bold">
                                <a href="/projects">Projects</a>
                            </h6>
                        </div>
                        <div className="col-4">
                            <h6 className="font-weight-bold">
                                <a href="/contact">Contact</a>
                            </h6>
                        </div>
                    </div>
                </section>
                <section className="socials mb-5">
                    <a href="linkedin.com/in/callum-quirk-ba6269150" class="text-white me-4">
                        <img className="footer-social" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
                    </a>
                    <a href="https://github.com/callumquirky" class=" me-4">
                        <img className="footer-social" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                    </a>
                </section>
            </div>
        </footer>
    )
}

export default Footer;