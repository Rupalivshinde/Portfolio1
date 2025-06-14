import React, { useEffect, useState } from 'react'
import './Home.css'

import { FaArrowDown } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";
function Home() {
    const [text, setText] = useState("Frontend Developer!");

    useEffect(() => {
        const texts = ["Frontend Developer!", "Web Designer!"];
        let index = 0;
        const interval = setInterval(() => {
            setText(texts[index]);
            index = (index + 1) % texts.length;
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>


            <div className="circle">
                <img src="https://elianajade.com/assets/profile-img-B51wlMEV.png" alt="" />
            </div>
            <div className='home' id='home'>
                <h2>Hello There,</h2>
                <h1>My Name's <span>Rupali Shinde</span></h1>
                <br />
                <h1>And I'm a <span className='span1'>{text}</span> </h1>
                <p>Welcome To My Portfolio, I Did This Website To See All My Projects, I Wish This Portfolio Like You</p>
                <button> <a href="https://drive.google.com/file/d/1mbWEk9pDYn9IEKsOJi-7HpthHFqSzfFX/view?usp=sharing" target='_blank'>Download CV</a><FaArrowDown /></button>

            </div>

            <div className="footer-nav">
                <div className="small-nav">
                    <a href="#home"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Home"><path d="M19.37,10.22l-6.2-7.6a1.5,1.5,0,0,0-2.33-.01L4.63,10.22a2.5,2.5,0,0,0-.57,1.59v7.63a2.507,2.507,0,0,0,2.5,2.5H17.44a2.507,2.507,0,0,0,2.5-2.5V11.81A2.5,2.5,0,0,0,19.37,10.22ZM10,20.94v-5.5a1.5,1.5,0,0,1,1.5-1.5h1a1.5,1.5,0,0,1,1.5,1.5v5.5Zm8.94-1.5a1.511,1.511,0,0,1-1.5,1.5H15v-5.5a2.5,2.5,0,0,0-2.5-2.5h-1A2.5,2.5,0,0,0,9,15.44v5.5H6.56a1.511,1.511,0,0,1-1.5-1.5V11.81a1.474,1.474,0,0,1,.34-.95l6.22-7.61A.474.474,0,0,1,12,3.06a.479.479,0,0,1,.39.19l6.21,7.61a1.474,1.474,0,0,1,.34.95Z"></path></g></svg></a>
                    <a href="#about"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M235.4 172.2c0-11.4 9.3-19.9 20.5-19.9 11.4 0 20.7 8.5 20.7 19.9s-9.3 20-20.7 20c-11.2 0-20.5-8.6-20.5-20zm1.4 35.7H275V352h-38.2V207.9z"></path><path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path><path d="M235.4 172.2c0-11.4 9.3-19.9 20.5-19.9 11.4 0 20.7 8.5 20.7 19.9s-9.3 20-20.7 20c-11.2 0-20.5-8.6-20.5-20zm1.4 35.7H275V352h-38.2V207.9z"></path><path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path><path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path></svg></a>
                    <a href="#services"><MdMiscellaneousServices className='service' /></a>
                    <a href="#work"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" r="26" stroke-miterlimit="10" stroke-width="10"></circle><circle cx="346" cy="256" r="26" stroke-miterlimit="10" stroke-width="10"></circle><circle cx="166" cy="256" r="26" stroke-miterlimit="10" stroke-width="10"></circle><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="42" d="M160 368 32 256l128-112m192 224 128-112-128-112"></path></svg></a>

                    <a href="#contact"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8 0 20.4 7.1 38.4 17.5 50.9L99.7 157 84 159.9c-13.7 2.6-23.8 9.9-32.2 21.5-8.5 11.5-14.9 27.5-19.4 45.8-8.2 33.6-9.9 74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7-4-18.5-10.2-34.4-18.7-45.9-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1 0-39.2-24.8-68.8-52.4-68.8-2.9 0-4.7-.1-5.2-.1zM440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31 31-13.77 31-31-13.8-31-31-31zM311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9 0-3.07.3-6.08.8-9H311zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31z"></path></svg></a>
                </div>
            </div>



        </>

    )
}

export default Home