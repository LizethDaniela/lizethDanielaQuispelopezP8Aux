import React from 'react';
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>MOVIE STORE</h1>
            <section className="links">
               <a href="#">HOME</a>
               <a href="#">ABOUT</a>
            </section>
        </nav>
    );
};

export default NavBar;