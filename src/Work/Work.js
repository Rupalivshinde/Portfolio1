import React from 'react'
import './Work.css'
import Footer from '../Footer/Footer'
function Work() {
    return (
        <>
            <div className='work' id='work'>
                <div className="work-container">
                    <h2>MY <span>Work</span></h2>
                    <p>Welcome to my web development portfolio! Explore a collection of projects showcasing my <br />expertise in front-end development.</p>
                    <div className="card-holder">
                        <div className="card-container">
                            <div className="card">
                                <img src="https://cdn.pixabay.com/photo/2024/07/15/12/27/ai-generated-8896730_1280.jpg" alt="" />
                                <h3>Website <span>Portfolio</span></h3>
                                {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
                                <div className="btn">
                                    <button > <a style={{ color: "white" }} href="https://rupalivshindeportfolio.netlify.app/" target='_blank'>Preview</a></button>
                                    <button>Github</button>
                                </div>
                            </div>

                        </div>

                        <div className="card-container">
                            <div className="card">
                                <img src="https://cdn.pixabay.com/photo/2023/08/23/09/39/sahara-8208094_640.jpg" alt="" />
                                <h3>Website <span>Pixabay</span></h3>
                                {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
                                <div className="btn">
                                    <button > <a style={{ color: "white" }} href="https://66c4ad8d01beac00a088eb55--guileless-raindrop-7e4dbe.netlify.app/" target='_blank'>Preview</a></button>
                                    <button>Github</button>
                                </div>
                            </div>

                        </div>
                        <div className="card-container">
                            <div className="card">
                                <img src="https://cdn.pixabay.com/photo/2023/07/27/07/42/cherry-cake-8152717_640.jpg" alt="" />
                                <h3>Website <span>Restaurant </span></h3>
                                <div className="btn">
                                    <button>Preview</button>
                                    <button>Github</button>
                                </div>
                            </div>

                        </div>
                        <div className="card-container">
                            <div className="card">
                                <img src="https://cdn.pixabay.com/photo/2020/09/15/20/35/hand-5574694_640.jpg" alt="" />
                                <h3>Website <span>Wedding planner</span></h3>
                                {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
                                <div className="btn">
                                    <button>Preview</button>
                                    <button>Github</button>
                                </div>
                            </div>

                        </div>

                        <div className="card-container">
                            <div className="card">
                                <img src="https://cdn.pixabay.com/photo/2020/08/31/00/33/guitar-5531027_640.jpg" alt="" />
                                <h3>Website <span>Song  Editor</span></h3>
                                {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
                                <div className="btn">
                                    <button>Preview</button>
                                    <button>Github</button>
                                </div>
                            </div>

                        </div>
                        <div className="card-container">
                            <div className="card">
                                <img src="https://cdn.pixabay.com/photo/2016/03/30/05/41/music-1290087_640.jpg" alt="" />
                                <h3>Website <span>Music player</span></h3>
                                <div className="btn">
                                    <button>Preview</button>
                                    <button>Github</button>
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