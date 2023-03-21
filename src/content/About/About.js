import React from "react";
import { useState, useEffect, useRef } from "react";

import "./about.scss";

const About = () => {
    const [isReveal, setIsReveal] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const revealAbout = () => {
            const aboutTop = aboutRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (aboutTop < windowHeight * 0.8) {
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

    const about = ["Ab", "out", "me"];

    return (
        <section className="about" id="about" ref={aboutRef}>
            <div className="about__content">
                <div className="about__me about-me ">
                    {about.map((text, i) => {
                        return (
                            <span
                                key={`${text} + ${i}`}
                                className={`about-me__span ${isReveal ? "reveal-left" : ""}`}
                            >
                                {text}
                            </span>
                        );
                    })}
                </div>

                <div className={`about__text ${isReveal ? "reveal-right" : ""}`}>
                    <h2>Hi there!</h2>
                    <p>
                        I’m <strong>Josh Zulueta</strong> an aspiring front end developer located at the
                        Philippines. I recently discovered my passion in building websites on my last year in
                        college and I never regret it!
                    </p>
                    <p>
                        I enjoy finding creative solutions to problems and crafting seamless user experiences.
                    </p>
                    <p>Here are the technologies that I’m currently using: </p>
                </div>
            </div>
        </section>
    );
};

export default About;
