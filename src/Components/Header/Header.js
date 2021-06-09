import React from "react";
import logo from './logo.png'; 

const Header = (props) => {
    return (
        <header className = "main-header">
                <div className = "header-logo">
                    <img src={logo} alt="logo"></img>
                </div>
        </header>
    );
};

export default Header;