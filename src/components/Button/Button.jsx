import React from "react";
import "./button.scss";

const Button = ({ type, onClick, children, className = "" }) => {
    const handleClick = onClick || (() => {});
    return (
        <button className={className} type={type} onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;
