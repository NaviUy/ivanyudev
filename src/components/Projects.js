import React from 'react'
import '../css/projects.scss'
import { Polaroid } from 'instantphotoframe'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons'

function Projects(){

    return (
        <>
        <div className="projects-container" id="projects">

            <h1 className="project-heading">Projects</h1>

            <div className="all-cards">
                    <div className="single-card">
                        <Polaroid size="6"
                        imgurl="https://camo.githubusercontent.com/3b9118d9bae71245164d63b3457600853ef9aa491ff74e9f8d545b87673f505c/68747470733a2f2f692e696d6775722e636f6d2f485951334d774c2e706e67"
                        photoScale=".65"
                        positionTop="-15"/>
                        <div className="details">
                            <div className="single-card-title">Instant Photo Frame</div>
                            <div className="single-card-description">NPM component. Instant film front-end component made easy.</div>
                            <div className="link-container">
                                <a href="https://github.com/NaviUy/instantphotoframe">
                                    <FontAwesomeIcon className="project-icon" icon={faGithub} size="2x"/>
                                </a>
                                <a href="https://www.npmjs.com/package/instantphotoframe">
                                    <FontAwesomeIcon className="project-icon" icon={faNpm} size="2x"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="single-card">
                        <Polaroid size="6"
                        imgurl="https://github.com/NaviUy/uvsa-spark/raw/master/demo.gif"
                        photoScale="3"/>
                        <div className="details">
                            <div className="single-card-title">UVSA Spark</div>
                            <div className="single-card-description">Developed web application platform allowing students to interact with one another as part of the annual UVSA Summit (virtual due to pandemic).</div>
                            <div className="link-container">
                                <a href="https://github.com/NaviUy/uvsa-spark">
                                    <FontAwesomeIcon className="project-icon" icon={faGithub} size="2x"/>
                                </a>
                                <a href="https://www.npmjs.com/package/instantphotoframe">
                                    <div className="demo">Demo</div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="single-card">
                        <Polaroid size="6"
                        imgurl="https://i.imgur.com/X2otIRi.png"
                        photoScale="3"
                        positionTop="50"
                        positionLeft="-60"/>
                        <div className="details">
                            <div className="single-card-title">Smart Eye Drops</div>
                            <div className="single-card-description">Project providing doctors with useful information to adjust and improve patients eye care.</div>
                            <div className="link-container">
                                <a href="https://github.com/FengYou97/SmartEyeDrops">
                                    <FontAwesomeIcon className="project-icon" icon={faGithub} size="2x"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
        </>
        )
}

export default Projects;
