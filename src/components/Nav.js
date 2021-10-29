import React, { useState } from 'react'
import '../css/nav.scss'
import { Link } from 'react-scroll'

import logo from '../images/cute-logo.png'

function Nav(){
    const [toggle, setToggle] = useState({visibility: "hidden"});

    function toggleHandler(){
        if(toggle.visibility === "hidden"){
            setToggle({visibility: "visible"})
            document.querySelector(".menu-container").classList.add("active")
            document.querySelector(".x-button").classList.add("active")
            document.querySelector(".nav-list").classList.add("active")
        } else {
            setToggle({visibility: "hidden"})
            document.querySelector(".menu-container").classList.remove("active")
            document.querySelector(".x-button").classList.remove("active")
            document.querySelector(".nav-list").classList.remove("active")
        }
    }

    return (
        <>
        <div className="container-bar">
            <div className="navigation-bar">
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    <img className="logo" src={logo} alt="logo"/>
                </Link>
                <Link
                    className="logo-a"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                        <h1 className="logo-text">IVAN YU</h1>
                    </Link>
                <div className="hamburger-container" onClick={() => toggleHandler()}>
                    <div className="hamburger"></div>
                    <div className="hamburger"></div>
                    <div className="hamburger"></div>
                </div>
                <div className="fullsize-menu-container">
                <ul className="nav-list-fullsize">
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>Home</Link>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>Projects</Link>
                    <Link
                        activeClass="active"
                        to="resume"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>Resume</Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>Contact</Link>
                    {/* <li><a href="/">Home</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Resume</a></li>
                    <li><a href="/">Photography</a></li>
                    <li><a href="/">Contact</a></li> */}
                </ul>
            </div>
            </div>
        </div>
        <div className="menu-container" style={toggle}>
            <div className="x-button" onClick={() => toggleHandler()}>X</div>
            <ul className="nav-list">
                {/* <li><a href="/">Home</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Resume</a></li>
                <li><a href="/">Photography</a></li>
                <li><a href="/">Contact</a></li> */}
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => toggleHandler()}>Home</Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => toggleHandler()}>Projects</Link>
                <Link
                    activeClass="active"
                    to="resume"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => toggleHandler()}>Resume</Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => toggleHandler()}>Contact</Link>
            </ul>
        </div>

        </>
    )
}

export default Nav;
