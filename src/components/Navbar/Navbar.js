import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom"


const Navbar = props => (
    // Depending on the current path, this component sets the "active" class on the appropriate navigation link item
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <nav className="navbar navbar-expand-lg">
        <div>
            <ul className="navbar-nav">
                <li
                className={
                    window.location.pathname === "/" ||
                    window.location.pathname === "/home"
                    ? "nav-item active"
                    : "nav-item"
                }>
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                </li>
                <li
                className={
                    window.location.pathname === "/teaching"
                    ? "nav-item active"
                    : "nav-item"
                }>
                    <Link className="nav-link" to="/teaching">
                        The Teachings
                    </Link>
                </li>
                <li
                className={
                    window.location.pathname === "/about"
                    ? "nav-item active"
                    : "nav-item"
                }>
                    <Link className="nav-link" to="/about">
                        About the Teacher
                    </Link>
                </li>
                <li
                className={
                    window.location.pathname === "/meditation"
                    ? "nav-item active"
                    : "nav-item"
                }>
                    <Link className="nav-link" to="/meditation">
                        Why Meditation
                    </Link>
                </li>
                <li
                className={
                    window.location.pathname === "/pastevents"
                    ? "nav-item active"
                    : "nav-item"
                }>
                    <Link className="nav-link" to="/pastevents">
                        Past Events
                    </Link>
                </li>

            </ul>
        </div>

    </nav>

)



export default Navbar;