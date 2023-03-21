import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import Button from "../Button/Button";
import { useEffect, useState } from "react";

import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

const Header = ({ className = "fixed" }) => {
    const [isActive, setIsActive] = useState(false);
    const [isNavActive, setIsNavActive] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsActive(!isActive);
        setIsNavActive(!isNavActive);
        // console.log(isActive);
    };

    const handleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        const selectedTheme = isDarkTheme ? "dark-mode" : "light-mode";
        document.body.classList.toggle("light-mode", !isDarkTheme);
        document.body.classList.toggle("dark-mode", isDarkTheme);
        localStorage.setItem("selectedTheme", selectedTheme);
    };

    useEffect(() => {
        const selectedTheme = localStorage.getItem("selectedTheme");
        if (selectedTheme === "light-mode") {
            setIsDarkTheme(isDarkTheme);
            document.body.classList.add("light-mode");
        } else {
            setIsDarkTheme(!isDarkTheme);
            document.body.classList.add("dark-mode");
        }
    }, []);

    useEffect(() => {
        const body = document.querySelector("body");
        if (isNavActive) {
            body.classList.add("no-scroll");
        } else {
            body.classList.remove("no-scroll");
        }
    }, [isNavActive]);

    return (
        <header className={`${className}`}>
            <div className="container">
                <a href="/" className="icon">
                    <Logo className="logo" />
                </a>
                <Button
                    type="button"
                    className={`menu-icon ${isActive ? "active" : ""}`}
                    onClick={handleClick}
                >
                    <div className="hamburger"></div>
                    <div className="hamburger"></div>
                    <div className="hamburger"></div>
                </Button>
                <nav className={`nav ${isNavActive ? "active reveal-left" : "exit-nav"}`}>
                    <ul className={`nav-container ${isNavActive ? "active" : ""}`}>
                        <li className="nav-container__list">
                            <a href="/#about" className="nav-container__items">
                                About
                            </a>
                        </li>
                        <li className="nav-container__list">
                            <a href="/#projects" className="nav-container__items">
                                Projects
                            </a>
                        </li>
                        <li className="nav-container__list">
                            <a href="/#contact" className="nav-container__items">
                                Contact
                            </a>
                        </li>
                        <li className="nav-container__list">
                            <Button
                                type="button"
                                className="nav-container__list theme-btn"
                                onClick={handleTheme}
                            >
                                <FontAwesomeIcon icon={faCircleHalfStroke} />
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
