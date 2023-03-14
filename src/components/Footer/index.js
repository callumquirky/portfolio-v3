import React from "react";

const Footer = () => {
    return(
        <footer className="text-center">
            <div className="container">
                <section className="mt-5">
                    <div className="row text-center d-flex justify-content-center">
                        <div className="col-md-4">
                            <h6 className="font-weight-bold">
                                <a href="#">Home</a>
                            </h6>
                        </div>
                        <div className="col-md-4">
                            <h6 className="font-weight-bold">
                                <a href="#">Projects</a>
                            </h6>
                        </div>
                        <div className="col-md-4">
                            <h6 className="font-weight-bold">
                                <a href="#">Contact</a>
                            </h6>
                        </div>
                    </div>
                </section>
                <section className="text-center mb-5">
                    <a href="" class="text-white me-4">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="" class="text-white me-4">
                        <i class="fab fa-github"></i>
                    </a>
                </section>
            </div>
        </footer>
    )
}

export default Footer;