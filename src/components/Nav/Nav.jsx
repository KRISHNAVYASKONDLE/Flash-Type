import React from "react";
import logo from "../../assets/logo.png";
import "./Nav.css";
const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">FlashType</p>
                <p className="nav-right"></p>
                <a
                    target="blank"
                    className="nav-sd-link"
                    href="https://krishnavyaskondle.github.io/search-domains/"
                    rel="noreferrer"
                >
                    My other App
                </a>
            </div>
        </div>
    );
};

export default Nav;
