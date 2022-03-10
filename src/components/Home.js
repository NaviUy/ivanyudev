import React from 'react'
import landingPhoto from '../images/Photo-6.jpg'

import '../css/home.scss'
import { Link } from 'react-scroll'

function Home(){

    return(
        <div className="home-container" id="home">
            <div className='spacer'></div>
            <div className='content-container'>
                <img className="landing-photo fade-in-image" src={landingPhoto} />
                <div className="wrapper">
                    <div id='slide'>
                            <h4 className="landing-text">A little about me...</h4>
                            <p className="landing-paragraph">My name is Ivan Yu. I am an aspiring Web Developer who recently graduated from the California State University of Los Angeles.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
