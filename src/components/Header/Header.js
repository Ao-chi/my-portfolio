import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import Button from "../Button/Button";
import { useEffect, useState } from "react";

import "./header.scss";

const Header = ({ className = "fixed" }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        console.log(isActive);
    };

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
                <nav className="nav">
                    <ul className="nav-container">
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
                            <a href="/" className="nav-container__items"></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
