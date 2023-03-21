import React from "react";

import "./footer.scss";
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="footer">
            <p>Designed and Built</p>
            <p>
                by <a href="/">Josh Zulueta</a>
            </p>
        </footer>
    );
};

export default Footer;
