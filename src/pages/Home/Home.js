import React from "react";
import { useState, useEffect, useRef } from "react";
import Hero from "../../content/Hero/Hero";
import About from "../../content/About/About";
import ProjectsSection from "../../content/Projects/ProjectsSection";
import Contact from "../../content/Contact/Contact";

const Home = () => {
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            console.log(scrollPosition);
            if (scrollPosition > 0) {
                setIsNavbarFixed(true);
            } else {
                setIsNavbarFixed(false);
            }
        };

        const throttledHandleScroll = throttle(handleScroll, 0);

        window.addEventListener("scroll", throttledHandleScroll);

        return () => {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);

    const throttle = (callback, delay) => {
        let timeoutId = null;
        return (...args) => {
            if (timeoutId === null) {
                timeoutId = setTimeout(() => {
                    callback.apply(this, args);
                    timeoutId = null;
                }, delay);
            }
        };
    };
    return (
        // <main className={`${isNavbarFixed ? "fixed-top" : ""}`}>
        <>
            <Hero />
            <About />
            <ProjectsSection />
            <Contact />
        </>
        // </main>
    );
};

export default Home;
