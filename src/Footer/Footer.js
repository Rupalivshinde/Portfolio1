import React from 'react'
import './Footer.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
function Footer() {
    return (
        <>
            <div className="footer" id='contact'>
                <div className="icon">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                    <a href="https://www.linkedin.com/in/rupali-deshmukh-b65776280/" target="_blank"> <FaLinkedin /></a>
                    <a href="https://github.com/rupalideshmukh237" target="_blank"><FaGithub /></a>
                </div>
                <p>All rights reserved | This template is made with by <span> Rupali Deshmukh</span></p>
            </div>

        </>

    )
}

export default Footer