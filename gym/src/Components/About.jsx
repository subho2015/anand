import React from "react";
import aboutimage from '../images/about.png';

function About(){
    return(
        <div id='about'>
            <div className='about-image'>
                <img src= {aboutimage} alt='' />
            </div>
            <div className="about-text">
                <h1>LEARN MORE ABOUT US</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                <button>READ MORE</button>
            </div>

        </div>
    )
}

export default About;