import React from 'react'
import '../css/projects.scss'
import Frame from './Frame'
import json from './projects.json'
import { getIcon } from '../utils/getIcon'

function Projects(){

    let projects = json.projects

    return (
        <>
        <div className="projects-container" id="projects">

            <h1 className="project-heading">Projects</h1>

            <div className="all-cards">

                {projects.map((item, index) => {
                    return (
                        <Frame Attributes={item.attributes} Title={item.title} Description={item.description} Icons={item.icons} IconFunction={getIcon} key={index} />
                    )
                })}

             </div>
        </div>
        </>
        )
}

export default Projects;
