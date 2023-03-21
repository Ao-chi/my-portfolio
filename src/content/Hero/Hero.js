import { useState, useEffect } from "react";
import "./hero.scss";

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((prevIndex) => prevIndex + 1);
        }, 200);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="hero">
            <div className="hero__heading">
                <h1 className={`fade ${activeIndex >= 0 ? "fade-up" : ""}`}>
                    Engineering Delightful User Journeys
                </h1>
                <p className={`hero-text fade ${activeIndex >= 1 ? "fade-up" : ""}`}>
                    A Front-end developer with a passion for crafting beautiful and intuitive interfaces. I'm
                    all about creating user-friendly interfaces that make people smile
                </p>
            </div>
        </section>
    );
};

export default Hero;
