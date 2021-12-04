import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Polaroid } from 'instantphotoframe'
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

function Frame({ Attributes, Title, Description, Icons }) {
    let { size, imgurl, photoScale, positionTop, positionLeft } = Attributes

    return (
        <div className="single-card">
            <Polaroid size={size} imgurl={imgurl} photoScale={photoScale} positionTop={positionTop} positionLeft={positionLeft} />
                <div className="details">
                <div className="single-card-title">{Title}</div>
                <div className="single-card-description">{Description}</div>
                <div className="link-container">
                    {Icons.map((icon, index) => {
                        if(icon.icon !== "demo"){
                            return (
                                <a href={icon.href} key={index}>
                                    <FontAwesomeIcon className="project-icon" icon={getIcon(icon.icon)} size={icon.size}/>
                                </a>
                                )
                        } else {
                            return(
                                <a href={icon.href} key={index}>
                                    <div className="demo">Demo</div>
                                 </a>
                            )
                        }

                    })}
                </div>
            </div>
        </div>
    )
}

function getIcon(icon){
    switch(icon){
        case "faGithub":
            return (faGithub);
        case "faNpm":
            return(faNpm)
        default:
            return
    }
}

export default Frame
