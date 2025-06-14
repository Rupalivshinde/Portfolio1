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
                                    <button > <a  href="https://rupalivshindeportfolio.netlify.app/" target='_blank'>Preview</a></button>
                                    <button> <a  href="https://github.com/Rupalivshinde/Port" target='_blank'>Github</a></button>
                                </div>
                            </div>

                        </div>

                       
                        <div className="card-container">
                            <div className="card">
                                <img src="https://cdn.pixabay.com/photo/2023/07/27/07/42/cherry-cake-8152717_640.jpg" alt="" />
                                <h3>Website <span>SEMRestaurant </span></h3>
                                <div className="btn">
                                    <button > <a href='https://sem-restaurant.netlify.app/'>Preview</a>  </button>
                                    <button> <a href='https://github.com/Rupalivshinde/Restaurant'>Github</a></button>
                                </div>
                            </div>

                        </div>
                        <div className="card-container">
                            <div className="card">
                                <img src="https://fitclub-1my.pages.dev/static/media/image3.69484cb0ee7687a8c28b.png" alt="" />
                                <h3>Website <span>PrimeFit Club</span></h3>
                                {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
                                <div className="btn">
                                    <button> <a href='https://rupalivshinde.github.io/gym/'>Preview</a></button>
                                    <button> <a href='https://github.com/Rupalivshinde/gym'>Github</a></button>
                                </div>
                            </div>

                        </div>

                        <div className="card-container">
                            <div className="card">
                                <img src="https://images.prismic.io/truekind/Zuq-1LVsGrYSvhqc_s764qjse3.jpg?auto=format,compress&w=640&fm=webp&q=95" alt="" />
                                <h3>Website <span>Truekind</span></h3>
                                {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
                                <div className="btn">
                                    <button> <a href='https://truekind-skincareweb.netlify.app/'>Preview</a></button>
                                    <button><a href='https://github.com/Rupalivshinde/Truekind'>Github</a></button>
                                </div>
                            </div>

                        </div>
                        <div className="card-container">
                            <div className="card">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHOkRCZ_JhvWPgW6KZWvOwJ1AdeAgQ0R-zw&s" alt="" />
                                <h3>Website <span>Netflix-clone</span></h3>
                                <div className="btn">
                                    <button> <a href='https://funny-souffle-c9edd1.netlify.app/'>Preview</a></button>
                                    <button> <a href='https://github.com/Rupalivshinde/netflix-clone'>Github</a></button>
                                </div>
                            </div>

                        </div>
                         <div className="card-container">
                            <div className="card">
                                <img src="https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4=" alt="" />
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