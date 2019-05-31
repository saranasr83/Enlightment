import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import Expander from "../Expander"


const Navbar = props => (
    // Depending on the current path, this component sets the "active" class on the appropriate navigation link item
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <nav className="navbar navbar-expand-lg topnav">
        <div>
            {/* <div className="hide">
                <Expander>
                    {({ expanded, handleExpandChange }) => (
                        <div>
                            <div onClick={handleExpandChange}>
                                <i className="fa fa-bars"></i>
                            </div>
                            {expanded && (
                                    <ul style={{listStyleType:"none"}}>
                                        <li
                                            className={
                                                window.location.pathname === "/" ||
                                                    window.location.pathname === "/home"
                                                    ? "nav-item active"
                                                    : "nav-item"
                                            }>
                                            <a className="nav-link" href="/">
                                                Home
                                            </a>
                                        </li>
                                        <li
                                            className={
                                                window.location.pathname === "/teaching"
                                                    ? "nav-item active"
                                                    : "nav-item"
                                            }>
                                            <a className="nav-link" href="/teaching">
                                                About the Class
                                            </a>
                                        </li>
                                        <li
                                            className={
                                                window.location.pathname === "/about"
                                                    ? "nav-item active"
                                                    : "nav-item"
                                            }>
                                            <a className="nav-link" href="/about">
                                                About the Teacher
                                            </a>
                                        </li>

                                        <li
                                            className={
                                                window.location.pathname === "/pastevents"
                                                    ? "nav-item active"
                                                    : "nav-item"
                                            }>
                                            <a className="nav-link" href="/pastevents">
                                                Past Events
                                            </a>
                                        </li>
                                    </ul>
                            )}
                        </div>
                    )}
                </Expander>
            </div> */}

            <div>

                <ul className="navbar-nav show">
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
                            About the Class
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
                    {/* <li
                className={
                    window.location.pathname === "/meditation"
                    ? "nav-item active"
                    : "nav-item"
                }>
                    <Link className="nav-link" to="/meditation">
                        Why Meditation
                    </Link>
                </li> */}

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
        </div>
    </nav>

)



export default Navbar;