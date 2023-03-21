import React from "react";
import Card from "../../components/Card/Card";
import data from "../../projects/projects.json";
import { useState, useEffect, useRef } from "react";

import "./projects-section.scss";

const ProjectsSection = () => {
    const [isReveal, setIsReveal] = useState(false);
    const cardRef = useRef(null);
    // const projRef = useRef(null);

    useEffect(() => {
        const revealCard = () => {
            const cardTop = cardRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardTop <= windowHeight * 0.9) {
                setIsReveal(true);
            } else {
                setIsReveal(!true);
            }
        };

        revealCard();
        const handleScroll = () => {
            revealCard();
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="project-sect" id="projects">
            <div className="project-sect__content">
                <div className="project-sect__heading">
                    <div className={`project-sect__overlay ${isReveal ? "show" : ""}`}></div>
                    <h1 className="project-sect__title">Projects</h1>
                </div>

                <div className="projects">
                    <div className="projects__container" ref={cardRef}>
                        {data &&
                            data?.map(({ id, image, description, link }, i) => {
                                return (
                                    <a
                                        href={link}
                                        target="_blank"
                                        key={i}
                                        className={`fade ${isReveal ? "fade-up" : ""}`}
                                    >
                                        <Card proj={{ id, image, description }} />
                                    </a>
                                );
                            })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
