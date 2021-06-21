import React from 'react'
import landingPhoto from '../images/Photo-6.jpg'

import '../css/home.scss'
import { Link } from 'react-scroll'

function Home(){

    //handle parallax
    window.addEventListener('scroll', () => handleScroll())

    function handleScroll(){

        const targets = document.querySelectorAll('.scroll')
        let scrolled = window.pageYOffset;
        let rate = 70 / scrolled;

        // console.log(targets)
        if(window.innerWidth < 540)
        for(let target of targets){
            // console.log("smaller")
            target.style.opacity = rate
            if(target.style.objectPosition !== undefined){target.style.objectPosition = "-150px " + ((0 - scrolled) * 2) + "px"}
            // console.log(target)
        }

        if(window.innerWidth > 540){
            for(let target of targets){
                // console.log("bigger")
                target.style.opacity = rate

                if(target.style.objectPosition !== undefined){target.style.objectPosition = "-170px " + ((0 - scrolled) * 2) + "px"}

            }
        }

    }

    return(
        <div className="home-container" id="home">
            {/* <h1 className="home-heading"> this is the home page </h1> */}
            <div className="spacer"></div>
            <div className="heading-text-container">
                    <h1 className="heading-text-big-screen scroll">Hi, I'm Ivan!</h1>
            </div>
            <div className="content-container">
                <img className="landing-photo scroll" src={landingPhoto} alt="landing"/>
                <div className="text-container">
                    <h4 className="landing-text scroll">A little about me...</h4>
                    <p className="landing-paragraph scroll">My name is Ivan Yu. I am an aspiring Software Developer who recently graduated from the California State University of Los Angeles.</p>
                </div>
            </div>
            <div className="landing-arrow">
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    <p className="landing-down-arrow-text">Check out some of my projects.</p>
                    <a href="/">
                        <div className="arrow-down-alignment">
                            <i className="arrow down"/>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Home;
