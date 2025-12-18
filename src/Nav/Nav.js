import React, { useState, useRef, useEffect } from 'react';
import './Nav.css';
import { IoMdClose } from 'react-icons/io';
import { FaFacebookF, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const sideNavRef = useRef(null);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`nav ${scrolled ? 'scrolled' : ''}`}>
                <div className="logo">
                    <h2>Portfolio</h2>
                </div>
                <div className="menu">
                    <h4>MENU</h4>
                    <svg onClick={toggleNav} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <g id="Menu_Burger">
                            <path d="M3.563,4.063c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001Z"></path>
                            <path d="M3.563,12.501c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002Z"></path>
                            <path d="M3.563,20.939c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002Z"></path>
                        </g>
                    </svg>
                </div>
            </div>

            <div className={`side-nav ${isOpen ? 'open' : ''}`}>
                <div ref={sideNavRef} className="sidebar">
                    <div className="logo1">
                        <h2>Portfolio</h2>
                        <IoMdClose className='close-icon' onClick={toggleNav} />
                    </div>
                    <h3></h3>
                    <ul>
                        <li>
                            <Link to="home" smooth={true} duration={500} onClick={toggleNav}>Home</Link>
                        </li>
                        <h3></h3>
                        <li>
                            <Link to="about" smooth={true} duration={500} onClick={toggleNav}>About</Link>
                        </li>
                        <h3></h3>
                        <li>
                            <Link to="skills" smooth={true} duration={500} onClick={toggleNav}>Skills</Link>
                        </li>
                        <h3></h3>
                        <li>
                            <Link to="services" smooth={true} duration={500} onClick={toggleNav}>My Services</Link>
                        </li>
                        <h3></h3>
                        <li>
                            <Link to="work" smooth={true} duration={500} onClick={toggleNav}>My Work</Link>
                        </li>
                    </ul>
                    <h6>Welcome To My Portfolio, I Did This Website To See All My Projects, I Wish This Portfolio Like You</h6>
                    <div className="links">
                        <a href=""><FaFacebookF /></a>
                        <a href="https://www.linkedin.com/in/rupali-deshmukh-b65776280/" target="_blank"> <FaLinkedin /></a>
                        <a href="https://github.com/rupalideshmukh237" target="_blank"><FaGithub /></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;
