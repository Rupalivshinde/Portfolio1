import React from 'react'
import './Work.css'
import Footer from '../Footer/Footer'
function Work() {
    return (
        <>
            <div className='work' id='work'>
                <div className="work-container">
                    <h2>MY <span>Work</span></h2>
                    <p>Welcome to my web development 
                        portfolio! Explore a collection of projects showcasing my <br />expertise in front-end development.</p>
                    <div className="card-holder">
                    <div className="card-container">
                            <div className="card">
                                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/56/71/59/atmosphere.jpg?w=600&h=-1&s=1" alt="" />
                                <h3>Website <span>Restaurant</span></h3>
                                {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
                                <div className="btn">
                                    <button> <a href='https://sem-restaurant.netlify.app/ '>Preview</a></button>
                                    <button> <a href='https://github.com/Rupalivshinde/Restaurant'>Github</a></button>
                                </div>
                            </div>

                        </div>
                      

                        <div className="card-container">
                            <div className="card">
                                <img src="https://cdn.pixabay.com/photo/2024/03/30/19/29/ai-generated-8665327_640.png" alt="" />
                                <h3>Website <span>PrimeFit-club</span></h3>
                                {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
                                <div className="btn">
                                    <button > <a  href="https://rupalivshinde.github.io/gym/" target='_blank'>Preview</a></button>
                                    <button> <a href='https://github.com/Rupalivshinde/gym'>Github</a></button>
                                </div>
                            </div>

                        </div>
                        <div className="card-container">
                            <div className="card">
                                <img src="https://cdn.pixabay.com/photo/2024/07/15/12/27/ai-generated-8896730_1280.jpg" alt="" />
                                <h3>Website <span>Portfolio</span></h3>
                                {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
                                <div className="btn">
                                    <button > <a  href="https://rupalivshindeportfolio.netlify.app/" target='_blank'>Preview</a></button>
                                    <button> <a  href='https://github.com/Rupalivshinde/Port'>Github</a> </button>
                                </div>
                            </div>

                        </div>
                        <div className="card-container">
                            <div className="card">
                                <img src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg" alt="" />
                                <h3>Website <span>SunShine-Travel </span></h3>
                                <div className="btn">
                                    <button>  <a href='https://66c4ad8d01beac00a088eb55--guileless-raindrop-7e4dbe.netlify.app/'>Preview</a></button>
                                    <button> <a href=''>Github</a></button>
                                </div>
                            </div>

                        </div>
                        
                        <div className="card-container">
                            <div className="card">
                                <img src="https://cdn.pixabay.com/photo/2022/02/20/21/18/laptop-7025342_960_720.jpg" alt="" />
                                <h3>Website <span>Netflix-Clone</span></h3>
                                {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
                                <div className="btn">
                                    <button> <a href=''>Preview</a></button>
                                    <button> <a href='https://github.com/Rupalivshinde/Netflix-clone'>Github</a></button>
                                    
                                </div>
                            </div>

                        </div>

                       
                        <div className="card-container">
                            <div className="card">
                                <img src="https://media.istockphoto.com/id/1243760572/photo/heat-wave-concrept.webp?s=1024x1024&w=is&k=20&c=aNyp4atd-QF1Pf7PG69cP0moyao0Ip2S9iXQIq9Fxls=" alt="" />
                                <h3>Website <span>Weather</span></h3>
                                <div className="btn">
                                    <button> <a href='https://rupalivshinde.github.io/Weather/'>Preview</a></button>
                                    <button> <a href='https://github.com/Rupalivshinde/Weather'>Github</a></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />




            </div>

        </>

    )
}

export default Work