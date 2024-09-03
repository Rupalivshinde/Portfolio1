import React from 'react'
import './About.css'
// import { FaFacebookF, FaLinkedin, FaGithub } from 'react-icons/fa';
function About() {
    return (
        <>

            <div className='about' id='about'>
                <div className="about-contain">
                    <h2>About <span>Me</span></h2>




                    <img className="about_img" src="https://elianajade.com/assets/user-image-Dc_rZ4ty.png" alt="" />
                    <div className="scroll">
                        <img src="https://elianajade.com/assets/circular-text-CzRyQliD.png" alt="" />

                    </div>
                    {/* <div className="img-contain">
                        <img src="https://elianajade.com/assets/dev-icon-C0vQYVIH.png" alt="" srcset="" />

                    </div> */}
                    <div className="pro-contain" id='skills'>
                        <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth. <br />
                        </p>
                        <div className="progress">
                            <h3>HTML & CSS <h6></h6></h3>

                        </div>
                        <div className="progress">
                            <h3>Bootstrap<h1></h1></h3>

                        </div>
                        <div className="progress">
                            <h3>Javascript<h2></h2></h3>

                        </div>
                        <div className="progress">
                            <h3>React.js<h4></h4></h3>

                        </div>
                    </div>
                </div>

            </div>





        </>

    )
}

export default About