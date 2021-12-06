import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Polaroid } from 'instantphotoframe'
import React from 'react'

function Frame({ Attributes, Title, Description, Icons, IconFunction }) {
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
                                    <FontAwesomeIcon className="project-icon" icon={IconFunction(icon.icon)} size={icon.size}/>
                                </a>
                                )
                        } else {
                            return (
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

export default Frame
