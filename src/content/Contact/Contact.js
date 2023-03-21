import React from "react";
import { useState, useEffect, useRef } from "react";

import "./contact.scss";

import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    const [isReveal, setIsReveal] = useState(false);
    const contactRef = useRef(null);

    useEffect(() => {
        const revealAbout = () => {
            const contactTop = contactRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (contactTop < windowHeight * 0.8) {
                setIsReveal(true);
            } else {
                setIsReveal(false);
            }
        };

        revealAbout();

        const handleScroll = () => {
            revealAbout();
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="contact" id="contact">
            <div className="contact__container " ref={contactRef}>
                <div className="contact__title">
                    <div className={`contact__overlay ${isReveal ? "reveal" : ""} `}></div>
                    <h1>Contact</h1>
                </div>
                <div className={`contact__paragraph fade ${isReveal ? "fade-up" : ""} `}>
                    <p>A big thanks for dropping by!</p>
                    <p>
                        If you have any questions, an idea, or anything you’d like for help you can shoot me
                        an email at <strong>robertjoshuazulueta@gmail.com</strong>
                    </p>
                </div>
                <div className={`icons fade ${isReveal ? "fade-up" : ""} `}>
                    <ul>
                        <li>
                            <a href="https://github.com/Ao-chi" target="_blank">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/robert-joshua-zulueta/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/_josh_zulueta" target="_blank">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
export default Contact;
